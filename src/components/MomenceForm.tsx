'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const MomenceForm = () => {
  useEffect(() => {
    // Check if script is already loaded to prevent duplicates
    if (document.getElementById('momence-plugin-lead-form-src')) {
      return;
    }

    // Load Momence lead form script
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.id = 'momence-plugin-lead-form-src';
    script.setAttribute('host_id', '55732');
    script.setAttribute('fields', 'firstName,lastName,email,phoneNumber');
    script.setAttribute('token', 'q27n0m0XWP');
    script.setAttribute('country_code', 'gb');
    script.setAttribute('data-field-def', '{"firstName":{"type":"text","label":"First name","required":true},"lastName":{"type":"text","label":"Last name","required":true},"email":{"type":"email","label":"Email","required":true},"phoneNumber":{"type":"phone-number","label":"Phone number","required":true}}');
    script.src = 'https://momence.com/plugin/lead-form/lead-form.js';
    
    script.onload = () => {
      console.log('Momence lead form script loaded successfully');
    };
    
    script.onerror = () => {
      console.error('Failed to load Momence lead form script');
      // Show fallback form
      const fallback = document.getElementById('momence-form-fallback');
      if (fallback) {
        fallback.classList.remove('hidden');
      }
    };
    
    document.head.appendChild(script);

    // Check if form loaded after a delay
    const checkFormLoading = setTimeout(() => {
      const formContainer = document.getElementById('momence-plugin-lead-form');
      const fallback = document.getElementById('momence-form-fallback');
      
      if (formContainer && fallback && formContainer.children.length === 0) {
        // Form didn't load, show fallback
        fallback.classList.remove('hidden');
        console.log('Momence form fallback activated');
      }
    }, 5000);

    // Cleanup function
    return () => {
      clearTimeout(checkFormLoading);
      const existingScript = document.getElementById('momence-plugin-lead-form-src');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your fitness journey? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div id="momence-plugin-lead-form"></div>
            
            {/* Fallback contact form */}
            <div id="momence-form-fallback" className="hidden">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd]"
                    placeholder="Tell us about your fitness goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#56b5bd] text-white py-3 px-4 rounded-md hover:bg-[#45a4ac] transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MomenceForm;
