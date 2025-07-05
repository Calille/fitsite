'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnalytics } from '@/contexts/AnalyticsContext';

const PremiumStudio = () => {
  const { trackInteraction } = useAnalytics();

  const handleStudioTourClick = () => {
    trackInteraction('premium_studio_3d_tour_click', { section: 'premium_studio' });
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Premium Studio</h2>
          <p className="text-gray-600">
            Take a virtual 3D tour of our state-of-the-art facility featuring cutting-edge equipment and an immersive training environment designed to elevate your fitness experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Matterport 3D Tour */}
          <div className="relative w-full aspect-video bg-gray-900">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://my.matterport.com/show/?m=7Uf7X2hu1DX" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
              className="absolute inset-0 w-full h-full rounded-lg"
              title="Premium Studio 3D Tour"
              onClick={handleStudioTourClick}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">360° Virtual Tour</h3>
            <p className="text-gray-600">Explore every corner of our facility with our immersive 3D walkthrough</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Equipment</h3>
            <p className="text-gray-600">State-of-the-art fitness equipment from leading manufacturers</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Facilities</h3>
            <p className="text-gray-600">Spacious, well-designed training areas optimized for your workout</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumStudio; 