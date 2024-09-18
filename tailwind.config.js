const appThemeColors = {
  goal: {
    gray: {
      50: "#F5F5F5",
      100: "#F1F1F1",
      200: "#B0B0B0",
      300: "#E6E6E6",
      400: "#CCCCCC",
      500: "#D9D9D9",
      600: "#777777",
      700: "#797979",
      800: "#444444",
      900: "#0F0F0F",
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,ts,tsx,js}"],
  theme: {
    extend: {
      colors: appThemeColors,
    },
  },
  plugins: [],
};
