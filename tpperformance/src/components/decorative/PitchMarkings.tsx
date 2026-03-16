"use client";

import { motion } from "framer-motion";

interface PitchMarkingsProps {
  variant?: "hero" | "cta";
  className?: string;
}

export default function PitchMarkings({ variant = "hero", className = "" }: PitchMarkingsProps) {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
        {/* Centre circle */}
        <motion.svg
          width="60vw"
          height="60vw"
          viewBox="0 0 600 600"
          fill="none"
          className="absolute max-w-[800px] max-h-[800px]"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <motion.circle
            cx="300"
            cy="300"
            r="250"
            stroke="var(--accent-primary)"
            strokeWidth="1"
            strokeOpacity="0.08"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />
          {/* Centre spot */}
          <circle
            cx="300"
            cy="300"
            r="3"
            fill="var(--accent-primary)"
            fillOpacity="0.08"
          />
        </motion.svg>

        {/* Halfway line */}
        <motion.div
          className="absolute w-full h-[1px]"
          style={{ background: "var(--accent-primary)", opacity: 0.08 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />
      </div>
    );
  }

  // CTA variant — penalty arc & centre spot
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        fill="none"
        className="absolute"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Penalty arc */}
        <motion.path
          d="M 250 400 Q 400 200 550 400"
          stroke="var(--accent-primary)"
          strokeWidth="1"
          strokeOpacity="0.08"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Centre spot */}
        <circle
          cx="400"
          cy="350"
          r="3"
          fill="var(--accent-primary)"
          fillOpacity="0.08"
        />
      </motion.svg>
    </div>
  );
}
