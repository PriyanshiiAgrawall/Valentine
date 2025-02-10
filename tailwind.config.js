/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink1': '#EBA3D1',
        'custom-fuchsia': '#FDF3CD',
        'custom-pink2': '#E1EDF3',
      },
    },
  },
  plugins: [],
}


