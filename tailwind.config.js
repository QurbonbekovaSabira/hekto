/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px 0px",
        screens: {
          lg: "1200px",
        },
      },
      colors: {
        primary: "#7E33E0",
        secondary: "#FB2E86",
        "matt-purple": " #9877e7",
        "fashion-fuchsia": "#f701a8",
        "deadly-depths": " #0d0e43",
        "shadowdancer-block": "#101750",
        shadowdancer: "#0d134e",
        "space-colonization": "#b1afbbb8",
        "text-color": "#151875",
        "gentian-blue": " #31208a",
        "duke-blue": "#00009d",
        "system-shock-blue": "#2b2bf5",
        "galactic-highway": "#2f1ac4",
        "huelveño-horizon": "#1db4e7",
        alienated: " #08d15f",
        "lifeless-green": " #05e6b7",
        "ice-climber": "#2bf5cc",
        "urnebes-beige": "#ffeac1",
        "soft-blue-lavender": "#8a8fb9",
        "wild-orchid-blue": "#b8b8dc",
        "cyber-lavender": "#e7e4f8",
        "brilliant-white": "#eeeffb",
        "foundation-white": "#f2f0ff",
        "stormy-mauve": "#72718f",
        "santas-grey": " #9da0ae",
        "cosmic-sky": " #acabc3",
        "cosmic-sky-light": "#a9acc6",
        cosmic: "#b7bacb",
        "cool-frost": "#e7e6ef",
        "sugar-crystal": "#f6f5ff",
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
