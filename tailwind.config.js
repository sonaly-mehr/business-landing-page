/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': 'Montserrat',
        'Inter': 'Inter',
        'Roboto': "Roboto"
      },
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#505056',
        "blue": '#00A0F3'
      },
    },
  },
  plugins: [],
}

