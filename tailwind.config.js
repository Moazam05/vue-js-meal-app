/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "12rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      body: "#F5F5F9",
      "body-2": "#F5F6F8",
      gray: "#697A8D",
      "gray-100": "#8E9BAA",
      "gray-200": "#566A7F",
      "gray-300": "#D9DEE3",
      "gray-400": "#B4BDC6",
      "gray-500": "#ECEEF1",
      blue: "#696CFF",
      "blue-100": "#4F52E6",
      "blue-200": "#F3F3FF",
      "purple-100": "#E7E7FF",
      orange: "#f57224",
      cyan: "#06b6d4",
      green: "#10b981",
    },
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },
    extend: {
      boxShadow: {
        sidebar: "1px 1px 8px rgba(219, 213, 226, 0.80)",
        mobileSidebar: "2px 0px 5px 0px rgba(0,0,0,0.1)",
        card: "1px 1px 8px 0px #DBD5E2CC",
      },
    },
    screens: {
      sm: { max: "576px" },
    },
  },
  plugins: [],
};
