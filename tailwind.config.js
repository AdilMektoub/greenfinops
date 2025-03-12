/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eco-green': '#34D399',
        'eco-dark': '#065F46',
        'tech-blue': '#0EA5E9',
        'energy-yellow': '#FBBF24',
        'clean-teal': '#0D9488',
        'leaf-green': '#4ADE80',
        'sky-blue': '#7DD3FC',
        'earth-brown': '#92400E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}