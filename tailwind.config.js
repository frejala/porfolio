/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'o-blue': '#49DEFF',
        'o-yellow': '#FFC100',
        'o-black': '#121214',
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      textStroke: {
        'white-1': '1px white',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-white-1': {
          '-webkit-text-stroke': '1px white',
          'text-stroke': '1px white',
        },
        '.text-stroke-none': {
          '-webkit-text-stroke': '0px white',
          'text-stroke': '0px white',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
