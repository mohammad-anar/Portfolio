/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["halloween"],
  },
  theme: {
    extend: {
      colors:{
        primary: "#13a090",
        "navbar-text": "#9ea0aa",
        "navbar-bg": "#151c25"
      }
    },
  },
  plugins: [require("daisyui")],

}

