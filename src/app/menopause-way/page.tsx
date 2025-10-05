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
    question: "What makes The Menopause Way different from other weight loss programs?",
    answer: "The Menopause Way is specifically designed for women over 40 experiencing hormonal changes. Unlike generic programs, we focus on sustainable fat loss without restrictive diets, addressing the unique challenges of menopause including metabolism changes, energy levels, and social eating."
  },
  {
    question: "Do I need to track calories or macros?",
    answer: "No! We use the Plate Method, which allows for effortless fat loss without the hassle of tracking. You'll learn simple portion guidelines that work with your lifestyle, not against it."
  },
  {
    question: "What if I can't stick to it 100%?",
    answer: "That's completely normal and expected! The programme is designed to work around your real life - holidays, dinners out, and social events are all part of the plan. You'll learn how to enjoy these moments without derailing your progress."
  },
  {
    question: "How much time will I need to commit each week?",
    answer: "The programme requires minimal time investment - just a few minutes for your weekly check-ins and implementing the simple strategies. There's no meal prep marathons or hours of exercise required."
  },
  {
    question: "What if I don't see results?",
    answer: "Your success is guaranteed! If you check in at least 80% of the time over the 8 weeks, follow the plan, and still don't see the progress you were hoping for, I will coach you for an additional 4 to 8 weeks completely free of charge."
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Absolutely! The Menopause Way is designed to be simple and accessible for everyone, regardless of your previous experience with nutrition or fitness programmes. Everything is explained clearly with step-by-step guidance."
  },
  {
    question: "When does the next cohort start?",
    answer: "Cohorts begin regularly throughout the year. Spots are limited to 12 women to ensure everyone receives personalized attention and support. Once you enrol, you'll receive immediate access to the materials and join the next starting group."
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
    <div className="bg-white min-h-screen">
      
      {/* ============================================
          SECTION 1: HERO (Above the Fold)
          ============================================ */}
      <section className="min-h-screen flex items-center justify-center bg-[#56b5bd] px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Finally, Fat Loss Results You Didn't Think Were Possible, Made Easier Than You Ever Imagined.
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl text-white/90 mt-6 leading-relaxed mb-10">
            The 8-Week Coaching Programme for Women 40+ to Lose Stubborn Menopausal Weight, Reclaim Your Energy, and Feel in Control—Without Restrictive Diets or Giving Up Your Social Life.
          </h2>
          
          <motion.button
            onClick={scrollToPricing}
            className="inline-block px-8 py-4 text-lg bg-white hover:bg-gray-50 text-[#56b5bd] font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#56b5bd] shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Yes, I'm Ready to Take Control
          </motion.button>
        </motion.div>
      </section>

      {/* ============================================
          VIDEO SECTION
          ============================================ */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div 
          className="max-w-5xl mx-auto"
          {...fadeInUp}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
            Watch: How The Menopause Way Works
          </h3>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Discover the simple approach that's helping women over 40 finally break free from the menopausal weight struggle.
          </p>
          
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {/* TODO: Replace with actual video URL (YouTube, Vimeo, or custom video) */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
              title="The Menopause Way Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Alternative: For custom video file, uncomment below and remove iframe above
            <video
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              controls
              poster="/path-to-thumbnail.jpg"
            >
              <source src="/path-to-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 2: GUARANTEE (Risk Reversal)
          ============================================ */}
      <section className="py-20 px-6 bg-[#56b5bd]">
        <motion.div 
          className="max-w-4xl mx-auto"
          {...scaleIn}
        >
          <div className="bg-white/10 border-2 border-white/50 rounded-xl p-8 md:p-12">
            <div className="text-white text-sm font-bold uppercase tracking-wide mb-4 text-center">
              100% GUARANTEE
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
              Your Success is Guaranteed. The Risk is All Mine.
            </h3>
            
            <p className="text-lg text-white/90 leading-relaxed text-center">
              I am 100% confident in this process. My commitment to you is this: if you check in at least 80% of the time over these 8 weeks, follow the plan, and still don't see the progress you were hoping for, I will coach you for an additional 4 to 8 weeks, completely free of charge. Your success is my success.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 3: THE PROBLEM ("She Gets Me")
          ============================================ */}
      <section className="py-20 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          {...fadeInUp}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Does this sound familiar?
          </h3>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              You feel like your body isn't playing by the rules anymore. You're stuck in a "vicious cycle" of eating well all week, only to see the scales refuse to budge, leaving you feeling frustrated and defeated.
            </p>
            
            <p>
              You're caught in the "pound on and a pound off" loop, and it's slowly chipping away at your motivation.
            </p>
            
            <p>
              A holiday or a simple dinner out with friends fills you with anxiety, because you're worried it will "undo all the work". You feel like you have to choose between having a social life and making progress.
            </p>
            
            <p>
              You've been told this is just part of menopause. It isn't.
            </p>
          </div>
          
          <p className="text-xl md:text-2xl font-semibold text-[#56b5bd] mt-10">
            It's not a lack of willpower. It's a lack of the right strategy.
          </p>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 4: BENEFITS (The Transformation)
          ============================================ */}
      <section className="py-20 px-6 bg-[#56b5bd]">
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
            {...fadeInUp}
          >
            A Different Kind of Result
          </motion.h3>
          
          <motion.p 
            className="text-lg text-white/90 mb-10 text-center max-w-3xl mx-auto"
            {...fadeInUp}
          >
            This isn't just about weight loss. This is about reclaiming your health, your confidence, and your quality of life. When you follow The Menopause Way, you will:
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              "Potentially Reduce or Eliminate Hormone-Related Migraines",
              "Finally Fit into the Clothes in Your Wardrobe",
              "Gain the Confidence to Feel Amazing in Swimwear",
              "Stabilise Your Energy and Crush Cravings",
              "Receive Compliments from Friends (and even your Chiropractor)"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-white/20 flex items-start gap-4 hover:border-white transition-colors duration-300"
                variants={fadeInUp}
              >
                <FaCheckCircle className="text-[#56b5bd] text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-900 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: CASE STUDY (Nic's Story)
          ============================================ */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div 
          className="max-w-5xl mx-auto"
          {...scaleIn}
        >
          <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-200">
            <div className="text-[#56b5bd] text-sm font-semibold uppercase tracking-wide mb-4">
              Success Story
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              "My chiropractor asked me if I was on Ozempic!"
            </h3>
            
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#56b5bd] overflow-hidden">
                <Image
                  src="/nic.webp"
                  alt="Nic's Transformation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                When Nic joined, she was a busy mum who felt stuck. She was weighing herself every day, frustrated by the lack of progress, and anxious about an upcoming holiday to Italy. She felt that every time she made progress, a social event would set her back.
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
            
            <blockquote className="border-l-4 border-[#56b5bd] pl-6 my-8">
              <p className="text-xl md:text-2xl font-semibold text-gray-900 italic">
                "It really has given me results I just didn't think could happen for me and in the easiest way I've ever found."
              </p>
            </blockquote>
            
            <p className="text-lg text-gray-700">
              Nic's story isn't an exception. It's what happens when you use the right system.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          NEW SECTION: 8-WEEK PROGRAM TIMELINE
          ============================================ */}
      <ProgramTimeline />

      {/* ============================================
          SECTION 6: PRICING TABLE
          ============================================ */}
      <section id="pricing" className="py-20 px-6 scroll-mt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
            {...fadeInUp}
          >
            Choose Your Path
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            
            {/* TIER 1: Self-Paced Course */}
            <motion.div
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Self-Paced Course</h4>
              <div className="text-5xl font-bold text-[#56b5bd] mb-6">£297</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "8 Comprehensive Modules"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER1_CHECKOUT_URL}
                className="block w-full py-4 bg-[#56b5bd] hover:bg-[#45a4ac] text-white text-center rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
              >
                Enrol Now
              </a>
            </motion.div>

            {/* TIER 2: Coaching Programme (MOST POPULAR) */}
            <motion.div
              className="bg-white p-8 rounded-xl border-2 border-[#56b5bd] relative md:scale-105 hover:border-[#56b5bd] transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#56b5bd] text-white px-4 py-2 rounded-full text-sm font-bold uppercase">
                Most Popular
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-2 mt-2">Coaching Programme</h4>
              <div className="text-5xl font-bold text-[#56b5bd] mb-6">£497</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Everything in Self-Paced",
                  "Weekly coaching check-ins with a PN L1 Nutritionist",
                  "Direct Coach Support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER2_CHECKOUT_URL}
                className="block w-full py-4 bg-[#56b5bd] hover:bg-[#56b5bd] text-gray-900 text-center rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
              >
                Enrol Now
              </a>
            </motion.div>

            {/* TIER 3: VIP Accelerator */}
            <motion.div
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-2">VIP Accelerator</h4>
              <div className="text-5xl font-bold text-[#56b5bd] mb-6">£1,497</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Everything in Coaching Programme",
                  "Weekly 1-on-1 Calls",
                  "Personalized Meal Planning",
                  "Priority Support",
                  "VIP Community Access"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <FaCheck className="text-[#56b5bd] flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER3_CHECKOUT_URL}
                className="block w-full py-4 bg-[#56b5bd] hover:bg-[#45a4ac] text-white text-center rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
              >
                Enrol Now
              </a>
            </motion.div>
          </motion.div>

          {/* Limited Spots Notice */}
          <motion.div 
            className="text-center mt-12"
            {...fadeInUp}
          >
            <p className="text-amber-400 font-semibold text-[38px]">
              Spots are strictly limited to {PLACEHOLDERS.CAPACITY} women to ensure everyone gets personal coaching.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: FAQ
          ============================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
            {...fadeInUp}
          >
            Frequently Asked Questions
          </motion.h3>
          
          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeInUp}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#56b5bd]/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <FaChevronDown 
                    className={`text-[#56b5bd] flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
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

