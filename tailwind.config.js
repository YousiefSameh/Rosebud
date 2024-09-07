/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", "system-ui"],
        "Handwrite": ["Playwrite CU", "cursive"]
      },
      colors: {
        "overlay": "rgb(0 0 0 / 0.5)"
      }
    },
  },
  plugins: [],
}

