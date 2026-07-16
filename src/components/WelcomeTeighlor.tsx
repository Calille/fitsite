'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WelcomeTeighlor = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid items-center gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-14"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-[#F0F9FA]">
            <Image
              src="/team/teighlor.webp"
              alt="Teighlor Pengelley, Health and Fitness Coach at TP Health and Fitness"
              fill
              className="object-cover object-top"
              sizes="280px"
              priority={false}
            />
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#56b5bd]">
              Welcome
            </p>
            <h2 className="mb-5 text-3xl font-bold text-gray-800 md:text-4xl">
              Hi, I&apos;m Teighlor
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-gray-600 md:mx-0">
              Founder of TP Health &amp; Fitness. Whether you&apos;re here for personal training,
              small group sessions, or a clearer path forward, you&apos;re in the right place.
              Come train with a team that cares about sustainable results.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link
                href="/team"
                className="inline-flex items-center justify-center rounded-lg bg-[#56b5bd] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#45a4ac]"
              >
                Meet the Team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors hover:border-[#56b5bd] hover:text-[#56b5bd]"
              >
                View Personal Training
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeTeighlor;
