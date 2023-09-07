/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        "greyDark": "#AEB0B4",
        "orange": "#FF6006",
        "primary": "#108A00",
        "secondary": "#777799",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        mont: ['var(--font-montserrat)'],
        // poppins: ['var(--font-poppins)']
      },
    },
  },
  plugins: [],
}
