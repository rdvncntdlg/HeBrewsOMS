/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black' : '#0B0C0E',
        'custom-brown' : '#A17235',
      },
      screens: {
        'lg-custom': '1190px',
      },
    },
  },
  plugins: [],
}

