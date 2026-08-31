'use client';

/**
 * RETAINED UNREFERENCED — class schedule taken down (client request, Aug 2026).
 *
 * This component embeds the Momence class timetable (iframe to
 * https://momence.com/u/tp-health-&-fitness-coaching-AZnJNB). It is no longer
 * imported anywhere so the schedule does not appear on the site. Restore by
 * importing it again (e.g. on the homepage or a /schedule route).
 *
 * Do not delete: the booking flow on /book uses a separate Momence appointments
 * iframe and must stay in place.
 */

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnalytics } from '@/contexts/AnalyticsContext';

const ClassSchedule = () => {
  const { trackInteraction } = useAnalytics();

  useEffect(() => {
    // Track when the schedule section is viewed
    trackInteraction('schedule_section_viewed', { section: 'class_schedule' });
  }, [trackInteraction]);

  return (
    <section id="schedule" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Weekly Class Schedule</h2>
          <p className="text-black">
            Book your classes directly through our integrated scheduling system. View real-time availability and secure your spot in your favorite classes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Momence Timetable Integration */}
          <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-white">
            <iframe
              src="https://momence.com/u/tp-health-&-fitness-coaching-AZnJNB"
              className="w-full border-0"
              style={{ minHeight: '700px' }}
              title="TP Health & Fitness Class Schedule"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 text-sm">
            Having trouble with the schedule? <a href="/contact" className="text-[#56b5bd] hover:underline">Contact us</a> for assistance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassSchedule; 