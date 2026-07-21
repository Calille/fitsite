'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaPlay } from 'react-icons/fa';

const IG_URL = 'https://www.instagram.com/tphealthandfitness_/';

/*
 * Instagram blocks / blanks most third-party embeds (cookies, login walls).
 * These tiles use real post stills and open the post on Instagram.
 */
const posts = [
  {
    href: 'https://www.instagram.com/reel/DW3sULVNdS8/',
    src: '/instagram/DW3sULVNdS8.jpg',
    alt: 'Level 3 PT Course reel from TP Health and Fitness',
    type: 'reel' as const,
    label: 'Reel',
  },
  {
    href: 'https://www.instagram.com/p/DbAlmLxAn3e/',
    src: '/instagram/DbAlmLxAn3e.jpg',
    alt: 'Your biggest competition is yourself — TP Health and Fitness',
    type: 'post' as const,
    label: 'Post',
  },
];

const InstagramFeed = () => {
  return (
    <section className="relative overflow-hidden section-padding bg-[#F0F9FA]">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(86,181,189,0.16), transparent 70%)',
        }}
      />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Follow the journey
          </h2>
          <p className="mx-auto mb-7 max-w-md text-base leading-relaxed text-gray-600">
            Real training, real people, and the day-to-day of the TP community in Harpenden.
          </p>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#56b5bd] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#45a4ac]"
          >
            <FaInstagram className="text-lg" aria-hidden="true" />
            Follow @tphealthandfitness_
          </a>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative aspect-[4/5] overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              aria-label={`Open ${post.type} on Instagram: ${post.alt}`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 28rem"
              />

              {/* Bottom gradient for label readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />

              {/* Type chip */}
              <span className="absolute left-4 top-4 z-10 bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-800 backdrop-blur-sm">
                {post.label}
              </span>

              {/* Centre play / IG affordance */}
              <div className="absolute inset-0 flex items-center justify-center">
                {post.type === 'reel' ? (
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <FaPlay className="ml-0.5 text-xl" aria-hidden="true" />
                  </span>
                ) : (
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/0 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100 group-hover:scale-110">
                    <FaInstagram className="text-2xl" aria-hidden="true" />
                  </span>
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-4 py-4">
                <span className="text-sm font-medium text-white">View on Instagram</span>
                <FaInstagram className="text-lg text-white/90" aria-hidden="true" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
