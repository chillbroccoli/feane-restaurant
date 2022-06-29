/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Open Sans", "serif"],
    },
    extend: {
      fontFamily: {
        brand: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        hero: 'url("/images/hero-bg.jpg")',
      },
    },
  },
  plugins: [],
};
