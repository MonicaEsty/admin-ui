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
        "special-bg3": "#2A2D36",

        "special-green": "#299D91",

        "gray-01": "#6b7280",
        "gray-03": "#9ca3af",
        "gray-05": "#e5e7eb",
        "gray-40": "#d1d5db",
      },
    },
  },

  plugins: [],
};