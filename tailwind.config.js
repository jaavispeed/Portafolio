/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Modo oscuro habilitado mediante clases
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton"', 'sans-serif'], // Fuente Anton
        rubik: ['"Rubik"', 'sans-serif'], // Fuente Rubik
      },
      colors: {
        // Colores personalizados para el modo claro
        primary: '#3490dc', // Azul claro
        secondary: '#ffed4a', // Amarillo brillante
        accent: '#e53e3e', // Rojo

        // Colores personalizados para el modo oscuro
        darkPrimary: '#1e3a8a', // Azul oscuro
        darkSecondary: '#fbbf24', // Amarillo en modo oscuro
        darkBackground: '#111827', // Fondo oscuro
        darkText: '#d1d5db', // Texto claro en modo oscuro
      },
    },
  },
  plugins: [],
};
