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
      typography: (theme) => ({
        // https://sergiodxa.com/articles/use-tailwindcss-typography-with-dark-mode-styles
        // Reference custom fontFamily: https://github.com/tailwindlabs/tailwindcss-typography/issues/14
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              transition: "all 0.15s ease-in",
              color: theme("colors.radix.red11"),
              background: theme("colors.radix.red4"),
              lineHeight: `1.6`,
              display: "inline-block",
              "text-decoration": "none",
              fontWeight: "false",
              paddingRight: `${theme("padding[1]")}`,
              paddingLeft: `${theme("padding[1]")}`,

              "&:hover, &.active": {
                color: theme("colors.radix.red1"),
                background: theme("colors.radix.red10"),
              },
            },
            h1: { color: theme("colors.gray.800") },
            h2: {
              color: theme("colors.gray.800"),
              fontFamily: `${theme("fontFamily.sans")}`,
              fontWeight: 900,
            },
            h3: {
              color: theme("colors.gray.600"),
              fontWeight: 400,
            },
            h4: {
              color: theme("colors.gray.800"),
            },
            h5: {
              color: theme("colors.gray.500"),
              fontSize: "0.9em",
              lineHeight: `1.8em`,

              "& a": {
                display: "inline",
                padding: `0px !important`,
                background: `${theme("colors.transparent")} !important`,

                "&:hover, &.active": {
                  color: theme("colors.radix.red12"),
                },
              },
            },
            code: {
              color: theme("colors.gray.50"),
              "background-color": theme("colors.gray.800"),
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: theme("colors.gray.800"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              // color: theme("colors.radix.red10"),
              // background: theme("colors.radix.red4"),
              "&:hover, &.active": {
                color: theme("colors.radix.red12"),
                background: theme("colors.radix.red7"),
              },
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.red.100"),
            },
            h3: {
              color: theme("colors.gray.200"),
              fontWeight: 400,
            },
            h4: {
              color: theme("colors.gray.50"),
            },
            h5: {
              color: theme("colors.gray.400"),

              "& a": {
                background: `${theme("colors.transparent")} !important`,

                "&:hover, &.active": {
                  color: theme("colors.radix.red12"),
                },
              },
            },
            code: {
              color: theme("colors.gray.800"),
              "background-color": theme("colors.gray.50"),

              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: theme("colors.gray.50"),
            },
          },
        },
      }),
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
    require("@tailwindcss/typography"),
    require("radix-colors-for-tailwind")({
      colors: ["blue", "cyan", "lime", "crimson", "tomato", "red"],
    }),
  ],
};
