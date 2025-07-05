'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnalytics } from '@/contexts/AnalyticsContext';

const ClassSchedule = () => {
  const { trackInteraction } = useAnalytics();

  useEffect(() => {
    // LegitFit iframe height adjustment script
    const handleMessage = (e: MessageEvent) => {
      const height = +e.data?.height;
      const type = e.data?.type;
      const iframe = document.getElementById("lf-iframe-tphealthandfitness") as HTMLIFrameElement;
      const container = document.getElementById("lf-iframe-container-tphealthandfitness");
      
      if (container && e.data?.branding && !document.querySelector(".lf-injected")) {
        const brandingHtml = e.data.branding;
        container.insertAdjacentHTML('beforeend', brandingHtml);
      }
      
      if (!type || !type.match("lf-iframe-tphealthandfitness") || isNaN(height) || !iframe) {
        return;
      }
      
      Object.entries(e.data).forEach(([key, value]) => {
        (iframe as any)[key] = value;
      });
    };

    window.addEventListener("message", handleMessage, false);
    
    // Track when the schedule section is viewed
    trackInteraction('schedule_section_viewed', { section: 'class_schedule' });

    return () => {
      window.removeEventListener("message", handleMessage, false);
    };
  }, [trackInteraction]);

  return (
    <section className="section-padding">
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
          {/* LegitFit Schedule Integration */}
          <div id="lf-iframe-container-tphealthandfitness" className="w-full">
            <iframe 
              src="https://legitfit.com/p/timetable/tphealthandfitness?isIframe=true" 
              title="Schedule for TP Health and Fitness Ltd" 
              width="100%" 
              height="800" 
              style={{
                border: '1px solid rgba(0,0,0,0.12)', 
                borderRadius: '24px', 
                maxWidth: '600px', 
                margin: 'auto', 
                display: 'block'
              }}
              scrolling="no" 
              id="lf-iframe-tphealthandfitness"
              className="w-full"
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