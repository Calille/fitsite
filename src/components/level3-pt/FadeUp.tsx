'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// Single entrance treatment used across the page: a quiet fade-up, once.
// Collapses to a plain fade when the visitor prefers reduced motion.
export default function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduceMotion ? 0.2 : 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
