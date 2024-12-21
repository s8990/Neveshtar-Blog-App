import type { Config } from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["vazir", ...fontFamily.sans]
      },
      colors: {
        colorPrimary: "var(--color-primary)",
        colorPrimaryDarker: "var(--color-primary-darker)",
        colorPrimaryDarkest: "var(--color-primary-darkest)",
        colorPrimaryForeground: "var(--color-primary-foreground)",
        colorGray: "var(--color-gray)",
        colorGrayDarker: "var(--color-gray-darker)",
        colorGrayDarkest: "var(--color-gray-darkest)",
      },
    },
  },
  plugins: [],
} satisfies Config;
