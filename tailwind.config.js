module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "80px 1fr",
        users: "300px 1fr",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["active", "hover"],
      borderColor: ["focus"],
      ringColor: ["focus"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
