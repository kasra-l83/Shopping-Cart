/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      lightGray: "rgb(226 232 240)",
      darkGray: "#343A40",
      lightGreen: "rgb(40, 167, 69)",
      lightBlue: "#0069D9"
    },
    extend: {},
  },
  plugins: [],
}