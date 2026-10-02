/**
 * Arizo Self - Interactive Web Setup Wizard
 * راهنمای گرافیکی، گام‌به‌گام و تعاملی راه‌اندازی پروژه برای استفاده شخصی
 */

export function setupWizardHTML(env = {}, url = {}) {
  const origin = url.origin || '';
  const currentWorkerUrl = origin || 'https://your-worker-subdomain.workers.dev';

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <title>🚀 ویزارد راه‌اندازی گام‌به‌گام | Arizo Self Setup Wizard</title>
  <meta name="description" content="راهنمای تعاملی و گرافیکی راه‌اندازی اختصاصی و رایگان سلف‌بات تلگرام Arizo Self روی کلادفلر و گیت‌هاب اکشنز">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --font-main: 'Vazirmatn', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', Consolas, monospace;
      
      --bg-gradient: radial-gradient(circle at 15% 20%, rgba(30, 27, 75, 0.4) 0%, transparent 40%),
                     radial-gradient(circle at 85% 75%, rgba(67, 56, 202, 0.3) 0%, transparent 45%),
                     #09090b;
      --surface-card: rgba(18, 18, 26, 0.75);
      --surface-card-subtle: rgba(25, 25, 36, 0.6);
      --surface-border: rgba(255, 255, 255, 0.08);
      --surface-border-hover: rgba(129, 140, 248, 0.4);

      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;

      --accent-blue: #38bdf8;
      --accent-blue-bg: rgba(56, 189, 248, 0.12);
      --accent-blue-border: rgba(56, 189, 248, 0.3);

      --accent-indigo: #818cf8;
      --accent-indigo-bg: rgba(129, 140, 248, 0.12);
      --accent-indigo-border: rgba(129, 140, 248, 0.3);

      --accent-purple: #c084fc;
      --accent-purple-bg: rgba(192, 132, 252, 0.12);
      --accent-purple-border: rgba(192, 132, 252, 0.3);

      --accent-green: #34d399;
      --accent-green-bg: rgba(52, 211, 153, 0.12);
      --accent-green-border: rgba(52, 211, 153, 0.3);

      --accent-amber: #fbbf24;
      --accent-amber-bg: rgba(251, 191, 36, 0.12);
      --accent-amber-border: rgba(251, 191, 36, 0.3);

      --accent-rose: #f87171;
      --accent-rose-bg: rgba(248, 113, 113, 0.12);
      --accent-rose-border: rgba(248, 113, 113, 0.3);

      --code-bg: #0f172a;
      --input-bg: rgba(0, 0, 0, 0.35);
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 20px;
      --shadow-glow: 0 10px 30px -10px rgba(99, 102, 241, 0.25);
    }

    [data-theme="light"] {
      --bg-gradient: radial-gradient(circle at 15% 20%, rgba(224, 231, 255, 0.5) 0%, transparent 40%),
                     radial-gradient(circle at 85% 75%, rgba(219, 234, 254, 0.5) 0%, transparent 45%),
                     #f8fafc;
      --surface-card: rgba(255, 255, 255, 0.92);
      --surface-card-subtle: rgba(241, 245, 249, 0.85);
      --surface-border: rgba(0, 0, 0, 0.12);
      --surface-border-hover: rgba(99, 102, 241, 0.5);

      --text-main: #0f172a;
      --text-muted: #334155;
      --text-dim: #64748b;

      --accent-blue: #0284c7;
      --accent-blue-bg: rgba(2, 132, 199, 0.09);
      --accent-blue-border: rgba(2, 132, 199, 0.25);

      --accent-indigo: #4f46e5;
      --accent-indigo-bg: rgba(79, 70, 229, 0.09);
      --accent-indigo-border: rgba(79, 70, 229, 0.25);

      --accent-purple: #9333ea;
      --accent-purple-bg: rgba(147, 51, 234, 0.09);
      --accent-purple-border: rgba(147, 51, 234, 0.25);

      --accent-green: #059669;
      --accent-green-bg: rgba(5, 150, 105, 0.09);
      --accent-green-border: rgba(5, 150, 105, 0.25);

      --accent-amber: #d97706;
      --accent-amber-bg: rgba(217, 119, 6, 0.09);
      --accent-amber-border: rgba(217, 119, 6, 0.25);

      --accent-rose: #dc2626;
      --accent-rose-bg: rgba(220, 38, 38, 0.09);
      --accent-rose-border: rgba(220, 38, 38, 0.25);

      --code-bg: #1e293b;
      --input-bg: rgba(255, 255, 255, 0.95);
      --shadow-glow: 0 10px 30px -10px rgba(0, 0, 0, 0.08);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-main);
      background: var(--bg-gradient);
      color: var(--text-main);
      min-height: 100vh;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      transition: background 0.3s ease, color 0.3s ease;
    }

    .container {
      max-width: 1080px;
      margin: 0 auto;
      padding: 20px 16px 60px;
      width: 100%;
      flex: 1;
    }

    /* Glass Navbar */
    .nav-bar {
      background: var(--surface-card);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-lg);
      padding: 14px 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      box-shadow: var(--shadow-glow);
      flex-wrap: wrap;
      gap: 12px;
    }

    .brand-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }

    .brand-icon {
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      color: #fff;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
    }

    .brand-info h1 {
      font-size: 1.15rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .brand-badge {
      font-size: 0.7rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 999px;
      background: var(--accent-indigo-bg);
      color: var(--accent-indigo);
      border: 1px solid var(--accent-indigo-border);
    }

    .brand-desc {
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    .nav-tools {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn-tool {
      background: var(--surface-card-subtle);
      border: 1px solid var(--surface-border);
      color: var(--text-main);
      padding: 8px 14px;
      border-radius: var(--radius-md);
      font-family: inherit;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .btn-tool:hover {
      border-color: var(--surface-border-hover);
      transform: translateY(-1px);
    }

    .btn-tool.primary {
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      color: #fff;
      border: none;
      box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);
    }

    /* Stepper & Progress Tracker */
    .stepper-card {
      background: var(--surface-card);
      backdrop-filter: blur(14px);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-lg);
      padding: 20px 24px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-glow);
    }

    .progress-bar-wrap {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 999px;
      margin-bottom: 20px;
      overflow: hidden;
      position: relative;
    }

    .progress-bar-fill {
      height: 100%;
      width: 20%;
      background: linear-gradient(90deg, #38bdf8, #818cf8, #c084fc);
      border-radius: 999px;
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .steps-nav {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
    }

    .step-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      cursor: pointer;
      padding: 10px 6px;
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
      position: relative;
    }

    .step-item:hover {
      background: rgba(255, 255, 255, 0.03);
    }

    .step-circle {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--surface-card-subtle);
      border: 2px solid var(--surface-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-dim);
      margin-bottom: 6px;
      transition: all 0.3s ease;
    }

    .step-item.active .step-circle {
      background: linear-gradient(135deg, #4f46e5, #818cf8);
      border-color: #818cf8;
      color: #fff;
      box-shadow: 0 0 16px rgba(129, 140, 248, 0.45);
      transform: scale(1.08);
    }

    .step-item.completed .step-circle {
      background: var(--accent-green-bg);
      border-color: var(--accent-green);
      color: var(--accent-green);
    }

    .step-label {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .step-item.active .step-label {
      color: var(--accent-indigo);
      font-weight: 800;
    }

    @media (max-width: 768px) {
      .steps-nav {
        grid-template-columns: repeat(5, 1fr);
        gap: 4px;
      }
      .step-circle {
        width: 32px;
        height: 32px;
        font-size: 0.8rem;
      }
      .step-label {
        font-size: 0.68rem;
      }
    }

    /* Step Content Section */
    .step-pane {
      display: none;
      animation: fadeIn 0.35s ease;
    }

    .step-pane.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .content-card {
      background: var(--surface-card);
      backdrop-filter: blur(14px);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-lg);
      padding: 30px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-glow);
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 800;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .card-subtitle {
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-bottom: 24px;
      line-height: 1.6;
    }

    /* Sub-cards & Grids */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }

    .sub-card {
      background: var(--surface-card-subtle);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-md);
      padding: 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
      transition: all 0.2s ease;
    }

    .sub-card:hover {
      border-color: var(--surface-border-hover);
    }

    .sub-card-title {
      font-size: 0.95rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-main);
    }

    .sub-card-desc {
      font-size: 0.82rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    /* Code block & Terminal */
    .code-box {
      background: var(--code-bg);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-md);
      padding: 14px 16px;
      direction: ltr;
      text-align: left;
      font-family: var(--font-mono);
      font-size: 0.82rem;
      color: #e2e8f0;
      position: relative;
      margin: 12px 0;
      overflow-x: auto;
    }

    .code-box-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      padding-bottom: 6px;
    }

    .code-box-lang {
      font-size: 0.72rem;
      color: var(--accent-indigo);
      font-weight: 700;
    }

    .btn-copy-code {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-family: var(--font-main);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.2s;
    }

    .btn-copy-code:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
    }

    /* Interactive Inputs & Tools */
    .tool-box {
      background: rgba(99, 102, 241, 0.04);
      border: 1px solid var(--accent-indigo-border);
      border-radius: var(--radius-md);
      padding: 20px;
      margin: 20px 0;
    }

    .tool-box-title {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--accent-indigo);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .form-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 14px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .input-text {
      background: var(--input-bg);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-sm);
      padding: 9px 12px;
      color: var(--text-main);
      font-family: var(--font-mono);
      font-size: 0.85rem;
      direction: ltr;
      outline: none;
      transition: border-color 0.2s;
    }

    .input-text:focus {
      border-color: var(--accent-indigo);
      box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);
    }

    /* Action Footer Buttons */
    .wizard-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 24px;
    }

    .btn-step {
      padding: 12px 24px;
      border-radius: var(--radius-md);
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
      border: none;
      text-decoration: none;
    }

    .btn-step.prev {
      background: var(--surface-card-subtle);
      border: 1px solid var(--surface-border);
      color: var(--text-main);
    }

    .btn-step.prev:hover {
      border-color: var(--surface-border-hover);
    }

    .btn-step.next {
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      color: #fff;
      box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
    }

    .btn-step.next:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }

    .btn-step.finish {
      background: linear-gradient(135deg, #059669, #10b981);
      color: #fff;
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
    }

    /* Checklist & Tags */
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 14px;
      background: var(--surface-card-subtle);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-md);
      margin-bottom: 10px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .checklist-item:hover {
      border-color: var(--surface-border-hover);
    }

    .checklist-item.checked {
      border-color: var(--accent-green-border);
      background: var(--accent-green-bg);
    }

    .custom-checkbox {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      border: 2px solid var(--text-dim);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
      flex-shrink: 0;
      transition: all 0.2s;
    }

    .checklist-item.checked .custom-checkbox {
      background: var(--accent-green);
      border-color: var(--accent-green);
      color: #fff;
    }

    /* Toast Notification */
    #wizardToast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: var(--surface-card);
      color: var(--text-main);
      border: 1px solid var(--accent-indigo);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      border-radius: var(--radius-md);
      padding: 10px 22px;
      font-size: 0.85rem;
      font-weight: 700;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 9999;
      pointer-events: none;
    }

    #wizardToast.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }

    /* Modal Backdrop */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 16px;
      transition: opacity 0.25s ease;
    }

    .modal-backdrop.hidden {
      display: none;
    }

    .modal-card {
      background: var(--surface-card);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-lg);
      width: 100%;
      max-width: 580px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .modal-header {
      padding: 18px 24px;
      border-bottom: 1px solid var(--surface-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-body {
      padding: 24px;
      max-height: 70vh;
      overflow-y: auto;
    }
  </style>
</head>
<body>

  <div class="container">
    
    <!-- نوار ناوبری بالا -->
    <header class="nav-bar">
      <a href="/" class="brand-wrap">
        <div class="brand-icon">⚡</div>
        <div class="brand-info">
          <h1>
            <span>Arizo Self</span>
            <span class="brand-badge">SETUP WIZARD v1.0</span>
          </h1>
          <div class="brand-desc">ویزارد گرافیکی و گام‌به‌گام راه‌اندازی شخصی از گیت‌هاب</div>
        </div>
      </a>

      <div class="nav-tools">
        <button class="btn-tool" onclick="checkLiveServerStatus()" title="بررسی اتصال و وضعیت سرور جاری">
          <span>🩺</span>
          <span>بررسی سلامت سرور</span>
        </button>

        <button class="btn-tool" onclick="toggleTheme()" title="تغییر تم روز و شب" id="themeBtn">
          <span id="themeIcon">☀️</span>
          <span id="themeText">حالت روز</span>
        </button>

        <a href="/" class="btn-tool primary" title="ورود به پنل اصلی سلف‌بات">
          <span>🚪 ورود به پنل</span>
        </a>
      </div>
    </header>

    <!-- کارت استپر و نوار درصد پیشرفت -->
    <div class="stepper-card">
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" id="progressBar"></div>
      </div>

      <div class="steps-nav">
        <div class="step-item active" onclick="goToStep(1)" id="stepTab1">
          <div class="step-circle" id="circle1">۱</div>
          <div class="step-label">گیت‌هاب و نیازمندی‌ها</div>
        </div>
        <div class="step-item" onclick="goToStep(2)" id="stepTab2">
          <div class="step-circle" id="circle2">۲</div>
          <div class="step-label">کلادفلر و دیتابیس</div>
        </div>
        <div class="step-item" onclick="goToStep(3)" id="stepTab3">
          <div class="step-circle" id="circle3">۳</div>
          <div class="step-label">تلگرام و ربات کمکی</div>
        </div>
        <div class="step-item" onclick="goToStep(4)" id="stepTab4">
          <div class="step-circle" id="circle4">۴</div>
          <div class="step-label">رانر ۲۴ ساعته Actions</div>
        </div>
        <div class="step-item" onclick="goToStep(5)" id="stepTab5">
          <div class="step-circle" id="circle5">۵</div>
          <div class="step-label">ورود و تست نهایی</div>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- مرحله ۱: فورک و پیش‌نیازها -->
    <!-- ========================================== -->
    <div class="step-pane active" id="stepPane1">
      <div class="content-card">
        <div class="card-title">
          <span>📥 مرحله اول: انشعاب پروژه در گیت‌هاب (Fork) و نصب نیازمندی‌ها</span>
        </div>
        <div class="card-subtitle">
          به سادگی یک نسخه کپی اختصاصی از پروژه را در اکانت گیت‌هاب خود بسازید تا کنترل کامل کدهای سلف‌بات و رانر همیشه در دستان شما باشد.
        </div>

        <div class="cards-grid">
          <div class="sub-card">
            <div class="sub-card-title">
              <span>🍴 فورک کردن پروژه در گیت‌هاب</span>
            </div>
            <div class="sub-card-desc">
              وارد صفحه ریپازیتوری زیر در گیت‌هاب شده و دکمه <strong>Fork</strong> در بالا سمت راست صفحه را بزنید تا کل سورس در حساب شخصی شما کپی شود:
            </div>
            <div style="margin-top: 6px;">
              <a href="https://github.com/ArizoOwner/arizo-telegram-self-manager" target="_blank" class="btn-tool primary" style="width:100%; justify-content:center;">
                <span>🔗 مشاهده ریپازیتوری و زدن دکمه Fork</span>
              </a>
            </div>
          </div>

          <div class="sub-card">
            <div class="sub-card-title">
              <span>💻 ابزارهای مورد نیاز سیستم</span>
            </div>
            <div class="sub-card-desc">
              برای راه‌اندازی این پروژه فقط به دو ابزار ساده نیاز دارید:
              <ul style="margin: 8px 18px; font-size: 0.8rem; line-height: 1.8;">
                <li>نصب بودن <strong>Node.js 18 یا بالاتر</strong> روی کامپیوتر</li>
                <li>داشتن یک اکانت کاملاً رایگان در <strong>Cloudflare</strong></li>
                <li>داشتن اکانت در <strong>GitHub</strong> جهت رانر ۲۴ ساعته</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 8px;">
          ⌨️ کلون کردن ریپوی شخصی و نصب پکیج‌ها در ترمینال:
        </div>
        <div class="code-box">
          <div class="code-box-header">
            <span class="code-box-lang">BASH / POWERSHELL</span>
            <button class="btn-copy-code" onclick="copySnippet('git clone https://github.com/YOUR_USERNAME/arizo-telegram-self-manager.git\\ncd arizo-telegram-self-manager\\nnpm install')">📋 کپی دستورات</button>
          </div>
          <code>git clone https://github.com/YOUR_USERNAME/arizo-telegram-self-manager.git<br>cd arizo-telegram-self-manager<br>npm install</code>
        </div>

        <div class="wizard-actions">
          <div></div>
          <button class="btn-step next" onclick="goToStep(2)">
            <span>مرحله بعد: کلادفلر و دیتابیس</span>
            <span>⬅️</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- مرحله ۲: کلادفلر، KV و دیتابیس D1 -->
    <!-- ========================================== -->
    <div class="step-pane" id="stepPane2">
      <div class="content-card">
        <div class="card-title">
          <span>⛅ مرحله دوم: آماده‌سازی سرور ابری کلادفلر (Workers, KV & D1)</span>
        </div>
        <div class="card-subtitle">
          کلادفلر ورکرز بستر اجرایی بدون سرور (Serverless) پروژه است. با دو دستور زیر پایگاه داده SQLite و حافظه پرسرعت KV را بسازید.
        </div>

        <div class="cards-grid">
          <div class="sub-card">
            <div class="sub-card-title">
              <span>🗄️ ۱. ساخت پایگاه داده رایگان D1</span>
            </div>
            <div class="sub-card-desc">
              دستور زیر را در ترمینال پوشه پروژه اجرا کنید تا دیتابیس اختصاصی <code>arizo_db</code> ساخته شده و <strong>database_id</strong> آن به شما داده شود:
            </div>
            <div class="code-box" style="margin: 6px 0;">
              <code>npx wrangler d1 create arizo_db</code>
            </div>
            <div class="sub-card-desc" style="font-size: 0.76rem; color: var(--accent-amber);">
              💡 شناسه تولیدشده (یک UUID مثل <code>4edef38a-xxxx...</code>) را یادداشت کنید.
            </div>
          </div>

          <div class="sub-card">
            <div class="sub-card-title">
              <span>⚡ ۲. ساخت فضای ذخیره‌سازی KV</span>
            </div>
            <div class="sub-card-desc">
              دستور زیر را در ترمینال اجرا کنید تا فضای KV ایجاد شده و شناسه <strong>id</strong> آن چاپ شود:
            </div>
            <div class="code-box" style="margin: 6px 0;">
              <code>npx wrangler kv:namespace create KV</code>
            </div>
            <div class="sub-card-desc" style="font-size: 0.76rem; color: var(--accent-blue);">
              💡 شناسه تولیدشده (مثل <code>b56bacf321...</code>) را یادداشت کنید.
            </div>
          </div>
        </div>

        <!-- ابزار تعاملی: تولید خودکار فایل wrangler.toml -->
        <div class="tool-box">
          <div class="tool-box-title">
            <span>⚙️ تولیدکننده خودکار و زنده فایل کانفیگ <code>wrangler.toml</code></span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 14px;">
            اطلاعات خود را در فیلدهای زیر وارد کنید تا فایل کانفیگ اختصاصی شما بلافاصله تولید شود:
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">نام ورکر (Worker Name)</label>
              <input type="text" id="cfgWorkerName" class="input-text" value="my-arizo-self" oninput="generateWranglerToml()">
            </div>
            <div class="form-group">
              <label class="form-label">شناسه KV Namespace (KV ID)</label>
              <input type="text" id="cfgKvId" class="input-text" placeholder="b56bacf321a54731ba4a1e69a5619898" oninput="generateWranglerToml()">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">شناسه پایگاه داده D1 (Database ID)</label>
              <input type="text" id="cfgD1Id" class="input-text" placeholder="4edef38a-95d4-4459-a904-5248a8952363" oninput="generateWranglerToml()">
            </div>
            <div class="form-group">
              <label class="form-label">
                <span>رمز عبور مدیریت (Admin Master Password)</span>
                <button type="button" onclick="generateRandomPass()" style="background:none; border:none; color:var(--accent-indigo); font-size:0.75rem; cursor:pointer; font-weight:700;">🎲 تولید تصادفی</button>
              </label>
              <input type="text" id="cfgAdminPass" class="input-text" value="secret_master_key_2026" oninput="generateWranglerToml()">
            </div>
          </div>

          <div class="code-box" id="wranglerPreviewBox">
            <div class="code-box-header">
              <span class="code-box-lang">wrangler.toml (خروجی آماده)</span>
              <button class="btn-copy-code" onclick="copyWranglerToml()">📋 کپی کامل محتوا</button>
            </div>
            <pre id="wranglerOutputCode" style="margin:0; font-family:var(--font-mono); white-space:pre-wrap;"></pre>
          </div>
          <div style="font-size: 0.76rem; color: var(--text-dim); margin-top: 6px;">
            💡 محتوای بالا را کپی کرده و در فایل <code>wrangler.toml</code> در ریشه پروژه خود جایگزین کنید.
          </div>
        </div>

        <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 8px;">
          🚀 دستور دیپلوی به کلادفلر:
        </div>
        <div class="code-box">
          <div class="code-box-header">
            <span class="code-box-lang">TERMINAL</span>
            <button class="btn-copy-code" onclick="copySnippet('npx wrangler deploy')">📋 کپی دستور</button>
          </div>
          <code>npx wrangler deploy</code>
        </div>

        <div class="wizard-actions">
          <button class="btn-step prev" onclick="goToStep(1)">
            <span>➡️ مرحله قبل</span>
          </button>
          <button class="btn-step next" onclick="goToStep(3)">
            <span>مرحله بعد: کلیدهای تلگرام و ربات</span>
            <span>⬅️</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- مرحله ۳: کلیدهای تلگرام و ربات کمکی -->
    <!-- ========================================== -->
    <div class="step-pane" id="stepPane3">
      <div class="content-card">
        <div class="card-title">
          <span>📱 مرحله سوم: اتصال به تلگرام و ساخت ربات کمکی اختصاصی</span>
        </div>
        <div class="card-subtitle">
          پروژه برای اتصال سلف‌بات به پروتکل MTProto و کنترل هوشمند نیاز به اطلاعات کلاینت تلگرام و یک ربات بات‌فادر دارد.
        </div>

        <div class="cards-grid">
          <div class="sub-card">
            <div class="sub-card-title">
              <span>🔑 ۱. شناسه و هش رسمی تلگرام (API_ID / API_HASH)</span>
            </div>
            <div class="sub-card-desc">
              این مقادیر به‌صورت پیش‌فرض روی شناسه امن کلاینت رسمی تلگرام دسکتاپ ست شده‌اند و نیازی به تغییر اجباری ندارید:
            </div>
            <div class="code-box" style="margin: 8px 0; font-size: 0.78rem;">
              API_ID = "2040"<br>
              API_HASH = "b18441a1ff607e10a989891a5462e627"
            </div>
            <div class="sub-card-desc" style="font-size: 0.74rem;">
              در صورت تمایل به ساخت کلید اختصاصی، به سایت <a href="https://my.telegram.org" target="_blank" style="color:var(--accent-blue);">my.telegram.org</a> رفته و از بخش API development tools اپلیکیشن بسازید.
            </div>
          </div>

          <div class="sub-card">
            <div class="sub-card-title">
              <span>🤖 ۲. ثبت ربات کمکی در BotFather</span>
            </div>
            <div class="sub-card-desc">
              برای مدیریت پیام‌های حذف‌شده، پیام‌های تایمردار، و اعلان‌های سیستم، یک ربات رایگان در تلگرام بسازید:
              <ol style="margin: 8px 18px; font-size: 0.8rem; line-height: 1.8;">
                <li>در تلگرام به آیدی <a href="https://t.me/BotFather" target="_blank" style="color:var(--accent-blue);">@BotFather</a> پیام دهید.</li>
                <li>دستور <code>/newbot</code> را بفرستید.</li>
                <li>یک نام و یک یوزرنیم که به bot ختم شود انتخاب کنید.</li>
                <li>توکن تلگرام داده‌شده (مثل <code>123456:ABC-DEF...</code>) را کپی کنید.</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- ابزار تعاملی: تست زنده توکن ربات -->
        <div class="tool-box">
          <div class="tool-box-title">
            <span>🔍 تستر و اعتبارسنجی آنلاین توکن ربات تلگرام</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px;">
            توکن ربات خود را اینجا وارد کنید تا ویزارد مستقیماً با سرورهای تلگرام ارتباط گرفته و از صحت آن اطمینان حاصل کند:
          </div>

          <div style="display:flex; flex-wrap:wrap; gap:10px;">
            <input type="text" id="botTokenInput" class="input-text" placeholder="123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ..." style="flex:1; min-width:240px;">
            <button class="btn-tool primary" id="testBotBtn" onclick="testBotTokenOnline()">
              <span>🚀 تست آنلاین توکن</span>
            </button>
          </div>

          <div id="botTestResult" style="margin-top:14px; display:none;"></div>
        </div>

        <div class="wizard-actions">
          <button class="btn-step prev" onclick="goToStep(2)">
            <span>➡️ مرحله قبل</span>
          </button>
          <button class="btn-step next" onclick="goToStep(4)">
            <span>مرحله بعد: رانر ۲۴ ساعته Actions</span>
            <span>⬅️</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- مرحله ۴: رانر ۲۴ ساعته گیت‌هاب اکشنز -->
    <!-- ========================================== -->
    <div class="step-pane" id="stepPane4">
      <div class="content-card">
        <div class="card-title">
          <span>⚡ مرحله چهارم: فعال‌سازی رانر دائمی و ۲۴ ساعته در GitHub Actions</span>
        </div>
        <div class="card-subtitle">
          گیت‌هاب اکشنز موتور تپنده‌ای است که تغییرات ساعت فونتی، آپدیت بیو، ماژول‌های پاسخ خودکار و جلوگیری از خاموشی را به‌صورت نامحدود اجرا می‌کند.
        </div>

        <div class="sub-card" style="margin-bottom: 20px;">
          <div class="sub-card-title">
            <span>🛡️ افزودن سکرت‌های امنیتی به گیت‌هاب (Repository Secrets)</span>
          </div>
          <div class="sub-card-desc">
            در صفحه ریپازیتوری شخصی خود در گیت‌هاب، به مسیر زیر بروید:
            <div style="margin: 6px 0; font-weight:700; color:var(--accent-purple);">
              Settings ➔ Secrets and variables ➔ Actions ➔ New repository secret
            </div>
            و مقادیر زیر را تک‌به‌تک ثبت کنید:
          </div>
        </div>

        <!-- جدول سکرت‌های مورد نیاز با دکمه کپی اختصاصی -->
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:0.84rem; text-align:right; margin-bottom:20px;">
            <thead>
              <tr style="border-bottom:1px solid var(--surface-border); color:var(--text-dim);">
                <th style="padding:10px;">نام Secret در گیت‌هاب</th>
                <th style="padding:10px;">مقدار پیشنهادی</th>
                <th style="padding:10px;">توضیحات</th>
                <th style="padding:10px; text-align:center;">عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                <td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-blue);">CLOUDFLARE_URL</td>
                <td style="padding:10px; font-family:var(--font-mono); color:var(--text-muted);">${currentWorkerUrl}</td>
                <td style="padding:10px; color:var(--text-muted);">آدرس دامنه ورکر کلادفلر شما</td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('${currentWorkerUrl}')">کپی مقدار</button>
                </td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                <td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-purple);">RUNNER_SECRET</td>
                <td style="padding:10px; font-family:var(--font-mono); color:var(--text-muted);">همان رمزی که در wrangler.toml وارد کردید</td>
                <td style="padding:10px; color:var(--text-muted);">رمز عبور احراز هویت رانر با ورکر</td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copyRunnerSecret()">کپی مقدار</button>
                </td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                <td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-indigo);">API_ID</td>
                <td style="padding:10px; font-family:var(--font-mono); color:var(--text-muted);">2040</td>
                <td style="padding:10px; color:var(--text-muted);">شناسه تلگرام کلاینت رسمی</td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('2040')">کپی</button>
                </td>
              </tr>
              <tr>
                <td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-indigo);">API_HASH</td>
                <td style="padding:10px; font-family:var(--font-mono); color:var(--text-muted);">b18441a1ff607e10a989891a5462e627</td>
                <td style="padding:10px; color:var(--text-muted);">هش تلگرام کلاینت رسمی</td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('b18441a1ff607e10a989891a5462e627')">کپی</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sub-card">
          <div class="sub-card-title">
            <span>▶️ راه‌اندازی و شروع گردش کار (Start Workflow)</span>
          </div>
          <div class="sub-card-desc">
            در صفحه گیت‌هاب به تب <strong>Actions</strong> بروید ➔ گردش‌کار <strong>⚡ Telegram Clock Engine</strong> را از سایدبار چپ انتخاب کنید ➔ دکمه <strong>Run workflow</strong> را بزنید!
            <div style="font-size:0.78rem; color:var(--accent-green); margin-top:8px; font-weight:700;">
              🟢 رانر بلافاصله روشن شده و به‌صورت خودکار هر ۴ ساعت خودش را تمدید می‌کند تا بدون ثانیه‌ای قطعی به کارش ادامه دهد.
            </div>
          </div>
        </div>

        <div class="wizard-actions">
          <button class="btn-step prev" onclick="goToStep(3)">
            <span>➡️ مرحله قبل</span>
          </button>
          <button class="btn-step next" onclick="goToStep(5)">
            <span>مرحله بعد: ورود به پنل و تست نهایی</span>
            <span>⬅️</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- مرحله ۵: ورود به پنل، تست و شخصی‌سازی نهایی -->
    <!-- ========================================== -->
    <div class="step-pane" id="stepPane5">
      <div class="content-card">
        <div class="card-title">
          <span>🎉 مرحله پنجم: ورود به داشبورد و فعال‌سازی اکانت تلگرام</span>
        </div>
        <div class="card-subtitle">
          تبریک! تمامی زیرساخت‌ها با موفقیت مهیا شدند. اکنون می‌توانید وارد پنل کاربری یا پنل مدیریت شده و اکانت تلگرام خود را به سیستم متصل نمایید.
        </div>

        <!-- چک‌لیست آمادگی نهایی -->
        <div style="margin-bottom: 24px;">
          <div style="font-weight:800; font-size:1rem; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
            <span>📋 چک‌لیست آمادگی نهایی (روی هر کدام کلیک کنید تا تیک بخورد):</span>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)">
            <div class="custom-checkbox">✓</div>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">ریپازیتوری فورک و پکیج‌ها نصب شدند</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">پروژه در ریپوی شخصی گیت‌هاب قرار گرفت.</div>
            </div>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)">
            <div class="custom-checkbox">✓</div>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">کلادفلر ورکر و دیتابیس D1 ساخته و مستقر شد</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">دستور npx wrangler deploy با موفقیت اجرا شد و ورکر آدرس اختصاصی گرفت.</div>
            </div>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)">
            <div class="custom-checkbox">✓</div>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">ربات کمکی در BotFather ایجاد شد</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">توکن تلگرام آماده استفاده در پنل یا تنظیمات است.</div>
            </div>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)">
            <div class="custom-checkbox">✓</div>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">سکرت‌های گیت‌هاب اکشنز ست شدند</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">مقادیر CLOUDFLARE_URL و RUNNER_SECRET ذخیره و رانر استارت شد.</div>
            </div>
          </div>
        </div>

        <div class="cards-grid">
          <div class="sub-card" style="border-color:var(--accent-indigo-border); background:var(--accent-indigo-bg);">
            <div class="sub-card-title" style="color:var(--accent-indigo);">
              <span>🔑 ورود مدیر کل به پنل</span>
            </div>
            <div class="sub-card-desc">
              وارد صفحه اصلی شده، دکمه <strong>👑 پنل مدیریت</strong> را بزنید و رمز عبوری که در <code>wrangler.toml</code> گذاشتید را وارد کنید تا به انبار لایسنس‌ها و مانیتورینگ دسترسی پیدا کنید.
            </div>
          </div>

          <div class="sub-card" style="border-color:var(--accent-green-border); background:var(--accent-green-bg);">
            <div class="sub-card-title" style="color:var(--accent-green);">
              <span>📱 اتصال اکانت تلگرام</span>
            </div>
            <div class="sub-card-desc">
              پس از ورود به حساب کاربری، روی <strong>اسکن QR تلگرام</strong> کلیک کنید و در تلگرام گوشی خود به <code>Settings > Devices > Link Desktop Device</code> بروید تا اتصال برقرار شود.
            </div>
          </div>
        </div>

        <div class="wizard-actions">
          <button class="btn-step prev" onclick="goToStep(4)">
            <span>➡️ مرحله قبل</span>
          </button>
          <a href="/" class="btn-step finish">
            <span>🚀 ورود به داشبورد و پایان راه‌اندازی</span>
          </a>
        </div>
      </div>
    </div>

  </div>

  <!-- مودال بررسی زنده سلامت سرور -->
  <div id="statusModal" class="modal-backdrop hidden" onclick="if(event.target===this) closeStatusModal();">
    <div class="modal-card">
      <div class="modal-header">
        <div style="font-weight:800; font-size:1rem; display:flex; align-items:center; gap:8px;">
          <span>🩺 عیب‌یابی و بررسی زنده پیکربندی ورکر</span>
        </div>
        <button class="btn-tool" onclick="closeStatusModal()" style="padding:4px 10px;">✕</button>
      </div>
      <div class="modal-body" id="statusModalBody">
        <div style="text-align:center; padding:24px; color:var(--text-muted);">
          در حال ارتباط با ورکر کلادفلر و اعتبارسنجی اتصالات...
        </div>
      </div>
    </div>
  </div>

  <!-- اعلان Toast -->
  <div id="wizardToast">پیام سیستم</div>

  <script>
    var currentStep = 1;
    var totalSteps = 5;

    function goToStep(step) {
      if (step < 1 || step > totalSteps) return;
      currentStep = step;

      // آپدیت نوار پیشرفت
      var pct = ((step - 1) / (totalSteps - 1)) * 100;
      if (pct === 0) pct = 20;
      document.getElementById('progressBar').style.width = pct + '%';

      // آپدیت تب‌ها
      for (var i = 1; i <= totalSteps; i++) {
        var tab = document.getElementById('stepTab' + i);
        var pane = document.getElementById('stepPane' + i);
        var circle = document.getElementById('circle' + i);

        if (i === step) {
          tab.classList.add('active');
          tab.classList.remove('completed');
          pane.classList.add('active');
          circle.textContent = i;
        } else if (i < step) {
          tab.classList.remove('active');
          tab.classList.add('completed');
          pane.classList.remove('active');
          circle.textContent = '✓';
        } else {
          tab.classList.remove('active');
          tab.classList.remove('completed');
          pane.classList.remove('active');
          circle.textContent = i;
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function generateRandomPass() {
      var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!';
      var pass = 'arizo_';
      for (var i = 0; i < 16; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      document.getElementById('cfgAdminPass').value = pass;
      generateWranglerToml();
      showToast('رمز تصادفی ایمن تولید شد 🎲');
    }

    function generateWranglerToml() {
      var name = document.getElementById('cfgWorkerName').value.trim() || 'my-arizo-self';
      var kvId = document.getElementById('cfgKvId').value.trim() || 'YOUR_KV_NAMESPACE_ID';
      var d1Id = document.getElementById('cfgD1Id').value.trim() || 'YOUR_D1_DATABASE_ID';
      var adminPass = document.getElementById('cfgAdminPass').value.trim() || 'secret_admin_key_2026';

      var code = 
'name = "' + name + '"\\n' +
'main = "src/index.js"\\n' +
'compatibility_date = "2024-09-23"\\n' +
'compatibility_flags = ["nodejs_compat"]\\n\\n' +
'[triggers]\\n' +
'crons = ["* * * * *"]\\n\\n' +
'[[kv_namespaces]]\\n' +
'binding = "KV"\\n' +
'id = "' + kvId + '"\\n\\n' +
'[[d1_databases]]\\n' +
'binding = "DB"\\n' +
'database_name = "arizo_db"\\n' +
'database_id = "' + d1Id + '"\\n\\n' +
'# متغیرهای محیطی کلاینت تلگرام و کلیدهای مدیریت\\n' +
'[vars]\\n' +
'API_ID = "2040"\\n' +
'API_HASH = "b18441a1ff607e10a989891a5462e627"\\n' +
'ADMIN_PASSWORD = "' + adminPass + '"\\n' +
'RUNNER_SECRET = "' + adminPass + '"\\n';

      document.getElementById('wranglerOutputCode').textContent = code;
    }

    function copyWranglerToml() {
      var code = document.getElementById('wranglerOutputCode').textContent;
      copySnippet(code);
    }

    function copyRunnerSecret() {
      var pass = document.getElementById('cfgAdminPass').value || 'secret_master_key_2026';
      copySnippet(pass);
    }

    function copySnippet(text) {
      navigator.clipboard.writeText(text).then(function() {
        showToast('📋 در حافظه کپی شد!');
      }).catch(function() {
        showToast('خطا در کپی، لطفاً دستی کپی کنید', true);
      });
    }

    function showToast(msg) {
      var t = document.getElementById('wizardToast');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(function() { t.classList.remove('show'); }, 3000);
    }

    function toggleChecklist(el) {
      el.classList.toggle('checked');
      var icon = el.querySelector('.custom-checkbox');
      if (el.classList.contains('checked')) {
        icon.textContent = '✓';
      } else {
        icon.textContent = '';
      }
    }

    // تستر آنلاین توکن ربات تلگرام
    async function testBotTokenOnline() {
      var input = document.getElementById('botTokenInput');
      var token = (input.value || '').trim();
      var resBox = document.getElementById('botTestResult');
      var btn = document.getElementById('testBotBtn');

      if (!token) {
        showToast('لطفاً ابتدا توکن ربات را وارد کنید!');
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '<span>⏳ در حال بررسی...</span>';
      resBox.style.display = 'block';
      resBox.innerHTML = '<div style="color:var(--text-muted); font-size:0.8rem;">در حال ارتباط با API تلگرام...</div>';

      try {
        var r = await fetch('/api/setup/test-bot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: token })
        });
        var data = await r.json();

        if (data.success && data.bot) {
          resBox.innerHTML = 
            '<div style="background:var(--accent-green-bg); border:1px solid var(--accent-green-border); border-radius:10px; padding:14px; font-size:0.84rem;">' +
              '<div style="font-weight:800; color:var(--accent-green); margin-bottom:6px;">✅ توکن تلگرام کاملاً معتبر و فعال است!</div>' +
              '<div><strong>نام ربات:</strong> ' + data.bot.firstName + '</div>' +
              '<div><strong>یوزرنیم:</strong> @' + data.bot.username + '</div>' +
              '<div><strong>شناسه عددی ربات:</strong> <code>' + data.bot.id + '</code></div>' +
            '</div>';
          showToast('ربات با موفقیت تایید شد 🤖');
        } else {
          resBox.innerHTML = 
            '<div style="background:var(--accent-rose-bg); border:1px solid var(--accent-rose-border); border-radius:10px; padding:14px; font-size:0.84rem; color:var(--accent-rose);">' +
              '<strong>❌ خطای تلگرام:</strong> ' + (data.error || 'توکن نامعتبر است.') +
            '</div>';
        }
      } catch (err) {
        resBox.innerHTML = 
          '<div style="background:var(--accent-rose-bg); border:1px solid var(--accent-rose-border); border-radius:10px; padding:14px; font-size:0.84rem; color:var(--accent-rose);">' +
            'خطا در ارتباط با سرور: ' + err.message +
          '</div>';
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>🚀 تست آنلاین توکن</span>';
      }
    }

    // بررسی زنده سلامت سرور کلادفلر
    async function checkLiveServerStatus() {
      var modal = document.getElementById('statusModal');
      var body = document.getElementById('statusModalBody');
      modal.classList.remove('hidden');

      body.innerHTML = '<div style="text-align:center; padding:24px; color:var(--text-muted);">در حال دریافت وضعیت از اندپوینت /api/setup/status...</div>';

      try {
        var r = await fetch('/api/setup/status');
        var data = await r.json();

        if (data.success && data.status) {
          var s = data.status;
          var kvBadge = s.kvBound ? '<span style="color:var(--accent-green);">🟢 متصل و فعال</span>' : '<span style="color:var(--accent-rose);">🔴 متصل نیست</span>';
          var d1Badge = s.d1Bound ? '<span style="color:var(--accent-green);">🟢 متصل (D1 Binding OK)</span>' : '<span style="color:var(--accent-rose);">🔴 متصل نیست</span>';
          var passBadge = s.adminPasswordSet ? '<span style="color:var(--accent-green);">🟢 تنظیم‌شده</span>' : '<span style="color:var(--accent-amber);">⚠️ بدون رمز</span>';

          body.innerHTML = 
            '<div style="display:flex; flex-direction:column; gap:12px; font-size:0.85rem;">' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>🌐 آدرس دامنه ورکر جاری:</span>' +
                '<code style="font-size:0.8rem; color:var(--accent-blue);">' + (data.workerUrl || window.location.origin) + '</code>' +
              '</div>' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>⚡ فضای حافظه Cloudflare KV:</span>' + kvBadge +
              '</div>' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>🗄️ پایگاه داده Cloudflare D1:</span>' + d1Badge +
              '</div>' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>🔑 کلید مستر ادمین (ADMIN_PASSWORD):</span>' + passBadge +
              '</div>' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>📱 شناسه کلاینت رسمی تلگرام (API_ID):</span>' + (s.apiIdSet ? '<span style="color:var(--accent-green);">🟢 استاندارد (2040)</span>' : '⚪ پیش‌فرض') +
              '</div>' +
              '<div style="margin-top:10px; text-align:center;">' +
                '<button class="btn-tool primary" onclick="closeStatusModal()" style="width:100%; justify-content:center;">تایید و بازگشت به ویزارد</button>' +
              '</div>' +
            '</div>';
        } else {
          body.innerHTML = '<div style="color:var(--accent-rose); padding:16px;">خطا در دریافت وضعیت سرور.</div>';
        }
      } catch (err) {
        body.innerHTML = '<div style="color:var(--accent-rose); padding:16px;">عدم دسترسی به سرور: ' + err.message + '</div>';
      }
    }

    function closeStatusModal() {
      document.getElementById('statusModal').classList.add('hidden');
    }

    // تم روشن و تاریک
    function toggleTheme() {
      var cur = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('arizo_theme', next);
      updateThemeDisplay(next);
    }

    function updateThemeDisplay(t) {
      var icon = document.getElementById('themeIcon');
      var text = document.getElementById('themeText');
      if (icon) icon.textContent = t === 'dark' ? '☀️' : '🌙';
      if (text) text.textContent = t === 'dark' ? 'حالت روز' : 'حالت شب';
    }

    // اولیه سازی
    document.addEventListener('DOMContentLoaded', function() {
      var savedTheme = localStorage.getItem('arizo_theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeDisplay(savedTheme);
      generateWranglerToml();
    });
  </script>
</body>
</html>
`;
}
