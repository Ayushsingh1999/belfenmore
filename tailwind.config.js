/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDEC",
      },
      fontFamily: {
        serifDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
