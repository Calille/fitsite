'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaChevronDown, FaUsers, FaCheck, FaBolt, FaChartLine, FaBook, FaEnvelope, FaStar } from 'react-icons/fa';
import Image from 'next/image';

// ============================================
// CONSTANTS
// ============================================
const CALENDLY_URL = 'https://calendly.com/tphealthandfitnesscoaching/tpintroductory-call';

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
};

// ============================================
// SMOOTH SCROLL HELPER
// ============================================
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: "Who is this programme for?",
    answer: "Women 35+ who want to lose weight, gain strength, boost confidence, and feel energised. Whether you're a complete beginner or have some fitness experience, our programme adapts to your level."
  },
  {
    question: "What if I've never strength trained before?",
    answer: "Perfect for beginners! We teach you fundamentals and you train at your own pace in a supportive environment. Our expert coaches guide you through every movement, ensuring proper form and technique from day one."
  },
  {
    question: "What is an InBody scan?",
    answer: "Advanced body composition analysis that tracks muscle mass, body fat percentage, and more throughout your journey. You'll receive four scans over the 8 weeks to see your transformation in detail—not just weight loss, but muscle gain and body composition improvements."
  },
  {
    question: "What happens after the 8 weeks?",
    answer: "You can continue training with us at £75/week (3 sessions) or £100/week (4 sessions), or take your newfound strength and habits with you. Many clients choose to continue because they love the community and results."
  },
  {
    question: "How many people are in each session?",
    answer: "Small, intimate groups to ensure personalised attention and support. We limit the programme to just 20 clients total, so you'll never feel lost in a crowd. Each session feels personal and tailored to your needs."
  },
  {
    question: "What if I need to miss a session?",
    answer: "We offer flexible rescheduling options. While we encourage consistency for best results, we work with you to make up sessions when possible. Our flexible approach ensures you stay on track even with occasional schedule conflicts."
  },
  {
    question: "Is the trial week really refundable?",
    answer: "Yes! If you decide the programme isn't for you, we'll refund your £25. If you continue, we'll deduct it from your first week. It's completely risk-free—we want you to feel confident in your decision."
  },
  {
    question: "What's included in the Fat Loss Programme?",
    answer: "Comprehensive online nutrition and fat loss guidance with guaranteed results when followed correctly. You'll receive meal plans, recipes, shopping lists, and ongoing support to help you lose weight while building strength. It's a complete system designed for women 35+."
  }
];

