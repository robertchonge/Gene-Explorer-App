import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        glittery: ['"Poppins"', ...fontFamily.sans],
      },
      colors: {
        glitter: {
          green: '#32CD32',
          yellow: '#FFD700',
          base: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
};

