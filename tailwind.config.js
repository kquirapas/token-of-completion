/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        purple: "url('/purple.jpg')",
        whitegraph: "url('/white.jpg')",
        hero: "url('/hero.jpg')",
      },
      colors: {
        transparent: "rgba(0,0,0,0)",
        dim: "rgba(0,0,0,0.5)",
        "purple-heart": "#7B3FE4",
        "blue-ribbon": "#016EEA",
        "black-pearl": "#080524",
        letters: "#1C1C1E",
        "about-gradient": "#D3BCFA",
        "light-letter": "#8E8E8F",
        "directory-white": "#F6F1FF",
      },
      fontFamily: {
        "futura-regular": ["FuturaRegular"],
        "futura-bold": ["FuturaBold"],
        "futura-black": ["FuturaBlack"],
      },
    },
  },
  plugins: [],
};
