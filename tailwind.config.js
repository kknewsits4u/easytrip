/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
     
        primary: "#EF4A6B",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), 
    require('@tailwindcss/forms'),      
    require('@tailwindcss/typography') , 
    require('tailwind-scrollbar-hide')
  ],
}
