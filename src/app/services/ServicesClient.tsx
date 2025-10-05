'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaUsers, FaRunning, FaFire, FaChalkboardTeacher, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FadeInWrapper from '@/components/FadeInWrapper';
import AnimatedSection from '@/components/AnimatedSection';

// Extended service information
const services = [
  {
    id: 'one-to-one-pt',
    title: '1-1 PT – 8 Week Kickstart Programme',
    icon: <FaDumbbell className="text-4xl text-[#56b5bd]" />,
    description: "Our 8 Week Kickstart Programme provides personalised one-to-one training sessions tailored specifically to your goals, fitness level, and preferences. Work directly with an experienced trainer who will guide and motivate you through every step of your transformation journey.",
    features: [
      'Comprehensive fitness assessment',
      'Customised workout programmes',
      'Form correction and technique guidance',
      'Progress tracking and adjustments',
      'Nutritional guidance and accountability'
    ],
    image: '/img/personal-training.jpg',
    pricing: '£816 for 8 weeks'
  },
  {
    id: 'group-pt',
    title: 'Group PT',
    icon: <FaUsers className="text-4xl text-[#56b5bd]" />,
    description: "Experience the energy and motivation that comes from working out in a small group. Our group personal training sessions offer personalised attention in a supportive community setting, helping you stay motivated while achieving impressive results.",
    features: [
      'Small group sizes for personalised attention',
      'Cost-effective alternative to 1-1 training',
      'High-energy, motivating atmosphere',
      'Community support and accountability',
      'Varied and challenging workouts'
    ],
    image: '/group-fitness.jpg',
    pricing: '£33 per session'
  },
  {
    id: 'kickstart-group',
    title: '8 Week Kickstart Group Programme',
    icon: <FaRunning className="text-4xl text-[#56b5bd]" />,
    description: "Jump-start your fitness journey with our 8 Week Kickstart Group Programme. This structured group training experience combines effective workouts, supportive coaching, and the motivation of a like-minded community to help you establish sustainable healthy habits.",
    features: [
      'Progressive training plan over 8 weeks',
      'Supportive group environment',
      'Weekly progress check-ins',
      'Beginner-friendly modifications',
      'Results-focused approach'
    ],
    image: '/kickstart-group.jpg',
    pricing: '£600 for 8 weeks'
  },
  {
    id: 'fat-loss-programme',
    title: '8 Week Fat Loss Programme',
    icon: <FaFire className="text-4xl text-[#56b5bd]" />,
    description: "Transform your body with our comprehensive 8 Week Fat Loss Programme. Combining targeted training, nutrition guidance, and accountability, this specialised programme is designed to help you achieve sustainable fat loss results and develop healthy habits for life.",
    features: [
      'Customised fat loss training plan',
      'Nutritional guidance and meal planning',
      'Regular body composition assessments',
      'Support from experienced coaches',
      'Sustainable approach to weight management'
    ],
    image: '/fat-loss.jpg',
    pricing: '£399 for 8 weeks'
  },
  {
    id: 'specialty-workshops',
    title: 'Specialty Workshops',
    icon: <FaChalkboardTeacher className="text-4xl text-[#56b5bd]" />,
    description: "Deepen your knowledge and skills with our specialty workshops covering various aspects of fitness, nutrition, and wellness. These focused sessions provide in-depth learning opportunities led by expert coaches and guest specialists.",
    features: [
      'Technique-focused sessions',
      'Educational components',
      'Hands-on practice and feedback',
      'Take-home resources and plans',
      'Community learning environment'
    ],
    image: '/workshops.jpg',
    pricing: 'Tailored to each individual'
  },
  {
    id: 'recovery-wellness',
    title: 'Recovery & Wellness',
    icon: <FaHeartbeat className="text-4xl text-[#56b5bd]" />,
    description: "Recovery is just as important as training. Our recovery and wellness services include Pilates and mobility classes to help optimise your body's ability to recuperate, improve flexibility, reduce injury risk, and enhance overall wellbeing.",
    features: [
      'Pilates classes for core strength',
      'Mobility sessions for improved range of motion',
      'Guided relaxation techniques',
      'Injury prevention strategies',
      'Complement to your training routine'
    ],
    image: '/recovery.jpg',
    pricing: 'Tailored to each individual'
  }
];

// Array of rotating hero images (14 total images)
const heroImages = [
  '/hero1.webp',
  '/hero2.webp',
  '/hero3.webp',
  '/hero4.webp',
  '/hero5.webp',
  '/hero6.webp',
  '/hero7.webp',
  '/hero8.webp',
  '/hero9.webp',
  '/hero10.webp',
  '/hero11.webp',
  '/hero12.webp',
  '/hero13.webp',
  '/hero14.webp'
];

export default function ServicesClient() {
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

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <FadeInWrapper>
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
                      alt={`TP Health & Fitness Services ${index + 1}`}
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
                      alt={`TP Health & Fitness Services ${index + 1}`}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Our Services</h1>
            <p className="text-xl text-white max-w-2xl drop-shadow-md">
              Comprehensive fitness solutions tailored to your goals and needs.
            </p>
          </div>
        </section>

        {/* Services Introduction */}
        <AnimatedSection className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Fitness Journey With Us
              </h2>
              <p className="text-gray-600">
                At TP Health & Fitness, we believe in a holistic approach to fitness that addresses your unique needs, goals, and lifestyle. Our comprehensive services are designed to support you at every step of your journey, from personalised training to specialised programmes and recovery strategies.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.id}
                  delay={0.1 * index}
                  direction="up"
                  className="bg-gradient-to-br from-[#56b5bd] to-[#45a4ac] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-white transform hover:-translate-y-3 hover:scale-105"
                >
                  <div className="p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-6 flex justify-center text-6xl transform transition-transform duration-300 hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white mb-6 opacity-90 leading-relaxed">
                        {service.description.split('.')[0] + '.'}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-6">
                        <p className="font-semibold text-white">{service.pricing}</p>
                      </div>
                      <button 
                        onClick={() => scrollToSection(service.id)}
                        className="bg-white text-[#56b5bd] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center w-full group"
                      >
                        View Details 
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Detailed Service Sections */}
        {services.map((service, index) => (
          <AnimatedSection
            key={service.id}
            id={service.id}
            delay={0.2}
            direction={index % 2 === 0 ? 'left' : 'right'}
            className={`py-20 ${index % 2 === 0 ? 'bg-[#56b5bd]' : 'bg-[#45a4ac]'} text-white`}
          >
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6 flex justify-center transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-white opacity-90 mb-8 max-w-3xl mx-auto">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-6">Key Features:</h3>
                  <ul className="space-y-3 max-w-2xl mx-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start justify-center text-center transform hover:translate-x-2 transition-transform duration-300">
                        <span className="text-white mr-3">✓</span>
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#56b5bd] p-4 rounded-lg mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
                  <p className="font-semibold text-white">Pricing: <span className="text-white">{service.pricing}</span></p>
                </div>
                
                <Link 
                  href="/book"
                  className="inline-block bg-white text-[#56b5bd] hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Book Now <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* Call to Action */}
        <AnimatedSection className="section-padding bg-[#56b5bd] text-white" delay={0.3}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our expert trainers are ready to help you achieve your fitness goals. Contact us today to schedule a consultation.
            </p>
            <Link 
              href="/contact" 
              className="relative overflow-hidden group bg-white text-[#56b5bd] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all inline-block transform hover:scale-105 duration-300"
            >
              <span className="relative z-10">Get Started Today</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#56b5bd] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </FadeInWrapper>
  );
}
