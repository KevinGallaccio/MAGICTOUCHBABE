/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {

      colors:{
        magictouchbeige:'#F8EFE6',
        magictouchpink:'#E9B8F7',
        magictouchpurple:'#570B8F',
        magictouchviolet:'#A67ED2',
        magictouchteal: '#BFF8EE',
        magictouchgreen: '#2F5735',
      },
      fontFamily:{
        'Playfair': ['"Playfair Display"'],
        'DM-Sans' : ['"DM Sans"'],

      }
    },
  },
  plugins: [],
}

