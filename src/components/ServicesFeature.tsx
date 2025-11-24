'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDumbbell, FaUsers, FaFire } from 'react-icons/fa';
import { useAnalytics } from '@/contexts/AnalyticsContext';

const services = [
  {
    icon: <FaDumbbell className="text-4xl text-[#56b5bd]" />,
    title: 'One to One PT',
    description: 'Personalised training sessions tailored to your specific goals with dedicated expert coaches.',
  },
  {
    icon: <FaUsers className="text-4xl text-[#56b5bd]" />,
    title: 'Group Classes',
    description: 'High-energy group workouts that foster community while challenging your limits in a supportive environment.',
  },
  {
    icon: <FaFire className="text-4xl text-[#56b5bd]" />,
    title: 'Fat Loss Programme',
    description: 'Comprehensive approach combining training, nutrition guidance, and accountability for sustainable fat loss results.',
  },
];

const ServicesFeature = () => {
  const { trackInteraction } = useAnalytics();

  const handleServiceClick = (serviceName: string) => {
    trackInteraction('service_card_click', { service: serviceName });
  };

  return (
    <section className="section-padding bg-[#56b5bd] text-white">
      <div className="container-custom px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white px-4">Our Premium Services</h2>
          <p className="text-sm sm:text-base text-white px-4">
            We offer comprehensive fitness solutions designed to help you achieve your goals, whether you're just starting your fitness journey or looking to reach new heights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#45a4ac] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="p-6 sm:p-8 text-white text-center h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 sm:mb-6 flex justify-center text-4xl sm:text-5xl transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white text-[#45a4ac] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center group min-h-[44px] touch-manipulation text-sm sm:text-base"
                  >
                    Learn more <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link href="/services" className="bg-white text-[#56b5bd] hover:bg-gray-100 py-3 px-6 sm:px-8 rounded-md transition-all inline-block font-bold min-h-[44px] flex items-center justify-center touch-manipulation text-sm sm:text-base">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFeature; 