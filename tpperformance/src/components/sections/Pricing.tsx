"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../ui/Button";

const NEXT_STEPS_URL =
  "https://app.coachcatalyst.com/shared_stripe_product/organization/18632/products/8e5c7729-2f32-4d4d-8bd1-eb2607a3a8b4";

interface PlanCardProps {
  name: string;
  price: string;
  priceLabel: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  cta: string;
  featured?: boolean;
  premium?: boolean;
  index: number;
}

function PlanCard({
  name,
  price,
  priceLabel,
  subtitle,
  description,
  features,
  cta,
  featured = false,
  premium = false,
  index,
}: PlanCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-[20px] p-9 border transition-all duration-250 ${
        featured
          ? "animated-border bg-bg-card border-transparent glow-pulse shadow-[var(--shadow-lg)] md:-mt-4 md:mb-4"
          : premium
          ? "bg-bg-card border-accent-primary/20 shadow-[var(--shadow-md)]"
          : "bg-bg-card border-[var(--border-card)] shadow-[var(--shadow-md)] hover:border-[var(--border-accent)]"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent-secondary)] text-white text-[0.7rem] font-[family-name:var(--font-jetbrains-mono)] font-medium rounded-full uppercase tracking-wider z-10">
          Most Popular
        </span>
      )}

      {premium && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-primary text-white text-[0.7rem] font-[family-name:var(--font-jetbrains-mono)] font-medium rounded-full uppercase tracking-wider z-10">
          Premium
        </span>
      )}

      <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[1.2rem] text-text-primary mb-1">
        {name}
      </h3>

      {subtitle && (
        <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.85rem] mb-4">
          {subtitle}
        </p>
      )}

      <div className="mb-4">
        <span
          className={`font-[family-name:var(--font-syne)] font-bold leading-none ${
            featured ? "text-[3.5rem] text-accent-primary" : "text-[3rem] text-text-primary"
          }`}
        >
          {price}
        </span>
        <span className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem] ml-1">
          {priceLabel}
        </span>
      </div>

      {description && (
        <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem] leading-relaxed mb-6">
          {description}
        </p>
      )}

      {features && features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 mt-0.5 shrink-0 text-accent-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      <Button
        variant={featured ? "primary" : "outline"}
        className="w-full"
        href={NEXT_STEPS_URL}
        external
      >
        {cta}
      </Button>
    </motion.div>
  );
}

const mainPlans: PlanCardProps[] = [
  {
    name: "2 Week Trial",
    price: "Free",
    priceLabel: "",
    description: "Experience TP Performance for yourself before committing.",
    cta: "Start Your Trial",
    index: 0,
  },
  {
    name: "Monthly Subscription",
    price: "£45",
    priceLabel: "/month",
    description: "Minimum 3 months. Cancel anytime with 14 days\u2019 notice.",
    featured: true,
    cta: "Subscribe Now",
    index: 1,
  },
  {
    name: "8 Week Base Programme",
    price: "£80",
    priceLabel: "one-off",
    subtitle: "Performance Foundations",
    description: "A structured 8-week programme to build your base. Perfect for players ready to commit to a focused training block.",
    cta: "Get Started",
    index: 2,
  },
  {
    name: "Go PRO with Teighlor",
    price: "£50",
    priceLabel: "/week",
    premium: true,
    features: [
      "Weekly check-in call with Teighlor",
      "Direct access via private messenger",
      "Ongoing feedback and updates to your plan",
      "Elite level game-intelligence development",
      "Personalised video analysis of technique",
      "Priority access to in-person sessions with Jack",
    ],
    cta: "Go PRO",
    index: 3,
  },
];

function ProCard({ plan }: { plan: PlanCardProps }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-[20px] p-9 border border-accent-primary/20 shadow-[var(--shadow-md)] bg-bg-card max-w-[900px] mx-auto mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-primary text-white text-[0.7rem] font-[family-name:var(--font-jetbrains-mono)] font-medium rounded-full uppercase tracking-wider z-10">
        Premium
      </span>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Left — name & price */}
        <div className="md:w-[40%] shrink-0">
          <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[1.2rem] text-text-primary mb-1">
            {plan.name}
          </h3>
          <div className="mb-4">
            <span className="font-[family-name:var(--font-syne)] font-bold text-[3rem] leading-none text-accent-primary">
              {plan.price}
            </span>
            <span className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem] ml-1">
              {plan.priceLabel}
            </span>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem] leading-relaxed mb-6">
            1-to-1 elite coaching with Teighlor. The highest level of support and personalisation.
          </p>
          <Button
            variant="primary"
            className="w-full md:w-auto"
            href={NEXT_STEPS_URL}
            external
          >
            {plan.cta}
          </Button>
        </div>

        {/* Right — features */}
        <div className="flex-1">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {plan.features?.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0 text-accent-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const inPersonRef = useRef(null);
  const inPersonInView = useInView(inPersonRef, { once: true, margin: "-50px" });

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <motion.span
          className="font-[family-name:var(--font-jetbrains-mono)] text-accent-primary text-[0.75rem] uppercase tracking-[0.2em] block mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          Pricing
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-[family-name:var(--font-syne)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1] text-text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to start?
        </motion.h2>

        {/* Top 3 plans */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start max-w-[900px] mx-auto mb-8">
          {mainPlans.slice(0, 3).map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* PRO plan — full width horizontal layout */}
        <ProCard plan={mainPlans[3]} />

        {/* In-Person callout */}
        <motion.div
          ref={inPersonRef}
          className="max-w-[600px] mx-auto mt-8 bg-bg-card rounded-[20px] p-8 border border-[var(--border-card)] shadow-[var(--shadow-md)] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inPersonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[1.1rem] text-text-primary mb-2">
            In-Person Training at TP HQ
          </h3>
          <div className="mb-3">
            <span className="font-[family-name:var(--font-syne)] font-bold text-[2.5rem] leading-none text-text-primary">
              £65
            </span>
            <span className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem] ml-1">
              /session
            </span>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-text-secondary text-[0.9rem] leading-relaxed mb-6">
            1-to-1 sessions with Teighlor, once or twice a week at TP HQ.
          </p>
          <Button variant="outline" href={NEXT_STEPS_URL} external>
            Book a Session
          </Button>
        </motion.div>

        {/* Below cards */}
        <motion.p
          className="font-[family-name:var(--font-jetbrains-mono)] text-[0.8rem] text-text-muted text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          All plans designed to fit around work, school &amp; uni.
        </motion.p>

      </div>
    </section>
  );
}
