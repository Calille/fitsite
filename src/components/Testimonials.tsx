'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaUser, FaStar, FaSpinner } from 'react-icons/fa';
import { useAnalytics } from '@/contexts/AnalyticsContext';

// Real Google Reviews from TP Health & Fitness
const staticTestimonials = [
  {
    id: 'review-1',
    name: 'E Paley',
    timeAgo: '1 week ago',
    quote: 'Absolutely brilliant sessions! I\'ve been training at TP PT for 2 years and the team worked hard to find a schedule which fitted my lifestyle. I\'ve been training with Will Mitchell in the early mornings during that time. Will is a thoughtful and motivating trainer.',
    rating: 5,
    source: 'Google',
    profileInitial: 'E',
  },
  {
    id: 'review-2',
    name: 'Gautham Pandian',
    timeAgo: '1 week ago',
    quote: 'Excellent experience with my personal trainer Ben at TP Health. Exceptionally kind, polite, and professional. Demonstrates high expertise, understands my specific goals, and tailors sessions accordingly.',
    rating: 5,
    source: 'Google',
    profileInitial: 'G',
  },
  {
    id: 'review-3',
    name: 'Nichola Johnson-Marshall',
    timeAgo: '1 week ago',
    quote: 'Been training with TP Fitness since summer 2025. Started with 1:1 PT sessions with Will Mitchell, then moved to small group sessions. Will is encouraging and supportive, always pushing you safely.',
    rating: 5,
    source: 'Google',
    profileInitial: 'N',
  },
  {
    id: 'review-4',
    name: 'Sophie Birkett',
    timeAgo: '2 weeks ago',
    quote: 'Ben is an excellent trainer who truly cares about clients. Compassionate, interested, and passionate about developing people. Couldn\'t ask for anyone better.',
    rating: 5,
    source: 'Google',
    profileInitial: 'S',
  },
  {
    id: 'review-5',
    name: 'Lanying Burley',
    timeAgo: '1 week ago',
    quote: 'Highly recommend Ben. He is supportive and motivating. I started at TP to recover from a knee injury and enjoyed it so much I\'ve continued for over a year.',
    rating: 5,
    source: 'Google',
    profileInitial: 'L',
  },
  {
    id: 'review-6',
    name: 'Paul de Kort',
    timeAgo: '1 week ago',
    quote: 'Attending TP Fitness for over two years, twice a week. My strength and fitness have greatly improved. Sessions with Will, Sarah, Ben, Seb, and Teighlor are enjoyable and challenging.',
    rating: 5,
    source: 'Google',
    profileInitial: 'P',
  },
  {
    id: 'review-7',
    name: 'Jess Grimmel',
    timeAgo: '2 weeks ago',
    quote: 'Could not recommend TP Health and Fitness more! Coach Will is friendly, supportive, and knowledgeable. Helped us build strength and confidence for our wedding day.',
    rating: 5,
    source: 'Google',
    profileInitial: 'J',
  },
  {
    id: 'review-8',
    name: 'Kathryn Robbins',
    timeAgo: '6 days ago',
    quote: 'Training for over a year with Teighlor, Seb, Will, Ben, and Sarah. Sessions are always challenging, varied, and fun.',
    rating: 5,
    source: 'Google',
    profileInitial: 'K',
  },
  {
    id: 'review-9',
    name: 'Eisha Pengelley',
    timeAgo: '2 weeks ago',
    quote: 'Before TP I kept quitting exercise. Thanks to the encouraging team, I\'ve stuck to my goals and feel fitter, healthier, and stronger. Group sessions are fun and full of laughs.',
    rating: 5,
    source: 'Google',
    profileInitial: 'E',
  },
  {
    id: 'review-10',
    name: 'K Barter',
    timeAgo: '2 months ago',
    quote: 'Joined TP through their 8-week programme. Teighlor was accommodating and welcoming. So glad I took that first step—life-changing.',
    rating: 5,
    source: 'Google',
    profileInitial: 'K',
  },
  {
    id: 'review-11',
    name: 'Philippa Ellis',
    timeAgo: '2 weeks ago',
    quote: 'My husband and I train with Will in paired sessions. He challenges us weekly while managing injuries. We\'re stronger, more flexible, and actually enjoy our workouts!',
    rating: 5,
    source: 'Google',
    profileInitial: 'P',
  },
  {
    id: 'review-12',
    name: 'Francesca Mottram',
    timeAgo: '4 months ago',
    quote: 'Can\'t recommend this gym enough. Friendly, supportive trainers who make it a safe space. I always leave feeling stronger, confident, and uplifted.',
    rating: 5,
    source: 'Google',
    profileInitial: 'F',
  },
  {
    id: 'review-13',
    name: 'Thomas Cooney',
    timeAgo: '2 weeks ago',
    quote: 'TP Fitness boosted my confidence and communication. Will Mitchell has especially helped with nutrition and building a strong workout routine.',
    rating: 5,
    source: 'Google',
    profileInitial: 'T',
  },
  {
    id: 'review-14',
    name: 'Hannah Boyd',
    timeAgo: '1 week ago',
    quote: 'Fantastic gym offering bespoke sessions. Have been training with Will for 6 months—highly recommend!',
    rating: 5,
    source: 'Google',
    profileInitial: 'H',
  },
  {
    id: 'review-15',
    name: 'Iván Rodríguez',
    timeAgo: '10 months ago',
    quote: 'Teighlor and the team are amazing. Workouts are always adapted to needs. My wife and I feel motivated and stronger than ever.',
    rating: 5,
    source: 'Google',
    profileInitial: 'I',
  },
  {
    id: 'review-16',
    name: 'John Hall',
    timeAgo: '10 months ago',
    quote: 'As a busy 40-something, I was out of shape. TP helped me regain fitness and confidence. The team is supportive and motivating.',
    rating: 5,
    source: 'Google',
    profileInitial: 'J',
  },
  {
    id: 'review-17',
    name: 'Melissa de Lusignan',
    timeAgo: '2 years ago',
    quote: 'Teighlor and team are fantastic. My husband and I went from never going to a gym to training twice weekly for 9 months. Big progress and love every session!',
    rating: 5,
    source: 'Google',
    profileInitial: 'M',
  },
  {
    id: 'review-18',
    name: 'Sanjay Patel',
    timeAgo: '2 years ago',
    quote: 'Life-changing experience. Teighlor\'s warm personality and Alfie\'s personal training have transformed my fitness and mindset.',
    rating: 5,
    source: 'Google',
    profileInitial: 'S',
  },
  {
    id: 'review-19',
    name: 'Lorraine Howell',
    timeAgo: '8 months ago',
    quote: 'Small PT sessions pushed me through my winter slump. Feeling stronger, more balanced, and motivated again.',
    rating: 5,
    source: 'Google',
    profileInitial: 'L',
  },
  {
    id: 'review-20',
    name: 'Rita Dollar',
    timeAgo: '1 year ago',
    quote: 'Pleasure to train with Teighlor and her team. Great exercises, supportive environment, and excellent results.',
    rating: 5,
    source: 'Google',
    profileInitial: 'R',
  },
  {
    id: 'review-21',
    name: 'Ian Poree',
    timeAgo: '2 years ago',
    quote: 'Was nervous joining a gym for the first time, but Teighlor was warm and reassuring. Loved the 8-week programme and feel so much fitter.',
    rating: 5,
    source: 'Google',
    profileInitial: 'I',
  },
  {
    id: 'review-22',
    name: 'Kam Bains',
    timeAgo: '2 years ago',
    quote: 'Joined TP 6 weeks ago and already seeing definition and tone. Love the bespoke service and friendly vibe.',
    rating: 5,
    source: 'Google',
    profileInitial: 'K',
  },
  {
    id: 'review-23',
    name: 'Nigel Taunt',
    timeAgo: '1 year ago',
    quote: 'Private gym with personal trainers offering great small classes. The Kick-start programme really built my confidence and strength.',
    rating: 5,
    source: 'Google',
    profileInitial: 'N',
  },
  {
    id: 'review-24',
    name: 'Jane Watson',
    timeAgo: '3 years ago',
    quote: 'Highly recommend Teighlor. Fun and challenging sessions, always positive and motivating. Great range of equipment.',
    rating: 5,
    source: 'Google',
    profileInitial: 'J',
  },
  {
    id: 'review-25',
    name: 'Lisa Le Grice',
    timeAgo: '2 years ago',
    quote: 'Joined TP after years of procrastination. Now 9 months in, I\'m stronger, fitter, and over a stone lighter. Love the supportive environment.',
    rating: 5,
    source: 'Google',
    profileInitial: 'L',
  },
  {
    id: 'review-26',
    name: 'Sandra Bradley',
    timeAgo: '1 year ago',
    quote: 'Highly recommend the TP Kickstart programme. Knowledgeable, caring staff who helped me regain strength after an injury.',
    rating: 5,
    source: 'Google',
    profileInitial: 'S',
  },
  {
    id: 'review-27',
    name: 'Abigail Ansell',
    timeAgo: '3 months ago',
    quote: 'Teighlor is professional and knowledgeable. 10/10 would recommend.',
    rating: 5,
    source: 'Google',
    profileInitial: 'A',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [reviews] = useState(staticTestimonials);
  const [loading, setLoading] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const { trackInteraction } = useAnalytics();

  // Simulate loading for smooth transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      trackInteraction('testimonials_loaded', { 
        reviewCount: staticTestimonials.length 
      });
    }, 500);
    
    return () => clearTimeout(timer);
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
    trackInteraction('testimonial_dot_click', { index });
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


  return (
    <section className="section-padding bg-gradient-to-br from-[#56b5bd] via-[#4a9ba8] to-[#3e8a93] text-white overflow-hidden relative">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay opacity-5" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full mix-blend-overlay opacity-5" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Section Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <FaQuoteLeft className="text-white text-3xl" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            What Our{' '}
            <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent font-extrabold drop-shadow-lg">
              Clients
            </span>{' '}
            Say
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
            Hear from our community of dedicated members who have transformed their lives with TP Health & Fitness.
          </p>

          {/* Enhanced rating display */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-300 w-6 h-6 drop-shadow-sm" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-2xl">5.0</span>
              <span className="text-white/80 font-medium">rating</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <span className="text-white/80 font-medium">42 reviews</span>
          </motion.div>

          {/* Write a Review Button */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://g.page/r/Ccotkqk7ORnPEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm text-[#56b5bd] hover:bg-white hover:text-[#45a4ac] px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-2xl border border-white/20"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => trackInteraction('write_review_click', { source: 'testimonials' })}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Write a Review
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced testimonial carousel */}
        <div className="max-w-5xl mx-auto pb-16 relative">
          <div className="relative min-h-[400px]">
            {loading ? (
              <div className="flex items-center justify-center h-[400px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <FaSpinner className="animate-spin text-white text-5xl mb-6" />
                  <p className="text-white text-lg">Loading testimonials...</p>
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
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center shadow-xl mx-auto relative z-10 border border-white/20"
                  whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Google branding */}
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-white to-gray-50 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-sm text-gray-700 font-semibold">Google Review</span>
                    </div>
                  </motion.div>

                  {/* Profile section */}
                  <motion.div
                    className="flex flex-col items-center mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-3 border-white/30 flex items-center justify-center bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] shadow-lg">
                      <span className="text-white text-3xl font-bold">
                        {reviews[current]?.profileInitial || reviews[current]?.name.charAt(0) || '?'}
                      </span>
                    </div>

                    {/* Star rating */}
                    <div className="flex justify-center gap-2 mb-2">
                      {[...Array(reviews[current]?.rating || 5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-300 w-5 h-5 drop-shadow-sm" />
                      ))}
                    </div>
                  </motion.div>

                  {/* Quote text */}
                  <motion.div
                    className="relative mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <FaQuoteLeft className="absolute -top-4 -left-4 text-white/30 text-2xl" />
                    <p className="text-lg md:text-xl lg:text-2xl italic text-white leading-relaxed font-medium px-6">
                      {reviews[current]?.quote}
                    </p>
                    <FaQuoteLeft className="absolute -bottom-4 -right-4 text-white/30 text-2xl rotate-180" />
                  </motion.div>

                  {/* Name and time */}
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <h4 className="font-bold text-xl text-white mb-1">{reviews[current]?.name}</h4>
                    <p className="text-white/80 font-medium">{reviews[current]?.timeAgo}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            )}
          </div>

          {/* Enhanced dots navigation */}
          {!loading && reviews.length > 0 && (
            <motion.div
              className="flex justify-center mt-12 space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {reviews.map((_: any, index: number) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`rounded-full transition-all duration-500 relative overflow-hidden ${
                    current === index
                      ? 'bg-white w-12 h-4 shadow-lg'
                      : 'bg-white/30 hover:bg-white/50 w-4 h-4 hover:scale-110'
                  }`}
                  whileHover={{ scale: current === index ? 1.05 : 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to review ${index + 1}`}
                >
                  {current === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#56b5bd] to-[#45a4ac]"
                      layoutId="activeDot"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Navigation arrows */}
          {!loading && reviews.length > 0 && (
          <div className="hidden md:block">
            <motion.button
              className="absolute top-1/2 -left-20 transform -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg"
              onClick={() => setCurrent(prevIndex)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Previous</span>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              className="absolute top-1/2 -right-20 transform -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg"
              onClick={() => setCurrent(nextIndex)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Next</span>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
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