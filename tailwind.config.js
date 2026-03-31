/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        secondary: "#f59e0b",
        dark: "#0f172a",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(13, 148, 136, 0.2)",
      },
    },
  },
  plugins: [],
}

