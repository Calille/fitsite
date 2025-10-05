'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Array of rotating hero images (14 total images - shuffled for contact page)
const heroImages = [
  '/hero12.webp',
  '/hero4.webp',
  '/hero9.webp',
  '/hero1.webp',
  '/hero13.webp',
  '/hero6.webp',
  '/hero2.webp',
  '/hero10.webp',
  '/hero7.webp',
  '/hero14.webp',
  '/hero3.webp',
  '/hero8.webp',
  '/hero11.webp',
  '/hero5.webp'
];

export default function ContactClient() {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Preload all images on component mount
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = heroImages.length;

    const preloadImages = () => {
      heroImages.forEach((src) => {
        const img = document.createElement('img');
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setAllImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setAllImagesLoaded(true);
          }
        };
        img.src = src;
      });
    };

    preloadImages();

  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center bg-gray-900 text-white overflow-hidden">
          {/* Loading state */}
          {!allImagesLoaded && (
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/30 to-transparent animate-pulse"></div>
            </div>
          )}
          
          {/* Continuous Scrolling Images */}
          {allImagesLoaded && (
            <div className="absolute inset-0 z-0">
              {/* First set of images */}
              <div className="absolute inset-0 flex animate-scroll-left">
                {heroImages.map((imageSrc, index) => (
                  <div key={`first-${index}`} className="relative flex-shrink-0 w-1/3 h-full">
                    <Image
                      src={imageSrc}
                      alt={`TP Health & Fitness Contact ${index + 1}`}
                      fill
                      priority={index < 3}
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>

              {/* Second set of images for seamless loop */}
              <div className="absolute inset-0 flex animate-scroll-left-delayed">
                {heroImages.map((imageSrc, index) => (
                  <div key={`second-${index}`} className="relative flex-shrink-0 w-1/3 h-full">
                    <Image
                      src={imageSrc}
                      alt={`TP Health & Fitness Contact ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 z-5 bg-black/40"></div>
          
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Contact Us</h1>
            <p className="text-xl text-white max-w-2xl drop-shadow-md">
              We're here to help you on your fitness journey. Let us know how we can assist you.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Find Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Located in the heart of the community, our modern fitness studio is easily accessible and equipped with everything you need for your fitness journey.
              </p>
            </div>
            
            {/* Map and Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                  {/* Google Maps Embed - Replace with your actual location */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.0154087481437!2d-0.3682770230018566!3d51.824148987514235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487647d5dd8d8ec9%3A0xcf19393ba9922dca!2sTP%20Health%20%26%20Fitness%20Ltd!5e0!3m2!1sen!2suk!4v1755027004805!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TP Health & Fitness Location"
                  ></iframe>
                </div>
                
                {/* Map Instructions */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Need directions?</strong> Click on the map above to open in Google Maps for turn-by-turn navigation.
                  </p>
                </div>
              </div>
              
              {/* Location Info */}
              <div className="lg:col-span-1">
                <div className="bg-[#56b5bd] text-white p-8 rounded-lg h-full">
                  <h3 className="text-2xl font-bold mb-6">Location & Hours</h3>
                  
                  {/* Address */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 flex items-center">
                      Address
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      TP Health & Fitness<br />
                      Harpenden, Hertfordshire<br />
                      AL5 3BL<br />
                      United Kingdom
                    </p>
                  </div>
                  
                  {/* Opening Hours */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 flex items-center">
                      Opening Hours
                    </h4>
                    <div className="text-white/90 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday:</span>
                        <span>06:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday:</span>
                        <span>06:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wednesday:</span>
                        <span>06:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday:</span>
                        <span>06:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday:</span>
                        <span>06:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>08:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>By Appointment</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 flex items-center">
                       Contact
                    </h4>
                    <div className="text-white/90 space-y-1">
                      <p>Phone: <a href="tel:+447447333743" className="hover:underline">+44 7447 333743</a></p>
                      <p>Email: info@tphealthfitness.com</p>
                    </div>
                  </div>
                  
                  {/* Parking Info */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      Parking
                    </h4>
                    <p className="text-white/90 text-sm">
                      Free parking available on-site. Additional street parking nearby.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
