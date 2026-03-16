"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export default function TimelineStep({
  number,
  title,
  description,
  index,
  isLast = false,
}: TimelineStepProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr] md:gap-0 items-start">
        {/* Left content */}
        <div className={`${isLeft ? "pr-12" : ""}`}>
          {isLeft && (
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <span className="font-[family-name:var(--font-syne)] font-bold text-[3rem] leading-none text-accent-primary">
                {number}
              </span>
              <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-lg text-text-primary mt-2">
                {title}
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.95rem] leading-relaxed mt-2">
                {description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Centre line + node */}
        <div className="flex flex-col items-center relative">
          <motion.div
            className="w-3 h-3 rounded-full bg-accent-primary z-10 relative"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 400 }}
          />
          {!isLast && (
            <div
              className="w-[2px] h-full min-h-[120px] absolute top-3"
              style={{
                background: "linear-gradient(180deg, var(--accent-primary) 0%, rgba(86,181,189,0.2) 100%)",
              }}
            />
          )}
        </div>

        {/* Right content */}
        <div className={`${!isLeft ? "pl-12" : ""}`}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <span className="font-[family-name:var(--font-syne)] font-bold text-[3rem] leading-none text-accent-primary">
                {number}
              </span>
              <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-lg text-text-primary mt-2">
                {title}
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.95rem] leading-relaxed mt-2">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-5">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-3 h-3 rounded-full bg-accent-primary z-10 mt-1"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1, type: "spring", stiffness: 400 }}
          />
          {!isLast && (
            <div
              className="w-[2px] flex-1"
              style={{
                background: "linear-gradient(180deg, var(--accent-primary) 0%, rgba(86,181,189,0.2) 100%)",
              }}
            />
          )}
        </div>

        <motion.div
          className="pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <span className="font-[family-name:var(--font-syne)] font-bold text-[2.5rem] leading-none text-accent-primary">
            {number}
          </span>
          <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-lg text-text-primary mt-2">
            {title}
          </h3>
          <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.95rem] leading-relaxed mt-2 max-w-sm">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
