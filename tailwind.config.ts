import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          900: '#581C87',
        },
        brand: {
          pastel: '#EBD6FB',
          border: '#B7A3E3',
        },
        accent: {
          purple: '#A855F7',
          magenta: '#D946EF',
          pink: '#EC4899',
        },
        background: {
          light: '#FFFFFF',
          lavender: '#EBD6FB',
          purple: '#F6ECFF',
        },
        text: {
          primary: '#1F2937',
          secondary: '#6B7280',
          purple: '#7E22CE',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '80px', fontWeight: '800' }],
        'h1': ['56px', { lineHeight: '64px', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'h3': ['36px', { lineHeight: '44px', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-large': ['18px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '24px' }],
        'body-small': ['14px', { lineHeight: '20px' }],
        'eyebrow': ['12px', { lineHeight: '16px', fontWeight: '600', letterSpacing: '0.1em' }],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

