const colors = require("tailwindcss/colors");

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
          DEFAULT: '#000000',
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#bfbfbf',
          300: '#999999',
          400: '#4d4d4d',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
      },
    },
  },
};
