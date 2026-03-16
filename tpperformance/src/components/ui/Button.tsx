"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "inverted";
  size?: "default" | "large";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-[family-name:var(--font-outfit)] font-semibold transition-all duration-250 cursor-pointer rounded-[10px]";

  const sizeStyles = {
    default: "px-8 py-3.5 text-[0.95rem]",
    large: "px-10 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-accent-primary text-white shadow-[var(--shadow-glow-teal)] hover:bg-accent-dark hover:shadow-[var(--shadow-glow-teal-intense)]",
    secondary:
      "bg-transparent text-accent-primary border border-accent-primary/30 backdrop-blur-sm hover:bg-accent-primary hover:text-white",
    outline:
      "bg-transparent text-text-primary border border-[var(--border)] hover:border-accent-primary hover:text-accent-primary",
    inverted:
      "bg-white text-accent-primary border border-[var(--border-card)] hover:bg-accent-primary hover:text-white shadow-[var(--shadow-md)]",
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
