/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-green': '#305346',
      'white': colors.white,
      'main-bg': '#F8C8C0',
      'card-bg': '#FBDCD7',
      'main-color-text': '#686767',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'serif']
    },
    extend: {
    },
  },
  plugins: [],
}