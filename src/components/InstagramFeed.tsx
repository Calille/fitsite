'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const IG_URL = 'https://www.instagram.com/tphealthandfitness_/';

/*
 * Static Instagram-style strip. Images are chosen from site assets and do not
 * auto-update when new posts go live. Swap the `posts` array when you want
 * fresher shots, or replace this section later with a live embed widget.
 */
const posts = [
  { src: '/TP_132.webp', alt: 'Training at TP Health and Fitness' },
  { src: '/TP_140.webp', alt: 'Studio training session' },
  { src: '/TP_148.webp', alt: 'Strength training in the studio' },
  { src: '/TP_155.webp', alt: 'Coaching at TP Health and Fitness' },
  { src: '/TP_170.webp', alt: 'Members training together' },
  { src: '/hero8.webp', alt: 'TP Health and Fitness atmosphere' },
];

const InstagramFeed = () => {
  return (
    <section className="section-padding bg-[#F0F9FA]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#56b5bd]">
            On Instagram
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Follow the journey
          </h2>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#56b5bd] transition-colors hover:text-[#45a4ac]"
          >
            <FaInstagram className="text-xl" aria-hidden="true" />
            @tphealthandfitness_
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.src}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              className="group relative aspect-square overflow-hidden bg-white"
              aria-label={`View TP Health and Fitness on Instagram: ${post.alt}`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/35">
                <FaInstagram className="text-3xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
