import type { Config } from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir", ...fontFamily.sans]
      },
      colors: {},
    },
  },
  plugins: [],
} satisfies Config;
