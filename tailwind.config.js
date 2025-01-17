/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        flotar: "flotar 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        flotar: {
          "0%": { transform: "translate(0, 0px)" },
          "50%": { transform: "translate(0, 15px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
      },
    },
  },
  plugins: [],
}

