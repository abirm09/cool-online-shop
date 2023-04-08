/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        themeLight: {
          primary: "#53d168",

          secondary: "#24d8b4",

          accent: "#f4720e",

          neutral: "#0f172a",

          "base-100": "#F4F2F7",

          info: "#5EB8CF",

          success: "#136741",

          warning: "#BC9C10",

          error: "#991b1b",
        },
      },
    ],
  },
};
