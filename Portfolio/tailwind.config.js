/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    minHeight100vh: ({ addVariant }) => {
      addVariant('min-h-100vh', '@media screen and (min-height: 100vh)');
    },
  },
}

