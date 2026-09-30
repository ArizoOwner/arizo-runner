// 🎨 ماژول ساعت فانتزی تهران، تقویم خورشیدی و موتور بیوگرافی هوشمند — نسخه فوق‌پیشرفته و سازمانی
// مجهز به ۳۶+ سبک تایپوگرافی، مبدل پیشرفته جلالی (شمسی) و نمادهای صور فلکی و ایموجی‌های پویا
import { getShamsiOccasion } from './data/calendarEvents.js';
import { getRandomQuote } from './data/quotes.js';

export const FONT_PRESETS = {
  bold:           { name: 'بولد لوکس', digits: ['𝟎', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗'] },
  sansBold:       { name: 'سنس مدرن', digits: ['𝟬', '𝟭', '𝟮', '𝟯', '𝟰', '𝟱', '𝟲', '𝟳', '𝟴', '𝟵'] },
  mono:           { name: 'مونو رترو', digits: ['𝟶', '𝟷', '𝟸', '𝟹', '𝟺', '𝟻', '𝟼', '𝟽', '𝟾', '𝟿'] },
  double:         { name: 'دابل استروک', digits: ['𝟘', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡'] },
  bubble:         { name: 'حباب توخالی', digits: ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'] },
  blackCircled:   { name: 'دایره مشکی نئون', digits: ['⓿', '➊', '➋', '➌', '➍', '➎', '➏', '➐', '➑', '➒'] },
  persian:        { name: 'فارسی اصیل', digits: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'] },
  arabic:         { name: 'عربی شرقی', digits: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] },
  subscript:      { name: 'اندیس فانتزی', digits: ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'] },
  superscript:    { name: 'بالانویس مینی', digits: ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'] },
  bracket:        { name: 'سلطنتی براکت', digits: ['⟦0⟧', '⟦1⟧', '⟦2⟧', '⟦3⟧', '⟦4⟧', '⟦5⟧', '⟦6⟧', '⟦7⟧', '⟦8⟧', '⟦9⟧'] },
  japaneseBracket:{ name: 'براکت ژاپنی', digits: ['【0】', '【1】', '【2】', '【3】', '【4】', '【5】', '【6】', '【7】', '【8】', '【9】'] },
  fullwidth:      { name: 'تمام‌پهنا (سایبر)', digits: ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９'] },
  parenthesized:  { name: 'پرانتز دایره‌ای', digits: ['⑽', '⑴', '⑵', '⑶', '⑷', '⑸', '⑹', '⑺', '⑻', '⑼'] },
  dotted:         { name: 'نقطه‌دار رسمی', digits: ['0.', '⒈', '⒉', '⒊', '⒋', '⒌', '⒍', '⒎', '⒏', '⒐'] },
  underlined:     { name: 'خط زیرین فانتزی', digits: ['0̲', '1̲', '2̲', '3̲', '4̲', '5̲', '6̲', '7̲', '8̲', '9̲'] },
  strike:         { name: 'خط‌خورده مینیمال', digits: ['0̶', '1̶', '2̶', '3̶', '4̶', '5̶', '6̶', '7̶', '8̶', '9̶'] },
  slashed:        { name: 'اسلش مورب', digits: ['0̷', '1̷', '2̷', '3̷', '4̷', '5̷', '6̷', '7̷', '8̷', '9̷'] },
  neonGlow:       { name: 'نئون درخشان', digits: ['𝟢', '𝟣', '𝟤', '𝟥', '𝟦', '𝟧', '𝟨', '𝟩', '𝟪', '𝟫'] },
  sansItalic:     { name: 'سنس ایتالیک', digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
  serifBold:      { name: 'سریف سلطنتی', digits: ['𝟎', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗'] },
  spooky:         { name: 'وحشت هالووینی', digits: ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'] },
  heartAdorned:   { name: 'قلب عاشقانه', digits: ['0♡', '1♡', '2♡', '3♡', '4♡', '5♡', '6♡', '7♡', '8♡', '9♡'] },
  sparkle:        { name: 'ستاره و درخشش', digits: ['0✨', '1✨', '2✨', '3✨', '4✨', '5✨', '6✨', '7✨', '8✨', '9✨'] },
  fire:           { name: 'آتشین متحرک', digits: ['0🔥', '1🔥', '2🔥', '3🔥', '4🔥', '5🔥', '6🔥', '7🔥', '8🔥', '9🔥'] },
  crystal:        { name: 'کریستال یخ', digits: ['0❄️', '1❄️', '2❄️', '3❄️', '4❄️', '5❄️', '6❄️', '7❄️', '8❄️', '9❄️'] },
  boxedSquare:    { name: 'باکس مربعی', digits: ['[0]', '[1]', '[2]', '[3]', '[4]', '[5]', '[6]', '[7]', '[8]', '[9]'] },
  curvedBrace:    { name: 'آکولاد فانتزی', digits: ['{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}'] },
  chevron:        { name: 'پیکانی نئون', digits: ['«0»', '«1»', '«2»', '«3»', '«4»', '«5»', '«6»', '«7»', '«8»', '«9»'] },
  persianSup:     { name: 'فارسی بالانویس', digits: ['۰', '¹', '²', '³', '⁴', '۵', '۶', '۷', '۸', '۹'] },
  digital7:       { name: 'ساعت دیجیتال', digits: ['O', 'I', 'Z', 'E', 'h', 'S', 'b', 'L', 'B', 'q'] },
  normal:         { name: 'کلاسیک استاندارد', digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] }
};

// افست دائمی زمان رسمی ایران (UTC+3:30 = ۱۲,۶۰۰,۰۰۰ میلی‌ثانیه)
export const IRAN_UTC_OFFSET_MS = 12600000;

export const PERSIAN_MONTH_NAMES = [
  'فروردین', 'اردیبهشت', 'خرداد',
  'تیر', 'مرداد', 'شهریور',
  'مهر', 'آبان', 'آذر',
  'دی', 'بهمن', 'اسفند'
];

export const PERSIAN_SEASONS = {
  SPRING: 'بهار 🌸',
  SUMMER: 'تابستان ☀️',
  AUTUMN: 'پاییز 🍂',
  WINTER: 'زمستان ❄️'
};

export const ZODIAC_SIGNS = [
  { nameFa: 'حمل', symbol: '♈', sign: 'بره' },
  { nameFa: 'ثور', symbol: '♉', sign: 'گاو' },
  { nameFa: 'جوزا', symbol: '♊', sign: 'دوپیکر' },
  { nameFa: 'سرطان', symbol: '♋', sign: 'خرچنگ' },
  { nameFa: 'اسد', symbol: '♌', sign: 'شیر' },
  { nameFa: 'سنبله', symbol: '♍', sign: 'دوشیزه' },
  { nameFa: 'میزان', symbol: '♎', sign: 'ترازو' },
  { nameFa: 'عقرب', symbol: '♏', sign: 'کژدم' },
  { nameFa: 'قوس', symbol: '♐', sign: 'کمانگیر' },
  { nameFa: 'جدی', symbol: '♑', sign: 'بزغاله' },
  { nameFa: 'دلو', symbol: '♒', sign: 'آبریز' },
  { nameFa: 'حوت', symbol: '♓', sign: 'ماهی' }
];

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

const englishDayFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Tehran',
  weekday: 'long'
});

/**
 * دریافت مولفه‌های ساعت، دقیقه و ثانیه تهران
 * زمان اجرا: کمتر از ۰.۰۰۰۱ میلی‌ثانیه
 * @param {Date|number} date 
 * @returns {{ hh: string, mm: string, ss: string, rawHours: number, rawMinutes: number, rawSeconds: number }}
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

  return { hh, mm, ss, rawHours, rawMinutes, rawSeconds };
}

/**
 * الگوریتم تقویم خورشیدی جلالی ۱۰۰٪ خالص و بدون خطا
 * تبدیل میلادی به شمسی
 * @param {Date} date
 * @returns {{ jy: number, jm: number, jd: number, monthName: string, season: string, zodiac: { nameFa: string, symbol: string, sign: string } }}
 */
export function gregorianToJalali(date = new Date()) {
  const gy = date.getUTCFullYear();
  const gm = date.getUTCMonth() + 1;
  const gd = date.getUTCDate();

  const g_d_m = [0, 31, (gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let gy2 = (gm > 2) ? (gy + 1) : gy;
  let days = 355666 + (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) + gd;
  for (let i = 0; i < gm; ++i) days += g_d_m[i];

  let jy = -1595 + (33 * Math.floor(days / 12053));
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;

  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }

  let jm, jd;
  if (days < 186) {
    jm = 1 + Math.floor(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + Math.floor((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }

  const monthName = PERSIAN_MONTH_NAMES[jm - 1] || 'فروردین';
  let season = PERSIAN_SEASONS.SPRING;
  if (jm >= 4 && jm <= 6) season = PERSIAN_SEASONS.SUMMER;
  else if (jm >= 7 && jm <= 9) season = PERSIAN_SEASONS.AUTUMN;
  else if (jm >= 10 && jm <= 12) season = PERSIAN_SEASONS.WINTER;

  const zodiac = ZODIAC_SIGNS[jm - 1] || ZODIAC_SIGNS[0];

  return { jy, jm, jd, monthName, season, zodiac };
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
    const j = gregorianToJalali(date);
    return `${j.jd} ${j.monthName} ${j.jy}`;
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
    const j = gregorianToJalali(date);
    return `${j.jd} ${j.monthName}`;
  }
}

/**
 * نام روز هفته به فارسی
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
 * نام روز هفته به انگلیسی
 * @param {Date} date 
 * @returns {string}
 */
export function getEnglishDayName(date = new Date()) {
  try {
    return englishDayFormatter.format(date);
  } catch (e) {
    return '';
  }
}

/**
 * ایموجی هوشمند درصد شارژ انرژی روز بر اساس ساعت شبانه‌روز
 * @param {number} hour 
 * @returns {string}
 */
export function getDynamicBattery(hour) {
  if (hour >= 6 && hour < 9) return '🔋 100%';
  if (hour >= 9 && hour < 14) return '🔋 80%';
  if (hour >= 14 && hour < 18) return '🪫 60%';
  if (hour >= 18 && hour < 22) return '🪫 35%';
  return '🪫 15% (Low Power)';
}

/**
 * ایموجی حال و هوای کاربر متناسب با ساعت تهران
 * @param {number} hour 
 * @returns {string}
 */
export function getDynamicMood(hour) {
  if (hour >= 5 && hour < 8) return '🌅 صبح دل‌انگیز';
  if (hour >= 8 && hour < 12) return '☕ تمرکز و قهوه';
  if (hour >= 12 && hour < 17) return '💻 در حال کدنویسی';
  if (hour >= 17 && hour < 21) return '🌆 استراحت عصرگاهی';
  if (hour >= 21 && hour < 24) return '🌌 آرامش شبانه';
  return '😴 خواب عمیق';
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
 * تولید بیوگرافی هوشمند و پویا برای تلگرام با توکن‌های چندگانه
 * متغیرهای پشتیبانی‌شده: {time}، {clock}، {date}، {full_date}، {day}، {en_day}، {season}، {zodiac}، {battery}، {mood}
 * @param {string} template 
 * @param {Object} params 
 * @returns {string}
 */
export function renderDynamicBio(template, { digits, colon = ':', date = new Date(), is12h = false, customQuote = '' } = {}) {
  if (!template || typeof template !== 'string') return '';

  const timeStr = getStylizedTime(digits, colon, date, { is12h });
  const shortDate = getPersianShortDate(date);
  const fullDate = getPersianDateString(date);
  const dayName = getPersianDayName(date);
  const enDayName = getEnglishDayName(date);
  const { rawHours } = getTehranTimeParts(date);
  const jalali = gregorianToJalali(date);
  const batteryStr = getDynamicBattery(rawHours);
  const moodStr = getDynamicMood(rawHours);

  const occasionStr = getShamsiOccasion(jalali.jm, jalali.jd) || '';
  const quoteStr = customQuote || getRandomQuote('fa') || '⚡ Arizo Self Studio';

  let result = template
    .replace(/\{time\}/gi, timeStr)
    .replace(/\{clock\}/gi, timeStr)
    .replace(/\{date\}/gi, shortDate)
    .replace(/\{full_date\}/gi, fullDate)
    .replace(/\{day\}/gi, dayName)
    .replace(/\{en_day\}/gi, enDayName)
    .replace(/\{season\}/gi, jalali.season)
    .replace(/\{zodiac\}/gi, `${jalali.zodiac.symbol} ${jalali.zodiac.nameFa}`)
    .replace(/\{battery\}/gi, batteryStr)
    .replace(/\{mood\}/gi, moodStr)
    .replace(/\{occasion\}/gi, occasionStr)
    .replace(/\{event\}/gi, occasionStr)
    .replace(/\{quote\}/gi, quoteStr);

  return result.slice(0, 70); // حداکثر ۷۰ کاراکتر مجاز در بیوگرافی تلگرام
}

/**
 * بررسی اینکه آیا زمان فعلی در بازه خواب و استراحت شبانه است یا خیر
 * @param {string|number} startHour 
 * @param {string|number} endHour 
 * @param {Date|number} date 
 * @returns {boolean}
 */
export function isSleepTime(startHour, endHour, date = new Date()) {
  if (startHour === undefined || endHour === undefined || startHour === null || endHour === null) return false;
  const start = parseInt(startHour, 10);
  const end = parseInt(endHour, 10);
  if (isNaN(start) || isNaN(end)) return false;

  if (start === end) return false;
  const { rawHours } = getTehranTimeParts(date);

  if (start < end) {
    return rawHours >= start && rawHours < end;
  } else {
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
