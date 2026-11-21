/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Shreyyom Warm Ivory & Crisp Paper
        canvas: '#FCFBF9',
        paper: '#FFFFFF',
        ink: '#0F172A',
        graphite: '#374151',
        muted: '#6B7280',
        line: '#E5E7EB',

        // Primary Brand Colors (Vibrant Saffron Orange & Warm Tones)
        brand: {
          DEFAULT: '#EA580C',
          hover: '#C2410C',
          deep: '#9A3412',
          soft: '#FFF7ED',
          light: '#FB923C',
          border: '#FED7AA',
        },

        // Dark Forest Green (Top bar, Footer, Deep Corporate Surfaces)
        forest: {
          DEFAULT: '#061A12',
          dark: '#04130D',
          surface: '#0A241A',
          hover: '#0E2E21',
          border: '#14382A',
          muted: '#8BA99B',
        },

        // Brand Green (Used for "Reality", Live badge, WhatsApp, Accents)
        greenbrand: {
          DEFAULT: '#15803D',
          vibrant: '#16A34A',
          bright: '#22C55E',
          soft: '#F0FDF4',
          border: '#BBF7D0',
        },

        // Mapped legacy keys to guarantee 100% theme conversion across all existing pages
        blue: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#EA580C',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
          DEFAULT: '#EA580C',
          soft: '#FFF7ED',
          deep: '#C2410C',
          hover: '#C2410C',
          light: '#FB923C',
        },

        deepblue: {
          DEFAULT: '#061A12',
          hover: '#0A241A',
          soft: '#0E2E21',
        },

        sky: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          DEFAULT: '#16A34A',
          soft: '#F0FDF4',
          deep: '#15803D',
        },

        emerald: {
          DEFAULT: '#16A34A',
          soft: '#F0FDF4',
          deep: '#15803D',
        },
        amber: {
          DEFAULT: '#EA580C',
          soft: '#FFF7ED',
          deep: '#9A3412',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6.5vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.1rem, 4.8vw, 3.8rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.65rem, 3.2vw, 2.5rem)', { lineHeight: '1.14', letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(1.25rem, 2.2vw, 1.85rem)', { lineHeight: '1.22', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(6, 26, 18, 0.05), 0 2px 6px -1px rgba(6, 26, 18, 0.03)',
        'card-hover': '0 20px 35px -5px rgba(234, 88, 12, 0.08), 0 10px 15px -3px rgba(6, 26, 18, 0.05)',
        glow: '0 0 25px rgba(234, 88, 12, 0.25)',
        'glow-green': '0 0 25px rgba(22, 163, 74, 0.25)',
      },
      spacing: {
        section: 'clamp(4.5rem, 8vw, 8rem)',
        'section-sm': 'clamp(3rem, 5vw, 5rem)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
