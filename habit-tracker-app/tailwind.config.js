/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Raleway", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        theme: {
          light: "#f7f9ff",
          dark: "#1d1d1e",
        },
        briny: {
          50: "#c9edf3",
          100: "#a0dee8",
          200: "#5ac3d1",
          300: "#29abba",
          400: "#0c95a3",
          500: "#037f8c",
          600: "#096a76",
          700: "#15565f",
          800: "#20434a",
          900: "#243034",
        },
        deepFriedSunRays: {
          50: "#ffebe1",
          100: "#ffe0cb",
          200: "#ffd3a2",
          300: "#ffcf80",
          400: "#ffd069",
          500: "#f2c75c",
          600: "#d6b158",
          700: "#b09258",
          800: "#846f53",
          900: "#524941",
        },
        melon: {
          50: "#ffdfe3",
          100: "#ffc8cb",
          200: "#ffa29d",
          300: "#ff8b79",
          400: "#ff7f61",
          500: "#fc7a57",
          600: "#df7155",
          700: "#b86857",
          800: "#895a54",
          900: "#554342",
        },
        silverMedal: {
          50: "#fff7fd",
          100: "#fef8fc",
          200: "#fbf7f9",
          300: "#f5f2f3",
          400: "#e9e7e8",
          500: "#d7d5d6",
          600: "#bcbabb",
          700: "#9b999a",
          800: "#747273",
          900: "#4a4849",
        },
        ghostWhite: {
          50: "#f5f3fa",
          100: "#fefdff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#f7f9ff",
          600: "#c2cce1",
          700: "#8395b6",
          800: "#475d82",
          900: "#192a48",
        },
        dynamicBlack: {
          50: "#d6d2d8",
          100: "#bebdbf",
          200: "#8d8d8d",
          300: "#606060",
          400: "#3b3b3b",
          500: "#1d1d1e",
          600: "#0b0b0c",
          700: "#030304",
          800: "#010102",
          900: "#020205",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
