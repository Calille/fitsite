'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGoogle } from 'react-icons/fa';
import { useAnalytics } from '@/contexts/AnalyticsContext';

// Your actual Google Business information
const GOOGLE_BUSINESS_URL = "https://www.google.com/search?q=tp+health+and+fitness";
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/TP+Health+%26+Fitness+Ltd/@51.8241457,-0.3657021,17z/data=!4m8!3m7!1s0x487647d5dd8d8ec9:0xcf19393ba9922dca!8m2!3d51.8241457!4d-0.3657021!9m1!1b1!16s%2Fg%2F11r8v2qj3_?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D";
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/Ccotkqk7ORnPEAE/review";

interface GoogleReviewsProps {
  rating?: number;
  totalReviews?: number;
  showWriteReview?: boolean;
  variant?: 'default' | 'compact' | 'banner';
  className?: string;
}

const GoogleReviews: React.FC<GoogleReviewsProps> = ({
  rating = 5.0,
  totalReviews = 50,
  showWriteReview = true,
  variant = 'default',
  className = ''
}) => {
  const { trackInteraction } = useAnalytics();

  const handleReadReviewsClick = () => {
    trackInteraction('google_reviews_read_click', { 
      section: 'google_reviews',
      rating: rating,
      totalReviews: totalReviews
    });
  };

  const handleWriteReviewClick = () => {
    trackInteraction('google_reviews_write_click', { 
      section: 'google_reviews'
    });
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <span className="font-semibold">{rating} on Google</span>
        <span className="text-gray-600">({totalReviews} reviews)</span>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FaGoogle className="text-4xl text-[#4285F4]" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="font-bold text-lg">{rating}</span>
              </div>
              <p className="text-gray-600">Based on {totalReviews} Google reviews</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleReadReviewsClick}
              className="bg-[#4285F4] text-white px-4 py-2 rounded-md hover:bg-[#3367D6] transition-colors"
            >
              Read Reviews
            </a>
            {showWriteReview && (
              <a
                href={GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWriteReviewClick}
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors font-semibold"
              >
                Write Review
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="font-semibold">{rating} on Google</span>
          <span className="text-gray-600">({totalReviews} reviews)</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleReadReviewsClick}
            className="bg-white text-[#56b5bd] px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <FaGoogle className="text-[#4285F4]" />
            Read Google Reviews
          </a>
          {showWriteReview && (
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWriteReviewClick}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
            >
              Write a Review
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GoogleReviews; 