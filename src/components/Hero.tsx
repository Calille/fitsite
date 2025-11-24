'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import Image from 'next/image';

const Hero = () => {
  const { trackInteraction } = useAnalytics();
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Debug video loading
    console.log('🎬 Hero component mounted, checking video...');

    // Simple video check
    const checkVideo = setTimeout(() => {
      const video = document.querySelector('.hero-video') as HTMLVideoElement;
      if (video && video.readyState >= 3) {
        console.log('✅ Video is ready, showing video');
        setVideoLoaded(true);
      } else {
        console.log('⏳ Video not ready, showing image');
        setVideoLoaded(false);
      }
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(checkVideo);
    };
  }, []);

  const parallaxOffset = scrollY * 0.4;

  // Animated text splitting for the headline
  const headlineWords = ['Strength.', 'Life.'];
  const headlineColors = [
    'text-[#56b5bd]', 'text-[#56b5bd]'
  ];

  const handleCTAClick = (buttonType: string) => {
    trackInteraction('cta_button_click', { button: buttonType, location: 'hero' });
  };

  const scrollToSchedule = () => {
    handleCTAClick('View Our Schedule');
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black hero-section">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero1.webp)'
          }}
        />

        {/* Hero Video - Simplified */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero1.webp"
          className="absolute inset-0 w-full h-full object-cover hero-video"
          style={{ zIndex: 1 }}
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback background image - only shows if video fails */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero1.webp)',
            zIndex: 0
          }}
        />




        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-20"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#56b5bd] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob z-30"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#56b5bd] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 z-30"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#56b5bd] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 z-30"></div>


      {/* Content */}
      <div className="container-custom relative z-40">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl text-center">
            {/* Animated Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-2">
                <span className="text-white drop-shadow-lg">Empower Your </span>
                <span className="text-[#56b5bd] drop-shadow-lg">Strength</span>
                <span className="text-white drop-shadow-lg">,</span>
              </div>
              <div>
                <span className="text-white drop-shadow-lg">Transform Your </span>
                <span className="text-[#56b5bd] drop-shadow-lg">Life</span>
                <span className="text-white drop-shadow-lg">.</span>
              </div>
              <div className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 font-normal text-[#56b5bd]">
                TP Health & Fitness
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 drop-shadow-md max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              More than just a gym, <span className="text-[#56b5bd] font-semibold">TP Health & Fitness</span> is a community dedicated to helping you achieve your fitness goals through personalised training, group classes, and specialised programmes.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/book"
                className="relative overflow-hidden group bg-[#56b5bd] text-white hover:bg-[#45a4ac] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all text-center shadow-lg hover:shadow-xl cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation text-sm sm:text-base"
                onClick={() => handleCTAClick('Book Now')}
              >
                <span className="relative z-10">Book Now</span>
                <motion.span 
                  className="absolute inset-0 bg-[#45a4ac] z-0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link 
                href="/services" 
                className="relative overflow-hidden group bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all text-center shadow-lg hover:shadow-xl min-h-[44px] flex items-center justify-center touch-manipulation text-sm sm:text-base"
                onClick={() => handleCTAClick('Our Services')}
              >
                <span className="relative z-10 group-hover:text-[#56b5bd] transition-colors duration-300">Our Services</span>
                <motion.span 
                  className="absolute inset-0 bg-white z-0"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Stats with better contrast */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 text-center px-4"
          style={{ opacity: 1 }}
        >
          {[
            { number: "150+", label: "Members" },
            { number: "6", label: "Trainers" },
            { number: "30+", label: "Weekly Classes" },
            { number: "100%", label: "Retention Rate" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl px-3 sm:px-4 py-4 sm:py-6 rounded-lg sm:rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/15"
              style={{ opacity: 1 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#56b5bd] drop-shadow-lg">{stat.number}</p>
              <p className="text-xs sm:text-sm md:text-base text-white/90 drop-shadow-md mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Enhanced Scroll indicator */}
        <div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          style={{ opacity: 1 }}
        >
          <div 
            className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm"
          >
            <div 
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
            />
          </div>
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: scale(1); }
          33% { transform: scale(1.1); }
          66% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero; 