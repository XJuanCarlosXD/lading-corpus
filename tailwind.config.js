/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        darkGray: "#231f20",
        lightGray: "#918f8f",
        gray: "#3d3a3b",
        green_logo: "#2BEF1C",
        blue_logo: "#55717F",
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
        stay: ["Stay And Shine", "sans-serif"],
        sanchez: ["Sanchez", "sans-serif"],
      },
    },
  },
  plugins: [],
};
