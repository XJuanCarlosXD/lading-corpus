/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        darkGray: "#231f20",
        lightGray: "#918f8f",
        gray: "#3d3a3b",
      },
      height: {
        custom: "36rem",
        custom_lg: "50rem",
      },
      width: {
        custom: "36rem",
        custom_lg: "50rem",
      },
      fontFamily: {
        sans: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
