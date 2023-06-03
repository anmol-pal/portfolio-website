/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('/public/images/bg2.jpg')",
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],

};