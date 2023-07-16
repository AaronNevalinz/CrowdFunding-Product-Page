/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'hsl(176, 50%, 47%)',
          200:'hsl(176, 72%, 28%)'
        },
        secondary:{
          100:'hsl(0, 0%, 48%)'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

