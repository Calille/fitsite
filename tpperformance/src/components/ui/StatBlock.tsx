"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatBlockProps {
  value: string;
  label: string;
  source?: string;
  color?: "orange" | "hot";
  index?: number;
  dark?: boolean;
}

function CountUpNumber({ target, color }: { target: number; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref} className={color}>
      {count}
    </span>
  );
}

export default function StatBlock({
  value,
  label,
  source,
  color = "orange",
  index = 0,
  dark = false,
}: StatBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorStyles = {
    orange: "text-accent-primary",
    hot: "text-accent-hot",
  };

  const isNumeric = /^\d+$/.test(value.replace("%", ""));
  const numericValue = parseInt(value.replace("%", ""));
  const suffix = value.includes("%") ? "%" : "";

  return (
    <motion.div
      ref={ref}
      className={`rounded-[20px] p-8 border text-center relative overflow-hidden ${
        dark
          ? "bg-white/5 border-white/10"
          : "bg-bg-card border-[var(--border-card)] shadow-[var(--shadow-md)]"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color === "hot" ? "var(--accent-hot)" : "var(--accent-primary)"}, transparent)`,
          opacity: 0.4,
        }}
      />

      <div
        className={`font-[family-name:var(--font-syne)] font-extrabold text-[4rem] leading-none mb-3 ${colorStyles[color]}`}
      >
        {isNumeric ? (
          <>
            <CountUpNumber target={numericValue} color={colorStyles[color]} />
            {suffix}
          </>
        ) : (
          <span className={colorStyles[color]}>{value}</span>
        )}
      </div>

      <p className={`font-[family-name:var(--font-dm-sans)] text-[0.95rem] leading-relaxed ${dark ? "text-gray-400" : "text-text-secondary"}`}>
        {label}
      </p>

      {source && (
        <p className={`font-[family-name:var(--font-jetbrains-mono)] text-[0.7rem] mt-3 ${dark ? "text-gray-500" : "text-text-muted"}`}>
          {source}
        </p>
      )}
    </motion.div>
  );
}
