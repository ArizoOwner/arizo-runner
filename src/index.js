import { TelegramClient, Api } from 'telegram';
import { StringSession } from 'telegram/sessions/index.js';
import { MTProtoSender } from 'telegram/network/index.js';
import { LAYER } from 'telegram/tl/AllTLObjects.js';
import { computeCheck } from 'telegram/Password.js';
import { getStylizedTime, renderDynamicBio, isSleepTime } from './clock.js';
import { panelHTML } from './panel.js';
import {
  hashPassword,
  verifyPassword,
  generateRandomHex,
  generateRedeemCode,
  encryptSession,
  decryptSession,
  validatePasswordStrength
} from './crypto.js';

// هدرهای امنیتی درجه سازمانی (Enterprise Security & CSP)
const SECURITY_HEADERS = {
  'Content-Security-Policy': "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https:;",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
};

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
      ...SECURITY_HEADERS,
      ...extraHeaders
    },
  });
}

function getClientIP(request) {
  return request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    '127.0.0.1';
}

const memoryRateLimits = new Map();

function checkRateLimit(env, key, maxHits, windowSec) {
  const now = Math.floor(Date.now() / 1000);
  if (memoryRateLimits.size > 500) {
    for (const [k, v] of memoryRateLimits.entries()) {
      if (now > v.reset) memoryRateLimits.delete(k);
    }
  }
  const entry = memoryRateLimits.get(key);
  if (!entry || now > entry.reset) {
    const reset = now + windowSec;
    memoryRateLimits.set(key, { hits: 1, reset });
    return { allowed: true, remaining: maxHits - 1, reset };
  }
  if (entry.hits >= maxHits) {
    return { allowed: false, remaining: 0, reset: entry.reset };
  }
  entry.hits += 1;
  return { allowed: true, remaining: maxHits - entry.hits, reset: entry.reset };
}

async function getAuthUser(request, env) {
  const authHeader = request.headers.get('Authorization') || '';
  let token = '';
  if (authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7).trim();
  }
  if (!token) return null;

  const sessionData = await env.KV.get('token:' + token, 'json');
  if (!sessionData || !sessionData.username) return null;

  const userData = await env.KV.get('user:' + sessionData.username, 'json');
  if (!userData) return null;

  return { username: sessionData.username, user: userData, token };
}

/**
 * احراز هویت اختصاصی مدیر ارشد (Admin Master Authentication)
 */
async function getAdminAuth(request, env) {
  const authHeader = request.headers.get('Authorization') || '';
  let token = '';
  if (authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7).trim();
  }
  if (!token) return false;

  // ۱. بررسی سشن مستقیم ادمین مستر
  const adminSession = await env.KV.get('admin_token:' + token);
  if (adminSession) return true;

  // ۲. بررسی توکن کاربری کاربرانی که سطح دسترسی ادمین دارند
  const sessionData = await env.KV.get('token:' + token, 'json');
  if (sessionData && sessionData.username) {
    const userData = await env.KV.get('user:' + sessionData.username, 'json');
    if (userData) {
      if (userData.role === 'admin' || sessionData.username === 'amirmaster' || sessionData.username === 'admin') {
        return true;
      }
    }
  }

  return false;
}

/**
 * بررسی هوشمند و خودکار وضعیت اعتبار اشتراک کاربر
 */
