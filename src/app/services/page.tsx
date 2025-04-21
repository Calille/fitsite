import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaUsers, FaRunning, FaFire, FaChalkboardTeacher, FaHeartbeat } from 'react-icons/fa';
import FadeInWrapper from '@/components/FadeInWrapper';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Our Services | TP Health & Fitness Coaching',
  description: 'Explore our comprehensive fitness services including personal training, group classes, fat loss programmes, and specialized workshops.',
};

// Extended service information
const services = [
  {
    id: 'one-to-one-pt',
    title: '1-1 PT – 8 Week Kickstart Programme',
    icon: <FaDumbbell className="text-4xl text-[#56b5bd]" />,
    description: "Our 8 Week Kickstart Programme provides personalized one-to-one training sessions tailored specifically to your goals, fitness level, and preferences. Work directly with an experienced trainer who will guide and motivate you through every step of your transformation journey.",
    features: [
      'Comprehensive fitness assessment',
      'Customized workout programs',
      'Form correction and technique guidance',
      'Progress tracking and adjustments',
      'Nutritional guidance and accountability'
    ],
    image: '/personal-training.jpg',
    pricing: 'From £65 per session'
  },
  {
    id: 'group-pt',
    title: 'Group PT',
    icon: <FaUsers className="text-4xl text-[#56b5bd]" />,
    description: "Experience the energy and motivation that comes from working out in a small group. Our group personal training sessions offer personalized attention in a supportive community setting, helping you stay motivated while achieving impressive results.",
    features: [
      'Small group sizes for personalized attention',
      'Cost-effective alternative to 1-1 training',
      'High-energy, motivating atmosphere',
      'Community support and accountability',
      'Varied and challenging workouts'
    ],
    image: '/group-fitness.jpg',
    pricing: 'From £20 per session'
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
    pricing: 'From £199 for 8 weeks'
  },
  {
    id: 'fat-loss-programme',
    title: '8 Week Fat Loss Programme',
    icon: <FaFire className="text-4xl text-[#56b5bd]" />,
    description: "Transform your body with our comprehensive 8 Week Fat Loss Programme. Combining targeted training, nutrition guidance, and accountability, this specialized programme is designed to help you achieve sustainable fat loss results and develop healthy habits for life.",
    features: [
      'Customized fat loss training plan',
      'Nutritional guidance and meal planning',
      'Regular body composition assessments',
      'Support from experienced coaches',
      'Sustainable approach to weight management'
    ],
    image: '/fat-loss.jpg',
    pricing: 'From £299 for 8 weeks'
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
    pricing: 'From £45 per workshop'
  },
  {
    id: 'recovery-wellness',
    title: 'Recovery & Wellness',
    icon: <FaHeartbeat className="text-4xl text-[#56b5bd]" />,
    description: "Recovery is just as important as training. Our recovery and wellness services include Pilates and mobility classes to help optimize your body's ability to recuperate, improve flexibility, reduce injury risk, and enhance overall wellbeing.",
    features: [
      'Pilates classes for core strength',
      'Mobility sessions for improved range of motion',
      'Guided relaxation techniques',
      'Injury prevention strategies',
      'Complement to your training routine'
    ],
    image: '/recovery.jpg',
    pricing: 'From £15 per class'
  }
];

export default function ServicesPage() {
  return (
    <FadeInWrapper>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center bg-white text-gray-800">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/services-hero.jpg"
              alt="TP Health & Fitness Services"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-700 max-w-2xl">
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
                At TP Health & Fitness, we believe in a holistic approach to fitness that addresses your unique needs, goals, and lifestyle. Our comprehensive services are designed to support you at every step of your journey, from personalized training to specialized programmes and recovery strategies.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {services.slice(0, 3).map((service, index) => (
                <AnimatedSection
                  key={service.id}
                  delay={0.1 * index}
                  direction="up"
                  className="bg-[#56b5bd] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 text-white transform hover:-translate-y-2"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white mb-4 opacity-90">
                      {service.description.split('.')[0] + '.'}
                    </p>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-white font-medium hover:underline inline-flex items-center"
                    >
                      View Details <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.slice(3).map((service, index) => (
                <AnimatedSection
                  key={service.id}
                  delay={0.1 * (index + 3)}
                  direction="up"
                  className="bg-[#56b5bd] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 text-white transform hover:-translate-y-2"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white mb-4 opacity-90">
                      {service.description.split('.')[0] + '.'}
                    </p>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-white font-medium hover:underline inline-flex items-center"
                    >
                      View Details <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-white opacity-90 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start mb-2 transform hover:translate-x-2 transition-transform duration-300">
                          <span className="text-white mr-2">✓</span>
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[#56b5bd] p-4 rounded-lg mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <p className="font-semibold text-white">Pricing: <span className="text-white">{service.pricing}</span></p>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-[#56b5bd] hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Book Now <span className="ml-1">→</span>
                  </Link>
                </div>
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