import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiUser } from 'react-icons/fi';

export const metadata = {
  title: 'Coming Soon | TP Health & Fitness Coaching',
  description: 'More features and content coming soon to TP Health & Fitness Coaching.',
};

export default function ComingSoonPage() {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-[80vh] bg-white flex flex-col items-center justify-center relative px-4">
          {/* Logo */}
          <div className="relative h-32 w-64 mb-8">
            <Image
              src="/img/logo.png"
              alt="TP Health & Fitness Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Coming soon text */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            <span className="text-gray-800">Coming </span>
            <span className="text-[#56b5bd]">Soon</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl text-center mb-12">
            We're working on something exciting for you. Check back soon for more content and features.
          </p>
          
          <Link 
            href="/"
            className="bg-[#56b5bd] text-white hover:bg-[#45a4ac] px-8 py-3 rounded-md font-medium transition-all"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
} 