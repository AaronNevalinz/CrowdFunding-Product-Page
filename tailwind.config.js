/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'hsl(176, 50%, 47%)',
          200:'hsl(176, 72%, 28%)'
        },
        neutral:{
          100:'hsl(0, 0%, 48%)'
        }
      }
    },
  },
  plugins: [],
}

