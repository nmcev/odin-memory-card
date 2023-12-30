/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        customGray: '#45474B',
        customYellow: '#F4CE14'
      },
      fontFamily: {
        custom: ["starWars", "sans-serif"],
        custom2: ['Outfit', 'sans-serif'],
        custom3 : ['Nanum Pen Script', 'cursive']
      },
    },
  },
  plugins: [],
}

