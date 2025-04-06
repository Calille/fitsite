'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaUser, FaStar } from 'react-icons/fa';

// Define the testimonial type
type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  imagePlaceholder?: boolean; // Mark if we need to use a placeholder
  rating?: number; // 1-5 star rating
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Member for 2 years',
    quote: 'Joining TP Health & Fitness completely transformed my approach to fitness. The personal trainers are incredibly knowledgeable and the community keeps me accountable and motivated.',
    imagePlaceholder: true,
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Member for 1 year',
    quote: 'The endurance program at TP Health & Fitness helped me prepare for my first marathon. The structured training and expert guidance made all the difference in my performance.',
    imagePlaceholder: true,
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Member for 3 years',
    quote: "I've tried many fitness studios, but none compare to the atmosphere and results I've experienced at TP Health & Fitness. The trainers genuinely care about your progress.",
    imagePlaceholder: true,
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Member for 6 months',
    quote: "The supportive environment at TP Health & Fitness helped me lose 30 pounds and gain confidence. The trainers create personalized plans that actually work.",
    imagePlaceholder: true,
    rating: 5,
  },
  {
    id: 5,
    name: 'Priya Sharma',
    role: 'Member for 1.5 years',
    quote: "TP Health & Fitness isn't just a gym, it's a community. The nutrition coaching alongside the training programs has completely transformed my lifestyle.",
    imagePlaceholder: true,
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  useEffect(() => {
    if (isAutoplay) {
      startAutoplay();
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000); // Resume autoplay after 10 seconds
  };

  // Calculate indexes for the visible testimonials in a "carousel" style
  const prevIndex = current === 0 ? testimonials.length - 1 : current - 1;
  const nextIndex = current === testimonials.length - 1 ? 0 : current + 1;

  // Animation variants
  const fadeInScale = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const quoteAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.2 + custom * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="section-padding bg-[#56b5bd] text-white overflow-hidden relative">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay opacity-10"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full mix-blend-overlay opacity-10"
        animate={{ 
          scale: [1, 0.9, 1],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our <span className="text-white font-extrabold">Members</span> Say
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            Hear from our community of dedicated members who have transformed their lives with TP Health & Fitness.
          </p>
        </motion.div>

        {/* Enhanced testimonial carousel */}
        <div className="max-w-3xl mx-auto pb-12 relative">
          <div className="relative min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={fadeInScale}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <motion.div 
                  className="bg-[#45a4ac] rounded-lg p-8 md:p-10 text-center shadow-xl mx-auto relative z-10 backdrop-blur-sm bg-opacity-90"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Decorative quotation marks */}
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="bg-[#56b5bd] p-4 rounded-full shadow-lg">
                      <FaQuoteLeft className="text-white text-xl" />
                    </div>
                  </motion.div>

                  {/* Profile image/icon */}
                  <motion.div 
                    className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-2 border-white flex items-center justify-center bg-[#56b5bd]"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
                  >
                    <FaUser className="text-white text-3xl" />
                  </motion.div>

                  {/* Star rating */}
                  <motion.div 
                    className="flex justify-center gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {[...Array(testimonials[current].rating || 5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                      >
                        <FaStar className="text-yellow-300" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote text - split by words for animation */}
                  <motion.p 
                    className="text-lg md:text-xl italic mb-6 text-white leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {testimonials[current].quote.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={quoteAnimation}
                        initial="initial"
                        animate="animate"
                        className="inline-block mx-[2px]"
                      >
                        {word}{' '}
                      </motion.span>
                    ))}
                  </motion.p>

                  {/* Name and role */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <h4 className="font-bold text-white">{testimonials[current].name}</h4>
                    <p className="text-sm text-gray-200">{testimonials[current].role}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Improved dots navigation */}
          <motion.div 
            className="flex justify-center mt-10 space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-300 ${
                  current === index 
                    ? 'bg-white w-8 h-3' 
                    : 'bg-[#45a4ac] hover:bg-white/70 w-3 h-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>

          {/* Navigation arrows */}
          <div className="hidden md:block">
            <motion.button
              className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
              onClick={() => setCurrent(prevIndex)}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="sr-only">Previous</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
              onClick={() => setCurrent(nextIndex)}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="sr-only">Next</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 