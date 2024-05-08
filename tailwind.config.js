/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-colors-white": "#fff",
        black: "#000",
        "colors-slate-300": "#cbd5e1",
        "text-colors-gray": "#404040",
        "colors-slate-50": "#f8fafc",
        "text-colors-dark-gray": "#111827",
        "text-colors-amber": "#f59e0b",
        "colors-green-300": "#86efac",
        "colors-gray-300": "#d1d5db",
        "colors-blue-300": "#93c5fd",
        "colors-red-300": "#fca5a5",
      },
      spacing: {},
      fontFamily: {
        "headings-headling-2": "NanumGothic",
        "body-text-small-text": "'Noto Sans KR'",
      },
    },
    fontSize: {
      "17xl": "2.25rem",
      sm: "0.875rem",
      base: "1rem",
      "29xl": "3rem",
      xs: "0.75rem",
      "11xl": "1.875rem",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "640px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
