/**
 * 🧹 Mass Cleanup & Group Hygiene Studio
 * Safe message purging, ghost member detection, and batch operations with flood protection
 */

export class CleanerStudio {
  /**
   * تقسیم آرایه پیام‌ها به بسته‌های کوچک با سقف مشخص جهت رعایت محدودیت‌های تلگرام
   * @param {Array} items 
   * @param {number} chunkSize 
   * @returns {Array[]}
   */
  static chunk(items, chunkSize = 100) {
    const chunks = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      chunks.push(items.slice(i, i + chunkSize));
    }
    return chunks;
  }

  /**
   * فیلتر کردن اعضای غیرفعال یا اکانت‌های دلیت شده
   * @param {Array} participants 
   * @returns {{ deletedAccounts: Array, inactiveUsers: Array }}
   */
  static filterGhosts(participants = []) {
    const deletedAccounts = [];
    const inactiveUsers = [];
    const now = Math.floor(Date.now() / 1000);
    const thirtyDaysAgo = now - (30 * 86400);

    for (const p of participants) {
      if (p.deleted) {
        deletedAccounts.push(p);
      } else if (p.status && p.status.wasOnline && p.status.wasOnline < thirtyDaysAgo) {
        inactiveUsers.push(p);
      }
    }

    return { deletedAccounts, inactiveUsers };
  }

  /**
   * محاسبه زمان تأخیر ایمن بین هر درخواست تلگرام جهت دفع فلود ویت (FloodWait)
   * @param {number} batchIndex 
   * @returns {number} میلی‌ثانیه
   */
  static getSafeThrottleDelay(batchIndex = 0) {
    // تأخیر تدریجی تصادفی بین ۳۰۰ تا ۸۰۰ میلی‌ثانیه
    return Math.floor(Math.random() * 500) + 300;
  }
}
