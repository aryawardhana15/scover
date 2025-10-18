/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: "#BF751D",
        gold1: "#D4AF37",
        primary: "#003049",
        secondary: "#0c5681",
        accent: "#fabe49",
        highlight: "#ffdc30",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lora': ['Lora', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 