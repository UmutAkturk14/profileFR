/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lora"],
        "heading": ["Croissant One", "cursive"],
      }
    },
  },
  plugins: [],
}
