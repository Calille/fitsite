"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StatBlock from "../ui/StatBlock";

export default function Problem() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const bgTextRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bgTextRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-dark-section)" }}
    >
      {/* Background decorative text */}
      <motion.div
        ref={bgTextRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ y: bgY }}
      >
        <span className="font-[family-name:var(--font-syne)] font-extrabold text-[15vw] text-white whitespace-nowrap" style={{ opacity: 0.04 }}>
          THE GAP
        </span>
      </motion.div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Label */}
        <motion.span
          className="font-[family-name:var(--font-jetbrains-mono)] text-accent-primary text-[0.75rem] uppercase tracking-[0.2em] block mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          The Problem
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-text-on-dark max-w-[700px] mb-6"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Elite coaching stops where most women play.
        </motion.h2>

        {/* Body */}
        <motion.p
          className="font-[family-name:var(--font-dm-sans)] text-[1.1rem] leading-[1.8] text-gray-400 max-w-[700px] mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          At tier 3 and below, female footballers are left without the support
          that transforms performance. No structured S&amp;C. No nutrition
          guidance. No understanding of how the female body trains, recovers,
          and performs differently. The talent is there — the support isn&apos;t.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatBlock
            value="73%"
            label="of female footballers have no access to S&C coaching"
            source="[Placeholder — client to provide or remove]"
            color="hot"
            index={0}
            dark
          />
          <StatBlock
            value="Tier 3"
            label="is where quality coaching disappears for women's football"
            color="orange"
            index={1}
            dark
          />
          <StatBlock
            value="0"
            label="platforms built specifically for female football physiology"
            color="hot"
            index={2}
            dark
          />
        </div>

        {/* Bridge statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="font-[family-name:var(--font-outfit)] font-semibold text-[1.2rem] text-accent-glow mb-4">
            TP Performance was built to fix this.
          </p>
          <motion.div
            className="mx-auto h-[2px] bg-accent-primary"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 1.0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
