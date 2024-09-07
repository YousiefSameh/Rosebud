/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", "system-ui"],
        "PlayFair": ["Playfair Display", "system-ui"]
      }
    },
  },
  plugins: [],
}

