'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaCheck, FaUtensils, FaDumbbell, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// ============================================
// PLACEHOLDER DATA - REPLACE WITH ACTUAL VALUES
// ============================================
const PLACEHOLDERS = {
  SIGNUP_DEADLINE: "Friday, 15th November 2024",
  CAPACITY: "12",
  TIER1_CHECKOUT_URL: "https://checkout.stripe.com/tier1-placeholder", // TODO: Replace with actual Stripe checkout URL
  TIER2_CHECKOUT_URL: "https://checkout.stripe.com/tier2-placeholder", // TODO: Replace with actual Stripe checkout URL
  TIER3_CHECKOUT_URL: "https://checkout.stripe.com/tier3-placeholder", // TODO: Replace with actual Stripe checkout URL
  CALENDLY_URL: "https://calendly.com/placeholder", // TODO: Replace with actual Calendly URL
  NIC_PHOTO_PATH: "/images/nic-testimonial-placeholder.jpg" // TODO: Add actual testimonial photo
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
// MAIN COMPONENT
// ============================================
export default function MenopauseWayPage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      
      {/* ============================================
          SECTION 1: HERO (Above the Fold)
          ============================================ */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-900 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Finally, Fat Loss Results You Didn't Think Were Possible, Made Easier Than You Ever Imagined.
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-400 mt-6 leading-relaxed mb-10">
            The 8-Week Coaching Programme for Women 40+ to Lose Stubborn Menopausal Weight, Reclaim Your Energy, and Feel in Control—Without Restrictive Diets or Giving Up Your Social Life.
          </h2>
          
          <motion.button
            onClick={scrollToPricing}
            className="inline-block px-8 py-4 text-lg bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Yes, I'm Ready to Take Control
          </motion.button>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 2: THE PROBLEM ("She Gets Me")
          ============================================ */}
      <section className="py-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          {...fadeInUp}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Does this sound familiar?
          </h3>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
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
          
          <p className="text-xl md:text-2xl font-semibold text-cyan-400 mt-10">
            It's not a lack of willpower. It's a lack of the right strategy.
          </p>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 3: BENEFITS (The Transformation)
          ============================================ */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
            {...fadeInUp}
          >
            A Different Kind of Result
          </motion.h3>
          
          <motion.p 
            className="text-lg text-gray-300 mb-10 text-center max-w-3xl mx-auto"
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
                className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 flex items-start gap-4 hover:border-cyan-500/50 transition-colors duration-300"
                variants={fadeInUp}
              >
                <FaCheckCircle className="text-cyan-400 text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: CASE STUDY (Nic's Story)
          ============================================ */}
      <section className="py-20 px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          {...scaleIn}
        >
          <div className="bg-zinc-900 p-8 md:p-12 rounded-xl border border-zinc-800">
            <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4">
              Success Story
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              "My chiropractor asked me if I was on Ozempic!"
            </h3>
            
            {/* TODO: Replace placeholder image with actual photo */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-zinc-800 border-2 border-cyan-500 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Photo</span>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                When Nic joined, she was a busy mum who felt stuck. She was weighing herself every day, frustrated by the lack of progress, and anxious about an upcoming holiday to Italy. She felt that every time she made progress, a social event would set her back.
              </p>
              
              <p>
                She decided to trust the process. She went on a camping trip, a festival, and that holiday to Italy.
              </p>
              
              <p>
                The result: She lost 10lbs (4.5kg) and 9cm from her hips, and her clothes became too loose.
              </p>
              
              <p className="font-semibold text-white">
                Her biggest takeaway?
              </p>
            </div>
            
            <blockquote className="border-l-4 border-cyan-500 pl-6 my-8">
              <p className="text-xl md:text-2xl font-semibold text-white italic">
                "It really has given me results I just didn't think could happen for me and in the easiest way I've ever found."
              </p>
            </blockquote>
            
            <p className="text-lg text-gray-300">
              Nic's story isn't an exception. It's what happens when you use the right system.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 5: THE METHOD EXPLAINED
          ============================================ */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
            {...fadeInUp}
          >
            Introducing "The Menopause Way": Your User Manual for Your 40+ Body
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Pillar 1 */}
            <motion.div
              className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/50 transition-colors duration-300"
              variants={fadeInUp}
            >
              <FaUtensils className="text-cyan-400 text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-white mb-3">The Plate Method</h4>
              <p className="text-gray-300">For effortless fat loss without tracking.</p>
            </motion.div>
            
            {/* Pillar 2 */}
            <motion.div
              className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/50 transition-colors duration-300"
              variants={fadeInUp}
            >
              <FaDumbbell className="text-cyan-400 text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-white mb-3">Protein Mastery</h4>
              <p className="text-gray-300">To protect metabolism and control hunger.</p>
            </motion.div>
            
            {/* Pillar 3 */}
            <motion.div
              className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/50 transition-colors duration-300"
              variants={fadeInUp}
            >
              <FaChartLine className="text-cyan-400 text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-white mb-3">The Plateau Protocol</h4>
              <p className="text-gray-300">Our built-in plan for when progress stalls.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: GUARANTEE (Risk Reversal)
          ============================================ */}
      <section className="py-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          {...scaleIn}
        >
          <div className="bg-cyan-500/10 border-2 border-cyan-500/50 rounded-xl p-8 md:p-12">
            <div className="text-cyan-400 text-sm font-bold uppercase tracking-wide mb-4 text-center">
              100% GUARANTEE
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
              Your Success is Guaranteed. The Risk is All Mine.
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              I am 100% confident in this process. My commitment to you is this: if you check in at least 80% of the time over these 8 weeks, follow the plan, and still don't see the progress you were hoping for, I will coach you for an additional 4 to 8 weeks, completely free of charge. Your success is my success.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 7: FINAL CALL TO ACTION
          ============================================ */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          {...fadeInUp}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            It's Time to Take Control
          </h3>
          
          <p className="text-lg mb-8">
            <span className="text-amber-400 font-semibold">
              Enrolment for our next cohort closes on {PLACEHOLDERS.SIGNUP_DEADLINE}. Spots are strictly limited to {PLACEHOLDERS.CAPACITY} women to ensure everyone gets personal coaching.
            </span>
          </p>
          
          <motion.button
            onClick={scrollToPricing}
            className="inline-block px-10 py-5 text-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(6, 182, 212, 0)',
                '0 0 0 10px rgba(6, 182, 212, 0)',
              ]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          >
            Yes, I'm Ready to Take Control
          </motion.button>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 8: PRICING TABLE
          ============================================ */}
      <section id="pricing" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
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
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <h4 className="text-2xl font-bold text-white mb-2">Self-Paced Course</h4>
              <div className="text-5xl font-bold text-cyan-400 mb-6">£297</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "8 Comprehensive Modules",
                  "Community Access",
                  "Lifetime Access to Materials",
                  "Self-Guided Learning"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <FaCheck className="text-cyan-400 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER1_CHECKOUT_URL}
                className="block w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white text-center rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                Enrol Now
              </a>
            </motion.div>

            {/* TIER 2: Coaching Programme (MOST POPULAR) */}
            <motion.div
              className="bg-zinc-900 p-8 rounded-xl border-2 border-cyan-500 relative md:scale-105 hover:border-cyan-400 transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase">
                Most Popular
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-2 mt-2">Coaching Programme</h4>
              <div className="text-5xl font-bold text-cyan-400 mb-6">£497</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Everything in Self-Paced",
                  "Weekly Coaching Check-ins",
                  "Personal Progress Tracking",
                  "Direct Coach Support",
                  "Group Accountability"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <FaCheck className="text-cyan-400 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER2_CHECKOUT_URL}
                className="block w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-white text-center rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Enrol Now
              </a>
            </motion.div>

            {/* TIER 3: VIP Accelerator */}
            <motion.div
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 h-full flex flex-col"
              variants={fadeInUp}
            >
              <h4 className="text-2xl font-bold text-white mb-2">VIP Accelerator</h4>
              <div className="text-5xl font-bold text-cyan-400 mb-6">£1,497</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Everything in Coaching Programme",
                  "Weekly 1-on-1 Calls",
                  "Personalized Meal Planning",
                  "Priority Support",
                  "VIP Community Access"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <FaCheck className="text-cyan-400 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={PLACEHOLDERS.TIER3_CHECKOUT_URL}
                className="block w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white text-center rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                Enrol Now
              </a>
            </motion.div>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div 
            className="text-center mt-12"
            {...fadeInUp}
          >
            <p className="text-gray-400">
              Have a few questions before you join?{' '}
              <a 
                href={PLACEHOLDERS.CALENDLY_URL}
                className="text-cyan-400 underline hover:text-cyan-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
              >
                Click here to book a quick 15-minute chat with me.
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-20"></div>
    </div>
  );
}

