/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "special-red2": "#b83016",

        "defaultblack": "#111827",
        "special-bg2": "#ffffff",
        "special-mainbg": "#f9fafb",
        "gray-40": "#d1d5db",
      },
    },
  },

  plugins: [],
};