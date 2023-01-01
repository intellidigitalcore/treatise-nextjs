/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#283683',
        'primary-10' : '#2836831A',
        'primary-20' : '#28368333',
        'primary-60' : '#28368399',
        'primary-80' : '#283683CC',
        'secondary' : '#F1F1F1',
        'text': '#060B25',
        'text-10': '#060B251A',
        'text-40': '#060B2566',
        'text-60' : '#060B2599',
        'nav-text' : '#667085'   
      }
    },
  },
  plugins: [],
}