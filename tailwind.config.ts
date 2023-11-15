import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "blue-100": "#D8E6FF",
        "blue-200": "#4885FF",
        "blue-300": "#2F4363",
        "gray-100": "#F9F9FB",
        "gray-200": "#E9E7FA",
        "gray-300": "#454B5C",
        "orange-100": "#FEDFE5",
        "orange-200": "#FA5F7E",
        "yellow-100": "#FFEFDB",
        "yellow-200": "#EF9F30",
      },
    },
  },
  plugins: [],
};
export default config;
