"use client";

import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import PitchMarkings from "../decorative/PitchMarkings";
import GradientMesh from "../decorative/GradientMesh";
import CursorGlow from "../decorative/CursorGlow";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background layers */}
      <GradientMesh variant="hero" />
      <PitchMarkings variant="hero" />
      <CursorGlow />

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 max-w-[1200px] mx-auto w-full">
        {/* Left — text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <Badge>Women&apos;s Football S&amp;C Platform</Badge>

          {/* Headline */}
          <h1 className="mt-8 mb-4">
            <span className="block font-[family-name:var(--font-instrument-serif)] font-normal text-[clamp(3.2rem,9vw,7rem)] leading-[0.9] tracking-[-0.02em]">
              <span className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  className="inline-block text-accent-primary"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.5, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                  Female
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block text-text-primary"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                  Footballers
                </motion.span>
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="font-[family-name:var(--font-outfit)] font-medium text-[clamp(1.2rem,2.5vw,1.6rem)] text-text-primary leading-[1.4] mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Empower your strength, fitness and ability
          </motion.p>

          {/* Supporting text */}
          <motion.p
            className="font-[family-name:var(--font-dm-sans)] text-[1.05rem] leading-[1.8] text-text-secondary max-w-[500px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            The strength, conditioning &amp; wellness platform built for female
            footballers at grassroots and semi-pro level. Expert-led.
            Science-backed. Designed around you.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2, type: "spring" as const, stiffness: 200, damping: 20 }}
          >
            <Button variant="primary" size="large" href="#pricing">
              Get Started
            </Button>
          </motion.div>

          {/* Small text */}
          <motion.p
            className="mt-6 font-[family-name:var(--font-jetbrains-mono)] text-[0.75rem] text-text-muted flex items-center gap-2 flex-wrap justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          >
            <span>Affordable</span>
            <span className="w-1 h-1 rounded-full bg-accent-primary" />
            <span>Flexible</span>
            <span className="w-1 h-1 rounded-full bg-accent-primary" />
            <span>Fits around work, school &amp; uni</span>
          </motion.p>
        </div>

        {/* Right — hero image placeholder */}
        <motion.div
          className="flex-1 w-full max-w-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div
            className="relative rounded-[24px] overflow-hidden border border-[var(--border-accent)]"
            style={{
              aspectRatio: "4/5",
              backgroundColor: "var(--bg-accent-section)",
              backgroundImage: "linear-gradient(135deg, rgba(86,181,189,0.06) 0%, var(--bg-accent-section) 40%, rgba(86,181,189,0.03) 100%)",
            }}
          >
            {/* TP initials */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-[family-name:var(--font-syne)] font-extrabold text-[10rem] text-accent-primary leading-none select-none"
                style={{ opacity: 0.06 }}
              >
                TP
              </span>
            </div>

            {/* Placeholder text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg className="w-12 h-12 text-accent-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[0.8rem] text-text-muted">
                Hero image coming soon
              </span>
            </div>

            {/* Decorative pitch marking */}
            <svg className="absolute -bottom-10 -right-10 w-40 h-40 opacity-[0.03]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="var(--accent-pitch)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Trust strip marquee */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6, duration: 0.4 }}
      >
        <div className="marquee-track whitespace-nowrap">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[0.65rem] text-text-muted tracking-[0.15em] uppercase">
            Built on Sports Science &nbsp;&bull;&nbsp; Designed for Female
            Physiology &nbsp;&bull;&nbsp; From Grassroots to Semi-Pro
            &nbsp;&bull;&nbsp; Built on Sports Science &nbsp;&bull;&nbsp;
            Designed for Female Physiology &nbsp;&bull;&nbsp; From Grassroots
            to Semi-Pro &nbsp;&bull;&nbsp; Built on Sports Science
            &nbsp;&bull;&nbsp; Designed for Female Physiology
            &nbsp;&bull;&nbsp; From Grassroots to Semi-Pro &nbsp;&bull;&nbsp;
          </span>
        </div>
      </motion.div>
    </section>
  );
}
