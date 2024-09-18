/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: '"Barlow Condensed", system-ui',
        gilda: '"Gilda Display", serif'
      }
    },
  },
  plugins: [],
}
