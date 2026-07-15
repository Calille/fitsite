'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaPhone, FaClipboardCheck, FaDumbbell, FaArrowRight, FaCheck, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FadeInWrapper from '@/components/FadeInWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import HeroSlider from '@/components/HeroSlider';

// One-time prompts are client-only and below-the-fold; load them lazily so
// they never block the initial paint of the page.
const ConsultationPopup = dynamic(() => import('@/components/ConsultationPopup'), { ssr: false });
const CoachOfferBanner = dynamic(() => import('@/components/CoachOfferBanner'), { ssr: false });

const journeySteps = [
  {
    step: 1,
    icon: <FaPhone className="text-2xl" />,
    title: 'Book Your Discovery Call',
    description: 'Start with a free introductory call with Teighlor to discuss your goals.',
    cta: {
      label: 'Book Free Call',
      href: 'https://calendly.com/tphealthandfitnesscoaching/tpintroductory-call',
      external: true,
    },
  },
  {
    step: 2,
    icon: <FaClipboardCheck className="text-2xl" />,
    title: 'Consultation, InBody Scan & Screening',
    description: 'A comprehensive assessment to understand your starting point.',
    price: '£50',
  },
  {
    step: 3,
    icon: <FaDumbbell className="text-2xl" />,
    title: 'Book Your Trial',
    description: 'Experience our training with a Kickstart Package trial.',
  },
  {
    step: 4,
    icon: <FaArrowRight className="text-2xl" />,
    title: 'Find Your Fit',
    description: 'Transition into Small Group PT or continue with private 1-1 training.',
  },
];

const kickstartPackages = [
  {
    title: '1-1',
    sessions: '16 Sessions',
    price: '£960',
    features: ['16 x 45 min private sessions', 'Personalised programming', 'Progress tracking'],
  },
  {
    title: 'Small Group',
    sessions: '16 Group Sessions',
    price: '£575',
    features: ['16 x 45 min group sessions', 'Small group environment', 'Expert coaching'],
    popular: true,
  },
  {
    title: 'Dual Fit',
    sessions: '16 Paired Sessions',
    price: '£1,280',
    features: ['16 x 45 min paired sessions', '2 clients to 1 trainer', 'Personalised programming'],
  },
];

const fatLossPoints = [
  '8 Week Nutrition & Lifestyle Online Programme with our in-house coach Will',
  'Understand the key principles of habit stacking, know what to eat and when, and see real results',
  'If you are struggling with your weight, how you feel, your confidence, and want to have more energy and feel better within yourself, this programme is for you',
  'Sustainable weight loss goals',
];