export function checkUserSubscription(user) {
  if (!user) return { active: false, reason: 'کاربر نامعتبر است' };
  if (user.role === 'admin' || user.username === 'amirmaster' || user.username === 'admin') {
    return { active: true, isLifetime: true, plan: 'lifetime', planName: user.planName || 'دائمی و نامحدود (مدیر ارشد)', remainingDays: 9999, remainingMs: Infinity };
  }
  const plan = user.plan || '1_month';
  if (plan === 'lifetime' || user.subscriptionUntil === null || user.subscriptionUntil === 0) {
    return { active: true, isLifetime: true, plan: 'lifetime', planName: user.planName || 'دائمی و نامحدود', remainingDays: 9999, remainingMs: Infinity };
  }

  const expiresAt = user.subscriptionUntil;
  if (!expiresAt) {
    const created = user.createdAt || Date.now();
    const fallbackExpiry = created + (user.durationDays || 30) * 86400 * 1000;
    const remainingMs = fallbackExpiry - Date.now();
    if (remainingMs <= 0) {
      return { active: false, expired: true, plan, planName: user.planName || 'منقضی‌شده', remainingDays: 0, remainingMs: 0, expiresAt: fallbackExpiry };
    }
    const remainingDays = Math.ceil(remainingMs / (86400 * 1000));
    return { active: true, plan, planName: user.planName || `${remainingDays} روزه`, remainingDays, remainingMs, expiresAt: fallbackExpiry };
  }

  const remainingMs = expiresAt - Date.now();
  if (remainingMs <= 0) {
    return { active: false, expired: true, plan, planName: user.planName || 'منقضی‌شده', remainingDays: 0, remainingMs: 0, expiresAt };
  }

  const remainingDays = Math.ceil(remainingMs / (86400 * 1000));
  return {
    active: true,
    plan,
    planName: user.planName || (user.durationDays ? `${user.durationDays} روزه` : `${remainingDays} روزه`),
    remainingDays,
    remainingMs,
    expiresAt
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: { ...CORS_HEADERS, ...SECURITY_HEADERS } });
    }

    const clientIP = getClientIP(request);

    // ۱. سرو رابط کاربری پنل با تزریق هدرهای امنیتی
    if (url.pathname === '/') {
      return new Response(panelHTML(env), {
        headers: {
          'Content-Type': 'text/html;charset=utf-8',
          ...SECURITY_HEADERS
        },
      });
    }

    // ==========================================
    // 👑 بخش پنل مدیریت ادمین (Admin Management)
    // ==========================================

    // ورود به پنل ادمین با مستر پسورد
    if (url.pathname === '/api/admin/login' && request.method === 'POST') {
      const rl = await checkRateLimit(env, `rl:admin:${clientIP}`, 5, 300);
      if (!rl.allowed) {
        return json({ error: 'تلاش بیش از حد برای ورود به پنل مدیریت. لطفاً ۵ دقیقه دیگر تلاش کنید.' }, 429);
      }

      try {
        const { password } = await request.json();
        const expectedPassword = env.ADMIN_PASSWORD || 'admin_liquid_secret_2026';

        if (!password || password !== expectedPassword) {
          return json({ error: 'رمز عبور مدیریت نادرست است.' }, 401);
        }

        const adminToken = generateRandomHex(32);
        await env.KV.put('admin_token:' + adminToken, JSON.stringify({
          role: 'superadmin',
          createdAt: Date.now(),
          ip: clientIP
        }), {
          expirationTtl: 14 * 86400 // انقضای ۱۴ روزه
        });

        return json({ ok: true, token: adminToken });
      } catch (err) {
        return json({ error: 'خطا در احراز هویت مدیریت' }, 500);
      }
    }

    // دریافت آمار سیستم برای ادمین
    if (url.pathname === '/api/admin/stats' && request.method === 'GET') {
      const isAdmin = await getAdminAuth(request, env);
      if (!isAdmin) return json({ error: 'دسترسی غیرمجاز' }, 401);

      try {
        const usersList = await env.KV.get('users_list', 'json') || [];
        const codesList = await env.KV.get('codes_list', 'json') || [];

        // خواندن وضعیت کاربران
        let activeBotsCount = 0;
        await Promise.all(
          usersList.map(async (uname) => {
            const u = await env.KV.get('user:' + uname, 'json');
            if (u && u.telegram?.enabled && u.telegram?.sessionEncrypted) {
              activeBotsCount++;
            }
          })
        );

        // خواندن وضعیت کدهای ردیم
        let usedCodesCount = 0;
        await Promise.all(
          codesList.map(async (code) => {
            const c = await env.KV.get('code:' + code, 'json');
            if (c && c.isUsed) usedCodesCount++;
          })
        );

        return json({
          ok: true,
          totalUsers: usersList.length,
          activeBots: activeBotsCount,
          totalCodes: codesList.length,
          usedCodes: usedCodesCount,
          availableCodes: codesList.length - usedCodesCount
        });
      } catch (err) {
        return json({ error: 'خطا در دریافت آمار' }, 500);
      }
    }

    // دریافت لیست کدهای لایسنس
    if (url.pathname === '/api/admin/codes' && request.method === 'GET') {
      const isAdmin = await getAdminAuth(request, env);
      if (!isAdmin) return json({ error: 'دسترسی غیرمجاز' }, 401);

      try {
        const codesList = await env.KV.get('codes_list', 'json') || [];
        const codes = await Promise.all(
          codesList.map(async (code) => {
            const data = await env.KV.get('code:' + code, 'json');
            return data || { code, isUsed: false };
          })
        );
        return json({ ok: true, codes: codes.reverse() });
      } catch (err) {
        return json({ error: 'خطا در دریافت کدها' }, 500);
      }
    }

    // ساخت دسته‌ای کدهای ردیم/لایسنس برای فروش با قابلیت تعیین روز سفارشی توسط ادمین
    if (url.pathname === '/api/admin/codes/create' && request.method === 'POST') {
      const isAdmin = await getAdminAuth(request, env);
      if (!isAdmin) return json({ error: 'دسترسی غیرمجاز' }, 401);

      try {
        const { count = 1, plan = '1_month', durationDays, customDays } = await request.json();
        const num = Math.min(Math.max(1, parseInt(count, 10) || 1), 20); // حداکثر ۲۰ کد در هر بار

        let calculatedDays = 30;
        let planLabel = '۱ ماهه (۳۰ روز)';

        if (plan === 'lifetime') {
          calculatedDays = 0;
          planLabel = 'دائمی و نامحدود';
        } else if (plan === '3_months') {
          calculatedDays = 90;
          planLabel = '۳ ماهه (۹۰ روز)';
        } else if (plan === '6_months') {
          calculatedDays = 180;
          planLabel = '۶ ماهه (۱۸۰ روز)';
        } else if (plan === 'custom') {
          calculatedDays = Math.max(1, parseInt(customDays || durationDays || 15, 10));
          planLabel = `${calculatedDays} روزه (سفارشی)`;
        } else {
          calculatedDays = 30;
          planLabel = '۱ ماهه (۳۰ روز)';
        }

        let codesList = await env.KV.get('codes_list', 'json') || [];
        const createdCodes = [];

        for (let i = 0; i < num; i++) {
          const code = generateRedeemCode();
          const codeObj = {
            code,
            plan: plan || '1_month',
            planName: planLabel,
            durationDays: calculatedDays,
            createdAt: Date.now(),
            isUsed: false,
            usedBy: null,
            usedAt: null
          };

          await env.KV.put('code:' + code, JSON.stringify(codeObj));
          codesList.push(code);
          createdCodes.push(codeObj);
        }

        await env.KV.put('codes_list', JSON.stringify(codesList));
        return json({ ok: true, createdCodes });
      } catch (err) {
        return json({ error: 'خطا در تولید کدهای ردیم' }, 500);
      }
    }

    // حذف یک کد لایسنس توسط ادمین
    if (url.pathname === '/api/admin/codes/delete' && request.method === 'POST') {
      const isAdmin = await getAdminAuth(request, env);
      if (!isAdmin) return json({ error: 'دسترسی غیرمجاز' }, 401);

      try {
        const { code } = await request.json();
        if (!code) return json({ error: 'کد الزامی است' }, 400);

        await env.KV.delete('code:' + code);
        let codesList = await env.KV.get('codes_list', 'json') || [];
        codesList = codesList.filter(c => c !== code);
        await env.KV.put('codes_list', JSON.stringify(codesList));

        return json({ ok: true });
      } catch (err) {
        return json({ error: 'خطا در حذف کد' }, 500);
      }
    }

    // دریافت لیست تمام کاربران برای ادمین با نمایش اعتبار، وضعیت تعلیق و سطح دسترسی
    if (url.pathname === '/api/admin/users' && request.method === 'GET') {
      const isAdmin = await getAdminAuth(request, env);
      if (!isAdmin) return json({ error: 'دسترسی غیرمجاز' }, 401);

      try {
        const usersList = await env.KV.get('users_list', 'json') || [];
        const users = await Promise.all(
          usersList.map(async (uname) => {
            const u = await env.KV.get('user:' + uname, 'json');
            if (!u) return { username: uname, exists: false };
            const sub = checkUserSubscription(u);
            const isSuspended = !sub.active || u.isSuspended;
            const isUserAdmin = u.role === 'admin' || uname === 'amirmaster' || uname === 'admin';
            return {
              username: uname,
              role: isUserAdmin ? 'admin' : 'user',
              isAdmin: isUserAdmin,
              createdAt: u.createdAt,
              hasTelegram: !!u.telegram?.sessionEncrypted,
              enabled: u.telegram?.enabled ?? false,
              isSuspended,
              isExpired: !sub.active,
              remainingText: sub.isLifetime ? 'دائمی ♾️' : (sub.active ? `${sub.remainingDays} روز` : 'منقضی‌شده 🔴'),
              plan: u.plan || 'استاندارد',
              planName: u.planName || sub.planName,
              durationDays: u.durationDays,
              subscriptionUntil: u.subscriptionUntil,
              licenseCode: u.licenseCode || 'بدون کد',
              lastUpdate: u.status?.lastUpdate,
              lastTime: u.status?.lastTime,
              error: u.status?.error
            };
          })
        );
        return json({ ok: true, users: users.reverse() });
      } catch (err) {
        return json({ error: 'خطا در دریافت کاربران' }, 500);
      }
    }

    // اقدامات مدیریتی روی یک کاربر
    if (url.pathname === '/api/admin/users/action' && request.method === 'POST') {
      const isAdmin = await getAdminAuth(request, env);
      if (!isAdmin) return json({ error: 'دسترسی غیرمجاز' }, 401);

      try {
        const body = await request.json();
        const { username, action } = body;
        const cleanUser = String(username || '').trim().toLowerCase();
        const userData = await env.KV.get('user:' + cleanUser, 'json');
        if (!userData) return json({ error: 'کاربر یافت نشد' }, 404);

        if (action === 'toggle') {
          if (userData.telegram) {
            userData.telegram.enabled = !userData.telegram.enabled;
            await env.KV.put('user:' + cleanUser, JSON.stringify(userData));
          }
          return json({ ok: true, enabled: userData.telegram?.enabled });
        }

        if (action === 'toggle_suspend') {
          userData.isSuspended = !userData.isSuspended;
          if (userData.isSuspended && userData.telegram) {
            userData.telegram.enabled = false;
          }
          await env.KV.put('user:' + cleanUser, JSON.stringify(userData));
          return json({ ok: true, isSuspended: userData.isSuspended });
        }

        if (action === 'toggle_role') {
          const currentRole = userData.role || (cleanUser === 'amirmaster' || cleanUser === 'admin' ? 'admin' : 'user');
          userData.role = currentRole === 'admin' ? 'user' : 'admin';
          await env.KV.put('user:' + cleanUser, JSON.stringify(userData));
          return json({ ok: true, role: userData.role, isAdmin: userData.role === 'admin' });
        }

        if (action === 'disconnect') {
          userData.telegram = null;
          userData.status = null;
          await env.KV.put('user:' + cleanUser, JSON.stringify(userData));
          return json({ ok: true });
        }

        if (action === 'delete') {
          await env.KV.delete('user:' + cleanUser);
          let usersList = await env.KV.get('users_list', 'json') || [];
          usersList = usersList.filter(u => u !== cleanUser);
          await env.KV.put('users_list', JSON.stringify(usersList));
          return json({ ok: true, deleted: true });
        }

        if (action === 'set_plan') {
          const targetPlan = body.plan || '1_month';
          if (targetPlan === 'lifetime') {
            userData.plan = 'lifetime';
            userData.planName = 'دائمی و نامحدود';
            userData.durationDays = 0;
            userData.subscriptionUntil = null;
          } else {
            let days = 30;
            let label = '۱ ماهه (۳۰ روز)';
            if (targetPlan === '3_months') { days = 90; label = '۳ ماهه (۹۰ روز)'; }
            else if (targetPlan === '6_months') { days = 180; label = '۶ ماهه (۱۸۰ روز)'; }
            else if (targetPlan === 'custom') {
              days = Math.max(1, parseInt(body.customDays || body.durationDays || 15, 10));
              label = `${days} روزه (سفارشی)`;
            }
            userData.plan = targetPlan;
            userData.planName = label;
            userData.durationDays = days;
            userData.subscriptionUntil = Date.now() + days * 86400 * 1000;
          }
          userData.isSuspended = false;
          if (userData.telegram) userData.telegram.enabled = true;
          if (userData.status?.error && userData.status.error.includes('اشتراک')) {
            userData.status.error = null;
          }
          await env.KV.put('user:' + cleanUser, JSON.stringify(userData));
          return json({ ok: true, plan: userData.plan, planName: userData.planName, durationDays: userData.durationDays });
        }

        return json({ error: 'عملیات نامعتبر' }, 400);
      } catch (err) {
        return json({ error: 'خطا در اعمال عملیات' }, 500);
      }
    }

    // ==========================================
    // 👤 بخش مدیریت کاربران (ثبت‌نام، ورود، تمدید)
    // ==========================================

    // ثبت‌نام کاربر جدید با الزامی بودن کد لایسنس/ردیم
    if (url.pathname === '/api/user/register' && request.method === 'POST') {
      const rl = await checkRateLimit(env, `rl:reg:${clientIP}`, 5, 900);
      if (!rl.allowed) {
        return json({ error: 'تلاش بیش از حد برای ثبت‌نام. لطفاً دقایقی دیگر امتحان کنید.' }, 429);
      }

      try {
        const { username, password, licenseCode } = await request.json();
        const cleanUser = String(username || '').trim().toLowerCase();
        const rawPass = String(password || '');
        let cleanCode = String(licenseCode || '').trim().toUpperCase();

        if (!cleanUser || !/^[a-zA-Z0-9_]{3,24}$/.test(cleanUser)) {
          return json({ error: 'نام کاربری باید بین ۳ تا ۲۴ کاراکتر و فقط شامل حروف انگلیسی، عدد و _ باشد.' }, 400);
        }

        const passValidation = validatePasswordStrength(rawPass);
        if (!passValidation.valid) {
          return json({ error: passValidation.error }, 400);
        }

        // 🎟️ بررسی و اعتبارسنجی کد لایسنس
        let usersList = await env.KV.get('users_list', 'json') || [];
        const isFirstUser = usersList.length === 0 || cleanUser === 'amirmaster' || cleanUser === 'admin';

        let codeData = null;
        let plan = '1_month';
        let planName = '۱ ماهه (۳۰ روز)';
        let durationDays = 30;
        let subscriptionUntil = Date.now() + 30 * 86400 * 1000;
        let userRole = isFirstUser ? 'admin' : 'user';

        if (isFirstUser && (!cleanCode || cleanCode === 'ADMIN' || cleanCode === 'FIRST')) {
          // کاربر نخست یا ادمین پیش‌فرض به عنوان مدیر ارشد با پلن دائمی نامحدود ثبت می‌شود
          plan = 'lifetime';
          planName = 'دائمی و نامحدود (مدیر ارشد)';
          durationDays = 0;
          subscriptionUntil = null;
          cleanCode = 'ROOT-ADMIN-INIT';
        } else {
          // 🎟️ بررسی و اعتبارسنجی کد لایسنس
          if (!cleanCode) {
            return json({ error: 'ورود کد لایسنس / ردیم‌کد جهت ثبت‌نام الزامی است. لطفاً کد خریداری‌شده را وارد کنید.' }, 400);
          }

          codeData = await env.KV.get('code:' + cleanCode, 'json');
          if (!codeData) {
            return json({ error: 'کد لایسنس وارد شده نامعتبر است یا در سیستم وجود ندارد.' }, 400);
          }
          if (codeData.isUsed) {
            return json({ error: 'این کد لایسنس قبلاً توسط کاربر دیگری مصرف شده است.' }, 400);
          }

          // علامت‌گذاری کد به عنوان مصرف‌شده
          codeData.isUsed = true;
          codeData.usedBy = cleanUser;
          codeData.usedAt = Date.now();
          await env.KV.put('code:' + cleanCode, JSON.stringify(codeData));

          plan = codeData.plan || '1_month';
          durationDays = codeData.durationDays !== undefined ? codeData.durationDays : 30;
          planName = codeData.planName || (codeData.plan === 'lifetime' ? 'دائمی و نامحدود' : `${durationDays} روزه`);
          subscriptionUntil = codeData.plan === 'lifetime'
            ? null
            : (Date.now() + durationDays * 86400 * 1000);
        }

        const existing = await env.KV.get('user:' + cleanUser);
        if (existing) {
          return json({ error: 'این نام کاربری قبلاً ثبت شده است. لطفاً نام دیگری برگزینید.' }, 400);
        }

        const salt = generateRandomHex(16);
        const passwordHash = await hashPassword(rawPass, salt);

        const newUser = {
          username: cleanUser,
          role: userRole,
          passwordHash,
          salt,
          createdAt: Date.now(),
          licenseCode: cleanCode,
          plan,
          planName,
          durationDays,
          subscriptionUntil,
          isSuspended: false,
          telegram: null,
          status: { lastUpdate: null, lastTime: null, error: null }
        };

        await env.KV.put('user:' + cleanUser, JSON.stringify(newUser));

        if (!usersList.includes(cleanUser)) {
          usersList.push(cleanUser);
          await env.KV.put('users_list', JSON.stringify(usersList));
        }

        const token = generateRandomHex(32);
        await env.KV.put('token:' + token, JSON.stringify({
          username: cleanUser,
          createdAt: Date.now(),
          ip: clientIP
        }), {
          expirationTtl: 30 * 86400
        });

        return json({ ok: true, token, username: cleanUser, role: userRole, isAdmin: userRole === 'admin', plan: newUser.plan, planName: newUser.planName });
      } catch (err) {
        return json({ error: err.message || 'خطا در ثبت‌نام کاربر' }, 500);
      }
    }

    // تمدید اشتراک با ردیم‌کد جدید
    if (url.pathname === '/api/user/redeem' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'unauthorized' }, 401);

      try {
        const { licenseCode } = await request.json();
        const cleanCode = String(licenseCode || '').trim().toUpperCase();

        if (!cleanCode) return json({ error: 'کد لایسنس الزامی است' }, 400);

        const codeData = await env.KV.get('code:' + cleanCode, 'json');
        if (!codeData || codeData.isUsed) {
          return json({ error: 'کد لایسنس نامعتبر است یا قبلاً مصرف شده است.' }, 400);
        }

        codeData.isUsed = true;
        codeData.usedBy = auth.username;
        codeData.usedAt = Date.now();
        await env.KV.put('code:' + cleanCode, JSON.stringify(codeData));

        if (codeData.plan === 'lifetime') {
          auth.user.subscriptionUntil = null;
          auth.user.plan = 'lifetime';
          auth.user.planName = 'دائمی و نامحدود';
          auth.user.durationDays = 0;
        } else {
          const addDays = codeData.durationDays !== undefined ? codeData.durationDays : 30;
          const extraMs = addDays * 86400 * 1000;
          const currentSub = auth.user.subscriptionUntil && auth.user.subscriptionUntil > Date.now()
            ? auth.user.subscriptionUntil
            : Date.now();
          auth.user.subscriptionUntil = currentSub + extraMs;
          auth.user.plan = codeData.plan || auth.user.plan;
          auth.user.planName = codeData.planName || `${addDays} روزه`;
          auth.user.durationDays = addDays;
        }

        // خروج آنی حساب از تعلیق و فعال‌سازی مجدد سلف‌بات
        auth.user.isSuspended = false;
        if (auth.user.telegram) {
          auth.user.telegram.enabled = true;
        }
        if (auth.user.status?.error && auth.user.status.error.includes('اشتراک')) {
          auth.user.status.error = null;
        }

        await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
        const subInfo = checkUserSubscription(auth.user);
        return json({
          ok: true,
          plan: auth.user.plan,
          planName: auth.user.planName,
          subscriptionUntil: auth.user.subscriptionUntil,
          remainingDays: subInfo.remainingDays,
          isSuspended: false
        });
      } catch (err) {
        return json({ error: 'خطا در فعال‌سازی کد لایسنس' }, 500);
      }
    }

    // ورود به حساب با سیستم ضد بروت‌فورس
    if (url.pathname === '/api/user/login' && request.method === 'POST') {
      const rl = await checkRateLimit(env, `rl:login:${clientIP}`, 5, 300);
      if (!rl.allowed) {
        return json({ error: 'حساب موقتاً قفل شد. لطفاً ۵ دقیقه دیگر مجدداً تلاش کنید.' }, 429);
      }

      try {
        const { username, password } = await request.json();
        const cleanUser = String(username || '').trim().toLowerCase();
        const rawPass = String(password || '');

        const userData = await env.KV.get('user:' + cleanUser, 'json');
        if (!userData || !userData.passwordHash || !userData.salt) {
          return json({ error: 'نام کاربری یا رمز عبور اشتباه است.' }, 400);
        }

        const isValid = await verifyPassword(rawPass, userData.salt, userData.passwordHash);
        if (!isValid) {
          return json({ error: 'نام کاربری یا رمز عبور اشتباه است.' }, 400);
        }

        const token = generateRandomHex(32);
        await env.KV.put('token:' + token, JSON.stringify({
          username: cleanUser,
          createdAt: Date.now(),
          ip: clientIP
        }), {
          expirationTtl: 30 * 86400
        });

        const isUserAdmin = userData.role === 'admin' || cleanUser === 'amirmaster' || cleanUser === 'admin';
        return json({ ok: true, token, username: cleanUser, role: isUserAdmin ? 'admin' : 'user', isAdmin: isUserAdmin });
      } catch (err) {
        return json({ error: err.message || 'خطا در ورود به حساب' }, 500);
      }
    }

    // تغییر رمز عبور کاربر
    if (url.pathname === '/api/user/change-password' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'unauthorized' }, 401);

      try {
        const { oldPassword, newPassword } = await request.json();
        const isValidOld = await verifyPassword(String(oldPassword || ''), auth.user.salt, auth.user.passwordHash);
        if (!isValidOld) {
          return json({ error: 'رمز عبور فعلی نادرست است.' }, 400);
        }

        const passValidation = validatePasswordStrength(String(newPassword || ''));
        if (!passValidation.valid) {
          return json({ error: passValidation.error }, 400);
        }

        const newSalt = generateRandomHex(16);
        auth.user.salt = newSalt;
        auth.user.passwordHash = await hashPassword(newPassword, newSalt);
        auth.user.passwordChangedAt = Date.now();

        await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
        return json({ ok: true, message: 'رمز عبور با موفقیت به‌روزرسانی شد.' });
      } catch (err) {
        return json({ error: 'خطا در تغییر رمز عبور' }, 500);
      }
    }

    // تغییر وضعیت فعال/غیرفعال سلف‌بات بدون حذف اتصال
    if (url.pathname === '/api/user/toggle-bot' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'unauthorized' }, 401);

      const sub = checkUserSubscription(auth.user);
      if (!sub.active || auth.user.isSuspended) {
        return json({ error: 'اشتراک شما به پایان رسیده و پنل در حالت تعلیق است. لطفاً اشتراک خود را تمدید فرمایید.', isSuspended: true }, 403);
      }

      if (!auth.user.telegram) return json({ error: 'اکانت تلگرام متصل نیست' }, 400);

      auth.user.telegram.enabled = !auth.user.telegram.enabled;
      if (auth.user.telegram.enabled) {
        if (auth.user.status) auth.user.status.error = null;
        await updateSingleUserProfile(auth.user, env, true);
      }
      await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
      const freshUser = await env.KV.get('user:' + auth.username, 'json');
      return json({ ok: true, enabled: auth.user.telegram.enabled, status: freshUser?.status });
    }

    // خروج از حساب
    if (url.pathname === '/api/user/logout' && request.method === 'POST') {
      const authHeader = request.headers.get('Authorization') || '';
      if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.slice(7).trim();
        await env.KV.delete('token:' + token);
      }
      return json({ ok: true });
    }

    // حذف کامل حساب کاربری
    if (url.pathname === '/api/user/delete-account' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'unauthorized' }, 401);

      try {
        const { password } = await request.json();
        const isValid = await verifyPassword(String(password || ''), auth.user.salt, auth.user.passwordHash);
        if (!isValid) {
          return json({ error: 'رمز عبور وارد شده نادرست است.' }, 400);
        }

        await env.KV.delete('token:' + auth.token);
        await env.KV.delete('user:' + auth.username);
        await env.KV.delete('temp_auth_' + auth.username);

        let usersList = await env.KV.get('users_list', 'json') || [];
        usersList = usersList.filter(u => u !== auth.username);
        await env.KV.put('users_list', JSON.stringify(usersList));

        return json({ ok: true, deleted: true });
      } catch (err) {
        return json({ error: 'خطا در حذف حساب کاربری' }, 500);
      }
    }

    // استعلام مشخصات کاربر جاری همراه با هوشمندسازی تعلیق در صورت انقضای اشتراک
    if (url.pathname === '/api/user/me' && request.method === 'GET') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'unauthorized' }, 401);

      const sub = checkUserSubscription(auth.user);
      let stateChanged = false;

      // بررسی هوشمند خودکار: تعلیق خودکار در صورت پایان مدت زمان اشتراک
      if (!sub.active) {
        if (!auth.user.isSuspended || auth.user.telegram?.enabled) {
          auth.user.isSuspended = true;
          if (auth.user.telegram) auth.user.telegram.enabled = false;
          auth.user.status = auth.user.status || {};
          auth.user.status.error = 'اشتراک شما به پایان رسیده و پنل به حالت تعلیق درآمده است. لطفاً برای فعال‌سازی مجدد، اشتراک خود را تمدید فرمایید.';
          stateChanged = true;
        }
      }

      if (stateChanged) {
        await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
      }

      const isUserAdmin = auth.user.role === 'admin' || auth.username === 'amirmaster' || auth.username === 'admin';

      const liveStatus = {
        lastTime: (auth.user.telegram?.enabled && !auth.user.status?.error)
          ? getStylizedTime(auth.user.telegram?.digits, auth.user.telegram?.colon, new Date(), {
              prefix: auth.user.telegram?.prefix,
              suffix: auth.user.telegram?.suffix,
              is12h: auth.user.telegram?.is12h
            })
          : (auth.user.status?.lastTime || null),
        lastUpdate: auth.user.status?.lastUpdate || Date.now(),
        error: auth.user.status?.error || null
      };

      return json({
        ok: true,
        username: auth.username,
        role: isUserAdmin ? 'admin' : 'user',
        isAdmin: isUserAdmin,
        plan: auth.user.plan || 'استاندارد',
        planName: sub.planName || auth.user.planName || 'استاندارد',
        subscriptionUntil: auth.user.subscriptionUntil,
        isSuspended: !sub.active || !!auth.user.isSuspended,
        isExpired: !sub.active,
        remainingDays: sub.isLifetime ? 'نامحدود' : (sub.remainingDays ?? 0),
        remainingMs: sub.remainingMs ?? 0,
        isLifetime: !!sub.isLifetime,
        hasTelegram: !!auth.user.telegram?.sessionEncrypted,
        enabled: auth.user.telegram?.enabled ?? false,
        digits: auth.user.telegram?.digits,
        colon: auth.user.telegram?.colon || ':',
        prefix: auth.user.telegram?.prefix || '',
        suffix: auth.user.telegram?.suffix || '',
        is12h: !!auth.user.telegram?.is12h,
        bioEnabled: !!auth.user.telegram?.bioEnabled,
        bioTemplate: auth.user.telegram?.bioTemplate || '',
        sleepEnabled: !!auth.user.telegram?.sleepEnabled,
        sleepStart: auth.user.telegram?.sleepStart ?? 23,
        sleepEnd: auth.user.telegram?.sleepEnd ?? 7,
        sleepText: auth.user.telegram?.sleepText || '😴 Sleep',
        afkEnabled: !!auth.user.telegram?.afkEnabled,
        afkMessage: auth.user.telegram?.afkMessage || '',
        afkCooldown: auth.user.telegram?.afkCooldown ?? 10,
        muteEnabled: !!auth.user.telegram?.muteEnabled,
        mutedUsers: auth.user.telegram?.mutedUsers || [],
        antiTtlEnabled: !!auth.user.telegram?.antiTtlEnabled,
        status: liveStatus
      });
    }

    // ==========================================
    // 📱 بخش تلگرام کاربر (تحت کنترل کاربر جاری)
    // ==========================================

    // ارسال کد تأیید تلگرام با ضد اسپم
    if (url.pathname === '/api/auth/send-code' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'ابتدا وارد حساب کاربری خود شوید' }, 401);

      const rl = await checkRateLimit(env, `rl:tg:${auth.username}`, 3, 600);
      if (!rl.allowed) {
        return json({ error: 'جهت جلوگیری از بلاک شدن شماره در تلگرام، لطفاً ۱۰ دقیقه صبر کنید.' }, 429);
      }

      try {
        const { phone } = await request.json();
        if (!phone) return json({ error: 'شماره تلفن الزامی است' }, 400);

        const cleanPhone = phone.replace(/[^0-9+]/g, '');
        const client = new TelegramClient(
          new StringSession(''),
          parseInt(env.API_ID),
          env.API_HASH,
          { connectionRetries: 2, timeout: 20000 }
        );
        await client.connect();

        const res = await client.sendCode(
          { apiId: parseInt(env.API_ID), apiHash: env.API_HASH },
          cleanPhone
        );

        const tempSession = client.session.save();
        await client.disconnect();

        await env.KV.put('temp_auth_' + auth.username, JSON.stringify({
          session: tempSession,
          phoneCodeHash: res.phoneCodeHash,
          phone: cleanPhone
        }), { expirationTtl: 600 });

        return json({ ok: true, phoneCodeHash: res.phoneCodeHash });
      } catch (err) {
        console.error('send-code error:', err);
        return json({ error: err.message || 'خطا در ارسال کد تأیید تلگرام' }, 500);
      }
    }

    // بررسی و تایید کد پیامک تلگرام
    if (url.pathname === '/api/auth/verify-code' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'ابتدا وارد حساب کاربری خود شوید' }, 401);

      try {
        const { code, digits, colon } = await request.json();
        const rawAuth = await env.KV.get('temp_auth_' + auth.username, 'json');
        if (!rawAuth || !rawAuth.session || !rawAuth.phoneCodeHash) {
          return json({ error: 'نشست منقضی شده است. لطفاً مجدداً شماره را وارد کنید.' }, 400);
        }

        const client = new TelegramClient(
          new StringSession(rawAuth.session),
          parseInt(env.API_ID),
          env.API_HASH,
          { connectionRetries: 2, timeout: 20000 }
        );
        await client.connect();

        try {
          await client.invoke(new Api.auth.SignIn({
            phoneNumber: rawAuth.phone,
            phoneCodeHash: rawAuth.phoneCodeHash,
            phoneCode: String(code).trim(),
          }));

          const plainSession = client.session.save();
          await client.disconnect();

          const sessionEncrypted = await encryptSession(plainSession, env.API_HASH);

          auth.user.telegram = {
            ...(auth.user.telegram || {}),
            sessionEncrypted,
            digits: digits || auth.user.telegram?.digits || null,
            colon: colon || auth.user.telegram?.colon || ':',
            enabled: true,
            connectedAt: Date.now(),
          };
          auth.user.status = { lastUpdate: null, lastTime: null, error: null };

          await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
          await env.KV.delete('temp_auth_' + auth.username);

          await updateSingleUserProfile(auth.user, env, true);

          return json({ ok: true, connected: true });
        } catch (signInErr) {
          if (signInErr.errorMessage === 'SESSION_PASSWORD_NEEDED') {
            rawAuth.session = client.session.save();
            await env.KV.put('temp_auth_' + auth.username, JSON.stringify(rawAuth), { expirationTtl: 600 });
            await client.disconnect();
            return json({ ok: true, needs2FA: true });
          }
          await client.disconnect();
          throw signInErr;
        }
      } catch (err) {
        console.error('verify-code error:', err);
        return json({ error: err.message || 'کد وارد شده اشتباه یا منقضی است' }, 500);
      }
    }

    // تایید رمز دو مرحله‌ای (2FA)
    if (url.pathname === '/api/auth/verify-password' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'ابتدا وارد حساب کاربری خود شوید' }, 401);

      try {
        const { password, digits, colon } = await request.json();
        const rawAuth = await env.KV.get('temp_auth_' + auth.username, 'json');
        if (!rawAuth || !rawAuth.session) {
          return json({ error: 'نشست منقضی شده است. لطفاً مجدداً تلاش کنید.' }, 400);
        }

        const client = new TelegramClient(
          new StringSession(rawAuth.session),
          parseInt(env.API_ID),
          env.API_HASH,
          { connectionRetries: 2, timeout: 20000 }
        );
        await client.connect();

        const passwordSrpResult = await client.invoke(new Api.account.GetPassword());
        const passwordSrpCheck = await computeCheck(passwordSrpResult, password);
        await client.invoke(new Api.auth.CheckPassword({ password: passwordSrpCheck }));

        const plainSession = client.session.save();
        await client.disconnect();

        const sessionEncrypted = await encryptSession(plainSession, env.API_HASH);

        auth.user.telegram = {
          ...(auth.user.telegram || {}),
          sessionEncrypted,
          digits: digits || auth.user.telegram?.digits || null,
          colon: colon || auth.user.telegram?.colon || ':',
          enabled: true,
          connectedAt: Date.now(),
        };
        auth.user.status = { lastUpdate: null, lastTime: null, error: null };

        await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
        await env.KV.delete('temp_auth_' + auth.username);

        await updateSingleUserProfile(auth.user, env, true);

        return json({ ok: true, connected: true });
      } catch (err) {
        console.error('verify-password error:', err);
        return json({ error: err.message || 'رمز دوعاملی وارد شده اشتباه است' }, 500);
      }
    }

    // اتصال مستقیم با سشن (StringSession)
    if (url.pathname === '/api/connect' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'ابتدا وارد حساب کاربری خود شوید' }, 401);

      const sub = checkUserSubscription(auth.user);
      if (!sub.active || auth.user.isSuspended) {
        return json({ error: 'اشتراک شما به پایان رسیده و پنل در حالت تعلیق است. لطفاً اشتراک خود را تمدید فرمایید.', isSuspended: true }, 403);
      }

      try {
        const b = await request.json();
        if (!b.session) return json({ error: 'سشن تلگرام الزامی است' }, 400);

        const sessionEncrypted = await encryptSession(b.session.trim(), env.API_HASH);

        auth.user.telegram = {
          ...(auth.user.telegram || {}),
          sessionEncrypted,
          digits: b.digits || auth.user.telegram?.digits || null,
          colon: b.colon || auth.user.telegram?.colon || ':',
          enabled: true,
          connectedAt: Date.now(),
        };
        auth.user.status = { lastUpdate: null, lastTime: null, error: null };

        await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
        await updateSingleUserProfile(auth.user, env, true);

        return json({ ok: true });
      } catch (err) {
        return json({ error: err.message || 'خطا در ثبت سشن' }, 500);
      }
    }

    // ذخیره فونت و تنظیمات پیشرفته استودیو
    if ((url.pathname === '/api/fonts' || url.pathname === '/api/user/settings') && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'unauthorized' }, 401);

      const sub = checkUserSubscription(auth.user);
      if (!sub.active || auth.user.isSuspended) {
        return json({ error: 'اشتراک شما به پایان رسیده و پنل در حالت تعلیق است. لطفاً اشتراک خود را تمدید فرمایید.', isSuspended: true }, 403);
      }

      if (!auth.user.telegram) {
        auth.user.telegram = { enabled: false };
      }

      const b = await request.json();
      if (Array.isArray(b.digits) && b.digits.length === 10) {
        auth.user.telegram.digits = b.digits.map(d => String(d).slice(0, 5));
      }
      if (typeof b.colon === 'string') {
        auth.user.telegram.colon = b.colon.slice(0, 5) || ':';
      }
      if (b.prefix !== undefined) {
        auth.user.telegram.prefix = String(b.prefix).slice(0, 15);
      }
      if (b.suffix !== undefined) {
        auth.user.telegram.suffix = String(b.suffix).slice(0, 15);
      }
      if (b.is12h !== undefined) {
        auth.user.telegram.is12h = !!b.is12h;
      }
      if (b.bioEnabled !== undefined) {
        auth.user.telegram.bioEnabled = !!b.bioEnabled;
      }
      if (b.bioTemplate !== undefined) {
        auth.user.telegram.bioTemplate = String(b.bioTemplate).slice(0, 70);
      }
      if (b.sleepEnabled !== undefined) {
        auth.user.telegram.sleepEnabled = !!b.sleepEnabled;
      }
      if (b.sleepStart !== undefined) {
        auth.user.telegram.sleepStart = parseInt(b.sleepStart, 10) || 0;
      }
      if (b.sleepEnd !== undefined) {
        auth.user.telegram.sleepEnd = parseInt(b.sleepEnd, 10) || 0;
      }
      if (b.sleepText !== undefined) {
        auth.user.telegram.sleepText = String(b.sleepText).slice(0, 30);
      }
      if (b.afkEnabled !== undefined) {
        auth.user.telegram.afkEnabled = !!b.afkEnabled;
      }
      if (b.afkMessage !== undefined) {
        auth.user.telegram.afkMessage = String(b.afkMessage).slice(0, 300);
      }
      if (b.afkCooldown !== undefined) {
        auth.user.telegram.afkCooldown = Math.max(1, parseInt(b.afkCooldown, 10) || 10);
      }
      if (b.muteEnabled !== undefined) {
        auth.user.telegram.muteEnabled = !!b.muteEnabled;
      }
      if (b.mutedUsers !== undefined) {
        if (Array.isArray(b.mutedUsers)) {
          auth.user.telegram.mutedUsers = b.mutedUsers.map(x => String(x).trim()).filter(Boolean);
        } else if (typeof b.mutedUsers === 'string') {
          auth.user.telegram.mutedUsers = b.mutedUsers.split(',').map(x => x.trim()).filter(Boolean);
        }
      }
      if (b.antiTtlEnabled !== undefined) {
        auth.user.telegram.antiTtlEnabled = !!b.antiTtlEnabled;
      }

      await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
      if (auth.user.telegram?.sessionEncrypted) {
        await updateSingleUserProfile(auth.user, env, true);
      }
      const freshUser = await env.KV.get('user:' + auth.username, 'json');
      return json({ ok: true, status: freshUser?.status });
    }

    // قطع اتصال تلگرام
    if (url.pathname === '/api/disconnect' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'unauthorized' }, 401);

      if (auth.user.telegram) {
        auth.user.telegram.enabled = false;
        auth.user.telegram.sessionEncrypted = null;
      }
      auth.user.status = null;
      await env.KV.put('user:' + auth.username, JSON.stringify(auth.user));
      return json({ ok: true });
    }

    // تست همگام‌سازی آنی برای کاربر جاری
    if (url.pathname === '/api/sync' && request.method === 'POST') {
      const auth = await getAuthUser(request, env);
      if (!auth) return json({ error: 'unauthorized' }, 401);

      const sub = checkUserSubscription(auth.user);
      if (!sub.active || auth.user.isSuspended) {
        return json({ error: 'اشتراک شما به پایان رسیده و پنل در حالت تعلیق است. لطفاً اشتراک خود را تمدید فرمایید.', isSuspended: true }, 403);
      }

      if (!auth.user.telegram) return json({ error: 'تلگرام متصل نیست' }, 400);

      auth.user.telegram.enabled = true;
      if (auth.user.status) auth.user.status.error = null;
      await updateSingleUserProfile(auth.user, env, true);
      const updatedUser = await env.KV.get('user:' + auth.username, 'json');
      return json({ ok: true, status: updatedUser?.status });
    }

    // ==========================================
    // ⚙️ APIهای اختصاصی رانر خارجی (GitHub Actions / External Runner)
    // ==========================================

    function isRunnerAuthorized(req, workerEnv) {
      const authHeader = req.headers.get('Authorization') || '';
      let token = '';
      if (authHeader.startsWith('Bearer ')) {
        token = authHeader.slice(7).trim();
      }
      const secret = workerEnv.RUNNER_SECRET || workerEnv.ADMIN_PASSWORD || 'admin_liquid_secret_2026';
      return token === secret;
    }

    // ۱. دریافت لیست کاربران فعال برای رانر خارجی
    if (url.pathname === '/api/internal/active-users' && request.method === 'GET') {
      if (!isRunnerAuthorized(request, env)) {
        return json({ error: 'unauthorized runner' }, 401);
      }

      globalThis.lastRunnerSyncTime = Date.now();

      const usersList = await env.KV.get('users_list', 'json') || [];
      if (!usersList.length) return json({ ok: true, users: [], serverTime: Date.now() });

      const userObjects = await Promise.all(
        usersList.map(uname => env.KV.get('user:' + uname, 'json'))
      );

      const activeUsers = [];
      for (const u of userObjects) {
        if (!u) continue;
        const sub = checkUserSubscription(u);
        if (!sub.active) {
          if (!u.isSuspended || u.telegram?.enabled) {
            u.isSuspended = true;
            if (u.telegram) u.telegram.enabled = false;
            u.status = u.status || {};
            u.status.error = 'اشتراک شما به پایان رسیده و سلف‌بات به حالت تعلیق درآمده است.';
            await env.KV.put('user:' + u.username, JSON.stringify(u));
          }
          continue;
        }

        if (!u.isSuspended && u.telegram?.enabled && u.telegram?.sessionEncrypted) {
          activeUsers.push({
            username: u.username,
            sessionEncrypted: u.telegram.sessionEncrypted,
            digits: u.telegram.digits,
            colon: u.telegram.colon || ':',
            prefix: u.telegram.prefix || '',
            suffix: u.telegram.suffix || '',
            is12h: !!u.telegram.is12h,
            bioEnabled: !!u.telegram.bioEnabled,
            bioTemplate: u.telegram.bioTemplate || '',
            sleepEnabled: !!u.telegram.sleepEnabled,
            sleepStart: u.telegram.sleepStart ?? 23,
            sleepEnd: u.telegram.sleepEnd ?? 7,
            sleepText: u.telegram.sleepText || '😴 Sleep',
            afkEnabled: !!u.telegram.afkEnabled,
            afkMessage: u.telegram.afkMessage || '',
            afkCooldown: u.telegram.afkCooldown ?? 10,
            muteEnabled: !!u.telegram.muteEnabled,
            mutedUsers: u.telegram.mutedUsers || [],
            antiTtlEnabled: !!u.telegram.antiTtlEnabled,
            lastTime: u.status?.lastTime || null,
          });
        }
      }

      return json({ ok: true, users: activeUsers, serverTime: Date.now() });
    }

    // ۲. به‌روزرسانی وضعیت کاربران از طریق رانر خارجی
    if (url.pathname === '/api/internal/update-status' && request.method === 'POST') {
      if (!isRunnerAuthorized(request, env)) {
        return json({ error: 'unauthorized runner' }, 401);
      }

      try {
        const { updates } = await request.json();
        if (Array.isArray(updates)) {
          for (const item of updates) {
            if (!item.username) continue;
            // فقط در صورتی در KV ذخیره می‌کنیم که خطایی رخ داده باشد یا سشن باطل شده باشد
            // در حالت کارکرد عادی و موفق، نیازی به مصرف سهمیه KV Write نیست!
            if (item.error || item.isFatal) {
              const u = await env.KV.get('user:' + item.username, 'json');
              if (u) {
                u.status = u.status || {};
                u.status.lastUpdate = item.lastUpdate || Date.now();
                u.status.error = item.error;
                if (item.isFatal && u.telegram) {
                  u.telegram.enabled = false;
                }
                await env.KV.put('user:' + item.username, JSON.stringify(u));
              }
            }
          }
        }
        return json({ ok: true });
      } catch (err) {
        return json({ error: err.message }, 500);
      }
    }

    // ۳. به‌روزرسانی آنی لیست کاربران مسدود/سکوت از رانر گیت‌هاب (.mute و .unmute تلگرام)
    if (url.pathname === '/api/internal/update-user-mute' && request.method === 'POST') {
      if (!isRunnerAuthorized(request, env)) {
        return json({ error: 'unauthorized runner' }, 401);
      }
      try {
        const { username, mutedUsers } = await request.json();
        if (username && Array.isArray(mutedUsers)) {
          const u = await env.KV.get('user:' + username, 'json');
          if (u && u.telegram) {
            u.telegram.mutedUsers = mutedUsers.map(x => String(x).trim()).filter(Boolean);
            await env.KV.put('user:' + username, JSON.stringify(u));
          }
        }
        return json({ ok: true });
      } catch (err) {
        return json({ error: err.message }, 500);
      }
    }

    return new Response('Not Found', { status: 404, headers: SECURITY_HEADERS });
  },

  // ==========================================
  // ⏱️ چرخه کرون خودکار (پشتیبان هوشمند در صورت قطعی رانر خارجی)
  // ==========================================
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      try {
        // ۱. بررسی زنده بودن رانر گیت‌هاب: اگر رانر در ۳ دقیقه اخیر همگام شده باشد، کرون کلادفلر جهت حفظ سقف پردازنده متوقف می‌شود
        const lastSync = globalThis.lastRunnerSyncTime || 0;
        if (Date.now() - lastSync < 180000) {
          return; // رانر اختصاصی گیت‌هاب فعال و برخط است
        }
        await updateAllUsersOptimized(env);
      } catch (cronErr) {
        console.error('Scheduled cron error:', cronErr);
      }
    })());
  },
};

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * به‌روزرسانی موازی و سریع تمام کاربران با کنترل میلی‌ثانیه‌ای رأس دقیقه
 */
