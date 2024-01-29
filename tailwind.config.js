/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      blue: colors.sky,
      red: colors.red,
      green: colors.green,
      yellow: {
        50: '#fef8ea',
        100: '#fcedca',
        200: '#fae1aa',
        300: '#f8d68a',
        400: '#f7cb6a',
        500: '#f5c04a',
        600: '#f3b52a',
        700: '#cf9a24',
        800: '#aa7f1d',
        900: '#866417',
      },
      primary: colors.yellow[500],
    },

    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },

    extend: {},
  },
  plugins: [],
};
