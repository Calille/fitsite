'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInWrapper from '@/components/FadeInWrapper';
import { motion } from 'framer-motion';
import { useAnalytics } from '@/contexts/AnalyticsContext';

export default function SchedulePage() {
  const { trackInteraction } = useAnalytics();

  useEffect(() => {
    // Load Momence timetable script
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.setAttribute('host_id', '55732');
    script.setAttribute('teacher_ids', '[]');
    script.setAttribute('location_ids', '[]');
    script.setAttribute('tag_ids', '[]');
    script.setAttribute('default_filter', 'show-all');
    script.setAttribute('locale', 'en');
    script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
    
    // Only add script if it doesn't already exist
    if (!document.querySelector('script[src="https://momence.com/plugin/host-schedule/host-schedule.js"]')) {
      document.head.appendChild(script);
    }
    
    // Track page view
    trackInteraction('schedule_page_viewed', { page: 'schedule' });

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://momence.com/plugin/host-schedule/host-schedule.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [trackInteraction]);

  return (
    <FadeInWrapper>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
                Class Schedule
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Book your classes directly through our integrated scheduling system. View real-time availability and secure your spot in your favorite classes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              {/* Momence Timetable Integration */}
              <div 
                id="ribbon-schedule" 
                className="w-full rounded-3xl overflow-hidden shadow-lg bg-white"
                style={{
                  minHeight: '700px',
                  border: '1px solid rgba(0,0,0,0.12)'
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-8"
            >
              <p className="text-gray-600 text-sm">
                Having trouble with the schedule? <a href="/contact" className="text-[#56b5bd] hover:underline">Contact us</a> for assistance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Information Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#56b5bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">Easy Booking</h3>
                <p className="text-gray-600">
                  Book your classes instantly with our simple online system. No phone calls required.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#56b5bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">Real-Time Updates</h3>
                <p className="text-gray-600">
                  See live availability and get instant confirmations for all your bookings.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center md:col-span-2 lg:col-span-1"
              >
                <div className="w-16 h-16 bg-[#56b5bd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">Flexible Options</h3>
                <p className="text-gray-600">
                  Choose from group classes, personal training, or specialized programs that fit your schedule.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </FadeInWrapper>
  );
}