async function updateAllUsersOptimized(env) {
  const usersList = await env.KV.get('users_list', 'json') || [];
  if (!usersList.length) return;

  const userObjects = await Promise.all(
    usersList.map(uname => env.KV.get('user:' + uname, 'json'))
  );

  const activeUsers = [];
  for (const u of userObjects) {
    if (!u) continue;
    const sub = checkUserSubscription(u);
    if (!sub.active) {
      if (!u.isSuspended || u.telegram?.enabled) {
        u.isSuspended = true;
        if (u.telegram) u.telegram.enabled = false;
        u.status = u.status || {};
        u.status.error = 'اشتراک شما به پایان رسیده و سلف‌بات به حالت تعلیق درآمده است.';
        await env.KV.put('user:' + u.username, JSON.stringify(u));
      }
      continue;
    }
    if (!u.isSuspended && u.telegram?.enabled && u.telegram?.sessionEncrypted) {
      activeUsers.push(u);
    }
  }

  if (!activeUsers.length) return;

  // اجرای ترتیبی کاربران (جهت رعایت سقف CPU کلودفلر)
  for (const user of activeUsers) {
    await updateSingleUserProfile(user, env, false);
  }
}

/**
 * ارسال مستقیم و فوق‌سبک دستور تغییر پروفایل بدون بارگذاری help.GetConfig و بدون لوپ پس‌زمینه
 * زمان CPU: کمتر از ۱ تا ۲ میلی‌ثانیه برای هر کاربر
 */
