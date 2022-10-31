const colors = require("tailwindcss/colors");
const {
  toRGB,
  withOpacityValue,
} = require("@left4code/tw-starter/dist/js/tailwind-config-helper");

module.exports = {
  content: [
    "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./resources/**/*.{php,html,js,jsx,ts,tsx,vue}",
    "./node_modules/@left4code/tw-starter/**/*.js",
    // ".//*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rgb: toRGB({
          inherit: colors.inherit,
          current: colors.current,
          transparent: colors.transparent,
          black: colors.black,
          white: colors.white,
          slate: colors.slate,
          gray: colors.gray,
          zinc: colors.zinc,
          neutral: colors.neutral,
          stone: colors.stone,
          red: colors.red,
          orange: colors.orange,
          amber: colors.amber,
          yellow: colors.yellow,
          lime: colors.lime,
          green: colors.green,
          emerald: colors.emerald,
          teal: colors.teal,
          cyan: colors.cyan,
          sky: colors.sky,
          blue: colors.blue,
          indigo: colors.indigo,
          violet: colors.violet,
          purple: colors.purple,
          fuchsia: colors.fuchsia,
          pink: colors.pink,
          rose: colors.rose,
          sky: colors.sky,
          stone: colors.stone,
          neutral: colors.neutral,
          gray: colors.gray,
          slate: colors.slate,
        }),
        primary: withOpacityValue("--color-primary"),
        secondary: withOpacityValue("--color-secondary"),
        success: withOpacityValue("--color-success"),
        info: withOpacityValue("--color-info"),
        warning: withOpacityValue("--color-warning"),
        pending: withOpacityValue("--color-pending"),
        danger: withOpacityValue("--color-danger"),
        light: withOpacityValue("--color-light"),
        dark: withOpacityValue("--color-dark"),
        slate: {
          50: withOpacityValue("--color-slate-50"),
          100: withOpacityValue("--color-slate-100"),
          200: withOpacityValue("--color-slate-200"),
          300: withOpacityValue("--color-slate-300"),
          400: withOpacityValue("--color-slate-400"),
          500: withOpacityValue("--color-slate-500"),
          600: withOpacityValue("--color-slate-600"),
          700: withOpacityValue("--color-slate-700"),
          800: withOpacityValue("--color-slate-800"),
          900: withOpacityValue("--color-slate-900"),
        },
        darkmode: {
          50: withOpacityValue("--color-darkmode-50"),
          100: withOpacityValue("--color-darkmode-100"),
          200: withOpacityValue("--color-darkmode-200"),
          300: withOpacityValue("--color-darkmode-300"),
          400: withOpacityValue("--color-darkmode-400"),
          500: withOpacityValue("--color-darkmode-500"),
          600: withOpacityValue("--color-darkmode-600"),
          700: withOpacityValue("--color-darkmode-700"),
          800: withOpacityValue("--color-darkmode-800"),
          900: withOpacityValue("--color-darkmode-900"),
        },
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      container: {
        center: true,
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      strokeWidth: {
        0.5: 0.5,
        1.5: 1.5,
        2.5: 2.5,
      },
      //내가 원하는 animation-설정 지정
      animation: {
        wiggle: "wiggle 0.2s ease-in-out infinite",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "wiggle-once": "wiggle 0.2s ease-in-out 1",
        "blink-red": "blink-red 0.2s ease-in-out 1",
        "blink-blue": "blink-blue 0.2s ease-in-out 1",
        "blink-border-red": "blink-border-red 0.2s linear 1",
        "blink-border-blue": "blink-border-blue 0.2s linear 1",
        "blink-text-red": "blink-text-red 0.2s linear 1",
        "blink-text-blue": "blink-text-blue 0.2s linear 1",
        "blink-ba-red": "blink-ba-red 0.1s ease-in-out 1",
        "blink-ba-blue": "blink-ba-blue 0.1s ease-in-out 1",
        "ping-once": "ping-once 0.8s ease 1",
      },

      // 내가 원하는 animation-keyframes 지정
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        "blink-blue": {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": { "background-color": "#1d5cc5" },
        },
        "blink-red": {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": { "background-color": "#e6285a" },
        },
        "blink-ba-blue": {
          "0%, 100%": { color: "#1d5cc5", "background-color": "transparent" },
          "50%": { color: "white", "background-color": "#1d5cc5" },
        },
        "blink-ba-red": {
          "0%, 100%": { color: "#e6285a", "background-color": "transparent" },
          "50%": { color: "white", "background-color": "#e6285a" },
        },
        "blink-border-blue": {
          "0%, 100%": {
            "border-color": "none",
          },
          "50%": { "border-color": "#1d5cc5" },
        },
        "blink-border-red": {
          "0%, 100%": {
            "border-color": "none",
          },
          "50%": { "border-color": "#e6285a" },
        },

        "blink-bar-blue": {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": { "background-color": "#1d5cc5" },
        },
        "blink-bar-red": {
          "0%, 100%": {
            "background-color": "transparent",
          },
          "50%": { "background-color": "#e6285a" },
        },

        "blink-text-blue": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { color: "#1d5cc5", transform: "scale(1.1)" },
        },
        "blink-text-red": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { color: "#e6285a", transform: "scale(1.1)" },
        },
        "ping-once": {
          "0%": { opacity: 80, transform: "scale(1)" },
          "50%": { opacity: 0, transform: "scale(2.2)" },
          "100%": { opacity: 0, transform: "scale(1)" },
        },
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
};
// const colors = require("tailwindcss/colors");
// const {
//   toRGB,
//   withOpacityValue,
// } = require("@left4code/tw-starter/dist/js/tailwind-config-helper");

