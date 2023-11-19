/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultFont = require('tailwindcss/defaultTheme');

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
      yellow: '#F3B52A',
      primary: '#F3B52A',
    },

    fontFamily: {
      sans: ['Poppins'],
    },

    extend: {},
  },
  plugins: [],
};
