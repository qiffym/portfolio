/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      sans: ['PT Sans', 'system-ui'],
      serif: ['PT Serif', 'ui-serif'],
      display: ['Montserrat', 'PT Sans', 'Inter'],
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['corporate', 'business'],
    darkTheme: 'business',
  },
};
