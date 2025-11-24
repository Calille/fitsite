'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    } catch (error) {
      setSubmitError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-white text-gray-800">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Get In Touch</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Have questions about our services, memberships, or want to schedule a visit? 
              Fill out the form and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#56b5bd] rounded-full p-2 sm:p-3 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <FiPhone className="text-white text-lg sm:text-xl" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+44 7123 456789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#56b5bd] rounded-full p-2 sm:p-3 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <FiMail className="text-white text-lg sm:text-xl" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600 break-words">info@tphealthfitness.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#56b5bd] rounded-full p-2 sm:p-3 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <FiMapPin className="text-white text-lg sm:text-xl" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold">Location</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Harpenden, Hertfordshire<br />
                    AL5 3BL, England<br />
                    United Kingdom
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#56b5bd] rounded-full p-2 sm:p-3 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <FiClock className="text-white text-lg sm:text-xl" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base sm:text-lg font-semibold">Hours</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Mon  06:00 – 21:00<br />
                    Tue  06:00 – 21:00<br />
                    Wed  06:00 – 21:00<br />
                    Thu  06:00 – 21:00<br />
                    Fri  06:00 – 19:00<br />
                    Sat  08:00 – 14:00<br />
                    Sun  By Appointment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
              {submitSuccess ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-sm sm:text-base">Thank you for reaching out. We'll be in touch with you shortly.</p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn-primary min-h-[44px] touch-manipulation"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd] min-h-[44px]"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd] min-h-[44px]"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd] min-h-[44px]"
                        placeholder="+44 7123 456789"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd] min-h-[44px]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Membership">Membership Information</option>
                      <option value="Personal Training">Personal Training</option>
                      <option value="Class Information">Class Information</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#56b5bd] resize-y"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm sm:text-base">
                      {submitError}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full min-h-[44px] touch-manipulation text-base ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 