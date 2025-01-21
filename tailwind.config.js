/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E5D9B6',
        secondary: '#A4BE7B',
        third: '#5F8D4E',
        fourth: '#285430',
      }
    },
  },
  plugins: [],
}