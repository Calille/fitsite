'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPhone } from 'react-icons/fa';

const STORAGE_KEY = 'tp_consultation_popup_seen';
const CALENDLY_URL = 'https://calendly.com/tphealthandfitnesscoaching/tpintroductory-call';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show on the first visit. localStorage works on the live cPanel host;
    // if it's unavailable (sandboxed), we fail safe and don't show the popup.
    let alreadySeen = false;
    try {
      alreadySeen = window.localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      alreadySeen = true;
    }

    if (alreadySeen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      try {
        window.localStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        /* storage unavailable — popup simply shows once this session */
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
    // Let other one-time prompts (e.g. the coach offer banner) know the
    // modal is dismissed so they don't appear on top of each other.
    try {
      window.dispatchEvent(new Event('tp-consultation-closed'));
    } catch {
      /* no-op */
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-popup-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Accent header */}
            <div className="bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] px-8 pt-10 pb-8 text-center text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl" />
              </div>
              <h2 id="consultation-popup-title" className="text-2xl font-bold leading-tight">
                Book Your Free Discovery Call
              </h2>
            </div>

            {/* Body */}
            <div className="px-8 py-7 text-center">
              <p className="text-gray-600 leading-relaxed mb-6">
                Start your journey with a free consultation to discuss your goals with Teighlor.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="block w-full py-3.5 bg-[#56b5bd] text-white font-bold rounded-xl hover:bg-[#45a4ac] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
