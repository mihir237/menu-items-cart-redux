/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '&::-webkit-scrollbar': {
            'display': 'none'
          }
        }
      })
    })
  ],
}



/*   const plugin = require('tailwindcss/plugin')
  
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '&::-webkit-scrollbar': {
            'display': 'none'
          }
        }
      })
    })
  ],
   */