import type { Config } from 'tailwindcss';

/*
 * Palette pulled from the existing TP Health & Fitness codebase (exact values):
 *   navy   #1a4a4e  — deep teal-navy used on tphealthfitness.com
 *   orange #F97316  — accent-secondary from the TP Performance stylesheet
 *   teal   #56b5bd  — core TP brand colour (the logo)
 *   mist   #F0F9FA  — bg-accent-section tint from the TP stylesheet
 *   ink    #171717  — text-primary from the TP stylesheet
 *   slate  #6B7280  — text-secondary from the TP stylesheet
 * Derived shades (navy-deep, orange-dark) exist only for hover/depth.
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a4a4e',
          deep: '#12373a',
        },
        orange: {
          DEFAULT: '#F97316',
          dark: '#e2660f',
        },
        teal: {
          DEFAULT: '#56b5bd',
        },
        mist: '#F0F9FA',
        ink: '#171717',
        slate: {
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

export default config;
