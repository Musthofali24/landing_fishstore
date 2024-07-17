/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary1: "#005F73",
        primary2: "#EE6C4D",
        primary3: "#0A9396",
        borderColor: "#0000",
        bgColor: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
