/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          body: "#fff",
          text: "#202020",
          bodyRgba: "255, 255, 255",
          textRgba: "32, 32, 32",
          carouselColor: "#9955ff",
          fontxs: "0.75em",
          fontsm: "0.875em",
          fontmd: "1em",
          font16px: "16px",
          fontlg: "1.25em",
          fontxl: "2em",
          fontxxl: "3em",
          fontxxxl: "4em",
          fontButton: "0.875em",
          navHeight: "5rem",
          whiteBg: "#DAC1FF",
          bg: "rgb(255,255,255)",
          bgAlpha: "#f2f2f2",
          bg2: "rgb(245,245,245)",
          bg3: "#fff",
          primary: "rgb(52, 131, 235)",
          bg4: "#eaeaea",
          bg5: "#9046FF",
          bgtotal: "#EDF3FB",
          bgtgderecha: "#eeeeee",
          colorToggle: "#F9743B",
          translateToggle: "-12px",
          logorotate: "360deg",
          slideroffset: "0.3em",
          sizeoficon: "1.4em",
          colorSubtitle: "#2c2c2c",
          colorScroll: "#cac9ca",
        },
        dark: {
          bgtgderecha: "#21252B",
          body: "#202020",
          text: "#fff",
          bodyRgba: "32,32,32",
          textRgba: "255, 255, 255",
          carouselColor: "#9955ff",
          fontxs: "0.75em",
          fontsm: "0.875em",
          fontmd: "1em",
          font16px: "16px",
          fontlg: "1.25em",
          fontxl: "2em",
          fontxxl: "3em",
          fontxxxl: "4em",
          fontButton: "0.875em",
          navHeight: "5rem",
          whiteBg: "#DAC1FF",
          bg: "#2C2C2E",
          bgAlpha: "rgba(0,0,0,.3)",
          bg2: "rgb(30,30,30)",
          bg3: "#2C2C2E",
          primary: "rgb(52, 131, 235)",
          bg4: "#4E4E50",
          bg5: "#BF94FF",
          bgtotal: "#1C1C1E",
          colorToggle: "rgb(52, 131, 235)",
          translateToggle: "26px",
          logorotate: "-360deg",
          slideroffset: "0.3em",
          sizeoficon: "1.4em",
          colorSubtitle: "#b7b7b7",
          colorScroll: "#434343",
        },
      },
      keyframes: {
        flotar: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        flotar: "flotar 1.7s ease-in-out infinite alternate",
      },
      fontSize: {
        xs: "0.75em",
        sm: "0.875em",
        base: "1em",
        md: "1.25em",
        lg: "1.5em",
        xl: "2em",
        xxl: "3em",
        xxxl: "4em",
      },
      spacing: {
        navHeight: "5rem",
        sliderOffset: "0.3em",
        sizeoficon: "1.4em",
      },
    },
  },
  plugins: [],
};
