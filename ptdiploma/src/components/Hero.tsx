'use client';

import { motion, useReducedMotion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';
import { START_DATE } from '@/content/site';

const trustItems = [
  '100% Pass Rate',
  '10+ Years Experience',
  'Modern Studio',
  'Real Client Experience',
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0.2 : 0.6, delay, ease: 'easeOut' as const },
  });

  return (
    <section className="bg-navy pb-16 pt-28 text-white sm:pb-20 sm:pt-32">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <motion.p
              {...entrance(0)}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal"
            >
              Harpenden, Hertfordshire
            </motion.p>
            <motion.h1
              {...entrance(0.1)}
              className="font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
            >
              Become a Qualified Personal Trainer
            </motion.h1>
            <motion.p {...entrance(0.2)} className="mt-5 text-lg text-white/85 sm:text-xl">
              Level 3 PT Diploma. 10-Week Hybrid Programme. Starts {START_DATE}.
            </motion.p>
            <motion.div {...entrance(0.3)} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#enquire" className="btn-primary text-base">
                Enquire Now
              </a>
              <a
                href="#programme"
                className="font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                See how the 10 weeks work
              </a>
            </motion.div>
          </div>

          <motion.div {...entrance(0.25)}>
            <ImagePlaceholder label="[HERO_IMAGE] 16:9 studio or training action shot" aspect="aspect-video" />
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.ul
          {...entrance(0.4)}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:mt-14 lg:grid-cols-4"
        >
          {trustItems.map((item) => (
            <li
              key={item}
              className="bg-navy px-4 py-4 text-center text-sm font-semibold tracking-wide text-white/90 sm:text-base"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
