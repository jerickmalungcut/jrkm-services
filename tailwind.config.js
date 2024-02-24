/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
    extend: {
      //Colors used on this website
      colors: {
        primary: "#0c0c1d",
      },
    },
  },
  plugins: [],
};
