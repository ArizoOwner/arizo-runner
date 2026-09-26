export function panelHTML(env) {
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>⚡ Arizo Self | پلتفرم استودیوی سلف‌بات هوشمند تلگرام و پنل مدیریت</title>
  <meta name="color-scheme" content="dark light">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Vazirmatn:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <script>
    // ⚡ Anti-FOUC Theme Initializer & Telegram WebApp SSO
    (function() {
      try {
        var savedTheme = localStorage.getItem('arizo_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        var urlParams = new URLSearchParams(window.location.search);
        var ssoToken = urlParams.get('token');
        if (ssoToken) {
          localStorage.setItem('arizo_token', ssoToken);
          window.history.replaceState({}, document.title, window.location.pathname);
        }

        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.ready();
          window.Telegram.WebApp.expand();
        }
      } catch(e) {}
    })();
  </script>

    <style>
    /* ==========================================================================
       💎 Arizo Self Studio — Next-Gen Neo-Glass Design System & Aesthetics
       ========================================================================== */

    /* 🎨 متغیرهای جامع پالت رنگی پیشرفته (تم روز و شب) */
    :root, [data-theme="dark"] {
      --bg-dark: #070913;
      --bg-surface: rgba(14, 18, 38, 0.72);
      --bg-surface-elevated: rgba(22, 28, 58, 0.85);
      --bg-surface-hover: rgba(28, 35, 72, 0.9);
      --bg-input: rgba(6, 8, 20, 0.65);
      
      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-specular: rgba(255, 255, 255, 0.18);
      --border-focus: rgba(168, 85, 247, 0.65);
      --border-glow: rgba(168, 85, 247, 0.4);
      --glow-ambient: 0 0 35px -5px rgba(139, 92, 246, 0.3);
      
      --primary: #8b5cf6;
      --primary-hover: #7c3aed;
      --primary-active: #6d28d9;
      --accent: #06b6d4;
      
      --gradient-brand: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%);
      --gradient-brand-hover: linear-gradient(135deg, #b86bf8 0%, #7579f3 50%, #4f92f8 100%);
      --gradient-accent: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
      --gradient-gold: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
      --gradient-gold-hover: linear-gradient(135deg, #fcd34d 0%, #fbbf24 50%, #f59e0b 100%);
      --gradient-btn: linear-gradient(135deg, #9333ea 0%, #6366f1 100%);
      --gradient-admin: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%);
      --gradient-rose: linear-gradient(135deg, #fb7185 0%, #f43f5e 50%, #e11d48 100%);
      --gradient-green: linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%);
      --shimmer-glow: rgba(255, 255, 255, 0.38);
      
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;

      --accent-purple: #c084fc;
      --accent-purple-bg: rgba(168, 85, 247, 0.14);
      --accent-purple-border: rgba(168, 85, 247, 0.35);

      --accent-blue: #38bdf8;
      --accent-blue-bg: rgba(56, 189, 248, 0.12);
      --accent-blue-border: rgba(56, 189, 248, 0.3);

      --accent-amber: #fbbf24;
      --accent-amber-bg: rgba(245, 158, 11, 0.14);
      --accent-amber-border: rgba(245, 158, 11, 0.35);

      --accent-rose: #fb7185;
      --accent-rose-bg: rgba(244, 63, 94, 0.14);
      --accent-rose-border: rgba(244, 63, 94, 0.35);

      --accent-green: #4ade80;
      --accent-green-bg: rgba(16, 185, 129, 0.14);
      --accent-green-border: rgba(16, 185, 129, 0.35);

      --accent-indigo: #a5b4fc;
      --accent-indigo-bg: rgba(99, 102, 241, 0.14);
      --accent-indigo-border: rgba(99, 102, 241, 0.35);

      --btn-secondary-bg: rgba(255, 255, 255, 0.06);
      --btn-secondary-hover: rgba(255, 255, 255, 0.12);
      --btn-secondary-active: rgba(255, 255, 255, 0.18);
      --box-panel-bg: rgba(255, 255, 255, 0.03);
      
      --card-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.07), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15);
      --card-shadow-hover: 0 32px 70px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(168, 85, 247, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25);
      --modal-bg: rgba(12, 15, 32, 0.94);
      --table-bg: rgba(0, 0, 0, 0.32);
      --segmented-bg: rgba(5, 7, 18, 0.7);
      --badge-bg: rgba(255, 255, 255, 0.06);
      
      --clock-box-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%);
      --clock-digits-grad: linear-gradient(135deg, #ffffff 30%, #c4b5fd 70%, #93c5fd 100%);
      --clock-shadow: drop-shadow(0 0 28px rgba(168, 85, 247, 0.45));
      --orb-opacity: 0.38;
      
      --success: #10b981;
      --warning: #f59e0b;
      --danger: #f43f5e;
      
      --radius-xl: 26px;
      --radius-lg: 18px;
      --radius-md: 14px;
      --radius-sm: 10px;

      --spring-physics: cubic-bezier(0.34, 1.56, 0.64, 1);
      --smooth-physics: cubic-bezier(0.16, 1, 0.3, 1);
    }

    [data-theme="light"] {
      --bg-dark: #f1f5f9;
      --bg-surface: rgba(255, 255, 255, 0.88);
      --bg-surface-elevated: #ffffff;
      --bg-surface-hover: #f8fafc;
      --bg-input: #f8fafc;
      
      --border-subtle: rgba(99, 102, 241, 0.14);
      --border-specular: rgba(255, 255, 255, 0.9);
      --border-focus: rgba(99, 102, 241, 0.65);
      --border-glow: rgba(99, 102, 241, 0.22);
      --glow-ambient: 0 0 35px -5px rgba(99, 102, 241, 0.18);
      
      --primary: #6366f1;
      --primary-hover: #4f46e5;
      --primary-active: #4338ca;
      --accent: #0284c7;
      
      --gradient-brand: linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #2563eb 100%);
      --gradient-brand-hover: linear-gradient(135deg, #8b5cf6 0%, #7579f3 50%, #3b82f6 100%);
      --gradient-accent: linear-gradient(135deg, #0284c7 0%, #6366f1 50%, #9333ea 100%);
      --gradient-gold: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      --gradient-gold-hover: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      --gradient-btn: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      --gradient-admin: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      --gradient-rose: linear-gradient(135deg, #fb7185 0%, #e11d48 100%);
      --gradient-green: linear-gradient(135deg, #10b981 0%, #059669 100%);
      --shimmer-glow: rgba(255, 255, 255, 0.6);
      
      --text-main: #0f172a;
      --text-muted: #334155;
      --text-dim: #64748b;

      --accent-purple: #7c3aed;
      --accent-purple-bg: rgba(124, 58, 237, 0.09);
      --accent-purple-border: rgba(124, 58, 237, 0.28);

      --accent-blue: #0284c7;
      --accent-blue-bg: rgba(2, 132, 199, 0.09);
      --accent-blue-border: rgba(2, 132, 199, 0.28);

      --accent-amber: #b45309;
      --accent-amber-bg: rgba(217, 119, 6, 0.1);
      --accent-amber-border: rgba(217, 119, 6, 0.32);

      --accent-rose: #e11d48;
      --accent-rose-bg: rgba(225, 29, 72, 0.09);
      --accent-rose-border: rgba(225, 29, 72, 0.28);

      --accent-green: #059669;
      --accent-green-bg: rgba(5, 150, 105, 0.1);
      --accent-green-border: rgba(5, 150, 105, 0.32);

      --accent-indigo: #4f46e5;
      --accent-indigo-bg: rgba(79, 70, 229, 0.09);
      --accent-indigo-border: rgba(79, 70, 229, 0.28);

      --btn-secondary-bg: #f8fafc;
      --btn-secondary-hover: #e2e8f0;
      --btn-secondary-active: #cbd5e1;
      --box-panel-bg: rgba(248, 250, 252, 0.95);
      
      --card-shadow: 0 20px 45px -10px rgba(99, 102, 241, 0.12), 0 4px 16px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.95);
      --card-shadow-hover: 0 28px 55px -10px rgba(99, 102, 241, 0.2), 0 8px 24px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1);
      --modal-bg: rgba(255, 255, 255, 0.96);
      --table-bg: rgba(248, 250, 252, 0.88);
      --segmented-bg: rgba(226, 232, 240, 0.85);
      --badge-bg: rgba(99, 102, 241, 0.06);
      
      --clock-box-bg: linear-gradient(180deg, rgba(238, 242, 255, 0.85) 0%, rgba(248, 250, 252, 0.7) 100%);
      --clock-digits-grad: linear-gradient(135deg, #1e1b4b 20%, #4338ca 65%, #0284c7 100%);
      --clock-shadow: drop-shadow(0 0 20px rgba(99, 102, 241, 0.2));
      --orb-opacity: 0.18;
      
      --success: #059669;
      --warning: #d97706;
      --danger: #e11d48;
    }

    /* ⚡ ریست مدرن بدون اعمال ترنزیشن مزاحم بر کل عناصر */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      scroll-behavior: smooth;
      color-scheme: dark light;
    }

    html, body {
      width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
      box-sizing: border-box;
    }

    body {
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 20px 14px 65px 14px;
      position: relative;
      line-height: 1.55;
      transition: background-color 0.4s var(--smooth-physics), color 0.4s var(--smooth-physics);
    }

    /* 🌌 بوم الگوریتمی ذرات کوانتومی */
    #algoCanvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      opacity: 0.85;
      transition: opacity 0.5s ease;
    }

    /* 🌠 شفق‌های قطبی اتمسفریک چندوجهی */
    .aurora-container {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
    }
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(140px);
      opacity: var(--orb-opacity);
      animation: floatOrb 26s var(--smooth-physics) infinite alternate;
      will-change: transform, opacity;
      transition: opacity 0.6s ease;
    }
    .orb-1 {
      width: 580px; height: 580px;
      background: radial-gradient(circle, #7c3aed 0%, rgba(124, 58, 237, 0.1) 65%, transparent 75%);
      top: -160px; left: 8%;
    }
    .orb-2 {
      width: 520px; height: 520px;
      background: radial-gradient(circle, #0284c7 0%, rgba(2, 132, 199, 0.1) 65%, transparent 75%);
      bottom: -120px; right: 6%;
      animation-duration: 30s;
      animation-delay: -5s;
    }
    .orb-3 {
      width: 420px; height: 420px;
      background: radial-gradient(circle, #db2777 0%, rgba(219, 39, 119, 0.1) 60%, transparent 75%);
      top: 35%; left: 55%;
      animation-duration: 34s;
      animation-delay: -10s;
    }

    @keyframes floatOrb {
      0% { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
      33% { transform: translate3d(55px, -45px, 0) scale(1.1) rotate(45deg); }
      66% { transform: translate3d(-35px, 45px, 0) scale(0.92) rotate(90deg); }
      100% { transform: translate3d(40px, -25px, 0) scale(1.05) rotate(135deg); }
    }

    /* 📦 چیدمان و ورود متحرک کانتینر اصلی */
    .container {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: min(94vw, 980px);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
      box-sizing: border-box;
      animation: pageFadeIn 0.5s var(--smooth-physics) both;
    }

    @media (min-width: 1200px) {
      .container {
        max-width: 1040px;
        gap: 26px;
      }
    }

    @keyframes pageFadeIn {
      from { opacity: 0; transform: translateY(22px) scale(0.985); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* 💎 کارت‌های شیشه‌ای مدرن (Glassmorphism 2.0 with Specular Glow) */
    .glass-card {
      position: relative;
      background: var(--bg-surface);
      backdrop-filter: blur(34px) saturate(210%);
      -webkit-backdrop-filter: blur(34px) saturate(210%);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-xl);
      padding: clamp(20px, 3.2vw, 32px);
      box-shadow: var(--card-shadow);
      transition: transform 0.35s var(--smooth-physics),
                  box-shadow 0.35s var(--smooth-physics),
                  border-color 0.3s ease,
                  background-color 0.3s ease;
      overflow: hidden;
    }
    .glass-card:hover {
      border-color: rgba(168, 85, 247, 0.28);
      border-top-color: rgba(255, 255, 255, 0.35);
      box-shadow: var(--card-shadow-hover);
    }

    /* 🌟 نوار ناوبری فوق‌العاده مدرن (Header Navbar) */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 22px;
      gap: 14px;
      flex-wrap: wrap;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      cursor: pointer;
      user-select: none;
    }
    .brand-gem {
      width: 46px;
      height: 46px;
      border-radius: 14px;
      background: var(--gradient-brand);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;
      box-shadow: 0 8px 24px -2px var(--border-glow), inset 0 1px 1px rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.35);
      position: relative;
      overflow: hidden;
      transition: transform 0.3s var(--spring-physics), box-shadow 0.3s ease;
    }
    .brand:hover .brand-gem {
      transform: translateY(-2px) scale(1.08) rotate(8deg);
      box-shadow: 0 12px 28px 0 rgba(168, 85, 247, 0.6);
    }
    .brand:active .brand-gem {
      transform: scale(0.94);
    }
    .brand-title-wrap h1 {
      font-size: 1.32rem;
      font-weight: 900;
      letter-spacing: -0.6px;
      display: flex;
      align-items: center;
      gap: 9px;
      line-height: 1.2;
    }
    .brand-title-gradient {
      background: var(--gradient-accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Outfit', sans-serif;
      font-weight: 900;
      letter-spacing: -0.5px;
    }
    .badge-pro {
      font-size: 0.68rem;
      font-weight: 900;
      padding: 3px 9px;
      border-radius: 8px;
      background: var(--accent-purple-bg);
      border: 1px solid var(--accent-purple-border);
      color: var(--accent-purple);
      letter-spacing: 0.5px;
      box-shadow: 0 2px 8px rgba(168, 85, 247, 0.15);
      transition: transform 0.2s ease;
    }
    .brand:hover .badge-pro {
      transform: translateY(-1px) scale(1.04);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    /* ☀️ دکمه سوئیچ تم شب و روز */
    .btn-theme-toggle {
      background: var(--btn-secondary-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: 12px;
      padding: 9px 14px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: inherit;
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--text-main);
      user-select: none;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
      transition: transform 0.25s var(--spring-physics),
                  background-color 0.2s ease,
                  box-shadow 0.2s ease,
                  border-color 0.2s ease;
    }
    .btn-theme-toggle:hover {
      background: var(--btn-secondary-hover);
      border-color: rgba(168, 85, 247, 0.35);
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    }
    .btn-theme-toggle:active {
      transform: scale(0.94) translateY(1px);
    }
    .theme-icon-rotate {
      display: inline-block;
      font-size: 1rem;
      transition: transform 0.5s var(--spring-physics);
    }
    .btn-theme-toggle:hover .theme-icon-rotate {
      transform: rotate(35deg) scale(1.15);
    }

    /* دکمه‌های ناوبری استاندارد */
    .btn-nav-action {
      background: var(--btn-secondary-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: 12px;
      padding: 9px 14px;
      font-size: 0.84rem;
      font-weight: 800;
      color: var(--text-muted);
      cursor: pointer;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      user-select: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.22s var(--spring-physics),
                  background-color 0.2s ease,
                  color 0.2s ease,
                  border-color 0.2s ease,
                  box-shadow 0.2s ease;
    }
    .btn-nav-action:hover {
      background: var(--btn-secondary-hover);
      color: var(--text-main);
      border-color: rgba(168, 85, 247, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
    }
    .btn-nav-action:active {
      transform: scale(0.94) translateY(1px);
    }

    /* 👑 دکمه طلایی و براق پنل ادمین */
    .btn-admin-highlight {
      background: var(--accent-amber-bg);
      border: 1px solid var(--accent-amber-border);
      border-top: 1px solid rgba(251, 191, 36, 0.5);
      color: var(--accent-amber);
      border-radius: 12px;
      padding: 9px 16px;
      font-size: 0.84rem;
      font-weight: 900;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      box-shadow: 0 4px 16px rgba(245, 158, 11, 0.2);
      position: relative;
      overflow: hidden;
      user-select: none;
      transition: transform 0.22s var(--spring-physics),
                  box-shadow 0.22s ease,
                  background-color 0.2s ease,
                  color 0.2s ease;
    }
    .btn-admin-highlight::after {
      content: '';
      position: absolute;
      top: -50%; left: -60%;
      width: 30%; height: 200%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
      transform: rotate(25deg);
      pointer-events: none;
    }
    .btn-admin-highlight:hover::after {
      left: 140%;
      transition: left 0.75s ease-in-out;
    }
    .btn-admin-highlight:hover {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      border-color: #f59e0b;
      color: #ffffff;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 10px 28px rgba(245, 158, 11, 0.45);
    }
    .btn-admin-highlight:active {
      transform: scale(0.96) translateY(1px);
    }

    /* 🏷️ هدرهای تفکیک بخش‌ها (Section Separators) */
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--border-subtle);
      flex-wrap: wrap;
      gap: 12px;
    }
    .section-title {
      font-size: 1.06rem;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 9px;
      flex-wrap: wrap;
      letter-spacing: -0.3px;
    }
    .section-tag {
      font-size: 0.74rem;
      font-weight: 800;
      padding: 4px 11px;
      border-radius: 20px;
      background: var(--badge-bg);
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      white-space: nowrap;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
      transition: border-color 0.2s ease, color 0.2s ease;
    }
    .section-header:hover .section-tag {
      border-color: rgba(168, 85, 247, 0.3);
      color: var(--text-main);
    }

    /* 🕒 باکس ساعت زنده و تقویم خورشیدی تهران */
    .hero-clock-box {
      text-align: center;
      padding: clamp(22px, 4.5vw, 36px) clamp(14px, 3vw, 22px);
      background: var(--clock-box-bg);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.25);
    }
    .hero-clock-box::before {
      content: '';
      position: absolute;
      top: 0; left: 10%; right: 10%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.95), transparent);
    }
    .hero-calendar-chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: clamp(0.76rem, 2.2vw, 0.86rem);
      font-weight: 800;
      color: var(--accent-blue);
      background: var(--accent-blue-bg);
      border: 1px solid var(--accent-blue-border);
      padding: 7px 18px;
      border-radius: 30px;
      margin-bottom: 16px;
      max-width: 100%;
      box-shadow: 0 4px 14px rgba(56, 189, 248, 0.15);
      word-break: normal;
      transition: transform 0.2s ease;
    }
    .hero-calendar-chip:hover {
      transform: translateY(-1px) scale(1.02);
    }
    .clock-display-wrap {
      display: inline-flex;
      align-items: baseline;
      justify-content: center;
      direction: ltr;
      gap: clamp(4px, 1.8vw, 10px);
      width: 100%;
      max-width: 100%;
      margin: 4px 0 12px 0;
    }
    .clock-time-digits {
      font-family: 'JetBrains Mono', 'Outfit', monospace;
      font-size: clamp(2.4rem, 8.5vw, 4.2rem);
      font-weight: 900;
      letter-spacing: clamp(1px, 1.4vw, 4px);
      background: var(--clock-digits-grad);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      user-select: none;
      filter: var(--clock-shadow);
      line-height: 1.1;
    }
    .clock-seconds-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(1rem, 3.4vw, 1.35rem);
      font-weight: 900;
      color: var(--accent-purple);
      background: var(--accent-purple-bg);
      border: 1px solid var(--accent-purple-border);
      border-radius: 12px;
      padding: 4px 9px;
      animation: pulseSeconds 1.2s infinite alternate ease-in-out;
      line-height: 1.2;
      box-shadow: 0 4px 16px rgba(168, 85, 247, 0.25);
    }
    @keyframes pulseSeconds {
      0% { opacity: 0.7; transform: scale(0.96); box-shadow: 0 0 8px rgba(168, 85, 247, 0.2); }
      100% { opacity: 1; transform: scale(1.06); box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
    }
    .clock-badges-row {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 18px;
      flex-wrap: wrap;
    }
    .meta-chip {
      font-size: 0.76rem;
      padding: 6px 15px;
      border-radius: 30px;
      background: var(--badge-bg);
      color: var(--text-muted);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    }
    .meta-chip:hover {
      transform: translateY(-1px);
      border-color: rgba(168, 85, 247, 0.35);
      color: var(--text-main);
    }
    .meta-chip.active {
      color: var(--success);
      border-color: rgba(16, 185, 129, 0.4);
      background: rgba(16, 185, 129, 0.12);
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.15);
    }
    .dot-pulse {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 12px var(--success);
      position: relative;
    }
    .dot-pulse::after {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 50%;
      border: 1.5px solid var(--success);
      animation: dotPulseWave 1.8s infinite ease-out;
    }
    @keyframes dotPulseWave {
      0% { transform: scale(0.8); opacity: 1; }
      100% { transform: scale(2.2); opacity: 0; }
    }

    /* 🎨 کنترل تب‌های سگمنتد عمومی (Segmented Control) */
    .segmented-control {
      display: flex;
      background: var(--segmented-bg);
      border-radius: 18px;
      padding: 6px;
      margin-bottom: 24px;
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      gap: 6px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .segmented-control::-webkit-scrollbar { display: none; }
    .segmented-btn {
      flex: 1;
      padding: 12px 14px;
      border-radius: 13px;
      border: 1px solid transparent;
      background: transparent;
      color: var(--text-muted);
      font-size: 0.88rem;
      font-weight: 800;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      user-select: none;
      white-space: nowrap;
      letter-spacing: -0.2px;
      transition: all 0.22s var(--smooth-physics);
    }
    .segmented-btn:hover:not(.active) {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.06);
    }
    .segmented-btn:active {
      transform: scale(0.97);
    }
    .segmented-btn.active {
      background: var(--bg-surface-elevated);
      color: var(--text-main);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.08);
      border-color: var(--border-specular);
    }

    /* 📑 نوار تب‌های استودیوی سلف‌بات - کاملاً ریسپانسیو و منعطف برای موبایل، تبلت و کامپیوتر */
    .studio-tab-bar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      background: var(--segmented-bg);
      border-radius: 20px;
      padding: 8px;
      margin-bottom: 24px;
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      gap: 8px;
      box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.35);
    }
    .studio-tab-btn {
      width: 100%;
      min-height: 44px;
      padding: 10px 6px;
      border-radius: 14px;
      border: 1px solid transparent;
      background: transparent;
      color: var(--text-muted);
      font-size: 0.81rem;
      font-weight: 800;
      font-family: inherit;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      user-select: none;
      white-space: nowrap;
      letter-spacing: -0.2px;
      transition: all 0.24s var(--smooth-physics);
      text-align: center;
    }
    .studio-tab-btn:hover:not(.active) {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.07);
      transform: translateY(-1px);
    }
    .studio-tab-btn:active {
      transform: scale(0.96);
    }
    .studio-tab-btn.active {
      background: var(--gradient-btn);
      color: #ffffff !important;
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 6px 20px -2px rgba(99, 102, 241, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }

    @media (max-width: 920px) {
      .studio-tab-bar {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        scroll-snap-type: x mandatory;
        padding: 6px;
        gap: 6px;
      }
      .studio-tab-bar::-webkit-scrollbar { display: none; }
      .studio-tab-btn {
        flex: 0 0 auto;
        width: auto;
        scroll-snap-align: start;
        padding: 10px 16px;
        font-size: 0.82rem;
      }
    }

    /* 🧭 نوار پیمایش هوشمند بین قابلیت‌های استودیو Pro */
    .studio-nav-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      background: var(--bg-surface-elevated);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-lg);
      padding: 12px 18px;
      margin: 24px 0 16px 0;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
    }
    .studio-nav-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--btn-secondary-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: 12px;
      padding: 9px 14px;
      cursor: pointer;
      color: var(--text-main);
      font-family: inherit;
      transition: all 0.22s var(--smooth-physics);
      user-select: none;
      min-width: 140px;
    }
    .studio-nav-btn:hover:not(:disabled) {
      background: var(--btn-secondary-hover);
      border-color: rgba(168, 85, 247, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    }
    .studio-nav-btn:active:not(:disabled) {
      transform: scale(0.96);
    }
    .studio-nav-btn:disabled {
      opacity: 0.35;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    .studio-nav-btn .nav-btn-text {
      display: flex;
      flex-direction: column;
      text-align: right;
      min-width: 0;
    }
    .studio-nav-btn.prev .nav-btn-text {
      text-align: right;
    }
    .studio-nav-btn.next .nav-btn-text {
      text-align: left;
    }
    .studio-nav-btn .nav-btn-sub {
      font-size: 0.68rem;
      color: var(--text-muted);
      font-weight: 700;
    }
    .studio-nav-btn .nav-btn-title {
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--accent-indigo);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 130px;
    }
    .studio-nav-btn .nav-arrow {
      font-size: 0.88rem;
      color: var(--text-muted);
      transition: transform 0.2s ease;
    }
    .studio-nav-btn:hover:not(:disabled) .nav-arrow {
      color: var(--accent-purple);
    }
    .studio-nav-btn.prev:hover:not(:disabled) .nav-arrow {
      transform: translateX(3px);
    }
    .studio-nav-btn.next:hover:not(:disabled) .nav-arrow {
      transform: translateX(-3px);
    }
    .studio-nav-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      user-select: none;
    }
    .studio-nav-counter {
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--text-muted);
      direction: rtl;
    }
    .studio-nav-dots {
      display: flex;
      align-items: center;
      gap: 7px;
    }
    .studio-nav-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid var(--border-subtle);
      cursor: pointer;
      transition: all 0.25s var(--spring-physics);
      position: relative;
    }
    .studio-nav-dot:hover {
      background: rgba(168, 85, 247, 0.6);
      transform: scale(1.3);
    }
    .studio-nav-dot.active {
      width: 26px;
      border-radius: 10px;
      background: var(--gradient-brand);
      border-color: rgba(255, 255, 255, 0.35);
      box-shadow: 0 0 12px var(--border-glow);
    }
    @media (max-width: 600px) {
      .studio-nav-bar {
        flex-wrap: wrap;
        justify-content: center;
        padding: 12px;
        gap: 10px;
      }
      .studio-nav-btn {
        flex: 1 1 calc(50% - 10px);
        min-width: 110px;
        padding: 8px 10px;
      }
      .studio-nav-btn .nav-btn-title {
        max-width: 80px;
        font-size: 0.76rem;
      }
      .studio-nav-center {
        order: -1;
        width: 100%;
        margin-bottom: 4px;
      }
    }

    /* 📱 شبیه‌ساز زنده پروفایل تلگرام (Ultra-Realistic Live Mockup) */
    .tg-mockup-wrapper {
      background: var(--clock-box-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-lg);
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 18px;
      position: relative;
      overflow: hidden;
      box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    .tg-mockup-header {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .tg-mockup-avatar-wrap {
      position: relative;
      flex-shrink: 0;
    }
    .tg-mockup-avatar {
      width: 66px;
      height: 66px;
      border-radius: 50%;
      background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      font-weight: 900;
      color: #fff;
      font-family: 'Outfit', sans-serif;
      box-shadow: 0 10px 28px rgba(168, 85, 247, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.4);
      user-select: none;
      transition: transform 0.3s var(--spring-physics);
    }
    .tg-mockup-wrapper:hover .tg-mockup-avatar {
      transform: scale(1.05) rotate(4deg);
    }
    .tg-online-ring {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 16px;
      height: 16px;
      background: #10b981;
      border-radius: 50%;
      border: 2.5px solid var(--bg-surface);
      box-shadow: 0 0 12px #10b981;
    }
    .tg-online-ring::after {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 50%;
      border: 1.5px solid #10b981;
      animation: radarWave 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
    }
    @keyframes radarWave {
      0% { transform: scale(0.9); opacity: 1; }
      100% { transform: scale(2.4); opacity: 0; }
    }
    .tg-mockup-info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      min-width: 0;
      flex: 1;
    }
    .tg-mockup-name-row {
      display: flex;
      align-items: baseline;
      gap: 9px;
      flex-wrap: wrap;
    }
    .tg-mockup-firstname {
      font-size: 1.24rem;
      font-weight: 900;
      color: var(--text-main);
      letter-spacing: -0.3px;
    }
    .tg-mockup-lastname {
      font-size: 1.24rem;
      font-weight: 900;
      background: var(--clock-digits-grad);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.5px;
    }
    .tg-mockup-status {
      display: flex;
      align-items: center;
      gap: 7px;
      font-size: 0.8rem;
      color: var(--accent-blue);
      font-weight: 700;
    }
    .tg-status-dot {
      width: 7px;
      height: 7px;
      background: var(--accent-blue);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--accent-blue);
      animation: pulseDot 2s infinite ease-in-out;
    }
    @keyframes pulseDot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.75); }
    }
    .tg-mockup-body {
      background: rgba(0, 0, 0, 0.22);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 14px 18px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
    }
    @media (min-width: 680px) {
      .tg-mockup-body {
        grid-template-columns: 1fr 1fr;
        gap: 18px;
        align-items: center;
      }
    }
    .tg-mockup-field {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }
    .tg-field-icon {
      font-size: 1.15rem;
      line-height: 1.4;
    }
    .tg-field-content {
      flex: 1;
      min-width: 0;
    }
    .tg-field-label {
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--text-muted);
      margin-bottom: 2px;
    }
    .tg-field-value {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--text-main);
      word-break: break-word;
      line-height: 1.5;
    }
    .tg-clock-bar {
      display: flex;
      align-items: baseline;
      justify-content: center;
      direction: ltr !important;
      gap: 8px;
      padding: 12px 0;
    }
    .tg-clock-digits {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(2.4rem, 7vw, 3.2rem);
      font-weight: 900;
      background: var(--clock-digits-grad);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: var(--clock-shadow);
      direction: ltr;
      user-select: none;
      letter-spacing: 1px;
    }

    /* 🎚️ سوئیچ‌های تاگل مدرن (iOS 18 Spring Switches) */
    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      background: var(--table-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-md);
      padding: 16px 20px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
      transition: border-color 0.25s ease, background-color 0.25s ease, transform 0.25s var(--smooth-physics);
    }
    .toggle-row:hover {
      border-color: rgba(168, 85, 247, 0.3);
      transform: translateY(-1px);
    }
    .toggle-label {
      font-size: 0.92rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 4px;
      letter-spacing: -0.2px;
    }
    .toggle-desc {
      font-size: 0.78rem;
      color: var(--text-muted);
      line-height: 1.5;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 52px;
      height: 28px;
      flex-shrink: 0;
    }
    .switch input { opacity: 0; width: 0; height: 0; }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: rgba(255, 255, 255, 0.16);
      border-radius: 34px;
      border: 1px solid var(--border-subtle);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
      transition: background-color 0.28s var(--smooth-physics), border-color 0.28s ease, box-shadow 0.28s ease;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 3px;
      background-color: #ffffff;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
      transition: transform 0.28s var(--spring-physics);
    }
    input:checked + .slider {
      background-color: var(--primary);
      border-color: var(--primary-hover);
      box-shadow: 0 0 16px rgba(139, 92, 246, 0.45);
    }
    input:checked + .slider:before {
      transform: translateX(24px);
    }

    /* چیپ‌های متغیر بیوگرافی */
    .var-chip {
      background: var(--accent-purple-bg);
      border: 1px solid var(--accent-purple-border);
      border-radius: 10px;
      padding: 5px 12px;
      font-size: 0.76rem;
      font-weight: 800;
      color: var(--accent-purple);
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s var(--spring-physics), background-color 0.2s ease, color 0.2s ease;
    }
    .var-chip:hover {
      background: var(--primary);
      border-color: var(--primary);
      color: #ffffff;
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 4px 14px rgba(139, 92, 246, 0.35);
    }
    .var-chip:active {
      transform: scale(0.95);
    }
    .bio-templates-box {
      margin-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .bio-preset-pill {
      background: var(--table-bg);
      border: 1px dashed var(--border-subtle);
      border-radius: 12px;
      padding: 10px 14px;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--text-muted);
      cursor: pointer;
      direction: ltr;
      text-align: right;
      transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
    }
    .bio-preset-pill:hover {
      border-color: var(--primary);
      border-style: solid;
      color: var(--text-main);
      background: rgba(168, 85, 247, 0.1);
      transform: translateX(-4px);
    }

    /* تب‌های اختصاصی درون پنل ادمین */
    .admin-subtab-bar {
      display: flex;
      background: var(--table-bg);
      border-radius: 16px;
      padding: 5px;
      margin-bottom: 24px;
      border: 1px solid var(--border-subtle);
      gap: 6px;
      overflow-x: auto;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.25);
    }
    .admin-subtab-btn {
      flex: 1;
      min-width: 140px;
      padding: 11px 16px;
      border-radius: 12px;
      border: 1px solid transparent;
      background: transparent;
      color: var(--text-muted);
      font-size: 0.86rem;
      font-weight: 800;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      user-select: none;
      transition: all 0.22s var(--smooth-physics);
    }
    .admin-subtab-btn:hover:not(.active) {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-main);
    }
    .admin-subtab-btn.active {
      background: var(--primary);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 18px var(--border-glow);
    }

    /* 🏷️ فیلدهای ورودی (Inputs & Selects) */
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 18px;
    }
    .form-label {
      font-size: 0.84rem;
      color: var(--text-muted);
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      align-items: center;
      letter-spacing: -0.2px;
    }
    .input-field {
      width: 100%;
      padding: 13px 18px;
      background: var(--bg-input);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-md);
      color: var(--text-main);
      font-size: 16px; /* جلوگیری اساسی از زوم ناخواسته در مرورگرهای موبایل و iOS */
      outline: none;
      font-family: inherit;
      line-height: 1.5;
      box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.25);
      transition: border-color 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;
    }
    .input-field::placeholder {
      color: var(--text-dim);
      opacity: 0.75;
      font-size: 0.84rem;
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
      direction: rtl;
      text-align: right;
    }
    .input-field:focus::placeholder {
      opacity: 0.35;
    }
    .input-field:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px var(--border-glow), inset 0 1px 3px rgba(0, 0, 0, 0.3);
      background: var(--bg-surface-elevated);
    }
    select.input-field {
      appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: left 14px center;
      padding-left: 38px;
      cursor: pointer;
    }
    .input-field.mono {
      font-family: 'JetBrains Mono', monospace;
      direction: ltr;
      text-align: left;
    }
    .input-field.mono::placeholder {
      font-family: 'Vazirmatn', sans-serif;
      font-size: 0.82rem;
      direction: rtl;
      text-align: right;
    }
    .input-field.center-text {
      text-align: center;
    }
    .input-field.center-text::placeholder {
      text-align: center;
    }
    .input-field:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* 📱 ردیف ورودی به همراه دکمه عملیاتی واکنش‌گرا (Input with Action Button) */
    .input-action-row {
      display: flex;
      gap: 12px;
      align-items: stretch;
      width: 100%;
    }
    .input-action-row .input-field {
      flex: 1 1 auto;
      min-width: 0;
    }
    .input-action-row .btn {
      flex: 0 0 auto;
      width: auto;
      white-space: nowrap;
      padding: 12px 22px;
    }
    @media (max-width: 600px) {
      .input-action-row {
        flex-direction: column;
        gap: 10px;
      }
      .input-action-row .input-field,
      .input-action-row .btn {
        width: 100% !important;
        flex: 1 1 100%;
      }
    }

    /* 🔘 استایل فوق پیشرفته دکمه‌ها با افکت نورانی و لرزش لمسی */
    .btn {
      width: 100%;
      padding: 13px 20px;
      border-radius: var(--radius-md);
      font-size: 0.92rem;
      font-weight: 800;
      font-family: inherit;
      border: 1px solid transparent;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      user-select: none;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      letter-spacing: -0.2px;
      text-align: center;
      transition: transform 0.22s var(--spring-physics),
                  box-shadow 0.22s ease,
                  background-color 0.2s ease,
                  border-color 0.2s ease,
                  color 0.2s ease;
      will-change: transform;
    }
    .btn-auto {
      width: auto !important;
      display: inline-flex;
    }
    .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%);
      opacity: 0;
      transition: opacity 0.2s ease;
      pointer-events: none;
    }
    .btn:hover:not(:disabled)::before {
      opacity: 1;
    }
    .btn::after {
      content: '';
      position: absolute;
      top: -50%; left: -70%;
      width: 35%; height: 200%;
      background: linear-gradient(90deg, transparent, var(--shimmer-glow), transparent);
      transform: rotate(25deg);
      transition: none;
      pointer-events: none;
      opacity: 0;
    }
    .btn:hover:not(:disabled)::after {
      opacity: 1;
      left: 140%;
      transition: left 0.75s ease-in-out;
    }
    .btn:hover:not(:disabled) {
      transform: translateY(-2.5px) scale(1.01);
    }
    .btn:active:not(:disabled) {
      transform: translateY(1px) scale(0.97) !important;
      transition-duration: 0.08s;
    }
    .btn-primary {
      background: var(--gradient-brand);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 10px 25px -4px rgba(124, 58, 237, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    .btn-primary:hover:not(:disabled) {
      box-shadow: 0 14px 34px -4px rgba(124, 58, 237, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }
    .btn-secondary {
      background: var(--btn-secondary-bg);
      color: var(--text-main);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.06);
    }
    .btn-secondary:hover:not(:disabled) {
      background: var(--btn-secondary-hover);
      border-color: rgba(168, 85, 247, 0.35);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
      color: #ffffff;
    }
    .btn-gold {
      background: var(--gradient-gold);
      color: #0f172a;
      font-weight: 900;
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 10px 25px -4px rgba(245, 158, 11, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }
    .btn-gold:hover:not(:disabled) {
      box-shadow: 0 14px 32px -4px rgba(245, 158, 11, 0.6);
    }
    .btn-warning {
      background: var(--accent-amber-bg);
      color: var(--accent-amber);
      border: 1px solid var(--accent-amber-border);
      border-top: 1px solid rgba(251, 191, 36, 0.45);
      box-shadow: 0 4px 14px rgba(245, 158, 11, 0.15);
    }
    .btn-warning:hover:not(:disabled) {
      background: var(--accent-amber);
      color: #ffffff;
      box-shadow: 0 8px 25px rgba(245, 158, 11, 0.35);
    }
    .btn-danger {
      background: var(--accent-rose-bg);
      color: var(--accent-rose);
      border: 1px solid var(--accent-rose-border);
      border-top: 1px solid rgba(251, 113, 133, 0.45);
      box-shadow: 0 4px 14px rgba(244, 63, 94, 0.15);
    }
    .btn-danger:hover:not(:disabled) {
      background: var(--accent-rose);
      color: #ffffff;
      box-shadow: 0 8px 25px rgba(244, 63, 94, 0.35);
    }
    .btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    }

    /* 🎨 استودیوی پریست‌های فونت و استایل ساعت */
    .preset-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }
    .preset-card {
      background: var(--btn-secondary-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-md);
      padding: 14px 10px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      position: relative;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
      transition: transform 0.22s var(--spring-physics),
                  border-color 0.2s ease,
                  background-color 0.2s ease,
                  box-shadow 0.2s ease;
    }
    .preset-card:hover {
      background: var(--btn-secondary-hover);
      border-color: var(--border-focus);
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
    }
    .preset-card:active {
      transform: scale(0.95);
    }
    .preset-card.active {
      background: var(--accent-purple-bg);
      border-color: var(--primary);
      box-shadow: 0 0 25px var(--border-glow), inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    .preset-name {
      font-size: 0.77rem;
      color: var(--text-muted);
      margin-bottom: 6px;
      font-weight: 700;
    }
    .preset-card.active .preset-name {
      color: var(--accent-purple);
    }
    .preset-digits {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.22rem;
      font-weight: 800;
      color: var(--text-main);
      direction: ltr;
    }

    /* ⚡ جداکننده‌ها */
    .sep-scroll-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      overflow-x: auto;
      padding-bottom: 8px;
    }
    .sep-pill {
      padding: 9px 18px;
      border-radius: 12px;
      background: var(--btn-secondary-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      color: var(--text-main);
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.15rem;
      font-weight: 800;
      cursor: pointer;
      min-width: 48px;
      text-align: center;
      user-select: none;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s var(--spring-physics), background-color 0.2s ease, border-color 0.2s ease;
    }
    .sep-pill:hover {
      background: var(--btn-secondary-hover);
      border-color: rgba(168, 85, 247, 0.35);
      transform: translateY(-2px);
    }
    .sep-pill:active {
      transform: scale(0.94);
    }
    .sep-pill.active {
      background: var(--primary);
      border-color: var(--primary);
      color: #ffffff;
      box-shadow: 0 4px 18px var(--border-glow);
      transform: translateY(-1px);
    }

    /* 📊 مانیتورینگ سلامت */
    .health-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 20px;
    }
    .health-item {
      background: var(--btn-secondary-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-md);
      padding: 16px 20px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .health-item:hover {
      border-color: rgba(168, 85, 247, 0.3);
      transform: translateY(-1px);
    }
    .health-label {
      font-size: 0.76rem;
      color: var(--text-muted);
      margin-bottom: 5px;
      font-weight: 700;
    }
    .health-value {
      font-size: 0.96rem;
      font-weight: 800;
      color: var(--text-main);
    }

    /* 👑 پنل ادمین */
    .admin-kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
      gap: 14px;
      margin-bottom: 26px;
    }
    .admin-kpi-card {
      background: var(--btn-secondary-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-md);
      padding: 16px;
      text-align: center;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.22s var(--spring-physics), box-shadow 0.22s ease, border-color 0.2s ease;
    }
    .admin-kpi-card:hover {
      transform: translateY(-3px) scale(1.02);
      border-color: rgba(168, 85, 247, 0.35);
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
    }
    .admin-kpi-num {
      font-size: 1.95rem;
      font-weight: 900;
      color: var(--text-main);
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: -0.5px;
    }
    .admin-kpi-title {
      font-size: 0.77rem;
      color: var(--text-muted);
      margin-top: 5px;
      font-weight: 700;
    }

    /* 📱 نگهدارنده و اسکرول نرم جدول‌های پنل ادمین */
    .table-responsive-wrapper {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: 14px;
      background: var(--table-bg);
      margin-top: 10px;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    .table-responsive-wrapper::-webkit-scrollbar {
      height: 6px;
    }
    .table-responsive-wrapper::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.25);
    }
    .table-responsive-wrapper::-webkit-scrollbar-thumb {
      background: rgba(168, 85, 247, 0.4);
      border-radius: 10px;
    }

    .admin-table {
      width: 100%;
      min-width: 600px;
      border-collapse: collapse;
      font-size: 0.86rem;
    }
    .admin-table th, .admin-table td {
      padding: 13px 14px;
      text-align: right;
      border-bottom: 1px solid var(--border-subtle);
      white-space: nowrap;
    }
    .admin-table th {
      color: var(--text-muted);
      font-weight: 800;
      font-size: 0.78rem;
      background: rgba(0, 0, 0, 0.15);
    }
    .admin-table tbody tr {
      transition: background-color 0.2s ease;
    }
    .admin-table tbody tr:hover {
      background-color: rgba(255, 255, 255, 0.04);
    }
    .copy-btn {
      background: var(--accent-indigo-bg);
      border: 1px solid var(--accent-indigo-border);
      border-radius: 8px;
      color: var(--accent-indigo);
      padding: 5px 12px;
      font-size: 0.76rem;
      font-weight: 800;
      cursor: pointer;
      font-family: inherit;
      transition: transform 0.18s var(--spring-physics), background-color 0.18s ease, color 0.18s ease;
    }
    .copy-btn:hover {
      background: var(--primary);
      color: #ffffff;
      transform: scale(1.05);
    }
    .copy-btn:active {
      transform: scale(0.95);
    }
    .status-badge {
      padding: 4px 10px;
      border-radius: 8px;
      font-size: 0.74rem;
      font-weight: 800;
      display: inline-block;
    }
    .status-badge.unused { background: var(--accent-green-bg); color: var(--accent-green); border: 1px solid var(--accent-green-border); }
    .status-badge.used { background: var(--accent-rose-bg); color: var(--accent-rose); border: 1px solid var(--accent-rose-border); }

    /* ⚓ فوتر اختصاصی سایت */
    .footer-dock {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      background: var(--bg-surface);
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-lg);
      font-size: 0.8rem;
      color: var(--text-muted);
      flex-wrap: wrap;
      gap: 12px;
      box-shadow: var(--card-shadow);
    }
    .footer-admin-link {
      color: var(--accent-amber);
      cursor: pointer;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      transition: transform 0.2s ease, color 0.2s ease;
    }
    .footer-admin-link:hover {
      color: var(--text-main);
      transform: translateX(-3px);
    }

    /* 🚨 توست اعلان‌ها (Floating Capsule Notification with Spring Entrance) */
    #toast {
      position: fixed;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%) translateY(120px) scale(0.92);
      padding: 16px 28px;
      border-radius: 35px;
      font-size: 0.94rem;
      font-weight: 800;
      backdrop-filter: blur(32px) saturate(200%);
      -webkit-backdrop-filter: blur(32px) saturate(200%);
      box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.15);
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: transform 0.4s var(--spring-physics), opacity 0.3s ease;
      letter-spacing: -0.2px;
      white-space: nowrap;
      max-width: 90vw;
      text-align: center;
    }
    #toast.show {
      transform: translateX(-50%) translateY(0) scale(1);
      opacity: 1;
      pointer-events: auto;
    }
    #toast.success {
      background: rgba(16, 185, 129, 0.94);
      color: #ffffff;
      border: 1px solid rgba(110, 231, 183, 0.5);
      box-shadow: 0 20px 50px -10px rgba(16, 185, 129, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2);
    }
    #toast.error {
      background: rgba(244, 63, 94, 0.94);
      color: #ffffff;
      border: 1px solid rgba(253, 164, 175, 0.5);
      box-shadow: 0 20px 50px -10px rgba(244, 63, 94, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2);
    }
    #toast.info {
      background: rgba(59, 130, 246, 0.94);
      color: #ffffff;
      border: 1px solid rgba(147, 197, 253, 0.5);
      box-shadow: 0 20px 50px -10px rgba(59, 130, 246, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2);
    }

    /* 🪟 مودال تنظیمات با انیمیشن فنری پویا */
    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(4, 6, 16, 0.78);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 22px;
      animation: modalFadeIn 0.3s ease both;
    }
    @keyframes modalFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .modal-container {
      width: 100%;
      max-width: 590px;
      max-height: 90vh;
      overflow-y: auto;
      background: var(--modal-bg);
      border: 1px solid var(--border-subtle);
      border-top: 1px solid var(--border-specular);
      border-radius: var(--radius-xl);
      padding: 30px;
      box-shadow: 0 32px 80px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08);
      animation: modalPop 0.35s var(--spring-physics) both;
    }
    @keyframes modalPop {
      from { opacity: 0; transform: scale(0.92) translateY(18px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--border-subtle);
    }
    .modal-heading {
      font-size: 1.2rem;
      font-weight: 900;
      color: var(--text-main);
      letter-spacing: -0.3px;
    }
    .btn-close {
      background: var(--btn-secondary-bg);
      border: 1px solid var(--border-subtle);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      font-size: 1.4rem;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.25s var(--spring-physics), background-color 0.2s ease, color 0.2s ease;
    }
    .btn-close:hover {
      background: rgba(244, 63, 94, 0.15);
      border-color: rgba(244, 63, 94, 0.35);
      color: var(--accent-rose);
      transform: rotate(90deg) scale(1.1);
    }
    .btn-close:active {
      transform: scale(0.9);
    }

    .spinner {
      width: 20px; height: 20px;
      border: 2.5px solid rgba(255, 255, 255, 0.3);
      border-top-color: #ffffff;
      border-radius: 50%;
      animation: spin 0.65s linear infinite;
      display: inline-block;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* 🌊 انیمیشن ورود تب‌ها و محتواهای سوییچ‌شونده */
    #studioPaneClock:not(.hidden),
    #studioPaneBio:not(.hidden),
    #studioPaneAfk:not(.hidden),
    #studioPaneMute:not(.hidden),
    #studioPaneAntittl:not(.hidden),
    #studioPaneAutomation:not(.hidden),
    #studioPaneBot:not(.hidden),
    #adminTabContentStats:not(.hidden),
    #adminTabContentCodes:not(.hidden),
    #adminTabContentUsers:not(.hidden),
    #loginFormBox:not(.hidden),
    #registerFormBox:not(.hidden),
    #adminLoginBox:not(.hidden),
    #adminDashboardBox:not(.hidden) {
      animation: tabPaneFade 0.28s var(--smooth-physics) both;
    }
    @keyframes tabPaneFade {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .action-buttons-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 14px;
      width: 100%;
    }
    .action-buttons-grid .btn {
      width: 100%;
      min-height: 48px;
      padding: 12px 14px;
      font-size: 0.88rem;
      white-space: normal;
      line-height: 1.35;
      text-align: center;
    }
    .digits-row {
      display: flex;
      gap: 14px;
      margin-bottom: 22px;
      flex-wrap: wrap;
    }

    /* 👤 بهینه‌سازی فرم‌های ورود، اتصال تلگرام و دکمه ذخیره در کامپیوتر و گوشی */
    #userAuthSection {
      max-width: 490px;
      margin: 0 auto;
      width: 100%;
    }
    #telegramConnectSection {
      max-width: 640px;
      margin: 0 auto;
      width: 100%;
    }
    #adminLoginBox {
      max-width: 490px;
      margin: 0 auto;
      width: 100%;
    }
    #saveBtn {
      max-width: 500px;
      margin: 20px auto 24px auto;
      display: flex;
    }

    .hidden { display: none !important; }

    /* 📱 بهینه‌سازی دقیق واکنش‌گرایی در نمایشگرهای موبایل و تبلت */
    @media (max-width: 680px) {
      .container {
        max-width: 100%;
      }
      .admin-kpi-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
      .action-buttons-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
    }

    @media (max-width: 580px) {
      body {
        padding: 12px 10px 55px 10px;
      }
      .glass-card {
        padding: 20px 16px;
        border-radius: 22px;
      }
      .navbar {
        padding: 12px 16px;
        gap: 10px;
      }
      .brand-gem {
        width: 40px;
        height: 40px;
        font-size: 19px;
        border-radius: 12px;
      }
      .brand-title-wrap h1 {
        font-size: 1.15rem;
      }
      .badge-pro {
        font-size: 0.62rem;
        padding: 2px 7px;
      }
      .btn-theme-toggle {
        padding: 7px 11px;
        font-size: 0.78rem;
      }
      .theme-text {
        display: none;
      }
      .btn-admin-highlight {
        padding: 7px 11px;
        font-size: 0.78rem;
      }
      .btn-nav-action {
        padding: 7px 11px;
        font-size: 0.78rem;
      }
      .hero-clock-box {
        padding: 24px 14px;
      }
      .hero-calendar-chip {
        font-size: 0.78rem;
        padding: 5px 14px;
      }
      .clock-badges-row {
        gap: 7px;
      }
      .meta-chip {
        font-size: 0.72rem;
        padding: 5px 11px;
      }
      .segmented-control {
        padding: 4px;
        gap: 4px;
        margin-bottom: 20px;
      }
      .segmented-btn {
        font-size: 0.8rem;
        padding: 10px 8px;
      }
      .action-buttons-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .action-buttons-grid .btn {
        font-size: 0.9rem;
        padding: 12px 18px;
      }
      .preset-grid {
        grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
        gap: 9px;
        margin-bottom: 20px;
      }
      .preset-card {
        padding: 11px 7px;
      }
      .preset-digits {
        font-size: 1.08rem;
      }
      .health-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .health-item {
        padding: 14px 16px;
      }
      .admin-subtab-bar {
        padding: 4px;
        gap: 4px;
      }
      .admin-subtab-btn {
        min-width: 115px;
        font-size: 0.78rem;
        padding: 9px 12px;
      }
      .modal-backdrop {
        padding: 14px;
      }
      .modal-container {
        padding: 22px 18px;
        border-radius: 22px;
      }
      .footer-dock {
        padding: 14px 16px;
        font-size: 0.76rem;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 8px;
      }
    }

    @media (max-width: 400px) {
      .navbar {
        flex-direction: column;
        align-items: stretch;
      }
      .brand {
        justify-content: center;
      }
      .nav-actions {
        justify-content: center;
      }
      .segmented-btn {
        font-size: 0.74rem;
        padding: 9px 5px;
      }
      .digits-row {
        flex-direction: column;
        gap: 10px;
      }
    }
  </style>
