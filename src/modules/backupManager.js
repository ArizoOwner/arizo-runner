/**
 * 💾 Encrypted Backup & Disaster Recovery Manager
 * Exports and imports complete Arizo configuration using AES-256-GCM encryption
 */

import { encryptSession, decryptSession } from '../crypto.js';

export class BackupManager {
  /**
   * ایجاد نسخه پشتیبان رمزنگاری‌شده از کل داده‌های کاربر و تنظیمات
   * @param {Object} data - آبجکت خام دیتابیس
   * @param {string} encryptionPassword - رمز عبور انتخابی کاربر
   * @returns {Promise<string>} رشته رمزنگاری شده برای دانلود
   */
  static async exportEncryptedBackup(data, encryptionPassword) {
    if (!data || typeof data !== 'object') {
      throw new Error('داده‌های پشتیبان نامعتبر است.');
    }
    if (!encryptionPassword || encryptionPassword.length < 8) {
      throw new Error('رمز عبور پشتیبان باید حداقل ۸ کاراکتر باشد.');
    }

    const payload = JSON.stringify({
      version: '3.6.0',
      timestamp: Date.now(),
      data
    });

    const encrypted = await encryptSession(payload, encryptionPassword);
    return JSON.stringify({
      app: 'Arizo-Telegram-Self-Manager',
      format: 'encrypted-backup-v2',
      createdAt: new Date().toISOString(),
      payload: encrypted
    }, null, 2);
  }

  /**
   * رمزگشایی و بازگردانی نسخه پشتیبان
   * @param {string} rawBackupString 
   * @param {string} encryptionPassword 
   * @returns {Promise<Object>}
   */
  static async importEncryptedBackup(rawBackupString, encryptionPassword) {
    let parsed;
    try {
      parsed = JSON.parse(rawBackupString);
    } catch (_) {
      throw new Error('فرمت فایل پشتیبان نامعتبر است.');
    }

    if (!parsed.payload || parsed.format !== 'encrypted-backup-v2') {
      throw new Error('فرمت نسخه پشتیبان همخوانی ندارد.');
    }

    const decrypted = await decryptSession(parsed.payload, encryptionPassword);
    if (!decrypted) {
      throw new Error('رمز عبور پشتیبان اشتباه است یا فایل آسیب دیده است.');
    }

    const parsedData = JSON.parse(decrypted);
    return parsedData.data;
  }
}
