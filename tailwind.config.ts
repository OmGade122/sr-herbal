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
        green: {
          dark: "#0d2818",
          mid: "#1a4a2e",
          light: "#2d7a4f",
          pale: "#e8f5ee",
          mist: "#c8e6d4",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c97a",
          pale: "#fdf8ec",
        },
        cream: "#faf7f0",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        floatLeaf: "floatLeaf 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        waPulse: "waPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        floatLeaf: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(10deg)" },
        },
        pulseGlow: {
          "0%, 100%": { transform: "translate(-50%,-50%) scale(1)", opacity: "0.8" },
          "50%": { transform: "translate(-50%,-50%) scale(1.08)", opacity: "1" },
        },
        waPulse: {
          "0%, 100%": { boxShadow: "0 4px 20px rgba(37,211,102,0.4)" },
          "50%": { boxShadow: "0 4px 32px rgba(37,211,102,0.65), 0 0 0 8px rgba(37,211,102,0.1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
