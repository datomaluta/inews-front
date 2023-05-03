/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archy: "archy",
      },
      backgroundImage: {
        blackgr: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));",
      },
      animation: {
        smoothLoad: "smooth 0.8s ease forwards",
      },
      keyframes: {
        smooth: {
          from: { opacity: "0" },
          to: { opacity: "1" },
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
