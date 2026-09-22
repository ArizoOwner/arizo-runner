/**
 * ⚡ Arizo Self — Ultra-Fast Sub-100ms Telegram Clock Engine (GitHub Actions)
 * 
 * ویژگی‌های کلیدی این نسخه:
 * ۱. استخر اتصالات زنده (Persistent Warm Connection Pool):
 *    سوکت‌های TCP و سشن‌های کلاینت در حافظه باز می‌مانند و هر دقیقه قطع نمی‌شوند.
 *    در نتیجه زمان آپدیت از ۵۰۰ میلی‌ثانیه به ۲۰ تا ۴۰ میلی‌ثانیه کاهش می‌یابد!
 * 
 * ۲. استراتژی پیش‌بارگذاری (Pre-fetch در ثانیه ۵۸):
 *    لیست کاربران و فرمت ساعت دقیقه بعد، ۲ ثانیه زودتر آماده می‌شود تا رأس ثانیه ۰۰.۰۰۰
 *    کوچک‌ترین تأخیر شبکه‌ای وجود نداشته باشد.
 * 
 * ۳. ارسال موازی (Parallel Execution):
 *    تمامی کاربران به صورت همزمان با Promise.allSettled آپدیت می‌شوند.
 * 
 * ۴. استمرار ۲۴ ساعته:
 *    قبل از اتمام سقف مجاز، به صورت خودکار رانر بعدی را در گیت‌هاب احضار می‌کند.
 */

import { TelegramClient, Api } from 'telegram';
import { StringSession } from 'telegram/sessions/index.js';
import { NewMessage } from 'telegram/events/index.js';
import { CustomFile } from 'telegram/client/uploads.js';
import { getStylizedTime, renderDynamicBio, isSleepTime } from '../src/clock.js';
import { decryptSession } from '../src/crypto.js';

const CLOUDFLARE_URL = (process.env.CLOUDFLARE_URL || '').replace(/\/+$/, '');
const RUNNER_SECRET = process.env.RUNNER_SECRET || process.env.ADMIN_PASSWORD || 'admin_liquid_secret_2026';
const API_ID = parseInt(process.env.API_ID || '2040');
const API_HASH = process.env.API_HASH || 'b18441a1ff607e10a989891a5462e627';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;

const MAX_RUN_MINUTES = parseInt(process.env.RUNNER_DURATION_MINUTES || '320');

