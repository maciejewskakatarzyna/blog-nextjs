module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        bcg: '#0F172A',
        font: '#f3f4f6',
        'grey-font': '#9ca3af'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
