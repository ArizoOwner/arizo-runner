/**
 * 📚 Curated Dynamic Bio Quotes Database
 * Contains classic Persian poetry, modern philosophical insights, and tech wisdom
 */

export const PERSIAN_QUOTES = [
  'زندگی صحنه یکتای هنرمندی ماست...',
  'تو مرا جان و جهانی، چه کنم جان و جهان را؟',
  'صبر تلخ است ولیکن بر شیرین دارد.',
  'در نومیدی بسی امید است، پایان شب سیه سپید است.',
  'سعدیا مرد نکونام نمیرد هرگز...',
  'چو ایران نباشد تن من مباد!',
  'بنی آدم اعضای یکدیگرند، که در آفرینش ز یک گوهرند.',
  'جهان یادگار است و ما رفتنی، به گیتی نماند به جز مردمی.',
  'آسودگی من عدم آسودگی من است.',
  'گر نگهدار من آن است که من می‌دانم، شیشه را در بغل سنگ نگه می‌دارد.',
  'عاشقی پیداست از زاری دل، نیست بیماری چو بیماری دل.',
  'هر چه دلم خواست نه آن می‌شود، هر چه خدا خواست همان می‌شود.',
  'بسی رنج بردم در این سال سی، عجم زنده کردم بدین پارسی.',
  'دل می‌رود ز دستم صاحبدلان خدا را...',
  'ای دل غافل بدان قرن دگر تقویم نیست.',
  'هیچ صیادی در جوی حقیری که به گودالی می‌ریزد، مرواریدی صید نخواهد کرد.',
  'سخت می‌گیرد جهان بر مردمان سخت‌کوش.',
  'ما ز یاران چشم یاری داشتیم، خود غلط بود آنچه می‌پنداشتیم.',
  'در کوی نیک‌نامی ما را گذر ندادند، گر تو نمی‌پسندی تغییر کن قضا را.',
  'خدا گر ز حکمت ببندد دری، ز رحمت گشاید در دیگری.'
];

export const TECH_QUOTES = [
  'Simplicity is prerequisite for reliability. — Edsger Dijkstra',
  'Code is like humor. When you have to explain it, it’s bad.',
  'First, solve the problem. Then, write the code. — John Johnson',
  'Make it work, make it right, make it fast. — Kent Beck',
  'Experience is the name everyone gives to their mistakes.',
  'Talk is cheap. Show me the code. — Linus Torvalds',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Software is eating the world. — Marc Andreessen',
  'Stay hungry, stay foolish. — Steve Jobs',
  'The only way to go fast is to go well. — Robert C. Martin'
];

/**
 * دریافت یک نقل‌قول تصادفی
 * @param {'fa'|'en'|'mixed'} lang 
 * @returns {string}
 */
export function getRandomQuote(lang = 'fa') {
  if (lang === 'en') {
    return TECH_QUOTES[Math.floor(Math.random() * TECH_QUOTES.length)];
  }
  if (lang === 'mixed') {
    const pool = [...PERSIAN_QUOTES, ...TECH_QUOTES];
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return PERSIAN_QUOTES[Math.floor(Math.random() * PERSIAN_QUOTES.length)];
}
