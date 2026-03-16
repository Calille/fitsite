"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TimelineStep from "../ui/TimelineStep";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Tell us your position, level, goals, and schedule. We build your experience around you.",
  },
  {
    number: "02",
    title: "Get Your Programme",
    description:
      "Receive a personalised training plan — periodised around your season, built for your body, and adapted to your goals.",
  },
  {
    number: "03",
    title: "Train Anywhere",
    description:
      "Access everything on your phone. Sessions are designed to fit around work, school, or uni — no gym required for most programmes.",
  },
  {
    number: "04",
    title: "Track & Adapt",
    description:
      "Monitor your progress, log sessions, and watch your plan adapt as you develop. Your programme evolves with you.",
  },
  {
    number: "05",
    title: "Level Up",
    description:
      "See the results on the pitch. Faster, stronger, fitter, more resilient. The player you always knew you could be.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Label */}
        <motion.span
          className="font-[family-name:var(--font-jetbrains-mono)] text-accent-primary text-[0.75rem] uppercase tracking-[0.2em] block mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          Your Journey
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-syne)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1] text-text-primary text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From sign-up to matchday. Here&apos;s how.
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {steps.map((step, i) => (
            <TimelineStep
              key={step.number}
              {...step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
