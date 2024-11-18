import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grow: {
          "0%, 100%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.5)" },
        },

        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        "grow-dot": "grow 1s infinite ease-in-out",
        slideLeft: "slideLeft 10s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "48px": "48px",
      },
      lineHeight: {
        "62.4": "62.4px",
      },
    },
  },
  plugins: [],
};

export default config;
