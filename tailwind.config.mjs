/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#e11d48',
        'primary-hover': '#be123c',
        darkbg: '#090d16',
        darkcard: '#131c2e',
      },
    },
  },
  plugins: [],
};
