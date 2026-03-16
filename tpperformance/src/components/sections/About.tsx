"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  "Loughborough University — Sports Science",
  "Level 3 Personal Trainer",
  "15 Years Competitive Women's Football",
  "Founder, TP Health & Fitness",
  "Performance Coach",
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6"
      style={{ backgroundColor: "var(--bg-accent-section)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <motion.span
          className="font-[family-name:var(--font-jetbrains-mono)] text-accent-primary text-[0.75rem] uppercase tracking-[0.2em] block mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          Meet Your Coach
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,4vw,2.5rem)] leading-[1.2] text-text-primary mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built by a player who&apos;s been where you are.
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left — Story (60%) */}
          <div className="md:w-[60%]">
            {/* Pull quote */}
            <motion.blockquote
              className="font-[family-name:var(--font-instrument-serif)] text-[1.5rem] text-text-primary leading-[1.6] mb-8 relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="absolute -left-4 -top-4 font-[family-name:var(--font-instrument-serif)] text-[4rem] text-accent-primary/20 leading-none select-none">&ldquo;</span>
              I&apos;m Teighlor, and football has been my passion for as long
              as I can remember. Having experienced firsthand the lack of
              access to quality strength and conditioning coaching at tier 3
              and below, I created TP Performance to bridge this gap.
            </motion.blockquote>

            {/* Body text */}
            <motion.div
              className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[1rem] leading-[1.8] space-y-4"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p>
                Too many talented female footballers are training without
                proper guidance on nutrition, injury prevention, and strength
                development — all critical elements that can transform
                performance on the pitch. My mission is simple: to help
                female footballers at grassroots and semi-professional levels
                become the best athletes they can be, with the same quality
                of support that elite players receive.
              </p>
              <p>
                So I started developing a platform that would change the game
                at local level for players wanting to reach their full
                potential. One that would be affordable, easy to use, and
                allow them to fit it around work, school or uni.
              </p>
            </motion.div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mt-8">
              {credentials.map((cred, i) => (
                <motion.span
                  key={cred}
                  className="font-[family-name:var(--font-jetbrains-mono)] text-[0.75rem] text-text-secondary bg-white rounded-full px-4 py-2 border border-[var(--border-card)] shadow-[var(--shadow-sm)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.3 }}
                >
                  {cred}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right — Photo placeholder (40%) */}
          <motion.div
            className="md:w-[40%]"
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="relative rounded-[20px] overflow-hidden border border-[var(--border)]"
              style={{
                aspectRatio: "3/4",
                backgroundColor: "var(--bg-accent-section)",
                backgroundImage: "linear-gradient(180deg, transparent 60%, rgba(86,181,189,0.06) 100%)",
              }}
            >
              {/* TP initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[family-name:var(--font-syne)] font-extrabold text-[8rem] text-accent-primary leading-none select-none" style={{ opacity: 0.08 }}>
                  TP
                </span>
              </div>

              {/* Photo coming soon text */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[0.75rem] text-text-muted">
                  Photo coming soon
                </span>
              </div>

              {/* Decorative pitch marking */}
              <svg
                className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.03]"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="var(--accent-pitch)"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
