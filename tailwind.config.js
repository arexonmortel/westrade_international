/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        royalBlue: '#4169E1',      // Royal Blue (Primary)
        white: '#FFFFFF',          // White (Background)
        dodgerBlue: '#1E90FF',      
        steelBlue: '#4682B4',  
        darkBlue: '#0D3B66',       // Dark Blue (For contrast)
        cornflowerBlue: '##6495ed',
        lightBlue: '#f2f3f5'     
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
        slideOut: 'slideOut 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
}