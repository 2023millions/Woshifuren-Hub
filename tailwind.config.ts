import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101D1A",
        jade: "#116B57",
        cream: "#F7F5EF",
        gold: "#D7AE67",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 29, 26, 0.09)",
      },
    },
  },
  plugins: [],
};
export default config;
