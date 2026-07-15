'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const STORAGE_KEY = 'tp_coach_offer_seen';
const CONSULTATION_KEY = 'tp_consultation_popup_seen';
const CALENDLY_URL = 'https://calendly.com/tphealthandfitnesscoaching/tpintroductory-call';

export default function CoachOfferBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let dismissed = false;
    let consultationSeenBefore = true;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === 'true';
      consultationSeenBefore = window.localStorage.getItem(CONSULTATION_KEY) === 'true';
    } catch {
      dismissed = true;
    }

    if (dismissed) return;

    let revealTimer: ReturnType<typeof setTimeout>;

    const reveal = () => {
      revealTimer = setTimeout(() => setIsOpen(true), 800);
    };

    // If the consultation modal hasn't been shown before, it will appear this
    // visit. Wait for it to be dismissed before revealing the banner so the two
    // never stack. Otherwise (returning visitor), reveal after a short delay.
    if (consultationSeenBefore) {
      revealTimer = setTimeout(() => setIsOpen(true), 3000);
      return () => clearTimeout(revealTimer);
    }

    window.addEventListener('tp-consultation-closed', reveal, { once: true });
    // Fallback in case the modal is never opened/closed.
    const fallback = setTimeout(reveal, 12000);

    return () => {
      window.removeEventListener('tp-consultation-closed', reveal);
      clearTimeout(revealTimer);
      clearTimeout(fallback);
    };
  }, []);

  const dismiss = () => {
    setIsOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      /* no-op */
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 inset-x-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4 pointer-events-none"
          role="region"
          aria-label="New coach special offer"
        >
          <div className="pointer-events-auto max-w-4xl mx-auto bg-gradient-to-r from-[#56b5bd] to-[#3e8a93] text-white rounded-xl shadow-2xl border border-white/15 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <div className="flex-1 min-w-0 pr-6 sm:pr-0">
              <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-0.5">
                New Coach Special Offer
              </p>
              <p className="text-sm sm:text-base font-semibold leading-snug">
                Train with Jo &amp; Ben Webster: £800 for 8 weeks (16 x 1-1 sessions)
              </p>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#3e8a93] font-bold text-sm py-2.5 px-5 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
            >
              Enquire
              <FaArrowRight className="text-xs" />
            </a>

            <button
              onClick={dismiss}
              className="absolute top-2 right-2 sm:static p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Dismiss offer"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
