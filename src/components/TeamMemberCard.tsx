'use client';

import { useState } from 'react';
import Image from 'next/image';
// Animations removed for better performance
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-gray-800 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-80 w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={image}
            alt={`${name} - ${role} at TP Health & Fitness`}
            fill
            className="object-cover"
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyArKvnOPPkn+jRVoejq3n8C6xCpghyQzk4LvQfgmJOFTfcxr5rZlF5seuMV"
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
            className="px-6 py-2 bg-[#56b5bd] text-white rounded-md hover:bg-[#45a4ac] transition-colors font-medium shadow-sm hover:shadow-md"
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