"use client";

import { motion } from "framer-motion";

interface GradientMeshProps {
  variant?: "hero" | "cta";
  className?: string;
}

export default function GradientMesh({ variant = "hero", className = "" }: GradientMeshProps) {
  if (variant === "cta") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div
          className="absolute inset-0 gradient-breathe"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 40%, rgba(86,181,189,0.05) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 70% 60%, rgba(34,197,94,0.03) 0%, transparent 60%),
              radial-gradient(ellipse 90% 70% at 50% 50%, rgba(86,181,189,0.04) 0%, transparent 70%)
            `,
          }}
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 45%, rgba(86,181,189,0.04) 0%, transparent 70%)
          `,
        }}
      />
    </div>
  );
}
