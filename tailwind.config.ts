// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Noto Serif TC", "serif"],
        body: ["Noto Sans TC", "sans-serif"],
      },
      colors: {
        sage: {
          light: "#a8c5ab",
          DEFAULT: "#7a9e7e",
          dark: "#4e7252",
        },
        earth: "#8b6f5c",
        cream: "#faf7f2",
        warm: "#e8dcc8",
      },
    },
  },
  plugins: [],
};

export default config;
