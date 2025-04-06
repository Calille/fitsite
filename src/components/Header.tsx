'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/services', label: 'Our Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const rightNavLinks = [
    { href: '/team', label: 'Our Team' },
    { href: '/more', label: 'More', hasDropdown: true },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full bg-white ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container-custom mx-auto px-4 py-6 flex items-center justify-between">
        {/* Left Side Navigation */}
        <nav className="hidden md:flex items-center">
          {leftNavLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`font-medium transition-colors mx-4 ${
                link.href === pathname 
                  ? 'text-[#56b5bd] font-semibold border-b-2 border-[#56b5bd]' 
                  : 'text-gray-800 hover:text-[#56b5bd]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo (Centered) */}
        <Link href="/" className="flex flex-col items-center mx-auto md:mx-0">
          <div className="relative h-16 w-48">
            <Image
              src="/img/logo.png"
              alt="TP Health & Fitness Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Right Side Navigation */}
        <nav className="hidden md:flex items-center">
          {rightNavLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`font-medium transition-colors mx-4 flex items-center ${
                link.href === pathname 
                  ? 'text-[#56b5bd] font-semibold' 
                  : 'text-gray-800 hover:text-[#56b5bd]'
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 ml-4">
            <span className="text-gray-800">|</span>
            <span className="text-gray-800 cursor-not-allowed opacity-70" title="Coming Soon">
              <FiShoppingCart className="w-5 h-5" />
            </span>
            <span className="text-gray-800 cursor-not-allowed opacity-70" title="Coming Soon">
              <FiUser className="w-5 h-5" />
            </span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none absolute right-4"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <FiX size={24} className="text-[#56b5bd]" />
          ) : (
            <FiMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-50"
        >
          <div className="container-custom flex flex-col space-y-4">
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium py-2 ${
                  link.href === pathname ? 'text-[#56b5bd]' : 'text-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-4 py-2">
              <span className="text-gray-800 cursor-not-allowed opacity-70">
                <span className="flex items-center"><FiShoppingCart className="mr-2" /> Cart (Coming Soon)</span>
              </span>
              <span className="text-gray-800 cursor-not-allowed opacity-70">
                <span className="flex items-center"><FiUser className="mr-2" /> Account (Coming Soon)</span>
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 