// module.exports = {
//   content: [
//     "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
//     "./resources/**/*.{php,html,js,jsx,ts,tsx,vue}",
//     "./node_modules/@left4code/tw-starter/**/*.js",
//     // ".//*.html",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         rgb: toRGB({
//           inherit: colors.inherit,
//           current: colors.current,
//           transparent: colors.transparent,
//           black: colors.black,
//           white: colors.white,
//           slate: colors.slate,
//           gray: colors.gray,
//           zinc: colors.zinc,
//           neutral: colors.neutral,
//           stone: colors.stone,
//           red: colors.red,
//           orange: colors.orange,
//           amber: colors.amber,
//           yellow: colors.yellow,
//           lime: colors.lime,
//           green: colors.green,
//           emerald: colors.emerald,
//           teal: colors.teal,
//           cyan: colors.cyan,
//           sky: colors.sky,
//           blue: colors.blue,
//           indigo: colors.indigo,
//           violet: colors.violet,
//           purple: colors.purple,
//           fuchsia: colors.fuchsia,
//           pink: colors.pink,
//           rose: colors.rose,
//           sky: colors.sky,
//           stone: colors.stone,
//           neutral: colors.neutral,
//           gray: colors.gray,
//           slate: colors.slate,
//         }),
//         primary: withOpacityValue("--color-primary"),
//         secondary: withOpacityValue("--color-secondary"),
//         success: withOpacityValue("--color-success"),
//         info: withOpacityValue("--color-info"),
//         warning: withOpacityValue("--color-warning"),
//         pending: withOpacityValue("--color-pending"),
//         danger: withOpacityValue("--color-danger"),
//         light: withOpacityValue("--color-light"),
//         dark: withOpacityValue("--color-dark"),
//         slate: {
//           50: withOpacityValue("--color-slate-50"),
//           100: withOpacityValue("--color-slate-100"),
//           200: withOpacityValue("--color-slate-200"),
//           300: withOpacityValue("--color-slate-300"),
//           400: withOpacityValue("--color-slate-400"),
//           500: withOpacityValue("--color-slate-500"),
//           600: withOpacityValue("--color-slate-600"),
//           700: withOpacityValue("--color-slate-700"),
//           800: withOpacityValue("--color-slate-800"),
//           900: withOpacityValue("--color-slate-900"),
//         },
//         darkmode: {
//           50: withOpacityValue("--color-darkmode-50"),
//           100: withOpacityValue("--color-darkmode-100"),
//           200: withOpacityValue("--color-darkmode-200"),
//           300: withOpacityValue("--color-darkmode-300"),
//           400: withOpacityValue("--color-darkmode-400"),
//           500: withOpacityValue("--color-darkmode-500"),
//           600: withOpacityValue("--color-darkmode-600"),
//           700: withOpacityValue("--color-darkmode-700"),
//           800: withOpacityValue("--color-darkmode-800"),
//           900: withOpacityValue("--color-darkmode-900"),
//         },
//       },
//       fontFamily: {
//         roboto: ["Roboto"],
//       },
//       container: {
//         center: true,
//       },
//       maxWidth: {
//         "1/4": "25%",
//         "1/2": "50%",
//         "3/4": "75%",
//       },
//       strokeWidth: {
//         0.5: 0.5,
//         1.5: 1.5,
//         2.5: 2.5,
//       },
//       //내가 원하는 animation-설정 지정
//       animation: {
//         wiggle: "wiggle 0.2s ease-in-out infinite",
//         "bounce-short": "bounce 0.2s ease-in-out infinite",
//         "bounce-short": "bounce 0.2s ease-in-out infinite",
//         "wiggle-once": "wiggle 0.2s ease-in-out 1",
//         "blink-red": "blink-red 0.2s ease-in-out 1",
//         "blink-blue": "blink-blue 0.2s ease-in-out 1",
//         "blink-text-red": "blink-text-red 0.2s ease-in-out 1",
//         "blink-text-blue": "blink-text-blue 0.2s ease-in-out 1",
//         "blink-ba-red": "blink-ba-red 0.4s ease-in-out 1",
//         "blink-ba-blue": "blink-ba-blue 0.4s ease-in-out 1",

