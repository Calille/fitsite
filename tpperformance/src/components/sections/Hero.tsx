"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
            <Button
              variant="primary"
              size="large"
              href="https://app.coachcatalyst.com/shared_stripe_product/organization/18632/products/8e5c7729-2f32-4d4d-8bd1-eb2607a3a8b4"
              external
            >
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
          <div className="relative rounded-[24px] overflow-hidden border border-[var(--border-accent)] aspect-[4/5]">
            <Image
              src="/teighlor.jpeg"
              alt="Teighlor — TP Performance Coach"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
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
