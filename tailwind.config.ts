// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App directory
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
  ],
  theme: {
    extend: {
      fontFamily: {
        sauce: ["'Open Sauce One'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
