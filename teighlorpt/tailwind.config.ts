import type { Config } from 'tailwindcss';

/*
 * TP Health & Fitness brand palette (aligned with main site / ptdiploma):
 *   navy   #1a4a4e  dark sections (hero, pricing, final CTA)
 *   teal   #56b5bd  eyebrows, prices, accents
 *   orange #F97316  primary CTAs
 *   mist   #F0F9FA  light section backgrounds
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        coal: {
          DEFAULT: '#1a4a4e',
          card: '#12373a',
        },
        cream: '#F0F9FA',
        gold: {
          DEFAULT: '#56b5bd',
          soft: '#7ec8ce',
        },
        sand: {
          DEFAULT: '#F97316',
          dark: '#e2660f',
        },
        ink: '#171717',
        slate: '#6B7280',
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
