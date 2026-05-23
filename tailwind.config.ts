import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base:    '#080808',
        surface: '#111111',
        border:  '#2a2a2a',
        gold:    '#E8A020',
        'gold-deep': '#C47810',
        'text-primary':   '#F5F5F5',
        'text-secondary': '#A0A0A0',
        'text-muted':     '#555555',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero:  ['7rem',  { lineHeight: '1', letterSpacing: '-0.03em' }],
        giant: ['10rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      backgroundImage: {
        'grad-gold':     'linear-gradient(135deg, #E8A020 0%, #C47810 100%)',
        'grad-text':     'linear-gradient(135deg, #F5F5F5 0%, #E8A020 100%)',
        'grad-card':     'linear-gradient(135deg, #111111 0%, #1a1500 100%)',
        'grad-cinematic':'linear-gradient(180deg, transparent 0%, #080808 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        goldPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