</head>
<body>

  <!-- 🌌 بوم الگوریتمی ذرات و شبکه دینامیک -->
  <canvas id="algoCanvas"></canvas>

  <!-- شفق قطبی اتمسفریک -->
  <div class="aurora-container">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <div class="container">

    <!-- ⚡ نوبار شناور تفکیک‌شده Arizo Self -->
    <div class="glass-card navbar">
      <div class="brand">
        <div class="brand-gem" onclick="location.reload()" title="Arizo Self Studio">⚡</div>
        <div class="brand-title-wrap">
          <h1>
            <span class="brand-title-gradient">Arizo Self</span>
            <span class="badge-pro">PRO V3.0</span>
          </h1>
        </div>
      </div>

      <div class="nav-actions">
        <!-- ☀️ دکمه سوئیچ تم روز و شب -->
        <button class="btn-theme-toggle" id="themeToggleBtn" onclick="toggleTheme()" title="تغییر حالت شب و روز">
          <span class="theme-icon-rotate" id="themeIcon">☀️</span>
          <span class="theme-text" id="themeText">حالت روز</span>
        </button>

        <!-- 👑 دکمه طلایی دسترسی به پنل مدیریت (فقط برای ادمین‌ها پس از لاگین نمایان می‌شود) -->
        <button class="btn-admin-highlight hidden" id="adminPortalNavBtn" onclick="openAdminPortal()" title="ورود به پنل مدیریت ارشد">
          <span>👑</span> <span>پنل مدیریت</span>
        </button>

        <!-- نشانگر حساب کاربری کاربر متصل -->
        <div id="userHeaderBadge" class="hidden" style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:0.85rem; font-weight:700; color:var(--accent-indigo);" id="usernameDisplay">کاربر</span>
          <button class="btn-nav-action" onclick="openSettingsModal()" title="تنظیمات حساب">⚙️</button>
          <button class="btn-nav-action" onclick="logoutUser()" title="خروج" style="color:var(--accent-rose);">🚪</button>
        </div>
      </div>
    </div>

    <!-- 👑 مرکز فرماندهی و مدیریت فروش Arizo Self (Super Admin Portal) -->
    <div id="adminPanelSection" class="glass-card hidden">
      <div class="section-header">
        <div class="section-title">
          <span>👑</span> مرکز فرماندهی و فروشگاه Arizo Self
        </div>
        <button class="btn-nav-action" onclick="closeAdminPortal()" style="color:var(--accent-rose);">
          <span>✕</span> بازگشت به پنل کاربران
        </button>
      </div>

      <!-- فرم لاگین ادمین (در صورت نداشتن توکن مدیریت) -->
      <div id="adminLoginBox">
        <div style="background: var(--accent-amber-bg); border: 1px solid var(--accent-amber-border); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
          <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-amber); margin-bottom: 6px;">
            🔒 احراز هویت سطح مدیر کل (Master Key Authentication)
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">
            جهت دسترسی به انبار کدهای لایسنس، آمار و مدیریت کاربران، کلید امنیتی مدیر ارشد را وارد کنید.
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">کلید مستر ادمین (Admin Master Password)</label>
          <input type="password" id="adminPassInput" class="input-field" placeholder="کلید عبور مدیر کل (Master Password)...">
        </div>
        <button class="btn btn-primary" id="adminLoginBtn" onclick="doAdminLogin()">
          <span>ورود به پنل مدیریت کل</span>
        </button>
      </div>

      <!-- داشبورد تفکیک‌شده ادمین با تب‌های مجزا -->
      <div id="adminDashboardBox" class="hidden">
        
        <!-- 📑 نوار تب‌های تفکیک‌شده ادمین -->
        <div class="admin-subtab-bar">
          <button id="adminSubtabStats" class="admin-subtab-btn active" onclick="switchAdminSubtab('stats')">
            <span>📊</span> آمار و شاخص‌ها
          </button>
          <button id="adminSubtabCodes" class="admin-subtab-btn" onclick="switchAdminSubtab('codes')">
            <span>🎟️</span> صدور و انبار لایسنس
          </button>
          <button id="adminSubtabUsers" class="admin-subtab-btn" onclick="switchAdminSubtab('users')">
            <span>👥</span> مدیریت کاربران و ربات‌ها
          </button>
        </div>

        <!-- 📊 تب ۱: آمار و کارت‌های شاخص -->
        <div id="adminTabContentStats">
          <div class="admin-kpi-grid">
            <div class="admin-kpi-card">
              <div class="admin-kpi-num" id="statUsers">۰</div>
              <div class="admin-kpi-title">👥 کل کاربران</div>
            </div>
            <div class="admin-kpi-card">
              <div class="admin-kpi-num" id="statBots" style="color:var(--accent-green);">۰</div>
              <div class="admin-kpi-title">🟢 ربات‌های فعال</div>
            </div>
            <div class="admin-kpi-card">
              <div class="admin-kpi-num" id="statAvailCodes" style="color:var(--accent-blue);">۰</div>
              <div class="admin-kpi-title">🎟️ کدهای آماده فروش</div>
            </div>
            <div class="admin-kpi-card">
              <div class="admin-kpi-num" id="statUsedCodes" style="color:var(--accent-rose);">۰</div>
              <div class="admin-kpi-title">💳 کدهای مصرف‌شده</div>
            </div>
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px;">
            <div style="font-size:0.9rem; font-weight:800; color:var(--text-main); margin-bottom:8px;">
              🌐 سلامت شبکه ابری Arizo Edge
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); line-height: 1.6;">
              سرورهای Cloudflare Workers با توزیع جهانی در حال اجرای کرون‌جاب‌های زمان‌بندی‌شده هستند. اتصال همگام‌ساز تهران در میلی‌ثانیه صفر هر دقیقه فعال است.
            </div>
          </div>
        </div>

        <!-- 🎟️ تب ۲: تولید و انبار کدهای لایسنس برای فروش -->
        <div id="adminTabContentCodes" class="hidden">
          <!-- فرم تولید کد -->
          <div style="background: var(--accent-amber-bg); border: 1px solid var(--accent-amber-border); border-radius: var(--radius-md); padding: 18px; margin-bottom: 22px;">
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--accent-amber); margin-bottom: 12px; display:flex; align-items:center; gap:6px;">
              <span>✨</span> صدور کدهای جدید لایسنس Arizo Self برای فروش به خریداران
            </div>
            <div style="display: flex; gap: 12px; margin-bottom: 14px; flex-wrap: wrap;">
              <div class="form-group" style="flex: 1; min-width: 120px; margin-bottom:0;">
                <label class="form-label">تعداد کد</label>
                <select id="codeCountSelect" class="input-field" style="background:var(--bg-input);">
                  <option value="1">۱ عدد کد</option>
                  <option value="5" selected>۵ عدد کد</option>
                  <option value="10">۱۰ عدد کد</option>
                  <option value="20">۲۰ عدد کد</option>
                </select>
              </div>
              <div class="form-group" style="flex: 2; min-width: 190px; margin-bottom:0;">
                <label class="form-label">نوع اشتراک و اعتبار</label>
                <select id="codePlanSelect" class="input-field" style="background:var(--bg-input);" onchange="onCodePlanChange()">
                  <option value="1_month" selected>اشتراک ۱ ماهه (۳۰ روز)</option>
                  <option value="3_months">اشتراک ۳ ماهه (۹۰ روز)</option>
                  <option value="6_months">اشتراک ۶ ماهه (۱۸۰ روز)</option>
                  <option value="lifetime">اشتراک دائمی و نامحدود</option>
                  <option value="custom">⭐ سفارشی (تعیین روز دلخواه توسط ادمین)</option>
                </select>
              </div>
              <div id="customDaysGroup" class="form-group hidden" style="flex: 1; min-width: 130px; margin-bottom:0;">
                <label class="form-label">تعداد روزهای اعتبار</label>
                <input type="number" id="customDaysInput" class="input-field mono" min="1" max="3650" value="15" placeholder="مثال: ۱۵ (تعداد روز اعتبار لایسنس)">
              </div>
            </div>
            <button class="btn btn-gold" id="btnGenerateCodes" onclick="doGenerateCodes()">
              <span>🎟️ تولید کدهای لایسنس جدید و اضافه به انبار</span>
            </button>
          </div>

          <!-- جدول انبار کدها -->
          <div>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--text-main); margin-bottom: 10px; display:flex; justify-content:space-between; align-items:center;">
              <span>📋 انبار کدهای لایسنس موجود (کپی مستقیم جهت ارسال به مشتری)</span>
              <button class="btn-nav-action" onclick="loadAdminData()">🔄 رفرش</button>
            </div>
            <div class="table-responsive-wrapper" style="max-height: 340px;">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>کد لایسنس</th>
                    <th>پلن و روزها</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody id="codesTableBody">
                  <tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:18px;">درحال بارگذاری کدها...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 👥 تب ۳: مدیریت کاربران و کنترل سلف‌بات‌ها -->
        <div id="adminTabContentUsers" class="hidden">
          <div style="font-size: 0.95rem; font-weight: 800; color: var(--text-main); margin-bottom: 10px; display:flex; justify-content:space-between; align-items:center;">
            <span>👥 فهرست کاربران پلتفرم و وضعیت اجرای ربات‌ها</span>
            <button class="btn-nav-action" onclick="loadAdminData()">🔄 رفرش</button>
          </div>
          <div class="table-responsive-wrapper" style="max-height: 340px;">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>نام کاربری</th>
                  <th>سطح دسترسی</th>
                  <th>پلن و اعتبار</th>
                  <th>تلگرام</th>
                  <th>وضعیت تعلیق</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody id="usersTableBody">
                <tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:18px;">درحال بارگذاری کاربران...</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <button class="btn btn-secondary" onclick="logoutAdmin()" style="margin-top: 24px; color:var(--accent-rose);">
          <span>🚪 خروج از حساب مدیریت</span>
        </button>

      </div>
    </div>

    <!-- 👤 درگاه ورود و ساخت حساب کاربران -->
    <div id="userAuthSection" class="glass-card">
      <div class="segmented-control">
        <button id="userTabLogin" class="segmented-btn active" onclick="switchUserTab('login')">
          <span>🔑</span> ورود به حساب
        </button>
        <button id="userTabRegister" class="segmented-btn" onclick="switchUserTab('register')">
          <span>✨</span> ساخت حساب (نیاز به لایسنس)
        </button>
      </div>

      <!-- فرم ورود کاربران عادی -->
      <div id="loginFormBox">
        <div class="form-group">
          <label class="form-label">نام کاربری اختصاصی</label>
          <input type="text" id="loginUsername" class="input-field mono" placeholder="نام کاربری شما (مثال: amirmaster)" autocomplete="username">
        </div>

        <div class="form-group">
          <label class="form-label">رمز عبور امن</label>
          <input type="password" id="loginPassword" class="input-field" placeholder="رمز عبور حساب کاربری (••••••••)" autocomplete="current-password">
        </div>

        <button class="btn btn-primary" id="loginBtn" onclick="doUserLogin()">
          <span>ورود به داشبورد Arizo Self</span>
        </button>
      </div>

      <!-- فرم ثبت‌نام کاربران با کد لایسنس -->
      <div id="registerFormBox" class="hidden">
        <div class="form-group" style="background: var(--accent-purple-bg); border: 1px dashed var(--accent-purple-border); border-radius: var(--radius-md); padding: 14px;">
          <label class="form-label" style="color: var(--accent-purple);">
            <span>🎟️ کد لایسنس / ردیم‌کد فعال‌سازی</span>
            <span style="font-size:0.75rem; color:var(--accent-amber);">الزامی جهت ساخت حساب</span>
          </label>
          <input type="text" id="regLicenseCode" class="input-field mono" placeholder="کد لایسنس فعال‌سازی (مثال: ARIZO-XXXX-XXXX-XXXX)" style="text-transform: uppercase; font-size:1.05rem; letter-spacing:1px; color:var(--accent-purple);">
          <div style="font-size: 0.74rem; color: var(--text-muted); margin-top: 6px; line-height: 1.5;">
            💳 این کد را از فروشنده دریافت کرده و در اینجا وارد کنید (برای مدیر اول در دیتابیس تازه، نیازی به لایسنس نیست).
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">نام کاربری جدید</label>
          <input type="text" id="regUsername" class="input-field mono" placeholder="نام کاربری دلخواه (مثال: amir_vip)">
        </div>

        <div class="form-group">
          <label class="form-label">رمز عبور امن (حداقل ۸ کاراکتر)</label>
          <input type="password" id="regPassword" class="input-field" placeholder="رمز عبور امن و قوی (حداقل ۸ کاراکتر)">
        </div>

        <div class="form-group">
          <label class="form-label">تکرار رمز عبور</label>
          <input type="password" id="regPasswordConfirm" class="input-field" placeholder="تکرار مجدد رمز عبور جهت اطمینان">
        </div>

        <button class="btn btn-primary" id="regBtn" onclick="doUserRegister()">
          <span>ثبت‌نام و فعال‌سازی اشتراک Arizo Self</span>
        </button>
      </div>
    </div>

    <!-- ⚠️ هشدار و فرم تعلیق هوشمند اشتراک کاربر (Suspension Alert Box) -->
    <div id="suspensionAlertBox" class="glass-card hidden" style="border: 1px solid var(--accent-rose-border); background: var(--accent-rose-bg);">
      <div style="display:flex; align-items:flex-start; gap:14px; flex-wrap:wrap;">
        <div style="font-size: 2.2rem; line-height: 1;">⚠️</div>
        <div style="flex:1; min-width: 250px;">
          <div style="font-size: 1.05rem; font-weight: 800; color: var(--accent-rose); margin-bottom: 6px;">
            حساب کاربری و سلف‌بات شما در حالت تعلیق قرار دارد (Suspended)
          </div>
          <div style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 14px;">
            مدت زمان اشتراک شما به پایان رسیده و عملکرد سلف‌بات روی تلگرام متوقف شده است. جهت فعال‌سازی مجدد و خروج آنی از تعلیق، کد لایسنس جدید خود را وارد کنید:
          </div>
          <div class="input-action-row" style="max-width: 580px;">
            <input type="text" id="quickRenewCodeInput" class="input-field mono" placeholder="کد لایسنس جدید جهت خروج از تعلیق (مثال: ARIZO-XXXX-XXXX-XXXX)" style="text-transform: uppercase; font-weight: 700; color: var(--accent-purple);">
            <button class="btn btn-primary" id="quickRenewBtn" onclick="doQuickRenew()" style="background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);">
              <span>🚀 خروج از تعلیق و شارژ</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 🕒 بخش ۱: شبیه‌ساز زنده پروفایل تلگرام (Telegram Profile Live Mockup) -->
    <div id="clockHeroCard" class="glass-card hidden">
      <div class="section-header">
        <div class="section-title">
          <span>📱</span> شبیه‌ساز زنده پروفایل تلگرام (Live Telegram Mockup)
        </div>
        <span class="section-tag">پیش‌نمایش لحظه‌ای</span>
      </div>

      <!-- Telegram Profile Realistic Mockup -->
      <div class="tg-mockup-wrapper">
        <div class="tg-mockup-header">
          <div class="tg-mockup-avatar-wrap">
            <div class="tg-mockup-avatar" id="mockupAvatar">AZ</div>
            <div class="tg-online-ring"></div>
          </div>
          <div class="tg-mockup-info">
            <div class="tg-mockup-name-row">
              <span class="tg-mockup-firstname" id="mockupFirstName">کاربر Arizo</span>
              <span class="tg-mockup-lastname" id="mockupLastName">۰۰:۰۰</span>
            </div>
            <div class="tg-mockup-status">
              <span class="tg-status-dot"></span>
              <span>آنلاین (لحظه‌ای به وقت تهران)</span>
            </div>
          </div>
        </div>

        <div class="tg-mockup-body">
          <div class="tg-mockup-field">
            <div class="tg-field-icon">💬</div>
            <div class="tg-field-content">
              <div class="tg-field-label">بیوگرافی زنده تلگرام (Bio / About)</div>
              <div class="tg-field-value" id="mockupBio">در انتظار فعال‌سازی بیوگرافی هوشمند...</div>
            </div>
          </div>
          <div class="tg-mockup-field">
            <div class="tg-field-icon">🗓️</div>
            <div class="tg-field-content">
              <div class="tg-field-label">تقویم خورشیدی و زمان اتمی تهران</div>
              <div class="tg-field-value" id="persianDateText">درحال محاسبه تقویم خورشیدی...</div>
            </div>
          </div>
        </div>

        <!-- Clock preview bar with seconds pulse positioned to the right of minute -->
        <div class="tg-clock-bar" dir="ltr">
          <div class="tg-clock-digits" id="clockPreview" dir="ltr">۰۰:۰۰</div>
          <div class="clock-seconds-badge" id="secondsPulse" dir="ltr">:۰۰</div>
        </div>

        <div class="clock-badges-row">
          <span class="meta-chip active">
            <span class="dot-pulse"></span> همگام‌سازی لحظه‌ای تهران
          </span>
          <span class="meta-chip" id="userPlanBadge">اشتراک: استاندارد</span>
          <span class="meta-chip" id="userFontBadge">فونت: بولد لوکس</span>
        </div>
      </div>
    </div>

    <!-- 📱 بخش ۲: اتصال اکانت تلگرام به سلف‌بات -->
    <div id="telegramConnectSection" class="glass-card hidden">
      <div class="section-header">
        <div class="section-title">
          <span>📱</span> بخش ۲: اتصال حساب تلگرام به Arizo Self
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <button id="btnCancelTgConnect" class="btn-nav-action hidden" onclick="cancelTelegramConnect()" style="color:var(--text-muted); font-size:0.78rem;">
            <span>✕ انصراف و بازگشت</span>
          </button>
          <span class="section-tag">ایزوله در Cloudflare KV</span>
        </div>
      </div>

      <div class="segmented-control">
        <button id="tabTgPhone" class="segmented-btn active" onclick="switchTgTab('phone')">ارسال کد پیامکی</button>
        <button id="tabTgSess" class="segmented-btn" onclick="switchTgTab('session')">رشته StringSession مستقیم</button>
      </div>

      <!-- با شماره تلفن -->
      <div id="tgPhoneBox">
        <div class="form-group">
          <label class="form-label">شماره تلفن اکانت تلگرام</label>
          <input type="tel" id="tgPhone" class="input-field mono" placeholder="شماره همراه با پیش‌شماره کشور (مثال: 989123456789+)" dir="ltr">
        </div>

        <div id="tgCodeGroup" class="form-group hidden">
          <label class="form-label">کد ۵ رقمی ارسالی از سوی تلگرام</label>
          <input type="text" id="tgCode" class="input-field mono" placeholder="کد ۵ رقمی ارسالی از تلگرام (مثال: 58291)" maxlength="8" dir="ltr">
        </div>

        <div id="tgPassGroup" class="form-group hidden">
          <label class="form-label">رمز تأیید دو مرحله‌ای اکانت (2FA)</label>
          <input type="password" id="tgPass" class="input-field" placeholder="رمز تأیید دومرحله‌ای (در صورت فعال بودن 2FA)">
        </div>

        <button class="btn btn-primary" id="tgAuthBtn" onclick="doTelegramAuth()">
          <span>دریافت کد ورود از سرور تلگرام</span>
        </button>
      </div>

      <!-- با سشن مستقیم -->
      <div id="tgSessBox" class="hidden">
        <div class="form-group">
          <label class="form-label">رشته سشن خام تلگرام (StringSession)</label>
          <textarea id="tgSessionInput" class="input-field mono" rows="4" placeholder="رشته طولانی StringSession تلگرام خود را اینجا وارد کنید (Pyrogram یا Telethon/GramJS)..." dir="ltr"></textarea>
        </div>
        <button class="btn btn-primary" id="tgSessBtn" onclick="doConnectDirectSession()">
          <span>اتصال و رمزنگاری فوری با AES-256</span>
        </button>
      </div>
    </div>

    <!-- 🎨 بخش ۳: استودیوی طراحی و امکانات پیشرفته سلف‌بات -->
    <div id="dashboardSection" class="glass-card hidden">
      <div class="section-header">
        <div class="section-title">
          <span>🎨</span> استودیوی شخصی‌سازی و امکانات پیشرفته
        </div>
        <span class="section-tag">Arizo Studio Pro</span>
      </div>

      <!-- هشدار هوشمند خطای ارتباط تلگرام با امکان اتصال مجدد -->
      <div id="tgAlertBox" class="hidden" style="background:var(--accent-rose-bg); border:1px solid var(--accent-rose-border); border-radius:var(--radius-md); padding:14px 18px; margin-bottom:18px;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
          <div>
            <div style="font-weight:800; color:var(--accent-rose); font-size:0.9rem; margin-bottom:4px;">⚠️ وضعیت ارتباط با تلگرام:</div>
            <div id="tgAlertMsg" style="color:var(--text-main); font-size:0.83rem;"></div>
          </div>
          <button class="btn btn-primary" onclick="showTelegramConnect()" style="padding:6px 14px; font-size:0.8rem; background:linear-gradient(135deg,#f43f5e,#e11d48);">
            <span>🔄 اتصال مجدد اکانت تلگرام</span>
          </button>
        </div>
      </div>

      <!-- 📑 نوار تب‌های استودیو - کاملاً واکنش‌گرا و ریسپانسیو برای موبایل و کامپیوتر -->
      <div class="studio-tab-bar">
        <button id="studioTabClock" class="studio-tab-btn active" onclick="switchStudioTab('clock')">
          <span>🕒</span> <span>ساعت و استایل</span>
        </button>
        <button id="studioTabBio" class="studio-tab-btn" onclick="switchStudioTab('bio')">
          <span>📝</span> <span>بیوگرافی زنده</span>
        </button>
        <button id="studioTabAfk" class="studio-tab-btn" onclick="switchStudioTab('afk')">
          <span>🤖</span> <span>منشی خودکار</span>
        </button>
        <button id="studioTabMute" class="studio-tab-btn" onclick="switchStudioTab('mute')">
          <span>🔇</span> <span>فیلتر سکوت</span>
        </button>
        <button id="studioTabAntittl" class="studio-tab-btn" onclick="switchStudioTab('antittl')">
          <span>📸</span> <span>ضد خودتخریبی</span>
        </button>
        <button id="studioTabAutomation" class="studio-tab-btn" onclick="switchStudioTab('automation')">
          <span>🌙</span> <span>حالت خواب</span>
        </button>
        <button id="studioTabBot" class="studio-tab-btn" onclick="switchStudioTab('bot')">
          <span>⚡</span> <span>ربات و لاگر</span>
        </button>
      </div>

      <!-- 🕒 تب ۱: فونت و استایل ساعت -->
      <div id="studioPaneClock">
        <!-- گرید پریست‌های فونت -->
        <div class="preset-grid" id="presetBtns"></div>

        <!-- جداکننده‌ها -->
        <div class="form-group">
          <label class="form-label">انتخاب کاراکتر جداکننده ساعت و دقیقه</label>
          <div class="sep-scroll-row">
            <div class="sep-pill active" onclick="setColonChar(':')">:</div>
            <div class="sep-pill" onclick="setColonChar('•')">•</div>
            <div class="sep-pill" onclick="setColonChar('⚡')">⚡</div>
            <div class="sep-pill" onclick="setColonChar('✦')">✦</div>
            <div class="sep-pill" onclick="setColonChar('❤️')">❤️</div>
            <div class="sep-pill" onclick="setColonChar('💎')">💎</div>
            <div class="sep-pill" onclick="setColonChar('✨')">✨</div>
            <div class="sep-pill" onclick="setColonChar('◈')">◈</div>
            <div class="sep-pill" onclick="setColonChar('|')">|</div>
            <div class="sep-pill" onclick="setColonChar('~')">~</div>
          </div>
        </div>

        <!-- پیشوند و پسوند نام خانوادگی -->
        <div style="display:flex; gap:12px; margin-bottom:18px; flex-wrap:wrap;">
          <div class="form-group" style="flex:1; min-width:140px; margin-bottom:0;">
            <label class="form-label">پیشوند ساعت (قبل از ساعت)</label>
            <input type="text" id="prefixInput" class="input-field" placeholder="پیشوند ساعت (مثلاً: [ یا | یا ⚡)" maxlength="15" oninput="updateLiveClock()">
          </div>
          <div class="form-group" style="flex:1; min-width:140px; margin-bottom:0;">
            <label class="form-label">پسوند ساعت (بعد از ساعت)</label>
            <input type="text" id="suffixInput" class="input-field" placeholder="پسوند ساعت (مثلاً: ] یا ⚡ یا VIP)" maxlength="15" oninput="updateLiveClock()">
          </div>
        </div>

        <!-- حالت ۱۲ ساعته -->
        <div class="toggle-row">
          <div>
            <div class="toggle-label">حالت ۱۲ ساعته (AM / PM لوکس)</div>
            <div class="toggle-desc">نمایش ساعت به‌صورت ۱۲ ساعته همراه با نشانگر فانتزی ᴬᴹ / ᴾᴹ</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="toggle12h" onchange="updateLiveClock()">
            <span class="slider"></span>
          </label>
        </div>

        <!-- ارقام دستی -->
        <div class="digits-row" style="margin-top:16px;">
          <div class="form-group" style="flex: 3; min-width: 180px; margin-bottom: 0;">
            <label class="form-label">ارقام دلخواه دستی (۱۰ کاراکتر ۰ تا ۹)</label>
            <input type="text" id="customDigits" class="input-field mono" placeholder="۱۰ رقم دلخواه از ۰ تا ۹ به ترتیب (مثال: ۰۱۲۳۴۵۶۷۸۹)" dir="ltr">
          </div>
          <div class="form-group" style="flex: 1; min-width: 80px; margin-bottom: 0;">
            <label class="form-label">جداکننده</label>
            <input type="text" id="colonInput" class="input-field mono center-text" value=":" maxlength="4" placeholder=":" style="text-align:center;">
          </div>
        </div>
      </div>

      <!-- 📝 تب ۲: بیوگرافی هوشمند و زنده -->
      <div id="studioPaneBio" class="hidden">
        <div class="toggle-row" style="margin-bottom:18px;">
          <div>
            <div class="toggle-label">فعال‌سازی بیوگرافی زنده و هوشمند (Live Bio)</div>
            <div class="toggle-desc">به‌روزرسانی خودکار بیو تلگرام با ساعت، تقویم و متون پویا</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="bioEnabledToggle" onchange="updateLiveClock()">
            <span class="slider"></span>
          </label>
        </div>

        <div class="form-group">
          <label class="form-label">قالب متن بیوگرافی تلگرام (حداکثر ۷۰ کاراکتر)</label>
          <input type="text" id="bioTemplateInput" class="input-field" placeholder="قالب بیوگرافی (مثال: ⏳ {time} | 📅 {date} | ⚡ Arizo Pro)" maxlength="70" oninput="updateLiveClock()">
          <div style="display:flex; gap:6px; margin-top:8px; flex-wrap:wrap; align-items:center;">
            <span style="font-size:0.75rem; color:var(--text-muted);">افزودن متغیر با کلیک:</span>
            <button type="button" class="var-chip" onclick="insertBioVar('{time}')">⏰ {time} (ساعت)</button>
            <button type="button" class="var-chip" onclick="insertBioVar('{date}')">🗓️ {date} (تاریخ خورشیدی)</button>
            <button type="button" class="var-chip" onclick="insertBioVar('{day}')">☀️ {day} (روز هفته)</button>
          </div>
        </div>

        <!-- قالب‌های پیشنهادی آماده -->
        <div class="bio-templates-box">
          <div style="font-size:0.8rem; font-weight:700; color:var(--text-muted); margin-bottom:8px;">💡 قالب‌های محبوب و آماده:</div>
          <div class="bio-preset-pill" onclick="applyBioTemplate('⏳ {time} | 📅 {date} | ⚡ Arizo')">⏳ {time} | 📅 {date} | ⚡ Arizo</div>
          <div class="bio-preset-pill" onclick="applyBioTemplate('⚡ {time} • {day} • Always Online')">⚡ {time} • {day} • Always Online</div>
          <div class="bio-preset-pill" onclick="applyBioTemplate('『 {time} 』✨ {date} ✨')">『 {time} 』✨ {date} ✨</div>
        </div>
      </div>

      <!-- 🤖 تب ۳: منشی خودکار پیوی (AFK) -->
      <div id="studioPaneAfk" class="hidden">
        <div class="toggle-row" style="margin-bottom:18px;">
          <div>
            <div class="toggle-label">منشی خودکار پیوی (AFK Auto-Secretary)</div>
            <div class="toggle-desc">هنگامی که آنلاین نیستید، پیام‌های خصوصی به طور هوشمند و خودکار پاسخ داده می‌شوند</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="afkEnabledToggle">
            <span class="slider"></span>
          </label>
        </div>

        <div class="form-group">
          <label class="form-label">متن پاسخ خودکار منشی به مخاطبان در پیوی</label>
          <textarea id="afkMessageInput" class="input-field" rows="3" placeholder="متن پاسخ خودکار منشی (مثال: درود! در حال حاضر امکان پاسخگویی ندارم. به محض آنلاین شدن پاسخ خواهم داد ⏳)"></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">فاصله زمانی ارسال مجدد برای یک مخاطب (کول‌داون ضد اسپم)</label>
          <select id="afkCooldownSelect" class="input-field" style="background:var(--bg-input);">
            <option value="5">هر ۵ دقیقه یک‌بار به هر فرد</option>
            <option value="10" selected>هر ۱۰ دقیقه یک‌بار به هر فرد (پیشنهادی)</option>
            <option value="30">هر ۳۰ دقیقه یک‌بار به هر فرد</option>
            <option value="60">هر ۱ ساعت یک‌بار به هر فرد</option>
            <option value="1440">فقط یک‌بار در طول شبانه‌روز به هر فرد</option>
          </select>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
            💡 این قابلیت مانع از اسپم شدن چت هنگامی که مخاطب چندین پیام متوالی می‌فرستد می‌شود.
          </div>
        </div>
      </div>

      <!-- 🔇 تب ۴: سکوت و حذف خودکار پیام (Mute) -->
      <div id="studioPaneMute" class="hidden">
        <div class="toggle-row" style="margin-bottom:18px;">
          <div>
            <div class="toggle-label">سکوت و حذف آنی پیام‌های افراد مزاحم (Mute Filter)</div>
            <div class="toggle-desc">پیام‌های ارسال‌شده توسط کاربران مشخص‌شده بلافاصله برای دو طرف پاک می‌شوند</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="muteEnabledToggle">
            <span class="slider"></span>
          </label>
        </div>

        <div class="form-group">
          <label class="form-label">لیست آیدی‌های عددی یا یوزرنیم‌های تلگرام جهت سکوت (با کاما جدا کنید)</label>
          <input type="text" id="mutedUsersInput" class="input-field mono" placeholder="آیدی‌های عددی یا یوزرنیم‌های تلگرام با کاما (مثال: 123456789, @username, 987654321)" dir="ltr">
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
            💡 شما همچنین در محیط تلگرام می‌توانید با ریپلای روی پیام هر شخص و ارسال <code>.mute</code> او را اضافه کرده و با <code>.unmute</code> از سکوت خارج کنید.
          </div>
        </div>
      </div>

      <!-- 📸 تب ۵: ضد خودتخریبی مدیا (Anti-TTL) -->
      <div id="studioPaneAntittl" class="hidden">
        <div class="toggle-row" style="margin-bottom:18px;">
          <div>
            <div class="toggle-label">ضد خودتخریبی مدیاهای زمان‌دار (Anti-TTL Saver)</div>
            <div class="toggle-desc">ذخیره خودکار تصاویر و ویدیوهای تایمردار (یک‌بار مصرف) در پیام‌های ذخیره‌شده (Saved Messages)</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="antiTtlEnabledToggle">
            <span class="slider"></span>
          </label>
        </div>

        <div style="background:var(--accent-blue-bg); border:1px solid var(--accent-blue-border); border-radius:14px; padding:16px; margin-top:14px;">
          <div style="font-size:0.88rem; font-weight:700; color:var(--accent-blue); margin-bottom:6px; display:flex; align-items:center; gap:6px;">
            <span>🛡️</span> عملکرد نجات‌دهنده خودکار رسانه‌ها
          </div>
          <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.7; margin:0;">
            به محض اینکه شخصی در گفت‌وگوی خصوصی عکسی با تایمر ۱ تا ۳۰ ثانیه‌ای یا View-Once ارسال کند، ربات در کسری از ثانیه نسخه کامل آن را دریافت کرده و به بخش <b>Saved Messages</b> حساب خودتان با ذکر نام فرستنده و مدت تایمر ارسال می‌کند تا هرگز از دست نرود.
          </p>
        </div>
      </div>

      <!-- 🌙 تب ۶: حالت خواب و اتوماسیون -->
      <div id="studioPaneAutomation" class="hidden">
        <div class="toggle-row" style="margin-bottom:18px;">
          <div>
            <div class="toggle-label">حالت خواب و استراحت شبانه (Sleep Mode)</div>
            <div class="toggle-desc">در ساعات مشخص‌شده، به‌روزرسانی متوقف شده یا متن خواب قرار می‌گیرد</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="sleepEnabledToggle" onchange="updateLiveClock()">
            <span class="slider"></span>
          </label>
        </div>

        <div style="display:flex; gap:12px; margin-bottom:18px; flex-wrap:wrap;">
          <div class="form-group" style="flex:1; min-width:140px; margin-bottom:0;">
            <label class="form-label">شروع خواب (ساعت)</label>
            <select id="sleepStartSelect" class="input-field" style="background:var(--bg-input);" onchange="updateLiveClock()">
              <option value="22">۲۲:۰۰ (۱۰ شب)</option>
              <option value="23" selected>۲۳:۰۰ (۱۱ شب)</option>
              <option value="0">۰۰:۰۰ (نیمه‌شب)</option>
              <option value="1">۰۱:۰۰ (بامداد)</option>
              <option value="2">۰۲:۰۰ (بامداد)</option>
            </select>
          </div>
          <div class="form-group" style="flex:1; min-width:140px; margin-bottom:0;">
            <label class="form-label">پایان خواب (ساعت)</label>
            <select id="sleepEndSelect" class="input-field" style="background:var(--bg-input);" onchange="updateLiveClock()">
              <option value="6">۰۶:۰۰ (صبح)</option>
              <option value="7" selected>۰۷:۰۰ (صبح)</option>
              <option value="8">۰۸:۰۰ (صبح)</option>
              <option value="9">۰۹:۰۰ (صبح)</option>
              <option value="10">۱۰:۰۰ (صبح)</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">متن نام خانوادگی در طول ساعات خواب</label>
          <input type="text" id="sleepTextInput" class="input-field" value="😴 Sleep" placeholder="متن نام خانوادگی در خواب (مثال: 😴 Sleep یا 🌙 خوابیدم)" maxlength="30" oninput="updateLiveClock()">
        </div>
      </div>

      <!-- 🤖 تب ۷: ربات اختصاصی و لاگر پیشرفته تلگرام (Telegram Mini App & Loggers) -->
      <div id="studioPaneBot" class="hidden">
        <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%); border: 1px solid var(--border-specular); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
          <div style="font-size: 0.98rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
            <span>🤖</span> <span>اتصال ربات دستیار اختصاصی تلگرام (BotFather API)</span>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.7;">
            با اتصال ربات تلگرامی که در <b>@BotFather</b> می‌سازید، می‌توانید کنترل پنل سایت را مستقیماً داخل محیط تلگرام (Telegram Mini App) باز کنید و گزارش پیام‌های حذف شده، پیام‌های ویرایش شده و رسانه‌های زمان‌دار پیوی را در ربات دریافت کنید.
          </div>
        </div>

        <!-- کارت وارد کردن توکن ربات -->
        <div class="form-group">
          <label class="form-label" style="display:flex; justify-content:space-between; align-items:center;">
            <span>توکن ربات تلگرام (API Token از BotFather@)</span>
            <a href="https://t.me/BotFather" target="_blank" style="color:var(--accent-blue); font-size:0.75rem; text-decoration:none; font-weight:700;">
              ➕ دریافت توکن از @BotFather
            </a>
          </label>
          <div class="input-action-row">
            <input type="text" id="botTokenInput" class="input-field mono" placeholder="توکن ربات دریافتی از BotFather@ (مثال: 123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ)" dir="ltr">
            <button class="btn btn-primary" id="btnVerifyBot" onclick="doVerifyBotToken()">
              <span>⚡ اتصال و فعال‌سازی وب‌هوک</span>
            </button>
          </div>
        </div>

        <!-- کارت نمایش وضعیت ربات متصل -->
        <div id="botInfoCard" class="hidden" style="background: var(--bg-surface-elevated); border: 1px solid var(--accent-green-border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, #10b981, #059669); display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
                🤖
              </div>
              <div>
                <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-main);" id="botNameDisplay">ربات تلگرام</div>
                <a id="botUsernameLink" href="#" target="_blank" style="font-size: 0.8rem; color: var(--accent-green); text-decoration: none; font-weight: 700;">@bot</a>
              </div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <a id="botDirectBtn" href="#" target="_blank" class="btn btn-secondary" style="padding: 7px 14px; font-size: 0.8rem; border-color: var(--accent-green-border); color: var(--accent-green); width: auto;">
                <span>🚀 باز کردن ربات در تلگرام</span>
              </a>
              <button id="btnDisconnectBot" type="button" onclick="doDisconnectBotToken()" class="btn btn-secondary" style="padding: 7px 14px; font-size: 0.8rem; border-color: var(--accent-rose-border); color: var(--accent-rose); width: auto;">
                <span>🔌 قطع اتصال ربات</span>
              </button>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; font-size: 0.78rem;">
            <div style="background: rgba(0,0,0,0.2); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
              🟢 <b>وضعیت وب‌هوک:</b> متصل و فعال
            </div>
            <div style="background: rgba(0,0,0,0.2); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
              🎛️ <b>ورود به پنل (Mini App):</b> دکمه منو فعال شد
            </div>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 10px; line-height: 1.6;">
            💡 <b>نکته:</b> پس از اتصال، یک‌بار وارد ربات تلگرام خود شده و دستور <code>/start</code> را بفرستید تا پنل گرافیکی را داخل تلگرام باز کنید و ربات آماده ارسال گزارش‌ها شود.
          </div>
        </div>

        <!-- سوییچ ۱: ضد حذف پیام (Anti-Delete) -->
        <div class="toggle-row" style="margin-bottom:14px;">
          <div>
            <div class="toggle-label">🗑️ سطل زباله و ضد حذف پیام‌های پیوی (Anti-Delete)</div>
            <div class="toggle-desc">اگر شخصی در پیوی پیامی را پاک کند، متن یا رسانه ذخیره شده فوراً به ربات اختصاصی شما ارسال می‌شود</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="botAntiDeleteToggle" checked>
            <span class="slider"></span>
          </label>
        </div>

        <!-- سوییچ ۲: ضد ویرایش پیام (Anti-Edit) -->
        <div class="toggle-row" style="margin-bottom:14px;">
          <div>
            <div class="toggle-label">✏️ مانیتور و ضد ویرایش پیام‌های پیوی (Anti-Edit)</div>
            <div class="toggle-desc">اگر شخصی پیامی را تغییر دهد، متن قبل از ویرایش و متن جدید در ربات تلگرام به شما نمایش داده می‌شود</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="botAntiEditToggle" checked>
            <span class="slider"></span>
          </label>
        </div>

        <!-- سوییچ ۳: ارسال رسانه‌های خودتخریبی به ربات -->
        <div class="toggle-row" style="margin-bottom:18px;">
          <div>
            <div class="toggle-label">📸 ارسال مدیاهای زمان‌دار به ربات تلگرام (بجای Saved Messages)</div>
            <div class="toggle-desc">تصاویر و ویدیوهای تایمردار (Anti-TTL) مستقیماً به چت ربات تلگرام شما ارسال خواهند شد</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="botForwardTtlToggle" checked>
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <!-- 🧭 نوار پیمایش هوشمند بین قابلیت‌های استودیو (Studio Feature Stepper & Navigator) -->
      <div class="studio-nav-bar">
        <button type="button" class="studio-nav-btn prev" id="studioNavPrev" onclick="navigateStudioStep(-1)">
          <span class="nav-arrow">◀</span>
          <div class="nav-btn-text">
            <span class="nav-btn-sub">قابلیت قبلی</span>
            <span class="nav-btn-title" id="studioNavPrevTitle">ساعت و استایل</span>
          </div>
        </button>

        <div class="studio-nav-center">
          <div class="studio-nav-counter">
            <span id="studioNavCurrentTitle" style="color:var(--text-main); font-weight:800; font-size:0.83rem;">🕒 ساعت و استایل</span>
            <span style="opacity:0.6; font-size:0.75rem;"> (<span id="studioNavCurrentStep">۱</span> از ۷)</span>
          </div>
          <div class="studio-nav-dots" id="studioNavDots"></div>
        </div>

        <button type="button" class="studio-nav-btn next" id="studioNavNext" onclick="navigateStudioStep(1)">
          <div class="nav-btn-text">
            <span class="nav-btn-sub">قابلیت بعدی</span>
            <span class="nav-btn-title" id="studioNavNextTitle">بیوگرافی زنده</span>
          </div>
          <span class="nav-arrow">▶</span>
        </button>
      </div>

      <button class="btn btn-primary" id="saveBtn" onclick="saveFonts()" style="margin-top: 10px; margin-bottom: 24px;">
        <span>💾 ذخیره و اعمال تغییرات استودیو</span>
      </button>

      <!-- ⚡ بخش ۴: عملیات و مانیتورینگ سلامت -->
      <div class="section-header" style="margin-top: 14px;">
        <div class="section-title">
          <span>⚡</span> وضعیت سرویس و مانیتورینگ سلامت
        </div>
        <span class="section-tag">Edge Telemetry</span>
      </div>

      <div class="action-buttons-grid">
        <button class="btn btn-secondary" id="syncBtn" onclick="triggerImmediateSync()">
          <span>⚡ تست به‌روزرسانی آنی</span>
        </button>
        <button class="btn btn-warning" id="toggleBotBtn" onclick="toggleBotState()">
          <span id="toggleBotText">⏸️ توقف موقت</span>
        </button>
        <button class="btn btn-secondary" onclick="showTelegramConnect()" style="color:var(--accent-blue); border-color:var(--accent-blue-border); font-size:0.82rem;">
          <span>📱 تعویض اکانت</span>
        </button>
      </div>

      <!-- کارت‌های مانیتورینگ سلامت -->
      <div class="health-grid">
        <div class="health-item">
          <div class="health-label">وضعیت سلف‌بات شما</div>
          <div class="health-value" id="botStatusBadge" style="color:var(--accent-green);">🟢 فعال و آنلاین</div>
        </div>
        <div class="health-item">
          <div class="health-label">آخرین به‌روزرسانی تلگرام</div>
          <div class="health-value" id="lastUpdateTime">درحال استعلام...</div>
        </div>
      </div>
    </div>

    <!-- ⚓ فوتر اختصاصی سایت Arizo Self -->
    <div class="footer-dock">
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="dot-pulse"></span>
        <span>شبکه ابری Arizo Self فعال است</span>
      </div>
      <div style="font-size: 0.78rem; color: var(--text-dim);">
        Arizo Self Cloud Platform &copy; 2026
      </div>
    </div>

  </div>

  <!-- 🪟 مودال تنظیمات کاربر -->
  <div id="settingsModal" class="modal-backdrop hidden">
    <div class="modal-container">
      <div class="modal-head">
        <div class="modal-heading">⚙️ تنظیمات و امنیت حساب Arizo Self</div>
        <button class="btn-close" onclick="closeSettingsModal()">&times;</button>
      </div>

      <!-- تمدید اشتراک با ردیم‌کد -->
      <div style="background: var(--accent-purple-bg); border: 1px solid var(--accent-purple-border); border-radius: 14px; padding: 16px; margin-bottom: 20px;">
        <div style="font-size:0.88rem; font-weight:700; color:var(--accent-purple); margin-bottom:10px;">🎟️ تمدید اعتبار با ردیم‌کد جدید Arizo</div>
        <div class="input-action-row">
          <input type="text" id="extendCodeInput" class="input-field mono" placeholder="کد لایسنس تمدید (مثال: ARIZO-XXXX-XXXX-XXXX)" style="text-transform: uppercase;">
          <button class="btn btn-secondary" onclick="doRedeemExtend()" style="color:var(--accent-purple); border-color:var(--accent-purple-border); white-space:nowrap;">
            <span>تمدید و شارژ اشتراک</span>
          </button>
        </div>
      </div>

      <!-- تغییر پسورد -->
      <div style="margin-bottom: 24px;">
        <div style="font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; color: var(--accent-indigo);">🔑 تغییر رمز عبور ورود</div>
        <div class="form-group">
          <label class="form-label">رمز عبور فعلی</label>
          <input type="password" id="oldPassInput" class="input-field" placeholder="رمز عبور فعلی حساب شما">
        </div>
        <div class="form-group">
          <label class="form-label">رمز عبور جدید (حداقل ۸ کاراکتر)</label>
          <input type="password" id="newPassInput" class="input-field" placeholder="رمز عبور جدید و امن (حداقل ۸ کاراکتر)">
        </div>
        <button class="btn btn-secondary" onclick="doChangePassword()">ثبت رمز عبور جدید</button>
      </div>

      <hr style="border: 0; border-top: 1px solid var(--border-subtle); margin-bottom: 20px;">

      <!-- عملیات حساس -->
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <button class="btn btn-secondary" onclick="doDisconnectTelegram()" style="color:var(--accent-amber);">
          <span>🔌 قطع اتصال حساب تلگرام</span>
        </button>
        <button class="btn btn-danger" onclick="doDeleteAccount()">
          <span>🗑️ حذف کامل حساب کاربری و تمام داده‌ها</span>
        </button>
      </div>
    </div>
  </div>

  <div id="toast"></div>

  <!-- 🚀 منطق جاوااسکریپت و بوم الگوریتمی کلاینت -->
  <script>
    // ==========================================
    // 🌌 موتور بوم الگوریتمی (Generative Canvas Mesh)
    // ==========================================
    (function initAlgorithmicBackground() {
      var canvas = document.getElementById('algoCanvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var width, height, dpr;
      var particles = [];
      var mouse = { x: -1000, y: -1000, active: false };
      var animFrameId = null;
      var isRunning = true;

      function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function createParticles() {
        particles = [];
        var count = Math.min(45, Math.max(20, Math.floor((width * height) / 28000)));
        for (var i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 1.8 + 1.2,
            baseAlpha: Math.random() * 0.35 + 0.3,
            colorShift: Math.random()
          });
        }
      }

      window.addEventListener('resize', function() {
        resize();
        createParticles();
      });
      resize();
      createParticles();

      window.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
      });
      window.addEventListener('mouseleave', function() {
        mouse.active = false;
        mouse.x = -1000;
        mouse.y = -1000;
      });

      document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
          isRunning = false;
          if (animFrameId) cancelAnimationFrame(animFrameId);
        } else {
          isRunning = true;
          render();
        }
      });

      var maxDistSq = 120 * 120;
      var mouseDistSq = 130 * 130;

      function render() {
        if (!isRunning) return;
        ctx.clearRect(0, 0, width, height);

        var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        var pLen = particles.length;

        for (var i = 0; i < pLen; i++) {
          var p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) { p.x = 0; p.vx *= -1; }
          else if (p.x > width) { p.x = width; p.vx *= -1; }
          if (p.y < 0) { p.y = 0; p.vy *= -1; }
          else if (p.y > height) { p.y = height; p.vy *= -1; }

          if (mouse.active) {
            var dx = mouse.x - p.x;
            var dy = mouse.y - p.y;
            var d2 = dx * dx + dy * dy;
            if (d2 < mouseDistSq) {
              var force = (1 - Math.sqrt(d2) / 130) * 0.35;
              p.x += dx * force * 0.05;
              p.y += dy * force * 0.05;
            }
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          if (isDark) {
            ctx.fillStyle = p.colorShift > 0.5 ? 'rgba(168, 85, 247, ' + p.baseAlpha + ')' : 'rgba(56, 189, 248, ' + p.baseAlpha + ')';
          } else {
            ctx.fillStyle = p.colorShift > 0.5 ? 'rgba(99, 102, 241, ' + (p.baseAlpha * 0.8) + ')' : 'rgba(2, 132, 199, ' + (p.baseAlpha * 0.8) + ')';
          }
          ctx.fill();

          for (var j = i + 1; j < pLen; j++) {
            var p2 = particles[j];
            var diffX = p.x - p2.x;
            var diffY = p.y - p2.y;
            var distSq = diffX * diffX + diffY * diffY;

            if (distSq < maxDistSq) {
              var d = Math.sqrt(distSq);
              var lineAlpha = (1 - d / 120) * (isDark ? 0.25 : 0.18);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = isDark 
                ? 'rgba(168, 85, 247, ' + lineAlpha + ')' 
                : 'rgba(99, 102, 241, ' + lineAlpha + ')';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        animFrameId = requestAnimationFrame(render);
      }

      render();
    })();

    // ==========================================
    // ☀️ سوئیچر تم شب و روز
    // ==========================================
    window.toggleTheme = function() {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('arizo_theme', next);
      updateThemeUI(next);
    };

    function updateThemeUI(theme) {
      var icon = document.getElementById('themeIcon');
      var text = document.getElementById('themeText');
      if (icon) {
        icon.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(function() { icon.style.transform = 'rotate(0deg) scale(1)'; }, 350);
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
      if (text) {
        text.textContent = theme === 'dark' ? 'حالت روز' : 'حالت شب';
      }
    }
    updateThemeUI(document.documentElement.getAttribute('data-theme') || 'dark');

    // ==========================================
    // 🎨 پریست‌های فونت و استایل ساعت
    // ==========================================
    var presets = {
      bold:         { name: 'بولد لوکس', digits: ['𝟎','𝟏','𝟐','𝟑','𝟒','𝟓','𝟔','𝟕','𝟖','𝟗'] },
      sansBold:     { name: 'سنس مدرن', digits: ['𝟬','𝟭','𝟮','𝟯','𝟰','𝟱','𝟲','𝟳','𝟴','𝟵'] },
      mono:         { name: 'مونو رترو', digits: ['𝟶','𝟷','𝟸','𝟹','𝟺','𝟻','𝟼','𝟽','𝟾','𝟿'] },
      double:       { name: 'دابل استروک', digits: ['𝟘','𝟙','𝟚','𝟛','𝟜','𝟝','𝟞','𝟟','𝟠','𝟡'] },
      circled:      { name: 'حلقه‌ای مینیمال', digits: ['⓪','①','②','③','④','⑤','⑥','⑦','⑧','⑨'] },
      blackCircled: { name: 'دایره مشکی نئون', digits: ['⓿','➊','➋','➌','➍','➎','➏','➐','➑','➒'] },
      persian:      { name: 'فارسی اصیل', digits: ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'] },
      subscript:    { name: 'اندیس فانتزی', digits: ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉'] },
      bracket:      { name: 'سلطنتی براکت', digits: ['⟦0⟧','⟦1⟧','⟦2⟧','⟦3⟧','⟦4⟧','⟦5⟧','⟦6⟧','⟦7⟧','⟦8⟧','⟦9⟧'] },
      normal:       { name: 'کلاسیک ساده', digits: ['0','1','2','3','4','5','6','7','8','9'] }
    };

    var selectedDigits = presets.bold.digits;
    var currentPresetKey = 'bold';
    var tgStep = 'phone';
    var isBotRunning = true;
    window.isStudioDirty = false;

    function setSafeValue(id, val) {
      var el = document.getElementById(id);
      if (el && document.activeElement !== el) {
        el.value = val;
      }
    }
    function setSafeChecked(id, chk) {
      var el = document.getElementById(id);
      if (el && document.activeElement !== el) {
        el.checked = !!chk;
      }
    }

    document.addEventListener('input', function(e) {
      if (e.target && e.target.closest('#customizationStudioSection')) {
        window.isStudioDirty = true;
      }
    });
    document.addEventListener('change', function(e) {
      if (e.target && e.target.closest('#customizationStudioSection')) {
        window.isStudioDirty = true;
      }
    });

    function showToast(msg, type) {
      var t = document.getElementById('toast');
      t.textContent = msg;
      t.className = 'show ' + (type || 'info');
      setTimeout(function() { t.className = ''; }, 4500);
    }

    function getAuthToken() { return localStorage.getItem('selfbot_token') || ''; }
    function setAuthToken(token) {
      if (token) localStorage.setItem('selfbot_token', token);
      else localStorage.removeItem('selfbot_token');
    }

    function getAdminToken() { return localStorage.getItem('admin_token') || ''; }
    function setAdminToken(token) {
      if (token) localStorage.setItem('admin_token', token);
      else localStorage.removeItem('admin_token');
    }

    function authHeaders() {
      return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAuthToken()
      };
    }

    function adminHeaders() {
      var token = getAuthToken() || getAdminToken();
      return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
    }

    // ==========================================
    // 👑 پنل مدیریت ادمین Arizo Self و کنترل تب‌ها
    // ==========================================
    window.openAdminPortal = function() {
      if (!window.currentUserIsAdmin && !getAdminToken()) {
        showToast('دسترسی به پنل مدیریت فقط برای ادمین‌ها مجاز است.', 'error');
        return;
      }
      document.getElementById('adminPanelSection').classList.remove('hidden');
      document.getElementById('userAuthSection').classList.add('hidden');
      document.getElementById('clockHeroCard').classList.add('hidden');
      document.getElementById('suspensionAlertBox')?.classList.add('hidden');
      document.getElementById('telegramConnectSection').classList.add('hidden');
      document.getElementById('dashboardSection').classList.add('hidden');

      // در صورت ورود کاربر با نقش ادمین، داشبورد مستقیم بدون نیاز به رمز مجدد باز می‌شود
      if (window.currentUserIsAdmin || getAdminToken()) {
        document.getElementById('adminLoginBox').classList.add('hidden');
        document.getElementById('adminDashboardBox').classList.remove('hidden');
        switchAdminSubtab('stats');
        loadAdminData();
      } else {
        document.getElementById('adminLoginBox').classList.remove('hidden');
        document.getElementById('adminDashboardBox').classList.add('hidden');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.closeAdminPortal = function() {
      document.getElementById('adminPanelSection').classList.add('hidden');
      loadUserDashboard();
    };

    // تفکیک تب‌های داخلی پنل ادمین
    window.switchAdminSubtab = function(tab) {
      var btnStats = document.getElementById('adminSubtabStats');
      var btnCodes = document.getElementById('adminSubtabCodes');
      var btnUsers = document.getElementById('adminSubtabUsers');

      var boxStats = document.getElementById('adminTabContentStats');
      var boxCodes = document.getElementById('adminTabContentCodes');
      var boxUsers = document.getElementById('adminTabContentUsers');

      btnStats.classList.toggle('active', tab === 'stats');
      btnCodes.classList.toggle('active', tab === 'codes');
      btnUsers.classList.toggle('active', tab === 'users');

      boxStats.classList.toggle('hidden', tab !== 'stats');
      boxCodes.classList.toggle('hidden', tab !== 'codes');
      boxUsers.classList.toggle('hidden', tab !== 'users');
    };

    window.doAdminLogin = async function() {
      var pass = document.getElementById('adminPassInput').value;
      if (!pass) {
        showToast('رمز عبور مدیریت را وارد کنید', 'error');
        return;
      }
      var btn = document.getElementById('adminLoginBtn');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> اعتبارسنجی...';

      try {
        var res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: pass })
        });
        var data = await res.json();
        if (data.ok && data.token) {
          setAdminToken(data.token);
          showToast('خوش آمدید مدیر ارشد Arizo Self 👑', 'success');
          document.getElementById('adminPassInput').value = '';
          document.getElementById('adminLoginBox').classList.add('hidden');
          document.getElementById('adminDashboardBox').classList.remove('hidden');
          switchAdminSubtab('stats');
          loadAdminData();
        } else {
          showToast(data.error || 'رمز ورود اشتباه است', 'error');
        }
      } catch (e) {
        showToast('خطای شبکه', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>ورود به پنل مدیریت کل</span>';
      }
    };

    window.logoutAdmin = function() {
      setAdminToken('');
      closeAdminPortal();
    };

    async function loadAdminData() {
      try {
        var sRes = await fetch('/api/admin/stats', { headers: adminHeaders() });
        var sData = await sRes.json();
        if (sData.ok) {
          document.getElementById('statUsers').textContent = sData.totalUsers;
          document.getElementById('statBots').textContent = sData.activeBots;
          document.getElementById('statAvailCodes').textContent = sData.availableCodes;
          document.getElementById('statUsedCodes').textContent = sData.usedCodes;
        }

        var cRes = await fetch('/api/admin/codes', { headers: adminHeaders() });
        var cData = await cRes.json();
        if (cData.ok) {
          renderCodesTable(cData.codes);
        }

        var uRes = await fetch('/api/admin/users', { headers: adminHeaders() });
        var uData = await uRes.json();
        if (uData.ok) {
          renderUsersTable(uData.users);
        }
      } catch (e) {}
    }

    function renderCodesTable(codes) {
      var tbody = document.getElementById('codesTableBody');
      if (!codes || !codes.length) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:18px;">هیچ کدی در سیستم ثبت نشده است.</td></tr>';
        return;
      }
      tbody.innerHTML = codes.map(function(c) {
        var statusBadge = c.isUsed 
          ? '<span class="status-badge used">مصرف: ' + (c.usedBy || 'ناشناس') + '</span>'
          : '<span class="status-badge unused">🟢 آماده فروش</span>';
        var planName = c.planName || (c.plan === 'lifetime' ? 'دائمی و نامحدود' : (c.durationDays ? (c.durationDays + ' روزه') : '۱ ماهه (۳۰ روز)'));

        return '<tr>' +
          '<td style="font-family:monospace; font-weight:bold; color:var(--accent-purple);">' + c.code + '</td>' +
          '<td><span style="font-weight:700; color:' + (c.plan === 'lifetime' ? 'var(--accent-amber)' : 'var(--accent-blue)') + ';">' + planName + '</span></td>' +
          '<td>' + statusBadge + '</td>' +
          '<td>' +
            '<button class="copy-btn" data-code="' + c.code + '" onclick="copyCodeToClipboard(this.dataset.code)">📋 کپی</button> ' +
            '<button class="btn-nav-action" data-code="' + c.code + '" onclick="doDeleteCode(this.dataset.code)" style="color:var(--accent-rose); padding:3px 6px;">🗑️</button>' +
          '</td>' +
        '</tr>';
      }).join('');
    }

    function renderUsersTable(users) {
      var tbody = document.getElementById('usersTableBody');
      if (!users || !users.length) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:18px;">کاربری یافت نشد.</td></tr>';
        return;
      }
      tbody.innerHTML = users.map(function(u) {
        var tgStatus = u.hasTelegram 
          ? (u.enabled ? '<span style="color:var(--accent-green);">🟢 فعال</span>' : '<span style="color:var(--accent-amber);">⏸️ متوقف</span>')
          : '<span style="color:var(--text-muted);">قطع</span>';

        var suspendBadge = u.isSuspended 
          ? '<span class="status-badge used" style="color:var(--accent-rose); background:var(--accent-rose-bg);">⏸️ معلق</span>'
          : '<span class="status-badge unused" style="color:var(--accent-green); background:var(--accent-green-bg);">🟢 فعال</span>';

        var isAdm = !!u.isAdmin || u.role === 'admin';
        var roleBadge = isAdm
          ? '<span style="color:var(--accent-amber); background:var(--accent-amber-bg); border:1px solid var(--accent-amber-border); padding:3px 8px; border-radius:6px; font-weight:800; font-size:0.75rem;">👑 مدیر ارشد</span>'
          : '<span style="color:var(--text-muted); background:var(--badge-bg); border:1px solid var(--border-subtle); padding:3px 8px; border-radius:6px; font-size:0.75rem;">👤 کاربر عادی</span>';

        var roleBtnTitle = isAdm ? 'تنزل به کاربر عادی' : 'ارتقا به مدیر ارشد';
        var roleBtnText = isAdm ? '👤 تنزل' : '👑 ارتقا به مدیر';
        var roleBtnColor = isAdm ? 'var(--text-dim)' : 'var(--accent-amber)';

        var planCol = '<div style="font-weight:700;">' + (u.planName || u.plan || 'استاندارد') + '</div>' +
          '<div style="font-size:0.75rem; color:' + (u.isExpired ? 'var(--danger)' : 'var(--accent-blue)') + ';">' + (u.remainingText || '') + '</div>';

        var suspendBtnTitle = u.isSuspended ? 'خروج از تعلیق' : 'تعلیق کاربر';
        var suspendBtnIcon = u.isSuspended ? '🔓' : '🔒';

        return '<tr>' +
          '<td style="font-weight:bold;">' + u.username + '</td>' +
          '<td>' + roleBadge + '</td>' +
          '<td>' + planCol + '</td>' +
          '<td>' + tgStatus + '</td>' +
          '<td>' + suspendBadge + '</td>' +
          '<td>' +
            '<button class="btn-nav-action" data-user="' + u.username + '" onclick="doChangeUserPlan(this.dataset.user)" style="color:var(--accent-blue); padding:4px 8px; font-size:0.74rem;" title="تغییر نوع اشتراک و روزها">⭐ اشتراک</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="toggle_role" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" style="color:' + roleBtnColor + '; padding:4px 8px; font-size:0.74rem;" title="' + roleBtnTitle + '">' + roleBtnText + '</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="toggle" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" title="سوئیچ فعال/مکث ربات">⏸️/▶️</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="toggle_suspend" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" style="color:' + (u.isSuspended ? 'var(--accent-green)' : 'var(--accent-rose)') + ';" title="' + suspendBtnTitle + '">' + suspendBtnIcon + '</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="disconnect" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" style="color:var(--accent-amber);" title="قطع تلگرام">🔌</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="delete" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" style="color:var(--accent-rose);" title="حذف کاربر">🗑️</button>' +
          '</td>' +
        '</tr>';
      }).join('');
    }

    window.copyCodeToClipboard = function(code) {
      navigator.clipboard.writeText(code).then(function() {
        showToast('کد ' + code + ' کپی شد! آماده ارسال به خریدار ✨', 'success');
      });
    };

    window.onCodePlanChange = function() {
      var plan = document.getElementById('codePlanSelect').value;
      var grp = document.getElementById('customDaysGroup');
      if (grp) {
        grp.classList.toggle('hidden', plan !== 'custom');
      }
    };

    window.doGenerateCodes = async function() {
      var count = document.getElementById('codeCountSelect').value;
      var plan = document.getElementById('codePlanSelect').value;
      var customDaysInput = document.getElementById('customDaysInput');
      var customDays = customDaysInput ? (parseInt(customDaysInput.value, 10) || 15) : 15;
      var duration = plan === 'lifetime' ? 0 : (plan === 'custom' ? customDays : (plan === '6_months' ? 180 : (plan === '3_months' ? 90 : 30)));

      var btn = document.getElementById('btnGenerateCodes');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> تولید کدهای امن Arizo...';

      var payload = { count: count, plan: plan, durationDays: duration };
      if (plan === 'custom') {
        payload.customDays = customDays;
      }

      try {
        var res = await fetch('/api/admin/codes/create', {
          method: 'POST',
          headers: adminHeaders(),
          body: JSON.stringify(payload)
        });
        var data = await res.json();
        if (data.ok) {
          var planDesc = plan === 'lifetime' ? 'دائمی' : (plan === 'custom' ? (customDays + ' روزه سفارشی') : (duration + ' روزه'));
          showToast(count + ' کد لایسنس جدید (' + planDesc + ') با موفقیت تولید شد 🎉', 'success');
          loadAdminData();
        } else {
          showToast(data.error || 'خطا در ساخت کد', 'error');
        }
      } catch (e) {
        showToast('خطای شبکه', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>🎟️ تولید کدهای لایسنس جدید و اضافه به انبار</span>';
      }
    };

    window.doChangeUserPlan = async function(uname) {
      var promptMsg = 'انتخاب یا تغییر نوع اشتراک برای کاربر ' + uname + ':\\n1: ۱ ماهه (۳۰ روز)\\n2: ۳ ماهه (۹۰ روز)\\n3: ۶ ماهه (۱۸۰ روز)\\n4: دائمی و نامحدود (Lifetime)\\nیا تعداد روز دلخواه را مستقیماً وارد کنید (مثلاً 45):';
      var choice = prompt(promptMsg, '4');
      if (!choice) return;
      
      var plan = '1_month';
      var customDays = 30;
      choice = choice.trim();
      if (choice === '1') { plan = '1_month'; customDays = 30; }
      else if (choice === '2') { plan = '3_months'; customDays = 90; }
      else if (choice === '3') { plan = '6_months'; customDays = 180; }
      else if (choice === '4' || choice.toLowerCase() === 'lifetime') { plan = 'lifetime'; customDays = 0; }
      else {
        var parsed = parseInt(choice, 10);
        if (!isNaN(parsed) && parsed > 0) {
          plan = 'custom';
          customDays = parsed;
        } else {
          showToast('گزینه یا تعداد روز نامعتبر است', 'error');
          return;
        }
      }

      try {
        var res = await fetch('/api/admin/users/action', {
          method: 'POST',
          headers: adminHeaders(),
          body: JSON.stringify({ username: uname, action: 'set_plan', plan: plan, customDays: customDays })
        });
        var data = await res.json();
        if (data.ok) {
          showToast('اشتراک کاربر ' + uname + ' با موفقیت به ' + (data.planName || plan) + ' تغییر یافت! 🎉', 'success');
          loadAdminData();
        } else {
          showToast(data.error || 'خطا در تغییر اشتراک', 'error');
        }
      } catch (e) {
        showToast('خطای شبکه', 'error');
      }
    };

    window.doDeleteCode = async function(code) {
      if (!confirm('آیا از حذف کد ' + code + ' اطمینان دارید؟')) return;
      try {
        var res = await fetch('/api/admin/codes/delete', {
          method: 'POST',
          headers: adminHeaders(),
          body: JSON.stringify({ code: code })
        });
        var data = await res.json();
        if (data.ok) {
          showToast('کد حذف شد', 'info');
          loadAdminData();
        }
      } catch (e) {}
    };

    window.doUserAdminAction = async function(uname, act) {
      var actName = act === 'delete' ? 'حذف کامل کاربر' : (act === 'disconnect' ? 'قطع تلگرام' : (act === 'toggle_suspend' ? 'تغییر وضعیت تعلیق' : (act === 'toggle_role' ? 'تغییر سطح دسترسی کاربر' : 'تغییر وضعیت ربات')));
      if (act === 'delete' && !confirm('آیا از حذف کاربر ' + uname + ' اطمینان دارید؟')) return;
      if (act === 'toggle_role' && !confirm('آیا از تغییر سطح دسترسی این کاربر (' + uname + ') اطمینان دارید؟')) return;

      try {
        var res = await fetch('/api/admin/users/action', {
          method: 'POST',
          headers: adminHeaders(),
          body: JSON.stringify({ username: uname, action: act })
        });
        var data = await res.json();
        if (data.ok) {
          showToast('عملیات ' + actName + ' انجام شد', 'success');
          loadAdminData();
        } else {
          showToast(data.error || 'خطا در اجرای عملیات', 'error');
        }
      } catch (e) {}
    };

    window.doQuickRenew = async function() {
      var code = document.getElementById('quickRenewCodeInput').value.trim().toUpperCase();
      if (!code) {
        showToast('لطفاً کد لایسنس تمدید را وارد کنید', 'error');
        return;
      }
      var btn = document.getElementById('quickRenewBtn');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> تمدید آنی...';
      try {
        var res = await fetch('/api/user/redeem', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ licenseCode: code })
        });
        var data = await res.json();
        if (data.ok) {
          showToast('حساب شما با موفقیت از حالت تعلیق خارج و شارژ شد! 🎉', 'success');
          document.getElementById('quickRenewCodeInput').value = '';
          await loadUserDashboard();
        } else {
          showToast(data.error || 'کد وارد شده نامعتبر است', 'error');
        }
      } catch (e) {
        showToast('خطای ارتباط با سرور', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>🚀 خروج از تعلیق و شارژ</span>';
      }
    };

    // ==========================================
    // 👤 احراز هویت و ورود/ثبت‌نام کاربران
    // ==========================================
    window.switchUserTab = function(tab) {
      var btnLog = document.getElementById('userTabLogin');
      var btnReg = document.getElementById('userTabRegister');

      var boxLog = document.getElementById('loginFormBox');
      var boxReg = document.getElementById('registerFormBox');

      btnLog.classList.toggle('active', tab === 'login');
      btnReg.classList.toggle('active', tab === 'register');

      boxLog.classList.toggle('hidden', tab !== 'login');
      boxReg.classList.toggle('hidden', tab !== 'register');
    };

    window.switchTgTab = function(tab) {
      var btnPh = document.getElementById('tabTgPhone');
      var btnSs = document.getElementById('tabTgSess');
      var boxPh = document.getElementById('tgPhoneBox');
      var boxSs = document.getElementById('tgSessBox');

      if (tab === 'phone') {
        btnPh.className = 'segmented-btn active';
        btnSs.className = 'segmented-btn';
        boxPh.classList.remove('hidden');
        boxSs.classList.add('hidden');
      } else {
        btnSs.className = 'segmented-btn active';
        btnPh.className = 'segmented-btn';
        boxSs.classList.remove('hidden');
        boxPh.classList.add('hidden');
      }
    };

    window.setColonChar = function(char, isQuiet) {
      if (!isQuiet) window.isStudioDirty = true;
      document.getElementById('colonInput').value = char;
      document.querySelectorAll('.sep-pill').forEach(function(c) {
        c.classList.toggle('active', c.textContent.trim() === char);
      });
      updateLiveClock();
    };

    window.openSettingsModal = function() { document.getElementById('settingsModal').classList.remove('hidden'); };
    window.closeSettingsModal = function() { document.getElementById('settingsModal').classList.add('hidden'); };

    window.doRedeemExtend = async function() {
      var code = document.getElementById('extendCodeInput').value.trim().toUpperCase();
      if (!code) {
        showToast('کد لایسنس را وارد کنید', 'error');
        return;
      }
      try {
        var res = await fetch('/api/user/redeem', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ licenseCode: code })
        });
        var data = await res.json();
        if (data.ok) {
          showToast('اشتراک Arizo Self شما تمدید گردید! 🎉', 'success');
          document.getElementById('extendCodeInput').value = '';
          closeSettingsModal();
          loadUserDashboard();
        } else {
          showToast(data.error || 'کد نامعتبر است', 'error');
        }
      } catch (e) {
        showToast('خطای شبکه', 'error');
      }
    };

    window.doUserRegister = async function() {
      var code = document.getElementById('regLicenseCode').value.trim().toUpperCase();
      var uname = document.getElementById('regUsername').value.trim();
      var pass = document.getElementById('regPassword').value;
      var passConf = document.getElementById('regPasswordConfirm').value;

      if (!uname || uname.length < 3) {
        showToast('نام کاربری باید حداقل ۳ کاراکتر باشد', 'error');
        return;
      }
      if (pass.length < 8) {
        showToast('رمز عبور باید حداقل ۸ کاراکتر باشد', 'error');
        return;
      }
      if (pass !== passConf) {
        showToast('تکرار رمز عبور تطابق ندارد', 'error');
        return;
      }

      var btn = document.getElementById('regBtn');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> ایجاد حساب Arizo...';

      try {
        var res = await fetch('/api/user/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: uname, password: pass, licenseCode: code })
        });
        var data = await res.json();
        if (data.ok && data.token) {
          setAuthToken(data.token);
          showToast('حساب Arizo Self با موفقیت فعال شد ✨', 'success');
          await loadUserDashboard();
        } else {
          showToast(data.error || 'خطا در ثبت‌نام', 'error');
        }
      } catch (e) {
        showToast('خطای ارتباط با سرور', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>ثبت‌نام و فعال‌سازی اشتراک Arizo Self</span>';
      }
    };

    window.doUserLogin = async function() {
      var uname = document.getElementById('loginUsername').value.trim();
      var pass = document.getElementById('loginPassword').value;

      if (!uname || !pass) {
        showToast('نام کاربری و رمز عبور را وارد کنید', 'error');
        return;
      }

      var btn = document.getElementById('loginBtn');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> ورود...';

      try {
        var res = await fetch('/api/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: uname, password: pass })
        });
        var data = await res.json();
        if (data.ok && data.token) {
          setAuthToken(data.token);
          window.currentUserIsAdmin = !!data.isAdmin;
          showToast('خوش آمدید! ورود موفقیت‌آمیز بود ✅', 'success');
          await loadUserDashboard();
        } else {
          showToast(data.error || 'نام کاربری یا رمز نادرست است', 'error');
        }
      } catch (e) {
        showToast('خطای شبکه', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>ورود به داشبورد Arizo Self</span>';
      }
    };

    window.doChangePassword = async function() {
      var oldPass = document.getElementById('oldPassInput').value;
      var newPass = document.getElementById('newPassInput').value;
      if (!oldPass || !newPass) {
        showToast('لطفاً هر دو رمز را وارد کنید', 'error');
        return;
      }
      if (newPass.length < 8) {
        showToast('رمز جدید باید حداقل ۸ کاراکتر باشد', 'error');
        return;
      }

      try {
        var res = await fetch('/api/user/change-password', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ oldPassword: oldPass, newPassword: newPass })
        });
        var data = await res.json();
        if (data.ok) {
          showToast('رمز عبور تغییر یافت 🔒', 'success');
          document.getElementById('oldPassInput').value = '';
          document.getElementById('newPassInput').value = '';
          closeSettingsModal();
        } else {
          showToast(data.error || 'خطا در تغییر رمز', 'error');
        }
      } catch (e) {
        showToast('خطای شبکه', 'error');
      }
    };

    window.toggleBotState = async function() {
      var btn = document.getElementById('toggleBotBtn');
      btn.disabled = true;
      try {
        var res = await fetch('/api/user/toggle-bot', { method: 'POST', headers: authHeaders() });
        var data = await res.json();
        if (data.ok) {
          isBotRunning = data.enabled;
          updateBotStatusUI(isBotRunning);
          showToast(isBotRunning ? 'سلف‌بات فعال شد 🟢' : 'سلف‌بات متوقف شد ⏸️', 'info');
        }
      } catch (e) {
        showToast('خطای شبکه', 'error');
      } finally {
        btn.disabled = false;
      }
    };

    function updateBotStatusUI(enabled, hasError) {
      var badge = document.getElementById('botStatusBadge');
      var toggleText = document.getElementById('toggleBotText');
      if (hasError) {
        badge.textContent = '⚠️ نیازمند اتصال مجدد تلگرام';
        badge.style.color = '#fb7185';
        toggleText.textContent = '▶️ تلاش مجدد سلف‌بات';
      } else if (enabled) {
        badge.textContent = '🟢 فعال و در حال اجرای خودکار';
        badge.style.color = '#4ade80';
        toggleText.textContent = '⏸️ توقف موقت سلف‌بات';
      } else {
        badge.textContent = '⏸️ متوقف‌شده (Pause)';
        badge.style.color = '#fbbf24';
        toggleText.textContent = '▶️ فعال‌سازی مجدد سلف‌بات';
      }
    }

    window.showTelegramConnect = function() {
      document.getElementById('dashboardSection').classList.add('hidden');
      document.getElementById('telegramConnectSection').classList.remove('hidden');
      var btnCancel = document.getElementById('btnCancelTgConnect');
      if (btnCancel) btnCancel.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.cancelTelegramConnect = function() {
      document.getElementById('telegramConnectSection').classList.add('hidden');
      document.getElementById('dashboardSection').classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.doDeleteAccount = async function() {
      var pass = prompt('جهت تأیید حذف دائم حساب Arizo، رمز عبور خود را وارد کنید:');
      if (!pass) return;

      try {
        var res = await fetch('/api/user/delete-account', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ password: pass })
        });
        var data = await res.json();
        if (data.ok) {
          alert('حساب شما پاکسازی شد.');
          setAuthToken('');
          location.reload();
        } else {
          showToast(data.error || 'خطا در حذف حساب', 'error');
        }
      } catch (e) {}
    };

    window.logoutUser = async function() {
      if (!confirm('آیا مایل به خروج از حساب کاربری Arizo هستید؟')) return;
      try { await fetch('/api/user/logout', { method: 'POST', headers: authHeaders() }); } catch (e) {}
      window.currentUserIsAdmin = false;
      var adminNav = document.getElementById('adminPortalNavBtn');
      if (adminNav) adminNav.classList.add('hidden');
      setAuthToken('');
      location.reload();
    };

    // ==========================================
    // 📱 احراز هویت تلگرام
    // ==========================================
    window.doTelegramAuth = async function() {
      var btn = document.getElementById('tgAuthBtn');
      btn.disabled = true;

      try {
        if (tgStep === 'phone') {
          var rawPhone = document.getElementById('tgPhone').value.trim();
          if (!rawPhone) {
            showToast('شماره تلفن را وارد کنید', 'error');
            btn.disabled = false;
            return;
          }
          var cleanPhone = rawPhone.replace(/[^0-9+]/g, '');
          if (cleanPhone.startsWith('09')) cleanPhone = '+98' + cleanPhone.slice(1);
          else if (!cleanPhone.startsWith('+')) cleanPhone = '+' + cleanPhone;

          btn.innerHTML = '<span class="spinner"></span> ارسال کد به ' + cleanPhone + '...';

          var res = await fetch('/api/auth/send-code', {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify({ phone: cleanPhone })
          });
          var data = await res.json();
          if (!res.ok || !data.ok) throw new Error(data.error || 'خطا در ارسال کد');

          document.getElementById('tgCodeGroup').classList.remove('hidden');
          btn.innerHTML = '<span>تأیید کد ارسالی تلگرام</span>';
          tgStep = 'code';
          btn.disabled = false;
          showToast('کد ۵ رقمی به تلگرام ارسال گردید ✅', 'success');

        } else if (tgStep === 'code') {
          var codeVal = document.getElementById('tgCode').value.trim().replace(/[^0-9a-zA-Z]/g, '');
          if (!codeVal) {
            showToast('کد را وارد کنید', 'error');
            btn.disabled = false;
            return;
          }

          btn.innerHTML = '<span class="spinner"></span> بررسی کد...';
          var res = await fetch('/api/auth/verify-code', {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify({
              code: codeVal,
              digits: selectedDigits,
              colon: document.getElementById('colonInput').value || ':'
            })
          });
          var data = await res.json();
          if (!res.ok || !data.ok) throw new Error(data.error || 'کد نامعتبر است');

          if (data.needs2FA) {
            document.getElementById('tgPassGroup').classList.remove('hidden');
            btn.innerHTML = '<span>ورود با رمز دوعاملی</span>';
            tgStep = 'pass';
            btn.disabled = false;
            showToast('اکانت دارای تأیید دومرحله‌ای است 🔒', 'info');
          } else {
            showToast('تلگرام با موفقیت متصل شد! 🎉', 'success');
            await loadUserDashboard();
          }

        } else if (tgStep === 'pass') {
          var passVal = document.getElementById('tgPass').value.trim();
          if (!passVal) {
            showToast('رمز دوعاملی را وارد کنید', 'error');
            btn.disabled = false;
            return;
          }

          btn.innerHTML = '<span class="spinner"></span> اعتبارسنجی 2FA...';
          var res = await fetch('/api/auth/verify-password', {
            method: 'POST',
            headers: authHeaders(),
            body: JSON.stringify({
              password: passVal,
              digits: selectedDigits,
              colon: document.getElementById('colonInput').value || ':'
            })
          });
          var data = await res.json();
          if (!res.ok || !data.ok) throw new Error(data.error || 'رمز اشتباه است');

          showToast('تلگرام متصل و سشن امن شد! 🎉', 'success');
          await loadUserDashboard();
        }
      } catch (e) {
        showToast('خطا: ' + e.message, 'error');
        btn.disabled = false;
        btn.innerHTML = '<span>تلاش مجدد</span>';
      }
    };

    window.doConnectDirectSession = async function() {
      var sessVal = document.getElementById('tgSessionInput').value.trim();
      if (!sessVal) {
        showToast('سشن را وارد کنید', 'error');
        return;
      }
      var btn = document.getElementById('tgSessBtn');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> اتصال به سشن...';

      try {
        var res = await fetch('/api/connect', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({
            session: sessVal,
            digits: selectedDigits,
            colon: document.getElementById('colonInput').value || ':'
          })
        });
        var data = await res.json();
        if (data.ok) {
          showToast('سشن مستقیم متصل شد! 🚀', 'success');
          await loadUserDashboard();
        } else {
          showToast(data.error || 'خطا در ثبت سشن', 'error');
        }
      } catch (e) {
        showToast('خطای شبکه', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>اتصال و رمزنگاری فوری با AES-256</span>';
      }
    };

    // ==========================================
    // 🎨 راه‌اندازی گرید پریست‌های فونت
    // ==========================================
    var grid = document.getElementById('presetBtns');
    for (var key in presets) {
      (function(k) {
        var val = presets[k];
        var card = document.createElement('div');
        card.className = 'preset-card' + (k === 'bold' ? ' active' : '');
        card.id = 'preset-' + k;
        var p1 = val.digits[1] || '1';
        var p2 = val.digits[2] || '2';
        var p4 = val.digits[4] || '4';
        var p5 = val.digits[5] || '5';
        card.innerHTML = '<div class="preset-name">' + val.name + '</div><div class="preset-digits">' + p1 + p2 + ':' + p4 + p5 + '</div>';
        card.onclick = function() { selectPreset(k); };
        grid.appendChild(card);
      })(key);
    }

    function selectPreset(key, isQuiet) {
      if (!isQuiet) window.isStudioDirty = true;
      currentPresetKey = key;
      selectedDigits = presets[key].digits;
      var fontBadge = document.getElementById('userFontBadge');
      if (fontBadge) fontBadge.textContent = 'فونت: ' + presets[key].name;
      document.querySelectorAll('.preset-card').forEach(function(c) { c.classList.remove('active'); });
      var activeCard = document.getElementById('preset-' + key);
      if (activeCard) activeCard.classList.add('active');
      document.getElementById('customDigits').value = '';
      updateLiveClock();
    }

    // ==========================================
    // 🎨 کنترل تب‌های استودیوی شخصی‌سازی و ناوبری هوشمند
    // ==========================================
    var STUDIO_TABS = [
      { id: 'clock', btn: 'studioTabClock', pane: 'studioPaneClock', title: 'ساعت و استایل', icon: '🕒' },
      { id: 'bio', btn: 'studioTabBio', pane: 'studioPaneBio', title: 'بیوگرافی زنده', icon: '📝' },
      { id: 'afk', btn: 'studioTabAfk', pane: 'studioPaneAfk', title: 'منشی خودکار', icon: '🤖' },
      { id: 'mute', btn: 'studioTabMute', pane: 'studioPaneMute', title: 'فیلتر سکوت', icon: '🔇' },
      { id: 'antittl', btn: 'studioTabAntittl', pane: 'studioPaneAntittl', title: 'ضد خودتخریبی', icon: '📸' },
      { id: 'automation', btn: 'studioTabAutomation', pane: 'studioPaneAutomation', title: 'حالت خواب', icon: '🌙' },
      { id: 'bot', btn: 'studioTabBot', pane: 'studioPaneBot', title: 'ربات و لاگر', icon: '⚡' }
    ];

    var currentStudioTabIndex = 0;

    window.initStudioNavDots = function() {
      var container = document.getElementById('studioNavDots');
      if (!container) return;
      container.innerHTML = '';
      STUDIO_TABS.forEach(function(item, idx) {
        var dot = document.createElement('div');
        dot.className = 'studio-nav-dot' + (idx === currentStudioTabIndex ? ' active' : '');
        dot.title = item.icon + ' ' + item.title;
        dot.onclick = function() {
          window.switchStudioTab(item.id, false);
        };
        container.appendChild(dot);
      });
    };

    window.switchStudioTab = function(tab, shouldScroll) {
      var index = STUDIO_TABS.findIndex(function(t) { return t.id === tab; });
      if (index === -1) index = 0;
      currentStudioTabIndex = index;

      STUDIO_TABS.forEach(function(item, idx) {
        var btn = document.getElementById(item.btn);
        var pane = document.getElementById(item.pane);
        var isActive = idx === index;
        if (btn) {
          btn.classList.toggle('active', isActive);
          if (isActive) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }
        if (pane) pane.classList.toggle('hidden', !isActive);
      });

      // به‌روزرسانی نوار پیمایش پایینی
      var prevBtn = document.getElementById('studioNavPrev');
      var nextBtn = document.getElementById('studioNavNext');
      var prevTitle = document.getElementById('studioNavPrevTitle');
      var nextTitle = document.getElementById('studioNavNextTitle');
      var currentTitle = document.getElementById('studioNavCurrentTitle');
      var currentStep = document.getElementById('studioNavCurrentStep');

      if (currentTitle) currentTitle.textContent = STUDIO_TABS[index].icon + ' ' + STUDIO_TABS[index].title;
      if (currentStep) currentStep.textContent = String(index + 1);

      if (prevBtn && prevTitle) {
        if (index > 0) {
          prevBtn.disabled = false;
          prevTitle.textContent = STUDIO_TABS[index - 1].title;
        } else {
          prevBtn.disabled = true;
          prevTitle.textContent = 'ابتدای استودیو';
        }
      }

      if (nextBtn && nextTitle) {
        if (index < STUDIO_TABS.length - 1) {
          nextBtn.disabled = false;
          nextTitle.textContent = STUDIO_TABS[index + 1].title;
        } else {
          nextBtn.disabled = true;
          nextTitle.textContent = 'پایان استودیو';
        }
      }

      // هایلایت دات‌ها
      var dots = document.querySelectorAll('.studio-nav-dot');
      if (dots && dots.length > 0) {
        dots.forEach(function(dot, idx) {
          dot.classList.toggle('active', idx === index);
        });
      } else {
        window.initStudioNavDots();
      }

      if (shouldScroll) {
        var bar = document.querySelector('.studio-tab-bar');
        if (bar) {
          bar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    };

    window.navigateStudioStep = function(step) {
      var newIndex = currentStudioTabIndex + step;
      if (newIndex >= 0 && newIndex < STUDIO_TABS.length) {
        window.switchStudioTab(STUDIO_TABS[newIndex].id, false);
      }
    };

    window.insertBioVar = function(tag) {
      var input = document.getElementById('bioTemplateInput');
      if (!input) return;
      var val = input.value;
      var start = input.selectionStart !== undefined ? input.selectionStart : val.length;
      var end = input.selectionEnd !== undefined ? input.selectionEnd : val.length;
      input.value = val.substring(0, start) + tag + val.substring(end);
      input.focus();
      input.selectionStart = input.selectionEnd = start + tag.length;
      updateLiveClock();
    };

    window.applyBioTemplate = function(template) {
      var input = document.getElementById('bioTemplateInput');
      var toggle = document.getElementById('bioEnabledToggle');
      if (input) input.value = template;
      if (toggle) toggle.checked = true;
      updateLiveClock();
      showToast('قالب بیوگرافی انتخاب و اعمال شد ✨', 'success');
    };

    function isClientSleepTime(startHour, endHour, currentHour) {
      startHour = parseInt(startHour, 10);
      endHour = parseInt(endHour, 10);
      currentHour = parseInt(currentHour, 10);
      if (isNaN(startHour) || isNaN(endHour) || isNaN(currentHour)) return false;
      if (startHour === endHour) return false;
      if (startHour < endHour) {
        return currentHour >= startHour && currentHour < endHour;
      } else {
        return currentHour >= startHour || currentHour < endHour;
      }
    }

    var tehranPersianDateFmt = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      timeZone: 'Asia/Tehran', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    var tehranPersianShortDateFmt = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      timeZone: 'Asia/Tehran', day: 'numeric', month: 'long'
    });
    var tehranPersianWeekdayFmt = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      timeZone: 'Asia/Tehran', weekday: 'long'
    });

    function updateLiveClock() {
      try {
        var now = Date.now();
        var tehranDate = new Date(now + 12600000);
        var rawH = tehranDate.getUTCHours();
        var rawM = tehranDate.getUTCMinutes();
        var ss = String(tehranDate.getUTCSeconds()).padStart(2, '0');

        var is12h = document.getElementById('toggle12h') ? document.getElementById('toggle12h').checked : false;
        var prefix = (document.getElementById('prefixInput') && document.getElementById('prefixInput').value) || '';
        var suffix = (document.getElementById('suffixInput') && document.getElementById('suffixInput').value) || '';
        var colon = (document.getElementById('colonInput') && document.getElementById('colonInput').value) || ':';
        var sleepEnabled = document.getElementById('sleepEnabledToggle') ? document.getElementById('sleepEnabledToggle').checked : false;
        var sleepStart = document.getElementById('sleepStartSelect') ? document.getElementById('sleepStartSelect').value : 23;
        var sleepEnd = document.getElementById('sleepEndSelect') ? document.getElementById('sleepEndSelect').value : 7;
        var sleepText = (document.getElementById('sleepTextInput') && document.getElementById('sleepTextInput').value) || '😴 Sleep';

        var isSleeping = sleepEnabled && isClientSleepTime(sleepStart, sleepEnd, rawH);

        var displayH = rawH;
        var ampm = '';
        if (is12h) {
          var isPM = rawH >= 12;
          displayH = rawH % 12;
          if (displayH === 0) displayH = 12;
          ampm = isPM ? ' ᴾᴹ' : ' ᴬᴹ';
        }

        var hhStr = String(displayH).padStart(2, '0');
        var mmStr = String(rawM).padStart(2, '0');

        var d = selectedDigits || ['0','1','2','3','4','5','6','7','8','9'];
        var stylH = hhStr.split('').map(function(x) { return d[+x] || x; }).join('');
        var stylM = mmStr.split('').map(function(x) { return d[+x] || x; }).join('');
        var stylS = ss.split('').map(function(x) { return d[+x] || x; }).join('');

        var clockOnly = stylH + colon + stylM + ampm;
        var fullLastName = isSleeping ? sleepText : (prefix + clockOnly + suffix);

        var previewEl = document.getElementById('clockPreview');
        if (previewEl) previewEl.textContent = clockOnly;

        var secEl = document.getElementById('secondsPulse');
        if (secEl) secEl.textContent = ':' + stylS;

        var mockupLastNameEl = document.getElementById('mockupLastName');
        if (mockupLastNameEl) {
          mockupLastNameEl.textContent = fullLastName;
          mockupLastNameEl.style.color = isSleeping ? '#fbbf24' : 'inherit';
        }

        var dateEl = document.getElementById('persianDateText');
        if (dateEl) {
          dateEl.textContent = tehranPersianDateFmt.format(new Date(now));
        }

        var bioEnabled = document.getElementById('bioEnabledToggle') ? document.getElementById('bioEnabledToggle').checked : false;
        var bioTemplate = (document.getElementById('bioTemplateInput') && document.getElementById('bioTemplateInput').value) || '';
        var mockupBioEl = document.getElementById('mockupBio');
        if (mockupBioEl) {
          if (bioEnabled && bioTemplate) {
            var shortDate = tehranPersianShortDateFmt.format(new Date(now));
            var weekday = tehranPersianWeekdayFmt.format(new Date(now));
            var renderedBio = bioTemplate
              .replace(/{time}/g, clockOnly)
              .replace(/{clock}/g, clockOnly)
              .replace(/{date}/g, shortDate)
              .replace(/{day}/g, weekday);
            if (renderedBio.length > 70) renderedBio = renderedBio.slice(0, 70);
            mockupBioEl.textContent = renderedBio;
            mockupBioEl.style.color = 'var(--text-main)';
          } else {
            mockupBioEl.textContent = 'بیوگرافی زنده غیرفعال است (ساده / پیش‌فرض)';
            mockupBioEl.style.color = 'var(--text-muted)';
          }
        }
      } catch (err) {}
    }
    setInterval(updateLiveClock, 1000);
    updateLiveClock();

    document.getElementById('customDigits').addEventListener('input', function(e) {
      var chars = Array.from(e.target.value.trim());
      if (chars.length >= 10) {
        selectedDigits = chars.slice(0, 10);
        document.querySelectorAll('.preset-card').forEach(function(c) { c.classList.remove('active'); });
        updateLiveClock();
      }
    });

    document.getElementById('colonInput').addEventListener('input', function(e) {
      var val = e.target.value;
      document.querySelectorAll('.sep-pill').forEach(function(c) {
        c.classList.toggle('active', c.textContent.trim() === val);
      });
      updateLiveClock();
    });

    window.saveFonts = async function() {
      var btn = document.getElementById('saveBtn');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> ذخیره درحال انجام...';

      var rawMutedUsers = (document.getElementById('mutedUsersInput') && document.getElementById('mutedUsersInput').value) || '';
      var hasMutedUsers = rawMutedUsers.trim().length > 0;
      var muteToggleChecked = document.getElementById('muteEnabledToggle') ? document.getElementById('muteEnabledToggle').checked : false;

      var payload = {
        digits: selectedDigits,
          colon: (document.getElementById('colonInput') && document.getElementById('colonInput').value) || ':',
          prefix: (document.getElementById('prefixInput') && document.getElementById('prefixInput').value) || '',
          suffix: (document.getElementById('suffixInput') && document.getElementById('suffixInput').value) || '',
          is12h: document.getElementById('toggle12h') ? document.getElementById('toggle12h').checked : false,
          bioEnabled: document.getElementById('bioEnabledToggle') ? document.getElementById('bioEnabledToggle').checked : false,
          bioTemplate: (document.getElementById('bioTemplateInput') && document.getElementById('bioTemplateInput').value) || '',
          sleepEnabled: document.getElementById('sleepEnabledToggle') ? document.getElementById('sleepEnabledToggle').checked : false,
          sleepStart: document.getElementById('sleepStartSelect') ? parseInt(document.getElementById('sleepStartSelect').value, 10) : 23,
          sleepEnd: document.getElementById('sleepEndSelect') ? parseInt(document.getElementById('sleepEndSelect').value, 10) : 7,
          sleepText: (document.getElementById('sleepTextInput') && document.getElementById('sleepTextInput').value) || '😴 Sleep',
          afkEnabled: document.getElementById('afkEnabledToggle') ? document.getElementById('afkEnabledToggle').checked : false,
          afkMessage: (document.getElementById('afkMessageInput') && document.getElementById('afkMessageInput').value) || '',
          afkCooldown: document.getElementById('afkCooldownSelect') ? parseInt(document.getElementById('afkCooldownSelect').value, 10) : 10,
          muteEnabled: hasMutedUsers ? true : muteToggleChecked,
          mutedUsers: rawMutedUsers,
          antiTtlEnabled: document.getElementById('antiTtlEnabledToggle') ? document.getElementById('antiTtlEnabledToggle').checked : false,
          bot: {
            token: (document.getElementById('botTokenInput') && document.getElementById('botTokenInput').value.trim()) || '',
            antiDeleteEnabled: document.getElementById('botAntiDeleteToggle') ? document.getElementById('botAntiDeleteToggle').checked : true,
            antiEditEnabled: document.getElementById('botAntiEditToggle') ? document.getElementById('botAntiEditToggle').checked : true,
            forwardTtlToBot: document.getElementById('botForwardTtlToggle') ? document.getElementById('botForwardTtlToggle').checked : true
          }
        };

      try {
        var res = await fetch('/api/fonts', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          window.isStudioDirty = false;
          showToast('تنظیمات استودیو Arizo ذخیره و آنی اعمال شد ✨', 'success');
        } else {
          var errData = await res.json().catch(function() { return {}; });
          showToast(errData.error || 'خطا در ذخیره‌سازی', 'error');
        }
      } catch (err) {
        showToast('خطای شبکه', 'error');
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<span>💾 ذخیره و اعمال تغییرات استودیو</span>';
        }
      }
    };

    window.doVerifyBotToken = async function() {
      var inp = document.getElementById('botTokenInput');
      var token = inp ? inp.value.trim() : '';
      if (!token) {
        showToast('لطفاً توکن ربات دریافتی از BotFather@ را وارد کنید', 'error');
        return;
      }

      var btn = document.getElementById('btnVerifyBot');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> بررسی و اتصال به تلگرام...';

      try {
        var res = await fetch('/api/telegram/verify-bot-token', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ token: token })
        });
        var data = await res.json();
        if (data.ok && data.bot) {
          showToast('ربات @' + data.bot.username + ' با موفقیت متصل شد! 🎉', 'success');
          await loadUserDashboard();
        } else {
          showToast(data.error || 'خطا در اعتبارسنجی توکن', 'error');
        }
      } catch (err) {
        showToast('خطای شبکه', 'error');
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<span>⚡ اتصال و فعال‌سازی وب‌هوک</span>';
        }
      }
    };

    window.doDisconnectBotToken = async function() {
      if (!confirm('آیا از قطع اتصال ربات تلگرام اطمینان دارید؟ تمام وب‌هوک‌ها و دسترسی‌های مینی‌اپ لغو شده و حافظه کلادفلر فوراً آزاد می‌گردد.')) {
        return;
      }

      var btn = document.getElementById('btnDisconnectBot');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span> درحال قطع اتصال...';
      }

      try {
        var res = await fetch('/api/telegram/disconnect-bot', {
          method: 'POST',
          headers: authHeaders()
        });
        var data = await res.json();
        if (data.ok) {
          showToast('اتصال ربات با موفقیت قطع شد و حافظه کلادفلر پاکسازی گردید ✨', 'success');
          var card = document.getElementById('botInfoCard');
          if (card) card.classList.add('hidden');
          var tokenInp = document.getElementById('botTokenInput');
          if (tokenInp) tokenInp.value = '';
          await loadUserDashboard();
        } else {
          showToast(data.error || 'خطا در قطع اتصال ربات', 'error');
        }
      } catch (err) {
        showToast('خطای شبکه در ارتباط با سرور', 'error');
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<span>🔌 قطع اتصال ربات</span>';
        }
      }
    };

    // ذخیره آنی و خودکار تغییر وضعیت سوئیچ‌های استودیو (نجات مدیا، منشی، سکوت، بیوگرافی، خواب و ربات)
    ['antiTtlEnabledToggle', 'afkEnabledToggle', 'muteEnabledToggle', 'bioEnabledToggle', 'sleepEnabledToggle', 'toggle12h', 'botAntiDeleteToggle', 'botAntiEditToggle', 'botForwardTtlToggle'].forEach(function(toggleId) {
      var el = document.getElementById(toggleId);
      if (el) {
        el.addEventListener('change', function() {
          window.saveFonts();
        });
      }
    });

    // فعال‌سازی و ذخیره خودکار هنگام تایپ یا تغییر لیست کاربران سکوت
    var mutedInput = document.getElementById('mutedUsersInput');
    if (mutedInput) {
      mutedInput.addEventListener('input', function() {
        window.isStudioDirty = true;
        var toggle = document.getElementById('muteEnabledToggle');
        if (toggle && mutedInput.value.trim().length > 0) {
          toggle.checked = true;
        }
      });
      mutedInput.addEventListener('change', function() {
        window.saveFonts();
      });
      mutedInput.addEventListener('blur', function() {
        if (window.isStudioDirty) {
          window.saveFonts();
        }
      });
    }

    window.triggerImmediateSync = async function() {
      var btn = document.getElementById('syncBtn');
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> همگام‌سازی فوری...';

      try {
        var res = await fetch('/api/sync', { method: 'POST', headers: authHeaders() });
        var data = await res.json();
        if (data.ok && !data.status?.error) {
          showToast('ساعت تلگرام با سرعت اتمی آپدیت شد! 🚀', 'success');
          loadUserDashboard();
        } else {
          showToast('خطا: ' + (data.status?.error || 'ناشناخته'), 'error');
        }
      } catch (err) {
        showToast('خطای شبکه', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>⚡ تست به‌روزرسانی آنی</span>';
      }
    };

    window.doDisconnectTelegram = async function() {
      if (!confirm('آیا از قطع اتصال سلف‌بات اطمینان دارید؟')) return;
      try {
        await fetch('/api/disconnect', { method: 'POST', headers: authHeaders() });
        showToast('اتصال تلگرام قطع گردید', 'info');
        closeSettingsModal();
        loadUserDashboard();
      } catch (e) {}
    };

    // ==========================================
    // 🔄 بارگذاری وضعیت داشبورد
    // ==========================================
    async function loadUserDashboard() {
      var token = getAuthToken();
      var adminNav = document.getElementById('adminPortalNavBtn');
      if (!token) {
        window.currentUserIsAdmin = false;
        if (adminNav) adminNav.classList.add('hidden');
        document.getElementById('userHeaderBadge').classList.add('hidden');
        document.getElementById('userAuthSection').classList.remove('hidden');
        document.getElementById('clockHeroCard').classList.add('hidden');
        document.getElementById('suspensionAlertBox')?.classList.add('hidden');
        document.getElementById('telegramConnectSection').classList.add('hidden');
        document.getElementById('dashboardSection').classList.add('hidden');
        return;
      }

      try {
        var res = await fetch('/api/user/me', { headers: authHeaders() });
        var data = await res.json();

        if (!data.ok) {
          window.currentUserIsAdmin = false;
          if (adminNav) adminNav.classList.add('hidden');
          setAuthToken('');
          loadUserDashboard();
          return;
        }

        window.currentUserIsAdmin = !!data.isAdmin;
        if (adminNav) {
          if (data.isAdmin) {
            adminNav.classList.remove('hidden');
          } else {
            adminNav.classList.add('hidden');
          }
        }

        var usernameDisplay = document.getElementById('usernameDisplay');
        if (data.isAdmin) {
          usernameDisplay.innerHTML = data.username + ' <span style="font-size:0.75rem; background:linear-gradient(135deg,#f59e0b,#d97706); color:#fff; padding:2px 8px; border-radius:999px; margin-right:4px;">👑 مدیر</span>';
        } else {
          usernameDisplay.textContent = data.username;
        }
        document.getElementById('userHeaderBadge').classList.remove('hidden');
        document.getElementById('userAuthSection').classList.add('hidden');
        document.getElementById('clockHeroCard').classList.remove('hidden');

        var suspBox = document.getElementById('suspensionAlertBox');
        var planBadge = document.getElementById('userPlanBadge');

        // هوشمندسازی بررسی تعلیق خودکار
        if (data.isSuspended || data.isExpired) {
          if (suspBox) suspBox.classList.remove('hidden');
          planBadge.textContent = 'اشتراک: معلق و منقضی 🔴';
          planBadge.style.color = '#fb7185';
          planBadge.style.borderColor = 'rgba(251, 113, 133, 0.4)';

          // مخفی‌سازی یا غیرفعال‌سازی گزینه‌های اجرایی هنگام تعلیق
          document.getElementById('telegramConnectSection').classList.add('hidden');
          document.getElementById('dashboardSection').classList.remove('hidden');

          var badge = document.getElementById('botStatusBadge');
          badge.textContent = '⏸️ به حالت تعلیق درآمده (منقضی)';
          badge.style.color = '#fb7185';

          var toggleText = document.getElementById('toggleBotText');
          toggleText.textContent = '🔒 سلف‌بات معلق است';
          document.getElementById('toggleBotBtn').disabled = true;
          document.getElementById('syncBtn').disabled = true;

          var lastUpEl = document.getElementById('lastUpdateTime');
          lastUpEl.textContent = 'تعلیق به علت پایان مدت زمان اشتراک';
          lastUpEl.style.color = '#fb7185';
          updateLiveClock();
          return;
        } else {
          if (suspBox) suspBox.classList.add('hidden');
          document.getElementById('toggleBotBtn').disabled = false;
          document.getElementById('syncBtn').disabled = false;

          var remText = data.isLifetime ? 'دائمی ♾️' : (data.remainingDays + ' روز اعتبار باقی‌مانده');
          planBadge.textContent = 'اشتراک: ' + (data.planName || 'استاندارد') + ' (' + remText + ')';
          planBadge.style.color = '#4ade80';
          planBadge.style.borderColor = 'rgba(74, 222, 128, 0.3)';
        }

        if (data.hasTelegram) {
          document.getElementById('telegramConnectSection').classList.add('hidden');
          document.getElementById('dashboardSection').classList.remove('hidden');

          var hasError = !!data.status?.error;
          isBotRunning = data.enabled !== false;
          updateBotStatusUI(isBotRunning, hasError);

          var tgAlert = document.getElementById('tgAlertBox');
          var tgAlertMsg = document.getElementById('tgAlertMsg');
          if (hasError) {
            if (tgAlert) tgAlert.classList.remove('hidden');
            if (tgAlertMsg) tgAlertMsg.textContent = data.status.error;
          } else {
            if (tgAlert) tgAlert.classList.add('hidden');
          }

          if (!window.isStudioDirty) {
            if (data.digits && Array.isArray(data.digits)) {
              selectedDigits = data.digits;
              for (var k in presets) {
                if (presets[k].digits.join('') === data.digits.join('')) {
                  selectPreset(k, true);
                  break;
                }
              }
            }
            if (data.colon) {
              setColonChar(data.colon, true);
            }

            // 🕒 بارگذاری تنظیمات ساعت استودیو
            setSafeValue('prefixInput', data.prefix || '');
            setSafeValue('suffixInput', data.suffix || '');
            setSafeChecked('toggle12h', !!data.is12h);

            // 📝 بارگذاری تنظیمات بیوگرافی هوشمند
            setSafeChecked('bioEnabledToggle', !!data.bioEnabled);
            setSafeValue('bioTemplateInput', data.bioTemplate || '');

            // 🌙 بارگذاری تنظیمات حالت خواب و اتوماسیون
            setSafeChecked('sleepEnabledToggle', !!data.sleepEnabled);
            if (data.sleepStart !== undefined) setSafeValue('sleepStartSelect', String(data.sleepStart));
            if (data.sleepEnd !== undefined) setSafeValue('sleepEndSelect', String(data.sleepEnd));
            setSafeValue('sleepTextInput', data.sleepText || '😴 Sleep');

            // 🤖 بارگذاری منشی خودکار پیوی (AFK)
            setSafeChecked('afkEnabledToggle', !!data.afkEnabled);
            setSafeValue('afkMessageInput', data.afkMessage || '');
            if (data.afkCooldown !== undefined) setSafeValue('afkCooldownSelect', String(data.afkCooldown));

            // 🔇 بارگذاری سکوت و حذف پیام (Mute)
            var hasSavedMuted = Array.isArray(data.mutedUsers) ? (data.mutedUsers.length > 0) : Boolean(data.mutedUsers && data.mutedUsers.trim());
            setSafeChecked('muteEnabledToggle', !!data.muteEnabled || hasSavedMuted);
            setSafeValue('mutedUsersInput', Array.isArray(data.mutedUsers) ? data.mutedUsers.join(', ') : (data.mutedUsers || ''));

            // 📸 بارگذاری ضد خودتخریبی مدیا (Anti-TTL)
            setSafeChecked('antiTtlEnabledToggle', !!data.antiTtlEnabled);

            // 🤖 بارگذاری ربات تلگرام اختصاصی و تنظیمات لاگر
            if (data.bot) {
              setSafeValue('botTokenInput', data.bot.token || '');
              setSafeChecked('botAntiDeleteToggle', data.bot.antiDeleteEnabled !== false);
              setSafeChecked('botAntiEditToggle', data.bot.antiEditEnabled !== false);
              setSafeChecked('botForwardTtlToggle', data.bot.forwardTtlToBot !== false);

              var card = document.getElementById('botInfoCard');
              if (card && data.bot.token) {
                card.classList.remove('hidden');
                var nameEl = document.getElementById('botNameDisplay');
                if (nameEl) nameEl.textContent = data.bot.name || (data.bot.username ? ('@' + data.bot.username) : 'ربات تلگرام');
                var userLink = document.getElementById('botUsernameLink');
                var directBtn = document.getElementById('botDirectBtn');
                var tgLink = data.bot.username ? ('https://t.me/' + data.bot.username) : '#';
                if (userLink) {
                  userLink.textContent = data.bot.username ? ('@' + data.bot.username) : 'ربات متصل';
                  userLink.href = tgLink;
                }
                if (directBtn) directBtn.href = tgLink;
              }
            }
          }

          // 📱 به‌روزرسانی شبیه‌ساز زنده پروفایل تلگرام
          var mockupFirstEl = document.getElementById('mockupFirstName');
          if (mockupFirstEl) {
            mockupFirstEl.textContent = data.username || 'کاربر Arizo';
          }
          var mockupAvatarEl = document.getElementById('mockupAvatar');
          if (mockupAvatarEl) {
            var initial = (data.username || 'AZ').slice(0, 2).toUpperCase();
            mockupAvatarEl.textContent = initial;
          }

          window.lastServerUpdateTime = data.status?.lastUpdate || 0;
          window.lastServerTimeStr = data.status?.lastTime || '';
          window.lastServerError = data.status?.error || null;
          renderLiveLastUpdate();
        } else {
          document.getElementById('telegramConnectSection').classList.remove('hidden');
          document.getElementById('dashboardSection').classList.add('hidden');
          var btnCancel = document.getElementById('btnCancelTgConnect');
          if (btnCancel) btnCancel.classList.add('hidden');
        }
        updateLiveClock();
      } catch (err) {
        showToast('خطا در بارگذاری حساب', 'error');
      }
    }

    function renderLiveLastUpdate() {
      var lastUpEl = document.getElementById('lastUpdateTime');
      if (!lastUpEl) return;
      if (window.lastServerUpdateTime) {
        var diffSec = Math.max(1, Math.round((Date.now() - window.lastServerUpdateTime) / 1000));
        var timeAgoStr = diffSec < 60 ? (diffSec + ' ثانیه پیش') : (Math.round(diffSec / 60) + ' دقیقه پیش');
        lastUpEl.textContent = (window.lastServerTimeStr || '') + ' (' + timeAgoStr + ')';
        lastUpEl.style.color = window.lastServerError ? 'var(--danger)' : 'var(--accent-green)';
      } else {
        lastUpEl.textContent = 'در انتظار نخستین همگام‌سازی';
        lastUpEl.style.color = 'var(--text-muted)';
      }
    }

    // به‌روزرسانی زنده شمارنده ثانیه‌های آخرین استعلام هر ۵ ثانیه
    setInterval(renderLiveLastUpdate, 5000);

    // هماهنگ‌سازی خودکار وضعیت با سرور هر ۱۵ ثانیه تا زمان آپدیت همیشه بدون رفرش صفحه به‌روز بماند
    setInterval(function() {
      if (getAuthToken() && !document.hidden) {
        loadUserDashboard();
      }
    }, 15000);

    // اتصال هوشمند فیلد سکوت: فعال‌سازی خودکار سوییچ با ورود آیدی یا یوزرنیم
    var mutedInpEl = document.getElementById('mutedUsersInput');
    if (mutedInpEl) {
      mutedInpEl.addEventListener('input', function() {
        if (this.value.trim().length > 0) {
          var toggleEl = document.getElementById('muteEnabledToggle');
          if (toggleEl && !toggleEl.checked) toggleEl.checked = true;
        }
      });
    }

    initStudioNavDots();
    loadUserDashboard();
  </script>
</body>
</html>`;
}
