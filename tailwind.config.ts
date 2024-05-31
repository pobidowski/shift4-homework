import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#1E2A32",
        background: "#f4f8fA",
        grey: {
          50: "#F3F5FE",
          100: "#E8EAF2",
        },
        purple: "#B2A7F4",
        midnightGrey: "#4d6475",
        midnightPurple: "#423c66",
        midnightPurpleLight: "#645D93",
        midnightPurpleDark: "#241E47",
        purpleGray: "#595d7b",
        salmon: "#ffdbcb",
        salmonDark: "#F2D0C1",
        stroke: "#E9EEF2",
      },
      boxShadow: {
        level4: "0px 16px 32px 0px #1e2a3214",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
