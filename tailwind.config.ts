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
      colors: {
        colorPrimary: "var(--color-primary)",
        colorPrimaryDarker: "var(--color-primary-darker)",
        colorPrimaryDarkest: "var(--color-primary-darkest)",
        colorPrimaryForeground: "var(--color-primary-foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
