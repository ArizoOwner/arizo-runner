/**
 * 📝 Zero-Trust Security Audit Logger & Telemetry Engine
 * Logs security-relevant actions, authentication events, and anomaly warnings
 */

export const AUDIT_EVENT_TYPES = {
  AUTH_SUCCESS:         'AUTH_SUCCESS',
  AUTH_FAILURE:         'AUTH_FAILURE',
  RATE_LIMITED:         'RATE_LIMITED',
  HONEYPOT_TRIGGERED:   'HONEYPOT_TRIGGERED',
  SESSION_DECRYPTED:    'SESSION_DECRYPTED',
  CONFIG_MUTATED:       'CONFIG_MUTATED',
  TOTP_ENABLED:         'TOTP_ENABLED',
  TOTP_DISABLED:        'TOTP_DISABLED',
  TOTP_VERIFIED:        'TOTP_VERIFIED',
  TTL_MEDIA_SNIPED:     'TTL_MEDIA_SNIPED',
  ANTI_DELETE_CAUGHT:   'ANTI_DELETE_CAUGHT',
  RUNNER_HEARTBEAT:     'RUNNER_HEARTBEAT'
};

export const AUDIT_SEVERITY = {
  INFO:     'INFO',
  WARNING:  'WARNING',
  CRITICAL: 'CRITICAL'
};

const localAuditBuffer = [];
const MAX_LOCAL_EVENTS = 100;

/**
 * ثبت یک رویداد امنیتی در حافظه و ارسال به ذخیره‌ساز یکپارچه KV
 * @param {Object} env - Cloudflare Worker env یا محیط شبیه‌ساز
 * @param {string} eventType - نوع رویداد از AUDIT_EVENT_TYPES
 * @param {Object} payload - اطلاعات رویداد (ip, user, details)
 * @param {string} severity - سطح اهمیت (INFO, WARNING, CRITICAL)
 * @returns {Promise<Object>}
 */
export async function logSecurityEvent(env, eventType, payload = {}, severity = AUDIT_SEVERITY.INFO) {
  const event = {
    id: `sec_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    timestamp: Date.now(),
    iso: new Date().toISOString(),
    eventType,
    severity,
    ip: payload.ip || '127.0.0.1',
    user: payload.user || 'anonymous',
    details: payload.details || {},
    userAgent: payload.userAgent || 'unknown'
  };

  // ذخیره در بافر محلی
  localAuditBuffer.unshift(event);
  if (localAuditBuffer.length > MAX_LOCAL_EVENTS) {
    localAuditBuffer.pop();
  }

  // ذخیره در KV اگر در محیط ورکر هستیم
  if (env && env.KV && typeof env.KV.put === 'function') {
    try {
      // بروزرسانی آرایه رویدادهای اخیر در KV
      const existing = (await env.KV.get('security_audit_log', 'json')) || [];
      existing.unshift(event);
      if (existing.length > 80) existing.length = 80;
      await env.KV.put('security_audit_log', JSON.stringify(existing));
    } catch (err) {
      console.warn('[AuditLogger] Failed to persist to KV:', err.message);
    }
  }

  return event;
}

/**
 * دریافت تاریخچه رویدادهای امنیتی اخیر
 * @param {Object} [env] 
 * @returns {Promise<Array>}
 */
export async function getRecentSecurityEvents(env) {
  if (env && env.KV && typeof env.KV.get === 'function') {
    try {
      const kvEvents = await env.KV.get('security_audit_log', 'json');
      if (Array.isArray(kvEvents) && kvEvents.length > 0) {
        return kvEvents;
      }
    } catch (_) {}
  }
  return [...localAuditBuffer];
}
