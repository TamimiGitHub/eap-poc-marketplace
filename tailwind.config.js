module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "background-image": "./src/images/background.png",
      }),
      backgroundImage: ["hover", "focus"],
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [],
}
