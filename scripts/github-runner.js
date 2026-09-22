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
import { getStylizedTime } from '../src/clock.js';
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
 * مدیریت استخر کلاینت‌های زنده تلگرام (Persistent Connection Pool)
 */
class TelegramConnectionPool {
  constructor() {
    this.clients = new Map(); // username -> { client, sessionEncrypted, lastTime, connected }
  }

  async getOrCreateClient(username, sessionEncrypted) {
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
        connected: true
      };
      this.clients.set(username, entry);
    } else if (!entry.client.connected) {
      console.log(`🔌 Reconnecting dropped socket for [${username}]...`);
      await entry.client.connect();
      entry.connected = true;
    }

    return entry.client;
  }

  async updateProfile(username, sessionEncrypted, exactTimeStr) {
    const startMs = performance.now();
    try {
      const client = await this.getOrCreateClient(username, sessionEncrypted);
      await client.invoke(new Api.account.UpdateProfile({ lastName: exactTimeStr }));
      const elapsed = Math.round(performance.now() - startMs);

      const entry = this.clients.get(username);
      if (entry) entry.lastTime = exactTimeStr;

      return {
        ok: true,
        username,
        lastTime: exactTimeStr,
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
      await pool.getOrCreateClient(u.username, u.sessionEncrypted);
    } catch (err) {
      console.error(`⚠️ Initial warm socket failed for [${u.username}]:`, err.message);
    }
  }

  // اجرای یک‌باره اولیه
  if (cachedUsers.length) {
    console.log('⚡ Performing initial profile sync...');
    const now = new Date();
    await Promise.allSettled(cachedUsers.map(async u => {
      const timeStr = getStylizedTime(u.digits, u.colon, now);
      const res = await pool.updateProfile(u.username, u.sessionEncrypted, timeStr);
      if (res.ok) console.log(`  ✅ [${u.username}] Synced: ${timeStr} (${res.elapsedMs}ms)`);
      else console.error(`  ❌ [${u.username}] Error: ${res.error}`);
    }));
  }

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
        pool.getOrCreateClient(u.username, u.sessionEncrypted).catch(() => {});
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
      const exactTimeStr = getStylizedTime(u.digits, u.colon, targetMinuteDate);
      return pool.updateProfile(u.username, u.sessionEncrypted, exactTimeStr);
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
