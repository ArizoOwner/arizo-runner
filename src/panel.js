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
  
  <script>
    // ⚡ Anti-FOUC Theme Initializer
    (function() {
      try {
        var savedTheme = localStorage.getItem('arizo_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
      } catch(e) {}
    })();
  </script>

  <style>
    /* 🎨 متغیرهای جامع تم روز و شب */
    :root, [data-theme="dark"] {
      --bg-dark: #070814;
      --bg-surface: rgba(15, 17, 35, 0.76);
      --bg-surface-elevated: rgba(23, 26, 54, 0.88);
      --bg-input: rgba(0, 0, 0, 0.45);
      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-focus: rgba(168, 85, 247, 0.6);
      --border-glow: rgba(168, 85, 247, 0.35);
      
      --primary: #8b5cf6;
      --primary-hover: #7c3aed;
      --accent: #06b6d4;
      
      --gradient-brand: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%);
      --gradient-accent: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
      --gradient-gold: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
      --gradient-btn: linear-gradient(135deg, #9333ea 0%, #6366f1 100%);
      --gradient-admin: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%);
      --shimmer-glow: rgba(255, 255, 255, 0.3);
      
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      
      --card-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.12);
      --modal-bg: #0d0f22;
      --table-bg: rgba(0, 0, 0, 0.28);
      --segmented-bg: rgba(0, 0, 0, 0.45);
      --badge-bg: rgba(255, 255, 255, 0.05);
      
      --clock-box-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%);
      --clock-digits-grad: linear-gradient(135deg, #ffffff 40%, #c4b5fd 100%);
      --clock-shadow: drop-shadow(0 0 25px rgba(168, 85, 247, 0.35));
      --orb-opacity: 0.35;
      
      --success: #10b981;
      --warning: #f59e0b;
      --danger: #f43f5e;
      
      --radius-xl: 26px;
      --radius-lg: 18px;
      --radius-md: 14px;
      --radius-sm: 10px;
    }

    [data-theme="light"] {
      --bg-dark: #f0f4f9;
      --bg-surface: rgba(255, 255, 255, 0.86);
      --bg-surface-elevated: rgba(255, 255, 255, 0.96);
      --bg-input: rgba(241, 245, 249, 0.95);
      --border-subtle: rgba(99, 102, 241, 0.15);
      --border-focus: rgba(99, 102, 241, 0.65);
      --border-glow: rgba(99, 102, 241, 0.22);
      
      --primary: #6366f1;
      --primary-hover: #4f46e5;
      --accent: #0284c7;
      
      --gradient-brand: linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #2563eb 100%);
      --gradient-accent: linear-gradient(135deg, #0284c7 0%, #6366f1 50%, #9333ea 100%);
      --gradient-gold: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      --gradient-btn: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      --gradient-admin: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      --shimmer-glow: rgba(255, 255, 255, 0.45);
      
      --text-main: #0f172a;
      --text-muted: #475569;
      --text-dim: #94a3b8;
      
      --card-shadow: 0 20px 45px -10px rgba(99, 102, 241, 0.14), 0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9);
      --modal-bg: #ffffff;
      --table-bg: rgba(248, 250, 252, 0.88);
      --segmented-bg: rgba(226, 232, 240, 0.75);
      --badge-bg: rgba(99, 102, 241, 0.06);
      
      --clock-box-bg: linear-gradient(180deg, rgba(238, 242, 255, 0.85) 0%, rgba(248, 250, 252, 0.7) 100%);
      --clock-digits-grad: linear-gradient(135deg, #1e1b4b 30%, #4338ca 100%);
      --clock-shadow: drop-shadow(0 0 20px rgba(99, 102, 241, 0.2));
      --orb-opacity: 0.16;
      
      --success: #059669;
      --warning: #d97706;
      --danger: #e11d48;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    }

    body {
      min-height: 100vh;
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 20px 14px 60px 14px;
      overflow-x: hidden;
      position: relative;
    }

    /* 🌌 بوم الگوریتمی ذرات */
    #algoCanvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }

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
      filter: blur(130px);
      opacity: var(--orb-opacity);
      animation: floatOrb 24s ease-in-out infinite alternate;
      transition: opacity 0.5s ease;
    }
    .orb-1 { width: 550px; height: 550px; background: radial-gradient(circle, #7c3aed 0%, transparent 70%); top: -140px; left: 10%; }
    .orb-2 { width: 480px; height: 480px; background: radial-gradient(circle, #0284c7 0%, transparent 70%); bottom: -100px; right: 8%; animation-duration: 28s; }
    .orb-3 { width: 360px; height: 360px; background: radial-gradient(circle, #db2777 0%, transparent 70%); top: 40%; left: 60%; animation-duration: 32s; }

    @keyframes floatOrb {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(45px, -35px) scale(1.08); }
      100% { transform: translate(-35px, 45px) scale(0.94); }
    }

    .container {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 720px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      animation: pageFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    @keyframes pageFadeIn {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* 💎 کارت‌های شیشه‌ای مدرن */
    .glass-card {
      background: var(--bg-surface);
      backdrop-filter: blur(34px) saturate(210%);
      -webkit-backdrop-filter: blur(34px) saturate(210%);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 26px;
      box-shadow: var(--card-shadow);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-card:hover {
      border-color: rgba(168, 85, 247, 0.28);
    }

    /* 🌟 نوبار تفکیک‌شده */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 20px;
      gap: 12px;
      flex-wrap: wrap;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-gem {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: var(--gradient-brand);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      box-shadow: 0 8px 25px var(--border-glow);
      border: 1px solid rgba(255, 255, 255, 0.3);
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    .brand-title-wrap h1 {
      font-size: 1.25rem;
      font-weight: 900;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .brand-title-gradient {
      background: var(--gradient-accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Outfit', sans-serif;
      font-weight: 900;
    }
    .badge-pro {
      font-size: 0.65rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 6px;
      background: rgba(168, 85, 247, 0.18);
      border: 1px solid rgba(168, 85, 247, 0.4);
      color: #c084fc;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    /* دکمه تم شب و روز */
    .btn-theme-toggle {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 8px 12px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: inherit;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-main);
      user-select: none;
    }
    .btn-theme-toggle:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
    }
    .btn-theme-toggle:active {
      transform: scale(0.94);
    }
    .theme-icon-rotate {
      display: inline-block;
      transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* دکمه‌های ناوبری استاندارد */
    .btn-nav-action {
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid var(--border-subtle);
      border-radius: 11px;
      padding: 8px 13px;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--text-muted);
      cursor: pointer;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      user-select: none;
    }
    .btn-nav-action:hover {
      background: rgba(255, 255, 255, 0.14);
      color: var(--text-main);
      transform: translateY(-2px);
    }
    .btn-nav-action:active {
      transform: scale(0.94);
    }

    /* دکمه متمایز و شیک ورود به پنل ادمین */
    .btn-admin-highlight {
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.4);
      color: #fbbf24;
      border-radius: 12px;
      padding: 8px 14px;
      font-size: 0.82rem;
      font-weight: 800;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.15);
      position: relative;
      overflow: hidden;
    }
    .btn-admin-highlight:hover {
      background: rgba(245, 158, 11, 0.22);
      border-color: #f59e0b;
      color: #fff;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
    }
    .btn-admin-highlight:active {
      transform: scale(0.94);
    }

    /* 🏷️ هدرهای تفکیک بخش‌ها (Section Separators) */
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border-subtle);
      flex-wrap: wrap;
      gap: 10px;
    }
    .section-title {
      font-size: 1.02rem;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .section-tag {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 20px;
      background: var(--badge-bg);
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      white-space: nowrap;
    }

    /* 🕒 باکس ساعت زنده و تقویم خورشیدی تهران */
    .hero-clock-box {
      text-align: center;
      padding: clamp(20px, 4vw, 32px) clamp(12px, 3vw, 18px);
      background: var(--clock-box-bg);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-subtle);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .hero-clock-box::before {
      content: '';
      position: absolute;
      top: 0; left: 15%; right: 15%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.9), transparent);
    }
    .hero-calendar-chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      font-size: clamp(0.74rem, 2.2vw, 0.84rem);
      font-weight: 700;
      color: #93c5fd;
      background: rgba(59, 130, 246, 0.12);
      border: 1px solid rgba(59, 130, 246, 0.28);
      padding: 6px 16px;
      border-radius: 30px;
      margin-bottom: 14px;
      max-width: 100%;
      word-break: normal;
    }
    .clock-display-wrap {
      display: inline-flex;
      align-items: baseline;
      justify-content: center;
      direction: ltr;
      gap: clamp(4px, 1.8vw, 10px);
      min-height: auto;
      width: 100%;
      max-width: 100%;
      margin: 4px 0 10px 0;
    }
    .clock-time-digits {
      font-family: 'JetBrains Mono', 'Outfit', monospace;
      font-size: clamp(2.3rem, 8vw, 3.8rem);
      font-weight: 800;
      letter-spacing: clamp(1px, 1.2vw, 4px);
      background: var(--clock-digits-grad);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      user-select: none;
      filter: var(--clock-shadow);
      line-height: 1.1;
    }
    .clock-seconds-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(0.95rem, 3.2vw, 1.25rem);
      font-weight: 800;
      color: #c084fc;
      background: rgba(168, 85, 247, 0.14);
      border: 1px solid rgba(168, 85, 247, 0.35);
      border-radius: 11px;
      padding: 3px 8px;
      animation: pulseSeconds 1s infinite alternate;
      line-height: 1.2;
    }
    @keyframes pulseSeconds {
      0% { opacity: 0.65; transform: scale(0.96); }
      100% { opacity: 1; transform: scale(1.06); }
    }
    .clock-badges-row {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 16px;
      flex-wrap: wrap;
    }
    .meta-chip {
      font-size: 0.75rem;
      padding: 5px 14px;
      border-radius: 30px;
      background: var(--badge-bg);
      color: var(--text-muted);
      border: 1px solid var(--border-subtle);
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
    }
    .meta-chip.active {
      color: var(--success);
      border-color: rgba(16, 185, 129, 0.35);
      background: rgba(16, 185, 129, 0.1);
    }
    .dot-pulse {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 10px var(--success);
      animation: blinkDot 1.5s infinite ease-in-out;
    }
    @keyframes blinkDot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(0.7); }
    }

    /* 🎨 کنترل تب‌های سگمنتد با تفکیک ۳ تایی */
    .segmented-control {
      display: flex;
      background: var(--segmented-bg);
      border-radius: 16px;
      padding: 5px;
      margin-bottom: 22px;
      border: 1px solid var(--border-subtle);
      gap: 4px;
    }
    .segmented-btn {
      flex: 1;
      padding: 11px 12px;
      border-radius: 12px;
      border: none;
      background: transparent;
      color: var(--text-muted);
      font-size: 0.86rem;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      user-select: none;
      white-space: nowrap;
    }
    .segmented-btn:hover:not(.active) {
      color: var(--text-main);
      background: rgba(255, 255, 255, 0.05);
    }
    .segmented-btn:active {
      transform: scale(0.97);
    }
    .segmented-btn.active {
      background: var(--bg-surface-elevated);
      color: var(--text-main);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22);
      border: 1px solid var(--border-subtle);
    }

    /* تب‌های اختصاصی درون پنل ادمین */
    .admin-subtab-bar {
      display: flex;
      background: var(--table-bg);
      border-radius: 14px;
      padding: 4px;
      margin-bottom: 22px;
      border: 1px solid var(--border-subtle);
      gap: 6px;
      overflow-x: auto;
    }
    .admin-subtab-btn {
      flex: 1;
      min-width: 140px;
      padding: 10px 14px;
      border-radius: 10px;
      border: none;
      background: transparent;
      color: var(--text-muted);
      font-size: 0.84rem;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      user-select: none;
    }
    .admin-subtab-btn:hover:not(.active) {
      background: rgba(255, 255, 255, 0.06);
      color: var(--text-main);
    }
    .admin-subtab-btn.active {
      background: var(--primary);
      color: #fff;
      box-shadow: 0 4px 15px var(--border-glow);
    }

    /* 🏷️ فیلدهای ورودی */
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 7px;
      margin-bottom: 16px;
    }
    .form-label {
      font-size: 0.82rem;
      color: var(--text-muted);
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .input-field {
      width: 100%;
      padding: 12px 16px;
      background: var(--bg-input);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      color: var(--text-main);
      font-size: 16px; /* جلوگیری اساسی از زوم ناخواسته در مرورگرهای موبایل و iOS */
      outline: none;
      font-family: inherit;
      transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
      line-height: 1.5;
    }
    .input-field::placeholder {
      color: var(--text-dim);
      opacity: 0.85;
      font-size: 0.84rem;
      font-family: 'Vazirmatn', sans-serif;
      direction: rtl;
      text-align: right;
    }
    .input-field:focus::placeholder {
      opacity: 0.45;
    }
    .input-field:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px var(--border-glow);
      background: var(--bg-surface-elevated);
    }
    .input-field.mono {
      font-family: 'JetBrains Mono', monospace;
      direction: ltr;
      text-align: left;
    }
    .input-field.mono::placeholder {
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
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* 🔘 استایل و میکرو انیمیشن دکمه‌ها */
    .btn {
      width: 100%;
      padding: 13px 20px;
      border-radius: var(--radius-md);
      font-size: 0.95rem;
      font-weight: 800;
      font-family: inherit;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      user-select: none;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
    }
    .btn::after {
      content: '';
      position: absolute;
      top: -50%; left: -60%;
      width: 25%; height: 200%;
      background: linear-gradient(90deg, transparent, var(--shimmer-glow), transparent);
      transform: rotate(25deg);
      transition: none;
      pointer-events: none;
    }
    .btn:hover:not(:disabled)::after {
      left: 150%;
      transition: all 0.75s ease-in-out;
    }
    .btn:hover:not(:disabled) {
      transform: translateY(-2px);
    }
    .btn:active:not(:disabled) {
      transform: scale(0.96) !important;
    }
    .btn-primary {
      background: var(--gradient-brand);
      color: #fff;
      box-shadow: 0 10px 30px var(--border-glow);
    }
    .btn-primary:hover:not(:disabled) {
      box-shadow: 0 14px 36px var(--border-glow);
    }
    .btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-main);
      border: 1px solid var(--border-subtle);
    }
    .btn-secondary:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.16);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    .btn-gold {
      background: var(--gradient-gold);
      color: #000;
      font-weight: 900;
      box-shadow: 0 10px 25px rgba(245, 158, 11, 0.35);
    }
    .btn-gold:hover:not(:disabled) {
      box-shadow: 0 14px 30px rgba(245, 158, 11, 0.45);
    }
    .btn-warning {
      background: rgba(245, 158, 11, 0.15);
      color: #fbbf24;
      border: 1px solid rgba(245, 158, 11, 0.35);
    }
    .btn-danger {
      background: rgba(244, 63, 94, 0.15);
      color: #fb7185;
      border: 1px solid rgba(244, 63, 94, 0.35);
    }
    .btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
      transform: none !important;
    }

    /* 🎨 استودیوی پریست‌های فونت و استایل ساعت */
    .preset-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
      gap: 12px;
      margin-bottom: 22px;
    }
    .preset-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 13px 8px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      position: relative;
    }
    .preset-card:hover {
      background: rgba(255, 255, 255, 0.09);
      border-color: rgba(168, 85, 247, 0.45);
      transform: translateY(-2px);
    }
    .preset-card:active {
      transform: scale(0.96);
    }
    .preset-card.active {
      background: rgba(139, 92, 246, 0.2);
      border-color: #a855f7;
      box-shadow: 0 0 25px rgba(168, 85, 247, 0.4);
      transform: translateY(-2px);
    }
    .preset-name {
      font-size: 0.76rem;
      color: var(--text-muted);
      margin-bottom: 6px;
      font-weight: 600;
    }
    .preset-digits {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.18rem;
      font-weight: 700;
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
      padding-bottom: 6px;
    }
    .sep-pill {
      padding: 8px 18px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-subtle);
      color: var(--text-main);
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      min-width: 48px;
      text-align: center;
      user-select: none;
    }
    .sep-pill:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-2px);
    }
    .sep-pill:active {
      transform: scale(0.94);
    }
    .sep-pill.active {
      background: var(--primary);
      border-color: var(--primary);
      color: #fff;
      box-shadow: 0 4px 16px var(--border-glow);
    }

    /* 📊 مانیتورینگ سلامت */
    .health-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 18px;
    }
    .health-item {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 14px 18px;
    }
    .health-label {
      font-size: 0.74rem;
      color: var(--text-muted);
      margin-bottom: 4px;
      font-weight: 600;
    }
    .health-value {
      font-size: 0.92rem;
      font-weight: 800;
      color: var(--text-main);
    }

    /* 👑 پنل ادمین */
    .admin-kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }
    .admin-kpi-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 14px;
      text-align: center;
    }
    .admin-kpi-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
    .admin-kpi-num {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--text-main);
      font-family: 'JetBrains Mono', monospace;
    }
    .admin-kpi-title {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-top: 4px;
      font-weight: 600;
    }

    /* 📱 نگهدارنده و اسکرول نرم جدول‌های پنل ادمین */
    .table-responsive-wrapper {
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      background: var(--table-bg);
      margin-top: 8px;
    }
    .table-responsive-wrapper::-webkit-scrollbar {
      height: 6px;
    }
    .table-responsive-wrapper::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
    }
    .table-responsive-wrapper::-webkit-scrollbar-thumb {
      background: rgba(168, 85, 247, 0.35);
      border-radius: 10px;
    }

    .admin-table {
      width: 100%;
      min-width: 580px;
      border-collapse: collapse;
      font-size: 0.85rem;
    }
    .admin-table th, .admin-table td {
      padding: 11px 12px;
      text-align: right;
      border-bottom: 1px solid var(--border-subtle);
      white-space: nowrap;
    }
    .admin-table th {
      color: var(--text-muted);
      font-weight: 700;
      font-size: 0.76rem;
    }
    .copy-btn {
      background: rgba(99, 102, 241, 0.18);
      border: 1px solid rgba(99, 102, 241, 0.35);
      border-radius: 8px;
      color: #a5b4fc;
      padding: 4px 10px;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
    }
    .copy-btn:hover {
      background: #6366f1;
      color: #fff;
    }
    .status-badge {
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-weight: 700;
      display: inline-block;
    }
    .status-badge.unused { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .status-badge.used { background: rgba(244, 63, 94, 0.15); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.3); }

    /* ⚓ فوتر اختصاصی سایت */
    .footer-dock {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 22px;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      font-size: 0.78rem;
      color: var(--text-muted);
      flex-wrap: wrap;
      gap: 10px;
    }
    .footer-admin-link {
      color: #fbbf24;
      cursor: pointer;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .footer-admin-link:hover {
      color: #fff;
      transform: translateX(-3px);
    }

    /* 🚨 توست اعلان‌ها */
    #toast {
      position: fixed;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      padding: 15px 26px;
      border-radius: 30px;
      font-size: 0.92rem;
      font-weight: 700;
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65);
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #toast.show { transform: translateX(-50%) translateY(0); opacity: 1; pointer-events: auto; }
    #toast.success { background: rgba(16, 185, 129, 0.94); color: #fff; border: 1px solid rgba(110, 231, 183, 0.4); }
    #toast.error { background: rgba(244, 63, 94, 0.94); color: #fff; border: 1px solid rgba(253, 164, 175, 0.4); }
    #toast.info { background: rgba(59, 130, 246, 0.94); color: #fff; border: 1px solid rgba(147, 197, 253, 0.4); }

    /* 🪟 مودال تنظیمات */
    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }
    .modal-container {
      width: 100%;
      max-width: 580px;
      max-height: 90vh;
      overflow-y: auto;
      background: var(--modal-bg);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 28px;
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7);
    }
    .modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .modal-heading {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--text-main);
    }
    .btn-close {
      background: none;
      border: none;
      font-size: 1.6rem;
      color: var(--text-muted);
      cursor: pointer;
    }
    .btn-close:hover { color: var(--text-main); }

    .spinner {
      width: 18px; height: 18px; border: 2px solid rgba(255, 255, 255, 0.3); border-top-color: #fff;
      border-radius: 50%; animation: spin 0.7s linear infinite; display: inline-block;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .action-buttons-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .digits-row {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
    }

    .hidden { display: none !important; }

    @media (max-width: 680px) {
      .container {
        max-width: 100%;
      }
      .admin-kpi-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
    }

    @media (max-width: 580px) {
      body {
        padding: 12px 10px 50px 10px;
      }
      .glass-card {
        padding: 18px 14px;
        border-radius: 20px;
      }
      .navbar {
        padding: 12px 14px;
        gap: 10px;
      }
      .brand-gem {
        width: 38px;
        height: 38px;
        font-size: 18px;
        border-radius: 11px;
      }
      .brand-title-wrap h1 {
        font-size: 1.1rem;
      }
      .badge-pro {
        font-size: 0.62rem;
        padding: 2px 6px;
      }
      .btn-theme-toggle {
        padding: 7px 10px;
        font-size: 0.75rem;
      }
      .theme-text {
        display: none;
      }
      .btn-admin-highlight {
        padding: 7px 10px;
        font-size: 0.75rem;
      }
      .btn-nav-action {
        padding: 7px 10px;
        font-size: 0.75rem;
      }
      .hero-clock-box {
        padding: 22px 12px;
      }
      .hero-calendar-chip {
        font-size: 0.76rem;
        padding: 5px 12px;
      }
      .clock-badges-row {
        gap: 6px;
      }
      .meta-chip {
        font-size: 0.7rem;
        padding: 4px 10px;
      }
      .segmented-control {
        padding: 4px;
        gap: 3px;
        margin-bottom: 18px;
      }
      .segmented-btn {
        font-size: 0.78rem;
        padding: 10px 8px;
      }
      .action-buttons-grid {
        grid-template-columns: 1fr;
        gap: 8px;
      }
      .action-buttons-grid .btn {
        font-size: 0.88rem;
        padding: 11px 16px;
      }
      .preset-grid {
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 8px;
        margin-bottom: 18px;
      }
      .preset-card {
        padding: 10px 6px;
      }
      .preset-digits {
        font-size: 1.05rem;
      }
      .health-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .health-item {
        padding: 12px 14px;
      }
      .admin-subtab-bar {
        padding: 3px;
        gap: 4px;
      }
      .admin-subtab-btn {
        min-width: 110px;
        font-size: 0.76rem;
        padding: 8px 10px;
      }
      .modal-backdrop {
        padding: 12px;
      }
      .modal-container {
        padding: 20px 16px;
        border-radius: 20px;
      }
      .footer-dock {
        padding: 12px 14px;
        font-size: 0.74rem;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 6px;
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
        font-size: 0.72rem;
        padding: 8px 4px;
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
          <span style="font-size:0.85rem; font-weight:700; color:#a5b4fc;" id="usernameDisplay">کاربر</span>
          <button class="btn-nav-action" onclick="openSettingsModal()" title="تنظیمات حساب">⚙️</button>
          <button class="btn-nav-action" onclick="logoutUser()" title="خروج" style="color:#fb7185;">🚪</button>
        </div>
      </div>
    </div>

    <!-- 👑 مرکز فرماندهی و مدیریت فروش Arizo Self (Super Admin Portal) -->
    <div id="adminPanelSection" class="glass-card hidden">
      <div class="section-header">
        <div class="section-title">
          <span>👑</span> مرکز فرماندهی و فروشگاه Arizo Self
        </div>
        <button class="btn-nav-action" onclick="closeAdminPortal()" style="color:#fb7185;">
          <span>✕</span> بازگشت به پنل کاربران
        </button>
      </div>

      <!-- فرم لاگین ادمین (در صورت نداشتن توکن مدیریت) -->
      <div id="adminLoginBox">
        <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
          <div style="font-size: 0.95rem; font-weight: 800; color: #fbbf24; margin-bottom: 6px;">
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
              <div class="admin-kpi-num" id="statBots" style="color:#4ade80;">۰</div>
              <div class="admin-kpi-title">🟢 ربات‌های فعال</div>
            </div>
            <div class="admin-kpi-card">
              <div class="admin-kpi-num" id="statAvailCodes" style="color:#38bdf8;">۰</div>
              <div class="admin-kpi-title">🎟️ کدهای آماده فروش</div>
            </div>
            <div class="admin-kpi-card">
              <div class="admin-kpi-num" id="statUsedCodes" style="color:#fb7185;">۰</div>
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
          <div style="background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-md); padding: 18px; margin-bottom: 22px;">
            <div style="font-size: 0.95rem; font-weight: 800; color: #fbbf24; margin-bottom: 12px; display:flex; align-items:center; gap:6px;">
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

        <button class="btn btn-secondary" onclick="logoutAdmin()" style="margin-top: 24px; color:#fb7185;">
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
        <div class="form-group" style="background: rgba(168, 85, 247, 0.08); border: 1px dashed rgba(168, 85, 247, 0.4); border-radius: var(--radius-md); padding: 14px;">
          <label class="form-label" style="color: #c084fc;">
            <span>🎟️ کد لایسنس / ردیم‌کد فعال‌سازی</span>
            <span style="font-size:0.75rem; color:#f59e0b;">الزامی جهت ساخت حساب</span>
          </label>
          <input type="text" id="regLicenseCode" class="input-field mono" placeholder="ARIZO-XXXX-XXXX-XXXX (کد لایسنس فعال‌سازی)" style="text-transform: uppercase; font-size:1.05rem; letter-spacing:1px; color:#c084fc;">
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
    <div id="suspensionAlertBox" class="glass-card hidden" style="border: 1px solid rgba(244, 63, 94, 0.45); background: linear-gradient(135deg, rgba(244, 63, 94, 0.12) 0%, rgba(225, 29, 72, 0.05) 100%);">
      <div style="display:flex; align-items:flex-start; gap:14px; flex-wrap:wrap;">
        <div style="font-size: 2.2rem; line-height: 1;">⚠️</div>
        <div style="flex:1; min-width: 250px;">
          <div style="font-size: 1.05rem; font-weight: 800; color: #fb7185; margin-bottom: 6px;">
            حساب کاربری و سلف‌بات شما در حالت تعلیق قرار دارد (Suspended)
          </div>
          <div style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 14px;">
            مدت زمان اشتراک شما به پایان رسیده و عملکرد سلف‌بات روی تلگرام متوقف شده است. جهت فعال‌سازی مجدد و خروج آنی از تعلیق، کد لایسنس جدید خود را وارد کنید:
          </div>
          <div style="display: flex; gap: 10px; max-width: 540px; flex-wrap: wrap;">
            <input type="text" id="quickRenewCodeInput" class="input-field mono" placeholder="ARIZO-XXXX-XXXX-XXXX (کد لایسنس جدید جهت خروج از تعلیق)" style="flex: 2; min-width: 190px; text-transform: uppercase; font-weight: 700; color: #c084fc;">
            <button class="btn btn-primary" id="quickRenewBtn" onclick="doQuickRenew()" style="flex: 1; min-width: 160px; background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);">
              <span>🚀 خروج از تعلیق و شارژ</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 🕒 بخش ۱: استیج ساعت زنده و تقویم خورشیدی تهران -->
    <div id="clockHeroCard" class="glass-card hidden">
      <div class="section-header">
        <div class="section-title">
          <span>🕒</span> بخش ۱: مانیتور زنده زمان اتمی تهران
        </div>
        <span class="section-tag">Zero-Latency Sync</span>
      </div>

      <div class="hero-clock-box">
        <div class="hero-calendar-chip">
          <span>🗓️</span>
          <span id="persianDateText">درحال محاسبه تقویم خورشیدی...</span>
        </div>

        <div class="clock-display-wrap">
          <div class="clock-time-digits" id="clockPreview">۰۰:۰۰</div>
          <div class="clock-seconds-badge" id="secondsPulse">:۰۰</div>
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
          <input type="tel" id="tgPhone" class="input-field mono" placeholder="+989123456789 (شماره همراه با کد کشور)" dir="ltr">
        </div>

        <div id="tgCodeGroup" class="form-group hidden">
          <label class="form-label">کد ۵ رقمی ارسالی از سوی تلگرام</label>
          <input type="text" id="tgCode" class="input-field mono" placeholder="کد ۵ رقمی ارسالی در تلگرام (مثال: 58291)" maxlength="8" dir="ltr">
        </div>

        <div id="tgPassGroup" class="form-group hidden">
          <label class="form-label">رمز تأیید دو مرحله‌ای اکانت (2FA)</label>
          <input type="password" id="tgPass" class="input-field" placeholder="رمز تأیید دومرحله‌ای (Two-Step Verification)">
        </div>

        <button class="btn btn-primary" id="tgAuthBtn" onclick="doTelegramAuth()">
          <span>دریافت کد ورود از سرور تلگرام</span>
        </button>
      </div>

      <!-- با سشن مستقیم -->
      <div id="tgSessBox" class="hidden">
        <div class="form-group">
          <label class="form-label">رشته سشن خام تلگرام (StringSession)</label>
          <textarea id="tgSessionInput" class="input-field mono" rows="4" placeholder="رشته طولانی StringSession تلگرام خود را اینجا پیست کنید (Pyrogram یا Telethon/GramJS)..." dir="ltr"></textarea>
        </div>
        <button class="btn btn-primary" id="tgSessBtn" onclick="doConnectDirectSession()">
          <span>اتصال و رمزنگاری فوری با AES-256</span>
        </button>
      </div>
    </div>

    <!-- 🎨 بخش ۳: استودیوی طراحی فونت و کنترل سلف‌بات -->
    <div id="dashboardSection" class="glass-card hidden">
      <div class="section-header">
        <div class="section-title">
          <span>🎨</span> بخش ۳: استودیوی تایپوگرافی و کنترل سلف‌بات
        </div>
        <span class="section-tag">شخصی‌سازی نام خانوادگی</span>
      </div>

      <!-- هشدار هوشمند خطای ارتباط تلگرام با امکان اتصال مجدد -->
      <div id="tgAlertBox" class="hidden" style="background:rgba(244,63,94,0.1); border:1px solid rgba(244,63,94,0.35); border-radius:var(--radius-md); padding:14px 18px; margin-bottom:18px;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
          <div>
            <div style="font-weight:800; color:#fb7185; font-size:0.9rem; margin-bottom:4px;">⚠️ وضعیت ارتباط با تلگرام:</div>
            <div id="tgAlertMsg" style="color:var(--text-main); font-size:0.83rem;"></div>
          </div>
          <button class="btn btn-primary" onclick="showTelegramConnect()" style="padding:6px 14px; font-size:0.8rem; background:linear-gradient(135deg,#f43f5e,#e11d48);">
            <span>🔄 اتصال مجدد اکانت تلگرام</span>
          </button>
        </div>
      </div>

      <!-- گرید پریست‌های فونت -->
      <div class="preset-grid" id="presetBtns"></div>

      <!-- جداکننده‌ها -->
      <div class="form-group">
        <label class="form-label">انتخاب کاراکتر جداکننده ساعت و دقیقه</label>
        <div class="sep-scroll-row">
          <div class="sep-pill active" onclick="setColonChar(':')">:</div>
          <div class="sep-pill" onclick="setColonChar('•')">•</div>
          <div class="sep-pill" onclick="setColonChar('✦')">✦</div>
          <div class="sep-pill" onclick="setColonChar('◈')">◈</div>
          <div class="sep-pill" onclick="setColonChar('|')">|</div>
          <div class="sep-pill" onclick="setColonChar('~')">~</div>
          <div class="sep-pill" onclick="setColonChar('⚡')">⚡</div>
        </div>
      </div>

      <!-- ارقام دستی -->
      <div class="digits-row">
        <div class="form-group" style="flex: 3; margin-bottom: 0;">
          <label class="form-label">ارقام دلخواه (۱۰ کاراکتر ۰ تا ۹)</label>
          <input type="text" id="customDigits" class="input-field mono" placeholder="۱۰ رقم دلخواه از ۰ تا ۹ به ترتیب (مثال: ۰۱۲۳۴۵۶۷۸۹)" dir="ltr">
        </div>
        <div class="form-group" style="flex: 1; min-width: 70px; margin-bottom: 0;">
          <label class="form-label">جداکننده</label>
          <input type="text" id="colonInput" class="input-field mono center-text" value=":" maxlength="4" placeholder=":" style="text-align:center;">
        </div>
      </div>

      <button class="btn btn-primary" id="saveBtn" onclick="saveFonts()" style="margin-bottom: 18px;">
        <span>💾 ذخیره تغییرات استودیو</span>
      </button>

      <!-- ⚡ بخش ۴: عملیات و مانیتورینگ سلامت -->
      <div class="section-header" style="margin-top: 14px;">
        <div class="section-title">
          <span>⚡</span> بخش ۴: وضعیت سرویس و عملیات فوری
        </div>
        <span class="section-tag">Edge Telemetry</span>
      </div>

      <div class="action-buttons-grid">
        <button class="btn btn-secondary" id="syncBtn" onclick="triggerImmediateSync()">
          <span>⚡ به‌روزرسانی آنی</span>
        </button>
        <button class="btn btn-warning" id="toggleBotBtn" onclick="toggleBotState()">
          <span id="toggleBotText">⏸️ توقف موقت</span>
        </button>
        <button class="btn btn-secondary" onclick="showTelegramConnect()" style="color:#38bdf8; border-color:rgba(56,189,248,0.3); font-size:0.82rem;">
          <span>📱 تعویض اکانت</span>
        </button>
      </div>

      <!-- کارت‌های مانیتورینگ سلامت -->
      <div class="health-grid">
        <div class="health-item">
          <div class="health-label">وضعیت سلف‌بات شما</div>
          <div class="health-value" id="botStatusBadge" style="color:#4ade80;">🟢 فعال و آنلاین</div>
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
      <div style="background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: 14px; padding: 16px; margin-bottom: 20px;">
        <div style="font-size:0.88rem; font-weight:700; color:#c084fc; margin-bottom:8px;">🎟️ تمدید اعتبار با ردیم‌کد جدید Arizo</div>
        <div class="form-group">
          <input type="text" id="extendCodeInput" class="input-field mono" placeholder="ARIZO-XXXX-XXXX-XXXX (کد لایسنس تمدید اعتبار)" style="text-transform: uppercase;">
        </div>
        <button class="btn btn-secondary" onclick="doRedeemExtend()" style="color:#c084fc; border-color:rgba(192,132,252,0.3);">
          <span>تمدید و شارژ اشتراک</span>
        </button>
      </div>

      <!-- تغییر پسورد -->
      <div style="margin-bottom: 24px;">
        <div style="font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; color: #a5b4fc;">🔑 تغییر رمز عبور ورود</div>
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
        <button class="btn btn-secondary" onclick="doDisconnectTelegram()" style="color:#fbbf24;">
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
        dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }

      function createParticles() {
        particles = [];
        var count = Math.min(65, Math.max(30, Math.floor((width * height) / 18000)));
        for (var i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7,
            radius: Math.random() * 2 + 1.2,
            baseAlpha: Math.random() * 0.4 + 0.35,
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

      function render() {
        if (!isRunning) return;
        ctx.clearRect(0, 0, width, height);

        var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        var maxDistance = 125;
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
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              var force = (1 - dist / 150) * 0.4;
              p.x += dx * force * 0.05;
              p.y += dy * force * 0.05;
            }
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          if (isDark) {
            ctx.fillStyle = p.colorShift > 0.5 ? 'rgba(168, 85, 247, ' + p.baseAlpha + ')' : 'rgba(56, 189, 248, ' + p.baseAlpha + ')';
          } else {
            ctx.fillStyle = p.colorShift > 0.5 ? 'rgba(99, 102, 241, ' + (p.baseAlpha * 0.85) + ')' : 'rgba(2, 132, 199, ' + (p.baseAlpha * 0.85) + ')';
          }
          ctx.fill();

          for (var j = i + 1; j < pLen; j++) {
            var p2 = particles[j];
            var diffX = p.x - p2.x;
            var diffY = p.y - p2.y;
            var d = Math.sqrt(diffX * diffX + diffY * diffY);

            if (d < maxDistance) {
              var lineAlpha = (1 - d / maxDistance) * (isDark ? 0.28 : 0.22);
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

          if (mouse.active) {
            var mDx = p.x - mouse.x;
            var mDy = p.y - mouse.y;
            var mDist = Math.sqrt(mDx * mDx + mDy * mDy);
            if (mDist < 120) {
              var mAlpha = (1 - mDist / 120) * (isDark ? 0.35 : 0.28);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = isDark 
                ? 'rgba(56, 189, 248, ' + mAlpha + ')' 
                : 'rgba(2, 132, 199, ' + mAlpha + ')';
              ctx.lineWidth = 1.2;
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
          '<td style="font-family:monospace; font-weight:bold; color:#c084fc;">' + c.code + '</td>' +
          '<td><span style="font-weight:700; color:' + (c.plan === 'lifetime' ? '#fbbf24' : '#38bdf8') + ';">' + planName + '</span></td>' +
          '<td>' + statusBadge + '</td>' +
          '<td>' +
            '<button class="copy-btn" data-code="' + c.code + '" onclick="copyCodeToClipboard(this.dataset.code)">📋 کپی</button> ' +
            '<button class="btn-nav-action" data-code="' + c.code + '" onclick="doDeleteCode(this.dataset.code)" style="color:#fb7185; padding:3px 6px;">🗑️</button>' +
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
          ? (u.enabled ? '<span style="color:#4ade80;">🟢 فعال</span>' : '<span style="color:#fbbf24;">⏸️ متوقف</span>')
          : '<span style="color:var(--text-muted);">قطع</span>';

        var suspendBadge = u.isSuspended 
          ? '<span class="status-badge used" style="color:#fb7185; background:rgba(244,63,94,0.12);">⏸️ معلق</span>'
          : '<span class="status-badge unused" style="color:#4ade80; background:rgba(16,185,129,0.12);">🟢 فعال</span>';

        var isAdm = !!u.isAdmin || u.role === 'admin';
        var roleBadge = isAdm
          ? '<span style="color:#fbbf24; background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.35); padding:3px 8px; border-radius:6px; font-weight:800; font-size:0.75rem;">👑 مدیر ارشد</span>'
          : '<span style="color:var(--text-muted); background:var(--badge-bg); border:1px solid var(--border-subtle); padding:3px 8px; border-radius:6px; font-size:0.75rem;">👤 کاربر عادی</span>';

        var roleBtnTitle = isAdm ? 'تنزل به کاربر عادی' : 'ارتقا به مدیر ارشد';
        var roleBtnText = isAdm ? '👤 تنزل' : '👑 ارتقا به مدیر';
        var roleBtnColor = isAdm ? '#94a3b8' : '#fbbf24';

        var planCol = '<div style="font-weight:700;">' + (u.planName || u.plan || 'استاندارد') + '</div>' +
          '<div style="font-size:0.75rem; color:' + (u.isExpired ? '#f43f5e' : '#38bdf8') + ';">' + (u.remainingText || '') + '</div>';

        var suspendBtnTitle = u.isSuspended ? 'خروج از تعلیق' : 'تعلیق کاربر';
        var suspendBtnIcon = u.isSuspended ? '🔓' : '🔒';

        return '<tr>' +
          '<td style="font-weight:bold;">' + u.username + '</td>' +
          '<td>' + roleBadge + '</td>' +
          '<td>' + planCol + '</td>' +
          '<td>' + tgStatus + '</td>' +
          '<td>' + suspendBadge + '</td>' +
          '<td>' +
            '<button class="btn-nav-action" data-user="' + u.username + '" onclick="doChangeUserPlan(this.dataset.user)" style="color:#38bdf8; padding:4px 8px; font-size:0.74rem;" title="تغییر نوع اشتراک و روزها">⭐ اشتراک</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="toggle_role" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" style="color:' + roleBtnColor + '; padding:4px 8px; font-size:0.74rem;" title="' + roleBtnTitle + '">' + roleBtnText + '</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="toggle" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" title="سوئیچ فعال/مکث ربات">⏸️/▶️</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="toggle_suspend" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" style="color:' + (u.isSuspended ? '#4ade80' : '#fb7185') + ';" title="' + suspendBtnTitle + '">' + suspendBtnIcon + '</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="disconnect" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" style="color:#fbbf24;" title="قطع تلگرام">🔌</button> ' +
            '<button class="btn-nav-action" data-user="' + u.username + '" data-act="delete" onclick="doUserAdminAction(this.dataset.user, this.dataset.act)" style="color:#fb7185;" title="حذف کاربر">🗑️</button>' +
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

    window.setColonChar = function(char) {
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

    function selectPreset(key) {
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

    function updateLiveClock() {
    var tehranPersianDateFmt = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      timeZone: 'Asia/Tehran', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    function updateLiveClock() {
      try {
        var now = Date.now();
        var tehranDate = new Date(now + 12600000);
        var hh = String(tehranDate.getUTCHours()).padStart(2, '0');
        var mm = String(tehranDate.getUTCMinutes()).padStart(2, '0');
        var ss = String(tehranDate.getUTCSeconds()).padStart(2, '0');
        
        var d = selectedDigits;
        var c = (document.getElementById('colonInput') && document.getElementById('colonInput').value) || ':';

        var stylH = hh.split('').map(function(x) { return d[+x] || x; }).join('');
        var stylM = mm.split('').map(function(x) { return d[+x] || x; }).join('');
        var previewEl = document.getElementById('clockPreview');
        if (previewEl) previewEl.textContent = stylH + c + stylM;
        var secEl = document.getElementById('secondsPulse');
        if (secEl) secEl.textContent = ':' + ss;

        var dateEl = document.getElementById('persianDateText');
        if (dateEl) {
          dateEl.textContent = tehranPersianDateFmt.format(new Date(now));
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
      btn.innerHTML = '<span class="spinner"></span> ذخیره...';

      try {
        var res = await fetch('/api/fonts', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({
            digits: selectedDigits,
            colon: document.getElementById('colonInput').value || ':'
          })
        });
        if (res.ok) showToast('تنظیمات فونت Arizo ذخیره شد ✨', 'success');
        else showToast('خطا در ذخیره‌سازی', 'error');
      } catch (err) {
        showToast('خطای شبکه', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>💾 ذخیره تغییرات استودیو</span>';
      }
    };

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

          if (data.digits && Array.isArray(data.digits)) {
            selectedDigits = data.digits;
            for (var k in presets) {
              if (presets[k].digits.join('') === data.digits.join('')) {
                selectPreset(k);
                break;
              }
            }
          }
          if (data.colon) {
            document.getElementById('colonInput').value = data.colon;
            setColonChar(data.colon);
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
        lastUpEl.style.color = window.lastServerError ? '#f43f5e' : '#4ade80';
      } else {
        lastUpEl.textContent = 'در انتظار نخستین همگام‌سازی';
        lastUpEl.style.color = 'var(--text-muted)';
      }
    }

    // به‌روزرسانی زنده شمارنده ثانیه‌های آخرین استعلام هر ۵ ثانیه
    setInterval(renderLiveLastUpdate, 5000);

    // هماهنگ‌سازی خودکار وضعیت با سرور هر ۱۵ ثانیه تا زمان آپدیت همیشه بدون رفرش صفحه به‌روز بماند
    setInterval(function() {
      if (localStorage.getItem('token') && isUserLoggedIn && !document.hidden) {
        loadUserDashboard();
      }
    }, 15000);

    loadUserDashboard();
  </script>
</body>
</html>`;
}
