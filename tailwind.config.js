/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        banner : "url('/src/images/LaBanner2.png')",
        history : "url('/src/images/Bg.png')",
        team : "url('/src/images/tab2.png')",
      }
    },
  },
  plugins: [],
}