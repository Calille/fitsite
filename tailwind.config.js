const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Level 3 PT Course palette (also usable site-wide)
        navy: {
          DEFAULT: '#1a4a4e',
          deep: '#12373a',
        },
        // Preserve Tailwind's orange-* scale for admin UI; add DEFAULT/dark for L3 page
        orange: {
          ...colors.orange,
          DEFAULT: '#F97316',
          dark: '#e2660f',
        },
        teal: {
          DEFAULT: '#56b5bd',
        },
        mist: '#F0F9FA',
        ink: '#171717',
        // Preserve slate-* scale; DEFAULT matches L3 body secondary text
        slate: {
          ...colors.slate,
          DEFAULT: '#6B7280',
        },
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
