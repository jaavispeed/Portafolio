/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton"', 'sans-serif'], // Fuente Anton
        rubik: ['"Rubik"', 'sans-serif'], // Fuente Rubik
      },
    },
  },
  plugins: [],
};
