/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '10': '5rem', // Aquí defines la clase 'mt-8' con el valor de 2rem
      }
    },
  },
  plugins: [],
}
 