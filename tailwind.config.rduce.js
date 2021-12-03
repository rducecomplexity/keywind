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
          DEFAULT: '#0981c4',
          50: '#f3f9fc',
          100: '#e6f2f9',
          200: '#c2e0f0',
          300: '#9dcde7',
          400: '#53a7d6',
          500: '#0981c4',
          600: '#0874b0',
          700: '#076193',
          800: '#054d76',
          900: '#043f60',
        },
        secondary: {
          DEFAULT: '#10b7eb',
          50: '#f3fbfe',
          100: '#e7f8fd',
          200: '#c3edfa',
          300: '#9fe2f7',
          400: '#58cdf1',
          500: '#10b7eb',
          600: '#0ea5d4',
          700: '#0c89b0',
          800: '#0a6e8d',
          900: '#085a73',
        },
      },
    },
  },
};
