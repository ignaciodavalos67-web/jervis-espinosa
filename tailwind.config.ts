import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#101B1C",
          dark: "#0B1314",
          light: "#172628",
        },
        ivory: {
          DEFAULT: "#F1EFE9",
          pure: "#FAF9F5",
          muted: "#E5E2D8",
          dark: "#D5D1C3",
        },
        champagne: {
          DEFAULT: "#C6B48F",
          light: "#D8CBB0",
          dark: "#B4A076",
        },
      },
      fontFamily: {
        serif: ["Poppins", "var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["Poppins", "var(--font-sans)", "system-ui", "sans-serif"],
        poppins: ["Poppins", "var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
