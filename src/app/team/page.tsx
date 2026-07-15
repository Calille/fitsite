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
    image: '/team/teighlor.webp'
  },
  {
    name: 'Will',
    role: 'Team Leader',
    specialties: ['Nutrition', 'Fat Loss', 'Running'],
    bio: 'Will is a Personal Trainer and Fat Loss Lead at TP, where he helps clients achieve meaningful, lasting results through evidence-based nutrition coaching and structured training. His qualifications (PNL1, PFCA FFC1) underpin a clear, practical style of coaching, where he explains not just what to do, but why it works. Having lost over 30kg himself, Will understands the challenges his clients face and brings both empathy and accountability to every session. His achievements in endurance sport — from completing a marathon to finishing a half Ironman and currently training for a full Ironman — reinforce his commitment to resilience and performance. Born and raised in Harpenden, Will is proud to work in his hometown gym and support the local community. When he\'s not coaching or training, he enjoys running, cycling, and time outdoors.',
    image: '/team/will.webp'
  },
  {
    name: 'Sophie',
    role: 'Sports Therapist',
    specialties: ['Sports Therapy', 'Recovery', 'Movement & Wellbeing'],
    bio: 'Sophie studied Sports Therapy and Rehabilitation at the University of Kent, graduating with a 2:1 BSc (Hons). A former student at Sir John Lawes, she also holds an ITMMF first aid qualification. Working in and around Harpenden, Sophie has a genuine passion for helping people feel better in their bodies through a variety of therapeutic approaches. She is dedicated to supporting clients through recovery while improving movement and overall wellbeing. Outside of work, Sophie enjoys time with friends and family, going to the gym, trying new restaurants, and making the most of a couple of holidays.',
    image: '/team/sophie.webp'
  },
  {
    name: 'Ed',
    role: 'Junior Trainer',
    specialties: ['Personal Training'],
    bio: 'I am a Footballer for Harpenden Town first team and have a strong passion for health and fitness. I was a student at Roundwood Park school and have my FA level 1 football coaching badge and introduction to first aid. I have competed in many sports across the years, my main two being football and athletics where I competed at a national level at distances of 800m up to 5k. This experience in demanding sporting environments has given me an understanding of the discipline and consistency needed to stay fit. I enjoy helping people progress with their fitness and helping them see improvement. In my spare time I like to travel and run.',
    image: '/team/ed.webp'
  },
  {
    name: 'Jo',
    role: 'Personal Trainer',
    specialties: ['Personal Training'],
    bio: 'Bio coming soon.',
    image: '/team/jo.webp'
  },
  {
    name: 'Ben Webster',
    role: 'Personal Trainer',
    specialties: ['Personal Training'],
    bio: 'Bio coming soon.',
    image: '/team/ben-webster.webp'
  },
  {
    name: 'Kayleigh',
    role: 'Personal Trainer',
    specialties: ['Personal Training'],
    bio: 'Bio coming soon.',
    image: '/team/kayleigh.webp'
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
                href="/services" 
                className="bg-[#56b5bd] text-white hover:bg-[#45a4ac] px-6 py-3 rounded-md font-medium transition-all"
                onClick={() => handleCTAClick('Explore Personal Training', 'hero')}
              >
                Explore Personal Training
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 team-grid">
              {teamMembers.map((member) => (
                <TeamMemberCard 
                  key={member.name}
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
                  title: 'Personalisation',
                  description: 'Your fitness journey is unique. We create personalised plans tailored to your specific goals, preferences, and needs.'
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
                onClick={() => handleCTAClick('View Personal Training', 'footer')}
              >
                View Personal Training
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
