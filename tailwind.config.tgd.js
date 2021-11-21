const colors = require("tailwindcss/colors");

/**
 * @type { import('@types/tailwindcss/tailwind-config').TailwindConfig }
 */
module.exports = {
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
  purge: ["./theme/**/*.ftl"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //primary: "#0981c4",
        //secondary: "#10b7eb",
        primary: colors.green,
      },
    },
  },
};
