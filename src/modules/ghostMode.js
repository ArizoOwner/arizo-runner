/**
 * 👻 Stealth & Ghost Mode Controller
 * Silent read management and presence masking for complete privacy
 */

export class GhostModeController {
  constructor(config = {}) {
    this.enabled = config.enabled || false;
    this.stealthRead = config.stealthRead || false; // خواندن بدون تیک آبی (Seen)
    this.maskOnline = config.maskOnline || false;   // مخفی‌سازی وضعیت آنلاین بودن
    this.simulateTyping = config.simulateTyping || false;
  }

  /**
   * ارزیابی اینکه آیا مجاز به ارسال اکشن خواندن (Mark As Read) هستیم یا خیر
   * @param {string|number} chatId 
   * @returns {boolean} true اگر باید تیک آبی ارسال شود، false اگر در حالت روح هستیم
   */
  canSendReadReceipt(chatId) {
    if (!this.enabled) return true;
    if (this.stealthRead) return false;
    return true;
  }

  /**
   * پیکربندی تنظیمات حالت روح
   * @param {Object} options 
   */
  updateSettings(options = {}) {
    if (options.enabled !== undefined) this.enabled = Boolean(options.enabled);
    if (options.stealthRead !== undefined) this.stealthRead = Boolean(options.stealthRead);
    if (options.maskOnline !== undefined) this.maskOnline = Boolean(options.maskOnline);
    if (options.simulateTyping !== undefined) this.simulateTyping = Boolean(options.simulateTyping);
  }
}
