"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../ui/Button";
import PitchMarkings from "../decorative/PitchMarkings";

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--accent-primary)" }}
    >
      <PitchMarkings variant="cta" />

      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-white mb-6"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to start?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="font-[family-name:var(--font-dm-sans)] text-[1.1rem] leading-[1.8] text-white/80 max-w-[550px] mx-auto mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join TP Performance and get the coaching support you deserve.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.6, type: "spring" as const, stiffness: 200, damping: 20 }}
        >
          <Button variant="inverted" size="large" href="#pricing">
            Get Started
          </Button>
          <Button
            variant="secondary"
            size="large"
            href="https://www.instagram.com/tpperformance/"
            className="!text-white !border-white/40 hover:!bg-white/10 hover:!border-white/60"
          >
            Follow @tpperformance
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
