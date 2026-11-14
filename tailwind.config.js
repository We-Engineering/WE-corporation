/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B0A",
        gold: {
          DEFAULT: "#A07F3A",
          polished: "#D4AF63",
          deep: "#6F5220",
          light: "#E8CB83",
          dark: "#8A682B",
        },
        ivory: "#F5F1E8",
        graphite: "#242321",
        graphiteL: "#2E2C29",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.35em",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};