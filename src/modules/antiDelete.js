/**
 * 🗑️ Anti-Delete & Real-Time Message Edit Sniper
 * Ultra-fast circular memory buffer capturing deleted & modified messages
 */

export class AntiDeleteSniper {
  constructor(options = {}) {
    this.maxCachedMessages = options.maxCached || 500;
    this.messageCache = new Map(); // key: `${chatId}:${msgId}`, value: messageDetails
    this.deletedLog = [];          // آرایه پیام‌های پاک‌شده اخیر
    this.editedLog = [];           // آرایه پیام‌های ویرایش‌شده اخیر
  }

  /**
   * ذخیره پیام جدید در بافر چرخشی
   * @param {Object} msg 
   */
  cacheMessage(msg) {
    if (!msg || !msg.id || !msg.chatId) return;
    const key = `${msg.chatId}:${msg.id}`;

    if (this.messageCache.size >= this.maxCachedMessages) {
      // حذف قدیمی‌ترین کلید
      const firstKey = this.messageCache.keys().next().value;
      this.messageCache.delete(firstKey);
    }

    this.messageCache.set(key, {
      id: msg.id,
      chatId: msg.chatId,
      chatTitle: msg.chatTitle || 'خصوصی',
      senderId: msg.senderId,
      senderName: msg.senderName || 'ناشناس',
      senderUsername: msg.senderUsername || '',
      text: msg.text || '',
      hasMedia: Boolean(msg.media),
      mediaType: msg.mediaType || null,
      timestamp: msg.date ? (msg.date * 1000) : Date.now()
    });
  }

  /**
   * ثبت و بررسی پیام‌های حذف شده
   * @param {string|number} chatId 
   * @param {number[]} messageIds 
   * @returns {Array} لیست پیام‌های حذف شده کشف شده
   */
  handleDeletions(chatId, messageIds = []) {
    const detected = [];
    for (const msgId of messageIds) {
      const key = `${chatId}:${msgId}`;
      const cached = this.messageCache.get(key);
      if (cached) {
        const deletedRecord = {
          ...cached,
          deletedAt: Date.now(),
          latencyMs: Date.now() - cached.timestamp
        };
        this.deletedLog.unshift(deletedRecord);
        if (this.deletedLog.length > 100) this.deletedLog.pop();
        detected.push(deletedRecord);
        this.messageCache.delete(key);
      }
    }
    return detected;
  }

  /**
   * ثبت و ارزیابی پیام ویرایش شده
   * @param {Object} newMsg 
   * @returns {{ wasEdited: boolean, oldText?: string, newText?: string, record?: Object }}
   */
  handleEdit(newMsg) {
    if (!newMsg || !newMsg.id || !newMsg.chatId) return { wasEdited: false };
    const key = `${newMsg.chatId}:${newMsg.id}`;
    const previous = this.messageCache.get(key);

    if (previous && previous.text !== newMsg.text) {
      const editRecord = {
        chatId: newMsg.chatId,
        messageId: newMsg.id,
        senderName: previous.senderName,
        senderUsername: previous.senderUsername,
        oldText: previous.text,
        newText: newMsg.text || '',
        editedAt: Date.now()
      };

      this.editedLog.unshift(editRecord);
      if (this.editedLog.length > 100) this.editedLog.pop();

      // بروزرسانی متن در کش
      previous.text = newMsg.text || '';
      return { wasEdited: true, oldText: editRecord.oldText, newText: editRecord.newText, record: editRecord };
    }

    return { wasEdited: false };
  }

  /**
   * فرمت‌بندی گزارش پیام حذف شده به فرمت مارک‌داون تلگرام
   * @param {Object} item 
   * @returns {string}
   */
  static formatReport(item) {
    const userTag = item.senderUsername ? `@${item.senderUsername}` : item.senderName;
    const timeStr = new Date(item.deletedAt).toLocaleTimeString('fa-IR');
    return (
      `🗑️ *گزارش پیام حذف شده (Anti-Delete)*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *فرستنده:* ${userTag} (\`${item.senderId}\`)\n` +
      `💬 *گفتگو:* ${item.chatTitle}\n` +
      `⏱ *زمان حذف:* ${timeStr}\n` +
      (item.hasMedia ? `📎 *رسانه پیوست:* ${item.mediaType || 'عکس/فیلم'}\n` : '') +
      `\n📝 *متن پیام:*\n` +
      `\`${item.text || '[بدون متن]'}\``
    );
  }
}
