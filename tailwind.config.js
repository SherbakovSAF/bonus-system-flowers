/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'color-main': '#305346',
    //   'main-bg': '#F8C8C0',
    //   'second-bg': 'FBDCD7',
    //   'main-color-text': '#686767',
    // },
    fontFamily: {
      montserrat: ['Montserrat', 'serif']
    },
    extend: {
    },
  },
  plugins: [],
}