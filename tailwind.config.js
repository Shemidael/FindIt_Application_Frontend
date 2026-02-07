/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_primary: {
          100: '#FF9E00',
          200: '#FF9100',
          300: '#FF8500',
          400: '#FF7900',
          500: '#FF6D00',
        },
        color_secondary: {
          100: '#9D4EDD',
          200: '#7B2CBF',
          300: '#5A189A',
          400: '#3C096C',
          500: '#240046',
        },
        color_backdrop: '#00000050'
      }
    },
  },
  plugins: [],
}