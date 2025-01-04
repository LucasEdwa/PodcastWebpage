// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #F5F5DC, #D3D3D3, #F5F5DC)', // Dark blue, medium blue, and light blue
      },
      transitionDuration: {
        '500': '500ms',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
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
        'spin-scale': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};