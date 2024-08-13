
import  { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  safelist: [
    'bg-primary',
    'bg-secondary',
  ],


  theme: {
    extend: {
      animation: {
        scrollUp: 'scrollUp 15s ease-in-out infinite',
        fadeIn: 'fadeIn 1s',
        move: 'move 5s ease-out infinite',
        rotate: 'rotate 5s linear infinite'
      },
      keyframes: {
        rotate: {
          '0%': {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(360deg)'}
        },
        scrollUp: {
          '0%': {transform: 'translateY(110px)'},
          '100%': {transform: 'translateY(-550px)'}
        },
        fadeIn: {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        move: {
          from: {transform: 'translateX(-100%)'},
          to: {transform: 'translateX(100%)'}
        }
      },
      colors: {
        "primary": "#095c60",
        "primaryLight": "#26bbb4",
        "primaryDark": "#152f31",
        
        "secondary": "#004577",
        "secondaryLight": "#077cd1",
        "secondaryDark": "#032b49",

        "disabled": "#475b5d",
        
        "textPrimary": '#FFFFFF',
        'textSecondary': '#ffffff88',
        'bgPrimary': '#141517',
        'bgSecondary': '#1a1b1e',

        "divider": "#353d3c",
      },
      backgroundImage: {
        'bgGradientPrimary': "linear-gradient(90.46deg, rgba(30, 30, 30, 0.4) -18.76%, rgba(173, 173, 173, 0.4) 72.39%)",
        'bgGradientSecondary': "linear-gradient(180deg, rgba(0, 220, 159, 0.3) 34.7%, rgba(188, 44, 216, 0.06) 100%)",
        "bgGradientModel": "linear-gradient(90.46deg, rgba(30, 30, 30, 0.4) -18.76%, rgba(173, 173, 173, 0.4) 72.39%)",
        'space': "url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0MCAyNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxyZWN0IHg9IjEwNiIgeT0iOTAiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz48cmVjdCB4PSI3NCIgeT0iNjMiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIyMyIgeT0iNjYiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSI1MCIgeT0iMTEwIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iNjMiIHk9IjEyOCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjQ1IiB5PSIxNDkiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSI5MiIgeT0iMTUxIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iNTgiIHk9IjgiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNDciIHk9IjMzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+PHJlY3QgeD0iOTEiIHk9IjQzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMTY5IiB5PSIyOSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjE4MiIgeT0iMTkiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNjEiIHk9IjU5IiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMTM4IiB5PSI5NSIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjE5OSIgeT0iNzEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiLz48cmVjdCB4PSIyMTMiIHk9IjE1MyIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPjxyZWN0IHg9IjEyOCIgeT0iMTYzIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMjA1IiB5PSIxNzQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxNTIiIHk9IjIwMCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjxyZWN0IHg9IjUyIiB5PSIyMTEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz48cmVjdCB5PSIxOTEiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48cmVjdCB4PSIxMTAiIHk9IjE4NCIgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjEiIGhlaWdodD0iMSIvPjwvc3ZnPg==)",
        'mint-bg': "url('/img/masterclass/download-bg.webp')"
      },
      backgroundColor: {
        'header': "rgb(10, 5, 10, 0.5)",
        'gray-666': "#666",
        'gray-3636': "#36363626",
        'header-bg': "rgb(20,20,20,0.35)"
      },
      borderColor: {
        'gray-666': "#666",
        'gray-252525': "#252525",
        'gray-3636': "#caced326"
      },
      
      transformOrigin: {
        center: 'center', // Adding custom center utility
      },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        neon: ['neon'],
        chakra: ['Chakra Petch','sans-serif'],
        fontello: ['fontello'],
        roboto: ["Roboto Condensed", 'sans-serif']
      },
    },
  },
  // plugins: [
  //   require("tailwindcss-animate"),
  // ],
};
export default config;
