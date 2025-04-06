'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaDumbbell, FaUsers, FaRunning, FaAppleAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaDumbbell className="text-4xl text-[#56b5bd]" />,
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your specific goals and needs with experienced trainers.',
    image: '/personal-training.jpg',
  },
  {
    icon: <FaUsers className="text-4xl text-[#56b5bd]" />,
    title: 'Group Classes',
    description: 'High-energy group workouts that foster community while challenging your limits.',
    image: '/group-classes.jpg',
  },
  {
    icon: <FaRunning className="text-4xl text-[#56b5bd]" />,
    title: 'Endurance Programs',
    description: 'Specialized training to build stamina, speed, and mental toughness for any challenge.',
    image: '/endurance.jpg',
  },
  {
    icon: <FaAppleAlt className="text-4xl text-[#56b5bd]" />,
    title: 'Nutrition Coaching',
    description: 'Expert guidance on fueling your body for optimal performance and recovery.',
    image: '/nutrition.jpg',
  },
];

const ServicesFeature = () => {
  return (
    <section className="section-padding bg-[#56b5bd] text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Premium Services</h2>
          <p className="text-white">
            We offer comprehensive fitness solutions designed to help you achieve your goals, whether you're just starting your fitness journey or looking to reach new heights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#45a4ac] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-white">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                
                <Link 
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="bg-white text-[#56b5bd] hover:bg-gray-100 py-3 px-8 rounded-md transition-all inline-block font-bold">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFeature; 