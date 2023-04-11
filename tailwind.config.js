// eslint-disable-next-line import/no-extraneous-dependencies
const { fontFamily } = require("tailwindcss/defaultTheme");
const path = require("path");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [path.join(__dirname, "./src/**/*.{js,jsx,ts,tsx}")],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
      },
      colors: {
        // https://www.tailwindshades.com/ - utils to crate shades
        primary: {
          // Customize it on globals.css :root
          50: withOpacityValue("--tw-color-primary-50"),
          100: withOpacityValue("--tw-color-primary-100"),
          200: withOpacityValue("--tw-color-primary-200"),
          300: withOpacityValue("--tw-color-primary-300"),
          400: withOpacityValue("--tw-color-primary-400"),
          500: withOpacityValue("--tw-color-primary-500"),
          600: withOpacityValue("--tw-color-primary-600"),
          700: withOpacityValue("--tw-color-primary-700"),
          800: withOpacityValue("--tw-color-primary-800"),
          900: withOpacityValue("--tw-color-primary-900"),
        },
        yellow: {
          DEFAULT: "#FAC846",
          50: "#FFFDF9",
          100: "#FEF7E5",
          200: "#FDEBBD",
          300: "#FCE095",
          400: "#FBD46E",
          500: "#FAC846",
          600: "#F9B80F",
          700: "#CA9405",
          800: "#946C04",
          900: "#5D4403",
        },
        dark: "#222222",
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            // eslint-disable-next-line max-len
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-700px 0",
          },
          "100%": {
            backgroundPosition: "700px 0",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies
  plugins: [require("@tailwindcss/forms")],
};
