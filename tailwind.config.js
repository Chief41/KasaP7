/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'main-color': '#FF6060',
      'background-container-color' : '#e9e9e9',
    },
    fontFamily : {
      'Montserrat' :  ['Montserrat','sans-serif']
    }
  },
  },
  plugins: [],
}
