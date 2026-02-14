'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInWrapper from '@/components/FadeInWrapper';
import { motion } from 'framer-motion';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { FiCalendar, FiClock, FiUser, FiCheckCircle } from 'react-icons/fi';

export default function BookingPage() {
  const { trackInteraction } = useAnalytics();

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Book Appointment | TP Health & Fitness Coaching';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book your consultation or appointment with TP Health & Fitness. Schedule personal training sessions, consultations, and fitness assessments.');
    }

    // Track page view
    trackInteraction('booking_page_view');

    // Momence appointments iframe resize script
    const handleMessage = (e: MessageEvent) => {
      const height = +e.data?.height;
      const type = e.data?.type;
      const iframe = document.querySelector("#iframe_appointments_55732") as HTMLIFrameElement;

      if (!type || !type.match("iframe_appointments_55732_resize") || isNaN(height) || !iframe) {
        return;
      }

      iframe.height = height + "px";
    };

    // Check iframe loading after a delay
    const checkIframeLoading = () => {
      setTimeout(() => {
        const iframe = document.querySelector('#iframe_appointments_55732') as HTMLIFrameElement;
        const fallback = document.querySelector('#booking-fallback') as HTMLElement;
        
        if (iframe && fallback) {
          try {
            // Check if iframe content is accessible
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (!iframeDoc || iframeDoc.body.children.length === 0) {
              // Iframe appears empty, show fallback
              iframe.style.display = 'none';
              fallback.classList.remove('hidden');
              trackInteraction('booking_iframe_fallback_shown');
            }
          } catch (error) {
            // Cross-origin restrictions prevent access, which is normal
            console.log('Iframe cross-origin restrictions detected (normal)');
          }
        }
      }, 5000); // Wait 5 seconds for iframe to load
    };

    window.addEventListener("message", handleMessage, false);
    checkIframeLoading();

    return () => {
      window.removeEventListener("message", handleMessage, false);
    };
  }, [trackInteraction]);

  // Separate useEffect for Momence Schedule Plugin to ensure it loads after DOM is ready
  useEffect(() => {
    const loadScheduleScript = () => {
      // Wait for the ribbon-schedule div to be available
      const checkDiv = setInterval(() => {
        const ribbonDiv = document.getElementById('ribbon-schedule');
        if (ribbonDiv) {
          clearInterval(checkDiv);
          
          const existingScript = document.getElementById('momence-schedule-script');
          if (!existingScript) {
            const script = document.createElement('script');
            script.id = 'momence-schedule-script';
            script.async = true;
            script.type = 'module';
            script.setAttribute('host_id', '55732');
            script.setAttribute('teacher_ids', '[278523]');
            script.setAttribute('location_ids', '[]');
            script.setAttribute('tag_ids', '[]');
            script.setAttribute('default_filter', 'show-all');
            script.setAttribute('locale', 'en');
            script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
            
            // Append to the ribbon-schedule div's parent
            ribbonDiv.parentElement?.appendChild(script);
            console.log('Momence Schedule script loaded');
          }
        }
      }, 100);

      // Cleanup after 5 seconds if div not found
      setTimeout(() => clearInterval(checkDiv), 5000);
    };

    loadScheduleScript();

    return () => {
      // Clean up the script when component unmounts
      const script = document.getElementById('momence-schedule-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <FadeInWrapper>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-8 md:py-10 bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <FiCalendar className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Book Your <span className="text-white font-extrabold">Appointment</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Schedule your consultation, personal training session, or fitness assessment. 
                Our expert trainers are ready to help you achieve your fitness goals.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 mr-2" />
                  Free Consultation
                </div>
                <span className="hidden sm:block">•</span>
                <div className="flex items-center">
                  <FiClock className="w-5 h-5 mr-2" />
                  Flexible Scheduling
                </div>
                <span className="hidden sm:block">•</span>
                <div className="flex items-center">
                  <FiUser className="w-5 h-5 mr-2" />
                  Expert Trainers
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Schedule Your <span className="text-[#56b5bd]">Appointment</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose your preferred date, time, and service type. Our booking system makes it easy to secure your spot.
              </p>
            </motion.div>

            {/* Momence Appointments Plugin */}
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                <iframe
                  id="iframe_appointments_55732"
                  src="https://momence.com/appointments/55732"
                  style={{ width: '100%', border: '0px', minHeight: '700px' }}
                  allowFullScreen={true}
                  scrolling="no"
                  title="TP Health & Fitness Appointments"
                  allow="payment; camera; microphone; geolocation"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                  onLoad={() => {
                    console.log('Booking iframe loaded successfully');
                    trackInteraction('booking_iframe_loaded');
                  }}
                  onError={() => {
                    console.error('Booking iframe failed to load');
                    trackInteraction('booking_iframe_error');
                  }}
                />
                {/* Fallback content */}
                <div id="booking-fallback" className="hidden">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-4">Having trouble with booking?</h3>
                    <p className="text-gray-600 mb-6">If the booking system doesn't load, please contact us directly.</p>
                    <a 
                      href="/contact" 
                      className="bg-[#56b5bd] text-white px-6 py-3 rounded-lg hover:bg-[#45a4ac] transition-colors"
                    >
                      Contact Us to Book
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Momence Schedule Plugin */}
            <motion.div
              className="max-w-5xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Class <span className="text-[#56b5bd]">Schedule</span>
              </h3>
              <div className="bg-gray-50 p-6 rounded-2xl shadow-lg min-h-[400px]">
                <div id="ribbon-schedule"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Information Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                What to <span className="text-[#56b5bd]">Expect</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Initial Consultation',
                  description: 'Discuss your fitness goals, health history, and preferences with our expert trainers.',
                  icon: <FiUser className="w-8 h-8" />,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'Fitness Assessment',
                  description: 'Comprehensive evaluation of your current fitness level and movement patterns.',
                  icon: <FiCheckCircle className="w-8 h-8" />,
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'Custom Plan',
                  description: 'Receive a personalized fitness plan tailored to your goals and schedule.',
                  icon: <FiCalendar className="w-8 h-8" />,
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white p-8 rounded-xl shadow-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-r ${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Contact CTA */}
        <section className="section-padding bg-[#56b5bd] text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Booking?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Having trouble with the booking system or have specific questions? We're here to help!
              </p>
              <a 
                href="/contact" 
                className="bg-white text-[#56b5bd] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all inline-block"
                onClick={() => trackInteraction('booking_contact_click')}
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </FadeInWrapper>
  );
}
