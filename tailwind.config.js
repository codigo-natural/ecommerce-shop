/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535'
      },
      height: {
        '80': '20rem',
        '100': '25rem'
      }
    }
  },
  plugins: [],
}

