'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnalytics } from '@/contexts/AnalyticsContext';

interface TeamMemberProps {
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image: string;
}

export default function TeamMemberCard({ name, role, specialties, bio, image }: TeamMemberProps) {
  const [showFullBio, setShowFullBio] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { trackInteraction } = useAnalytics();

  const handleViewMore = () => {
    setShowFullBio(!showFullBio);
    trackInteraction('team_member_bio_toggle', { 
      member: name, 
      action: showFullBio ? 'collapse' : 'expand' 
    });
  };

  const handleImageError = () => {
    setImageError(true);
    trackInteraction('team_member_image_error', { member: name });
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden text-gray-800 hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-80 w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={image}
            alt={`${name} - ${role} at TP Health & Fitness`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Fallback when image fails to load
          <div className="w-full h-full bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl font-bold mb-2">
                {name.charAt(0).toUpperCase()}
              </div>
              <p className="text-lg font-medium">{name}</p>
            </div>
          </div>
        )}
        
        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-[#56b5bd] mb-1">{name}</h3>
          <p className="font-medium text-gray-700">{role}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2 tracking-wide">
            Specialties
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, i) => (
              <span 
                key={i} 
                className="text-xs bg-[#e9f7f8] text-[#56b5bd] px-3 py-1 rounded-full font-medium hover:bg-[#d4f1f3] transition-colors"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-gray-600 min-h-[80px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={showFullBio ? 'full' : 'truncated'}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {showFullBio ? (
                <p className="leading-relaxed">{bio}</p>
              ) : (
                <p className="leading-relaxed">
                  {bio.length > 150 ? `${bio.substring(0, 150)}...` : bio}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-6 text-center">
          <motion.button 
            className="px-6 py-2 bg-[#56b5bd] text-white rounded-md hover:bg-[#45a4ac] transition-colors font-medium shadow-sm hover:shadow-md"
            onClick={handleViewMore}
            aria-label={`${showFullBio ? 'Show less about' : 'View more about'} ${name}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {showFullBio ? '← Show Less' : 'View More →'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 