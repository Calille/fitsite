"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PillarProps {
  subheading: string;
  body: string;
  tags: string[];
  visual: React.ReactNode;
  reversed?: boolean;
  index: number;
}

function PillarBlock({ subheading, body, tags, visual, reversed = false, index }: PillarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="py-16 md:py-20">
      <div
        className={`flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } gap-12 md:gap-16 items-center`}
      >
        {/* Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[1.5rem] text-text-primary mb-4 leading-tight">
            {subheading}
          </h3>
          <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[1rem] leading-[1.8] mb-6">
            {body}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-[family-name:var(--font-jetbrains-mono)] text-[0.75rem] text-text-muted px-3 py-1.5 rounded-full border border-[var(--border)] bg-bg-card"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: reversed ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {visual}
        </motion.div>
      </div>
    </div>
  );
}

// Visual components
function StrengthVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      <motion.div
        className="absolute w-[70%] h-[50%] rounded-[16px] bg-bg-card border border-[var(--border)]"
        style={{ top: "10%", left: "5%" }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <motion.div
        className="absolute w-[65%] h-[45%] rounded-[16px] border border-accent-primary/20"
        style={{
          top: "25%",
          left: "15%",
          background: "linear-gradient(135deg, var(--bg-card) 0%, rgba(86,181,189,0.06) 100%)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.div
        className="absolute w-[55%] h-[35%] rounded-[16px] bg-bg-card-hover border border-accent-primary/10"
        style={{ top: "40%", left: "30%" }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="p-4 h-full flex flex-col justify-center">
          <div className="w-3/4 h-2 bg-accent-primary/20 rounded-full mb-2">
            <div className="w-2/3 h-full bg-accent-primary rounded-full" />
          </div>
          <div className="w-1/2 h-2 bg-accent-primary/10 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}

function SpeedVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] bg-accent-primary/30"
          style={{
            width: `${40 + i * 10}%`,
            top: `${20 + i * 15}%`,
            left: `${10 - i * 3}%`,
            transform: `rotate(${-5 + i * 2}deg)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" }}
        />
      ))}
      {/* Arrow head */}
      <motion.svg
        className="absolute"
        style={{ right: "15%", top: "45%" }}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <path d="M10 20L30 20M30 20L22 12M30 20L22 28" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </div>
  );
}

function NutritionVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-accent-pitch/15"
          style={{
            width: `${30 + i * 25}%`,
            height: `${30 + i * 25}%`,
            background: i === 0 ? "rgba(34,197,94,0.06)" : "transparent",
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }}
        />
      ))}
      {/* Arc */}
      <motion.svg
        className="absolute w-[60%] h-[60%]"
        viewBox="0 0 100 100"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.path
          d="M 20 80 Q 50 10 80 80"
          stroke="var(--accent-pitch)"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
      </motion.svg>
    </div>
  );
}

function InjuryPreventionVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* Shield shape */}
      <motion.svg
        className="w-[50%] h-[50%]"
        viewBox="0 0 100 120"
        fill="none"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <motion.path
          d="M50 5 L90 25 L90 65 Q90 95 50 115 Q10 95 10 65 L10 25 Z"
          stroke="var(--accent-pitch)"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="rgba(34,197,94,0.06)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.0 }}
        />
        {/* Inner check */}
        <motion.path
          d="M35 60 L45 72 L68 45"
          stroke="var(--accent-pitch)"
          strokeWidth="2"
          strokeOpacity="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.4 }}
        />
      </motion.svg>
      {/* Decorative circles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full border border-accent-pitch/20"
          style={{
            top: `${25 + i * 20}%`,
            left: `${15 + i * 25}%`,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.3, type: "spring" }}
        />
      ))}
    </div>
  );
}

const pillars = [
  {
    subheading: "Football-specific strength that translates to the pitch.",
    body: "Power through challenges, hold off opponents, and dominate in the air. Our S&C programmes are periodised around your season — pre-season, in-season, and recovery phases. Every session is designed for the physical demands of women's football.",
    tags: ["Periodised Programming", "Position-Specific", "Progressive Overload"],
    visual: <StrengthVisual />,
    reversed: false,
  },
  {
    subheading: "First to the ball. First past your player.",
    body: "Sprint mechanics, acceleration patterns, change of direction — all built around female biomechanics. Our speed programmes don't just make you faster, they make you faster in the movements that matter on match day.",
    tags: ["Sprint Mechanics", "COD Training", "Female Biomechanics"],
    visual: <SpeedVisual />,
    reversed: true,
  },
  {
    subheading: "Fuel the machine properly.",
    body: "What you eat directly impacts how you train, recover, and perform. Our nutrition guidance is tailored to female athletes — covering training days, match days, recovery, and the hormonal cycle. No fad diets, just science.",
    tags: ["Match Day Fuelling", "Recovery Nutrition", "Cycle-Aware Guidance"],
    visual: <NutritionVisual />,
    reversed: false,
  },
  {
    subheading: "Stay on the pitch. Stay in the game.",
    body: "ACL injuries in women's football are 3–6x more common than in men's. Our prehab, mobility, and recovery protocols are specifically designed to address the injury risks female footballers face — so you spend more time playing and less time on the sideline.",
    tags: ["ACL Prevention", "Prehab Protocols", "Menstrual Cycle Awareness"],
    visual: <InjuryPreventionVisual />,
    reversed: true,
  },
];

export default function Pillars() {
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
          What&apos;s Inside
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-syne)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1] text-text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built for every part of your game.
        </motion.h2>

        {/* Pillars */}
        <div className="divide-y divide-[var(--border)]">
          {pillars.map((pillar, i) => (
            <PillarBlock key={i} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
