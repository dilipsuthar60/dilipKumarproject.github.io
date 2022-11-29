/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1a1a1a",
        "light-gray": "#eee",
        gray: "#aaa",
        "theme-light": "#f4f6f8",
        "dark-gray1": "#222222",
        "pale-gray": "#f4f6f8",
        "black-gray": "#555555",
        blue: "#00b7b8",
        black: "#000",
        black1: "#0f0f0f",
        "border-gray": "rgba(170, 170, 170, 0.41)",
        white: "#fff",
        "dark-pink": "#da1ea5",
        "text-slate-50": "rgb(248 250 252 / var(--tw-text-opacity))",
      },
      boxShadow: {
        "dark-inset":
          "inset 4px 4px 10px 0 rgba(0, 0, 0, 0.7), inset -4px -4px 10px 0 rgba(58, 58, 58, 0.5)",
        "light-inset":
          "inset 7px 7px 10px 0 rgba(0, 0, 0, 0.15), -7px -7px 10px 0 rgba(255, 255, 255, 0.8)",
        "dark-input":
          "4px 4px 10px 0 rgb(0 0 0 / 70%), -4px -4px 10px 0 rgb(58 58 58 / 30%)",
        "light-input":
          "7px 7px 10px 0 rgba(0, 0, 0, 0.15), -7px -7px 10px 0 rgba(255, 255, 255, 0.8)",
        button: "4px 4px 10px 0 rgba(0, 0, 0, 0.7), -4px -4px 10px 0 rgba(58, 58, 58, 0.5), -1px -1px 0 0 rgba(255, 255, 255, 0.05)",
        "dark-box": "0px 0px 10px 0 #000",
        "light-right-inset":
          "inset -7px 0 9px -7px rgba(255,255,255,0.2)",
      },
      backgroundImage: {
        button: "linear-gradient(101deg, #a64492 5%, #00b7b7 126%)",
        "dark-disabled-button":
          "linear-gradient(102deg, #222 3%, #555 99%)",
        "light-disabled-button":
          "linear-gradient(102deg, #aaa, #eee 100%)",
      },
      margin: {
        "60px": "4rem",
      },
      padding: {
        "9px": "9px",
        "16px": "16px",
        "8px": "8px",
        "100px": "100px",
      },
      gridTemplateColumns: {
        // coverImg
        coverImg: "57% 43%",
      },
      width: {
        286: "20rem",
        253: "19rem",
        174: "11rem",
        140: "9rem",
        35: "2.2rem",
        80: "80px",
        90: "90px",
        60: "60px",
      },
      height: {
        20: "1.15rem",
        60: "60px",
        40: "40px",
        75: "75px",
        45: "45px",
        30: "30px",
      },
      inset: {
        "130px": "130px",
        "150px": "150px",
        "115px": "115px",
        "50px": "50px",
      },
      color: {
        "text-slate-50": "rgb(248 250 252)",
      },
      spacing: {
        '28': "28.938rem",
        '36': '36.125rem',
      }
    },
    plugins: [],
  },
};
