/* eslint-disable */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: colors.yellow,
        purple: colors.purple,
        blue: colors.blue,
        gray: colors.gray,
        bluegray: colors.blueGray,
        almostblack: "hsl(221, 30%, 7%)",
        red: colors.red,
        orange: colors.orange,
        green: colors.green,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        lime: colors.lime,
        amber: colors.amber,
        sky: colors.sky,
        white: "#fff",
      },
      fontSize: {
        xxs: ".625rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "dark"],
      backgroundOpacity: ["dark"],
      borderWidth: ["dark", "last"],
      margin: ["first"],
      padding: ["last"],
      ringColor: ["dark", "hover"],
      ringOpacity: ["dark", "hover"],
      ringWidth: ["dark", "hover"],
      typography: ["dark"],
    },
  },
  plugins: [
    require("radix-colors-for-tailwind")({
      colors: ["blue", "cyan", "lime", "crimson", "tomato", "red"],
    }),
  ],
};
