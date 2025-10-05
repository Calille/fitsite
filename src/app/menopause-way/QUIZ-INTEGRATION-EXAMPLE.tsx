/**
 * QUIZ INTEGRATION EXAMPLE
 * 
 * This file shows how to add the quiz popup to your Menopause Way page.
 * Copy the relevant parts into your actual page.tsx file.
 * 
 * DO NOT use this file directly - it's just an example!
 */

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuizPopup from '@/components/QuizPopup';
// ... your other imports

export default function MenopauseWayPageWithQuiz() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // OPTION 1: Show quiz automatically after 30 seconds
  useEffect(() => {
    const quizShown = sessionStorage.getItem('menopause-quiz-shown');
    
    if (!quizShown) {
      const timer = setTimeout(() => {
        setIsQuizOpen(true);
        sessionStorage.setItem('menopause-quiz-shown', 'true');
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  // OPTION 2: Show on exit intent (uncomment to use)
  // useEffect(() => {
  //   const handleMouseLeave = (e: MouseEvent) => {
  //     if (e.clientY <= 0 && !sessionStorage.getItem('menopause-quiz-shown')) {
  //       setIsQuizOpen(true);
  //       sessionStorage.setItem('menopause-quiz-shown', 'true');
  //     }
  //   };
  //   document.addEventListener('mouseleave', handleMouseLeave);
  //   return () => document.removeEventListener('mouseleave', handleMouseLeave);
  // }, []);

  return (
    <div className="bg-zinc-950 min-h-screen">
      
      {/* YOUR EXISTING PAGE CONTENT */}
      {/* ... all your existing sections ... */}

      {/* ============================================
          EXAMPLE: Add Quiz CTA Button anywhere on the page
          ============================================ */}
      <section className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Not Sure If This Programme Is Right For You?
          </motion.h3>
          
          <motion.p 
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Take our 2-minute quiz to discover if The Menopause Way is the right fit for your goals and lifestyle.
          </motion.p>
          
          <motion.button
            onClick={() => setIsQuizOpen(true)}
            className="px-10 py-5 text-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Take the Free Quiz
          </motion.button>
        </div>
      </section>

      {/* ============================================
          ALTERNATIVE: Add inline CTA in hero section
          ============================================ */}
      {/* 
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Your Headline Here
          </h1>
          <p className="text-xl text-gray-400 mt-6">
            Your subheadline here
          </p>
          
          <div className="flex gap-4 justify-center mt-10">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg"
            >
              Take the Quiz
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>
      */}

      {/* ============================================
          ALTERNATIVE: Floating Quiz Button (always visible)
          ============================================ */}
      {/* 
      <button
        onClick={() => setIsQuizOpen(true)}
        className="fixed bottom-8 right-8 z-40 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        📋 Take Quiz
      </button>
      */}

      {/* ============================================
          QUIZ POPUP COMPONENT (Required!)
          Place this at the end of your return statement
          ============================================ */}
      <QuizPopup 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />
    </div>
  );
}

/**
 * INTEGRATION STEPS:
 * 
 * 1. Copy the imports at the top (useState, useEffect, QuizPopup)
 * 2. Copy the state: const [isQuizOpen, setIsQuizOpen] = useState(false);
 * 3. Choose ONE of the useEffect options for auto-popup (or skip for manual only)
 * 4. Add a CTA button somewhere on your page with onClick={() => setIsQuizOpen(true)}
 * 5. Add <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} /> at the end
 * 6. Test it!
 * 
 * BEST PRACTICES:
 * - Only show auto-popup once per session (use sessionStorage)
 * - Give users time to read content before showing (30 seconds minimum)
 * - Always provide a manual way to open quiz (CTA button)
 * - Make sure the quiz doesn't conflict with other popups
 */
