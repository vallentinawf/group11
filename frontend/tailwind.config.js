/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        darkblue: '#14213D',
        orange: '#FCA311',
        gray: '#E5E5E5',
        blue: '#1E2772',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
