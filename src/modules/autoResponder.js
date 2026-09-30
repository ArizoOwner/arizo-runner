/**
 * 🤖 Smart Auto-Responder & AFK Assistant Engine
 * Handles intelligent auto-replies, AFK status, mention alerts, and trigger rules
 */

export class AutoResponderEngine {
  constructor(config = {}) {
    this.enabled = config.enabled || false;
    this.isAfk = config.isAfk || false;
    this.afkReason = config.afkReason || 'در حال حاضر در دسترس نیستم.';
    this.afkStartTime = config.afkStartTime || null;
    this.chatCooldownMs = (config.cooldownSeconds || 300) * 1000; // پیش‌فرض ۵ دقیقه خنک‌سازی هر چت
    this.whitelist = new Set(config.whitelist || []);
    this.blacklist = new Set(config.blacklist || []);
    this.rules = config.rules || []; // [{ trigger: 'سلام', reply: 'درود! چطور می‌تونم کمکت کنم؟', type: 'exact|contains|regex' }]

    // ثبت آخرین زمان پاسخ به هر چت برای جلوگیری از اسپم
    this.lastRepliedChats = new Map();
  }

  /**
   * فعال‌سازی وضعیت AFK (دور از دسترس)
   * @param {string} reason 
   */
  setAfk(reason) {
    this.isAfk = true;
    this.afkReason = reason || 'در حال حاضر در دسترس نیستم.';
    this.afkStartTime = Date.now();
  }

  /**
   * خروج از وضعیت AFK
   * @returns {{ wasAfk: boolean, durationMs: number }}
   */
  clearAfk() {
    const wasAfk = this.isAfk;
    const durationMs = this.afkStartTime ? (Date.now() - this.afkStartTime) : 0;
    this.isAfk = false;
    this.afkStartTime = null;
    return { wasAfk, durationMs };
  }

  /**
   * محاسبه مدت زمان گذشته از فعال شدن AFK به صورت متن فارسی
   * @returns {string}
   */
  getAfkDurationText() {
    if (!this.afkStartTime) return 'لحظاتی پیش';
    const diffSec = Math.floor((Date.now() - this.afkStartTime) / 1000);
    const hours = Math.floor(diffSec / 3600);
    const minutes = Math.floor((diffSec % 3600) / 60);

    if (hours > 0) return `${hours} ساعت و ${minutes} دقیقه`;
    if (minutes > 0) return `${minutes} دقیقه`;
    return 'کمتر از ۱ دقیقه';
  }

  /**
   * بررسی اینکه آیا پیامی باید پاسخ خودکار دریافت کند یا خیر
   * @param {Object} messageContext - { chatId, senderId, senderName, text, isPrivate, isMentioned }
   * @returns {{ shouldReply: boolean, replyText?: string, reason?: string }}
   */
  evaluate(messageContext) {
    if (!this.enabled && !this.isAfk) {
      return { shouldReply: false };
    }

    const { chatId, senderId, senderName = 'دوست گرامی', text = '', isPrivate = true, isMentioned = false } = messageContext;

    // بررسی لیست سیاه
    if (this.blacklist.has(String(chatId)) || this.blacklist.has(String(senderId))) {
      return { shouldReply: false, reason: 'blacklisted' };
    }

    // کنترل Cooldown چت
    const now = Date.now();
    const lastReply = this.lastRepliedChats.get(String(chatId)) || 0;
    if (now - lastReply < this.chatCooldownMs) {
      return { shouldReply: false, reason: 'cooldown' };
    }

    // ۱. ارزیابی وضعیت AFK (اولویت بالا در چت‌های خصوصی یا منشن شدن در گروه‌ها)
    if (this.isAfk && (isPrivate || isMentioned)) {
      this.lastRepliedChats.set(String(chatId), now);
      const duration = this.getAfkDurationText();
      const replyText = `🤖 *پیام خودکار — سلف‌بات آریزو*\n\n` +
        `سلام ${senderName} عزیز!\n` +
        `من در حال حاضر *دور از دسترس (AFK)* هستم.\n\n` +
        `📌 *دلیل:* ${this.afkReason}\n` +
        `⏱ *مدت زمان غیبت:* ${duration}\n\n` +
        `_به محض آنلاین شدن پیام شما را پاسخ خواهم داد._`;
      return { shouldReply: true, replyText, reason: 'afk' };
    }

    // ۲. ارزیابی قوانین کلیدواژه‌ای سفارشی (Custom Rules)
    if (this.rules && this.rules.length > 0) {
      for (const rule of this.rules) {
        if (!rule.trigger || !rule.reply) continue;
        let matched = false;

        if (rule.type === 'exact') {
          matched = text.trim().toLowerCase() === rule.trigger.trim().toLowerCase();
        } else if (rule.type === 'regex') {
          try {
            const rx = new RegExp(rule.trigger, 'i');
            matched = rx.test(text);
          } catch (_) {}
        } else {
          // default: contains
          matched = text.toLowerCase().includes(rule.trigger.toLowerCase());
        }

        if (matched) {
          this.lastRepliedChats.set(String(chatId), now);
          const replyText = rule.reply
            .replace(/\{sender_name\}/gi, senderName)
            .replace(/\{time\}/gi, new Date().toLocaleTimeString('fa-IR'));
          return { shouldReply: true, replyText, reason: 'rule_matched' };
        }
      }
    }

    return { shouldReply: false };
  }
}
