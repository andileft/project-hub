/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ---- Legacy palette (Old design) ----
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // ---- New design palette (career.ag-it.com language) ----
        wine: {
          DEFAULT: '#812049',
          2: '#b32068',
          600: '#b32068',
          dark: '#5f1537',
          soft: '#fdf1f6',
        },
        orange: {
          DEFAULT: '#de7c00',
          2: '#f78b18',
          300: '#ffb03a',
          soft: '#fff1e3',
        },
        cream: '#faf8f6',
        soft: '#fff8ef',
        ink: '#1d1c21',
        ink2: '#33343b',
        muted: '#6d7280',
        muted2: '#9aa0aa',
        // Semantic (new design)
        ok: '#007f45',
        warn: '#b54708',
        bad: '#b42318',
        info: '#0066cc',
      },
      fontFamily: {
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        hero: '34px',
        input: '14px',
      },
      boxShadow: {
        card: '0 4px 18px rgba(15, 23, 42, .03)',
        lift: '0 16px 36px rgba(129, 32, 73, .10)',
        btn: '0 16px 32px rgba(129, 32, 73, .22)',
        panel: '0 24px 70px rgba(129, 32, 73, .14)',
      },
    },
  },
  plugins: [],
}