async function updateProfileDirect(sessionStr, apiId, apiHash, lastName, about = null) {
  const client = new TelegramClient(
    new StringSession(sessionStr),
    apiId,
    apiHash,
    {
      connectionRetries: 1,
      timeout: 8000,
      useWSS: false,
      autoReconnect: false,
      floodSleepThreshold: 0,
    }
  );
  await client._initSession();
  const sender = new MTProtoSender(client.session.getAuthKey(), {
    logger: client._log,
    dcId: client.session.dcId || 4,
    retries: 1,
    connectTimeout: 8000,
    securityChecks: false,
  });
  const connection = new client._connection({
    ip: client.session.serverAddress,
    port: 80,
    dcId: client.session.dcId,
    loggers: client._log,
    socket: client.networkSocket,
  });
  await sender.connect(connection, false);
  try {
    const updateParams = { lastName };
    if (about) updateParams.about = about;

    const res = await sender.send(new Api.InvokeWithLayer({
      layer: LAYER,
      query: new Api.InitConnection({
        apiId,
        deviceModel: 'Arizo Cloud Server',
        systemVersion: 'Cloudflare Edge',
        appVersion: '2.0.0',
        systemLangCode: 'en',
        langCode: 'en',
        langPack: '',
        query: new Api.account.UpdateProfile(updateParams),
      }),
    }));
    return res;
  } finally {
    try {
      await sender.disconnect();
    } catch (_) {}
  }
}

