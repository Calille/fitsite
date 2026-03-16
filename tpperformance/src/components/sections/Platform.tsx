"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "Strength & Conditioning",
  "Speed & Agility",
  "Nutrition Guidance",
  "Injury Prevention",
  "Match Preparation",
  "Recovery & Wellness",
];

export default function Platform() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const mockupRef = useRef(null);
  const mockupInView = useInView(mockupRef, { once: true, margin: "-50px" });

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-pitch)" }}
    >
      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Label */}
        <motion.span
          className="font-[family-name:var(--font-jetbrains-mono)] text-accent-pitch text-[0.75rem] uppercase tracking-[0.2em] block mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          The Platform
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-syne)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1] text-text-primary text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Everything you need. Nothing you don&apos;t.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="font-[family-name:var(--font-dm-sans)] text-[1.05rem] leading-[1.8] text-text-secondary text-center max-w-[600px] mx-auto mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A complete football performance system — strength, speed, nutrition,
          recovery — built around the female body and designed to fit your life.
        </motion.p>

        {/* Platform mockup */}
        <motion.div
          ref={mockupRef}
          className="max-w-[800px] mx-auto rounded-[20px] border border-accent-pitch/20 overflow-hidden mb-16"
          style={{
            backgroundColor: "var(--bg-card)",
            boxShadow: "var(--shadow-lg)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={mockupInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* App top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-syne)] font-bold text-sm text-accent-primary">
                TP
              </span>
              <span className="font-[family-name:var(--font-syne)] font-bold text-sm text-text-primary">
                Performance
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-bg-card-hover border border-[var(--border)] flex items-center justify-center">
              <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
              </svg>
            </div>
          </div>

          {/* Tabs */}
          <motion.div
            className="flex gap-1 px-6 pt-4"
            initial={{ opacity: 0 }}
            animate={mockupInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {["S&C", "Nutrition", "Recovery"].map((tab, i) => (
              <button
                key={tab}
                className={`px-5 py-2.5 font-[family-name:var(--font-outfit)] font-medium text-sm transition-colors relative ${
                  i === 0
                    ? "text-accent-pitch"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {tab}
                {i === 0 && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-pitch"
                    initial={{ scaleX: 0 }}
                    animate={mockupInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Session card */}
          <motion.div
            className="p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={mockupInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[0.7rem] text-text-muted uppercase tracking-wider mb-3">
              Today&apos;s Session
            </p>

            <div className="bg-bg-deep rounded-[16px] p-5 border border-[var(--border)]">
              <h4 className="font-[family-name:var(--font-outfit)] font-semibold text-text-primary text-lg mb-1">
                Lower Body Power
              </h4>
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-[0.75rem] text-text-muted mb-4">
                45 min &bull; Matchday -2 &bull; Intermediate
              </p>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-bg-card rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full rounded-full bg-accent-pitch"
                  initial={{ width: "0%" }}
                  animate={mockupInView ? { width: "60%" } : {}}
                  transition={{ delay: 0.7, duration: 1.0, ease: "easeOut" }}
                />
              </div>

              <button className="font-[family-name:var(--font-outfit)] font-semibold text-sm text-accent-pitch hover:text-accent-pitch-deep transition-colors flex items-center gap-1.5">
                Start Session
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-[700px] mx-auto">
          {features.map((feature, i) => (
            <motion.span
              key={feature}
              className="px-6 py-3 rounded-full font-[family-name:var(--font-outfit)] font-medium text-[0.9rem] text-text-secondary bg-bg-card border border-[var(--border-card)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:border-accent-pitch/40 hover:text-text-primary hover:shadow-[var(--shadow-glow-green)] cursor-default"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
