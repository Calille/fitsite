"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: "orange" | "green";
}

export default function Card({
  children,
  className = "",
  hover = true,
  glowColor = "orange",
}: CardProps) {
  const glowStyles = {
    orange: "hover:shadow-[var(--shadow-glow-teal)]",
    green: "hover:shadow-[var(--shadow-glow-green)]",
  };

  return (
    <motion.div
      className={`bg-bg-card rounded-[20px] p-8 border border-[var(--border-card)] shadow-[var(--shadow-md)] transition-all duration-250 ${
        hover ? `hover:bg-bg-card-hover hover:border-[var(--border-accent)] ${glowStyles[glowColor]} hover:-translate-y-1` : ""
      } ${className}`}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}
