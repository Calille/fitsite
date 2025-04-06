'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image: string;
}

export default function TeamMemberCard({ name, role, specialties, bio, image }: TeamMemberProps) {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-gray-800">
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-[#56b5bd]">{name}</h3>
          <p className="font-medium text-gray-700 mt-1">{role}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, i) => (
              <span key={i} className="text-xs bg-[#e9f7f8] text-[#56b5bd] px-2 py-1 rounded-full">
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
                <p>{bio}</p>
              ) : (
                <p>{bio.length > 150 ? `${bio.substring(0, 150)}...` : bio}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-4 text-center">
          <motion.button 
            className="px-4 py-2 bg-[#56b5bd] text-white rounded hover:bg-[#45a4ac] transition-colors"
            onClick={() => setShowFullBio(!showFullBio)}
            aria-label={`${showFullBio ? 'Show less about' : 'View more about'} ${name}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {showFullBio ? 'Show Less' : 'View More'}
          </motion.button>
        </div>
      </div>
    </div>
  );
} 