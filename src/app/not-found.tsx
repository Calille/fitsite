'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold text-[#56b5bd] mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-[#56b5bd] text-white hover:bg-[#45a4ac] font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Go Home
              </Link>
              <Link
                href="/services"
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

