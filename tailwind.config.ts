import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          content: colors.stone[100],
          DEFAULT: colors.stone[700],
          hover: {
            content: colors.stone[50],
            DEFAULT: colors.stone[900],
          },
        },
        secondary: {
          content: colors.emerald[100],
          DEFAULT: colors.emerald[700],
          hover: {
            content: colors.emerald[50],
            DEFAULT: colors.emerald[900],
          },
        },
        danger: {
          content: colors.red[100],
          DEFAULT: colors.red[700],
          hover: {
            content: colors.red[50],
            DEFAULT: colors.red[900],
          },
        },
        bg: {
          content: colors.gray[800],
          hover: {
            content: colors.gray[900],
            DEFAULT: colors.gray[300],
          },
          DEFAULT: colors.gray[200],
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
