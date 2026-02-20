import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          deep:  "#2D1B69",
          mid:   "#7B2FBE",
          light: "#9D5FE0",
        },
        rose: {
          DEFAULT: "#E91E8C",
          light:   "#F060A8",
        },
        "off-white": "#F8F4FF",
        "bg-dark":   "#0D0A1A",
        surface:     "#13102A",
        card:        "#1A1530",
      },
      fontFamily: {
        bebas:  ["var(--font-bebas)",   "Impact", "sans-serif"],
        sans:   ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 22s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
