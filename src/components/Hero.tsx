'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

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
    'text-gray-800', 'text-gray-800', 'text-[#56b5bd]', 
    'text-gray-800', 'text-gray-800', 'text-[#56b5bd]'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white text-gray-800 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f9fa] to-white z-0"></div>
      
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Fitness training"
          fill
          priority
          className="object-cover opacity-10"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#56b5bd] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#56b5bd] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#56b5bd] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
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
                  className={`mr-3 mb-2 inline-block ${headlineColors[index]}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              More than just a gym, <span className="font-semibold">TP Health & Fitness</span> is a community dedicated to helping you achieve your fitness goals through personalized training, group classes, and specialized programs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/schedule" 
                className="relative overflow-hidden group bg-[#56b5bd] text-white hover:bg-[#45a4ac] font-bold py-3 px-6 rounded-md transition-all text-center"
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
                className="relative overflow-hidden group bg-transparent border-2 border-[#56b5bd] text-[#56b5bd] font-bold py-3 px-6 rounded-md transition-all text-center"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Services</span>
                <motion.span 
                  className="absolute inset-0 bg-[#56b5bd] z-0"
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
            {/* Main feature image with filter */}
            <div className="absolute -right-20 top-0 h-full w-full drop-shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="/hero-feature.png"
                  alt="Fitness training"
                  fill
                  className="object-contain"
                />
                
                {/* Circular highlight behind image */}
                <div className="absolute inset-0 bg-[#56b5bd] rounded-full opacity-10 blur-3xl transform scale-75 z-[-1]"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut" 
              }}
              className="absolute top-20 right-20 w-20 h-20 rounded-lg bg-white shadow-lg flex items-center justify-center z-20"
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
              className="absolute bottom-20 left-10 w-24 h-24 rounded-lg bg-white shadow-lg flex items-center justify-center z-20"
            >
              <span className="text-3xl font-bold text-[#56b5bd]">30+</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Stats with hover effects */}
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
              className="bg-white shadow-md hover:shadow-xl px-4 py-6 rounded-lg border border-gray-100 transition-all duration-300"
              whileHover={{ 
                y: -10,
                backgroundColor: "#f0f9fa",
                transition: { duration: 0.2 }
              }}
            >
              <p className="text-3xl font-bold text-[#56b5bd]">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div 
            className="w-8 h-12 border-2 border-[#56b5bd] rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div 
              className="w-1 h-3 bg-[#56b5bd] rounded-full mt-2"
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