/**
 * به‌روزرسانی فوق‌سریع لست‌نیم و بیوگرافی هوشمند با حداقل مصرف پردازنده
 */
async function updateSingleUserProfile(user, env, forcePersist = false) {
  const encSession = user.telegram?.sessionEncrypted;
  const sessionStr = await decryptSession(encSession, env.API_HASH);
  if (!sessionStr) return;

  const now = new Date();
  let exactTimeStr = getStylizedTime(user.telegram.digits, user.telegram.colon, now, {
    prefix: user.telegram.prefix,
    suffix: user.telegram.suffix,
    is12h: user.telegram.is12h
  });

  if (user.telegram.sleepEnabled && isSleepTime(user.telegram.sleepStart, user.telegram.sleepEnd, now)) {
    exactTimeStr = user.telegram.sleepText || '😴 Sleep';
  }

  let exactBioStr = null;
  if (user.telegram.bioEnabled && user.telegram.bioTemplate) {
    exactBioStr = renderDynamicBio(user.telegram.bioTemplate, {
      digits: user.telegram.digits,
      colon: user.telegram.colon,
      date: now,
      is12h: user.telegram.is12h
    });
  }

  if (user.status?.lastTime === exactTimeStr && !user.status?.error && !forcePersist) {
    return; // در این دقیقه قبلاً با موفقیت آپدیت شده است
  }

  try {
    await updateProfileDirect(
      sessionStr,
      parseInt(env.API_ID),
      env.API_HASH,
      exactTimeStr,
      exactBioStr
    );

    const hadError = !!user.status?.error;
    user.status = {
      lastUpdate: Date.now(),
      lastTime: exactTimeStr,
      lastBio: exactBioStr,
      error: null,
    };

    // پایدارسازی هوشمند در KV: فقط زمانی که خطای قبلی برطرف شده یا اجباری باشد می‌نویسیم
    // این کار مصرف KV Writes را از ۱۴۴۰ بار در روز به کمتر از ۵ بار می‌رساند!
    if (hadError || forcePersist) {
      await env.KV.put('user:' + user.username, JSON.stringify(user));
    }
  } catch (err) {
    console.error(`Update failed for ${user.username}:`, err.message);

    const isFatal = err.errorMessage === 'AUTH_KEY_UNREGISTERED' ||
      err.errorMessage === 'USER_DEACTIVATED' ||
      err.errorMessage === 'SESSION_REVOKED';

    if (isFatal) {
      user.telegram.enabled = false;
    }

    let friendlyError = err.message || 'خطای اتصال به سرور تلگرام';
    if (isFatal) {
      friendlyError = 'نشست تلگرام شما منقضی یا باطل شده است. لطفاً مجدداً وارد شوید.';
    } else if (err.errorMessage?.startsWith('FLOOD_WAIT_')) {
      friendlyError = 'محدودیت موقت تلگرام (Flood Wait). سیستم خودکار بازیابی خواهد شد.';
    }

    user.status = {
      lastUpdate: Date.now(),
      lastTime: user.status?.lastTime || null,
      error: friendlyError,
    };
    await env.KV.put('user:' + user.username, JSON.stringify(user));
  }
}
