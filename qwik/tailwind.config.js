/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        'sm': '640px',
      },
    },
  },
  plugins: [],
};
