import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export const metadata = {
  title: 'Contact Us | TP Health & Fitness Coaching',
  description: 'Get in touch with TP Health & Fitness Coaching for inquiries about memberships, personal training, or class schedules.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center bg-white text-gray-800">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/contact-hero.jpg"
              alt="Contact TP Health & Fitness"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              We're here to help you on your fitness journey. Let us know how we can assist you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Map Section */}
        <section className="h-[400px] md:h-[500px] relative">
          <div className="absolute inset-0">
            {/* This would be replaced with an actual Google Maps embed in production */}
            <Image
              src="/map-placeholder.jpg"
              alt="Gym location map"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 