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

    window.WIZARD_I18N = {
      fa: {
        pageTitle: '🚀 ویزارد راه‌اندازی هوشمند و گام‌به‌گام | Arizo Self v3.6.0 PRO',
        brandDesc: 'ویزارد هوشمند و تعاملی ستاپ شخصی از گیت‌هاب',
        checkHealthBtn: 'بررسی سلامت سرور',
        exportSecretsBtn: 'خروجی سکرت‌ها',
        themeDay: 'حالت روز',
        themeNight: 'حالت شب',
        adminPortalBtn: '👑 پنل مدیریت',
        studioBtn: '🚪 استودیو',
        step1Label: 'گیت‌هاب و فورک',
        step2Label: 'کلادفلر و D1',
        step3Label: 'تلگرام و ربات',
        step4Label: 'رانر Actions',
        step5Label: 'ورود و تست',
        pctComplete: '٪ تکمیل شده',
        switchBtnText: 'English',
        switchToast: 'زبان به فارسی تغییر یافت 🇮🇷'
      },
      en: {
        pageTitle: '🚀 Interactive Step-by-Step Setup Wizard | Arizo Self v3.6.0 PRO',
        brandDesc: 'Interactive GitHub Setup Wizard for Selfbot Studio',
        checkHealthBtn: 'Check Server Health',
        exportSecretsBtn: 'Export Secrets',
        themeDay: 'Day Mode',
        themeNight: 'Night Mode',
        adminPortalBtn: '👑 Admin Portal',
        studioBtn: '🚪 Studio',
        step1Label: 'GitHub & Fork',
        step2Label: 'Cloudflare & D1',
        step3Label: 'Telegram & Bot',
        step4Label: 'Actions Runner',
        step5Label: 'Test & Launch',
        pctComplete: '% Completed',
        switchBtnText: 'فارسی',
        switchToast: 'Language switched to English 🇬🇧'
      }
    };

    window.applyLanguage = function(lang) {
      if (lang !== 'en' && lang !== 'fa') lang = 'fa';
      window.currentLang = lang;
      localStorage.setItem('arizo_lang', lang);

      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');

      var dict = window.WIZARD_I18N[lang] || window.WIZARD_I18N.fa;

      document.title = dict.pageTitle;

      document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      var langText = document.getElementById('langText');
      if (langText) {
        langText.textContent = dict.switchBtnText;
      }

      var savedTheme = wizardState.theme || document.documentElement.getAttribute('data-theme') || 'dark';
      updateThemeDisplay(savedTheme);

      if (typeof currentStep !== 'undefined') {
        goToStep(currentStep);
      }
    };

    window.toggleLanguage = function() {
      var next = window.currentLang === 'en' ? 'fa' : 'en';
      window.applyLanguage(next);
      var dict = window.WIZARD_I18N[next];
      showToast(dict.switchToast);
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
'# متغیرهای محیطی کلاینت تلگرام و کلیدهای مدیریت\\n' +
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