export default function ServicesClient() {
  return (
    <FadeInWrapper>
      <Header />
      <main>
        <HeroSlider
          title="Personal Training"
          subtitle="Your journey to a stronger, healthier you starts here."
        />

        {/* Client Journey */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container-custom mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Journey</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-lg">
                From first call to finding your perfect training fit — here&apos;s how it works.
              </p>
            </div>

            {/* Desktop: horizontal, Mobile: vertical */}
            <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
              {/* Connecting line */}
              <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#56b5bd]/30 via-[#56b5bd] to-[#56b5bd]/30 z-0" />

              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex flex-col items-center text-center px-4"
                >
                  {/* Step circle */}
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-[#56b5bd] flex items-center justify-center text-[#56b5bd] relative z-10 shadow-md mb-6">
                    <div className="flex flex-col items-center">
                      {step.icon}
                      <span className="text-[10px] font-bold mt-1 text-[#56b5bd]/70 uppercase tracking-wider">Step {step.step}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{step.description}</p>

                  {step.price && (
                    <span className="inline-block bg-[#56b5bd]/10 text-[#56b5bd] font-bold text-sm px-3 py-1 rounded-full mb-3">
                      {step.price}
                    </span>
                  )}

                  {step.cta && (
                    <a
                      href={step.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#56b5bd] hover:text-[#45a4ac] transition-colors"
                    >
                      {step.cta.label}
                      <FaArrowRight className="text-xs" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden space-y-0 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-12 bottom-12 w-[2px] bg-gradient-to-b from-[#56b5bd] to-[#56b5bd]/30 z-0" />

              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex items-start gap-5 py-6"
                >
                  {/* Step circle */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#56b5bd] flex-shrink-0 flex items-center justify-center text-[#56b5bd] relative z-10 shadow-md">
                    <span className="text-sm font-bold">{step.step}</span>
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-2">{step.description}</p>

                    {step.price && (
                      <span className="inline-block bg-[#56b5bd]/10 text-[#56b5bd] font-bold text-sm px-3 py-1 rounded-full mb-2">
                        {step.price}
                      </span>
                    )}

                    {step.cta && (
                      <a
                        href={step.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#56b5bd] hover:text-[#45a4ac] transition-colors"
                      >
                        {step.cta.label}
                        <FaArrowRight className="text-xs" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Divider accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#56b5bd]/40 to-transparent" />

        {/* Pricing & Packages */}
        <AnimatedSection className="py-20 md:py-28 bg-gray-50">
          <div className="container-custom mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing & Packages</h2>
              <p className="text-gray-500 max-w-xl mx-auto text-lg">
                Transparent pricing with no hidden fees. Find the package that fits your goals.
              </p>
            </div>

            {/* Getting Started */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Getting Started</h3>
                <p className="text-gray-500">Your first steps into TP training.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Consultation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#56b5bd]/10 flex items-center justify-center">
                      <FaClipboardCheck className="text-[#56b5bd]" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">One to One Consultation</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">£50</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#56b5bd] flex-shrink-0 text-xs" />
                      InBody composition scan
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#56b5bd] flex-shrink-0 text-xs" />
                      Health screening
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#56b5bd] flex-shrink-0 text-xs" />
                      1 hour session
                    </li>
                  </ul>
                </motion.div>

                {/* 2 Week Trial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#56b5bd]/10 flex items-center justify-center">
                      <FaDumbbell className="text-[#56b5bd]" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">One to One 2 Week Trial</h4>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">£220</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#56b5bd] flex-shrink-0 text-xs" />
                      Kickstart Pack included
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#56b5bd] flex-shrink-0 text-xs" />
                      45 min sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-[#56b5bd] flex-shrink-0 text-xs" />
                      Personalised programming
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* 8 Week Kickstart Programmes */}
            <div className="mb-8">
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  8 Week Kickstart Programmes — 1-1 or Small Group
                </h3>
                <p className="text-gray-500">
                  Your 8 week kickstart to build momentum and lasting results. Choose the training style that suits you best.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {kickstartPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                      pkg.popular
                        ? 'border-2 border-[#56b5bd] ring-1 ring-[#56b5bd]/20'
                        : 'border border-gray-200'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-[#56b5bd] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                          Popular
                        </span>
                      </div>
                    )}

                    <h4 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h4>
                    <p className="text-[#56b5bd] text-sm font-semibold mb-4">{pkg.sessions}</p>

                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-0.5 text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/book"
                      className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-[#56b5bd] text-white hover:bg-[#45a4ac] shadow-md hover:shadow-lg'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* VAT Note */}
            <p className="text-center text-gray-400 text-sm mt-12">
              All prices include VAT
            </p>
          </div>
        </AnimatedSection>

        {/* Divider accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#56b5bd]/40 to-transparent" />

        {/* 8 Week Fat Loss Course — Standout Feature Section */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container-custom mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-[#56b5bd] to-[#3e8a93] p-1.5 shadow-2xl">
                <div className="rounded-[1.35rem] bg-white overflow-hidden">
                  <div className="grid md:grid-cols-5">
                    {/* Left: Price / hero */}
                    <div className="md:col-span-2 bg-gradient-to-br from-[#56b5bd] to-[#3e8a93] text-white p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
                      <span className="inline-block self-center md:self-start bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                        Hero Offer
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                        8 Week Fat Loss Course
                      </h3>
                      <p className="text-white/90 font-medium mb-6">
                        Get guaranteed weight loss results
                      </p>
                      <div className="flex items-baseline justify-center md:justify-start gap-2">
                        <span className="text-5xl md:text-6xl font-black leading-none">£399</span>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="md:col-span-3 p-8 md:p-10">
                      <ul className="space-y-4 mb-8">
                        {fatLossPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="https://calendly.com/tphealthandfitnesscoaching/tpintroductory-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#56b5bd] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#45a4ac] transition-all duration-300 shadow-md hover:shadow-xl text-lg"
                      >
                        <FaPhone />
                        Book Your Discovery Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Divider accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#56b5bd]/40 to-transparent" />

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-custom mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-[#56b5bd]/10 flex items-center justify-center mx-auto mb-6">
                <FaCalendarAlt className="text-[#56b5bd] text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Book a free discovery call with Teighlor to chat about your goals and find the right package for you. No pressure, no commitment.
              </p>
              <a
                href="https://calendly.com/tphealthandfitnesscoaching/tpintroductory-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#56b5bd] text-white font-bold py-4 px-10 rounded-xl hover:bg-[#45a4ac] transition-all duration-300 shadow-md hover:shadow-xl text-lg"
              >
                <FaPhone />
                Book Your Free Discovery Call
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* One-time visitor prompts (coordinated so they don't stack) */}
      <ConsultationPopup />
      <CoachOfferBanner />
    </FadeInWrapper>
  );
}
