/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        moss: {
          DEFAULT: "#8A9A5B",
          dark: "#5F6B3C",
          light: "#B5C28E",
        },
      },
    },
  },
  plugins: [],
};
