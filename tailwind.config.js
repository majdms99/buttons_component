/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        dufault_shadow: "0px 2px 3px 0px #33333333",
        primary_shadow: "box-shadow: 0px 2px 3px 0px #0031CA33;",
      },
      colors: {
        default: "#E0E0E0",
        default_hover: "#AEAEAE",

        variant: "#3D5AFE",
        variant_hover: "rgba(41, 98, 255, 0.1)",

        disabled_color: "#9E9E9E",

        primary_color: "#2962FF",
        primary_hover: "#0039CB",

        secondary_color: "#455A64",
        secondary_color_hover: "#1C313A",
      },
    },
  },
  plugins: [],
};
