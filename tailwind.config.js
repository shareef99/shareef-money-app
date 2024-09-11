/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D1B2A",
          text: "#F5F5F5",
        },
        secondary: {
          DEFAULT: "#1B263B",
          // text1: "#A9A9A9",
          text: "#D3CBC4",
        },
        accent: {
          DEFAULT: "#FF6B6B",
          orange: "#FF7F50",
          success: "#8FB339",
          mint: "#98C379",
          error: "#FF4500",
        },
        card: {
          slate: "#1E252C",
          charcoal: "#2D3A45",
        },
      },
    },
  },
  plugins: [],
};
