import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        permitMidnight: "#0f1035",
        permitBlue: "#0a7aff",
        permitYellow: "#f8ae0b",
      },
    },
  },
  plugins: [],
} satisfies Config;
