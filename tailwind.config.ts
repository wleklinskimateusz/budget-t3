import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          content: colors.indigo[900],
          hover: {
            content: colors.indigo[950],
            DEFAULT: colors.stone[700],
          },
          DEFAULT: colors.stone[800],
        },
        secondary: {
          content: colors.emerald[200],
          DEFAULT: colors.emerald[900],
          hover: {
            content: colors.emerald[300],
            DEFAULT: colors.emerald[800],
          },
        },
        danger: {
          content: colors.red[200],
          DEFAULT: colors.red[900],
          hover: {
            content: colors.red[300],
            DEFAULT: colors.red[950],
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