//         "ping-once": "ping-once 1s ease 1",
//       },

//       // 내가 원하는 animation-keyframes 지정
//       keyframes: {
//         wiggle: {
//           "0%, 100%": { transform: "rotate(0deg)" },
//           "25%": { transform: "rotate(1deg)" },
//           "75%": { transform: "rotate(-1deg)" },
//         },
//         "blink-blue": {
//           "0%, 100%": {
//             "background-color": "transparent",
//             transform: "rotate(-1deg)",
//           },
//           "50%": { "background-color": "#1d5cc5", transform: "rotate(1deg)" },
//         },
//         "blink-red": {
//           "0%, 100%": {
//             "background-color": "transparent",
//             transform: "rotate(-1deg)",
//           },
//           "50%": { "background-color": "#e6285a", transform: "rotate(1deg)" },
//         },

//         "blink-bar-blue": {
//           "0%, 100%": {
//             "background-color": "transparent",
//           },
//           "50%": { "background-color": "#1d5cc5" },
//         },
//         "blink-bar-red": {
//           "0%, 100%": {
//             "background-color": "transparent",
//           },
//           "50%": { "background-color": "#e6285a" },
//         },

//         "blink-text-blue": {
//           "0%, 100%": { color: "white", transform: "scale(1)" },
//           "50%": { color: "#1d5cc5", transform: "scale(1.2)" },
//         },
//         "blink-text-red": {
//           "0%, 100%": { color: "white", transform: "scale(1)" },
//           "50%": { color: "#e6285a", transform: "scale(1.2)" },
//         },
//         "ping-once": {
//           "0%": { opacity: 50 , transform: "scale(1)" },
//           "50%": { opacity: 0, transform: "scale(2.2)" },
//           "100%": { opacity: 0, transform: "scale(1)" },
//         },
//       },
//     },
//   },

//   plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
//   variants: {
//     extend: {
//       boxShadow: ["dark"],
//     },
//   },
// };
