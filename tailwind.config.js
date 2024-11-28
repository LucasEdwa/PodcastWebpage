export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #6A329F, #9F6BB3, #bb9acf)',
      },
      transitionDuration: {
        '500': '500ms',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'spin-fast': 'spin 5s linear infinite',
        'spin-scale': 'spin-scale 12s linear infinite',

      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};