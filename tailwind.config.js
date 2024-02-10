/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px 0px",
        screens: {
          lg: "1220px",
        },
      },
      colors: {
        primary: "#7E33E0",
        secondary: "#FB2E86",
        "fashion-fuchsia": "#f701a8",
        "deadly-depths": " #0d0e43",
        "space-colonization": "#b1afbbb8",
        "text-color": "#151875",
        "gentian-blue": " #31208a",
        "duke-blue": "#00009d",
        "galactic-highway": "#2f1ac4",
        "huelveño-horizon": "#1db4e7",
        alienated: " #08d15f",
        "lifeless-green": " #05e6b7",
        "ice-climber": "#2bf5cc",
        "soft-blue-lavender": "#8a8fb9",
        "urnebes-beige": "#ffeac1",
        "cyber-lavender": "#e7e4f8",
        "brilliant-white": "#eeeffb",
        "foundation-white": "#f2f0ff",
        "cool-frost": "#e7e6ef",
        "grams-hair": "#f5f6f8",
        "lynx-white": "#f7f7f7",
        "mā-white": "#f6f7fb",
        "cold-snow": "#fff6fb",
        white: "#fff",
      },
      screens: {
        lg: "1220px",
        sm: "560px",
        md: "920px",
      },
    },
  },
  plugins: [],
};
