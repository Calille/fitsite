'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAnalytics } from '@/contexts/AnalyticsContext';

const Hero = () => {
  const { trackInteraction } = useAnalytics();
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  // Animated text splitting for the headline
  const headlineWords = ['Empower', 'Your', 'Strength.', 'Transform', 'Your', 'Life.'];
  const headlineColors = [
    'text-white', 'text-white', 'text-[#56b5bd]', 
    'text-white', 'text-white', 'text-[#56b5bd]'
  ];

  const handleCTAClick = (buttonType: string) => {
    trackInteraction('cta_button_click', { button: buttonType, location: 'hero' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback Image */}
        {!videoLoaded && (
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <Image
              src="/hero-bg.jpg"
              alt="Fitness training"
              fill
              priority
              className="object-cover"
            />
          </div>
        )}
        
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-2xl">
            {/* Animated Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 flex flex-wrap">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                  className={`mr-3 mb-2 inline-block ${headlineColors[index]} drop-shadow-lg`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md"
            >
              More than just a gym, <span className="font-semibold text-[#56b5bd]">TP Health & Fitness</span> is a community dedicated to helping you achieve your fitness goals through personalized training, group classes, and specialized programs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/schedule" 
                className="relative overflow-hidden group bg-[#56b5bd] text-white hover:bg-[#45a4ac] font-bold py-4 px-8 rounded-lg transition-all text-center shadow-lg hover:shadow-xl"
                onClick={() => handleCTAClick('View Our Schedule')}
              >
                <span className="relative z-10">View Our Schedule</span>
                <motion.span 
                  className="absolute inset-0 bg-[#45a4ac] z-0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link 
                href="/services" 
                className="relative overflow-hidden group bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-lg transition-all text-center shadow-lg hover:shadow-xl"
                onClick={() => handleCTAClick('Explore Services')}
              >
                <span className="relative z-10 group-hover:text-[#56b5bd] transition-colors duration-300">Explore Services</span>
                <motion.span 
                  className="absolute inset-0 bg-white z-0"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative h-[500px] w-full"
          >
            {/* Main feature image with enhanced styling for video background */}
            <div className="absolute -right-20 top-0 h-full w-full drop-shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="/hero-feature.png"
                  alt="Fitness training"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
                
                {/* Enhanced circular highlight */}
                <div className="absolute inset-0 bg-[#56b5bd] rounded-full opacity-20 blur-3xl transform scale-75 z-[-1]"></div>
              </div>
            </div>
            
            {/* Enhanced floating elements with better contrast */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut" 
              }}
              className="absolute top-20 right-20 w-20 h-20 rounded-xl bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center z-50 border border-white/20"
            >
              <span className="text-3xl font-bold text-[#56b5bd]">15+</span>
            </motion.div>
            
            <motion.div 
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-20 left-10 w-24 h-24 rounded-xl bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center z-50 border border-white/20"
            >
              <span className="text-3xl font-bold text-[#56b5bd]">30+</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced Stats with better contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
        >
          {[
            { number: "150+", label: "Members" },
            { number: "6", label: "Trainers" },
            { number: "30+", label: "Weekly Classes" },
            { number: "100%", label: "Retention Rate" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl px-4 py-6 rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/15"
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <p className="text-3xl font-bold text-[#56b5bd] drop-shadow-lg">{stat.number}</p>
              <p className="text-white/90 drop-shadow-md">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div 
            className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div 
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
              animate={{ 
                y: [0, 14, 0],
                opacity: [1, 0.2, 1]
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
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