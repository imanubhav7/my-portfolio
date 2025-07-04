/** @type {import('tailwindcss').Config} */
// import './src/Image/skillBG.avif'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage:{
        'hero-Image': "url('./src/Image/Hero.jpg')",
        'skill-bg': "url('./src/Image/skillBG.avif')",
        'space-bg': "url('./src/Image/triangleBg.avif')",
        'reach-bg': "url('./src/Image/reachMeBg.avif')"
      },
    },
  },
  plugins: [],
}