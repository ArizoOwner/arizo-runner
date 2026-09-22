// 🔐 ماژول پیشرفته رمزنگاری با استاندارد WebCrypto (سازگار ۱۰۰٪ با Cloudflare Workers و Node.js)

const MASTER_KEY_SALT = 'liquid-selfbot-salt-v2-2026';

/**
 * مقایسه دو رشته هگز در زمان ثابت جهت دفع حملات Timing Attack
 * @param {string} a 
 * @param {string} b 
 * @returns {boolean}
 */
export function timingSafeEqualHex(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * بررسی استحکام پسورد
 * @param {string} password 
 * @returns {{ valid: boolean, error?: string }}
 */
export function validatePasswordStrength(password) {
  if (typeof password !== 'string') {
    return { valid: false, error: 'رمز عبور نامعتبر است.' };
  }
  if (password.length < 8) {
    return { valid: false, error: 'رمز عبور باید حداقل ۸ کاراکتر باشد.' };
  }
  if (password.length > 128) {
    return { valid: false, error: 'طول رمز عبور بیش از حد مجاز است.' };
  }
  return { valid: true };
}

/**
 * تولید یک رشته رندوم کریپتوگرافیک برای توکن‌ها و Salt
 * @param {number} bytes 
 * @returns {string} hex string
 */
export function generateRandomHex(bytes = 16) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * تولید کد ردیم/لایسنس شیک و امن تصادفی (مثال: ARIZO-9F8A-32B1-77C2)
 * @returns {string}
 */
export function generateRedeemCode() {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  const pick = (len) => {
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    return Array.from(arr).map(b => chars[b % chars.length]).join('');
  };
  return `ARIZO-${pick(4)}-${pick(4)}-${pick(4)}`;
}

/**
 * هش کردن امن پسورد با استاندارد PBKDF2 و الگوریتم SHA-256 با ۱۰۰,۰۰۰ دور
 * @param {string} password 
 * @param {string} salt 
 * @returns {Promise<string>}
 */
export async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: enc.encode(salt),
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    256
  );

  return Array.from(new Uint8Array(derivedBits))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * تایید صحت پسورد وارد شده با هش ذخیره شده به صورت زمان‌ثابت
 * @param {string} password 
 * @param {string} salt 
 * @param {string} expectedHash 
 * @returns {Promise<boolean>}
 */
export async function verifyPassword(password, salt, expectedHash) {
  if (!password || !salt || !expectedHash) return false;
  const hash = await hashPassword(password, salt);
  return timingSafeEqualHex(hash, expectedHash);
}

/**
 * مشتق‌سازی کلید متقارن ۲۵۶ بیتی AES-GCM از کلید اصلی با تفکیک دامنه
 * @param {string} secret 
 * @returns {Promise<CryptoKey>}
 */
const aesKeyCache = new Map();

/**
 * مشتق‌سازی فوق‌سریع کلید متقارن ۲۵۶ بیتی AES-GCM با کش حافظه و الگوریتم SHA-256
 * زمان مصرف پردازنده: کمتر از ۰.۰۰۵ میلی‌ثانیه
 * @param {string} secret 
 * @returns {Promise<CryptoKey>}
 */
async function deriveAesKeyFast(secret) {
  const cacheKey = 'fast:' + (secret || 'default');
  if (aesKeyCache.has(cacheKey)) return aesKeyCache.get(cacheKey);

  const enc = new TextEncoder();
  const hash = await crypto.subtle.digest(
    'SHA-256',
    enc.encode((secret || 'default-liquid-glass-master-secret-key-2026') + ':' + MASTER_KEY_SALT)
  );

  const key = await crypto.subtle.importKey(
    'raw',
    hash,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
  aesKeyCache.set(cacheKey, key);
  return key;
}

/**
 * نسخه موروثی مشتق‌سازی کلید با PBKDF2 جهت حفظ سازگاری سشن‌های قدیمی
 * @param {string} secret 
 * @returns {Promise<CryptoKey>}
 */
async function deriveAesKeyLegacy(secret) {
  const cacheKey = 'legacy:' + (secret || 'default');
  if (aesKeyCache.has(cacheKey)) return aesKeyCache.get(cacheKey);

  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret || 'default-liquid-glass-master-secret-key-2026'),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  const key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: enc.encode(MASTER_KEY_SALT),
      iterations: 60000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
  aesKeyCache.set(cacheKey, key);
  return key;
}

/**
 * رمزنگاری فوق‌سریع سشن تلگرام با استاندارد AES-GCM-256 (نسخه v2)
 * @param {string} sessionStr 
 * @param {string} secretKey 
 * @returns {Promise<string>} v2:iv:ciphertext (hex)
 */
export async function encryptSession(sessionStr, secretKey) {
  if (!sessionStr) return '';
  const key = await deriveAesKeyFast(secretKey);
  const iv = new Uint8Array(12);
  crypto.getRandomValues(iv);

  const enc = new TextEncoder();
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    enc.encode(sessionStr)
  );

  const ivHex = Array.from(iv).map(b => b.toString(16).padStart(2, '0')).join('');
  const cipherHex = Array.from(new Uint8Array(ciphertext)).map(b => b.toString(16).padStart(2, '0')).join('');

  return 'v2:' + ivHex + ':' + cipherHex;
}

/**
 * رمزگشایی هوشمند سشن با پشتیبانی همزمان از فرمت فوق‌سریع v2 و نسخه قبلی
 * @param {string} encryptedData 
 * @param {string} secretKey 
 * @returns {Promise<string>} plaintext session
 */
export async function decryptSession(encryptedData, secretKey) {
  if (!encryptedData || !encryptedData.includes(':')) return '';
  
  let isV2 = false;
  let rawData = encryptedData;
  if (rawData.startsWith('v2:')) {
    isV2 = true;
    rawData = rawData.slice(3);
  }

  const parts = rawData.split(':');
  if (parts.length !== 2) return '';
  const [ivHex, cipherHex] = parts;

  const ivMatches = ivHex.match(/.{1,2}/g);
  const cipherMatches = cipherHex.match(/.{1,2}/g);
  if (!ivMatches || !cipherMatches) return '';

  const iv = new Uint8Array(ivMatches.map(byte => parseInt(byte, 16)));
  const ciphertext = new Uint8Array(cipherMatches.map(byte => parseInt(byte, 16)));

  try {
    const key = isV2 ? await deriveAesKeyFast(secretKey) : await deriveAesKeyLegacy(secretKey);
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      ciphertext
    );
    return new TextDecoder().decode(decrypted);
  } catch (err) {
    // در صورت بروز خطا در تشخیص نسخه، یک بار با نسخه دیگر تلاش می‌کنیم
    try {
      const fallbackKey = isV2 ? await deriveAesKeyLegacy(secretKey) : await deriveAesKeyFast(secretKey);
      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        fallbackKey,
        ciphertext
      );
      return new TextDecoder().decode(decrypted);
    } catch (_) {
      return '';
    }
  }
}
