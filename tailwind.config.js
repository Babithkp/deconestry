/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primarylight: ['Light'],
        primaryregular: ['Regular'],
        primarymedium: ['Medium'],
        primarybold: ['Bold'],
      }
    },
  },
  plugins: [],
}