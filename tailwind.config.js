/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archy: "archy",
        ninobold: "ninobold",
        bpg: "bpg",
      },
      colors: {
        primary: "#1C5EC3",
        // secondary: "#009AE7",
        secondary: "#3b82f6",
        darkbg: "#121212",
      },
      backgroundImage: {
        blackgr: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0));",
        maingr: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
        bluegr:
          "linear-gradient(89deg, rgb(32, 74, 189) 0.1%, rgb(26, 138, 211) 51.5%, rgb(21, 74, 189) 100.2%);",
      },
      animation: {
        smoothLoad: "smooth 0.8s ease forwards",
        smoothLengthGrow: "lengthGrower 0.2s ease forwards",
        smoothFallFromTop: "fallFromTop 0.2s ease forwards",
        smoothFallFromBottom: "fallFromBottom 0.2s ease forwards",
        smallDelay: "smallDelay 0.5s ease 0.2s forwards",
      },
      keyframes: {
        smooth: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        lengthGrower: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        fallFromTop: {
          from: { transform: "translateY(-30px)" },
          to: { transform: "translateY(0)" },
        },
        fallFromBottom: {
          from: { transform: "translateY(30px)" },
          to: { transform: "translateY(0)" },
        },
        smallDelay: {
          from: { transform: "translateY(-30px)" },
          to: { transform: "translateY(-50%)", opacity: 1 },
        },
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
