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
        /* ── New brand palette ──────────────────── */
        brand: {
          green:         "#008f78",
          "green-light": "#00b898",
          "green-dark":  "#006b5a",
          blue:          "#2b3475",
          "blue-light":  "#3d49a0",
          accent:        "#160227",
        },
        "off-white": "#f0ede8",
        "bg-dark":   "#0b0117",
        surface:     "#130221",
        card:        "#1c0530",

        /* ── Legacy aliases (kept for backward compat in existing components)
           Old violet → new green tones
           Old rose   → new blue tones                                        */
        violet: {
          deep:  "#1a2256",   // was #2D1B69 → now deep blue
          mid:   "#008f78",   // was #7B2FBE → now brand green
          light: "#00b898",   // was #9D5FE0 → now green-light
        },
        rose: {
          DEFAULT: "#2b3475", // was #E91E8C → now brand blue
          light:   "#3d49a0", // was #F060A8 → now blue-light
        },
      },
      fontFamily: {
        /* Keep "bebas" class name so Navbar/LoadingScreen don't break */
        bebas: ["var(--font-syne)", "system-ui", "sans-serif"],
        syne:  ["var(--font-syne)", "system-ui", "sans-serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 22s linear infinite",
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
