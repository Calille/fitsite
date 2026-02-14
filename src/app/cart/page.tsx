'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGift, FiCreditCard, FiHeart } from 'react-icons/fi';
import { useAnalytics } from '@/contexts/AnalyticsContext';

export default function ShopPage() {
  const { trackInteraction } = useAnalytics();

  // Set page title for SEO
  useEffect(() => {
    document.title = 'Gift Cards | TP Health & Fitness Coaching';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Give the gift of health and fitness with TP Health & Fitness gift cards. Perfect for personal training, group classes, and wellness programs.');
    }

    // Track page view
    trackInteraction('gift_cards_page_view');

    // Momence gift card iframe resize script
    const handleMessage = (e: MessageEvent) => {
      const height = +e.data?.height;
      const type = e.data?.type;
      const iframe = document.querySelector("#iframe_gift_cards_55732") as HTMLIFrameElement;

      if (!type || !type.match("iframe_gift_cards_55732_resize") || isNaN(height) || !iframe) {
        return;
      }

      iframe.height = height + "px";
    };

    // Check iframe loading after a delay
    const checkIframeLoading = () => {
      setTimeout(() => {
        const iframe = document.querySelector('#iframe_gift_cards_55732') as HTMLIFrameElement;
        const fallback = document.querySelector('#gift-card-fallback') as HTMLElement;
        
        if (iframe && fallback) {
          try {
            // Check if iframe content is accessible
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (!iframeDoc || iframeDoc.body.children.length === 0) {
              // Iframe appears empty, show fallback
              iframe.style.display = 'none';
              fallback.classList.remove('hidden');
              trackInteraction('gift_card_iframe_fallback_shown');
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

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#56b5bd] to-[#45a4ac] text-white">
          <div className="container-custom">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FiGift className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Give the Gift of <span className="text-white font-extrabold">Fitness</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Perfect for birthdays, holidays, or any special occasion. Our gift cards can be used for personal training, group classes, and all our wellness programs.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <FiHeart className="w-5 h-5 mr-2" />
                  No Expiry Date
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <FiCreditCard className="w-5 h-5 mr-2" />
                  Secure Purchase
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <FiGift className="w-5 h-5 mr-2" />
                  Digital & Physical Options
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Momence Gift Cards */}
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
                Choose Your <span className="text-[#56b5bd]">Gift Card</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select the perfect amount for your loved one's fitness journey. All gift cards include flexible usage and expert guidance.
              </p>
            </motion.div>

            {/* Momence Gift Card Plugin */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <iframe
                  id="iframe_gift_cards_55732"
                  src="https://momence.com/gcc/55732"
                  style={{ width: '100%', border: '0px', minHeight: '600px' }}
                  allowFullScreen={true}
                  scrolling="no"
                  title="TP Health & Fitness Gift Cards"
                  allow="payment; camera; microphone; geolocation"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                  onLoad={() => {
                    console.log('Gift card iframe loaded successfully');
                    trackInteraction('gift_card_iframe_loaded');
                  }}
                  onError={() => {
                    console.error('Gift card iframe failed to load');
                    trackInteraction('gift_card_iframe_error');
                  }}
                />
                {/* Fallback content */}
                <div id="gift-card-fallback" className="hidden">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-4">Having trouble purchasing a gift card?</h3>
                    <p className="text-gray-600 mb-6">If the gift card system doesn't load, please contact us directly to purchase.</p>
                    <a 
                      href="/contact" 
                      className="bg-[#56b5bd] text-white px-6 py-3 rounded-lg hover:bg-[#45a4ac] transition-colors"
                    >
                      Contact Us for Gift Cards
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose Our <span className="text-[#56b5bd]">Gift Cards?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Flexible Usage',
                  description: 'Gift cards can be used for any of our services - personal training, group classes, or specialized programs.',
                  icon: <FiGift className="w-8 h-8" />
                },
                {
                  title: 'Secure & Reliable',
                  description: 'Powered by Momence with secure payment processing and digital delivery.',
                  icon: <FiCreditCard className="w-8 h-8" />
                },
                {
                  title: 'Perfect for Anyone',
                  description: 'Whether they\'re a fitness beginner or enthusiast, our gift cards suit all fitness levels.',
                  icon: <FiHeart className="w-8 h-8" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center bg-white p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-[#56b5bd] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#56b5bd] text-white text-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Gift Cards?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Need help choosing the right gift card or have questions about our services? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-[#56b5bd] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all inline-block"
                  onClick={() => trackInteraction('gift_card_contact_click')}
                >
                  Contact Us
                </Link>
                <Link 
                  href="/services" 
                  className="bg-[#45a4ac] text-white hover:bg-[#3a8c93] font-bold py-3 px-8 rounded-md transition-all inline-block"
                  onClick={() => trackInteraction('gift_card_services_click')}
                >
                  View Personal Training
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 