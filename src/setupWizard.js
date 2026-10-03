/**
 * Arizo Self - Interactive Web Setup Wizard
 * راهنمای گرافیکی، فوق‌پویا، گام‌به‌گام و تعاملی راه‌اندازی سلف‌بات برای استفاده شخصی
 * نسخه v3.6.0 PRO
 */

export function setupWizardHTML(env = {}, url = {}) {
  const origin = url.origin || '';
  const currentWorkerUrl = origin || 'https://your-worker-subdomain.workers.dev';

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <title>🚀 ویزارد راه‌اندازی هوشمند و گام‌به‌گام | Arizo Self v3.6.0 PRO</title>
  <meta name="description" content="راهنمای تعاملی و خودکار راه‌اندازی اختصاصی و رایگان سلف‌بات تلگرام Arizo Self روی کلادفلر و گیت‌هاب اکشنز">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Vazirmatn:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3E%3Cdefs%3E%3ClinearGradient%20id='bg'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3E%3Cstop%20offset='0%25'%20stop-color='%230f172a'/%3E%3Cstop%20offset='50%25'%20stop-color='%231e1b4b'/%3E%3Cstop%20offset='100%25'%20stop-color='%23090d16'/%3E%3C/linearGradient%3E%3ClinearGradient%20id='neon'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3E%3Cstop%20offset='0%25'%20stop-color='%2338bdf8'/%3E%3Cstop%20offset='50%25'%20stop-color='%23818cf8'/%3E%3Cstop%20offset='100%25'%20stop-color='%23c084fc'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width='64'%20height='64'%20rx='16'%20fill='url(%23bg)'/%3E%3Crect%20x='2'%20y='2'%20width='60'%20height='60'%20rx='14'%20fill='none'%20stroke='url(%23neon)'%20stroke-width='2'%20opacity='0.6'/%3E%3Cpath%20d='M35%208%20L18%2034%20L31%2034%20L27%2056%20L46%2028%20L33%2028%20Z'%20fill='url(%23neon)'/%3E%3C/svg%3E">
  <link rel="alternate icon" href="/favicon.ico">
  <script>
    (function() {
      try {
        var savedTheme = localStorage.getItem('arizo_wizard_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        var savedLang = localStorage.getItem('arizo_lang') || 'fa';
        document.documentElement.setAttribute('lang', savedLang);
        document.documentElement.setAttribute('dir', savedLang === 'en' ? 'ltr' : 'rtl');
      } catch(e) {}
    })();
  </script>

  <style>
    :root {
      --font-main: 'Vazirmatn', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', Consolas, monospace;
      
      --bg-gradient: radial-gradient(circle at 15% 20%, rgba(30, 27, 75, 0.45) 0%, transparent 40%),
                     radial-gradient(circle at 85% 75%, rgba(67, 56, 202, 0.35) 0%, transparent 45%),
                     #09090b;
      --surface-card: rgba(18, 18, 26, 0.78);
      --surface-card-subtle: rgba(25, 25, 36, 0.65);
      --surface-border: rgba(255, 255, 255, 0.08);
      --surface-border-hover: rgba(129, 140, 248, 0.45);

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
      --input-bg: rgba(0, 0, 0, 0.4);
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 20px;
      --shadow-glow: 0 10px 30px -10px rgba(99, 102, 241, 0.25);
    }

    [data-theme="light"] {
      --bg-gradient: radial-gradient(circle at 15% 20%, rgba(224, 231, 255, 0.55) 0%, transparent 40%),
                     radial-gradient(circle at 85% 75%, rgba(219, 234, 254, 0.55) 0%, transparent 45%),
                     #f8fafc;
      --surface-card: rgba(255, 255, 255, 0.94);
      --surface-card-subtle: rgba(241, 245, 249, 0.88);
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
      --input-bg: rgba(255, 255, 255, 0.98);
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
      padding: 18px 16px 60px;
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
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
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
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.35rem;
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
      gap: 8px;
      flex-wrap: wrap;
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
      padding: 18px 22px;
      margin-bottom: 22px;
      box-shadow: var(--shadow-glow);
    }

    .progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-muted);
    }

    .progress-bar-wrap {
      width: 100%;
      height: 7px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 999px;
      margin-bottom: 18px;
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
      padding: 8px 6px;
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
      font-size: 0.92rem;
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
        font-size: 0.65rem;
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
      padding: 28px 24px;
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
      margin-bottom: 22px;
      line-height: 1.6;
    }

    /* Sub-cards & Grids */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 22px;
    }

    .sub-card {
      background: var(--surface-card-subtle);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-md);
      padding: 16px 18px;
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

        html[lang="en"] body {
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    html[dir="ltr"] .code-box-header {
      direction: ltr;
    }
    html[dir="ltr"] .nav-tools {
      direction: ltr;
    }
    html[dir="ltr"] .brand-wrap {
      direction: ltr;
    }
    html[dir="ltr"] .card-title,
    html[dir="ltr"] .card-subtitle,
    html[dir="ltr"] .tool-box-title,
    html[dir="ltr"] .sub-card-title,
    html[dir="ltr"] .sub-card-desc,
    html[dir="ltr"] .checklist-item {
      text-align: left;
      direction: ltr;
    }

    /* Code block & Terminal */
    .code-box {
      background: var(--code-bg);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-md);
      padding: 12px 16px;
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
      direction: rtl;
    }

    .code-box-lang {
      font-size: 0.72rem;
      color: var(--accent-indigo);
      font-weight: 700;
      direction: ltr;
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
      padding: 18px 20px;
      margin: 18px 0;
    }

    .tool-box-title {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--accent-indigo);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }

    .form-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin-bottom: 12px;
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
      transition: border-color 0.2s, box-shadow 0.2s;
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
      padding-top: 18px;
      border-top: 1px solid var(--surface-border);
    }

    .btn-step {
      padding: 11px 22px;
      border-radius: var(--radius-md);
      font-family: inherit;
      font-size: 0.88rem;
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
      width: 22px;
      height: 22px;
      border-radius: 6px;
      border: 2px solid var(--text-dim);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
      flex-shrink: 0;
      transition: all 0.2s;
      font-weight: 800;
      font-size: 0.85rem;
    }

    .checklist-item.checked .custom-checkbox {
      background: var(--accent-green);
      border-color: var(--accent-green);
      color: #fff;
    }

    /* Tab Switcher for Commands */
    .cmd-tabs {
      display: flex;
      gap: 6px;
      margin-bottom: 8px;
    }

    .cmd-tab-btn {
      background: var(--surface-card-subtle);
      border: 1px solid var(--surface-border);
      color: var(--text-muted);
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.74rem;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s;
    }

    .cmd-tab-btn.active {
      background: var(--accent-indigo);
      color: #fff;
      border-color: var(--accent-indigo);
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
      display: flex;
      align-items: center;
      gap: 8px;
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
      max-width: 620px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .modal-header {
      padding: 16px 20px;
      border-bottom: 1px solid var(--surface-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-body {
      padding: 20px;
      max-height: 72vh;
      overflow-y: auto;
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      display: inline-block;
      box-shadow: 0 0 8px #10b981;
      animation: pulse 1.8s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
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
            <span class="brand-badge">WIZARD v3.6.0 PRO</span>
          </h1>
          <div class="brand-desc" data-i18n="brandDesc">ویزارد هوشمند و تعاملی ستاپ شخصی از گیت‌هاب</div>
        </div>
      </a>

      <div class="nav-tools">
        <button class="btn-tool" onclick="checkLiveServerStatus()" title="بررسی زنده سلامت دیتابیس و سرویس">
          <span class="pulse-dot"></span>
          <span data-i18n="checkHealthBtn">بررسی سلامت سرور</span>
        </button>

        <button class="btn-tool" onclick="openSecretsExporterModal()" title="خروجی یکجای سکرت‌های رانر">
          <span>📦</span>
          <span data-i18n="exportSecretsBtn">خروجی سکرت‌ها</span>
        </button>

        <button class="btn-tool" onclick="toggleLanguage()" title="Switch Language / تغییر زبان" id="langToggleBtn">
          <span>🌐</span>
          <span id="langText">English</span>
        </button>

        <button class="btn-tool" onclick="toggleTheme()" title="تغییر تم روز و شب" id="themeBtn">
          <span id="themeIcon">☀️</span>
          <span id="themeText">حالت روز</span>
        </button>

        <a href="/admin" class="btn-tool" style="border-color:var(--accent-amber-border); color:var(--accent-amber); background:var(--accent-amber-bg);" title="ورود مستقیم به پنل مدیریت">
          <span data-i18n="adminPortalBtn">👑 پنل مدیریت</span>
        </a>

        <a href="/" class="btn-tool primary" title="ورود به پنل استودیو سلف‌بات">
          <span data-i18n="studioBtn">🚪 استودیو</span>
        </a>
      </div>
    </header>

    <!-- کارت استپر و نوار درصد پیشرفت -->
    <div class="stepper-card">
      <div class="progress-header">
        <span id="progressStepTitle">مرحله ۱ از ۵: گیت‌هاب و نیازمندی‌ها</span>
        <span id="progressPctText">۲۰٪ تکمیل شده</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" id="progressBar"></div>
      </div>

      <div class="steps-nav">
        <div class="step-item active" onclick="goToStep(1)" id="stepTab1">
          <div class="step-circle" id="circle1">۱</div>
          <div class="step-label" data-i18n="step1Label">گیت‌هاب و فورک</div>
        </div>
        <div class="step-item" onclick="goToStep(2)" id="stepTab2">
          <div class="step-circle" id="circle2">۲</div>
          <div class="step-label" data-i18n="step2Label">کلادفلر و D1</div>
        </div>
        <div class="step-item" onclick="goToStep(3)" id="stepTab3">
          <div class="step-circle" id="circle3">۳</div>
          <div class="step-label" data-i18n="step3Label">تلگرام و ربات</div>
        </div>
        <div class="step-item" onclick="goToStep(4)" id="stepTab4">
          <div class="step-circle" id="circle4">۴</div>
          <div class="step-label" data-i18n="step4Label">رانر Actions</div>
        </div>
        <div class="step-item" onclick="goToStep(5)" id="stepTab5">
          <div class="step-circle" id="circle5">۵</div>
          <div class="step-label" data-i18n="step5Label">ورود و تست</div>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- مرحله ۱: فورک و پیش‌نیازها -->
    <!-- ========================================== -->
    <div class="step-pane active" id="stepPane1">
      <div class="content-card">
        <div class="card-title">
          <span>📥 مرحله اول: انشعاب پروژه در گیت‌هاب (Fork) و دانلود سورس</span>
        </div>
        <div class="card-subtitle">
          یک نسخه مستقل از پروژه را در اکانت گیت‌هاب خود فورک کنید. با وارد کردن نام کاربری گیت‌هاب در کادر زیر، تمام آدرس‌ها و دستورات به نام شما شخصی‌سازی خواهند شد!
        </div>

        <!-- ابزار تعاملی: بایندر یوزرنیم گیت‌هاب کاربر -->
        <div class="tool-box" style="margin-top: 0;">
          <div class="tool-box-title">
            <span>👤 نام کاربری شما در GitHub (شخصی‌سازی خودکار همه لینک‌ها و دستورات)</span>
            <span id="ghUserBadge" style="font-size:0.75rem; color:var(--text-dim);">هنوز وارد نشده</span>
          </div>
          <div class="form-row" style="margin-bottom: 6px;">
            <div class="form-group" style="flex:1;">
              <input type="text" id="cfgGhUser" class="input-text" placeholder="مثال: AmirHossein یا your-github-username" oninput="handleGhUserChange()">
            </div>
            <div style="display:flex; align-items:flex-end;">
              <a href="https://github.com/ArizoOwner/arizo-telegram-self-manager/fork" target="_blank" class="btn-step next" style="padding:10px 16px; font-size:0.82rem; text-decoration:none;">
                <span>🍴 فورک مستقیم در گیت‌هاب</span>
                <span>↗️</span>
              </a>
            </div>
          </div>
          <div style="font-size:0.75rem; color:var(--text-dim);">
            💡 با وارد کردن یوزرنیم، لینک‌های ریپازیتوری، آدرس تنظیم سکرت‌ها و دستورات کلون به طور خودکار بروز می‌شوند.
          </div>
        </div>

        <div class="cards-grid">
          <div class="sub-card">
            <div class="sub-card-title">
              <span>🍴 ریپازیتوری رسمی پروژه</span>
            </div>
            <div class="sub-card-desc">
              سورس اصلی سلف‌بات روی گیت‌هاب قرار دارد. برای شروع روی دکمه زیر بزنید و در صفحه گیت‌هاب، دکمه <strong>Fork</strong> را بفشارید:
            </div>
            <div style="margin-top: 4px;">
              <a href="https://github.com/ArizoOwner/arizo-telegram-self-manager" target="_blank" class="btn-tool primary" style="width:100%; justify-content:center;">
                <span>🔗 مشاهده ریپوی مرجع گیت‌هاب</span>
              </a>
            </div>
          </div>

          <div class="sub-card">
            <div class="sub-card-title">
              <span>💻 پیش‌نیازهای نرم‌افزاری ساده</span>
            </div>
            <div class="sub-card-desc">
              تنها ابزارهای مورد نیاز برای استفاده:
              <ul style="margin: 6px 16px; font-size: 0.8rem; line-height: 1.8;">
                <li>نصب بودن <strong>Node.js 18 یا بالاتر</strong> روی سیستم</li>
                <li>یک حساب کاربری رایگان در <strong>Cloudflare</strong></li>
                <li>یک اکانت رایگان در <strong>GitHub</strong> برای رانر دائمی</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- تب دستورات کلون متناسب با سیستم‌عامل -->
        <div style="margin-top: 14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <div style="font-weight:700; font-size:0.92rem;">⌨️ دریافت سورس و نصب پکیج‌ها:</div>
            <div class="cmd-tabs">
              <button class="cmd-tab-btn active" id="tabPs" onclick="switchCmdTab('ps')">PowerShell (ویندوز)</button>
              <button class="cmd-tab-btn" id="tabBash" onclick="switchCmdTab('bash')">Bash (مک و لینوکس)</button>
            </div>
          </div>

          <div class="code-box">
            <div class="code-box-header">
              <span class="code-box-lang" id="cmdLangBadge">POWERSHELL</span>
              <button class="btn-copy-code" onclick="copyCurrentCloneCmd()">📋 کپی کامل دستور</button>
            </div>
            <code id="cloneCmdDisplay">git clone https://github.com/YOUR_USERNAME/arizo-telegram-self-manager.git; cd arizo-telegram-self-manager; npm install</code>
          </div>
        </div>

        <div class="wizard-actions">
          <div></div>
          <button class="btn-step next" onclick="goToStep(2)">
            <span>مرحله بعد: کلادفلر و پایگاه داده D1</span>
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
          <span>⛅ مرحله دوم: پایگاه داده SQLite ابری (D1) و حافظه کلادفلر (KV)</span>
        </div>
        <div class="card-subtitle">
          پروژه Arizo Self از معماری پیشرفته هیبریدی D1 + KV با سقف ۱۰۰,۰۰۰ رایت رایگان در روز استفاده می‌کند.
        </div>

        <!-- ابزار فوق‌العاده کاربردی: استخراج خودکار شناسه‌ها از خروجی ترمینال -->
        <div class="tool-box" style="border-color:var(--accent-amber-border); background:var(--accent-amber-bg); margin-top:0;">
          <div class="tool-box-title" style="color:var(--accent-amber);">
            <span>🪄 استخراج جادویی شناسه‌ها از لاگ ترمینال (بدون نیاز به پیدا کردن دستی UUID!)</span>
          </div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">
            وقتی دستورات ساخت D1 یا KV را اجرا کردید، کل خروجی چاپ شده در ترمینال را در کادر زیر پیست کنید تا سیستم شناسه‌ها را به صورت خودکار تشخیص داده و فیلدها را پر کند:
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <textarea id="terminalLogPasteBox" rows="2" placeholder="متن خروجی ترمینال را اینجا Paste کنید..." style="width:100%; background:var(--input-bg); border:1px solid var(--surface-border); border-radius:var(--radius-sm); color:var(--text-main); font-family:var(--font-mono); font-size:0.8rem; padding:8px 10px; outline:none; resize:vertical;" oninput="handleTerminalLogPaste()"></textarea>
            <div id="parseResultMsg" style="font-size:0.75rem; color:var(--accent-green); display:none; font-weight:700;"></div>
          </div>
        </div>

        <div class="cards-grid">
          <div class="sub-card">
            <div class="sub-card-title">
              <span>🗄️ ۱. ساخت پایگاه داده D1</span>
            </div>
            <div class="sub-card-desc">
              این دستور را در ترمینال پوشه پروژه اجرا کنید:
            </div>
            <div class="code-box" style="margin: 6px 0;">
              <div class="code-box-header">
                <span class="code-box-lang">D1 CREATE</span>
                <button class="btn-copy-code" onclick="copySnippet('npx wrangler d1 create arizo_db')">کپی</button>
              </div>
              <code>npx wrangler d1 create arizo_db</code>
            </div>
            <div class="sub-card-desc" style="font-size: 0.74rem; color: var(--accent-amber);">
              💡 شناسه تولیدشده (database_id) را در فیلد زیر وارد یا پیست کنید.
            </div>
          </div>

          <div class="sub-card">
            <div class="sub-card-title">
              <span>⚡ ۲. ساخت حافظه کش KV</span>
            </div>
            <div class="sub-card-desc">
              این دستور را در ترمینال اجرا کنید:
            </div>
            <div class="code-box" style="margin: 6px 0;">
              <div class="code-box-header">
                <span class="code-box-lang">KV CREATE</span>
                <button class="btn-copy-code" onclick="copySnippet('npx wrangler kv:namespace create KV')">کپی</button>
              </div>
              <code>npx wrangler kv:namespace create KV</code>
            </div>
            <div class="sub-card-desc" style="font-size: 0.74rem; color: var(--accent-blue);">
              💡 شناسه تولیدشده (id) را در فیلد زیر وارد یا پیست کنید.
            </div>
          </div>
        </div>

        <!-- ابزار تعاملی: تولید خودکار و دانلود فایل wrangler.toml -->
        <div class="tool-box">
          <div class="tool-box-title">
            <span>⚙️ تولیدکننده زنده و دانلود مستقیم فایل <code>wrangler.toml</code></span>
            <div style="display:flex; gap:6px;">
              <button type="button" class="btn-tool" onclick="downloadWranglerFile()" style="font-size:0.75rem; padding:5px 10px; background:var(--accent-blue-bg); border-color:var(--accent-blue-border); color:var(--accent-blue);">
                <span>📥 دانلود مستقیم فایل wrangler.toml</span>
              </button>
              <button type="button" class="btn-tool" onclick="initD1DatabaseOnline()" id="btnInitD1Online" style="font-size:0.75rem; padding:5px 10px; background:var(--accent-green-bg); border-color:var(--accent-green-border); color:var(--accent-green);">
                <span>⚡ ساخت خودکار جداول D1</span>
              </button>
            </div>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">
            اطلاعات را وارد کنید؛ پیش‌نمایش به صورت بلادرنگ بروزرسانی شده و می‌توانید فایل آماده را مستقیماً دانلود کنید:
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">نام ورکر (Worker Name)</label>
              <input type="text" id="cfgWorkerName" class="input-text" value="my-arizo-self" oninput="handleConfigChange()">
            </div>
            <div class="form-group">
              <label class="form-label">شناسه KV Namespace (KV ID)</label>
              <input type="text" id="cfgKvId" class="input-text" placeholder="مثال: b56bacf321a54731ba4a1e69a5619898" oninput="handleConfigChange()">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">شناسه پایگاه داده D1 (Database ID)</label>
              <input type="text" id="cfgD1Id" class="input-text" placeholder="مثال: 4edef38a-95d4-4459-a904-5248a8952363" oninput="handleConfigChange()">
            </div>
            <div class="form-group">
              <label class="form-label">
                <span>رمز عبور مدیریت (Admin Master Password)</span>
                <button type="button" onclick="generateRandomPass()" style="background:none; border:none; color:var(--accent-indigo); font-size:0.75rem; cursor:pointer; font-weight:700;">🎲 تولید تصادفی</button>
              </label>
              <input type="text" id="cfgAdminPass" class="input-text" value="secret_master_key_2026" oninput="handleConfigChange()">
            </div>
          </div>

          <div class="code-box" id="wranglerPreviewBox">
            <div class="code-box-header">
              <span class="code-box-lang">wrangler.toml (خروجی آماده دیپلوی)</span>
              <div style="display:flex; gap:6px;">
                <button class="btn-copy-code" onclick="downloadWranglerFile()">📥 دانلود فایل</button>
                <button class="btn-copy-code" onclick="copyWranglerToml()">📋 کپی کامل</button>
              </div>
            </div>
            <pre id="wranglerOutputCode" style="margin:0; font-family:var(--font-mono); white-space:pre-wrap;"></pre>
          </div>
        </div>

        <div style="font-weight: 700; font-size: 0.92rem; margin-bottom: 6px;">
          🚀 دستور دیپلوی به کلادفلر:
        </div>
        <div class="code-box">
          <div class="code-box-header">
            <span class="code-box-lang">DEPLOY COMMAND</span>
            <button class="btn-copy-code" onclick="copySnippet('npx wrangler deploy')">📋 کپی دستور</button>
          </div>
          <code>npx wrangler deploy</code>
        </div>

        <div class="wizard-actions">
          <button class="btn-step prev" onclick="goToStep(1)">
            <span>➡️ مرحله قبل</span>
          </button>
          <button class="btn-step next" onclick="goToStep(3)">
            <span>مرحله بعد: کلیدهای تلگرام و ربات کمکی</span>
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
          <span>📱 مرحله سوم: اتصال کلاینت رسمی تلگرام و ساخت ربات کمکی</span>
        </div>
        <div class="card-subtitle">
          ربات کمکی اختصاصی برای ارسال پیام‌های پاک‌شده، پیام‌های زمان‌دار قبل از انقضا و کدهای ورود به پیوی شما استفاده می‌شود.
        </div>

        <div class="cards-grid">
          <div class="sub-card">
            <div class="sub-card-title">
              <span>🔑 ۱. شناسه و هش رسمی تلگرام</span>
            </div>
            <div class="sub-card-desc">
              این مقادیر شناسه کلاینت رسمی تلگرام دسکتاپ هستند و سیستم به طور پیش‌فرض از آن‌ها استفاده می‌کند (نیازی به تغییر ندارید):
            </div>
            <div class="code-box" style="margin: 6px 0; font-size: 0.78rem;">
              API_ID = "2040"<br>
              API_HASH = "b18441a1ff607e10a989891a5462e627"
            </div>
            <div class="sub-card-desc" style="font-size: 0.74rem;">
              در صورت تمایل به دریافت کلید شخصی می‌توانید به سایت رسمی <a href="https://my.telegram.org" target="_blank" style="color:var(--accent-blue);">my.telegram.org</a> مراجعه کنید.
            </div>
          </div>

          <div class="sub-card">
            <div class="sub-card-title">
              <span>🤖 ۲. ایجاد ربات در BotFather تلگرام</span>
            </div>
            <div class="sub-card-desc">
              یک ربات اختصاصی و رایگان برای خود بسازید:
              <ol style="margin: 6px 16px; font-size: 0.8rem; line-height: 1.8;">
                <li>در تلگرام وارد آیدی <a href="https://t.me/BotFather" target="_blank" style="color:var(--accent-blue); font-weight:700;">@BotFather</a> شوید.</li>
                <li>دستور <code>/newbot</code> را بفرستید.</li>
                <li>یک نام و یک یوزرنیم دلخواه (که به bot ختم شود) برگزینید.</li>
                <li>توکن تلگرام داده‌شده را کپی و در کادر زیر وارد کنید.</li>
              </ol>
            </div>
            <div style="margin-top: 4px;">
              <a href="https://t.me/BotFather?start=newbot" target="_blank" class="btn-tool primary" style="width:100%; justify-content:center;">
                <span>🤖 باز کردن ربات‌فادر در تلگرام</span>
              </a>
            </div>
          </div>
        </div>

        <!-- ابزار تعاملی: تست آنلاین توکن ربات -->
        <div class="tool-box">
          <div class="tool-box-title">
            <span>🔍 تستر و اعتبارسنجی آنلاین توکن ربات تلگرام</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px;">
            توکن ربات خود را اینجا وارد کنید تا سیستم از طریق ارتباط مستقیم با API تلگرام صحت آن را تایید کند:
          </div>

          <div style="display:flex; flex-wrap:wrap; gap:10px;">
            <input type="text" id="botTokenInput" class="input-text" placeholder="123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ..." style="flex:1; min-width:240px;" oninput="handleBotTokenInput()">
            <button class="btn-tool primary" id="testBotBtn" onclick="testBotTokenOnline()">
              <span>🚀 تست آنلاین توکن</span>
            </button>
          </div>

          <div id="botTestResult" style="margin-top:14px; display:none;"></div>

          <!-- فیلد تست ارسال پیام تست -->
          <div id="botMessageTestSection" style="margin-top:14px; padding-top:14px; border-top:1px dashed var(--surface-border); display:none;">
            <div style="font-size:0.8rem; font-weight:700; margin-bottom:8px; color:var(--text-main);">
              💬 ارسال پیام تست به پیوی شما از طریق این ربات:
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              <input type="text" id="testChatIdInput" class="input-text" placeholder="شناسه عددی چت شما (Chat ID عددی)" style="flex:1; min-width:200px;">
              <button class="btn-tool" onclick="sendTestBotMessage()" id="btnSendTestMsg" style="background:var(--accent-purple-bg); border-color:var(--accent-purple-border); color:var(--accent-purple);">
                <span>📩 ارسال پیام تست</span>
              </button>
            </div>
            <div id="testMsgResult" style="font-size:0.75rem; margin-top:6px; display:none;"></div>
          </div>
        </div>

        <div class="wizard-actions">
          <button class="btn-step prev" onclick="goToStep(2)">
            <span>➡️ مرحله قبل</span>
          </button>
          <button class="btn-step next" onclick="goToStep(4)">
            <span>مرحله بعد: رانر ۲۴ ساعته GitHub Actions</span>
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
          گیت‌هاب اکشنز ساعت زنده، بیوگرافی هوشمند و پایش ۲۴ ساعته را بدون قطعی و کاملاً رایگان روی سرورهای ابری گیت‌هاب روشن نگه می‌دارد.
        </div>

        <div class="sub-card" style="margin-bottom: 18px;">
          <div class="sub-card-title">
            <span>🛡️ مسیر ثبت سکرت‌ها در گیت‌هاب (Repository Secrets)</span>
            <a id="btnDirectSecretsLink" href="#" target="_blank" class="btn-tool primary" style="font-size:0.75rem; padding:4px 10px; margin-right:auto;">
              <span>🔗 رفتن مستقیم به صفحه Secrets ریپازیتوری شما</span>
              <span>↗️</span>
            </a>
          </div>
          <div class="sub-card-desc">
            در ریپازیتوری خود وارد مسیر زیر شوید و چهار متغیر زیر را ثبت نمایید:
            <div style="margin: 6px 0; font-weight:700; color:var(--accent-purple); font-size:0.82rem;">
              Settings ➔ Secrets and variables ➔ Actions ➔ New repository secret
            </div>
          </div>
        </div>

        <!-- جدول سکرت‌های مورد نیاز با دکمه کپی اختصاصی و وضعیت -->
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:0.84rem; text-align:right; margin-bottom:18px;">
            <thead>
              <tr style="border-bottom:1px solid var(--surface-border); color:var(--text-dim);">
                <th style="padding:10px;">نام Secret در گیت‌هاب</th>
                <th style="padding:10px;">مقدار شما</th>
                <th style="padding:10px; text-align:center;">عملیات کپی نام</th>
                <th style="padding:10px; text-align:center;">عملیات کپی مقدار</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                <td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-blue);">CLOUDFLARE_URL</td>
                <td style="padding:10px; font-family:var(--font-mono); color:var(--text-muted);" id="valSecCloudflareUrl">${currentWorkerUrl}</td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('CLOUDFLARE_URL', 'نام سکرت کپی شد')">کپی نام</button>
                </td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySecretVal('cfUrl')">کپی مقدار</button>
                </td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                <td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-purple);">RUNNER_SECRET</td>
                <td style="padding:10px; font-family:var(--font-mono); color:var(--text-muted);" id="valSecRunnerSecret">secret_master_key_2026</td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('RUNNER_SECRET', 'نام سکرت کپی شد')">کپی نام</button>
                </td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySecretVal('runnerSec')">کپی مقدار</button>
                </td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                <td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-indigo);">API_ID</td>
                <td style="padding:10px; font-family:var(--font-mono); color:var(--text-muted);">2040</td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('API_ID', 'نام سکرت کپی شد')">کپی نام</button>
                </td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('2040', 'مقدار 2040 کپی شد')">کپی مقدار</button>
                </td>
              </tr>
              <tr>
                <td style="padding:10px; font-family:var(--font-mono); font-weight:700; color:var(--accent-indigo);">API_HASH</td>
                <td style="padding:10px; font-family:var(--font-mono); color:var(--text-muted);">b18441a1ff607e10a989891a5462e627</td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('API_HASH', 'نام سکرت کپی شد')">کپی نام</button>
                </td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn-copy-code" onclick="copySnippet('b18441a1ff607e10a989891a5462e627', 'مقدار API_HASH کپی شد')">کپی مقدار</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sub-card">
          <div class="sub-card-title">
            <span>▶️ استارت گردش کار رانر (Run Workflow)</span>
            <a id="btnDirectActionsLink" href="#" target="_blank" class="btn-tool primary" style="font-size:0.75rem; padding:4px 10px; margin-right:auto;">
              <span>🚀 رفتن به صفحه Actions ریپازیتوری شما</span>
              <span>↗️</span>
            </a>
          </div>
          <div class="sub-card-desc">
            در صفحه گیت‌هاب ریپوی خود، به تب <strong>Actions</strong> بروید ➔ گردش‌کار <strong>⚡ Telegram Clock Engine</strong> را انتخاب کنید ➔ دکمه <strong>Run workflow</strong> را بزنید!
            <div style="font-size:0.78rem; color:var(--accent-green); margin-top:8px; font-weight:700;">
              🟢 رانر ابری فعال شده و هر ۴ ساعت به‌صورت خودکار چرخه اجرای خود را تمدید می‌کند.
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
          <span>🎉 مرحله پنجم: چک‌لیست نهایی، بررسی سلامت و اتصال تلگرام</span>
        </div>
        <div class="card-subtitle">
          تبریک! تمام اجزای سیستم پیکربندی شدند. اکنون می‌توانید سلامت سیستم را چک کرده، نسخه پشتیبان دانلود کنید و وارد پنل شوید.
        </div>

        <!-- چک‌لیست هوشمند آمادگی نهایی -->
        <div style="margin-bottom: 22px;">
          <div style="font-weight:800; font-size:1rem; margin-bottom:12px; display:flex; align-items:center; justify-content:space-between;">
            <span>📋 چک‌لیست آمادگی نهایی:</span>
            <span style="font-size:0.75rem; color:var(--text-dim);">روی هر مورد کلیک کنید تا تیک بخورد</span>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)" id="chkItem1">
            <div class="custom-checkbox">✓</div>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">انشعاب پروژه (Fork) در حساب شخصی گیت‌هاب</div>
              <div style="font-size:0.75rem; color:var(--text-muted);" id="chkDesc1">پروژه در ریپازیتوری شخصی شما کلون و آماده شد.</div>
            </div>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)" id="chkItem2">
            <div class="custom-checkbox">✓</div>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">کلادفلر ورکر و دیتابیس D1 ساخته و مستقر شد</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">پایگاه داده SQLite ابری با سقف ۱۰۰ هزار رایت رایگان در روز راه‌اندازی شد.</div>
            </div>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)" id="chkItem3">
            <div class="custom-checkbox">✓</div>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">ربات کمکی در BotFather ایجاد و اعتبارسنجی شد</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">توکن ربات تایید شده و آماده دریافت پیام‌هاست.</div>
            </div>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)" id="chkItem4">
            <div class="custom-checkbox">✓</div>
            <div>
              <div style="font-weight:700; font-size:0.85rem;">سکرت‌های گیت‌هاب اکشنز ست و رانر استارت شد</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">آدرس ورکر و رمز رانر در Secrets ثبت شدند.</div>
            </div>
          </div>
        </div>

        <div class="cards-grid">
          <div class="sub-card" style="border-color:var(--accent-amber-border); background:var(--accent-amber-bg);">
            <div class="sub-card-title" style="color:var(--accent-amber);">
              <span>👑 ورود مدیر کل به پنل مدیریت</span>
            </div>
            <div class="sub-card-desc">
              وارد روت <code>/admin</code> شده و رمز عبوری که در <code>wrangler.toml</code> تنظیم کردید را بزنید تا به انبار لایسنس، تله‌متری و ارتقای کاربران دسترسی یابید.
            </div>
            <div style="margin-top:auto;">
              <a href="/admin" class="btn-tool" style="width:100%; justify-content:center; background:var(--accent-amber); color:#000; font-weight:800; border:none;">
                <span>ورود به پنل مدیریت (/admin)</span>
              </a>
            </div>
          </div>

          <div class="sub-card" style="border-color:var(--accent-green-border); background:var(--accent-green-bg);">
            <div class="sub-card-title" style="color:var(--accent-green);">
              <span>📱 اتصال اکانت تلگرام به سلف‌بات</span>
            </div>
            <div class="sub-card-desc">
              در داشبورد کاربری، روی <strong>اسکن QR تلگرام</strong> بزنید و از تلگرام گوشی در مسیر <code>Settings > Devices > Link Desktop</code> کد را اسکن نمایید.
            </div>
            <div style="margin-top:auto;">
              <a href="/" class="btn-tool" style="width:100%; justify-content:center; background:var(--accent-green); color:#fff; font-weight:800; border:none;">
                <span>ورود به داشبورد کاربری استودیو</span>
              </a>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:10px; margin-top:14px; flex-wrap:wrap;">
          <button type="button" class="btn-tool" onclick="downloadBackupConfig()" style="font-size:0.8rem;">
            <span>💾 دانلود پکیج پیکربندی (JSON Backup)</span>
          </button>
          <button type="button" class="btn-tool" onclick="checkLiveServerStatus()" style="font-size:0.8rem;">
            <span>🩺 عیب‌یابی و اسکن اتصالات ورکر</span>
          </button>
        </div>

        <div class="wizard-actions">
          <button class="btn-step prev" onclick="goToStep(4)">
            <span>➡️ مرحله قبل</span>
          </button>
          <a href="/" class="btn-step finish">
            <span>🚀 ورود به استودیو و پایان راه‌اندازی</span>
          </a>
        </div>
      </div>
    </div>

  </div>

  <!-- مودال عیب‌یابی و بررسی زنده سلامت سرور -->
  <div id="statusModal" class="modal-backdrop hidden" onclick="if(event.target===this) closeStatusModal();">
    <div class="modal-card">
      <div class="modal-header">
        <div style="font-weight:800; font-size:1rem; display:flex; align-items:center; gap:8px;">
          <span>🩺 عیب‌یابی زنده اتصالات و پیکربندی ورکر</span>
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

  <!-- مودال خروجی یکجای سکرت‌های رانر -->
  <div id="secretsModal" class="modal-backdrop hidden" onclick="if(event.target===this) closeSecretsModal();">
    <div class="modal-card">
      <div class="modal-header">
        <div style="font-weight:800; font-size:1rem; display:flex; align-items:center; gap:8px;">
          <span>📦 خروجی یکجای سکرت‌های GitHub Actions</span>
        </div>
        <button class="btn-tool" onclick="closeSecretsModal()" style="padding:4px 10px;">✕</button>
      </div>
      <div class="modal-body">
        <div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:10px;">
          تمامی متغیرهای محیطی با فرمت <code>.env</code> آماده برای کپی یا استفاده مستقیم:
        </div>
        <div class="code-box">
          <div class="code-box-header">
            <span class="code-box-lang">ENV FORMAT</span>
            <button class="btn-copy-code" onclick="copySecretsBulkText()">📋 کپی کل متن</button>
          </div>
          <pre id="secretsBulkDisplay" style="margin:0; font-family:var(--font-mono); white-space:pre-wrap;"></pre>
        </div>
      </div>
    </div>
  </div>

  <!-- اعلان Toast -->
  <div id="wizardToast">پیام سیستم</div>

  <script>
    var currentStep = 1;
    var totalSteps = 5;
    var activeCmdTab = 'ps';

    var wizardState = {
      ghUser: '',
      workerName: 'my-arizo-self',
      workerUrl: window.location.origin || '${currentWorkerUrl}',
      kvId: '',
      d1Id: '',
      adminPass: 'secret_master_key_2026',
      botToken: '',
      theme: 'dark'
    };

    function loadState() {
      try {
        var raw = localStorage.getItem('arizo_wizard_state_v2');
        if (raw) {
          var parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') {
            wizardState = Object.assign(wizardState, parsed);
          }
        }
      } catch (_) {}

      // مقداردهی اولیه به اینپوت‌ها
      if (document.getElementById('cfgGhUser')) document.getElementById('cfgGhUser').value = wizardState.ghUser || '';
      if (document.getElementById('cfgWorkerName')) document.getElementById('cfgWorkerName').value = wizardState.workerName || 'my-arizo-self';
      if (document.getElementById('cfgKvId')) document.getElementById('cfgKvId').value = wizardState.kvId || '';
      if (document.getElementById('cfgD1Id')) document.getElementById('cfgD1Id').value = wizardState.d1Id || '';
      if (document.getElementById('cfgAdminPass')) document.getElementById('cfgAdminPass').value = wizardState.adminPass || 'secret_master_key_2026';
      if (document.getElementById('botTokenInput')) document.getElementById('botTokenInput').value = wizardState.botToken || '';

      updateAllBindings();
    }

    function saveState() {
      try {
        localStorage.setItem('arizo_wizard_state_v2', JSON.stringify(wizardState));
      } catch (_) {}
    }

    function updateAllBindings() {
      var user = (wizardState.ghUser || '').trim();
      var safeUser = user || 'YOUR_USERNAME';

      // بروزرسانی بج و متن‌ها در مرحله ۱
      var badge = document.getElementById('ghUserBadge');
      if (badge) {
        if (user) {
          badge.textContent = '@' + user;
          badge.style.color = 'var(--accent-green)';
        } else {
          badge.textContent = 'هنوز وارد نشده';
          badge.style.color = 'var(--text-dim)';
        }
      }

      // بروزرسانی دستورات کلون
      updateCloneCmdText();

      // بروزرسانی لینک‌های مستقیم سکرت‌ها و اکشنز
      var secretsLink = document.getElementById('btnDirectSecretsLink');
      if (secretsLink) {
        if (user) {
          secretsLink.href = 'https://github.com/' + encodeURIComponent(user) + '/arizo-telegram-self-manager/settings/secrets/actions/new';
          secretsLink.style.display = 'inline-flex';
        } else {
          secretsLink.href = 'https://github.com/ArizoOwner/arizo-telegram-self-manager/settings/secrets/actions/new';
        }
      }

      var actionsLink = document.getElementById('btnDirectActionsLink');
      if (actionsLink) {
        if (user) {
          actionsLink.href = 'https://github.com/' + encodeURIComponent(user) + '/arizo-telegram-self-manager/actions';
          actionsLink.style.display = 'inline-flex';
        } else {
          actionsLink.href = 'https://github.com/ArizoOwner/arizo-telegram-self-manager/actions';
        }
      }

      // بروزرسانی سکرت‌ها در جدول مرحله ۴
      var secCfUrl = document.getElementById('valSecCloudflareUrl');
      if (secCfUrl) secCfUrl.textContent = wizardState.workerUrl || window.location.origin;

      var secRunner = document.getElementById('valSecRunnerSecret');
      if (secRunner) secRunner.textContent = wizardState.adminPass || 'secret_master_key_2026';

      // تولید فایل wrangler.toml
      generateWranglerToml();
      saveState();
    }

    function handleGhUserChange() {
      var val = (document.getElementById('cfgGhUser').value || '').trim();
      // حذف @ احتمالی اول یوزرنیم
      val = val.replace(/^@+/, '');
      wizardState.ghUser = val;
      updateAllBindings();
    }

    function handleConfigChange() {
      wizardState.workerName = (document.getElementById('cfgWorkerName').value || '').trim() || 'my-arizo-self';
      wizardState.kvId = (document.getElementById('cfgKvId').value || '').trim();
      wizardState.d1Id = (document.getElementById('cfgD1Id').value || '').trim();
      wizardState.adminPass = (document.getElementById('cfgAdminPass').value || '').trim() || 'secret_master_key_2026';
      updateAllBindings();
    }

    function handleBotTokenInput() {
      wizardState.botToken = (document.getElementById('botTokenInput').value || '').trim();
      saveState();
    }

    function switchCmdTab(tab) {
      activeCmdTab = tab;
      var btnPs = document.getElementById('tabPs');
      var btnBash = document.getElementById('tabBash');
      var badge = document.getElementById('cmdLangBadge');

      if (tab === 'ps') {
        if (btnPs) btnPs.classList.add('active');
        if (btnBash) btnBash.classList.remove('active');
        if (badge) badge.textContent = 'POWERSHELL';
      } else {
        if (btnBash) btnBash.classList.add('active');
        if (btnPs) btnPs.classList.remove('active');
        if (badge) badge.textContent = 'BASH / LINUX';
      }
      updateCloneCmdText();
    }

    function updateCloneCmdText() {
      var user = (wizardState.ghUser || '').trim() || 'YOUR_USERNAME';
      var repoUrl = 'https://github.com/' + user + '/arizo-telegram-self-manager.git';
      var cmdDisplay = document.getElementById('cloneCmdDisplay');
      if (!cmdDisplay) return;

      if (activeCmdTab === 'ps') {
        cmdDisplay.textContent = 'git clone ' + repoUrl + '; cd arizo-telegram-self-manager; npm install';
      } else {
        cmdDisplay.textContent = 'git clone ' + repoUrl + ' && cd arizo-telegram-self-manager && npm install';
      }
    }

    function copyCurrentCloneCmd() {
      var el = document.getElementById('cloneCmdDisplay');
      if (el) copySnippet(el.textContent, 'دستور دانلود و نصب در حافظه کپی شد! 📋');
    }

    // استخراج هوشمند از لاگ ترمینال (Terminal Parser)
    function handleTerminalLogPaste() {
      var box = document.getElementById('terminalLogPasteBox');
      var text = (box.value || '').trim();
      var msg = document.getElementById('parseResultMsg');
      if (!text) {
        if (msg) msg.style.display = 'none';
        return;
      }

      var extractedCount = 0;
      var extractedItems = [];

      // 1. جستجوی UUID دیتابیس D1 (مانند 4edef38a-95d4-4459-a904-5248a8952363)
      var d1Match = text.match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);
      if (d1Match && d1Match[1]) {
        wizardState.d1Id = d1Match[1];
        document.getElementById('cfgD1Id').value = d1Match[1];
        extractedCount++;
        extractedItems.push('شناسه D1');
      }

      // 2. جستجوی شناسه ۳۲ کاراکتری KV (مانند b56bacf321a54731ba4a1e69a5619898)
      // پرهیز از تکرار همان UUID بدون دش
      var kvMatches = text.match(/([0-9a-f]{32})/gi);
      if (kvMatches && kvMatches.length > 0) {
        var foundKv = kvMatches[0];
        // اگر قبلاً به عنوان D1 ثبت نشده
        if (!wizardState.d1Id || wizardState.d1Id.replace(/-/g, '') !== foundKv) {
          wizardState.kvId = foundKv;
          document.getElementById('cfgKvId').value = foundKv;
          extractedCount++;
          extractedItems.push('شناسه KV');
        }
      }

      if (extractedCount > 0) {
        updateAllBindings();
        if (msg) {
          msg.style.display = 'block';
          msg.textContent = '🎉 ' + extractedItems.join(' و ') + ' با موفقیت استخراج و در فیلدها جایگذاری شد!';
        }
        showToast('اطلاعات با موفقیت از خروجی ترمینال شناسایی شدند! ✨');
      }
    }

    
    // ==========================================
    // 🌐 موتور چندزبانه بومی ویزارد (Wizard Dual-Language Engine)
    // ==========================================
    window.currentLang = localStorage.getItem('arizo_lang') || 'fa';
    window.TRANSLATIONS_MAP = {"⚡ Arizo Self | پلتفرم استودیوی سلف‌بات هوشمند تلگرام و پنل مدیریت":"⚡ Arizo Self | Intelligent Telegram Selfbot Studio & Cloud Management","حالت روز":"Day Mode","حالت شب":"Night Mode","راهنمای امکانات":"Feature Tour","پنل مدیریت":"Admin Portal","کاربر":"User","مرکز فرماندهی و فروشگاه Arizo Self":"Arizo Self Command Center & Store","مرکز فرماندهی و فروشگاه آریزو سلف":"Arizo Self Command Center & Store","بازگشت به پنل کاربران":"Return to User Dashboard","آمار و شاخص‌ها":"Stats & Metrics","صدور و انبار لایسنس":"License Inventory","مدیریت کاربران و ربات‌ها":"Users & Selfbots","۰":"0","👥 کل کاربران":"👥 Total Users","🟢 ربات‌های فعال":"🟢 Active Selfbots","🎟️ کدهای آماده فروش":"🎟️ Available Licenses","💳 کدهای مصرف‌شده":"💳 Redeemed Licenses","🌐 سلامت شبکه ابری Arizo Edge":"🌐 Arizo Edge Cloud Network Health","سرورهای Cloudflare Workers با توزیع جهانی در حال اجرای کرون‌جاب‌های زمان‌بندی‌شده هستند. اتصال همگام‌ساز تهران در میلی‌ثانیه صفر هر دقیقه فعال است.":"Cloudflare Workers edge network running scheduled cron jobs globally. Tehran sync active at second 00.000 of every minute.","صدور کدهای جدید لایسنس Arizo Self برای فروش به خریداران":"Issue New Arizo Self Licenses for Customers","تعداد کد":"Code Quantity","۱ عدد کد":"1 License Key","۵ عدد کد":"5 License Keys","۱۰ عدد کد":"10 License Keys","۲۰ عدد کد":"20 License Keys","نوع اشتراک و اعتبار":"Subscription Plan & Validity","اشتراک ۱ ماهه (۳۰ روز)":"1 Month (30 Days)","اشتراک ۳ ماهه (۹۰ روز)":"3 Months (90 Days)","اشتراک ۶ ماهه (۱۸۰ روز)":"6 Months (180 Days)","اشتراک دائمی و نامحدود":"Lifetime Unlimited Plan","⭐ سفارشی (تعیین روز دلخواه توسط ادمین)":"⭐ Custom (Admin-defined days)","تعداد روزهای اعتبار":"Duration (Days)","🎟️ تولید کدهای لایسنس جدید و اضافه به انبار":"🎟️ Generate & Add License Keys to Inventory","📋 انبار کدهای لایسنس موجود (کپی مستقیم جهت ارسال به مشتری)":"📋 Active License Inventory (Click to copy for clients)","🔄 رفرش":"🔄 Refresh","کد لایسنس":"License Key","پلن و روزها":"Plan & Validity","وضعیت":"Status","عملیات":"Actions","درحال بارگذاری کدها...":"Loading licenses...","👥 مانیتورینگ زنده کاربران، ربات‌های کمکی و امنیت ۲FA":"👥 Live User Monitoring, Helper Bots & 2FA Security","🔄 رفرش سریع":"🔄 Quick Refresh","🤖 دارای ربات کمکی":"🤖 Has Helper Bot","🔐 تایید ۲FA فعال":"🔐 2FA Enabled","📱 سلف‌بات فعال":"📱 Selfbot Active","🌐 همه کاربران":"🌐 All Users","🤖 دارای ربات کمکی اختصاصی":"🤖 Has Dedicated Bot","⚪ فاقد ربات کمکی":"⚪ No Helper Bot","🔓 تایید ۲FA خاموش":"🔓 2FA Disabled","🟢 سلف‌بات متصل و فعال":"🟢 Selfbot Connected & Active","⏸️ معلق یا منقضی‌شده":"⏸️ Suspended or Expired","🛡️ مدیران ارشد سیستم":"🛡️ System Administrators","🛡️ ارتقا به مدیر":"🛡️ Promote to Admin","🔄 بروزرسانی":"🔄 Update","نام کاربری":"Username","دسترسی":"Role","ربات کمکی":"Helper Bot","امنیت ۲FA":"2FA Security","تلگرام":"Telegram","پلن و اعتبار":"Plan & Expiry","درحال بارگذاری کاربران...":"Loading users...","↩️ بازگشت به داشبورد کاربری":"↩️ Return to User Dashboard","ورود به حساب":"Sign In","ساخت حساب (نیاز به لایسنس)":"Create Account (License Required)","ثبت‌نام با لایسنس":"Register with License","نام کاربری اختصاصی":"Account Username","رمز عبور امن":"Secure Password","ورود به داشبورد Arizo Self":"Sign In to Arizo Self Dashboard","ورود به داشبورد":"Sign In to Dashboard","🎟️ کد لایسنس / ردیم‌کد فعال‌سازی":"🎟️ License Key / Activation Code","الزامی جهت ساخت حساب":"Required for account registration","(برای ثبت‌نام الزامی است)":"(Required for registration)","💳 این کد را از فروشنده دریافت کرده و در اینجا وارد کنید (برای مدیر اول در دیتابیس تازه، نیازی به لایسنس نیست).":"Obtain this license key from the vendor (first administrator requires no license).","کد لایسنس توسط مدیر یا فروشنده ارائه می‌شود (کاربر اول سیستم نیازی به کد ندارد)":"License key provided by vendor (first admin needs no license)","نام کاربری جدید":"New Username","رمز عبور قوی":"Strong Password","رمز عبور امن (حداقل ۸ کاراکتر)":"Secure Password (min 8 chars)","تکرار رمز عبور":"Confirm Password","ثبت‌نام و فعال‌سازی اشتراک Arizo Self":"Register & Activate Arizo Self Subscription","ثبت‌نام و فعال‌سازی اشتراک":"Register & Activate Subscription","حساب کاربری و سلف‌بات شما در حالت تعلیق قرار دارد (Suspended)":"Your Account and Selfbot Are Currently Suspended","حساب کاربری شما معلق شده است":"Your Account Has Been Suspended","مدت زمان اشتراک شما به پایان رسیده و عملکرد سلف‌بات روی تلگرام متوقف شده است. جهت فعال‌سازی مجدد و خروج آنی از تعلیق، کد لایسنس جدید خود را وارد کنید:":"Your subscription has expired and Telegram selfbot operations are paused. Enter a valid renewal key to reactivate:","دسترسی شما به سلف‌بات موقتاً مسدود شده است. جهت فعال‌سازی مجدد، لایسنس تمدید معتبر وارد کنید:":"Access to your selfbot is temporarily restricted. Enter a renewal license key to reactivate:","🚀 خروج از تعلیق و شارژ":"🚀 Reactivate & Renew Subscription","ثبت لایسنس و رفع تعلیق":"Apply License & Reactivate","شبیه‌ساز زنده پروفایل تلگرام (Live Telegram Mockup)":"Live Telegram Profile Mockup","پیش‌نمایش زنده در تلگرام":"Live Telegram Preview","پیش‌نمایش لحظه‌ای":"Live Preview","سینک زنده":"Live Sync","کاربر Arizo":"Arizo User","کاربر تلگرام":"Telegram User","۰۰:۰۰":"00:00","آنلاین (لحظه‌ای به وقت تهران)":"Online (Tehran Atomic Time)","آنلاین":"online","بیوگرافی زنده تلگرام (Bio / About)":"Live Telegram Bio (About)","بیوگرافی زنده":"Live Bio","در انتظار فعال‌سازی بیوگرافی هوشمند...":"Awaiting Live Bio activation...","در حال دریافت وضعیت بیو...":"Syncing bio status...","تقویم خورشیدی و زمان اتمی تهران":"Calendar & Atomic Tehran Clock","تقویم جاری:":"Current Calendar:","درحال محاسبه تقویم خورشیدی...":"Calculating calendar...","همگام‌سازی لحظه‌ای تهران":"Tehran Real-Time Sync","⚡ موتور نوسان‌ساز ابری و کرون‌جاب فعال":"⚡ Edge Engine & Atomic Cron Active","اشتراک: استاندارد":"Subscription: Standard","فونت: بولد لوکس":"Font: Luxury Bold","بخش ۲: اتصال حساب تلگرام به Arizo Self":"Part 2: Connect Telegram Account to Arizo Self","اتصال سشن اکانت تلگرام":"Connect Telegram Account Session","✕ انصراف و بازگشت":"✕ Cancel & Return","انصراف و بازگشت":"Cancel & Return","ایزوله در Cloudflare KV":"Isolated in Cloudflare KV","رمزنگاری نظامی KV":"Military Grade KV Encryption","ارسال کد پیامکی":"SMS / Telegram Code","ورود مستقیم با شماره تلفن":"Direct Phone Login","رشته StringSession مستقیم":"Direct StringSession","ورود با StringSession پیش‌ساخته":"StringSession Login","شماره تلفن اکانت تلگرام":"Telegram Account Phone Number","شماره تلفن با پیش‌شماره بین‌المللی":"Phone Number (International format)","کد ۵ رقمی ارسالی از سوی تلگرام":"5-Digit Telegram Verification Code","کد تایید پیامک/تلگرام":"Verification Code (Telegram/SMS)","رمز تأیید دو مرحله‌ای اکانت (2FA)":"Account Two-Step Verification (2FA)","رمز عبور دومرحله‌ای تلگرام (۲FA)":"Two-Step Verification (2FA) Password","دریافت کد ورود از سرور تلگرام":"Request Telegram Login Code","درخواست و ارسال کد ورود تلگرام":"Request Telegram Login Code","رشته سشن خام تلگرام (StringSession)":"Raw Telegram StringSession","رشته متنی سشن تلگرام (Telethon / GramJS / Pyrogram)":"Telegram StringSession (Telethon / GramJS / Pyrogram)","اتصال و رمزنگاری فوری با AES-256":"Connect & Encrypt with AES-256","ذخیره و اعتبارسنجی سشن":"Validate & Save Session","استودیوی شخصی‌سازی و امکانات پیشرفته":"Customization Studio & Advanced Features","استودیوی جامع شخصی‌سازی":"Comprehensive Studio","⚠️ وضعیت ارتباط با تلگرام:":"⚠️ Telegram Connection Status:","🔄 اتصال مجدد اکانت تلگرام":"🔄 Reconnect Telegram Account","ساعت و استایل":"Clock & Style","منشی خودکار":"Auto-Secretary","فیلتر سکوت":"Silence Filter","حالت خواب":"Sleep Schedule","ربات و لاگر":"Bot & Logger","حالت شبح":"Ghost Mode","پاسخ AI":"Smart AI Reply","پاسخ هوشمند AI":"Smart AI Reply","امنیت و ۲FA":"Security & 2FA","انتخاب کاراکتر جداکننده ساعت و دقیقه":"Choose Hour & Minute Colon Separator","پیشوند ساعت (قبل از ساعت)":"Clock Prefix (Before digits)","پسوند ساعت (بعد از ساعت)":"Clock Suffix (After digits)","حالت ۱۲ ساعته (AM / PM لوکس)":"12-Hour Format (Deluxe AM/PM)","نمایش ساعت به‌صورت ۱۲ ساعته همراه با نشانگر فانتزی ᴬᴹ / ᴾᴹ":"Display in 12-hour format with deluxe ᴬᴹ / ᴾᴹ indicator","ارقام دلخواه دستی (۱۰ کاراکتر ۰ تا ۹)":"Custom Digits (10 characters 0 to 9)","جداکننده":"Separator","فعال‌سازی بیوگرافی زنده و هوشمند (Live Bio)":"Enable Dynamic Live Bio","به‌روزرسانی خودکار بیو تلگرام با ساعت، تقویم و متون پویا":"Auto-update Telegram bio with time, calendar and variables","قالب متن بیوگرافی تلگرام (حداکثر ۷۰ کاراکتر)":"Telegram Bio Template (Max 70 chars)","افزودن متغیر با کلیک:":"Click to add variable:","⏰ {time} (ساعت)":"⏰ {time} (Time)","🗓️ {date} (تاریخ)":"🗓️ {date} (Date)","☀️ {day} (روز هفته)":"☀️ {day} (Weekday)","🔋 {battery} (باتری زمان)":"🔋 {battery} (Time Battery)","♈ {zodiac} (برج فلکی)":"♈ {zodiac} (Zodiac)","🌸 {season} (فصل)":"🌸 {season} (Season)","🎭 {mood} (مود زمان)":"🎭 {mood} (Time Mood)","🎉 {occasion} (مناسبت)":"🎉 {occasion} (Occasion)","💬 {quote} (جمله انگیزشی)":"💬 {quote} (Quote)","🌐 {en_day} (روز انگلیسی)":"🌐 {en_day} (English Day)","💡 قالب‌های محبوب و آماده:":"💡 Popular Pre-Made Templates:","منشی خودکار پیوی (AFK Auto-Secretary)":"AFK Private Auto-Secretary","هنگامی که آنلاین نیستید، پیام‌های خصوصی به طور هوشمند و خودکار پاسخ داده می‌شوند":"When you are away, private messages are answered intelligently","متن پاسخ خودکار منشی به مخاطبان در پیوی":"Auto-Secretary Reply Message","فاصله زمانی ارسال مجدد برای یک مخاطب (کول‌داون ضد اسپم)":"Cooldown Interval per Contact","هر ۵ دقیقه یک‌بار به هر فرد":"Every 5 minutes per contact","هر ۱۰ دقیقه یک‌بار به هر فرد (پیشنهادی)":"Every 10 minutes per contact (Recommended)","هر ۳۰ دقیقه یک‌بار به هر فرد":"Every 30 minutes per contact","هر ۱ ساعت یک‌بار به هر فرد":"Every 1 hour per contact","فقط یک‌بار در طول شبانه‌روز به هر فرد":"Once per 24 hours per contact","💡 این قابلیت مانع از اسپم شدن چت هنگامی که مخاطب چندین پیام متوالی می‌فرستد می‌شود.":"💡 This prevents chat spam when a contact sends multiple consecutive messages.","سکوت و حذف آنی پیام‌های افراد مزاحم (Mute Filter)":"Mute & Instant Purge Filter","پیام‌های ارسال‌شده توسط کاربران مشخص‌شده بلافاصله برای دو طرف پاک می‌شوند":"Messages from specified users are immediately deleted for both sides","لیست آیدی‌های عددی یا یوزرنیم‌های تلگرام جهت سکوت (با کاما جدا کنید)":"Telegram IDs or Usernames to Mute (comma separated)","💡 شما همچنین در محیط تلگرام می‌توانید با ریپلای روی پیام هر شخص و ارسال":"💡 In Telegram you can also reply to a message and send","او را اضافه کرده و با":"to mute them, and use","از سکوت خارج کنید.":"to unmute.","حالت خواب و استراحت شبانه (Sleep Mode)":"Night Sleep Schedule","در ساعات مشخص‌شده، به‌روزرسانی متوقف شده یا متن خواب قرار می‌گیرد":"During specified hours, updates pause or sleep status is displayed","شروع خواب (ساعت)":"Sleep Start Hour","۲۲:۰۰ (۱۰ شب)":"22:00 (10 PM)","۲۳:۰۰ (۱۱ شب)":"23:00 (11 PM)","۰۰:۰۰ (نیمه‌شب)":"00:00 (Midnight)","۰۱:۰۰ (بامداد)":"01:00 (1 AM)","۰۲:۰۰ (بامداد)":"02:00 (2 AM)","پایان خواب (ساعت)":"Sleep Wakeup Hour","۰۶:۰۰ (صبح)":"06:00 (6 AM)","۰۷:۰۰ (صبح)":"07:00 (7 AM)","۰۸:۰۰ (صبح)":"08:00 (8 AM)","۰۹:۰۰ (صبح)":"09:00 (9 AM)","۱۰:۰۰ (صبح)":"10:00 (10 AM)","متن نام خانوادگی در طول ساعات خواب":"Last Name Text During Sleep Hours","حالت شبح — خواندن بدون تیک آبی (Ghost Read)":"Ghost Mode — Stealth Read","وقتی این قابلیت فعال باشه، تمام پیام‌های خصوصی جدید به صورت خودکار به":"When enabled, incoming private messages automatically forward to your","ربات اختصاصی":"dedicated bot","شما فوروارد می‌شن و می‌تونید اونجا بخونیدشون بدون اینکه تیک آبی بخوره. وقتی آماده بودید، با دستور":"where you can read them without blue ticks. When ready, use","در تلگرام می‌تونید تیک آبی رو دستی بزنید.":"in Telegram to manually send read receipts.","فعال‌سازی حالت شبح (Ghost Mode)":"Enable Ghost Mode","پیام‌های خصوصی رو بخونید بدون تیک آبی — فوروارد خودکار به ربات":"Read private messages silently without blue checkmarks","دستورات سریع تلگرامی:":"Telegram In-Chat Shortcuts:","— تیک آبی رو برای چتی که توش هستید بزنید":"— Mark current chat as read","— تیک آبی رو برای همه چت‌ها یکجا بزنید":"— Mark all unread chats as read","— فعال‌سازی سریع حالت شبح":"— Quick activate Ghost Mode","— غیرفعال کردن حالت شبح":"— Quick deactivate Ghost Mode","لیست استثنا — افرادی که همیشه تیک آبی بخوره (اختیاری)":"Whitelist — Contacts who always receive read receipts (Optional)","💡 برای این افراد، تیک آبی به صورت عادی کار می‌کنه و حالت شبح روی اونا اعمال نمی‌شه.":"💡 For these contacts, read receipts work normally and Ghost Mode is bypassed.","نکته مهم:":"Important Notice:","حالت شبح فقط زمانی کار می‌کنه که پیام‌ها رو از طریق":"Ghost Mode only suppresses read receipts when reading via the","ربات":"bot","بخونید. اگر چت رو مستقیم توی اپلیکیشن تلگرام باز کنید، تیک آبی از طرف اپلیکیشن ارسال می‌شه.":". If you open the chat directly in Telegram app, read receipts will be sent.","پاسخ هوشمند مبتنی بر هوش مصنوعی (AI Smart Reply)":"AI Smart Reply Assistant","به جای یک پیام ثابت AFK، هوش مصنوعی":"Instead of a static AFK note, AI replies intelligently","متناسب با محتوای پیام":"based on context","به مخاطبین پاسخ می‌دهد. هر کاربر API Key خودش رو وارد می‌کنه و هزینه‌ای برای سرور نداره.":"to incoming chats. Each user brings their own API key with zero host cost.","فعال‌سازی پاسخ هوشمند AI (جایگزین AFK ثابت)":"Enable AI Smart Reply (Replaces static AFK)","وقتی فعال باشه، AI به جای پیام ثابت منشی، هوشمندانه پاسخ می‌دهد":"When enabled, AI replies dynamically instead of a static message","پایش هوشمند وضعیت آنلاین:":"Smart Online Presence Monitor:","هوش مصنوعی تنها در زمان":"AI replies exclusively when you are","آفلاین بودن":"offline","به پیوی‌ها پاسخ می‌دهد. به محض اینکه آنلاین شوید، پیامی بخوانید یا در حال چت با مخاطبان باشید، منشی خودکار فوراً متوقف می‌شود.":". The moment you come online or read a message, AI auto-replies immediately pause.","سرویس‌دهنده هوش مصنوعی (AI Provider)":"AI Provider","Google Gemini (رایگان — پیشنهادی)":"Google Gemini (Free — Recommended)","Custom API (سرویس سفارشی)":"Custom OpenAI-compatible API","کلید API هوش مصنوعی (API Key)":"AI API Key","حذف کامل کلید API (رفع تداخل)":"Clear API Key (Reset)","از":"From","اینجا":"here","رایگان دریافت کنید |":"get a free key |","شخصیت و دستورالعمل AI (System Prompt)":"AI System Prompt & Instructions","💡 حداکثر ۵۰۰ کاراکتر. این متن شخصیت AI را تعیین می‌کند.":"💡 Max 500 characters. Defines AI tone, personality and constraints.","اطلاعات پایه برای AI (زمینه و کانتکست)":"Background Facts & Context for AI","💡 AI از این اطلاعات برای پاسخ دقیق‌تر استفاده می‌کند.":"💡 AI references this context for accurate answers (e.g. office hours).","حداکثر تعداد پاسخ به هر شخص":"Max Replies per Contact","فقط ۱ پاسخ":"Only 1 reply","حداکثر ۲ پاسخ":"Max 2 replies","حداکثر ۳ پاسخ (پیشنهادی)":"Max 3 replies (Recommended)","حداکثر ۵ پاسخ":"Max 5 replies","حداکثر ۱۰ پاسخ":"Max 10 replies","نامحدود (۲۰ پاسخ)":"Unlimited (20 replies)","فاصله زمانی بین پاسخ‌ها (کول‌داون)":"Reply Cooldown Interval","⚡ بدون محدودیت زمانی (فوری و بدون کول‌داون)":"⚡ Instant (No cooldown)","هر ۱ دقیقه":"Every 1 minute","هر ۳ دقیقه":"Every 3 minutes","هر ۵ دقیقه (پیشنهادی)":"Every 5 minutes (Recommended)","هر ۱۰ دقیقه":"Every 10 minutes","هر ۳۰ دقیقه":"Every 30 minutes","نکته:":"Note:","وقتی پاسخ هوشمند AI فعال باشد، اولویت بالاتری نسبت به منشی خودکار (AFK) دارد و فقط در صورت":"When AI Reply is active, it takes priority over AFK auto-responder and only responds when you are","آفلاین بودن شما":"offline","، متناسب با سوال مخاطب پاسخ می‌دهد.":", tailoring answers to the contact's query.","اتصال ربات دستیار اختصاصی تلگرام (BotFather API)":"Connect Telegram Helper Bot (BotFather API)","قانون انحصار و امنیت:":"Exclusive Security Policy:","هر کاربر باید در":"Each subscriber must create a dedicated bot in","ربات اختصاصی و مجزای خود را بسازد و توکن آن را وارد کند. به منظور حفظ کامل حریم خصوصی و امنیت حساب، این ربات منحصراً به مالک حساب پاسخ می‌دهد و دسترسی هر فرد دیگری به پیام‌ها یا دستورات ربات به طور کامل مسدود و غیرمجاز است.":"and provide its token. To maintain absolute privacy, this bot exclusively answers the account owner and blocks all external users.","توکن ربات تلگرام (API Token از BotFather@)":"Telegram Bot API Token (from @BotFather)","➕ دریافت توکن از @BotFather":"➕ Get Token from @BotFather","⚡ اتصال و فعال‌سازی وب‌هوک":"⚡ Connect & Enable Webhook","ربات تلگرام":"Telegram Bot","🚀 باز کردن ربات در تلگرام":"🚀 Open Bot in Telegram","🔌 قطع اتصال ربات":"🔌 Disconnect Bot","وضعیت وب‌هوک:":"Webhook Status:","متصل و فعال":"Connected & Active","ورود به پنل (Mini App):":"Telegram Mini App Launch:","دکمه منو فعال شد":"Menu Button Active","امنیت انحصاری (مخصوص شما):":"Exclusive Security (Owner Only):","ربات منحصراً به شناسه تلگرام شما پاسخ می‌دهد و برای بقیه مسدود است.":"Bot strictly answers your Telegram ID and ignores everyone else.","🔒 آماده قفل با اولین /start":"🔒 Ready to Lock upon first /start","✏️ تنظیم شناسه":"✏️ Configure ID","پس از اتصال، یک‌بار وارد ربات تلگرام خود شده و دستور":"After connecting, open your Telegram bot and send","را بفرستید تا ربات منحصراً به اکانت شما قفل شده و پنل گرافیکی داخل تلگرام فعال شود.":"to lock the bot to your account and activate the in-app Mini App.","🗑️ سطل زباله و ضد حذف پیام‌های پیوی (Anti-Delete)":"🗑️ Anti-Delete Private Message Vault","اگر شخصی در پیوی پیامی را پاک کند، متن یا رسانه ذخیره شده فوراً به ربات اختصاصی شما ارسال می‌شود":"When a contact deletes a message, the cached text or media is immediately forwarded to your bot","✏️ مانیتور و ضد ویرایش پیام‌های پیوی (Anti-Edit)":"✏️ Anti-Edit Private Message Monitor","اگر شخصی پیامی را تغییر دهد، متن قبل از ویرایش و متن جدید در ربات تلگرام به شما نمایش داده می‌شود":"When a contact edits a message, the pre-edit text and diff are delivered to your bot","📸 نجات و ارسال رسانه‌های زمان‌دار به ربات (Anti-TTL)":"📸 Anti-TTL View-Once Media Saver","تصاویر، فیلم‌ها و ویس‌های محوشونده (View-Once) مستقیماً به پیوی ربات اختصاصی شما ارسال می‌شوند":"Expiring photos, video notes and voice clips are saved and forwarded to your helper bot","سپر امنیتی پیشرفته Arizo Self & Zero-Trust":"Arizo Self Advanced Security & Zero-Trust Shield","حساب کاربری شما تحت حفاظت لایه‌های دفاعی چندگانه شامل رمزنگاری کوانتوم‌امن، تله‌های دفاعی Honeypot، سنسورهای تشخیص نفوذ و احراز هویت دوعاملی (TOTP) قرار دارد.":"Your account is guarded by multi-layered defenses: AES-GCM encryption, Zero-Trust Honeypot traps, and RFC 6238 2FA.","احراز هویت دو مرحله‌ای (Google Authenticator / 2FA)":"Two-Factor Authentication (Google Authenticator / 2FA)","محافظت از حساب در برابر نفوذ با کدهای ۶ رقمی زمان‌محور":"Protect your account with 30-second rotating 6-digit TOTP codes","غیرفعال ❌":"Disabled ❌","فعال و ایمن 🟢":"Active & Secure 🟢","با فعال‌سازی ۲FA، هنگام هر بار ورود به پنل، علاوه بر رمز عبور، به کد یکبار مصرف اپلیکیشن Google Authenticator یا 2FAS نیز احتیاج خواهید داشت.":"When 2FA is active, every sign-in requires a rotating code from Google Authenticator or 2FAS alongside your password.","🔐 راه‌اندازی و فعال‌سازی ۲FA":"🔐 Configure & Enable 2FA","گام ۱: اسکن تصویر QR یا کپی کلید دستی":"Step 1: Scan QR Code or Copy Secret Key","اپلیکیشن Google Authenticator یا 2FAS را باز کرده و این بارکد را اسکن کنید.":"Open Google Authenticator or 2FAS and scan this barcode.","📱 باز کردن مستقیم در Authenticator (ویژه موبایل)":"📱 Open Directly in Authenticator (Mobile)","یا کلید محرمانه ۳۲ کاراکتری را دستی وارد نمایید:":"Or manually enter this 32-character Base32 secret key:","📋 کپی کلید دستی":"📋 Copy Secret Key","گام ۲: کد ۶ رقمی تولید شده در اپلیکیشن را وارد کنید":"Step 2: Enter the 6-Digit Code from Your App","تأیید نهایی و فعال‌سازی ۲FA":"Verify & Enable 2FA","انصراف":"Cancel","احراز هویت دو مرحله‌ای (2FA) برای حساب شما فعال است.":"Two-Factor Authentication (2FA) is currently active on your account.","❌ غیرفعال‌سازی ۲FA":"❌ Disable 2FA","🔑 کدهای بازیابی اضطراری (Emergency Backup Codes)":"🔑 Emergency Backup Recovery Codes","📋 کپی تمام کدها":"📋 Copy All Backup Codes","در صورت عدم دسترسی به گوشی یا اپ Authenticator، با هر یک از این کدهای یک‌بار مصرف می‌توانید وارد حساب شوید:":"If you lose access to your authenticator app, use any of these single-use codes to sign in:","پشتیبان‌گیری رمزنگاری شده (Encrypted Backup & Restore)":"Encrypted Backup & Disaster Recovery","دانلود نسخه پشتیبان امن از تمام تنظیمات و سشن، یا بازیابی آن روی سرور":"Export secure encrypted backup of all settings, or restore to server","📥 ایجاد و دریافت خروجی امن":"📥 Export Secure Backup","تمام تنظیمات ساعت، بیوگرافی، منشی، بلاک‌لیست و سشن تلگرام شما با الگوریتم AES-GCM و رمز شما قفل شده و به شکل فایل دانلود می‌شود.":"All clock, bio, AFK, blocklist, and session data is encrypted with AES-256-GCM using your password.","💾 خروجی پشتیبان (Export)":"💾 Export Backup","📤 بازیابی فایل پشتیبان (Restore)":"📤 Restore Backup File","فایل بکاپ دانلود شده را انتخاب و رمزی که با آن قفل شده را وارد نمایید تا تنظیمات بازگردانی شوند:":"Select your encrypted backup file and enter the password used to lock it:","🔄 بازیابی اطلاعات (Restore)":"🔄 Restore Backup","تله‌های دفاعی و حسگر هانی‌پات (Zero-Trust Honeypot)":"Zero-Trust Honeypot Defensive Traps","مسدودسازی خودکار آی‌پی‌های مشکوک و پویشگران آسیب‌پذیری وب":"Automatic IP bans against vulnerability scanners & hostile probes","فعال و هوشیار 🟢":"Active & Vigilant 🟢","ترافیک‌های اسکنر مانند تلاش برای دسترسی به مسیرهای فرضی ادمین، کدهای شل، فایل‌های دات‌ان‌وی و باگ‌های شناخته‌شده، بلافاصله در لبه شبکه Cloudflare مسدود شده و در لاگ‌های امنیتی ثبت می‌گردند.":"Malicious scans probing decoy admin paths, shell endpoints, or .env files are blocked instantly at Cloudflare edge and logged.","قابلیت قبلی":"Previous","🕒 ساعت و استایل":"🕒 Clock & Style","۱":"1","۹)":"9)","قابلیت بعدی":"Next","قبلی":"Previous","از ۹":"of 9","بعدی":"Next","💾 ذخیره و اعمال تغییرات استودیو":"💾 Save Studio Changes","ذخیره آنی تغییرات استودیو":"Save Studio Changes","وضعیت سرویس و مانیتورینگ سلامت":"Service Health & Cloud Monitoring","وضعیت سلامت و پایپ‌لاین ابری":"System Health & Cloud Pipeline","⚡ تست به‌روزرسانی آنی":"⚡ Instant Sync Test","همگام‌سازی فوری":"Sync Now","⏸️ توقف موقت":"⏸️ Pause Selfbot","توقف موقت سلف‌بات":"Pause Selfbot","📱 تعویض اکانت":"📱 Change Telegram Session","تغییر سشن اکانت تلگرام":"Change Telegram Session","وضعیت سلف‌بات شما":"Your Selfbot Status","وضعیت سلف‌بات:":"Selfbot Status:","🟢 فعال و آنلاین":"🟢 Active & Online","آخرین به‌روزرسانی تلگرام":"Last Telegram Sync","آخرین همگام‌سازی:":"Last Sync:","درحال استعلام...":"Checking telemetry...","شبکه ابری Arizo Self فعال است":"Arizo Self Cloud Network is Active","پلتفرم ابری هوشمند سلف‌بات تلگرام آریزو | طراحی شده با معماری Edge و بدون سرور (Serverless)":"Arizo Telegram Selfbot Cloud Platform | Engineered with Serverless Edge Architecture","معرفی امکانات و سرویس‌های پیشرفته | Arizo Self v3.6.0 PRO":"Feature Tour & Advanced Services | Arizo Self v3.6.0 PRO","استودیوی ابری سلف‌بات هوشمند تلگرام":"Intelligent Telegram Selfbot Cloud Studio","پلتفرم متمرکز ابری جهت خودکارسازی و مدیریت نمایه تلگرام بر بستر سرورلس ۲۴ ساعته بدون نیاز به آنلاین بودن دستگاه یا سرور اختصاصی.":"Centralized 24/7 serverless platform automating Telegram profiles without dedicated servers or keeping your phone online.","واکنش زیر ۴۰ms":"Sub-40ms Latency","۱۰۰٪ ابری ۲۴/۷":"100% 24/7 Cloud","دیتابیس هیبرید D1 + KV":"Hybrid D1 + KV Database","امنیت ۲FA و هانی‌پات":"2FA & Honeypot Security","ساعت زنده نام کاربری":"Live Profile Clock","۳۲ قلم نوشتاری":"32 Font Styles","به‌روزرسانی خودکار و بلادرنگ زمان تهران در نام کاربری تلگرام با ۳۲ استایل قلم فارسی و لاتین، ارقام محلی و نمایش ۱۲/۲۴ ساعته رأس ثانیه ۰۰.":"Real-time automated Telegram name clock synchronization with 32 designer presets, custom local digits, and 12/24h precision at second 00.","بیوگرافی زنده و تقویم":"Dynamic Bio & Calendar","متغیرهای هوشمند":"Smart Dynamic Variables","نمایش تقویم زنده هجری شمسی، روز هفته و ساعت در بخش Bio تلگرام با الگوهای مدرن و متغیرهای داینامیک.":"Dynamic Telegram bio updates displaying calendar, day of week, and time formatted with modern templates.","منشی خودکار پیوی (AFK)":"AFK Private Auto-Secretary","سیستم ضد اسپم":"Anti-Spam Cooldown","پاسخگویی هوشمند به پیام‌های شخصی هنگام آفلاین بودن، با قابلیت تعریف متن سفارشی، فاصله زمانی و استثناسازی ربات‌ها و کاربران.":"Smart auto-replies to private messages when offline, featuring custom templates, cooldowns, and bot whitelisting.","دستیار هوش مصنوعی (AI)":"AI Chat Assistant","پاسخگوی چت لبه‌ای":"Edge Contextual Responder","تعامل زبانی و پاسخ‌دهی خودکار به چت‌ها با استفاده از مدل‌های پیشرفته هوش مصنوعی متصل به سامانه سرورلس ابری.":"Context-aware conversational replies powered by advanced LLM integration directly on serverless edge.","پایشگر ضد حذف (Anti-Delete)":"Anti-Delete Message Vault","متن، عکس، ویس و فایل":"Text, Photos, Audio & Files","ضبط و فوروارد بلادرنگ پیام‌ها، فایل‌ها، تصاویر، ویس‌ها و استیکرهای پاک‌شده توسط مخاطبان در پیوی به ربات دستیار شخصی.":"Immediate capture and forwarding of deleted private messages, media, stickers, and voice notes to your helper bot.","مانیتور ضد ویرایش (Anti-Edit)":"Anti-Edit Message Monitor","متن قبل و بعد ادیت":"Pre-Edit & Post-Edit Diff","آشکارسازی و ارسال متن اولیه پیام‌ها قبل از ویرایش به همراه نسخه اصلاح‌شده و زمان دقیق به ربات دستیار برای ثبت تاریخچه.":"Instant detection of edited private messages, sending the original text and updated diff to your helper bot.","آرشیو رسانه‌ها (Anti-TTL)":"Anti-TTL Media Archiver","رسانه‌های View-Once":"View-Once Self-Destructing Media","ذخیره و فوروارد فوری عکس‌ها و ویدیوهای محوشونده و تایمردار تلگرام پیش از سوختن یا ناپدید شدن با حداکثر کیفیت اصلی.":"Download and archive disappearing view-once media before expiration in uncompressed original quality.","حالت روح و نامرئی (Ghost Mode)":"Ghost & Stealth Mode","مشاهده بدون تیک دوم":"Silent Read Without Seen Status","مشاهده و مرور پیام‌های دریافتی بدون سین خوردن با امکان فعال‌سازی از پنل یا دستور تلگرامی":"Browse incoming private messages without triggering seen checkmarks, toggleable via panel or in-chat commands","و":"and","مدیریت سکوت و فیلتر (Mute)":"Silence Filter & Auto-Purge","پاکسازی دوطرفه چت":"Two-Way Instant Message Purge","مسدودسازی و حذف خودکار و آنی پیام‌های کاربران مزاحم با دستور تلگرامی":"Instantly purge incoming messages from unwanted senders for both parties using Telegram command","و مدیریت یکپارچه از طریق پنل.":"or the web panel.","حالت خواب شبانه (Sleep Mode)":"Night Sleep Automation","اتوماسیون استراحت":"Rest Hours Automation","تغییر خودکار نام خانوادگی به حالت استراحت و به تعویق انداختن پیام‌ها در ساعات مشخص شبانه به صورت اتوماتیک.":"Automatically append sleep indicator to your profile name and defer notifications during configured rest hours.","تایید دومرحله‌ای (Google 2FA)":"Two-Factor Auth (Google 2FA)","استاندارد TOTP RFC 6238":"RFC 6238 TOTP Standard","محافظت نفوذناپذیر از حساب پنل کاربری با Google Authenticator، رمز موقت ۶ رقمی و ۸ کد بازیابی اضطراری.":"Bulletproof account protection using Google Authenticator, 30s rotating tokens, and 8 disaster recovery backup codes.","دفاع فعال هانی‌پات (Honeypot)":"Active Zero-Trust Honeypot","تله امنیتی و بلاک IP":"Decoy Traps & Auto IP Bans","کشف و مهار اسکنرهای مخرب روی روت‌های حساس، مسدودسازی آنی IP نفوذگر و ارسال گزارش حمله به ربات تلگرام.":"Detect and ban vulnerability scanners on sensitive paths, instantly blacklisting hostile IPs and alarming your bot.","ویزارد راه‌اندازی تحت وب (/setup)":"Web Setup Wizard (/setup)","بدون کدنویسی":"Zero Coding Required","راهنمای جامع تعاملی ۵ مرحله‌ای برای دریافت API کلیدها، ایجاد سشن تلگرام و راه‌اندازی آسان و بدون ترمینال.":"Step-by-step interactive 5-stage launcher to generate keys, test bot tokens, and deploy without terminal skills.","سیستم ارتقا به مدیر (Role System)":"Role Management & Promotion","ارتقا / تنزل آنی":"Instant Promote / Demote","امکان ارتقای مستقیم کاربران به مدیر سیستم یا تنزل به کاربر عادی در جدول کاربران و پنل بازرس با تایید امنیتی.":"Promote users to Administrator or demote to standard subscriber with instant permission sync.","داشبورد مانیتورینگ (/admin)":"Admin Command Center (/admin)","روت مستقل و امن":"Dedicated Secure Route","مشاهده آمارهای زنده دیتابیس، نرخ رایت‌ها، سشن‌های فعال، خطاهای ثبت‌شده و وضعیت ربات‌های کمکی در صفحه مجزا.":"Real-time database analytics, active sessions, error telemetry, and helper bot status on an isolated admin dashboard.","موتور ذخیره‌سازی هیبرید D1 + KV":"Hybrid Storage Engine (D1 + KV)","۱۰۰,۰۰۰ رایت D1 روزانه":"100,000 Free Daily D1 Writes","بهره‌گیری همزمان از Cloudflare D1 و KV همراه با کش رم هوشمند جهت به صفر رساندن استهلاک دیتابیس بدون مصرف اضافه.":"Combines Cloudflare D1 and KV with intelligent RAM caching to eliminate redundant database quota wear.","انبار لایسنس و ردیم‌کد (License Vault)":"License Key Inventory Vault","مدیریت اعتبار و تاریخ انقضا":"Subscription & Expiry Tracking","تولید، ابطال و رصد کدهای اشتراک مدت‌دار با فرمت استاندارد ARIZO-XXXX، تخصیص مستقیم به کاربران و مدیریت مالی اشتراک‌ها.":"Generate, revoke, and track standardized ARIZO-XXXX license keys, assigning plan tiers and managing subscriptions.","مینی اپلیکیشن تلگرام (Telegram WebApp)":"Telegram Mini App (WebApp)","ورود مستقیم SSO":"Seamless SSO Authentication","دسترسی تمام‌عیار و مدیریت سلف‌بات مستقیماً از درون محیط تلگرام با ورود خودکار امن و هماهنگی کامل با تم تلگرام.":"Full-featured selfbot management right inside Telegram with automatic single-sign-on and theme matching.","عدم نمایش خودکار در دفعات بعدی":"Do not show automatically again","ویزارد راه‌اندازی (/setup)":"Setup Wizard (/setup)","بستن":"Close","ورود به استودیو":"Enter Studio","⚙️ تنظیمات و امنیت حساب Arizo Self":"⚙️ Account Settings & Security","تنظیمات و مدیریت حساب کاربری":"Account Settings & Management","🎟️ تمدید اعتبار با ردیم‌کد جدید Arizo":"🎟️ Extend Subscription with License Key","تمدید و ارتقای اشتراک با لایسنس":"Extend Subscription with License","تمدید و شارژ اشتراک":"Apply & Extend Subscription","ثبت و تمدید اشتراک":"Apply & Extend","🔑 تغییر رمز عبور ورود":"🔑 Change Account Password","تغییر رمز عبور ورود به پنل":"Change Account Password","رمز عبور فعلی":"Current Password","رمز عبور جدید (حداقل ۸ کاراکتر)":"New Password (min 8 chars)","رمز عبور جدید":"New Password","ثبت رمز عبور جدید":"Update Password","بروزرسانی رمز عبور":"Update Password","🔌 قطع اتصال حساب تلگرام":"🔌 Disconnect Telegram Account","قطع اتصال سشن تلگرام":"Disconnect Telegram Session","🗑️ حذف کامل حساب کاربری و تمام داده‌ها":"🗑️ Permanently Delete Account & All Data","حذف دائمی حساب کاربری":"Permanently Delete Account","ثبت‌نام:":"Registered:","کد لایسنس:":"License Code:","💡 تمامی تغییرات بلافاصله در حافظه Edge Cloudflare ذخیره و اعمال می‌گردند.":"💡 All changes are immediately stored and propagated across Cloudflare Edge.","بستن پنجره":"Close Window","Switch Language / تغییر زبان":"Switch Language / تغییر زبان","تغییر حالت شب و روز":"Toggle Dark / Light Mode","راهنمای جامع امکانات و سرویس‌های سامانه Arizo Self":"Arizo Self Complete Feature Tour & Service Guide","ورود به پنل مدیریت ارشد و مانیتورینگ":"Enter Admin Command Center & Monitoring","تنظیمات حساب":"Account Settings","خروج":"Sign Out","خروج از حساب":"Sign Out","مثال: ۱۵ (تعداد روز اعتبار لایسنس)":"e.g. 15 (Validity days)","🔍 جستجو بر اساس نام کاربری، شناسه تلگرام یا ربات...":"🔍 Search by username, Telegram ID or bot...","ارتقای یک کاربر به مدیر سامانه":"Promote a user to system administrator","تازه‌سازی لیست":"Refresh Directory","نام کاربری شما (مثال: amirmaster)":"Your username (e.g. alex_vip)","نام کاربری شما (مثلاً alex_vip)":"Your username (e.g. alex_vip)","رمز عبور حساب کاربری (••••••••)":"Account password (••••••••)","رمز عبور حساب":"Account password","کد لایسنس فعال‌سازی (مثال: ARIZO-XXXX-XXXX-XXXX)":"Activation license key (e.g. ARIZO-XXXX-XXXX-XXXX)","کد لایسنس خریداری شده (ARIZO-XXXX-XXXX-XXXX)":"License key (ARIZO-XXXX-XXXX-XXXX)","نام کاربری دلخواه (مثال: amir_vip)":"Desired username (e.g. alex_vip)","نام کاربری دلخواه (حروف انگلیسی و اعداد)":"Choose username (alphanumeric)","رمز عبور امن و قوی (حداقل ۸ کاراکتر)":"Strong Password (min 8 chars)","حداقل ۸ کاراکتر":"At least 8 characters","تکرار مجدد رمز عبور جهت اطمینان":"Re-enter your password","رمز عبور را مجدداً وارد نمایید":"Re-enter your password","کد لایسنس جدید جهت خروج از تعلیق (مثال: ARIZO-XXXX-XXXX-XXXX)":"Renewal license key (e.g. ARIZO-XXXX-XXXX-XXXX)","لایسنس فعال‌سازی جدید...":"New renewal license key...","شماره همراه با پیش‌شماره کشور (مثال: 989123456789+)":"Phone number with country code (e.g. +14155552671)","+989123456789 یا +14155552671":"+14155552671 or +989123456789","کد ۵ رقمی ارسالی از تلگرام (مثال: 58291)":"5-digit verification code (e.g. 58291)","کد ۵ رقمی دریافتی":"5-digit verification code","رمز تأیید دومرحله‌ای (در صورت فعال بودن 2FA)":"2FA Password (if enabled on account)","در صورت داشتن رمز دو مرحله‌ای وارد کنید":"Enter 2FA password if enabled","رشته طولانی StringSession تلگرام خود را اینجا وارد کنید (Pyrogram یا Telethon/GramJS)...":"Paste your Telegram StringSession here (Pyrogram or Telethon/GramJS)...","1BJWap1wB... یا 1ApWap...":"1BJWap1wB... or 1ApWap...","پیشوند ساعت (مثلاً: [ یا | یا ⚡)":"Clock prefix (e.g. [ or | or ⚡)","پسوند ساعت (مثلاً: ] یا ⚡ یا VIP)":"Clock suffix (e.g. ] or ⚡ or VIP)","۱۰ رقم دلخواه از ۰ تا ۹ به ترتیب (مثال: ۰۱۲۳۴۵۶۷۸۹)":"10 custom digits from 0 to 9 (e.g. 0123456789)","قالب بیوگرافی (مثال: ⏳ {time} | 📅 {date} | ⚡ Arizo Pro)":"Bio template (e.g. ⏳ {time} | 📅 {date} | ⚡ Arizo Pro)","متن پاسخ خودکار منشی (مثال: درود! در حال حاضر امکان پاسخگویی ندارم. به محض آنلاین شدن پاسخ خواهم داد ⏳)":"Away reply text (e.g. Hello! Currently away, will reply as soon as online ⏳)","آیدی‌های عددی یا یوزرنیم‌های تلگرام با کاما (مثال: 123456789, @username, 987654321)":"Telegram IDs or usernames separated by comma (e.g. 123456789, @user)","متن نام خانوادگی در خواب (مثال: 😴 Sleep یا 🌙 خوابیدم)":"Sleep status name text (e.g. 😴 Sleep)","آیدی عددی یا یوزرنیم افرادی که می‌خواید تیک آبی برایشون فعال بمونه (با کاما جدا کنید)":"Telegram IDs/usernames exempt from Ghost Mode (comma separated)","کلید API خود را از پنل Gemini یا OpenAI دریافت و اینجا وارد کنید":"Paste your Google Gemini or OpenAI API Key here","نمایش / مخفی‌سازی کلید":"Show / Hide Key","به AI بگویید چطور رفتار کنه (مثلاً: مؤدبانه و رسمی پاسخ بده، از اطلاعات خصوصی صحبت نکنه)":"Instruct AI personality (e.g. Reply politely and formally, keep answers concise)","اطلاعاتی که AI اجازه داره بگه (مثلاً: ساعت کاری من ۹ تا ۵ هست، برنامه‌نویس هستم)":"Context facts for AI (e.g. My working hours are 9 to 5, I am a developer)","توکن ربات دریافتی از BotFather@ (مثال: 123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ)":"Bot token from @BotFather (e.g. 123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ)","تنظیم یا تغییر دستی شناسه تلگرام مجاز":"Manually Set Authorized Telegram Owner ID","کلید دستی":"Manual Key","مثال: 123456":"e.g. 123456","رمز عبور حساب برای رمزنگاری فایل":"Account password used to encrypt backup","رمز عبور استفاده شده هنگام بکاپ":"Password used when backup was created","کد لایسنس تمدید (مثال: ARIZO-XXXX-XXXX-XXXX)":"Renewal License Key (ARIZO-XXXX-XXXX-XXXX)","کد لایسنس تمدید (ARIZO-XXXX-XXXX-XXXX)":"Renewal License Key (ARIZO-XXXX-XXXX-XXXX)","رمز عبور فعلی حساب شما":"Your current account password","رمز عبور فعلی خود را وارد کنید":"Enter current password","رمز عبور جدید و امن (حداقل ۸ کاراکتر)":"New secure password (min 8 chars)","🚀 ویزارد راه‌اندازی هوشمند و گام‌به‌گام | Arizo Self v3.6.0 PRO":"🚀 Interactive Step-by-Step Setup Wizard | Arizo Self v3.6.0 PRO","ویزارد هوشمند و تعاملی ستاپ شخصی از گیت‌هاب":"Interactive GitHub Setup Wizard for Selfbot Studio","بررسی سلامت سرور":"Check Server Health","خروجی سکرت‌ها":"Export Secrets","👑 پنل مدیریت":"👑 Admin Portal","🚪 استودیو":"🚪 Studio","مرحله ۱ از ۵: گیت‌هاب و نیازمندی‌ها":"Step 1 of 5: GitHub & Prerequisites","۲۰٪ تکمیل شده":"20% Completed","گیت‌هاب و فورک":"GitHub & Fork","۲":"2","کلادفلر و D1":"Cloudflare & D1","۳":"3","تلگرام و ربات":"Telegram & Bot","۴":"4","رانر Actions":"Actions Runner","۵":"5","ورود و تست":"Test & Launch","📥 مرحله اول: انشعاب پروژه در گیت‌هاب (Fork) و دانلود سورس":"📥 Step 1: Fork Project on GitHub & Clone Source","یک نسخه مستقل از پروژه را در اکانت گیت‌هاب خود فورک کنید. با وارد کردن نام کاربری گیت‌هاب در کادر زیر، تمام آدرس‌ها و دستورات به نام شما شخصی‌سازی خواهند شد!":"Fork an independent copy of the repository into your GitHub account. Enter your GitHub username below to personalize all URLs and commands automatically!","👤 نام کاربری شما در GitHub (شخصی‌سازی خودکار همه لینک‌ها و دستورات)":"👤 Your GitHub Username (Auto-personalizes all links & commands)","هنوز وارد نشده":"Not entered yet","🍴 فورک مستقیم در گیت‌هاب":"🍴 Fork Directly on GitHub","💡 با وارد کردن یوزرنیم، لینک‌های ریپازیتوری، آدرس تنظیم سکرت‌ها و دستورات کلون به طور خودکار بروز می‌شوند.":"💡 Entering your username updates repository links, secrets settings URL, and clone commands instantly.","🍴 ریپازیتوری رسمی پروژه":"🍴 Official Repository","سورس اصلی سلف‌بات روی گیت‌هاب قرار دارد. برای شروع روی دکمه زیر بزنید و در صفحه گیت‌هاب، دکمه":"The source repository is hosted on GitHub. Click the button below and on the GitHub page press","را بفشارید:":"to fork:","🔗 مشاهده ریپوی مرجع گیت‌هاب":"🔗 View Source on GitHub","💻 پیش‌نیازهای نرم‌افزاری ساده":"💻 Basic Software Prerequisites","تنها ابزارهای مورد نیاز برای استفاده:":"The only prerequisites required:","نصب بودن":"Installed","Node.js 18 یا بالاتر":"Node.js 18 or higher","روی سیستم":"on your local system","یک حساب کاربری رایگان در":"A free account on","یک اکانت رایگان در":"A free account on","برای رانر دائمی":"for continuous 24/7 runner","⌨️ دریافت سورس و نصب پکیج‌ها:":"⌨️ Clone Source & Install Dependencies:","PowerShell (ویندوز)":"PowerShell (Windows)","Bash (مک و لینوکس)":"Bash (macOS & Linux)","📋 کپی کامل دستور":"📋 Copy Command","مرحله بعد: کلادفلر و پایگاه داده D1":"Next Step: Cloudflare & D1 Database","گام بعدی: ساخت ورکر و دیتابیس کلادفلر":"Next Step: Create Cloudflare Worker & D1 Database","⛅ مرحله دوم: پایگاه داده SQLite ابری (D1) و حافظه کلادفلر (KV)":"⛅ Step 2: Serverless SQLite Database (D1) & KV Cache","پروژه Arizo Self از معماری پیشرفته هیبریدی D1 + KV با سقف ۱۰۰,۰۰۰ رایت رایگان در روز استفاده می‌کند.":"Arizo Self utilizes a high-efficiency hybrid D1 + KV architecture with 100,000 free daily writes.","🪄 استخراج جادویی شناسه‌ها از لاگ ترمینال (بدون نیاز به پیدا کردن دستی UUID!)":"🪄 Magic ID Extractor from Terminal Log (Zero manual UUID hunting)","وقتی دستورات ساخت D1 یا KV را اجرا کردید، کل خروجی چاپ شده در ترمینال را در کادر زیر پیست کنید تا سیستم شناسه‌ها را به صورت خودکار تشخیص داده و فیلدها را پر کند:":"Paste the terminal output from D1 or KV creation commands below; the wizard will automatically parse UUIDs and fill all fields:","🗄️ ۱. ساخت پایگاه داده D1":"🗄️ 1. Create D1 Database","این دستور را در ترمینال پوشه پروژه اجرا کنید:":"Run this command in the project directory terminal:","کپی":"Copy","💡 شناسه تولیدشده (database_id) را در فیلد زیر وارد یا پیست کنید.":"💡 Enter or paste the generated database_id in the field below.","⚡ ۲. ساخت حافظه کش KV":"⚡ 2. Create KV Namespace","این دستور را در ترمینال اجرا کنید:":"Run this command in your terminal:","💡 شناسه تولیدشده (id) را در فیلد زیر وارد یا پیست کنید.":"💡 Enter or paste the generated namespace ID in the field below.","⚙️ تولیدکننده زنده و دانلود مستقیم فایل":"⚙️ Live wrangler.toml Generator & Direct Download","📥 دانلود مستقیم فایل wrangler.toml":"📥 Direct Download wrangler.toml","⚡ ساخت خودکار جداول D1":"⚡ Automatic D1 Schema Setup","اطلاعات را وارد کنید؛ پیش‌نمایش به صورت بلادرنگ بروزرسانی شده و می‌توانید فایل آماده را مستقیماً دانلود کنید:":"Fill in your details; the preview updates in real-time and you can download the ready-to-deploy configuration directly:","نام ورکر (Worker Name)":"Worker Name","شناسه KV Namespace (KV ID)":"KV Namespace ID","شناسه پایگاه داده D1 (Database ID)":"D1 Database ID","رمز عبور مدیریت (Admin Master Password)":"Admin Password","🎲 تولید تصادفی":"🎲 Generate Random","wrangler.toml (خروجی آماده دیپلوی)":"wrangler.toml (Ready for Deploy)","📥 دانلود فایل":"📥 Download File","📋 کپی کامل":"📋 Copy All","🚀 دستور دیپلوی به کلادفلر:":"🚀 Deploy to Cloudflare Command:","📋 کپی دستور":"📋 Copy Command","➡️ مرحله قبل":"⬅️ Previous Step","مرحله بعد: کلیدهای تلگرام و ربات کمکی":"Next Step: Telegram API Keys & Helper Bot","📱 مرحله سوم: اتصال کلاینت رسمی تلگرام و ساخت ربات کمکی":"📱 Step 3: Connect Telegram API Client & Create Helper Bot","ربات کمکی اختصاصی برای ارسال پیام‌های پاک‌شده، پیام‌های زمان‌دار قبل از انقضا و کدهای ورود به پیوی شما استفاده می‌شود.":"Your dedicated helper bot forwards anti-delete message recovery, anti-TTL media, and security alerts directly to your private chat.","🔑 ۱. شناسه و هش رسمی تلگرام":"🔑 1. Official Telegram Client ID & Hash","این مقادیر شناسه کلاینت رسمی تلگرام دسکتاپ هستند و سیستم به طور پیش‌فرض از آن‌ها استفاده می‌کند (نیازی به تغییر ندارید):":"These are official Telegram Desktop credentials used by default (no change required):","در صورت تمایل به دریافت کلید شخصی می‌توانید به سایت رسمی":"If you prefer your own personal Telegram developer credentials, visit","مراجعه کنید.":".","🤖 ۲. ایجاد ربات در BotFather تلگرام":"🤖 2. Create Bot in Telegram @BotFather","یک ربات اختصاصی و رایگان برای خود بسازید:":"Create a dedicated free bot for your account:","در تلگرام وارد آیدی":"In Telegram open","شوید.":".","دستور":"Send command","را بفرستید.":".","یک نام و یک یوزرنیم دلخواه (که به bot ختم شود) برگزینید.":"Choose a name and username ending in 'bot'.","توکن تلگرام داده‌شده را کپی و در کادر زیر وارد کنید.":"Copy the provided Telegram Bot Token and paste it below.","🤖 باز کردن ربات‌فادر در تلگرام":"🤖 Open @BotFather in Telegram","🔍 تستر و اعتبارسنجی آنلاین توکن ربات تلگرام":"🔍 Online Telegram Bot Token Validator & Ping Tester","توکن ربات خود را اینجا وارد کنید تا سیستم از طریق ارتباط مستقیم با API تلگرام صحت آن را تایید کند:":"Enter your bot token below to test live connectivity directly with Telegram API:","🚀 تست آنلاین توکن":"🚀 Test Bot Token Online","💬 ارسال پیام تست به پیوی شما از طریق این ربات:":"💬 Send test message to your Telegram chat via this bot:","📩 ارسال پیام تست":"📩 Send Test Message","مرحله بعد: رانر ۲۴ ساعته GitHub Actions":"Next Step: 24/7 GitHub Actions Runner","⚡ مرحله چهارم: فعال‌سازی رانر دائمی و ۲۴ ساعته در GitHub Actions":"⚡ Step 4: Enable 24/7 Persistent Runner in GitHub Actions","گیت‌هاب اکشنز ساعت زنده، بیوگرافی هوشمند و پایش ۲۴ ساعته را بدون قطعی و کاملاً رایگان روی سرورهای ابری گیت‌هاب روشن نگه می‌دارد.":"GitHub Actions keeps your live atomic clock, smart bio, and 24/7 monitors active without interruptions or server fees.","🛡️ مسیر ثبت سکرت‌ها در گیت‌هاب (Repository Secrets)":"🛡️ Repository Secrets Setup Path","🔗 رفتن مستقیم به صفحه Secrets ریپازیتوری شما":"🔗 Open Repository Secrets Page","در ریپازیتوری خود وارد مسیر زیر شوید و چهار متغیر زیر را ثبت نمایید:":"Navigate to the following settings path in your repo and add these four secrets:","نام Secret در گیت‌هاب":"Secret Name in GitHub","مقدار شما":"Your Value","عملیات کپی نام":"Copy Name Action","عملیات کپی مقدار":"Copy Value Action","کپی نام":"Copy Name","کپی مقدار":"Copy Value","▶️ استارت گردش کار رانر (Run Workflow)":"▶️ Run Workflow","🚀 رفتن به صفحه Actions ریپازیتوری شما":"🚀 Open Actions Page in Your Repo","در صفحه گیت‌هاب ریپوی خود، به تب":"In your GitHub repo go to tab","بروید ➔ گردش‌کار":"➔ Select workflow","را انتخاب کنید ➔ دکمه":"➔ Click button","را بزنید!":"!","🟢 رانر ابری فعال شده و هر ۴ ساعت به‌صورت خودکار چرخه اجرای خود را تمدید می‌کند.":"🟢 Cloud runner is active and automatically loops every 4 hours without interruption.","مرحله بعد: ورود به پنل و تست نهایی":"Next Step: Sign In & Final Launch","🎉 مرحله پنجم: چک‌لیست نهایی، بررسی سلامت و اتصال تلگرام":"🎉 Step 5: Final Readiness Checklist, Diagnostics & Connect","تبریک! تمام اجزای سیستم پیکربندی شدند. اکنون می‌توانید سلامت سیستم را چک کرده، نسخه پشتیبان دانلود کنید و وارد پنل شوید.":"Congratulations! All components are configured. You can now verify health, download backups, and sign in to the studio.","📋 چک‌لیست آمادگی نهایی:":"📋 Final Readiness Checklist:","روی هر مورد کلیک کنید تا تیک بخورد":"Click each item to check off","انشعاب پروژه (Fork) در حساب شخصی گیت‌هاب":"Fork project into your personal GitHub account","پروژه در ریپازیتوری شخصی شما کلون و آماده شد.":"Repository cloned and ready in your personal account.","کلادفلر ورکر و دیتابیس D1 ساخته و مستقر شد":"Cloudflare Worker & D1 Database deployed","پایگاه داده SQLite ابری با سقف ۱۰۰ هزار رایت رایگان در روز راه‌اندازی شد.":"Serverless SQLite database initialized with 100,000 free daily writes.","ربات کمکی در BotFather ایجاد و اعتبارسنجی شد":"Helper Bot created and validated in @BotFather","توکن ربات تایید شده و آماده دریافت پیام‌هاست.":"Bot token verified and ready to forward messages.","سکرت‌های گیت‌هاب اکشنز ست و رانر استارت شد":"GitHub Secrets set & Actions runner started","آدرس ورکر و رمز رانر در Secrets ثبت شدند.":"Worker URL and runner secret configured in repo settings.","👑 ورود مدیر کل به پنل مدیریت":"👑 Sign In to Admin Command Center","وارد روت":"Navigate to route","شده و رمز عبوری که در":"and use the password defined in","تنظیم کردید را بزنید تا به انبار لایسنس، تله‌متری و ارتقای کاربران دسترسی یابید.":"to access the license inventory, telemetry, and user management.","ورود به پنل مدیریت (/admin)":"Sign In to Admin Portal (/admin)","📱 اتصال اکانت تلگرام به سلف‌بات":"📱 Connect Telegram Account to Selfbot","در داشبورد کاربری، روی":"In the user dashboard, click","اسکن QR تلگرام":"Scan Telegram QR","بزنید و از تلگرام گوشی در مسیر":"and from Telegram app navigate to","کد را اسکن نمایید.":"to scan the QR code.","ورود به داشبورد کاربری استودیو":"Sign In to Studio User Dashboard","💾 دانلود پکیج پیکربندی (JSON Backup)":"💾 Download Configuration Package (JSON Backup)","🩺 عیب‌یابی و اسکن اتصالات ورکر":"🩺 Live Cloud Diagnostics & Connection Scan","🚀 ورود به استودیو و پایان راه‌اندازی":"🚀 Enter Studio & Finish Setup","🩺 عیب‌یابی زنده اتصالات و پیکربندی ورکر":"🩺 Live Worker Diagnostics & Health Scan","در حال ارتباط با ورکر کلادفلر و اعتبارسنجی اتصالات...":"Connecting to Cloudflare Worker and validating endpoints...","📦 خروجی یکجای سکرت‌های GitHub Actions":"📦 Bulk Export GitHub Actions Secrets","تمامی متغیرهای محیطی با فرمت":"All environment variables formatted as","آماده برای کپی یا استفاده مستقیم:":"ready to copy or use directly:","📋 کپی کل متن":"📋 Copy Entire Block","پیام سیستم":"System Notification","بررسی زنده سلامت دیتابیس و سرویس":"Check Live Database & Service Health","خروجی یکجای سکرت‌های رانر":"Bulk Export Runner Secrets","تغییر تم روز و شب":"Toggle Day / Night Mode","ورود مستقیم به پنل مدیریت":"Direct Entry to Admin Portal","ورود به پنل استودیو سلف‌بات":"Enter Selfbot Studio Panel","مثال: AmirHossein یا your-github-username":"e.g. AmirHossein or your-github-username","متن خروجی ترمینال را اینجا Paste کنید...":"Paste terminal output here...","مثال: b56bacf321a54731ba4a1e69a5619898":"e.g. b56bacf321a54731ba4a1e69a5619898","مثال: 4edef38a-95d4-4459-a904-5248a8952363":"e.g. 4edef38a-95d4-4459-a904-5248a8952363","شناسه عددی چت شما (Chat ID عددی)":"Your numerical Telegram Chat ID","۶":"6","۷":"7","۸":"8","۹":"9","تعداد کدهای مورد نظر":"Quantity of codes","مدت اعتبار لایسنس":"License Duration","۱ ماهه (۳۰ روز)":"1 Month (30 Days)","۳ ماهه (۹۰ روز)":"3 Months (90 Days)","۶ ماهه (۱۸۰ روز)":"6 Months (180 Days)","۱ ساله (۳۶۵ روز)":"1 Year (365 Days)","مادام‌العمر ♾️ (Lifetime VIP)":"Lifetime ♾️ (VIP)","پیشوند یا برچسب اختصاصی کدها (اختیاری)":"Custom Prefix or Tag (Optional)","مثال: NOWRUZ-SALE یا VIP-USER":"e.g. SUMMER-SALE or VIP-USER","<span>🎟️ تولید کدهای لایسنس جدید و اضافه به انبار</span>":"<span>🎟️ Generate New License Codes</span>","فیلتر بر اساس وضعیت کدها:":"Filter by Code Status:","همه کدها (کل انبار)":"All Codes (Total Inventory)","فقط کدهای آماده فروش (Unused)":"Available Codes Only (Unused)","فقط کدهای فعال‌شده (Redeemed)":"Redeemed Codes Only","کپی همه کدهای آماده فروش":"Copy All Available Codes","مدت اعتبار":"Duration","برچسب / یادداشت":"Tag / Note","مصرف‌کننده":"Redeemed By","تاریخ مصرف":"Redeemed Date","در حال بارگذاری لیست کدهای لایسنس...":"Loading license codes list...","مدیریت یکپارچه حساب‌های کاربری، بررسی سلف‌بات‌ها و نظارت امنیتی بر مشترکین":"Unified user accounts management, selfbot inspection, and security monitoring","جستجو بر اساس نام کاربری، شناسه عددی یا آی‌دی ربات...":"Search by username, chat ID, or bot ID...","همه سطوح دسترسی":"All Access Roles","فقط کاربران عادی":"Standard Users Only","فقط مدیران سیستم":"System Admins Only","همه وضعیت‌های ربات":"All Bot States","دارای سلف‌بات متصل":"With Connected Selfbot","بدون سلف‌بات":"Without Selfbot","نقش":"Role","نوع اشتراک":"Plan Type","وضعیت ربات":"Bot Status","سشن تلگرام":"Telegram Session","آخرین همگام‌سازی":"Last Synced","در حال بارگذاری اطلاعات کاربران...":"Loading user accounts data...","حساب شما به علت پایان مدت اعتبار اشتراک به حالت تعلیق درآمده است.":"Your account has been suspended due to expired subscription plan.","جهت فعال‌سازی مجدد سلف‌بات و باز شدن پنل استودیو، لطفاً کد لایسنس جدید خود را وارد نمایید:":"To reactivate your selfbot and unlock the studio panel, please enter your new license code:","کد لایسنس خریداری‌شده (مثال: ARIZO-ABCD-1234)":"Purchased license code (e.g. ARIZO-ABCD-1234)","<span>🚀 خروج از تعلیق و شارژ</span>":"<span>🚀 Unlock & Renew Subscription</span>","خروج از حساب و ورود با کاربری دیگر":"Log out and switch account","پیش‌نمایش":"Preview","کاربر پیش‌فرض":"Default User","بیوگرافی زنده (Bio)":"Dynamic Bio (Bio)","در انتظار همگام‌سازی با سرور تلگرام...":"Waiting for sync with Telegram server...","تقویم خورشیدی و زمان تهران:":"Solar Calendar & Tehran Time:","همگام با سرور":"Synced with Server","ورود به پنل کاربری":"Log In to Account","ثبت‌نام کاربر جدید":"Register New Account","نام کاربری شما:":"Your Username:","نام کاربری ورود (حداقل ۳ حرف انگلیسی)":"Login username (min 3 chars)","رمز عبور حساب:":"Account Password:","رمز عبور ایمن (حداقل ۸ کاراکتر)":"Secure password (min 8 chars)","<span>ورود به داشبورد Arizo Self</span>":"<span>Log In to Arizo Self</span>","کد لایسنس خریداری‌شده:":"Purchased License Code:","(الزامی)":"(Required)","کد لایسنس خرید اشتراک (مثال: ARIZO-XXXX-YYYY)":"Purchased license code (e.g. ARIZO-XXXX-YYYY)","💡 برای دریافت کد اشتراک به ادمین یا ربات فروش مراجعه نمایید.":"💡 To get a license code, contact admin or support.","نام کاربری انتخابی:":"Desired Username:","نام کاربری انگلیسی منحصر‌به‌فرد":"Unique alphanumeric username","رمز عبور:":"Password:","حداقل ۸ کاراکتر شامل حروف و اعداد":"At least 8 characters with letters & numbers","تکرار رمز عبور:":"Confirm Password:","تکرار رمز عبور انتخابی":"Confirm your password","<span>ثبت‌نام و فعال‌سازی اشتراک Arizo Self</span>":"<span>Register & Activate Subscription</span>","اتصال مستقیم و رسمی اکانت تلگرام":"Direct & Official Telegram Account Connection","ورود با شماره موبایل و کد پیامکی (سریع‌ترین و مطمئن‌ترین روش رسمی)":"Log in via Phone Number & SMS code (Fastest & Most Secure)","ورود با رشته سشن آماده (Pyrogram / Telethon String Session)":"Log in via String Session (Pyrogram / Telethon)","شماره موبایل تلگرام شما (با کد کشور، مثلاً 989123456789+):":"Your Telegram Phone Number (with country code, e.g. +1...):","شماره همراه با فرمت بین‌المللی":"Phone number with international format","<span>دریافت کد تأیید ورود</span>":"<span>Receive Login Code</span>","کد تأیید ۵ رقمی ارسال‌شده در تلگرام:":"5-digit verification code sent in Telegram:","کد ۵ رقمی ارسالی":"5-digit verification code","رمز تأیید هویت دو مرحله‌ای (در صورت فعال بودن در تلگرام):":"Two-Step Verification Password (if enabled on Telegram):","رمز عبور دو مرحله‌ای (۲FA)":"Two-Step Password (2FA)","<span>تأیید و اتصال به سلف‌بات</span>":"<span>Verify & Connect Selfbot</span>","رشته سشن کامل (String Session):":"Full String Session:","رشته سشن طولانی تلگرام (String Session)":"Long Telegram String Session","<span>بررسی و فعال‌سازی سشن</span>":"<span>Verify & Activate Session</span>","استودیوی پیکربندی سلف‌بات هوشمند":"Intelligent Selfbot Configuration Studio","<span>💾 ذخیره و اعمال تغییرات استودیو</span>":"<span>💾 Save & Apply Studio Changes</span>","مرکز تله‌متری و وضعیت لحظه‌ای سلف‌بات":"Telemetry Center & Real-Time Bot Status","همگام‌سازی آنی":"Instant Sync","توقف موقت":"Pause","تعویض اکانت تلگرام":"Switch Telegram Account","وضعیت اتصال ربات:":"Bot Connection Status:","آخرین استعلام و عملکرد:":"Last Query & Performance:","توسعه‌یافته با بالاترین استانداردهای امنیتی ابری و توزیع لبه‌ای":"Engineered with highest cloud security standards & edge distribution","تنظیمات حساب و امنیت کاربری":"Account Settings & User Security","شارژ و تمدید اشتراک با کد لایسنس جدید":"Renew Subscription with New License Code","کد لایسنس جدید (مثال: ARIZO-EXT-1234)":"New license code (e.g. ARIZO-EXT-1234)","اعمال کد تمدید":"Redeem Extension Code","تغییر رمز عبور حساب کاربری":"Change Account Password","رمز عبور فعلی:":"Current Password:","رمز عبور فعلی حساب":"Current account password","رمز عبور جدید:":"New Password:","رمز جدید (حداقل ۸ کاراکتر)":"New password (min 8 chars)","ذخیره رمز عبور جدید":"Save New Password","قطع ارتباط اکانت تلگرام از سلف‌بات":"Disconnect Telegram Account from Selfbot","حذف کامل حساب کاربری و تمامی داده‌ها":"Permanently Delete Account & All Data","تولید کدهای لایسنس جدید":"Generate New License Codes","کدهای بازیابی اضطراری":"Emergency Recovery Codes","شناسه D1":"D1 ID","شناسه KV":"KV ID","با موفقیت استخراج و در فیلدها جایگذاری شد!":"Successfully extracted and filled into fields!","اطلاعات با موفقیت از خروجی ترمینال شناسایی شدند! ✨":"Information successfully recognized from terminal output! ✨","فارسی":"Persian","٪ تکمیل شده":"% Completed","مرحله ۲ از ۵: کلادفلر و پایگاه داده D1":"Step 2 of 5: Cloudflare & D1 Database","مرحله ۳ از ۵: تلگرام و ربات کمکی":"Step 3 of 5: Telegram & Helper Bot","مرحله ۴ از ۵: رانر ۲۴ ساعته GitHub Actions":"Step 4 of 5: 24/7 GitHub Actions Runner","مرحله ۵ از ۵: چک‌لیست نهایی، سلامت و اتصال":"Step 5 of 5: Final Checklist, Health & Connect","رمز تصادفی ایمن تولید شد 🎲":"Secure random password generated 🎲","# متغیرهای محیطی کلاینت تلگرام و کلیدهای مدیریت\\n":"# Telegram Client Environment Variables & Admin Keys\\n","# متغیرهای محیطی کلاینت تلگرام و کلیدهای مدیریت":"# Telegram Client Environment Variables & Admin Keys","محتوای فایل wrangler.toml کپی شد! 📋":"wrangler.toml contents copied! 📋","فایل wrangler.toml با موفقیت دانلود شد! 📥":"wrangler.toml downloaded successfully! 📥","پکیج پشتیبان کانفیگ ذخیره شد! 💾":"Configuration backup saved! 💾","آدرس دامنه ورکر کپی شد 📋":"Worker URL copied to clipboard 📋","رمز رانر کپی شد 📋":"Runner secret copied to clipboard 📋","📋 در حافظه کپی شد!":"📋 Copied to clipboard!","خطا در کپی خودکار؛ لطفاً دستی کپی کنید":"Auto-copy failed; please copy manually","<span>⏳ در حال ساخت جداول...</span>":"<span>⏳ Creating tables...</span>","✅ جداول پایگاه داده D1 با موفقیت ساخته شدند!":"✅ Database D1 tables created successfully!","<span>✅ جداول آماده است</span>":"<span>✅ Tables ready</span>","خطا در ایجاد جداول D1":"Error creating D1 tables","<span>⚡ تلاش مجدد ساخت جداول</span>":"<span>⚡ Retry Creating Tables</span>","خطا در ارتباط با سرور:":"Server connection error:","<span>⚡ ساخت خودکار جداول D1</span>":"<span>⚡ Auto Create D1 Tables</span>","لطفاً ابتدا توکن ربات را وارد کنید!":"Please enter bot token first!","<span>⏳ در حال بررسی...</span>":"<span>⏳ Verifying...</span>",">در حال ارتباط با API تلگرام...</div>":">Connecting to Telegram API...</div>",">✅ توکن تلگرام کاملاً معتبر و فعال است!</div>":">✅ Telegram token is valid and active!</div>","<div><strong>نام ربات:</strong>":"<div><strong>Bot Name:</strong>","<div><strong>یوزرنیم:</strong> @":"<div><strong>Username:</strong> @","<div><strong>شناسه عددی ربات:</strong> <code>":"<div><strong>Bot Numerical ID:</strong> <code>","ربات با موفقیت تایید شد 🤖":"Bot verified successfully 🤖","<strong>❌ خطای تلگرام:</strong>":"<strong>❌ Telegram Error:</strong>","توکن نامعتبر است.":"Invalid bot token.","<span>🚀 تست آنلاین توکن</span>":"<span>🚀 Test Bot Token Online</span>","لطفاً توکن ربات و Chat ID عددی خود را وارد کنید!":"Please enter bot token and numerical Chat ID!","<span>⏳ در حال ارسال...</span>":"<span>⏳ Sending...</span>","در حال ارسال پیام تست به تلگرام...":"Sending test message to Telegram...","🎉 پیام با موفقیت در تلگرام دریافت شد! ربات آماده به کار است.":"🎉 Message received in Telegram! Bot is ready.","پیام تلگرام ارسال شد! 📩":"Telegram message sent! 📩","❌ خطا:":"❌ Error:","ارسال نشد. اطمینان حاصل کنید ربات را در تلگرام استارت کرده‌اید.":"Not sent. Make sure you started the bot in Telegram.","خطا در ارتباط:":"Connection error:","<span>📩 ارسال پیام تست</span>":"<span>📩 Send Test Message</span>",">در حال دریافت وضعیت زنده از سرور...</div>":">Fetching live server status...</div>",">🟢 متصل و آماده</span>":">🟢 Connected & Ready</span>",">🔴 تعریف نشده</span>":">🔴 Not Defined</span>",">🟢 متصل و جداول آماده (تعداد کلیدها:":">🟢 Connected & Tables Ready (Keys count:",">🟡 دیتابیس متصل است اما جداول هنوز ساخته نشده‌اند</span>":">🟡 Database connected but tables not created yet</span>",">🔴 متصل نیست</span>":">🔴 Not Connected</span>",">🟢 فعال و امن</span>":">🟢 Active & Secure</span>",">⚠️ بدون رمز</span>":">⚠️ No Password Set</span>",">⚡ ساخت فوری جداول دیتابیس D1</button>":">⚡ Create D1 Database Tables Instantly</button>","<span>🌐 آدرس دامنه ورکر:</span>":"<span>🌐 Worker Domain URL:</span>","<span>⚡ سرعت پاسخ سرور (Latency):</span>":"<span>⚡ Server Latency:</span>","<span>⚡ حافظه پرسرعت Cloudflare KV:</span>":"<span>⚡ Cloudflare KV Storage:</span>","<span>🗄️ پایگاه داده Cloudflare D1:</span>":"<span>🗄️ Cloudflare D1 Database:</span>","<span>🔑 کلید مستر ادمین (ADMIN_PASSWORD):</span>":"<span>🔑 Master Admin Key:</span>","<span>📱 کلاینت رسمی تلگرام (API_ID):</span>":"<span>📱 Telegram Official API_ID:</span>",">🟢 استاندارد (2040)</span>":">🟢 Standard (2040)</span>","⚪ پیش‌فرض":"⚪ Default",">بستن پنجره عیب‌یابی</button>":">Close Diagnostic Window</button>",">خطا در دریافت وضعیت سرور.</div>":">Error fetching server status.</div>",">عدم امکان دسترسی به سرور:":">Cannot access server:","تمام سکرت‌ها به صورت یکجا کپی شدند! 📦":"All secrets copied to clipboard! 📦","لطفاً کد لایسنس تمدید را وارد کنید":"Please enter extension license code","حساب شما با موفقیت از حالت تعلیق خارج و شارژ شد! 🎉":"Your account has been unlocked and renewed! 🎉","کد وارد شده نامعتبر است":"Invalid license code","خطای ارتباط با سرور":"Server connection error","کد لایسنس را وارد کنید":"Please enter license code","اشتراک Arizo Self شما تمدید گردید! 🎉":"Your Arizo Self subscription was renewed! 🎉","کد نامعتبر است":"Invalid code","خطای شبکه":"Network error","نام کاربری باید حداقل ۳ کاراکتر باشد":"Username must be at least 3 characters","رمز عبور باید حداقل ۸ کاراکتر باشد":"Password must be at least 8 characters","تکرار رمز عبور تطابق ندارد":"Passwords do not match","حساب Arizo Self با موفقیت فعال شد ✨":"Arizo Self account activated successfully ✨","خطا در ثبت‌نام":"Registration error","نام کاربری و رمز عبور را وارد کنید":"Please enter username and password","کد تایید دو مرحله‌ای وارد نشد":"2FA code not entered","خوش آمدید! ورود دو مرحله‌ای موفقیت‌آمیز بود ✅":"Welcome! 2FA login successful ✅","کد ۲FA نادرست است":"Invalid 2FA code","خوش آمدید! ورود موفقیت‌آمیز بود ✅":"Welcome! Login successful ✅","نام کاربری یا رمز نادرست است":"Invalid username or password","لطفاً هر دو رمز را وارد کنید":"Please enter both passwords","رمز جدید باید حداقل ۸ کاراکتر باشد":"New password must be at least 8 characters","رمز عبور تغییر یافت 🔒":"Password changed successfully 🔒","خطا در تغییر رمز":"Error changing password","سلف‌بات فعال شد 🟢":"Selfbot activated 🟢","سلف‌بات متوقف شد ⏸️":"Selfbot paused ⏸️","خطا در حذف حساب":"Error deleting account","شماره تلفن را وارد کنید":"Please enter phone number","کد ۵ رقمی به تلگرام ارسال گردید ✅":"5-digit code sent to Telegram ✅","کد را وارد کنید":"Please enter verification code","اکانت دارای تأیید دومرحله‌ای است 🔒":"Account has two-step verification enabled 🔒","تلگرام با موفقیت متصل شد! 🎉":"Telegram connected successfully! 🎉","رمز دوعاملی را وارد کنید":"Please enter 2FA password","تلگرام متصل و سشن امن شد! 🎉":"Telegram connected & session secured! 🎉","خطا:":"Error:","سشن را وارد کنید":"Please enter string session","سشن مستقیم متصل شد! 🚀":"Direct session connected! 🚀","خطا در ثبت سشن":"Error registering session","قالب بیوگرافی انتخاب و اعمال شد ✨":"Bio template applied successfully ✨","تنظیمات استودیو Arizo ذخیره و آنی اعمال شد ✨":"Arizo Studio settings saved & applied ✨","خطا در ذخیره‌سازی":"Error saving settings","لطفاً توکن ربات دریافتی از BotFather@ را وارد کنید":"Please enter bot token from @BotFather","ربات با موفقیت متصل شد! 🎉":"Bot connected successfully! 🎉","خطا در اعتبارسنجی توکن":"Error validating token","اتصال ربات با موفقیت قطع شد و حافظه کلادفلر پاکسازی گردید ✨":"Bot disconnected & Cloudflare storage cleaned ✨","خطا در قطع اتصال ربات":"Error disconnecting bot","خطای شبکه در ارتباط با سرور":"Network error communicating with server","شناسه عددی تلگرام باید شامل ۵ تا ۱۵ رقم باشد":"Numerical Telegram ID must be 5 to 15 digits","ربات با موفقیت روی شناسه قفل شد! 🔒":"Bot successfully locked to ID! 🔒","خطا در ثبت شناسه مالک":"Error registering owner ID","🗑️ کلید API هوش مصنوعی به طور کامل پاکسازی شد و تداخل برطرف گردید!":"🗑️ AI API Key cleared and conflicts resolved!","ساعت تلگرام با فونت و تنظیمات جدید آپدیت شد! 🚀":"Telegram clock updated with new style! 🚀","ناشناخته":"Unknown","اتصال تلگرام قطع گردید":"Telegram disconnected","خطا در بارگذاری حساب":"Error loading account","خطا در راه‌اندازی ۲FA":"Error setting up 2FA","بارکد QR و کلید اختصاصی با موفقیت ساخته شد 📷":"QR code & secret key generated successfully 📷","کلید محرمانه ۲FA کپی شد 📋":"2FA Secret Key copied 📋","خطا در کپی کلید":"Error copying key","کد بازیابی موجود نیست":"No recovery code available","تمامی کدهای اضطراری کپی شدند 📋":"All recovery codes copied 📋","خطا در کپی کدها":"Error copying codes","لطفاً کد ۶ رقمی تولیدشده در اپلیکیشن را به درستی وارد کنید":"Please enter valid 6-digit authenticator code","کد وارد شده نادرست یا منقضی است. لطفاً کد جدید اپلیکیشن را وارد کنید.":"Code invalid or expired. Please enter latest app code.","احراز هویت دو مرحله‌ای با موفقیت فعال شد! 🎉":"Two-Factor Authentication enabled! 🎉","خطای شبکه در برقراری ارتباط":"Network connection error","احراز هویت ۲FA غیرفعال شد":"2FA Authentication disabled","رمز عبور یا کد نامعتبر است":"Invalid password or code","خطای سرور":"Server error","رمز عبور حساب برای رمزنگاری فایل بکاپ الزامی است":"Account password required to encrypt backup","خطا در ایجاد بکاپ":"Error creating backup","فایل پشتیبان رمزنگاری‌شده دانلود شد ✅":"Encrypted backup downloaded ✅","خطا در دریافت بکاپ":"Error downloading backup","لطفاً ابتدا فایل بکاپ (.json) را انتخاب کنید":"Please select a backup file (.json)","رمز عبور فایل بکاپ را وارد کنید":"Please enter backup password","بازیابی نسخه پشتیبان با موفقیت انجام شد! 🔄":"Backup restored successfully! 🔄","خطا در بازیابی (رمز اشتباه است یا فایل دستکاری شده)":"Restore error (incorrect password or corrupted file)","خطا در پردازش فایل بکاپ":"Error processing backup file","ثانیه پیش":"seconds ago","دقیقه پیش":"minutes ago","در انتظار نخستین همگام‌سازی":"Waiting for first sync","فعال و محافظت‌شده 🟢":"Active & Protected 🟢","اشتراک: معلق و منقضی 🔴":"Subscription: Suspended & Expired 🔴","⏸️ به حالت تعلیق درآمده (منقضی)":"⏸️ Suspended (Expired)","🔒 سلف‌بات معلق است":"🔒 Selfbot is Suspended","تعلیق به علت پایان مدت زمان اشتراک":"Suspended due to subscription expiry","دائمی ♾️":"Lifetime ♾️","روز اعتبار باقی‌مانده":"days remaining","اشتراک:":"Subscription:","ربات متصل":"Bot Connected","🔒 قفل روی شناسه:":"🔒 Locked to ID:","ربات به صورت ۱۰۰٪ انحصاری فقط به این شناسه عددی پاسخ می‌دهد و برای سایرین مسدود است.":"Bot exclusively responds only to this numerical ID and ignores all others.","🔒 آماده قفل خودکار با اولین /start":"🔒 Ready to auto-lock on first /start","دستور دانلود و نصب در حافظه کپی شد! 📋":"Install command copied to clipboard! 📋","ابتدای استودیو":"Start of Studio","پایان استودیو":"End of Studio","Language switched to English 🇬🇧":"Language switched to English 🇬🇧","زبان به فارسی تغییر یافت 🇮🇷":"زبان به فارسی تغییر یافت 🇮🇷","تغییر زبان به فارسی":"Switch Language to Persian","Switch Language to English":"Switch Language to English","تغییر زبان به انگلیسی":"Switch Language to English","کدهای بازیابی اضطراری Arizo Self (2FA Recovery Codes):\\n":"Arizo Self Emergency Recovery Codes (2FA):\\n","برای غیرفعال‌سازی ۲FA، رمز عبور حساب کاربری یا کد ۶ رقمی Authenticator را وارد کنید:":"To disable 2FA, enter account password or 6-digit Authenticator code:","شناسه عددی اکانت تلگرام خود را وارد کنید (فقط این شناسه اجازه ارسال دستور به ربات را خواهد داشت):":"Enter numerical Telegram ID (only this ID will be allowed to issue bot commands):","آیا از قطع اتصال سلف‌بات اطمینان دارید؟":"Are you sure you want to disconnect selfbot?","<span>تأیید کد ارسالی تلگرام</span>":"<span>Verify Telegram SMS Code</span>","<span>ورود با رمز دوعاملی</span>":"<span>Login with 2FA Password</span>","<span>تلاش مجدد</span>":"<span>Retry</span>","<span>اتصال و رمزنگاری فوری با AES-256</span>":"<span>Connect & Encrypt with AES-256</span>","<span>⚡ اتصال و فعال‌سازی وب‌هوک</span>":"<span>⚡ Connect & Activate Webhook</span>","<span>🔌 قطع اتصال ربات</span>":"<span>🔌 Disconnect Bot</span>","<span>⚡ تست به‌روزرسانی آنی</span>":"<span>⚡ Test Real-time Update</span>","<span>🔐 راه‌اندازی و فعال‌سازی ۲FA</span>":"<span>🔐 Setup & Enable 2FA</span>","<span>تأیید نهایی و فعال‌سازی ۲FA</span>":"<span>Confirm & Activate 2FA</span>","دریافت کد تأیید ورود":"Receive Login Code","تأیید و اتصال به سلف‌بات":"Verify & Connect Selfbot","بررسی و فعال‌سازی سشن":"Verify & Activate Session","⏳ در حال ساخت جداول...":"⏳ Creating tables...","✅ جداول آماده است":"✅ Tables ready","⚡ تلاش مجدد ساخت جداول":"⚡ Retry Creating Tables","⏳ در حال بررسی...":"⏳ Verifying...","نام ربات:":"Bot Name:","شناسه عددی ربات:":"Bot Numerical ID:","❌ خطای تلگرام:":"❌ Telegram Error:","⏳ در حال ارسال...":"⏳ Sending...","🌐 آدرس دامنه ورکر:":"🌐 Worker Domain URL:","⚡ سرعت پاسخ سرور (Latency):":"⚡ Server Latency:","⚡ حافظه پرسرعت Cloudflare KV:":"⚡ Cloudflare KV Storage:","🗄️ پایگاه داده Cloudflare D1:":"🗄️ Cloudflare D1 Database:","🔑 کلید مستر ادمین (ADMIN_PASSWORD):":"🔑 Master Admin Key:","📱 کلاینت رسمی تلگرام (API_ID):":"📱 Telegram Official API_ID:","تأیید کد ارسالی تلگرام":"Verify Telegram SMS Code","ورود با رمز دوعاملی":"Login with 2FA Password","تلاش مجدد":"Retry","🗑️ حذف کامل کاربر":"🗑️ Delete User Permanently","🔐 امنیت، سطح دسترسی و ۲FA":"🔐 Security, Access Role & 2FA","امن":"Secure","سطح دسترسی و نقش:":"Access Role & Permissions:","وضعیت ورود دو مرحله‌ای:":"Two-Factor Auth Status:","کدهای پشتیبان باقی‌مانده:":"Remaining Backup Codes:","کد آماده مصرف":"codes available","ندارد":"None","رمزنگاری نشست‌ها:":"Session Encryption:","وضعیت حساب کاربری:":"Account Status:","حساب معلق است ⏸️":"Account is Suspended ⏸️","حساب مجاز و فعال 🟢":"Account is Active & Licensed 🟢","🟢 متصل (سشن رمزنگاری‌شده)":"🟢 Connected (Encrypted Session)","🟢 درحال اجرا و پردازش":"🟢 Running & Processing","⏸️ متوقف‌شده توسط کاربر":"⏸️ Paused by User","📱 مانیتورینگ سلف‌بات تلگرام (MTProto)":"📱 Telegram Selfbot Monitoring (MTProto)","سشن امن":"Secure Session","وضعیت سشن تلگرام:":"Telegram Session Status:","وضعیت اجرای سلف‌بات:":"Selfbot Execution Status:","شناسه عددی کاربر در تلگرام:":"Telegram Numerical Chat ID:","حالت شبح و خواندن مخفی (Ghost):":"Ghost Mode (Silent Read):","🟢 روشن":"🟢 ON","پاسخ هوشمند هوش مصنوعی (AI):":"Smart AI Reply:","ساعت فونتی و بیو داینامیک:":"Stylized Clock & Dynamic Bio:","وضعیت عدم حضور (AFK):":"Away From Keyboard (AFK):","🟢 فعال":"🟢 Active","کاربران بی‌صدا / مسدود شده:":"Muted / Blacklisted Users:","⏸️ متوقف‌سازی سلف‌بات":"⏸️ Pause Selfbot","▶️ فعال‌سازی سلف‌بات":"▶️ Resume Selfbot","🔌 قطع سشن تلگرام":"🔌 Terminate Telegram Session","سیستم کاملاً سالم، پایدار و بدون خطاست 🟢":"System is healthy, stable & error-free 🟢","🩺 عیب‌یابی سلامت، لاگ‌ها و اشتراک":"🩺 Health Diagnostics, Logs & Plan","آخرین همگام‌سازی (Heartbeat):":"Last Heartbeat / Sync:","بدون لاگ":"No logs recorded","وضعیت سلامت و خطاها:":"Health Status & Errors:","پلن اشتراک فعلی:":"Current Subscription Plan:","مدت اعتبار باقی‌مانده:":"Remaining Validity:","کد لایسنس مصرف‌شده:":"Redeemed License Code:","🔄 پاکسازی خطاها":"🔄 Clear Error Logs","⭐ تغییر یا ارتقای اشتراک":"⭐ Upgrade or Change Plan","آیا از غیرفعال‌سازی تایید دو مرحله‌ای (۲FA) برای کاربر":"Are you sure you want to disable 2FA for user","اطمینان دارید؟ کاربر می‌تواند بدون نیاز به کد Authenticator با رمز عبور خود وارد شود.":"Are you sure? The user will be able to log in with their password without 2FA Authenticator.","۲FA کاربر":"2FA for user","با موفقیت غیرفعال و ریست شد 🎉":"successfully disabled and reset 🎉","خطا در غیرفعال‌سازی ۲FA":"Error disabling 2FA","آیا از قطع اتصال کامل ربات کمکی تلگرام برای کاربر":"Are you sure you want to completely disconnect the helper bot for user","و حذف وب‌هوک اطمینان دارید؟":"and delete webhook?","ربات کمکی کاربر":"Helper bot for user","قطع و حافظه آزاد شد ✨":"disconnected & memory cleared ✨","خطا در قطع ربات":"Error disconnecting bot","قابلیت ربات با موفقیت تغییر یافت ✨":"Bot feature toggled successfully ✨","خطا در تغییر قابلیت ربات":"Error changing bot feature","قابلیت سلف‌بات تغییر یافت ✨":"Selfbot feature toggled successfully ✨","خطا در تغییر قابلیت":"Error toggling feature","خطاهای کاربر":"Errors for user","پاکسازی شد 🧹":"cleared 🧹","خطا در پاکسازی":"Error clearing logs","کلمه عبور جدید را برای کاربر":"Enter new password for user","وارد کنید (حداقل ۶ کاراکتر):":"enter (min 6 characters):","کلمه عبور باید حداقل ۶ کاراکتر باشد":"Password must be at least 6 characters","رمز عبور کاربر":"Password for user","با موفقیت به روز شد 🔑":"updated successfully 🔑","کد":"Code","کپی شد! آماده ارسال به خریدار ✨":"copied! Ready to send to buyer ✨","تولید کدهای امن Arizo...":"Generating secure Arizo codes...","دائمی":"Lifetime","روزه سفارشی":"Days Custom","کد لایسنس جدید (":"New license code (",") با موفقیت تولید شد 🎉":") generated successfully 🎉","خطا در ساخت کد":"Error generating code","انتخاب یا تغییر نوع اشتراک برای کاربر":"Select or change subscription for user",":\\n1: ۱ ماهه (۳۰ روز)\\n2: ۳ ماهه (۹۰ روز)\\n3: ۶ ماهه (۱۸۰ روز)\\n4: دائمی و نامحدود (Lifetime)\\nیا تعداد روز دلخواه را مستقیماً وارد کنید (مثلاً 45):":":\\n1: 1 Month (30 Days)\\n2: 3 Months (90 Days)\\n3: 6 Months (180 Days)\\n4: Lifetime & Unlimited\\nOr enter custom days count directly (e.g. 45):","گزینه یا تعداد روز نامعتبر است":"Invalid option or days count","اشتراک کاربر":"Subscription for user","با موفقیت به":"successfully changed to","تغییر یافت! 🎉":"updated! 🎉","خطا در تغییر اشتراک":"Error updating subscription","آیا از حذف کد":"Are you sure you want to delete code","اطمینان دارید؟":"are you sure?","کد حذف شد":"Code deleted","نام کاربری که می‌خواهید به سطح «مدیر سامانه» (Admin) ارتقا یابد را وارد کنید:":"Enter username to promote to System Administrator (Admin):","این کاربر در حال حاضر مدیر یا مالک سامانه است.":"This user is already a System Admin or Owner.","حذف کامل کاربر":"Delete User Permanently","قطع تلگرام":"Disconnect Telegram","تغییر وضعیت تعلیق":"Toggle Suspension","تنزل به کاربر عادی":"Demote to Standard User","تغییر وضعیت ربات":"Toggle Bot Status","آیا از حذف کامل کاربر «":"Are you sure you want to permanently delete user '","» اطمینان دارید؟ تمامی داده‌های این کاربر پاک خواهد شد.":"'? All data for this user will be erased.","آیا از لغو دسترسی مدیریت و تنزل کاربر «":"Are you sure you want to revoke admin access and demote user '","» به کاربر عادی اطمینان دارید؟":"' to standard user?","آیا از ارتقای کاربر «":"Are you sure you want to promote user '","» به سطح «مدیر سامانه» (Admin) اطمینان دارید؟\\nاین کاربر پس از ارتقا به تمام بخش‌های پنل مدیریت دسترسی خواهد داشت.":"' to System Administrator?\\nThis user will have full access to all admin panel sections.","آیا از":"Are you sure you want to","خروج از تعلیق":"Unsuspend","تعلیق":"Suspend","کاربر «":"user '","» اطمینان دارید؟":"'?","» با موفقیت به مدیر سامانه ارتقا یافت 🛡️":"' promoted to System Administrator successfully 🛡️","دسترسی مدیریت لغو و کاربر «":"Admin access revoked and user '","» به کاربر عادی تبدیل شد 👤":"' demoted to standard user 👤","با موفقیت انجام شد":"Completed successfully","خطا در اجرای عملیات":"Error executing operation","خطای شبکه در برقراری ارتباط با سرور":"Network error communicating with server","تمدید آنی...":"Extending...","ایجاد حساب Arizo...":"Creating Arizo account...","ورود...":"Logging in...","حساب شما مجهز به تایید دو مرحله‌ای (2FA) است. لطفاً کد ۶ رقمی Google Authenticator یا کد بازیابی را وارد نمایید:":"Your account is protected by 2FA. Please enter your 6-digit Authenticator or recovery code:","بررسی کد ۲FA...":"Verifying 2FA code...","⚠️ نیازمند اتصال مجدد تلگرام":"⚠️ Telegram Reconnect Required","▶️ تلاش مجدد سلف‌بات":"▶️ Retry Selfbot","🟢 فعال و در حال اجرای خودکار":"🟢 Active & Running 24/7","⏸️ توقف موقت سلف‌بات":"⏸️ Pause Selfbot","⏸️ متوقف‌شده (Pause)":"⏸️ Paused","▶️ فعال‌سازی مجدد سلف‌بات":"▶️ Resume Selfbot","جهت تأیید حذف دائم حساب Arizo، رمز عبور خود را وارد کنید:":"To confirm permanent deletion of your Arizo account, enter password:","حساب شما پاکسازی شد.":"Your account has been deleted.","آیا مایل به خروج از حساب کاربری Arizo هستید؟":"Do you want to log out of your Arizo account?","ارسال کد به":"Sending code to","خطا در ارسال کد":"Error sending code","بررسی کد...":"Verifying code...","اعتبارسنجی 2FA...":"Validating 2FA...","رمز اشتباه است":"Incorrect password","اتصال به سشن...":"Connecting to session...","فونت:":"Font:","بیوگرافی زنده غیرفعال است (ساده / پیش‌فرض)":"Live bio disabled (Simple / Default)","ذخیره درحال انجام...":"Saving in progress...","بررسی و اتصال به تلگرام...":"Verifying & connecting to Telegram...","ربات @":"Bot @","با موفقیت متصل شد! 🎉":"connected successfully! 🎉","آیا از قطع اتصال ربات تلگرام اطمینان دارید؟ تمام وب‌هوک‌ها و دسترسی‌های مینی‌اپ لغو شده و حافظه کلادفلر فوراً آزاد می‌گردد.":"Are you sure you want to disconnect Telegram bot? All webhooks and Mini App access will be revoked.","درحال قطع اتصال...":"Disconnecting...","همگام‌سازی فوری...":"Instant sync...","👑 مدیر":"👑 Admin","ایجاد بارکد QR...":"Generating QR Code...","درحال اعتبارسنجی...":"Validating...","📝 بیوگرافی زنده":"📝 Dynamic Bio","🤖 منشی خودکار":"🤖 Auto-Secretary","🔇 فیلتر سکوت":"🔇 Silence Filter","🌙 حالت خواب":"🌙 Sleep Mode","⚡ ربات و لاگر":"⚡ Bot & Logger","👻 حالت شبح":"👻 Ghost Mode","🤖 پاسخ هوشمند AI":"🤖 Smart AI Reply","🔐 امنیت و ۲FA":"🔐 Security & 2FA","نام کاربری (حداقل ۳ کاراکتر)":"Username (min 3 chars)","رمز عبور (حداقل ۸ کاراکتر)":"Password (min 8 chars)","کد لایسنس فعال‌سازی (ARIZO-...)":"Activation License Code (ARIZO-...)","تکرار مجدد رمز عبور":"Confirm your password"};

    var faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    var enDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    window.translateDOM = function(root, lang) {
      var isEn = (lang === 'en');
      if (!root) root = document.body;
      if (!root) return;

      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
      var node;
      while ((node = walker.nextNode())) {
        if (node.parentElement && (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE')) {
          continue;
        }
        var raw = node.nodeValue;
        if (!raw) continue;
        var trimmed = raw.trim();
        if (!trimmed) continue;

        // Skip language button text itself
        if (node.parentElement && node.parentElement.id === 'langText') continue;

        if (typeof node.__origFa === 'undefined') {
          if (window.TRANSLATIONS_MAP[trimmed]) {
            node.__origFa = trimmed;
            node.__leadWs = raw.substring(0, raw.indexOf(trimmed));
            node.__trailWs = raw.substring(raw.indexOf(trimmed) + trimmed.length);
          } else if (trimmed === 'و') {
            node.__origFa = 'و';
            node.__leadWs = raw.substring(0, raw.indexOf(trimmed));
            node.__trailWs = raw.substring(raw.indexOf(trimmed) + trimmed.length);
          }
        }

        if (node.__origFa) {
          if (isEn) {
            var trans = window.TRANSLATIONS_MAP[node.__origFa] || (node.__origFa === 'و' ? 'and' : node.__origFa);
            node.nodeValue = node.__leadWs + trans + node.__trailWs;
          } else {
            node.nodeValue = node.__leadWs + node.__origFa + node.__trailWs;
          }
        } else if (isEn && /^[۰-۹]+$/.test(trimmed)) {
          if (typeof node.__origFaNum === 'undefined') node.__origFaNum = trimmed;
          var converted = trimmed;
          for (var d = 0; d < 10; d++) {
            converted = converted.split(faDigits[d]).join(enDigits[d]);
          }
          node.nodeValue = raw.replace(trimmed, converted);
        } else if (!isEn && node.__origFaNum) {
          node.nodeValue = raw.replace(trimmed, node.__origFaNum);
        }
      }

      var elementsWithAttr = root.querySelectorAll ? root.querySelectorAll('[placeholder], [title], [aria-label]') : [];
      elementsWithAttr.forEach(function(el) {
        ['placeholder', 'title', 'aria-label'].forEach(function(attr) {
          var val = el.getAttribute(attr);
          if (!val) return;
          var trimmed = val.trim();
          var key = '__origFa_' + attr;
          if (typeof el[key] === 'undefined') {
            if (window.TRANSLATIONS_MAP[trimmed]) {
              el[key] = trimmed;
            }
          }
          if (el[key]) {
            if (isEn) {
              var trans = window.TRANSLATIONS_MAP[el[key]];
              if (trans) el.setAttribute(attr, trans);
            } else {
              el.setAttribute(attr, el[key]);
            }
          }
        });
      });
    };

    var wizI18nObserver = null;
    function setupWizI18nObserver() {
      if (typeof MutationObserver === 'undefined') return;
      if (wizI18nObserver) wizI18nObserver.disconnect();

      wizI18nObserver = new MutationObserver(function(mutations) {
        if (window.currentLang !== 'en') return;
        for (var i = 0; i < mutations.length; i++) {
          var mut = mutations[i];
          if (mut.type === 'childList') {
            for (var j = 0; j < mut.addedNodes.length; j++) {
              var added = mut.addedNodes[j];
              if (added.nodeType === Node.ELEMENT_NODE) {
                if (added.tagName === 'SCRIPT' || added.tagName === 'STYLE') continue;
                window.translateDOM(added, 'en');
              }
            }
          }
        }
      });

      wizI18nObserver.observe(document.body, { childList: true, subtree: true });
    }

    window.applyLanguage = function(lang) {
      if (lang !== 'en' && lang !== 'fa') lang = 'fa';
      window.currentLang = lang;
      try { localStorage.setItem('arizo_lang', lang); } catch(_) {}

      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');

      document.title = lang === 'en'
        ? '🚀 Interactive Step-by-Step Setup Wizard | Arizo Self v3.6.0 PRO'
        : '🚀 ویزارد راه‌اندازی هوشمند و گام‌به‌گام | Arizo Self v3.6.0 PRO';

      window.translateDOM(document.body, lang);

      var langText = document.getElementById('langText');
      var langBtn = document.getElementById('langToggleBtn');
      if (langText) {
        langText.textContent = lang === 'en' ? 'فارسی (FA)' : 'English (EN)';
      }
      if (langBtn) {
        langBtn.title = lang === 'en' ? 'تغییر زبان به فارسی / Switch to Persian' : 'Switch Language to English / تغییر زبان به انگلیسی';
      }

      var savedTheme = wizardState.theme || document.documentElement.getAttribute('data-theme') || 'dark';
      updateThemeDisplay(savedTheme);

      if (typeof currentStep !== 'undefined') {
        goToStep(currentStep);
      }
      if (typeof generateWranglerToml === 'function') {
        generateWranglerToml();
      }

      if (lang === 'en') {
        setupWizI18nObserver();
      } else if (wizI18nObserver) {
        wizI18nObserver.disconnect();
      }
    };

    window.toggleLanguage = function() {
      var next = window.currentLang === 'en' ? 'fa' : 'en';
      window.applyLanguage(next);
      var toastMsg = next === 'en' ? 'Language switched to English 🇬🇧' : 'زبان به فارسی تغییر یافت 🇮🇷';
      showToast(toastMsg);
    };

    function goToStep(step) {
      if (step < 1 || step > totalSteps) return;
      currentStep = step;

      // آپدیت نوار پیشرفت
      var pct = Math.round(((step) / totalSteps) * 100);
      document.getElementById('progressBar').style.width = pct + '%';
      var isEn = window.currentLang === 'en';
      document.getElementById('progressPctText').textContent = pct + (isEn ? '% Completed' : '٪ تکمیل شده');

      var titlesFa = [
        'مرحله ۱ از ۵: گیت‌هاب و نیازمندی‌ها',
        'مرحله ۲ از ۵: کلادفلر و پایگاه داده D1',
        'مرحله ۳ از ۵: تلگرام و ربات کمکی',
        'مرحله ۴ از ۵: رانر ۲۴ ساعته GitHub Actions',
        'مرحله ۵ از ۵: چک‌لیست نهایی، سلامت و اتصال'
      ];
      var titlesEn = [
        'Step 1 of 5: GitHub & Prerequisites',
        'Step 2 of 5: Cloudflare & D1 Database',
        'Step 3 of 5: Telegram & Helper Bot',
        'Step 4 of 5: 24/7 GitHub Actions Runner',
        'Step 5 of 5: Final Checklist, Health & Connect'
      ];
      var titles = isEn ? titlesEn : titlesFa;
      document.getElementById('progressStepTitle').textContent = titles[step - 1];

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
      wizardState.adminPass = pass;
      document.getElementById('cfgAdminPass').value = pass;
      updateAllBindings();
      showToast('رمز تصادفی ایمن تولید شد 🎲');
    }

    function generateWranglerToml() {
      var name = wizardState.workerName || 'my-arizo-self';
      var kvId = wizardState.kvId || 'YOUR_KV_NAMESPACE_ID';
      var d1Id = wizardState.d1Id || 'YOUR_D1_DATABASE_ID';
      var adminPass = wizardState.adminPass || 'secret_master_key_2026';

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
(window.currentLang === 'en' ? '# Telegram Client Environment Variables & Admin Keys\\n' : '# متغیرهای محیطی کلاینت تلگرام و کلیدهای مدیریت\\n') +
'[vars]\\n' +
'API_ID = "2040"\\n' +
'API_HASH = "b18441a1ff607e10a989891a5462e627"\\n' +
'ADMIN_PASSWORD = "' + adminPass + '"\\n' +
'RUNNER_SECRET = "' + adminPass + '"\\n';

      var codeEl = document.getElementById('wranglerOutputCode');
      if (codeEl) codeEl.textContent = code;
      return code;
    }

    function copyWranglerToml() {
      var code = generateWranglerToml();
      copySnippet(code, 'محتوای فایل wrangler.toml کپی شد! 📋');
    }

    function downloadWranglerFile() {
      var code = generateWranglerToml();
      var blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'wrangler.toml';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('فایل wrangler.toml با موفقیت دانلود شد! 📥');
    }

    function downloadBackupConfig() {
      var backupData = {
        app: 'Arizo Self Studio',
        version: '3.6.0-PRO',
        exportedAt: new Date().toISOString(),
        config: wizardState
      };
      var jsonStr = JSON.stringify(backupData, null, 2);
      var blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'arizo_setup_config.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('پکیج پشتیبان کانفیگ ذخیره شد! 💾');
    }

    function copySecretVal(type) {
      if (type === 'cfUrl') {
        var url = wizardState.workerUrl || window.location.origin;
        copySnippet(url, 'آدرس دامنه ورکر کپی شد 📋');
      } else if (type === 'runnerSec') {
        var sec = wizardState.adminPass || 'secret_master_key_2026';
        copySnippet(sec, 'رمز رانر کپی شد 📋');
      }
    }

    function copySnippet(text, customMsg) {
      navigator.clipboard.writeText(text).then(function() {
        showToast(customMsg || '📋 در حافظه کپی شد!');
      }).catch(function() {
        showToast('خطا در کپی خودکار؛ لطفاً دستی کپی کنید');
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

    // ساخت خودکار جداول پایگاه داده D1 به صورت آنلاین
    async function initD1DatabaseOnline() {
      var btn = document.getElementById('btnInitD1Online');
      btn.disabled = true;
      btn.innerHTML = '<span>⏳ در حال ساخت جداول...</span>';

      try {
        var r = await fetch('/api/setup/init-db', { method: 'POST' });
        var data = await r.json();

        if (data.success) {
          showToast('✅ جداول پایگاه داده D1 با موفقیت ساخته شدند!');
          btn.innerHTML = '<span>✅ جداول آماده است</span>';
          btn.style.background = 'var(--accent-green)';
          btn.style.color = '#fff';
        } else {
          showToast(data.error || 'خطا در ایجاد جداول D1', 'error');
          btn.innerHTML = '<span>⚡ تلاش مجدد ساخت جداول</span>';
          btn.disabled = false;
        }
      } catch (err) {
        showToast('خطا در ارتباط با سرور: ' + err.message);
        btn.innerHTML = '<span>⚡ ساخت خودکار جداول D1</span>';
        btn.disabled = false;
      }
    }

    // تستر آنلاین توکن ربات تلگرام
    async function testBotTokenOnline() {
      var input = document.getElementById('botTokenInput');
      var token = (input.value || '').trim();
      var resBox = document.getElementById('botTestResult');
      var btn = document.getElementById('testBotBtn');
      var msgSection = document.getElementById('botMessageTestSection');

      if (!token) {
        showToast('لطفاً ابتدا توکن ربات را وارد کنید!');
        return;
      }

      wizardState.botToken = token;
      saveState();

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
            '<div style="background:var(--accent-green-bg); border:1px solid var(--accent-green-border); border-radius:10px; padding:12px; font-size:0.84rem;">' +
              '<div style="font-weight:800; color:var(--accent-green); margin-bottom:4px;">✅ توکن تلگرام کاملاً معتبر و فعال است!</div>' +
              '<div><strong>نام ربات:</strong> ' + data.bot.firstName + '</div>' +
              '<div><strong>یوزرنیم:</strong> @' + data.bot.username + '</div>' +
              '<div><strong>شناسه عددی ربات:</strong> <code>' + data.bot.id + '</code></div>' +
            '</div>';
          showToast('ربات با موفقیت تایید شد 🤖');
          if (msgSection) msgSection.style.display = 'block';
        } else {
          resBox.innerHTML = 
            '<div style="background:var(--accent-rose-bg); border:1px solid var(--accent-rose-border); border-radius:10px; padding:12px; font-size:0.84rem; color:var(--accent-rose);">' +
              '<strong>❌ خطای تلگرام:</strong> ' + (data.error || 'توکن نامعتبر است.') +
            '</div>';
          if (msgSection) msgSection.style.display = 'none';
        }
      } catch (err) {
        resBox.innerHTML = 
          '<div style="background:var(--accent-rose-bg); border:1px solid var(--accent-rose-border); border-radius:10px; padding:12px; font-size:0.84rem; color:var(--accent-rose);">' +
            'خطا در ارتباط با سرور: ' + err.message +
          '</div>';
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>🚀 تست آنلاین توکن</span>';
      }
    }

    // ارسال پیام تست توسط ربات
    async function sendTestBotMessage() {
      var token = wizardState.botToken || (document.getElementById('botTokenInput').value || '').trim();
      var chatId = (document.getElementById('testChatIdInput').value || '').trim();
      var btn = document.getElementById('btnSendTestMsg');
      var res = document.getElementById('testMsgResult');

      if (!token || !chatId) {
        showToast('لطفاً توکن ربات و Chat ID عددی خود را وارد کنید!');
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '<span>⏳ در حال ارسال...</span>';
      res.style.display = 'block';
      res.textContent = 'در حال ارسال پیام تست به تلگرام...';
      res.style.color = 'var(--text-muted)';

      try {
        var r = await fetch('/api/setup/test-bot-message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: token, chatId: chatId })
        });
        var data = await r.json();

        if (data.success) {
          res.textContent = '🎉 پیام با موفقیت در تلگرام دریافت شد! ربات آماده به کار است.';
          res.style.color = 'var(--accent-green)';
          showToast('پیام تلگرام ارسال شد! 📩');
        } else {
          res.textContent = '❌ خطا: ' + (data.error || 'ارسال نشد. اطمینان حاصل کنید ربات را در تلگرام استارت کرده‌اید.');
          res.style.color = 'var(--accent-rose)';
        }
      } catch (err) {
        res.textContent = 'خطا در ارتباط: ' + err.message;
        res.style.color = 'var(--accent-rose)';
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>📩 ارسال پیام تست</span>';
      }
    }

    // بررسی زنده سلامت سرور کلادفلر
    async function checkLiveServerStatus() {
      var modal = document.getElementById('statusModal');
      var body = document.getElementById('statusModalBody');
      modal.classList.remove('hidden');
      window.translateDOM(modal, window.currentLang);

      body.innerHTML = '<div style="text-align:center; padding:24px; color:var(--text-muted);">در حال دریافت وضعیت زنده از سرور...</div>';

      var startTime = performance.now();

      try {
        var r = await fetch('/api/setup/status');
        var data = await r.json();
        var latency = Math.round(performance.now() - startTime);

        if (data.success && data.status) {
          var s = data.status;
          var kvBadge = s.kvBound ? '<span style="color:var(--accent-green);">🟢 متصل و آماده</span>' : '<span style="color:var(--accent-rose);">🔴 تعریف نشده</span>';
          var d1Badge = s.d1Bound ? (s.d1TableExists ? '<span style="color:var(--accent-green);">🟢 متصل و جداول آماده (تعداد کلیدها: ' + (s.d1RowCount || 0) + ')</span>' : '<span style="color:var(--accent-amber);">🟡 دیتابیس متصل است اما جداول هنوز ساخته نشده‌اند</span>') : '<span style="color:var(--accent-rose);">🔴 متصل نیست</span>';
          var passBadge = s.adminPasswordSet ? '<span style="color:var(--accent-green);">🟢 فعال و امن</span>' : '<span style="color:var(--accent-amber);">⚠️ بدون رمز</span>';

          var repairBtn = '';
          if (s.d1Bound && !s.d1TableExists) {
            repairBtn = '<button class="btn-tool" onclick="initD1DatabaseOnline()" style="background:var(--accent-green); color:#fff; border:none; width:100%; margin-top:8px; justify-content:center;">⚡ ساخت فوری جداول دیتابیس D1</button>';
          }

          body.innerHTML = 
            '<div style="display:flex; flex-direction:column; gap:10px; font-size:0.85rem;">' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>🌐 آدرس دامنه ورکر:</span>' +
                '<code style="font-size:0.8rem; color:var(--accent-blue);">' + (data.workerUrl || window.location.origin) + '</code>' +
              '</div>' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>⚡ سرعت پاسخ سرور (Latency):</span>' +
                '<span style="color:var(--accent-green); font-weight:700;">' + latency + ' ms</span>' +
              '</div>' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>⚡ حافظه پرسرعت Cloudflare KV:</span>' + kvBadge +
              '</div>' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>🗄️ پایگاه داده Cloudflare D1:</span>' + d1Badge +
              '</div>' +
              repairBtn +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>🔑 کلید مستر ادمین (ADMIN_PASSWORD):</span>' + passBadge +
              '</div>' +
              '<div style="padding:10px; background:var(--surface-card-subtle); border-radius:8px; display:flex; justify-content:space-between;">' +
                '<span>📱 کلاینت رسمی تلگرام (API_ID):</span>' + (s.apiIdSet ? '<span style="color:var(--accent-green);">🟢 استاندارد (2040)</span>' : '⚪ پیش‌فرض') +
              '</div>' +
              '<div style="margin-top:10px; text-align:center;">' +
                '<button class="btn-tool primary" onclick="closeStatusModal()" style="width:100%; justify-content:center;">بستن پنجره عیب‌یابی</button>' +
              '</div>' +
            '</div>';
        } else {
          body.innerHTML = '<div style="color:var(--accent-rose); padding:16px;">خطا در دریافت وضعیت سرور.</div>';
        }
      } catch (err) {
        body.innerHTML = '<div style="color:var(--accent-rose); padding:16px;">عدم امکان دسترسی به سرور: ' + err.message + '</div>';
      }
    }

    function closeStatusModal() {
      document.getElementById('statusModal').classList.add('hidden');
    }

    function openSecretsExporterModal() {
      var modal = document.getElementById('secretsModal');
      var display = document.getElementById('secretsBulkDisplay');
      modal.classList.remove('hidden');

      var text = 
'# Arizo Self Studio — GitHub Actions Runner Secrets\\n' +
'CLOUDFLARE_URL=' + (wizardState.workerUrl || window.location.origin) + '\\n' +
'RUNNER_SECRET=' + (wizardState.adminPass || 'secret_master_key_2026') + '\\n' +
'API_ID=2040\\n' +
'API_HASH=b18441a1ff607e10a989891a5462e627\\n';

      display.textContent = text;
    }

    function closeSecretsModal() {
      document.getElementById('secretsModal').classList.add('hidden');
    }

    function copySecretsBulkText() {
      var text = document.getElementById('secretsBulkDisplay').textContent;
      copySnippet(text, 'تمام سکرت‌ها به صورت یکجا کپی شدند! 📦');
    }

    // تم روشن و تاریک
    function toggleTheme() {
      var cur = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      wizardState.theme = next;
      saveState();
      updateThemeDisplay(next);
    }

    function updateThemeDisplay(t) {
      var icon = document.getElementById('themeIcon');
      var text = document.getElementById('themeText');
      var isEn = window.currentLang === 'en';
      if (icon) icon.textContent = t === 'dark' ? '☀️' : '🌙';
      if (text) {
        if (isEn) {
          text.textContent = t === 'dark' ? 'Day Mode' : 'Night Mode';
        } else {
          text.textContent = t === 'dark' ? 'حالت روز' : 'حالت شب';
        }
      }
    }

    // کلیدهای میانبر کیبورد
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeStatusModal();
        closeSecretsModal();
      } else if (e.key === 'ArrowLeft' && !e.target.matches('input, textarea')) {
        goToStep(currentStep + 1);
      } else if (e.key === 'ArrowRight' && !e.target.matches('input, textarea')) {
        goToStep(currentStep - 1);
      }
    });

    // راه‌اندازی اولیه
    document.addEventListener('DOMContentLoaded', function() {
      loadState();
      var savedTheme = wizardState.theme || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeDisplay(savedTheme);
      if (typeof window.applyLanguage === 'function') {
        window.applyLanguage(window.currentLang || 'fa');
      }
    });
  </script>
</body>
</html>
`;
}
