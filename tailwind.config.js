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
        'meie-script': ['Meie Script', 'cursive'],
        'times-new-roman': ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};