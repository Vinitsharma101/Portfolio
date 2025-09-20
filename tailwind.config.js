/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-surface': '#121212',
        'dark-border': '#2a2a2a',
        'accent-blue': '#3b82f6',
        'accent-purple': '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        turbo: ['"Turbo Jungle"', "sans-serif"],
        cravend: ['Cravend', "sans-serif"],
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
};

