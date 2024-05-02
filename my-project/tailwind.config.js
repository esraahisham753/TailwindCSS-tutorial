/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vuejs: { 100: "#597E52", 923: "#0A6847" },
      },
      fontSize: {
        base: "18px",
        sm: "15px",
        xs: "11px",
      },
      margin: {
        4: "20px",
      },
    },
  },
  plugins: [],
};
