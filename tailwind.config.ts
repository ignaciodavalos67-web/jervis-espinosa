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
        champagne: "#C6B48F",
        midnight: {
          DEFAULT: "#154F55",
          dark: "#0D3236",
          light: "#1B6067",
        },
        petrol: {
          DEFAULT: "#154F55",
          50: "#F2F6F7",
          100: "#E4EDEF",
          200: "#C9DCDF",
          600: "#2B5C62",
          700: "#1F4246",
          800: "#154F55",
          900: "#173135",
          950: "#0D1E20",
        },
        celeste: {
          DEFAULT: "#BEDCE7",
          light: "#E1EEF4",
          dark: "#A4CCD9",
        },
        ivory: {
          DEFAULT: "#F5F3ED",
          light: "#FAF9F6",
          muted: "#ECE8DF",
          border: "#E3DDD0",
          dark: "#D8D1C2",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
