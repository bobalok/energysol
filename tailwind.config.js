module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "logo-default": "url('/energysolution.svg')",
        "contact-default": "url('/images/bg-images/bg-elaborated.svg')",
      }),
      backgroundSize: {
        "bg-size": "700px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
