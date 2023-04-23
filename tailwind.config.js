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
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(147, 197, 253, 0.5)',
      },
    }
  },
  plugins: [],
}

