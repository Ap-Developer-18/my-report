/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29256A",
        secondary: "#499BFC",
        blueberry: "#4978FC",
        "american-blue": "#3E3A79",
        "off-white": "#F2F8FF",
        lightGray: "#EEEEEE",
        gray: "#535557",
        lightBlack: "#232323",
        tableBorder: "#E0E0E0",
      },
      boxShadow: {
        line: "0px 4px 17px 0px rgba(0, 0, 0, 0.1)",
        custom: "0px 4px 15px 0px #00000026",
        reports: "0px 4px 24px 0px #00000040",
      },
      screens: {
        "custom-2xl": "1600px",
      },
      lineHeight: {
        136: "136%",
        150: "150%",
      },
    },
  },
  plugins: [],
};