const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('/public/bg2.jpg')",
      },
      fontFamily: {
        Pangolin: ['Pangolin', ...defaultTheme.fontFamily.sans],
        Allura: ['Allura', ...defaultTheme.fontFamily.sans],
        

      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
};
