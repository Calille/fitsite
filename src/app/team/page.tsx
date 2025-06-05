'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaRunning, FaAppleAlt, FaUserGraduate, FaHandHoldingHeart } from 'react-icons/fa';
import TeamMemberCard from '@/components/TeamMemberCard';
import { useAnalytics } from '@/contexts/AnalyticsContext';

// Team member data
const teamMembers = [
  {
    name: 'Teighlor',
    role: 'Founder & Director, Head Coach',
    specialties: ['Sports Coaching', 'Strength Training', 'Community Building'],
    bio: 'Originally from Harpenden, Teighlor played women\'s football for 15 years at a high level and attended Loughborough University where she competed in elite sport. After working in the corporate world, she followed her passion for sport, health and fitness by founding TP during the pandemic. She coaches girls\' football, plays tennis at Townsend, and loves food, training and short getaways!',
    image: '/team/teighlor.jpg'
  },
  {
    name: 'Sarah',
    role: 'Personal Trainer',
    specialties: ['Sports Science', 'Injury Rehabilitation', 'Endurance Training'],
    bio: 'Sarah is a level 3 personal trainer and qualified as a coach 6 years ago. Sarah studied sports science and music at Birmingham University. Previously an English Universities hockey player, she is now a keen skier, sailor, golfer, cyclist and trail runner. Having suffered from several chronic injuries in recent years, Sarah understands the physical restrictions and mental frustration of not being able to participate fully in sport and exercise. Her spare time is spent drinking flat whites and relaxing with her dogs!',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Ben',
    role: 'Personal Trainer',
    specialties: ['Rugby Training', 'Strength Building', 'Multi-generational Coaching'],
    bio: 'Our newest trainer Ben, joined TP in January 2024. He is a first team rugby player at Old Albanians and has a strong passion for health fitness and wellbeing. Having trained himself since his early teens, Ben is a physically strong and dedicated athlete. He has a calm, humble manor and is very patient as a coach. At 19, Ben is very mature and is a natural coach! Ben works with clients in their 80s to those in their teenage years and is very adaptable and knowledgable for such a short time in the industry. He rides his bike in his spare time and likes to travel!',
    image: '/team/ben.jpg'
  },
  {
    name: 'Will',
    role: 'Personal Trainer',
    specialties: ['Nutrition', 'Fat Loss', 'Running'],
    bio: 'Will joined TP in the Summer of 24 after traveling in Australia. He is Harpenden born and bred, going to school at Roundwood. Will is a keen runner, gym goer and walker, He is very knowledgeable with nutrition and accountability having helped many of our fat loss clients achieve amazing results. Will is extremely personable, very kind and has a friendly approach to training.',
    image: '/team/will.jpg'
  },
  {
    name: 'Seb',
    role: 'Personal Trainer',
    specialties: ['Rugby Training', 'Strength & Conditioning', 'Wellness Coaching'],
    bio: 'Seb grew up in Fareham on the South Coast and went to Hartpury University to play professional rugby, where he fell in love with fitness and training! He moved up to St Albans in September 2022 where he completed his PT course and then joined TP in Summer 2023. Seb is dedicated to helping others and follows his Mum who was an Osteopath, he has a strong passion to impact people\'s lives through health, well-being and fitness.',
    image: '/team/seb.jpg'
  }
];

export default function TeamPage() {
  const { trackInteraction } = useAnalytics();

  // Track page view
  useEffect(() => {
    trackInteraction('team_page_view');
  }, [trackInteraction]);

  const handleCTAClick = (buttonType: string, location: string) => {
    trackInteraction('team_cta_click', { button: buttonType, location });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center bg-white text-gray-800">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/logo.png"
              alt="TP Health & Fitness Team"
              fill
              priority
              className="object-contain opacity-10"
            />
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-800">Discover Your </span>
              <span className="text-[#56b5bd]">Strength.</span>
              <span className="text-gray-800"> Build Your </span>
              <span className="text-[#56b5bd]">Community.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              More than just a gym, TP Health & Fitness Coaching is a community dedicated to helping you achieve your fitness goals through personalized training, group classes, and specialized programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/schedule" 
                className="bg-[#56b5bd] text-white hover:bg-[#45a4ac] px-6 py-3 rounded-md font-medium transition-all"
                onClick={() => handleCTAClick('View Our Schedule', 'hero')}
              >
                View Our Schedule
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-[#56b5bd] text-[#56b5bd] hover:bg-[#f0f9fa] px-6 py-3 rounded-md font-medium transition-all"
                onClick={() => handleCTAClick('Explore Services', 'hero')}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-padding bg-white text-gray-800">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gray-800">Meet Our </span>
                <span className="text-[#56b5bd]">Coaches</span>
              </h2>
              <p className="text-gray-600">
                Our coaches bring diverse backgrounds and specializations to create a comprehensive approach to fitness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard 
                  key={index}
                  name={member.name}
                  role={member.role}
                  specialties={member.specialties}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Coaching Philosophy</h2>
              <p className="text-gray-600">
                At TP Health & Fitness, our team is united by a shared commitment to these core coaching principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaDumbbell className="text-4xl text-[#56b5bd]" />,
                  title: 'Expertise',
                  description: 'Our coaches maintain the highest levels of certification and continually expand their knowledge to provide you with the best guidance.'
                },
                {
                  icon: <FaUserGraduate className="text-4xl text-[#56b5bd]" />,
                  title: 'Education',
                  description: 'We believe in educating our clients, empowering you with the knowledge to make informed decisions about your health and fitness.'
                },
                {
                  icon: <FaAppleAlt className="text-4xl text-[#56b5bd]" />,
                  title: 'Holistic Approach',
                  description: 'We address all aspects of wellness - from exercise and nutrition to recovery and mindset - for comprehensive results.'
                },
                {
                  icon: <FaHandHoldingHeart className="text-4xl text-[#56b5bd]" />,
                  title: 'Personalization',
                  description: 'Your fitness journey is unique. We create personalized plans tailored to your specific goals, preferences, and needs.'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-sm text-center h-full"
                >
                  <div className="flex justify-center items-center h-16 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Professional Certifications</h2>
              <p className="text-black">
                Our team holds certifications from the industry's most respected organizations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {/* Placeholder for certification logos */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-sm w-full flex items-center justify-center h-24">
                  <span className="text-gray-400 text-center">Certification Logo</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#56b5bd] text-white text-center">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Our Expert Team?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Take the first step toward your fitness goals with personalized coaching from our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-white text-[#56b5bd] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all inline-block"
                onClick={() => handleCTAClick('View Our Services', 'footer')}
              >
                View Our Services
              </Link>
              <Link 
                href="/contact" 
                className="bg-[#45a4ac] text-white hover:bg-[#3a8c93] font-bold py-3 px-8 rounded-md transition-all inline-block"
                onClick={() => handleCTAClick('Book a Consultation', 'footer')}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 