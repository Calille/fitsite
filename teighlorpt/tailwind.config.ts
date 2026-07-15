import type { Config } from 'tailwindcss';

/*
 * Palette matched to the reference design Teighlor supplied:
 *   coal   #141414  near-black used for the hero, pricing band and final CTA
 *   coal-card #1d1d1d  slightly lifted panel tone inside dark sections
 *   cream  #f2ede6  warm off-white used for the light sections
 *   gold   #c9a469  accent for eyebrows, prices and rules
 *   sand   #d3aa6e  button fill (dark text on top)
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        coal: {
          DEFAULT: '#141414',
          card: '#1d1d1d',
        },
        cream: '#f2ede6',
        gold: {
          DEFAULT: '#c9a469',
          soft: '#e0c9a2',
        },
        sand: {
          DEFAULT: '#d3aa6e',
          dark: '#c2985c',
        },
        ink: '#171717',
        slate: '#5f5b54',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '68rem',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
    },
  },
  plugins: [],
};

export default config;
