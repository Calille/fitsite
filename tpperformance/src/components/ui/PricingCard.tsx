"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
  index?: number;
}

export default function PricingCard({
  name,
  price,
  features,
  featured = false,
  index = 0,
}: PricingCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-[20px] p-9 border transition-all duration-250 ${
        featured
          ? "animated-border bg-bg-card border-transparent glow-pulse shadow-[var(--shadow-lg)]"
          : "bg-bg-card border-[var(--border-card)] shadow-[var(--shadow-md)] hover:border-[var(--border-accent)]"
      } ${featured ? "md:-mt-4 md:mb-4" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-primary text-white text-[0.7rem] font-[family-name:var(--font-jetbrains-mono)] font-medium rounded-full uppercase tracking-wider z-10">
          Most Popular
        </span>
      )}

      <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[1.2rem] text-text-primary mb-4">
        {name}
      </h3>

      <div className="mb-6">
        <span
          className={`font-[family-name:var(--font-syne)] font-bold leading-none ${
            featured ? "text-[3.5rem] text-accent-primary" : "text-[3rem] text-text-primary"
          }`}
        >
          {price}
        </span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 mt-0.5 shrink-0 text-accent-pitch"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.95rem]">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? "primary" : "outline"}
        className="w-full"
      >
        Coming Soon
      </Button>
    </motion.div>
  );
}
