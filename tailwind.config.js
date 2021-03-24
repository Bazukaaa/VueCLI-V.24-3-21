const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        fuchsia: colors.fuchsia,
        salmon : '#ffff80'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
