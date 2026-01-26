/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d6048',
        secondary: '#252f72',
        buttonhover: '#2139c0',
      }
    },
  },
  plugins: [],
}

