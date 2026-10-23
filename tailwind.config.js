/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/js/**/*.{js,jsx,ts,tsx}",
    "./resources/views/**/*.blade.php",
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
