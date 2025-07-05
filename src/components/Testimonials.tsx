'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaUser, FaStar, FaSpinner } from 'react-icons/fa';
import GoogleReviews from './GoogleReviews';
import { googleReviewsService, type FormattedReview } from '@/services/googleReviews';
import { useAnalytics } from '@/contexts/AnalyticsContext';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [reviews, setReviews] = useState<FormattedReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [googleRating, setGoogleRating] = useState(5.0);
  const [totalReviews, setTotalReviews] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const { trackInteraction } = useAnalytics();

  // Fetch Google Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const { reviews: fetchedReviews, rating, totalReviews: total } = await googleReviewsService.getReviews();
        setReviews(fetchedReviews);
        setGoogleRating(rating);
        setTotalReviews(total);
        trackInteraction('google_reviews_loaded', { 
          reviewCount: fetchedReviews.length,
          rating: rating
        });
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // Fallback to default reviews if API fails
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [trackInteraction]);

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  useEffect(() => {
    if (isAutoplay && reviews.length > 0) {
      startAutoplay();
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay, reviews.length]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000); // Resume autoplay after 10 seconds
  };

  // Calculate indexes for the visible reviews in a "carousel" style
  const prevIndex = current === 0 ? reviews.length - 1 : current - 1;
  const nextIndex = current === reviews.length - 1 ? 0 : current + 1;

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
            What Our <span className="text-white font-extrabold">Clients</span> Say
          </h2>
          <p className="text-white max-w-3xl mx-auto mb-6">
            Real reviews from our Google Business page - hear from our community of dedicated members who have transformed their lives with TP Health & Fitness.
          </p>
          
          <GoogleReviews 
            rating={googleRating} 
            totalReviews={totalReviews} 
            showWriteReview={true} 
            className="text-white" 
          />
        </motion.div>

        {/* Enhanced testimonial carousel */}
        <div className="max-w-3xl mx-auto pb-12 relative">
          <div className="relative min-h-[350px]">
            {loading ? (
              <div className="flex items-center justify-center h-[350px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <FaSpinner className="animate-spin text-white text-4xl mb-4" />
                  <p className="text-white">Loading reviews...</p>
                </motion.div>
              </div>
            ) : reviews.length === 0 ? (
              <div className="flex items-center justify-center h-[350px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-white text-lg">No reviews available</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Please check your Google Places API configuration
                  </p>
                </motion.div>
              </div>
            ) : (
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
                  {/* Google branding */}
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="bg-white p-3 rounded-full shadow-lg flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-xs text-gray-600 font-medium">Google Review</span>
                    </div>
                  </motion.div>

                  {/* Profile image/icon */}
                  <motion.div 
                    className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-2 border-white flex items-center justify-center bg-[#56b5bd]"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
                  >
                    <span className="text-white text-3xl font-bold">
                      {reviews[current]?.profileInitial || reviews[current]?.name.charAt(0) || '?'}
                    </span>
                  </motion.div>

                  {/* Star rating */}
                  <motion.div 
                    className="flex justify-center gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {[...Array(reviews[current]?.rating || 5)].map((_, i) => (
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
                    {(reviews[current]?.quote || '').split(' ').map((word: string, i: number) => (
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

                  {/* Name and time */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <h4 className="font-bold text-white">{reviews[current]?.name}</h4>
                    <p className="text-sm text-gray-200">{reviews[current]?.timeAgo}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            )}
          </div>

          {/* Improved dots navigation */}
          {!loading && reviews.length > 0 && (
            <motion.div 
              className="flex justify-center mt-10 space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {reviews.map((_: FormattedReview, index: number) => (
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
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </motion.div>
          )}

          {/* Navigation arrows */}
          {!loading && reviews.length > 0 && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 