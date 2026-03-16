"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const included = [
  "Strength and Power Programme",
  "In and Off Season Running",
  "Nutritional Support",
  "Recovery Sessions",
  "Menstrual Cycle Tracking",
  "Expert Tips and Valuable Insights",
];

export default function WhatsIncluded() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-[800px] mx-auto">
        {/* Label */}
        <motion.span
          className="font-[family-name:var(--font-jetbrains-mono)] text-accent-primary text-[0.75rem] uppercase tracking-[0.2em] block mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          Everything You Need
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-syne)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1] text-text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What&apos;s Included
        </motion.h2>

        {/* Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[650px] mx-auto">
          {included.map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center gap-4 bg-bg-card rounded-[16px] px-6 py-5 border border-[var(--border-card)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-md)]"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            >
              <svg
                className="w-5 h-5 shrink-0 text-accent-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-[family-name:var(--font-outfit)] font-medium text-text-primary text-[0.95rem]">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