// ============================================
// FEATURE CARDS DATA
// ============================================
const featureCards = [
  {
    icon: FaUsers,
    title: "Small Group Training",
    description: "Forget crowded commercial gyms. Train in an intimate studio setting with like-minded women at your own pace."
  },
  {
    icon: FaCheck,
    title: "Guaranteed Results",
    description: "In 8 weeks you'll be stronger, fitter and faster. You'll feel more energised, sleep better, and feel more confident."
  },
  {
    icon: FaBolt,
    title: "Drop Pounds & Inches",
    description: "Look good and feel great. Lose stubborn weight and inches off your waist with our proven fat loss programme."
  },
  {
    icon: FaChartLine,
    title: "Track Your Progress",
    description: "Four InBody scans throughout the programme give you detailed insights into your body composition changes."
  },
  {
    icon: FaBook,
    title: "Expert Guidance",
    description: "Learn the fundamentals of training, progressive overload, and build habits that last beyond the 8 weeks."
  },
  {
    icon: FaEnvelope,
    title: "Weekly Motivation",
    description: "Receive weekly emails from Teighlor herself to keep you motivated, accountable and on track."
  }
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function ElevateProgrammePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#56b5bd] via-[#4a9ba8] to-[#3e8a93] relative overflow-hidden">
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold uppercase tracking-wide"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              LIMITED TO 20 CLIENTS
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Lose Stubborn Weight and Reclaim Your Strength in Just 8 Weeks
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto">
              The proven strength training system for women 35+ who want to drop pounds, boost energy, and feel confident again - without restrictive diets or spending hours in crowded gyms.
            </p>

            {/* VSL Video Player */}
            <div className="mb-10">
              <div className="relative w-full rounded-lg overflow-hidden shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#56b5bd] to-[#45a4ac]">
                  <div className="text-center text-white px-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-semibold mb-2">Video Coming Soon</p>
                    <p className="text-sm opacity-90">Check back soon for our introduction video</p>
                  </div>
                </div>
                {/* 
                  TODO: Replace with actual video embed when client provides VSL
                  Example YouTube embed:
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                */}
              </div>
            </div>

            {/* Primary CTA */}
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg min-h-[44px] flex items-center justify-center bg-white hover:bg-gray-50 text-[#56b5bd] font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#56b5bd] shadow-lg touch-manipulation mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Your Discovery Call
            </motion.a>

            {/* Supporting text */}
            <p className="text-white/80 text-sm md:text-base">
              Join the 25% of adults who consistently train and exercise
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: GUARANTEE (Risk Reversal)
          ============================================ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          {...scaleIn}
        >
          <div className="bg-[#56b5bd] border-2 border-[#56b5bd] rounded-xl p-6 md:p-8 lg:p-12 shadow-lg">
            <div className="text-white text-xs md:text-sm font-bold uppercase tracking-wide mb-3 md:mb-4 text-center">
              100% GUARANTEE
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white text-center px-2">
              The 7-Day Risk-Free Trial Promise
            </h3>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed text-center space-y-4">
              <span className="block">I want you to feel completely confident when you join. That's why I offer a straightforward 7-day, no-questions-asked refund guarantee.</span>
              <span className="block">Start with our trial week for just £25. Get up to 3 sessions, meet the team, and see results after just a few sessions.</span>
              <span className="block">If you don't feel this is the most practical and supportive programme you've ever tried — or it simply isn't the right fit — just email me within 7 days for a full refund.</span>
              <span className="block font-semibold">No hassle. No hard feelings. The risk is all mine.</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 3: TESTIMONIALS (Case Study)
          ============================================ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Real Women, Real Results
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients have to say
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0" style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}>
                  <Image
                    src="/elevate1.webp"
                    alt="Client testimonial"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Amazing transformation! The small group setting made all the difference. I've lost 12 pounds and feel stronger than ever."
                </p>
                <div className="font-semibold text-gray-900">Client</div>
                <div className="text-sm text-gray-500">Google Review</div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0" style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}>
                  <Image
                    src="/elevate2.webp"
                    alt="Kathryn Robbins testimonial"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "I've been training here for over a year now and it's been absolutely brilliant. I've joined regular sessions with Teighlor, Seb and Will; and occasionally with Ben and Sarah. They never fail to create challenging and varied exercises while making it fun and most importantly, keeping the focus on technique and safety. It's been just the best investment for my health and wellbeing."
                </p>
                <div className="font-semibold text-gray-900">Kathryn Robbins</div>
                <div className="text-sm text-gray-500">Google Review</div>
              </div>
            </motion.div>

            {/* Testimonial 3 - Teighlor with Client */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0" style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}>
                  <Image
                    src="/elevate3.webp"
                    alt="Teighlor with client"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The programme changed my life. I went from avoiding mirrors to feeling proud of my progress. The support from Teighlor and the team is incredible."
                </p>
                <div className="font-semibold text-gray-900">Client</div>
                <div className="text-sm text-gray-500">Google Review</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: 8-WEEK PROGRAM TIMELINE
          ============================================ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your 8-Week Transformation Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Here's exactly what to expect week by week
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {/* Week 1-2 */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              {...fadeInUp}
            >
              <div className="md:col-span-3">
                <div className="bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] rounded-xl p-6 text-center text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">1-2</div>
                  <div className="text-lg font-semibold">Weeks</div>
                </div>
              </div>
              <div className="md:col-span-9 bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Foundation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Trial week and comprehensive screening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>First InBody scan to establish baseline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Meet your coaches and fellow participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Introduction to strength training fundamentals</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Week 3-4 */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              {...fadeInUp}
            >
              <div className="md:col-span-3 md:order-2">
                <div className="bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] rounded-xl p-6 text-center text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">3-4</div>
                  <div className="text-lg font-semibold">Weeks</div>
                </div>
              </div>
              <div className="md:col-span-9 md:order-1 bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Building Momentum</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Establish your training routine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Learn progressive overload principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Second InBody scan to track early progress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Begin seeing and feeling initial results</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Week 5-6 */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              {...fadeInUp}
            >
              <div className="md:col-span-3">
                <div className="bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] rounded-xl p-6 text-center text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">5-6</div>
                  <div className="text-lg font-semibold">Weeks</div>
                </div>
              </div>
              <div className="md:col-span-9 bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Accelerating Results</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Increase training intensity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Master proper form and technique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Third InBody scan shows measurable changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Energy levels and confidence soaring</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Week 7-8 */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              {...fadeInUp}
            >
              <div className="md:col-span-3 md:order-2">
                <div className="bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] rounded-xl p-6 text-center text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">7-8</div>
                  <div className="text-lg font-semibold">Weeks</div>
                </div>
              </div>
              <div className="md:col-span-9 md:order-1 bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Transformation Complete</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Peak performance and strength gains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Final InBody scan reveals full transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Drop pounds and inches off your waist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>Ready to continue your fitness journey</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: LIMITED SPOTS NOTICE
          ============================================ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            {...fadeInUp}
          >
            <div className="relative inline-block max-w-4xl w-full">
              {/* Subtle professional glow */}
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] rounded-xl blur-sm opacity-50"></div>
              
              {/* Main content container */}
              <div className="relative bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] p-5 md:p-6 lg:p-8 xl:p-12 rounded-xl shadow-xl border border-white/20">
                {/* Professional inner border */}
                <div className="absolute inset-1 md:inset-2 border border-white/30 rounded-lg"></div>
                
                {/* Urgency indicator */}
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <div className="flex items-center space-x-2 bg-red-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    <motion.div
                      className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span>LIMITED AVAILABILITY</span>
                  </div>
                </div>
                
                {/* Main text content */}
                <div className="relative z-10">
                  <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight px-2">
                    Spots are strictly limited to{" "}
                    <span className="text-yellow-300 font-black">
                      20 clients
                    </span>{" "}
                    to keep the coaching standard as high as possible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: PRICING
          ============================================ */}
      <section id="pricing" className="py-12 md:py-20 px-4 sm:px-6 scroll-mt-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10 md:mb-12"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Choose Your Programme
            </h2>
            <p className="text-lg text-gray-600">
              Limited to 20 clients only
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Silver Package */}
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl border-2 border-gray-200 hover:border-[#56b5bd] hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              {...fadeInUp}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Silver Package</h3>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] bg-clip-text text-transparent mb-6">
                £630
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "3 training sessions per week",
                  "4 InBody scans (track your transformation)",
                  "Complete Fat Loss Programme Online (guaranteed results)",
                  "Strength, power & cardio sessions",
                  "Welcome gift",
                  "Weekly motivation emails from Teighlor"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 min-h-[44px] flex items-center justify-center bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] hover:from-[#4a9ba8] hover:to-[#3e8a93] text-white text-center rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd] shadow-md hover:shadow-lg touch-manipulation"
              >
                Get Started - Silver
              </a>
            </motion.div>

            {/* Gold Package - Most Popular */}
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl border-2 border-[#56b5bd] relative md:scale-105 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              {...fadeInUp}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] text-white px-4 py-2 rounded-full text-sm font-bold uppercase">
                Most Popular
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 mt-2">Gold Package</h3>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] bg-clip-text text-transparent mb-6">
                £805
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "4 training sessions per week (most effective)",
                  "4 InBody scans (track your transformation)",
                  "Complete Fat Loss Programme Online (guaranteed results)",
                  "Strength, power & cardio sessions",
                  "Welcome gift",
                  "Weekly motivation emails from Teighlor",
                  "Priority support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 min-h-[44px] flex items-center justify-center bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] hover:from-[#4a9ba8] hover:to-[#3e8a93] text-white text-center rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd] shadow-md hover:shadow-lg touch-manipulation"
              >
                Get Started - Gold
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: FAQ
          ============================================ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(102,126,234,0.05),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(118,75,162,0.05),transparent_50%)] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            className="text-center mb-8 md:mb-12 lg:mb-16"
            {...fadeInUp}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] rounded-full mb-4 md:mb-6 shadow-lg">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 px-2"
              {...fadeInUp}
            >
              Frequently Asked Questions
            </motion.h3>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2"
              {...fadeInUp}
            >
              Everything you need to know about The Elevate Programme
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid gap-4 md:gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between p-4 md:p-6 lg:p-8 text-left hover:bg-gradient-to-r hover:from-[#56b5bd]/5 hover:to-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd] focus:ring-opacity-50 rounded-t-xl md:rounded-t-2xl min-h-[44px] touch-manipulation"
                  >
                    <div className="flex items-start gap-3 md:gap-4 flex-1 pr-2">
                      <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 ${
                        openFaqIndex === index
                          ? 'bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] text-white shadow-lg'
                          : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 group-hover:from-[#56b5bd]/20 group-hover:to-[#45a4ac]/10'
                      }`}>
                        {index + 1}
                      </div>
                      <span className={`text-base md:text-lg lg:text-xl font-semibold text-gray-900 leading-tight transition-colors duration-300 ${
                        openFaqIndex === index ? 'text-[#56b5bd]' : 'group-hover:text-[#56b5bd]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <FaChevronDown 
                      className={`text-[#56b5bd] flex-shrink-0 transition-all duration-300 text-lg md:text-xl mt-1 ${
                        openFaqIndex === index ? 'rotate-180' : 'group-hover:translate-y-1'
                      }`}
                    />
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaqIndex === index ? 'auto' : 0,
                      opacity: openFaqIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 lg:p-8 pt-0 bg-gradient-to-r from-gray-50/50 to-white/50 border-t border-gray-100">
                      <div className="prose prose-sm md:prose-base lg:prose-lg prose-gray max-w-none">
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-0">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: FINAL CTA
          ============================================ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#56b5bd] via-[#4a9ba8] to-[#3e8a93] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#56b5bd] via-[#4a9ba8] to-[#3e8a93]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
              Ready to Transform Your Body and Life?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed">
              Join The Elevate Programme today. Limited to just 20 clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg md:text-xl min-h-[44px] flex items-center justify-center bg-white hover:bg-gray-50 text-[#56b5bd] font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#56b5bd] shadow-lg touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Discovery Call Now
              </motion.a>

              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg min-h-[44px] flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#56b5bd] touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Try For £25
              </motion.a>
            </div>

            <p className="text-white/80 text-sm md:text-base">
              Spots fill fast. Don't miss your chance to be part of this exclusive programme.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

