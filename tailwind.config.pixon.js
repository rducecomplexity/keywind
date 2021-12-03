const colors = require('tailwindcss/colors');

/**
 * @type { import('@types/tailwindcss/tailwind-config').TailwindConfig }
 */
module.exports = {
  darkMode: 'media',
  plugins: [require('@tailwindcss/forms')],
  purge: ['./theme/**/*.ftl'],
  theme: {
    extend: {
      colors: {
        // Use: https://javisperez.github.io/tailwindcolorshades/
        primary: {
          DEFAULT: '#0097f6',
          50: '#f2faff',
          100: '#e6f5fe',
          200: '#bfe5fd',
          300: '#99d5fb',
          400: '#4db6f9',
          500: '#0097f6',
          600: '#0097f6',
          700: '#0071b9',
          800: '#005b94',
          900: '#004a79',
        },
      },
    },
  },
};
