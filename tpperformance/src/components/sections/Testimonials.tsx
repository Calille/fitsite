"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Before TP Performance I was just running and hoping for the best. Now I actually understand why I\u2019m training the way I am \u2014 my sprint times are down, I\u2019m winning more tackles, and I haven\u2019t picked up an injury all season. It\u2019s the first time I\u2019ve felt properly supported.",
    name: "Charlotte M.",
    details: "Centre-mid \u2022 Tier 4 \u2022 Bedfordshire",
  },
  {
    quote:
      "I tore my ACL two seasons ago and was terrified of it happening again. The prehab and recovery work on here gave me so much confidence going back into contact. I genuinely feel stronger than I did before the injury.",
    name: "Priya K.",
    details: "Centre-back \u2022 Tier 3 \u2022 Hertfordshire",
  },
  {
    quote:
      "The cycle tracking changed everything for me. I used to feel awful in certain weeks and just push through. Now I train around it and I\u2019m actually performing better on match days because my body isn\u2019t fighting me.",
    name: "Ellie R.",
    details: "Winger \u2022 Tier 5 \u2022 South London",
  },
  {
    quote:
      "I work full-time and train twice a week with my club. I didn\u2019t think I\u2019d have time for anything else, but the sessions are short, I can do most of them at home, and I\u2019ve noticed a massive difference in my power and endurance since starting.",
    name: "Lauren T.",
    details: "Striker \u2022 Tier 4 \u2022 Essex",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <motion.span
          className="font-[family-name:var(--font-jetbrains-mono)] text-accent-primary text-[0.75rem] uppercase tracking-[0.2em] block mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          From the Players
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-syne)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1] text-text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Don&apos;t just take our word for it.
        </motion.h2>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className={`bg-bg-card rounded-[20px] p-8 border border-[var(--border-card)] border-l-[3px] border-l-accent-primary shadow-[var(--shadow-md)] relative ${
                i % 2 === 1 ? "md:-mt-4" : ""
              }`}
              initial={{ opacity: 0, y: 30, rotate: 1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Decorative quote mark */}
              <span className="absolute top-4 left-6 font-[family-name:var(--font-instrument-serif)] text-[4rem] text-accent-primary/10 leading-none select-none">
                &ldquo;
              </span>

              <p className="font-[family-name:var(--font-dm-sans)] text-text-primary text-[1.05rem] leading-[1.7] italic mb-6 mt-6 relative z-10">
                {testimonial.quote}
              </p>

              <div>
                <p className="font-[family-name:var(--font-outfit)] font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[0.75rem] text-text-secondary">
                  {testimonial.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust metrics */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {["Built for Grassroots & Semi-Pro", "Science-Backed Programming", "Designed for the Female Body"].map(
            (metric) => (
              <span
                key={metric}
                className="font-[family-name:var(--font-jetbrains-mono)] text-[0.8rem] text-text-muted"
              >
                {metric}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
