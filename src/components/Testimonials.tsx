'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaUser, FaStar, FaSpinner } from 'react-icons/fa';
import { useAnalytics } from '@/contexts/AnalyticsContext';

// Static testimonials data
const staticTestimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah M.',
    timeAgo: '2 weeks ago',
    quote: 'TP Health & Fitness has completely transformed my approach to fitness. The trainers are incredibly knowledgeable and supportive. I\'ve never felt stronger or more confident!',
    rating: 5,
    source: 'Google',
    profileInitial: 'S',
  },
  {
    id: 'testimonial-2',
    name: 'James R.',
    timeAgo: '1 month ago',
    quote: 'Amazing gym with fantastic trainers. The community here is so welcoming and motivating. I look forward to every session!',
    rating: 5,
    source: 'Google',
    profileInitial: 'J',
  },
  {
    id: 'testimonial-3',
    name: 'Emma L.',
    timeAgo: '3 weeks ago',
    quote: 'Best fitness studio in town! The personalized training approach really works. I\'ve achieved goals I never thought possible.',
    rating: 5,
    source: 'Google',
    profileInitial: 'E',
  },
  {
    id: 'testimonial-4',
    name: 'Michael T.',
    timeAgo: '2 months ago',
    quote: 'The team at TP are professional, friendly and really know their stuff. Great facilities and excellent coaching. Highly recommend!',
    rating: 5,
    source: 'Google',
    profileInitial: 'M',
  },
  {
    id: 'testimonial-5',
    name: 'Lisa K.',
    timeAgo: '1 week ago',
    quote: 'I\'ve been training here for 6 months and the results speak for themselves. The trainers really care about your progress and wellbeing.',
    rating: 5,
    source: 'Google',
    profileInitial: 'L',
  },
  {
    id: 'testimonial-6',
    name: 'David H.',
    timeAgo: '3 days ago',
    quote: 'Outstanding personal training services! The trainers really understand how to push you while keeping safety first. I\'ve seen incredible progress in just 3 months.',
    rating: 5,
    source: 'Google',
    profileInitial: 'D',
  },
  {
    id: 'testimonial-7',
    name: 'Rachel S.',
    timeAgo: '1 week ago',
    quote: 'The group fitness classes are phenomenal! Great energy, motivating instructors, and a supportive community. I actually enjoy working out now!',
    rating: 5,
    source: 'Google',
    profileInitial: 'R',
  },
  {
    id: 'testimonial-8',
    name: 'Tom W.',
    timeAgo: '2 weeks ago',
    quote: 'Been a member for over a year now. The equipment is top-notch, facilities are always clean, and the staff genuinely cares about your fitness journey.',
    rating: 5,
    source: 'Google',
    profileInitial: 'T',
  },
  {
    id: 'testimonial-9',
    name: 'Jennifer M.',
    timeAgo: '5 days ago',
    quote: 'Incredible transformation in my strength and confidence! The trainers create personalized programs that actually work. Best investment I\'ve made.',
    rating: 5,
    source: 'Google',
    profileInitial: 'J',
  },
  {
    id: 'testimonial-10',
    name: 'Alex P.',
    timeAgo: '3 weeks ago',
    quote: 'The nutrition guidance combined with the training has been life-changing. Lost 25 pounds and gained so much muscle definition!',
    rating: 5,
    source: 'Google',
    profileInitial: 'A',
  },
  {
    id: 'testimonial-11',
    name: 'Katie B.',
    timeAgo: '1 month ago',
    quote: 'Love the variety of classes offered! From HIIT to yoga, there\'s something for every fitness level. The instructors are all amazing.',
    rating: 5,
    source: 'Google',
    profileInitial: 'K',
  },
  {
    id: 'testimonial-12',
    name: 'Mark D.',
    timeAgo: '2 days ago',
    quote: 'Fantastic studio with a real community feel. Everyone supports each other and the trainers know everyone by name. Feels like family!',
    rating: 5,
    source: 'Google',
    profileInitial: 'M',
  },
  {
    id: 'testimonial-13',
    name: 'Sophie L.',
    timeAgo: '1 week ago',
    quote: 'The flexibility in scheduling and variety of training options makes it so easy to stay consistent. I\'ve never stuck to a fitness routine this long!',
    rating: 5,
    source: 'Google',
    profileInitial: 'S',
  },
  {
    id: 'testimonial-14',
    name: 'Ryan C.',
    timeAgo: '4 days ago',
    quote: 'Excellent value for money. The quality of training and facilities far exceeds what you\'d pay elsewhere. Highly recommend to anyone serious about fitness.',
    rating: 5,
    source: 'Google',
    profileInitial: 'R',
  },
  {
    id: 'testimonial-15',
    name: 'Amanda G.',
    timeAgo: '2 weeks ago',
    quote: 'The trainers here really know their stuff! They\'ve helped me overcome plateau after plateau. My form has improved dramatically.',
    rating: 5,
    source: 'Google',
    profileInitial: 'A',
  },
  {
    id: 'testimonial-16',
    name: 'Ben K.',
    timeAgo: '5 days ago',
    quote: 'Great atmosphere and motivation. I\'ve tried many gyms but this is the first place where I actually look forward to my workouts!',
    rating: 5,
    source: 'Google',
    profileInitial: 'B',
  },
  {
    id: 'testimonial-17',
    name: 'Nicole R.',
    timeAgo: '1 month ago',
    quote: 'The recovery and mobility work they incorporate is incredible. I feel better at 35 than I did at 25! No more aches and pains.',
    rating: 5,
    source: 'Google',
    profileInitial: 'N',
  },
  {
    id: 'testimonial-18',
    name: 'Chris J.',
    timeAgo: '3 days ago',
    quote: 'Phenomenal results in a short time. The combination of strength training and cardio programs has completely transformed my physique.',
    rating: 5,
    source: 'Google',
    profileInitial: 'C',
  },
  {
    id: 'testimonial-19',
    name: 'Megan F.',
    timeAgo: '2 weeks ago',
    quote: 'The mental health benefits have been just as important as the physical ones. Exercise is now my therapy and the community here is so supportive.',
    rating: 5,
    source: 'Google',
    profileInitial: 'M',
  },
  {
    id: 'testimonial-20',
    name: 'Jake T.',
    timeAgo: '1 week ago',
    quote: 'Impressed by the attention to detail and safety protocols. The trainers always ensure proper form before adding weight. Professional and caring.',
    rating: 5,
    source: 'Google',
    profileInitial: 'J',
  },
  {
    id: 'testimonial-21',
    name: 'Laura V.',
    timeAgo: '4 days ago',
    quote: 'Best decision I made was joining TP Health & Fitness. The trainers pushed me beyond my comfort zone and helped me achieve goals I never thought possible.',
    rating: 5,
    source: 'Google',
    profileInitial: 'L',
  },
  {
    id: 'testimonial-22',
    name: 'Sam N.',
    timeAgo: '2 months ago',
    quote: 'The progressive approach to training keeps things interesting and challenging. Every session is different but purposeful. Love the variety!',
    rating: 5,
    source: 'Google',
    profileInitial: 'S',
  },
  {
    id: 'testimonial-23',
    name: 'Hannah W.',
    timeAgo: '3 weeks ago',
    quote: 'Amazing support system here! The other members and trainers create such a positive environment. I\'ve made lifelong friends.',
    rating: 5,
    source: 'Google',
    profileInitial: 'H',
  },
  {
    id: 'testimonial-24',
    name: 'Carlos M.',
    timeAgo: '1 week ago',
    quote: 'The knowledge and expertise of the trainers is unmatched. They explain the \'why\' behind every exercise which helps me stay motivated and engaged.',
    rating: 5,
    source: 'Google',
    profileInitial: 'C',
  },
  {
    id: 'testimonial-25',
    name: 'Rebecca H.',
    timeAgo: '5 days ago',
    quote: 'Fantastic facilities and equipment! Everything is well-maintained and the studio has a really motivating atmosphere. Clean and professional.',
    rating: 5,
    source: 'Google',
    profileInitial: 'R',
  },
  {
    id: 'testimonial-26',
    name: 'Jordan L.',
    timeAgo: '2 weeks ago',
    quote: 'The holistic approach to fitness including nutrition coaching has been a game-changer. Finally understanding how to fuel my body properly.',
    rating: 5,
    source: 'Google',
    profileInitial: 'J',
  },
  {
    id: 'testimonial-27',
    name: 'Olivia K.',
    timeAgo: '1 month ago',
    quote: 'Excellent customer service and flexibility with scheduling. The staff goes above and beyond to accommodate your needs and goals.',
    rating: 5,
    source: 'Google',
    profileInitial: 'O',
  },
  {
    id: 'testimonial-28',
    name: 'Daniel S.',
    timeAgo: '3 days ago',
    quote: 'The results speak for themselves! I\'ve gained strength, lost fat, and improved my overall health. The trainers make fitness fun and achievable.',
    rating: 5,
    source: 'Google',
    profileInitial: 'D',
  },
  {
    id: 'testimonial-29',
    name: 'Grace P.',
    timeAgo: '1 week ago',
    quote: 'Outstanding group training sessions! The energy is infectious and the trainers know how to motivate everyone regardless of fitness level.',
    rating: 5,
    source: 'Google',
    profileInitial: 'G',
  },
  {
    id: 'testimonial-30',
    name: 'Tyler B.',
    timeAgo: '6 days ago',
    quote: 'This place has changed my life! From beginner to confident athlete, the journey has been incredible. The support system here is unbeatable.',
    rating: 5,
    source: 'Google',
    profileInitial: 'T',
  }
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
    <section className="section-padding bg-gradient-to-br from-[#56b5bd] via-[#4a9ba8] to-[#3e8a93] text-white overflow-hidden relative">
      {/* Enhanced decorative elements */}
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
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                >
                  <FaStar className="text-yellow-300 w-6 h-6 drop-shadow-sm" />
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-2xl">5.0</span>
              <span className="text-white/80 font-medium">rating</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <span className="text-white/80 font-medium">{reviews.length} reviews</span>
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
                  {/* Enhanced Google branding */}
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                    initial={{ y: -30, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
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

                  {/* Enhanced profile section */}
                  <motion.div
                    className="flex flex-col items-center mb-6"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-3 border-white/30 flex items-center justify-center bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] shadow-lg">
                      <span className="text-white text-3xl font-bold">
                        {reviews[current]?.profileInitial || reviews[current]?.name.charAt(0) || '?'}
                      </span>
                    </div>

                    {/* Star rating with enhanced animation */}
                    <motion.div
                      className="flex justify-center gap-2 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {[...Array(reviews[current]?.rating || 5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15, rotate: -10 }}
                          animate={{ opacity: 1, y: 0, rotate: 0 }}
                          transition={{ delay: 0.5 + i * 0.15, duration: 0.4, type: "spring" }}
                        >
                          <FaStar className="text-yellow-300 w-5 h-5 drop-shadow-sm" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Quote text with enhanced typography */}
                  <motion.div
                    className="relative mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <FaQuoteLeft className="absolute -top-4 -left-4 text-white/30 text-2xl" />
                    <p className="text-lg md:text-xl lg:text-2xl italic text-white leading-relaxed font-medium px-6">
                      {(reviews[current]?.quote || '').split(' ').map((word: string, i: number) => (
                        <motion.span
                          key={i}
                          custom={i}
                          variants={quoteAnimation}
                          initial="initial"
                          animate="animate"
                          className="inline-block mx-[3px]"
                        >
                          {word}{' '}
                        </motion.span>
                      ))}
                    </p>
                    <FaQuoteLeft className="absolute -bottom-4 -right-4 text-white/30 text-2xl rotate-180" />
                  </motion.div>

                  {/* Name and time with enhanced styling */}
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
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

          {/* Enhanced navigation arrows */}
          {!loading && reviews.length > 0 && (
          <div className="hidden md:block">
            <motion.button
              className="absolute top-1/2 -left-20 transform -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg group"
              onClick={() => setCurrent(prevIndex)}
              whileHover={{
                scale: 1.1,
                x: -8,
                backgroundColor: "rgba(255, 255, 255, 0.25)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.4, type: "spring" }}
            >
              <span className="sr-only">Previous</span>
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              className="absolute top-1/2 -right-20 transform -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg group"
              onClick={() => setCurrent(nextIndex)}
              whileHover={{
                scale: 1.1,
                x: 8,
                backgroundColor: "rgba(255, 255, 255, 0.25)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.4, type: "spring" }}
            >
              <span className="sr-only">Next</span>
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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