/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      colors: {
        'greenish': '#3cb3ab',
        'moderate-cyan': '#3cb4ac',
        'dark-cyan': '#147b74',
        'dark-gray': '#7a7a7a',
        'black': '#000000',
      },
      fontFamily: {
        "commissioner": ["Commissioner", "sans-serif"]
      }
    },
  },
  plugins: [],
}

