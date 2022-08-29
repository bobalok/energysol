module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "logo-default": "url('/energysolution.svg')",
      }),
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
