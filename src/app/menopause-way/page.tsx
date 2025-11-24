'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCheck, FaChevronDown } from 'react-icons/fa';
import ProgramTimeline from '@/components/ProgramTimeline';
import Image from 'next/image';
import QuizPopup from '@/components/QuizPopup';

// ============================================
// PLACEHOLDER DATA
// ============================================
const PLACEHOLDERS = {
  CAPACITY: "12",
  TIER1_CHECKOUT_URL: "https://app.coachcatalyst.com/shared_stripe_product/organization/18632/products/prod_SwGJFotRPmSpgB", // £297 Self-Paced Course
  TIER2_CHECKOUT_URL: "https://app.coachcatalyst.com/shared_stripe_product/organization/18632/products/prod_SwGJeyZt3y1sL7", // £497 Coaching Programme
  TIER3_CHECKOUT_URL: "https://app.coachcatalyst.com/shared_stripe_product/organization/18632/products/prod_SwGE1fYYICI915" // £1,497 VIP Accelerator
};

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
const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({ 
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
    question: "I'm so busy with work and family. Will I have time for this?",
    answer: "This is the most common concern, which is why the programme is designed specifically for a busy life. We don't give you more tasks; we give you smarter strategies. You will learn skills like the \"15-Minute Emergency Meal\" and the \"Deconstructed Meal Strategy\" so you can feed yourself well without cooking separate meals from your family. Most clients find they save time and mental energy."
  },
  {
    question: "I feel like I've tried every diet. How is this different?",
    answer: "This is not a diet. Diets are temporary and restrictive. \"The Menopause Way\" is a coaching programme that gives you a new, sustainable set of skills. We don't give you a rigid meal plan; we teach you principles like the Plate Method that empower you to build a healthy plate in any situation. Our goal is to make your results last a lifetime, not just for 8 weeks."
  },
  {
    question: "Why is the programme specifically for menopausal women?",
    answer: "Because the rules have changed. The hormonal shifts during menopause affect your metabolism, hunger cues, sleep, and how your body stores fat. The generic \"eat less, move more\" advice often backfires, increasing stress and belly fat. This programme is built on a scientific foundation that works with your current physiology, not against it."
  },
  {
    question: "Do I have to track calories or weigh my food?",
    answer: "No. We teach a simple, visual approach to portion control using tools like the Plate Method (dividing your plate into sections) and the Palm-Size Protein guide. This gives you an effortless way to manage your energy intake without the stress and obsession of tracking."
  },
  {
    question: "Do I have to give up wine, chocolate, or my social life?",
    answer: "Absolutely not. The goal is to live your life, not put it on hold. We use a flexible 80/20 approach. 80% of the time, you focus on your core habits. The other 20% is for planned indulgences—the meal out, the glass of wine, the slice of cake—enjoyed completely guilt-free. Our client Nicola successfully navigated a holiday to Italy, a festival, and social events while getting incredible results."
  },
  {
    question: "What results can I realistically expect?",
    answer: "Progress is individual, but our clients see significant changes. Our case study client, Nicola, lost 10lbs and 9cm from her hips in the programme. Even more importantly, she experienced life-changing \"non-scale victories,\" such as eliminating the 2-3 migraines she used to get every month, feeling confident in swimwear for the first time in years, and receiving compliments from her friends and even her chiropractor."
  },
  {
    question: "What happens if my progress stalls? I always lose motivation then.",
    answer: "This is a critical part of the process, and we have a specific plan for it. A plateau is not a sign of failure; it's a sign of success that your body has adapted. In Week 7, we teach you the Plateau Protocol—a calm, step-by-step process to analyse what's happening and make one small, strategic adjustment to get things moving again."
  },
  {
    question: "What's the catch?",
    answer: "There is no catch. The guarantee is simple: if you want to cancel in the first two weeks, you can—no questions asked. We take on all the risk."
  },
  {
    question: "What happens after the 8 weeks are over?",
    answer: "Our goal is to make ourselves redundant by giving you all the skills you need for life. For those who enjoy the ongoing accountability, we offer a \"Maintenance Method\" programme to provide continued support."
  }
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function MenopauseWayPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Open quiz popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQuizOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* ============================================
          SECTION 1: HERO (Above the Fold)
          ============================================ */}
      <section className="min-h-screen bg-[#56b5bd] px-4 sm:px-6 relative overflow-hidden">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#56b5bd] via-[#4a9ba8] to-[#3e8a93]"></div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 0.9, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-8 px-4">
          {/* Main Content */}
        <motion.div 
            className="max-w-4xl mx-auto text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 px-2">
            Finally, Fat Loss Results You Didn't Think Were Possible, Made Easier Than You Ever Imagined.
          </h1>
          
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mt-4 md:mt-6 leading-relaxed mb-6 md:mb-8 px-2">
            The 8-Week Coaching Programme for Women 40+ to Lose Stubborn Menopausal Weight, Reclaim Your Energy, and Feel in Control—Without Restrictive Diets or Giving Up Your Social Life.
          </h2>
          
          <motion.button
            onClick={scrollToPricing}
            className="inline-block px-6 md:px-8 py-3 md:py-4 text-base md:text-lg min-h-[44px] bg-white hover:bg-gray-50 text-[#56b5bd] font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#56b5bd] shadow-lg touch-manipulation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Yes, I'm Ready to Take Control
          </motion.button>
        </motion.div>

          {/* Video Player */}
          <motion.div
            className="max-w-4xl mx-auto w-full px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full rounded-xl shadow-2xl overflow-hidden border border-white/20 bg-black">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                >
                  <source src="/1111.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
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
              The 14-Day 'Perfect Fit' Promise
            </h3>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed text-center space-y-4">
              <span className="block">I want you to feel completely confident when you join. That's why I offer a straightforward 14-day, no-questions-asked refund guarantee.</span>
              <span className="block">Join today and get instant access to your Welcome Pack and first module. Complete the lessons, try the Plate Method, and submit your first check-in.</span>
              <span className="block">If you don't feel this is the most practical and supportive programme you've ever tried — or it simply isn't the right fit — just email me within 14 days for a full refund.</span>
              <span className="block font-semibold">No hassle. No hard feelings. The risk is all mine.</span>
            </p>
          </div>
        </motion.div>
      </section>



      {/* ============================================
          SECTION 3: CASE STUDY (Nicola's Story)
          ============================================ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/nicimage.webp"
            alt="Nicola's Transformation Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <motion.div 
          className="max-w-6xl mx-auto relative"
          {...scaleIn}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-[4/5] relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/nicimage.webp"
                    alt="Nicola's Transformation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Decorative border */}
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] rounded-2xl md:rounded-3xl -z-10 opacity-20"></div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-xl md:rounded-2xl shadow-xl border border-white/20 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
            <div className="text-[#56b5bd] text-xs md:text-sm font-semibold uppercase tracking-wide mb-3 md:mb-4">
              Success Story
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              "My chiropractor asked me if I was on Ozempic!"
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                  When Nicola joined, she was a busy mum who felt stuck. She was weighing herself every day, frustrated by the lack of progress, and anxious about an upcoming holiday to Italy. She felt that every time she made progress, a social event would set her back.
              </p>
              
              <p>
                She decided to trust the process. She went on a camping trip, a festival, and that holiday to Italy.
              </p>
              
              <p>
                The result: She lost 10lbs (4.5kg) and 9cm from her hips, and her clothes became too loose.
              </p>
              
              <p className="font-semibold text-gray-900">
                Her biggest takeaway?
              </p>
            </div>
            
              <blockquote className="border-l-4 border-[#56b5bd] pl-4 md:pl-6 my-6 md:my-8 bg-gray-50/50 p-4 md:p-6 rounded-r-lg">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 italic leading-relaxed">
                "It really has given me results I just didn't think could happen for me and in the easiest way I've ever found."
              </p>
            </blockquote>
            
            <p className="text-base md:text-lg text-gray-700">
                Nicola's story isn't an exception. It's what happens when you use the right system.
            </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 4: 8-WEEK PROGRAM TIMELINE
          ============================================ */}
      <ProgramTimeline />

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
                      {PLACEHOLDERS.CAPACITY} clients
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
          SECTION 6: PRICING TABLE
          ============================================ */}
      <section id="pricing" className="py-12 md:py-20 px-4 sm:px-6 scroll-mt-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 lg:mb-16 text-center text-gray-900 px-4"
            {...fadeInUp}
          >
            Choose Your Path
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            
            {/* TIER 1: Self-Paced Course */}
            <motion.div
              className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 hover:border-[#56b5bd] hover:bg-gray-100 transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Self-Paced Course</h4>
              <div className="text-4xl md:text-5xl font-bold text-[#56b5bd] mb-4 md:mb-6">£297</div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {[
                  "8 Comprehensive Modules"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER1_CHECKOUT_URL}
                className="block w-full py-3 md:py-4 min-h-[44px] flex items-center justify-center bg-[#56b5bd] hover:bg-[#45a4ac] text-white text-center rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd] touch-manipulation"
              >
                Enrol Now
              </a>
            </motion.div>

            {/* TIER 2: Coaching Programme (MOST POPULAR) */}
            <motion.div
              className="bg-gray-50 p-6 md:p-8 rounded-xl border-2 border-[#56b5bd] relative md:scale-105 hover:border-[#45a4ac] hover:bg-gray-100 transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-[#56b5bd] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase">
                Most Popular
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 mt-2 md:mt-0">Coaching Programme (Most Popular)</h4>
              <div className="text-4xl md:text-5xl font-bold text-[#56b5bd] mb-4 md:mb-6">£497</div>

              <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">
                The structured, science-based coaching system designed for real results.
              </p>
              
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {[
                  "Everything in Self-Paced",
                  "Weekly Coaching Check-ins with your Nutrition Coach",
                  "Personalised Feedback & Plan Adjustments",
                  "Access to the Coaching Community for Accountability & Support",
                  "FREE Personalised Hand-Portion Calculator (PN-based)",
                  "FREE PN Educational Resource Bank — science-backed infographics, guides, and cheat sheets"
                ].map((feature, index) => {
                  const isBottomTwo = index >= 4; // Last two items (FREE bonuses)

                  return (
                    <motion.li
                      key={index}
                      className={`flex items-start gap-2 md:gap-3 text-gray-700 text-sm md:text-base ${
                        isBottomTwo
                          ? 'relative bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-lg p-2 md:p-3 -mx-2 md:-mx-3'
                          : ''
                      }`}
                      whileHover={{
                        scale: isBottomTwo ? 1.02 : 1,
                        transition: { duration: 0.2 }
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {isBottomTwo && (
                        <div className="absolute -top-1.5 md:-top-2 -left-1.5 md:-left-2 bg-amber-400 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full uppercase tracking-wide">
                          FREE BONUS
                        </div>
                      )}
                      <FaCheck className={`flex-shrink-0 mt-1 ${isBottomTwo ? 'text-amber-500' : 'text-[#56b5bd]'}`} />
                      <span className={isBottomTwo ? 'font-semibold text-gray-800' : ''}>{feature}</span>
                    </motion.li>
                  );
                })}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER2_CHECKOUT_URL}
                className="block w-full py-3 md:py-4 min-h-[44px] flex items-center justify-center bg-[#56b5bd] hover:bg-[#56b5bd] text-gray-900 text-center rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd] touch-manipulation"
              >
                Enrol Now
              </a>
            </motion.div>

            {/* TIER 3: VIP Accelerator */}
            <motion.div
              className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 hover:border-[#56b5bd] hover:bg-gray-100 transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">VIP Accelerator</h4>
              <div className="text-4xl md:text-5xl font-bold text-[#56b5bd] mb-4 md:mb-6">£1,497</div>

              <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">
                A private, high-touch coaching experience for women who want every detail managed.
              </p>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                {[
                  "Everything in the Coaching Programme",
                  "Comprehensive Lifestyle Assessment (Onboarding Call)",
                  "Weekly 1-to-1 Strategy Calls (or Video Feedback)",
                  "Menu & Holiday Reviews",
                  "Priority Messaging Access",
                  "Exclusive VIP Community with Direct Access"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER3_CHECKOUT_URL}
                className="block w-full py-3 md:py-4 min-h-[44px] flex items-center justify-center bg-[#56b5bd] hover:bg-[#45a4ac] text-white text-center rounded-lg font-semibold text-base md:text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd] touch-manipulation"
              >
                Enrol Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: FAQ
          ============================================ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(86,181,189,0.05),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(86,181,189,0.05),transparent_50%)] pointer-events-none"></div>

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
              Your Questions,{' '}
              <span className="bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] bg-clip-text text-transparent">
                Answered
              </span>
          </motion.h3>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2"
              {...fadeInUp}
            >
              It's completely normal to have questions. In fact, it's a good sign—it shows you're serious about making a change. Below, I've answered the most common questions I receive from women just like you.
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
                          : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 group-hover:from-[#56b5bd]/20 group-hover:to-[#56b5bd]/10'
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

      {/* Footer Spacing */}
      <div className="h-20"></div>

      {/* Quiz Popup - Opens after 5 seconds */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}

