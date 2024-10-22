/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
            'noto': ['Noto Sans JP', 'sans-serif'],
          },
          colors: {
            witheY: '#F6EDFF',
            lilaL: '#E0B6FF',
            withe: '#FFFFFF',
            greyL: '#D0BCFF',
            black: '#1E1B1B',
            grayB: '#494649',
            purple: '#8A20D5',
        },
        fontSize: {
          'xxs': '0.625rem',
        },
      },
    },
    plugins: [],
  }
  