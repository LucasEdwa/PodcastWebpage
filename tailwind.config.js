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
    },
  },
  plugins: [],
};