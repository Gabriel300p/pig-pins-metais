/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto Slab", "serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
