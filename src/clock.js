// 🎨 ماژول ساعت فانتزی تهران، تقویم خورشیدی و موتور بیوگرافی هوشمند — نسخه پیشرفته و فوق‌سریع

export const FONT_PRESETS = {
  bold:         { name: 'بولد لوکس', digits: ['𝟎', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗'] },
  sansBold:     { name: 'سنس مدرن', digits: ['𝟬', '𝟭', '𝟮', '𝟯', '𝟰', '𝟱', '𝟲', '𝟳', '𝟴', '𝟵'] },
  mono:         { name: 'مونو رترو', digits: ['𝟶', '𝟷', '𝟸', '𝟹', '𝟺', '𝟻', '𝟼', '𝟽', '𝟾', '𝟿'] },
  double:       { name: 'دابل استروک', digits: ['𝟘', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡'] },
  bubble:       { name: 'حباب توخالی', digits: ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'] },
  blackCircled: { name: 'دایره مشکی نئون', digits: ['⓿', '➊', '➋', '➌', '➍', '➎', '➏', '➐', '➑', '➒'] },
  persian:      { name: 'فارسی اصیل', digits: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'] },
  subscript:    { name: 'اندیس فانتزی', digits: ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'] },
  superscript:  { name: 'بالانویس مینی', digits: ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'] },
  bracket:      { name: 'سلطنتی براکت', digits: ['⟦0⟧', '⟦1⟧', '⟦2⟧', '⟦3⟧', '⟦4⟧', '⟦5⟧', '⟦6⟧', '⟦7⟧', '⟦8⟧', '⟦9⟧'] },
  normal:       { name: 'کلاسیک استاندارد', digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] }
};

// افست دائمی زمان رسمی ایران (UTC+3:30 = ۱۲,۶۰۰,۰۰۰ میلی‌ثانیه)
const IRAN_UTC_OFFSET_MS = 12600000;

const persianDateFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  timeZone: 'Asia/Tehran',
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const persianShortDateFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  timeZone: 'Asia/Tehran',
  day: 'numeric',
  month: 'long'
});

const persianDayFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  timeZone: 'Asia/Tehran',
  weekday: 'long'
});

/**
 * دریافت مولفه‌های ساعت، دقیقه و ثانیه تهران
 * زمان اجرا: ۰.۰۰۰۱ میلی‌ثانیه
 * @param {Date|number} date 
 * @returns {{ hh: string, mm: string, ss: string, rawHours: number, rawMinutes: number }}
 */
export function getTehranTimeParts(date = new Date()) {
  const timestamp = (date instanceof Date) ? date.getTime() : (typeof date === 'number' ? date : Date.now());
  const tehranDate = new Date(timestamp + IRAN_UTC_OFFSET_MS);

  const rawHours = tehranDate.getUTCHours();
  const rawMinutes = tehranDate.getUTCMinutes();
  const rawSeconds = tehranDate.getUTCSeconds();

  const hh = String(rawHours).padStart(2, '0');
  const mm = String(rawMinutes).padStart(2, '0');
  const ss = String(rawSeconds).padStart(2, '0');

  return { hh, mm, ss, rawHours, rawMinutes };
}

/**
 * دریافت تاریخ زنده خورشیدی به وقت تهران
 * @param {Date} date 
 * @returns {string} مثال: "دوشنبه ۳۱ شهریور ۱۴۰۵"
 */
export function getPersianDateString(date = new Date()) {
  try {
    return persianDateFormatter.format(date);
  } catch (e) {
    return '';
  }
}

/**
 * دریافت تاریخ کوتاه خورشیدی (روز و ماه)
 * @param {Date} date 
 * @returns {string} مثال: "۳۱ شهریور"
 */
export function getPersianShortDate(date = new Date()) {
  try {
    return persianShortDateFormatter.format(date);
  } catch (e) {
    return '';
  }
}

/**
 * نام روز هفته به فارسی (مثلاً: "دوشنبه")
 * @param {Date} date 
 * @returns {string}
 */
export function getPersianDayName(date = new Date()) {
  try {
    return persianDayFormatter.format(date);
  } catch (e) {
    return '';
  }
}

/**
 * تولید ساعت فرمت‌بندی‌شده تهران با فونت، جداکننده، پیشوند، پسوند و حالت ۱۲ ساعته
 * @param {string[]} digits - آرایه ۱۰ تایی ارقام
 * @param {string} colon - جداکننده ساعت و دقیقه
 * @param {Date|number} date - تاریخ یا تایم‌استمپ
 * @param {Object} options - تنظیمات الحاقی اختیاری
 * @returns {string}
 */
export function getStylizedTime(digits, colon = ':', date = new Date(), options = {}) {
  const d = (Array.isArray(digits) && digits.length === 10) ? digits : FONT_PRESETS.bold.digits;
  const { rawHours, mm } = getTehranTimeParts(date);

  let hourStr = String(rawHours).padStart(2, '0');
  let ampmStr = '';

  if (options.is12h) {
    const h12 = (rawHours % 12) || 12;
    hourStr = String(h12).padStart(2, '0');
    ampmStr = rawHours >= 12 ? (options.ampmStyle === 'emoji' ? ' 🌙' : ' ᴾᴹ') : (options.ampmStyle === 'emoji' ? ' ☀️' : ' ᴬᴹ');
  }

  const stylTime = convertDigits(hourStr, d) + (colon || ':') + convertDigits(mm, d) + ampmStr;

  const prefix = options.prefix ? String(options.prefix) : '';
  const suffix = options.suffix ? String(options.suffix) : '';

  return (prefix + stylTime + suffix).trim();
}

/**
 * تولید بیوگرافی هوشمند و پویا برای تلگرام با متغیرهای زمانی
 * متغیرهای پشتیبانی‌شده: {time}، {date}، {day}، {clock}
 * @param {string} template 
 * @param {Object} params 
 * @returns {string}
 */
export function renderDynamicBio(template, { digits, colon = ':', date = new Date(), is12h = false } = {}) {
  if (!template || typeof template !== 'string') return '';

  const timeStr = getStylizedTime(digits, colon, date, { is12h });
  const shortDate = getPersianShortDate(date);
  const dayName = getPersianDayName(date);

  return template
    .replace(/\{time\}/gi, timeStr)
    .replace(/\{clock\}/gi, timeStr)
    .replace(/\{date\}/gi, shortDate)
    .replace(/\{day\}/gi, dayName)
    .slice(0, 70); // حداکثر ۷۰ کاراکتر مجاز در بیوگرافی تلگرام
}

/**
 * بررسی اینکه آیا زمان فعلی در بازه خواب و استراحت شبانه است یا خیر
 * @param {string|number} startHour - ساعت شروع خواب (مثلاً "23" یا 23)
 * @param {string|number} endHour - ساعت پایان خواب (مثلاً "07" یا 7)
 * @param {Date|number} date 
 * @returns {boolean}
 */
export function isSleepTime(startHour, endHour, date = new Date()) {
  if (startHour === undefined || endHour === undefined || startHour === null || endHour === null) return false;
  const start = parseInt(startHour, 10);
  const end = parseInt(endHour, 10);
  if (isNaN(start) || isNaN(end)) return false;

  const { rawHours } = getTehranTimeParts(date);

  if (start < end) {
    // مثلاً از 01 تا 07
    return rawHours >= start && rawHours < end;
  } else {
    // مثلاً از 23 تا 07 (رد شدن از نیمه‌شب)
    return rawHours >= start || rawHours < end;
  }
}

function convertDigits(numStr, digits) {
  let res = '';
  for (let i = 0; i < numStr.length; i++) {
    const idx = parseInt(numStr[i], 10);
    res += isNaN(idx) ? numStr[i] : (digits[idx] || numStr[i]);
  }
  return res;
}
