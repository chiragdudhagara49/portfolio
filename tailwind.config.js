/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          'yeelo': '#ffc82c',
        },
        fontFamily:{
          lato: ['Lato', 'sans-serif'],
          kanit:['Kanit',"sans"],
          dmserifdisplay:['DM Serif Display','sans']
        }
    },
  },
  plugins: [],
}

