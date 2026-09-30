/**
 * 🛡️ RFC 6238 Compliant Two-Factor Authentication (TOTP / Google Authenticator) Engine
 * 100% Native WebCrypto — Fully compatible with Cloudflare Workers and Node.js
 */

const BASE32_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

/**
 * تبدیل رشته Base32 به Uint8Array
 * @param {string} base32 
 * @returns {Uint8Array}
 */
export function base32ToBytes(base32) {
  const clean = base32.toUpperCase().replace(/[^A-Z2-7]/g, '');
  let bits = '';
  for (let i = 0; i < clean.length; i++) {
    const val = BASE32_CHARS.indexOf(clean[i]);
    if (val === -1) continue;
    bits += val.toString(2).padStart(5, '0');
  }

  const bytes = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes.push(parseInt(bits.slice(i, i + 8), 2));
  }
  return new Uint8Array(bytes);
}

/**
 * تبدیل بایت به رشته Base32
 * @param {Uint8Array} bytes 
 * @returns {string}
 */
export function bytesToBase32(bytes) {
  let bits = '';
  for (let i = 0; i < bytes.length; i++) {
    bits += bytes[i].toString(2).padStart(8, '0');
  }
  let base32 = '';
  for (let i = 0; i < bits.length; i += 5) {
    const chunk = bits.slice(i, i + 5).padEnd(5, '0');
    base32 += BASE32_CHARS[parseInt(chunk, 2)];
  }
  return base32;
}

/**
 * تولید کلید محرمانه تصادفی Base32 برای فعال‌سازی 2FA
 * @param {number} byteLength 
 * @returns {string}
 */
export function generateTotpSecret(byteLength = 20) {
  const random = new Uint8Array(byteLength);
  crypto.getRandomValues(random);
  return bytesToBase32(random);
}

/**
 * تولید کدهای بازیابی یک‌بار مصرف اضطراری (Emergency Recovery Codes)
 * @param {number} count 
 * @returns {string[]}
 */
export function generateBackupCodes(count = 8) {
  const codes = [];
  for (let i = 0; i < count; i++) {
    const buf = new Uint8Array(4);
    crypto.getRandomValues(buf);
    const num = Math.floor(Math.random() * 90000000) + 10000000;
    const str = String(num);
    codes.push(`${str.slice(0, 4)}-${str.slice(4)}`);
  }
  return codes;
}

/**
 * محاسبه کد ۶ رقمی TOTP برای یک بازه زمانی مشخص
 * @param {string} secretBase32 
 * @param {number} counter 
 * @returns {Promise<string>}
 */
export async function generateTotpCode(secretBase32, counter = Math.floor(Date.now() / 1000 / 30)) {
  const keyBytes = base32ToBytes(secretBase32);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyBytes,
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign']
  );

  const counterBuf = new ArrayBuffer(8);
  const view = new DataView(counterBuf);
  view.setBigUint64(0, BigInt(counter), false); // Big-endian

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, counterBuf);
  const sigBytes = new Uint8Array(signature);

  const offset = sigBytes[sigBytes.length - 1] & 0x0f;
  const binary =
    ((sigBytes[offset] & 0x7f) << 24) |
    ((sigBytes[offset + 1] & 0xff) << 16) |
    ((sigBytes[offset + 2] & 0xff) << 8) |
    (sigBytes[offset + 3] & 0xff);

  const otp = binary % 1000000;
  return String(otp).padStart(6, '0');
}

/**
 * اعتبارسنجی کد ۲FA وارد شده توسط کاربر با کنترل شیفت زمانی (±1 بازه ۳۰ ثانیه‌ای)
 * @param {string} token - کد ۶ رقمی ارسالی کاربر
 * @param {string} secretBase32 - کلید محرمانه کاربر
 * @returns {Promise<boolean>}
 */
export async function verifyTotpToken(token, secretBase32) {
  if (!token || !secretBase32) return false;
  const cleanToken = String(token).trim();
  if (cleanToken.length !== 6 || !/^\d{6}$/.test(cleanToken)) return false;

  const currentCounter = Math.floor(Date.now() / 1000 / 30);

  // بررسی در بازه زمانی [الان - ۳۰ ثانیه, الان, الان + ۳۰ ثانیه] جهت رفع تأخیر کلاینت
  for (let offset = -1; offset <= 1; offset++) {
    const expected = await generateTotpCode(secretBase32, currentCounter + offset);
    if (cleanToken === expected) {
      return true;
    }
  }
  return false;
}

/**
 * ایجاد لینک استاندار برای اسکن در اپ‌های Authenticator
 * @param {string} username 
 * @param {string} secretBase32 
 * @param {string} issuer 
 * @returns {string}
 */
export function getTotpAuthUri(username, secretBase32, issuer = 'Arizo Studio') {
  const encUser = encodeURIComponent(username);
  const encIssuer = encodeURIComponent(issuer);
  return `otpauth://totp/${encIssuer}:${encUser}?secret=${secretBase32}&issuer=${encIssuer}&algorithm=SHA1&digits=6&period=30`;
}
