
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
     
        primary: "#EF4A6B",
      },
      screens: {
        xs: '475px', 
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
