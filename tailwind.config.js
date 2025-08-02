/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB', 
        'secondary': '#BFDBFE', 
        'text-base': '#4B5563', 
        'heading-dark': '#1F2937',  
      },
      fontFamily: { 
        'sans': ['Raleway', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}