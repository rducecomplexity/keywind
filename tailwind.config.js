const colors = require('tailwindcss/colors');

/**
 * @type { import('@types/tailwindcss/tailwind-config').TailwindConfig }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: colors.lightBlue,
        //primary: "#10b7eb",
      },
    },
  },
};
