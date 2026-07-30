'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftNavLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Personal Training' },
    { href: '/level-3-pt-course', label: 'Level 3 PT Course' },
  ];

  const rightNavLinks: NavLink[] = [
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full bg-white ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container-custom mx-auto px-4 py-6">
        <div className="flex items-center justify-between md:grid md:grid-cols-3 md:gap-4">
          {/* Left Side Navigation */}
          <nav className="hidden md:flex items-center justify-start gap-1">
            {leftNavLinks.map((link) => (
              <div key={link.href} className="relative px-2">
                <Link 
                  href={link.href}
                  className={`font-medium transition-colors px-2 flex items-center gap-1 whitespace-nowrap ${
                    pathname === link.href || pathname === `${link.href}/`
                      ? 'text-[#56b5bd] font-semibold border-b-2 border-[#56b5bd]' 
                      : 'text-gray-800 hover:text-[#56b5bd]'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Logo (Centered) */}
          <Link href="/" className="flex flex-col items-center justify-self-center">
            <div className="relative h-24 w-64">
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
          <nav className="hidden md:flex items-center justify-end gap-1">
            {rightNavLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors px-2 flex items-center whitespace-nowrap ${
                  pathname === link.href || pathname === `${link.href}/`
                    ? 'text-[#56b5bd] font-semibold' 
                    : 'text-gray-800 hover:text-[#56b5bd]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Book Now Button */}
            <Link
              href="/book"
              className="ml-2 px-4 py-2 bg-[#56b5bd] text-white font-semibold rounded-lg hover:bg-[#4a9ba8] transition-colors whitespace-nowrap"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <FiX size={24} className="text-[#56b5bd]" />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
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
            {leftNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium py-2 flex items-center gap-2 ${
                  pathname === link.href || pathname === `${link.href}/` ? 'text-[#56b5bd]' : 'text-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {rightNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium py-2 ${
                  pathname === link.href || pathname === `${link.href}/` ? 'text-[#56b5bd]' : 'text-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-2 px-4 py-2 bg-[#56b5bd] text-white font-semibold rounded-lg hover:bg-[#4a9ba8] transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
