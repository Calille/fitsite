import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';

export const metadata = {
  title: 'About Us | TP Health & Fitness Coaching',
  description: 'Learn about TP Health & Fitness Coaching, our mission, values, and the passionate team behind our fitness community.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center bg-gradient-to-r from-black to-gray-900 text-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-hero.jpg"
              alt="About TP Health & Fitness"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We're more than just a fitness studio – we're a community committed to helping you become your strongest self.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    TP Health & Fitness Coaching was founded in 2020 by a group of passionate fitness professionals who shared a vision: to create a fitness environment that emphasizes community, strength, and personal growth.
                  </p>
                  <p>
                    Inspired by a holistic approach to wellness, we believe in an integrated approach to fitness that nurtures both body and mind.
                  </p>
                  <p>
                    What started as a small studio with just a handful of members has grown into a thriving fitness community, but our core values remain the same – we're committed to providing personalized, effective training in a supportive, inclusive environment.
                  </p>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/about-story.jpg"
                  alt="TP Health & Fitness studio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-[#56b5bd] text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Core Values</h2>
              <p className="text-white">
                These principles guide everything we do at TP Health & Fitness, from how we design our programs to how we interact with our members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaDumbbell className="text-4xl text-[#56b5bd]" />,
                  title: 'Excellence',
                  description: 'We strive for excellence in all aspects of our service, from the quality of our instruction to the cleanliness of our facilities.'
                },
                {
                  icon: <FaUsers className="text-4xl text-[#56b5bd]" />,
                  title: 'Community',
                  description: 'We foster a supportive community where members encourage each other and celebrate successes together.'
                },
                {
                  icon: <FaTrophy className="text-4xl text-[#56b5bd]" />,
                  title: 'Achievement',
                  description: 'We believe in setting ambitious goals and providing the tools and support needed to achieve them.'
                },
                {
                  icon: <FaHeart className="text-4xl text-[#56b5bd]" />,
                  title: 'Inclusivity',
                  description: 'We welcome individuals of all fitness levels, backgrounds, and abilities, creating a space where everyone belongs.'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-[#45a4ac] p-8 rounded-lg shadow-md text-center text-white"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-white">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-gray-600">
                Our team of certified fitness professionals is passionate about helping you achieve your fitness goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Tom Peterson',
                  role: 'Founder & Head Coach',
                  bio: 'With over 10 years of experience in fitness and strength training, Tom founded TP Health & Fitness to create a community-focused approach to fitness.',
                  image: '/team-1.jpg'
                },
                {
                  name: 'Rebecca Chen',
                  role: 'Director of Programming',
                  bio: 'Rebecca brings her expertise in exercise science and programming to design effective, progressive fitness programs for all our members.',
                  image: '/team-2.jpg'
                },
                {
                  name: 'Marcus Wilson',
                  role: 'Head of Community & Events',
                  bio: 'Marcus ensures that the TP Health & Fitness community remains strong, organizing events and fostering connections among members.',
                  image: '/team-3.jpg'
                }
              ].map((member, index) => (
                <div 
                  key={index}
                  className="bg-[#56b5bd] rounded-lg shadow-md overflow-hidden text-white"
                >
                  <div className="relative h-72 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white mb-3">{member.role}</p>
                    <p className="text-white">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Highlight */}
        <section className="section-padding bg-[#111] text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Members Say</h2>
              <p className="text-gray-400">
                Don't just take our word for it – hear from the people who have experienced the TP Health & Fitness difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Joining TP Health & Fitness was one of the best decisions I've made. The trainers are exceptional and the community keeps me coming back.",
                  name: 'Sarah J.',
                  membership: '2 years'
                },
                {
                  quote: "I've transformed not just physically but mentally since joining. The coaches truly care about your progress and well-being.",
                  name: 'Michael C.',
                  membership: '1 year'
                },
                {
                  quote: "The community at TP Health & Fitness is unmatched. I've made lifelong friends while achieving fitness goals I never thought possible.",
                  name: 'Emily R.',
                  membership: '3 years'
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-[#45a4ac] rounded-lg p-6 shadow-lg"
                >
                  <p className="text-lg italic mb-6 text-white">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white">Member for {testimonial.membership}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-[#56b5bd] text-white text-center">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience the TP Health & Fitness difference for yourself. Join us for a free introductory session.
            </p>
            <Link href="/contact" className="bg-white text-[#56b5bd] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all inline-block">
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 