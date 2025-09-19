/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'orange': {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        }
      }
    },
  },
  plugins: [],
}