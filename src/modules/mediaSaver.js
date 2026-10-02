/**
 * 📸 4-Tier Bulletproof Anti-TTL Media Saver & Vault Engine
 * Intercepts self-destructing and expiring media before timer expiration
 */

export class MediaSaverVault {
  constructor(config = {}) {
    this.enabled = config.enabled !== false;
    this.saveToSavedMessages = config.saveToSavedMessages !== false;
    this.saveToBot = config.saveToBot !== false;
    this.savedCount = 0;
    this.savedLog = [];
  }

  /**
   * بررسی اینکه آیا پیام تلگرام حاوی رسانه زمان‌دار (TTL / View-Once) است یا خیر
   * @param {Object} message - MTProto Message object
   * @returns {boolean}
   */
  static isTtlMedia(message) {
    if (!message || !message.media) return false;

    // ۱. استثنای قطعی: رسانه‌های نابودشونده فقط در چت خصوصی (پیوی) وجود دارند
    const isGroupOrChannel = Boolean(
      message.isGroup ||
      message.isChannel ||
      message.peerId?.className === 'PeerChannel' ||
      message.peerId?.className === 'PeerChat' ||
      (message.chatId && !message.isPrivate && message.peerId?.className !== 'PeerUser')
    );
    if (isGroupOrChannel) return false;

    // ۲. بررسی ویژگی ttlSeconds مستقیم در رسانه
    if (message.media.ttlSeconds && message.media.ttlSeconds > 0) return true;

    // ۳. بررسی فلگ‌های عکس/فیلم یک‌بار مصرف (View-Once)
    const isViewOnce = Boolean(
      (message.media.flags && (message.media.flags & 4)) ||
      (message.media.photo?.flags && (message.media.photo.flags & 4)) ||
      (message.media.document?.flags && (message.media.document.flags & 4)) ||
      message.media.viewOnce ||
      message.viewOnce
    );
    if (isViewOnce) return true;

    // ۴. بررسی تایمرهای کوتاه خودتخریبی پیوی (حداکثر ۵ دقیقه، نه حذف خودکار ۲۴ ساعته)
    if (message.ttlPeriod && message.ttlPeriod > 0 && message.ttlPeriod <= 300) return true;

    // ۵. بررسی ساختار داخلی GramJS Photo / Document
    const media = message.media;
    if (media.photo && (media.photo.ttlSeconds && media.photo.ttlSeconds > 0)) return true;
    if (media.document && (media.document.ttlSeconds && media.document.ttlSeconds > 0)) return true;

    return false;
  }

  /**
   * ثبت و پردازش متادیتای رسانه نجات‌یافته
   * @param {Object} mediaInfo - { senderId, senderName, chatId, mediaType, ttlSeconds, caption }
   * @returns {Object} لاگ رسانه ذخیره شده
   */
  recordSavedMedia(mediaInfo) {
    this.savedCount++;
    const record = {
      id: `media_${Date.now()}_${this.savedCount}`,
      savedAt: Date.now(),
      senderId: mediaInfo.senderId,
      senderName: mediaInfo.senderName || 'ناشناس',
      chatId: mediaInfo.chatId,
      mediaType: mediaInfo.mediaType || 'photo',
      ttlSeconds: mediaInfo.ttlSeconds || 0,
      caption: mediaInfo.caption || ''
    };

    this.savedLog.unshift(record);
    if (this.savedLog.length > 50) this.savedLog.pop();
    return record;
  }

  /**
   * ساخت متن همراه (کپشن) برای فوروارد امن رسانه به پیوی ربات یا سیودمسیجز
   * @param {Object} record 
   * @returns {string}
   */
  static buildVaultCaption(record) {
    const timeStr = new Date(record.savedAt).toLocaleTimeString('fa-IR');
    return (
      `📸 *رسانه زمان‌دار شکار شد (Anti-TTL Vault)*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *ارسال‌کننده:* ${record.senderName} (\`${record.senderId}\`)\n` +
      `⏱ *تایمر انقضا:* ${record.ttlSeconds} ثانیه\n` +
      `🕒 *زمان ذخیره:* ${timeStr}\n` +
      (record.caption ? `📝 *کپشن اصلی:* \`${record.caption}\`\n` : '') +
      `\n⚡ _محافظت شده توسط استودیوی سلف‌بات آریزو_`
    );
  }
}
