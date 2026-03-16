"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <motion.span
      className={`inline-flex items-center px-5 py-2 rounded-full text-[0.7rem] font-[family-name:var(--font-jetbrains-mono)] font-medium tracking-wider uppercase text-accent-primary border border-[var(--border-accent)] bg-[rgba(86,181,189,0.08)] ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      {children}
    </motion.span>
  );
}