if (!CLOUDFLARE_URL) {
  console.error('❌ Error: CLOUDFLARE_URL environment variable is required.');
  process.exit(1);
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('⚡ Arizo Self — Ultra-Fast Sub-100ms Engine Started');
console.log(`🌐 Worker URL: ${CLOUDFLARE_URL}`);
console.log(`⏱️ Duration: ${MAX_RUN_MINUTES} minutes (~${(MAX_RUN_MINUTES / 60).toFixed(1)} hours)`);
console.log(`📱 Client App ID: ${API_ID} (Official Telegram Desktop)`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

/**
 * نرمال‌سازی و پاکسازی ورودی‌های لیست سکوت (حذف @، لینک‌های t.me و فاصله‌ها)
 */
function cleanMuteTarget(raw) {
  if (!raw) return '';
  let str = String(raw).trim().toLowerCase();
  str = str.replace(/^https?:\/\/(www\.)?t\.me\//i, '');
  str = str.replace(/^t\.me\//i, '');
  str = str.replace(/^tg:\/\/resolve\?domain=/i, '');
  str = str.replace(/^@+/, '');
  str = str.replace(/^id[:\s=]+/, '');
  return str.trim();
}

/**
 * تبدیل خودکار یوزرنیم‌های اضافه شده در لیست سکوت به آیدی عددی تلگرام در پس‌زمینه
 */
function resolveMutedUsernames(entry) {
  if (!entry || !entry.client || !entry.client.connected) return;
  const list = entry.settings?.mutedUsers;
  if (!Array.isArray(list) || list.length === 0) return;

  for (const raw of list) {
    const clean = cleanMuteTarget(raw);
    if (!clean) continue;
    // اگر آیدی عددی نباشد، یعنی یک یوزرنیم است
    if (!/^-?\d+$/.test(clean)) {
      entry.client.getEntity(clean).then(ent => {
        if (ent && ent.id) {
          const idStr = ent.id.toString();
          if (!entry.settings.mutedUsers.includes(idStr)) {
            entry.settings.mutedUsers.push(idStr);
            console.log(`🔇 [${clean}] Resolved muted username to Telegram ID: ${idStr}`);
          }
          if (entry.localMutedUsers) entry.localMutedUsers.add(idStr);
        }
      }).catch(() => {});
    }
  }
}

/**
 * حذف چندمرحله‌ای و تضمینی پیام از فرد بی‌صدا شده در تمام انواع چت‌ها (پیوی، سوپرگروه، کانال)
 */
async function deleteTelegramMessage(client, message, username = '') {
  const msgId = message.id;
  let deleted = false;

  // ۱. حذف در کانال یا سوپرگروه (Supergroup / Channel)
  if (message.isChannel || (message.peerId instanceof Api.PeerChannel)) {
    try {
      const channelPeer = await client.getInputEntity(message.peerId).catch(() => message.peerId);
      await client.invoke(new Api.channels.DeleteMessages({
        channel: channelPeer,
        id: [msgId]
      }));
      deleted = true;
      console.log(`✅ [${username}] Muted message #${msgId} deleted via channels.DeleteMessages`);
    } catch (err1) {
      console.warn(`⚠️ [${username}] channels.DeleteMessages failed: ${err1.message}`);
    }
  }

  // ۲. حذف دوطرفه در پیوی و گروه‌های عادی (Private Chat / Basic Group)
  if (!deleted) {
    try {
      await client.invoke(new Api.messages.DeleteMessages({
        id: [msgId],
        revoke: true
      }));
      deleted = true;
      console.log(`✅ [${username}] Muted message #${msgId} deleted via messages.DeleteMessages`);
    } catch (err2) {
      console.warn(`⚠️ [${username}] messages.DeleteMessages failed: ${err2.message}`);
    }
  }

  // ۳. روش کمکی GramJS deleteMessages با مشخص کردن مخاطب چت
  if (!deleted) {
    try {
      const chatTarget = message.peerId || message.chatId;
      await client.deleteMessages(chatTarget, [msgId], { revoke: true });
      deleted = true;
      console.log(`✅ [${username}] Muted message #${msgId} deleted via client.deleteMessages`);
    } catch (err3) {
      console.warn(`⚠️ [${username}] client.deleteMessages failed: ${err3.message}`);
    }
  }

  // ۴. آخرین تلاش با متد مستقیم Message
  if (!deleted) {
    try {
      await message.delete({ revoke: true });
      deleted = true;
      console.log(`✅ [${username}] Muted message #${msgId} deleted via message.delete`);
    } catch (err4) {
      console.error(`❌ [${username}] All delete methods failed for message #${msgId}: ${err4.message}`);
    }
  }

  return deleted;
}

/**
 * مدیریت استخر کلاینت‌های زنده تلگرام (Persistent Connection Pool)
 */
class TelegramConnectionPool {
  constructor() {
    this.clients = new Map(); // username -> { client, sessionEncrypted, lastTime, connected }
  }

  async getOrCreateClient(username, sessionEncrypted, userSettings = null) {
    let entry = this.clients.get(username);

    // اگر کاربر قبلاً بوده اما سشن تغییر کرده است، اتصال قبلی را می‌بندیم
    if (entry && entry.sessionEncrypted !== sessionEncrypted) {
      console.log(`🔄 Session changed for [${username}]. Recreating client...`);
      try { await entry.client.disconnect(); } catch (_) {}
      this.clients.delete(username);
      entry = null;
    }

    if (!entry) {
      const sessionStr = await decryptSession(sessionEncrypted, API_HASH);
      if (!sessionStr) throw new Error('رمزگشایی نشست تلگرام ناموفق بود.');

      const client = new TelegramClient(
        new StringSession(sessionStr),
        API_ID,
        API_HASH,
        {
          connectionRetries: 3,
          timeout: 10000,
          useWSS: false,
          autoReconnect: true,
          floodSleepThreshold: 0,
          deviceModel: 'Telegram Desktop',
          systemVersion: 'Windows 11',
          appVersion: '5.4.1'
        }
      );

      console.log(`🔌 Connecting warm socket for [${username}]...`);
      await client.connect();
      console.log(`✅ Warm socket connected for [${username}]!`);

      entry = {
        client,
        sessionEncrypted,
        lastTime: null,
        connected: true,
        settings: {
          afkEnabled: false,
          afkMessage: '',
          afkCooldown: 10,
          muteEnabled: false,
          mutedUsers: [],
          antiTtlEnabled: false
        },
        afkCooldownMap: new Map(),
        localMutedUsers: new Set(),
        myId: null,
        hasListeners: false
      };
      this.clients.set(username, entry);

      // دریافت فوری شناسه کاربری جهت تشخیص دقیق پیام‌های خروجی و دریافتی
      try {
        const me = await client.getMe();
        if (me && me.id) entry.myId = me.id.toString();
      } catch (_) {}

      // اتصال رویدادهای زنده سلف‌بات (AFK, Mute, Anti-TTL)
      this.attachEventListeners(entry, username);
    } else if (!entry.client.connected) {
      console.log(`🔌 Reconnecting dropped socket for [${username}]...`);
      await entry.client.connect();
      entry.connected = true;
    }

    // به‌روزرسانی تنظیمات هوشمند در حافظه و ادغام لیست سکوت محلی
    if (userSettings && entry) {
      const serverMuted = Array.isArray(userSettings.mutedUsers) ? userSettings.mutedUsers : [];
      const localMuted = entry.localMutedUsers ? Array.from(entry.localMutedUsers) : [];
      const combinedMuted = Array.from(new Set([...serverMuted, ...localMuted]));

      entry.settings = {
        afkEnabled: !!userSettings.afkEnabled,
        afkMessage: userSettings.afkMessage || '',
        afkCooldown: userSettings.afkCooldown ?? 10,
        muteEnabled: !!userSettings.muteEnabled || combinedMuted.length > 0,
        mutedUsers: combinedMuted,
        antiTtlEnabled: !!userSettings.antiTtlEnabled
      };
      resolveMutedUsernames(entry);
    }

    return entry.client;
  }

  attachEventListeners(entry, username) {
    if (entry.hasListeners) return;
    entry.hasListeners = true;

    entry.client.addEventHandler(async (event) => {
      try {
        await this.handleIncomingMessage(entry, username, event);
      } catch (err) {
        console.error(`⚠️ [${username}] Message event handler error:`, err.message);
      }
    }, new NewMessage({}));
    console.log(`🛡️ [${username}] Event listeners attached (AFK, Mute, Anti-TTL active)!`);
    resolveMutedUsernames(entry);
  }

  async handleIncomingMessage(entry, username, event) {
    const message = event.message;
    if (!message) return;

    if (!entry.myId && entry.client.connected) {
      try {
        const me = await entry.client.getMe();
        if (me && me.id) entry.myId = me.id.toString();
      } catch (_) {}
    }

    const myId = entry.myId;
    const isOut = Boolean(message.out || (myId && message.senderId && message.senderId.toString() === myId));

    // ۱. دستورات سریع تلگرامی خود کاربر (.mute و .unmute)
    if (isOut && message.text) {
      const text = message.text.trim();
      const muteMatch = text.match(/^\.mute(?:\s+(.+))?$/i);
      const unmuteMatch = text.match(/^\.unmute(?:\s+(.+))?$/i);

      if (muteMatch) {
        let targetId = null;
        let targetUsername = null;
        let targetLabel = '';

        if (message.replyTo) {
          const repliedMsg = await message.getReplyMessage().catch(() => null);
          if (repliedMsg) {
            targetId = (repliedMsg.senderId || repliedMsg.fromId?.userId || repliedMsg.peerId?.userId)?.toString();
            const repSender = await repliedMsg.getSender().catch(() => null);
            if (repSender?.username) targetUsername = repSender.username.toLowerCase();
            targetLabel = targetUsername ? `@${targetUsername} (${targetId || 'ID'})` : (targetId || 'کاربر');
          }
        } else if (muteMatch[1]) {
          const arg = muteMatch[1].trim();
          targetLabel = arg;
          if (/^-?\d+$/.test(arg)) {
            targetId = arg;
          } else {
            targetUsername = cleanMuteTarget(arg);
          }
        }

        if (targetId || targetUsername) {
          entry.settings.muteEnabled = true;
          if (!entry.localMutedUsers) entry.localMutedUsers = new Set();
          
          if (targetId) {
            if (!entry.settings.mutedUsers.includes(targetId)) entry.settings.mutedUsers.push(targetId);
            entry.localMutedUsers.add(targetId);
          }
          if (targetUsername) {
            const atUsername = `@${targetUsername}`;
            if (!entry.settings.mutedUsers.includes(atUsername) && !entry.settings.mutedUsers.includes(targetUsername)) {
              entry.settings.mutedUsers.push(atUsername);
            }
            entry.localMutedUsers.add(atUsername);
          }

          syncUserMuteToCloudflare(username, entry.settings.mutedUsers).catch(() => {});
          resolveMutedUsernames(entry);

          await message.edit({ text: `🔇 کاربر [${targetLabel}] به لیست سکوت سلف‌بات اضافه شد.` }).catch(() => {});
          setTimeout(() => message.delete({ revoke: true }).catch(() => {}), 3500);
          return;
        }
      } else if (unmuteMatch) {
        let targetId = null;
        let targetUsername = null;
        let targetLabel = '';

        if (message.replyTo) {
          const repliedMsg = await message.getReplyMessage().catch(() => null);
          if (repliedMsg) {
            targetId = (repliedMsg.senderId || repliedMsg.fromId?.userId || repliedMsg.peerId?.userId)?.toString();
            const repSender = await repliedMsg.getSender().catch(() => null);
            if (repSender?.username) targetUsername = repSender.username.toLowerCase();
            targetLabel = targetUsername ? `@${targetUsername} (${targetId || 'ID'})` : (targetId || 'کاربر');
          }
        } else if (unmuteMatch[1]) {
          const arg = unmuteMatch[1].trim();
          targetLabel = arg;
          if (/^-?\d+$/.test(arg)) {
            targetId = arg;
          } else {
            targetUsername = cleanMuteTarget(arg);
          }
        }

        if (targetId || targetUsername) {
          const targetsToRemove = new Set();
          if (targetId) targetsToRemove.add(targetId);
          if (targetUsername) {
            targetsToRemove.add(targetUsername);
            targetsToRemove.add(`@${targetUsername}`);
          }

          entry.settings.mutedUsers = entry.settings.mutedUsers.filter(id => {
            const clean = cleanMuteTarget(id);
            return !targetsToRemove.has(id) && !targetsToRemove.has(clean);
          });
          if (entry.localMutedUsers) {
            for (const t of targetsToRemove) entry.localMutedUsers.delete(t);
          }

          syncUserMuteToCloudflare(username, entry.settings.mutedUsers).catch(() => {});

          await message.edit({ text: `🔊 کاربر [${targetLabel}] از لیست سکوت خارج شد.` }).catch(() => {});
          setTimeout(() => message.delete({ revoke: true }).catch(() => {}), 3500);
          return;
        }
      }
    }

    // ۲. 📸 ضد خودتخریبی مدیا (Anti-TTL)
    if (entry.settings.antiTtlEnabled && !isOut && message.media) {
      const ttl = message.ttlPeriod || 
                  message.media?.ttlSeconds || 
                  message.ttlSeconds || 
                  message.media?.photo?.ttlSeconds || 
                  message.media?.document?.ttlSeconds;

      if (ttl && ttl > 0) {
        console.log(`📸 [${username}] Anti-TTL detected self-destruct media (TTL: ${ttl}s) from sender ${message.senderId}. Downloading...`);
        try {
          const buffer = await entry.client.downloadMedia(message);
          if (buffer && buffer.length > 0) {
            const sender = await message.getSender().catch(() => null);
            const rawName = sender ? (sender.firstName || sender.username || sender.id) : (message.senderId || 'ناشناس');
            const cleanSenderName = String(rawName).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            
            const timerLabel = (ttl >= 2147483647) ? 'یک‌بار مصرف (View-Once)' : (ttl > 86400 ? (Math.round(ttl / 86400) + ' روز') : (ttl + ' ثانیه'));
            const caption = `📸 <b>[Arizo Anti-TTL] رسانه زمان‌دار نجات یافت!</b>\n` +
                            `👤 <b>فرستنده:</b> ${cleanSenderName} (<code>${message.senderId || 'ناشناس'}</code>)\n` +
                            `⏳ <b>مدت تایمر:</b> ${timerLabel}`;

            const isPhoto = message.media instanceof Api.MessageMediaPhoto || !!message.photo;
            const isVideo = message.media instanceof Api.MessageMediaDocument && (!!message.video || !!message.media.video || message.media.document?.mimeType?.startsWith('video/'));
            const isVoice = message.media instanceof Api.MessageMediaDocument && (!!message.voice || !!message.media.voice || message.media.document?.mimeType?.startsWith('audio/'));

            let fileName = 'media.bin';
            if (isPhoto) fileName = 'saved_photo.jpg';
            else if (isVideo) fileName = 'saved_video.mp4';
            else if (isVoice) fileName = 'saved_voice.ogg';
            else if (message.media?.document?.mimeType) {
              const ext = message.media.document.mimeType.split('/')[1] || 'bin';
              fileName = `saved_file.${ext}`;
            }

            const customFile = new CustomFile(fileName, buffer.length, '', buffer);

            await entry.client.sendFile('me', {
              file: customFile,
              caption,
              parseMode: 'html',
              forceDocument: false
            });
            console.log(`✅ [${username}] Anti-TTL media (${fileName}, ${buffer.length} bytes) successfully saved to Saved Messages!`);
          } else {
            console.warn(`⚠️ [${username}] Anti-TTL download returned 0 bytes.`);
          }
        } catch (ttlErr) {
          console.error(`❌ [${username}] Anti-TTL processing error:`, ttlErr.message);
        }
      }
    }

    // ۳. 🔇 سکوت و حذف خودکار پیام (Mute)
    const hasMutedUsers = Array.isArray(entry.settings.mutedUsers) && entry.settings.mutedUsers.length > 0;
    if ((entry.settings.muteEnabled || hasMutedUsers) && !isOut) {
      // جمع‌آوری کلیه شناسه‌های عددی فرستنده
      const senderIds = new Set();
      if (message.senderId) senderIds.add(message.senderId.toString());
      if (message.fromId?.userId) senderIds.add(message.fromId.userId.toString());
      if (message.fromId?.chatId) senderIds.add(message.fromId.chatId.toString());
      if (message.fromId?.channelId) senderIds.add(message.fromId.channelId.toString());
      if (message.peerId instanceof Api.PeerUser && message.peerId.userId) {
        senderIds.add(message.peerId.userId.toString());
      }
      if (message.chatId) senderIds.add(message.chatId.toString());

      // دریافت انتیتی فرستنده جهت بررسی یوزرنیم
      let sender = null;
      try {
        sender = await message.getSender();
      } catch (_) {}

      if (!sender && (message.senderId || message.fromId || message.peerId)) {
        try {
          const peer = message.fromId || message.senderId || message.peerId;
          sender = await entry.client.getEntity(peer);
        } catch (_) {}
      }

      if (sender && sender.id) {
        senderIds.add(sender.id.toString());
      }

      // جمع‌آوری کلیه یوزرنیم‌های فرستنده
      const senderUsernames = new Set();
      if (sender?.username) {
        senderUsernames.add(sender.username.toLowerCase().replace(/^@/, ''));
      }
      if (Array.isArray(sender?.usernames)) {
        for (const u of sender.usernames) {
          if (u && u.username) senderUsernames.add(u.username.toLowerCase().replace(/^@/, ''));
        }
      }

      let isMuted = false;
      let matchedTarget = null;

      for (const raw of entry.settings.mutedUsers) {
        const t = cleanMuteTarget(raw);
        if (!t) continue;

        if (senderIds.has(t)) {
          isMuted = true;
          matchedTarget = raw;
          break;
        }

        if (senderUsernames.has(t)) {
          isMuted = true;
          matchedTarget = raw;
          break;
        }
      }

      if (isMuted) {
        const senderDisplay = sender?.username ? `@${sender.username}` : (Array.from(senderIds)[0] || 'ناشناس');
        console.log(`🔇 [${username}] Mute triggered for ${senderDisplay} (target: "${matchedTarget}"). Deleting message #${message.id}...`);

        await deleteTelegramMessage(entry.client, message, username);
        return; // از ادامه اجرای سایر بخش‌ها (از جمله منشی خودکار) جلوگیری می‌شود
      }
    }

    // ۴. 🤖 منشی خودکار پیوی (AFK Auto-Secretary)
    const isPrivateChat = Boolean(message.isPrivate || (message.peerId instanceof Api.PeerUser) || (!message.isGroup && !message.isChannel));

    // اگر کاربر خودش به این شخص در پیوی پیام ارسال کرد، کول‌داون ریست شود تا منشی مزاحم نشود
    if (isOut && isPrivateChat) {
      const peerIdStr = message.peerId?.userId?.toString() || message.chatId?.toString();
      if (peerIdStr) entry.afkCooldownMap.set(peerIdStr, Date.now());
    }

    if (entry.settings.afkEnabled && !isOut && isPrivateChat) {
      const senderIdStr = message.senderId?.toString();
      if (senderIdStr && senderIdStr !== myId) {
        // نادیده گرفتن اکانت‌های رسمی تلگرام (پیامک ورود و پشتیبانی)
        if (senderIdStr === '777000' || senderIdStr === '42777') return;

        // نادیده گرفتن ربات‌ها
        const sender = await message.getSender().catch(() => null);
        if (sender && (sender.bot || sender.isBot)) return;

        const cooldownMinutes = entry.settings.afkCooldown || 10;
        const cooldownMs = cooldownMinutes * 60 * 1000;
        const lastReply = entry.afkCooldownMap.get(senderIdStr) || 0;
        const now = Date.now();

        if (now - lastReply >= cooldownMs) {
          entry.afkCooldownMap.set(senderIdStr, now);

          // جلوگیری از انباشت حافظه در اجرای طولانی‌مدت
          if (entry.afkCooldownMap.size > 1000) {
            const cutoff = now - (24 * 60 * 60 * 1000);
            for (const [k, v] of entry.afkCooldownMap.entries()) {
              if (v < cutoff) entry.afkCooldownMap.delete(k);
            }
            if (entry.afkCooldownMap.size > 2000) entry.afkCooldownMap.clear();
          }

          const afkText = entry.settings.afkMessage || 'درود! در حال حاضر آفلاین هستم یا امکان پاسخگویی ندارم. به محض آنلاین شدن پاسخ شما را خواهم داد ⏳';
          console.log(`🤖 [${username}] AFK auto-replying to ${senderIdStr}: "${afkText.slice(0, 30)}..."`);
          
          try {
            await message.reply({ message: afkText });
            console.log(`✅ [${username}] AFK reply sent via message.reply!`);
          } catch (replyErr) {
            try {
              await entry.client.sendMessage(message.chatId || message.senderId, { message: afkText });
              console.log(`✅ [${username}] AFK reply sent via client.sendMessage!`);
            } catch (sendErr) {
              console.error(`❌ [${username}] AFK reply failed:`, sendErr.message);
            }
          }
        }
      }
    }
  }

  async updateProfile(username, sessionEncrypted, exactTimeStr, exactBioStr = null, userSettings = null) {
    const startMs = performance.now();
    try {
      const client = await this.getOrCreateClient(username, sessionEncrypted, userSettings);
      const updateParams = { lastName: exactTimeStr };
      if (exactBioStr) updateParams.about = exactBioStr;

      await client.invoke(new Api.account.UpdateProfile(updateParams));
      const elapsed = Math.round(performance.now() - startMs);

      const entry = this.clients.get(username);
      if (entry) {
        entry.lastTime = exactTimeStr;
        entry.lastBio = exactBioStr;
      }

      return {
        ok: true,
        username,
        lastTime: exactTimeStr,
        lastBio: exactBioStr,
        elapsedMs: elapsed
      };
    } catch (err) {
      const elapsed = Math.round(performance.now() - startMs);
      const isFatal = err.errorMessage === 'AUTH_KEY_UNREGISTERED' ||
        err.errorMessage === 'USER_DEACTIVATED' ||
        err.errorMessage === 'SESSION_REVOKED';

      if (isFatal) {
        this.removeClient(username);
      }

      return {
        ok: false,
        username,
        error: err.message || 'خطای اتصال به سرور تلگرام',
        isFatal,
        elapsedMs: elapsed
      };
    }
  }

  async removeClient(username) {
    const entry = this.clients.get(username);
    if (entry) {
      try { await entry.client.disconnect(); } catch (_) {}
      this.clients.delete(username);
    }
  }

  async cleanupStale(activeUsernames) {
    const activeSet = new Set(activeUsernames);
    for (const [uname, entry] of this.clients.entries()) {
      if (!activeSet.has(uname)) {
        console.log(`🧹 Removing inactive user from pool: [${uname}]`);
        try { await entry.client.disconnect(); } catch (_) {}
        this.clients.delete(uname);
      }
    }
  }

  async disconnectAll() {
    console.log('🛑 Disconnecting all pool clients...');
    for (const entry of this.clients.values()) {
      try { await entry.client.disconnect(); } catch (_) {}
    }
    this.clients.clear();
  }
}

const pool = new TelegramConnectionPool();

/**
 * دریافت لیست کاربران فعال از ورکر کلادفلر
 */
async function fetchActiveUsers() {
  try {
    const res = await fetch(`${CLOUDFLARE_URL}/api/internal/active-users`, {
      headers: {
        'Authorization': `Bearer ${RUNNER_SECRET}`,
        'User-Agent': 'Arizo-Sub100ms-Engine/3.0'
      }
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Status ${res.status}: ${txt}`);
    }

    const data = await res.json();
    return data.users || [];
  } catch (err) {
    console.error('⚠️ Cloudflare fetchActiveUsers error:', err.message);
    return [];
  }
}

/**
 * ارسال گزارش وضعیت به کلادفلر فقط در صورت بروز خطا (Zero KV writes on success)
 */
async function reportStatusErrors(updates) {
  const errorUpdates = updates.filter(u => !u.ok);
  if (!errorUpdates.length) return;

  try {
    await fetch(`${CLOUDFLARE_URL}/api/internal/update-status`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RUNNER_SECRET}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Arizo-Sub100ms-Engine/3.0'
      },
      body: JSON.stringify({
        updates: errorUpdates.map(u => ({
          username: u.username,
          lastUpdate: Date.now(),
          error: u.error,
          isFatal: u.isFatal
        }))
      })
    });
  } catch (err) {
    console.error('⚠️ Cloudflare reportStatusErrors error:', err.message);
  }
}

/**
 * همگام‌سازی آنی لیست سکوت کاربر در ورکر کلادفلر
 */
async function syncUserMuteToCloudflare(username, mutedUsers) {
  try {
    await fetch(`${CLOUDFLARE_URL}/api/internal/update-user-mute`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RUNNER_SECRET}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Arizo-Sub100ms-Engine/3.0'
      },
      body: JSON.stringify({ username, mutedUsers })
    });
  } catch (_) {}
}

/**
 * احضار خودکار جاب بعدی در گیت‌هاب جهت حفظ چرخه ۲۴ ساعته
 */
async function triggerNextWorkflow() {
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY) {
    console.log('ℹ️ GITHUB_TOKEN or GITHUB_REPOSITORY not set. Skipping self-dispatch trigger.');
    return;
  }

  console.log('🔄 Triggering next GitHub Actions workflow to continue the 24/7 loop...');
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPOSITORY}/actions/workflows/telegram-clock.yml/dispatches`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Arizo-Self-Dispatcher'
      },
      body: JSON.stringify({ ref: 'main' })
    });

    if (res.ok || res.status === 204) {
      console.log('✅ Next workflow successfully triggered! 24/7 loop maintained.');
    } else {
      const errText = await res.text();
      console.warn(`⚠️ Dispatch API returned status ${res.status}: ${errText}`);
    }
  } catch (err) {
    console.error('⚠️ Error triggering next workflow:', err.message);
  }
}

/**
 * محاسبه زمان میلی‌ثانیه‌ای تا ثانیه مشخص‌شده در دقیقه
 */
function getMsUntilSecond(targetSecond = 0, targetMs = 0) {
  const now = new Date();
  const s = now.getSeconds();
  const ms = now.getMilliseconds();

  let diffSec = (60 + targetSecond - s) % 60;
  let totalMs = (diffSec * 1000) + (targetMs - ms);
  if (totalMs <= 0) totalMs += 60000;
  return totalMs;
}

/**
 * حلقه اصلی پرسرعت و دقیق
 */
async function main() {
  const startTime = Date.now();
  const maxDurationMs = MAX_RUN_MINUTES * 60 * 1000;
  let nextTriggerScheduled = false;

  console.log('🚀 Warming up connection pool with active users...');
  let cachedUsers = await fetchActiveUsers();
  
  // پیش‌اتصال سوکت‌ها قبل از شروع اولین دقیقه
  for (const u of cachedUsers) {
    try {
      await pool.getOrCreateClient(u.username, u.sessionEncrypted, u);
    } catch (err) {
      console.error(`⚠️ Initial warm socket failed for [${u.username}]:`, err.message);
    }
  }

  // اجرای یک‌باره اولیه
  if (cachedUsers.length) {
    console.log('⚡ Performing initial profile sync...');
    const now = new Date();
    await Promise.allSettled(cachedUsers.map(async u => {
      let exactTimeStr = getStylizedTime(u.digits, u.colon, now, {
        prefix: u.prefix,
        suffix: u.suffix,
        is12h: u.is12h
      });

      if (u.sleepEnabled && isSleepTime(u.sleepStart, u.sleepEnd, now)) {
        exactTimeStr = u.sleepText || '😴 Sleep';
      }

      let exactBioStr = null;
      if (u.bioEnabled && u.bioTemplate) {
        exactBioStr = renderDynamicBio(u.bioTemplate, {
          digits: u.digits,
          colon: u.colon,
          date: now,
          is12h: u.is12h
        });
      }

      const res = await pool.updateProfile(u.username, u.sessionEncrypted, exactTimeStr, exactBioStr, u);
      if (res.ok) console.log(`  ✅ [${u.username}] Synced: ${exactTimeStr} (${res.elapsedMs}ms)`);
      else console.error(`  ❌ [${u.username}] Error: ${res.error}`);
    }));
  }

  // به‌روزرسانی سریع تنظیمات استودیو هر ۲۰ ثانیه تا تغییرات منشی، نجات مدیا و سکوت بلافاصله اعمال شوند
  const settingsSyncInterval = setInterval(async () => {
    try {
      const freshUsers = await fetchActiveUsers();
      for (const u of freshUsers) {
        const entry = pool.clients.get(u.username);
        if (entry) {
          const serverMuted = Array.isArray(u.mutedUsers) ? u.mutedUsers : [];
          const localMuted = entry.localMutedUsers ? Array.from(entry.localMutedUsers) : [];
          const combinedMuted = Array.from(new Set([...serverMuted, ...localMuted]));

          entry.settings = {
            afkEnabled: !!u.afkEnabled,
            afkMessage: u.afkMessage || '',
            afkCooldown: u.afkCooldown ?? 10,
            muteEnabled: !!u.muteEnabled || combinedMuted.length > 0,
            mutedUsers: combinedMuted,
            antiTtlEnabled: !!u.antiTtlEnabled
          };
          resolveMutedUsernames(entry);
        }
      }
    } catch (_) {}
  }, 20000);

  while (true) {
    const elapsed = Date.now() - startTime;
    const remainingTime = maxDurationMs - elapsed;

    // استارت جاب بعدی در ۱۰ دقیقه پایانی
    if (remainingTime <= 10 * 60 * 1000 && !nextTriggerScheduled) {
      nextTriggerScheduled = true;
      await triggerNextWorkflow();
    }

    if (remainingTime <= 0) {
      console.log('🏁 Duration reached. Cleaning up and exiting...');
      clearInterval(settingsSyncInterval);
      await pool.disconnectAll();
      break;
    }

    // ۱. خواب تا ثانیه ۵۷.۵ جهت انجام Pre-fetch
    const msToPrefetch = getMsUntilSecond(57, 500);
    if (msToPrefetch > 1000) {
      await new Promise(r => setTimeout(r, msToPrefetch));
    }

    // ۲. پیش‌بارگذاری لیست کاربران و بررسی سوکت‌ها ۲ ثانیه قبل از دقیقه
    try {
      cachedUsers = await fetchActiveUsers();
      await pool.cleanupStale(cachedUsers.map(u => u.username));
      
      // اطمینان از متصل بودن سوکت تمام کاربران
      for (const u of cachedUsers) {
        pool.getOrCreateClient(u.username, u.sessionEncrypted, u).catch(() => {});
      }
    } catch (_) {}

    // ۳. خواب دقیق تا ۱۰ میلی‌ثانیه قبل از رأس دقیقه (:59.990) برای شلیک بی‌درنگ
    const msToMinute = getMsUntilSecond(59, 990);
    await new Promise(r => setTimeout(r, msToMinute));

    if (!cachedUsers.length) continue;

    // ۴. زمان دقیقه جدید
    const targetMinuteDate = new Date(Date.now() + 1000);
    const triggerStart = performance.now();

    // ۵. شلیک هم‌زمان به تلگرام برای تمامی کاربران
    const results = await Promise.allSettled(cachedUsers.map(async u => {
      let exactTimeStr = getStylizedTime(u.digits, u.colon, targetMinuteDate, {
        prefix: u.prefix,
        suffix: u.suffix,
        is12h: u.is12h
      });

      if (u.sleepEnabled && isSleepTime(u.sleepStart, u.sleepEnd, targetMinuteDate)) {
        exactTimeStr = u.sleepText || '😴 Sleep';
      }

      let exactBioStr = null;
      if (u.bioEnabled && u.bioTemplate) {
        exactBioStr = renderDynamicBio(u.bioTemplate, {
          digits: u.digits,
          colon: u.colon,
          date: targetMinuteDate,
          is12h: u.is12h
        });
      }

      return pool.updateProfile(u.username, u.sessionEncrypted, exactTimeStr, exactBioStr, u);
    }));

    const totalBatchMs = Math.round(performance.now() - triggerStart);
    const updates = results.map(r => r.status === 'fulfilled' ? r.value : { ok: false, error: r.reason?.message });

    const successCount = updates.filter(u => u.ok).length;
    console.log(`⏱️ [:00.000] Batch updated ${successCount}/${cachedUsers.length} profiles in ${totalBatchMs}ms ⚡`);

    for (const res of updates) {
      if (res.ok) {
        console.log(`  ✅ [${res.username}] -> ${res.lastTime} (${res.elapsedMs}ms)`);
      } else {
        console.error(`  ❌ [${res.username}] -> Failed: ${res.error} (${res.elapsedMs || 0}ms)`);
      }
    }

    // ارسال گزارش خطاها در پس‌زمینه بدون بلاک کردن لوپ
    reportStatusErrors(updates).catch(() => {});
  }
}

main().catch(async err => {
  console.error('Fatal Runner Error:', err);
  await pool.disconnectAll();
  process.exit(1);
});
