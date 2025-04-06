'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiClock, FiCalendar, FiPackage } from 'react-icons/fi';

export const metadata = {
  title: 'Shopping Cart | TP Health & Fitness Coaching',
  description: 'Shopping cart functionality coming soon to TP Health & Fitness Coaching.',
};

export default function CartPage() {
  return (
    <>
      <Header />
      <main>
        <div className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              {/* Logo */}
              <div className="relative h-32 w-64 mx-auto mb-8">
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
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Our online shopping functionality is currently in development. Check back soon to purchase products and services directly from our website.
              </p>
            </div>
            
            {/* Features coming soon */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
                <div className="bg-[#56b5bd] text-white p-4 inline-flex rounded-full mb-6">
                  <FiCalendar size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Session Bookings</h3>
                <p className="text-gray-600">
                  Soon you'll be able to book and pay for personal training sessions and group classes directly through our website.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
                <div className="bg-[#56b5bd] text-white p-4 inline-flex rounded-full mb-6">
                  <FiPackage size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Fitness Products</h3>
                <p className="text-gray-600">
                  Browse and purchase our recommended fitness equipment, supplements, and branded merchandise.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
                <div className="bg-[#56b5bd] text-white p-4 inline-flex rounded-full mb-6">
                  <FiClock size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Membership Options</h3>
                <p className="text-gray-600">
                  Sign up and manage your gym memberships and training packages with easy recurring payment options.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/"
                className="bg-[#56b5bd] text-white hover:bg-[#45a4ac] px-8 py-3 rounded-md font-medium transition-all"
              >
                Return to Home
              </Link>
              
              <p className="mt-8 text-gray-500">
                Want to be notified when our online store launches? Contact us at <a href="mailto:info@tphealthfitness.com" className="text-[#56b5bd] hover:underline">info@tphealthfitness.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 