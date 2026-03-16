"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pageLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const connectLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tpperformance/" },
  { label: "Email", href: "mailto:hello@tpperformance.com" },
  { label: "TP Health & Fitness", href: "https://tphealthfitness.com/" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="py-16 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Back link */}
        <div className="mb-10">
          <a
            href="https://tphealthfitness.com"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-outfit)] text-text-secondary text-[0.9rem] hover:text-accent-primary transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to TP Health &amp; Fitness
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-1 mb-3">
              <span className="font-[family-name:var(--font-syne)] font-bold text-lg text-accent-primary">
                TP
              </span>
              <span className="font-[family-name:var(--font-syne)] font-bold text-lg text-text-primary">
                Performance
              </span>
            </a>
            <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem] leading-relaxed mb-2">
              Women&apos;s Football S&amp;C Platform
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-text-muted text-[0.8rem]">
              Part of the TP Health &amp; Fitness family.
            </p>
          </div>

          {/* Col 2 — Page links */}
          <div>
            <h4 className="font-[family-name:var(--font-outfit)] font-semibold text-text-primary text-[0.9rem] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-outfit)] text-text-secondary text-[0.9rem] hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div>
            <h4 className="font-[family-name:var(--font-outfit)] font-semibold text-text-primary text-[0.9rem] mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-outfit)] text-text-secondary text-[0.9rem] hover:text-text-primary transition-colors duration-200"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h4 className="font-[family-name:var(--font-outfit)] font-semibold text-text-primary text-[0.9rem] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-outfit)] text-text-secondary text-[0.9rem] hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent-primary/20 pt-8">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[0.7rem] text-text-muted text-center">
            &copy; 2026 TP Performance. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
