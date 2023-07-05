/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '394px',
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1280px',
    },

    extend: {
      colors: {
        primary: '#398150',
        secondary: '#f1f1f1',
        support: '#478b1a',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      keyframes: {
        "rotate-clock": {
          'from': {
            transform: 'rotate(0deg) translateX(20px) rotate(0deg)'
          },
          'to': {
            transform: 'rotate(360deg) translateX(20px) rotate(-360deg)'
          }
        },
        "rotate-c-clock": {
          'from': {
            transform: 'rotate(0deg) translateX(20px) rotate(0deg)'
          },
          'to': {
            transform: 'rotate(-360deg) translateX(20px) rotate(360deg)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        bounce1: {
          '0%, 100%': {
            transform: 'translateY(-25%) scale(1,1)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'scale(1.1,.9)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },

      animation: {
        wiggle: 'wiggle 250ms linear ',
        bounce1: 'bounce1 1s cubic-bezier(0.280, 0.840, 0.420, 1) infinite',
        'rotate-clock': 'rotate-clock 10s linear infinite',
        'rotate-c-clock': 'rotate-c-clock 10s linear infinite',
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
