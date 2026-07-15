'use client';

import { useState } from 'react';
import Image from 'next/image';
// Animations removed for better performance
import { useAnalytics } from '@/contexts/AnalyticsContext';

// Custom shimmer placeholder for team member images
const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#56b5bd" offset="20%" />
        <stop stop-color="#e0e0e0" offset="50%" />
        <stop stop-color="#56b5bd" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#e0e0e0" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;

// Helper function to create base64 encoded shimmer placeholder
const toBase64 = (str: string) => {
  if (typeof window === 'undefined') {
    // Server-side fallback
    return Buffer.from(str).toString('base64');
  }
  try {
    return window.btoa(str);
  } catch (e) {
    return Buffer.from(str).toString('base64');
  }
};

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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
        {!imageError ? (
          <Image
            src={image}
            alt={`${name} - ${role} at TP Health & Fitness`}
            width={400}
            height={320}
            className="object-cover hover:scale-105 transition-transform duration-300 w-full h-full"
            onError={handleImageError}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 320))}`}
          />
        ) : (
          // Fallback when image fails to load
          <div className="w-full h-full bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] flex items-center justify-center rounded-t-lg">
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
          {showFullBio ? (
            <p className="leading-relaxed">{bio}</p>
          ) : (
            <p className="leading-relaxed">
              {bio.length > 150 ? `${bio.substring(0, 150)}...` : bio}
            </p>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 bg-[#56b5bd] text-white rounded-lg hover:bg-[#45a4ac] transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:scale-105"
            onClick={handleViewMore}
            aria-label={`${showFullBio ? 'Show less about' : 'View more about'} ${name}`}
          >
            {showFullBio ? '← Show Less' : 'View More →'}
          </button>
        </div>
      </div>
    </div>
  );
} 