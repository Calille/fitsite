'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  isButton?: boolean;
}

interface DropdownItem {
  href: string;
  label: string;
  description?: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programmesDropdownOpen, setProgrammesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
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
    { 
      href: '#', 
      label: 'Programmes', 
      hasDropdown: true,
      dropdownItems: [
        { href: '/menopause-way', label: 'Menopause Way' },
        { href: '/elevate-programme', label: 'Elevate Programme' }
      ]
    },
    { href: '/services', label: 'Services' },
  ];

  const rightNavLinks: NavLink[] = [
    { 
      href: '#', 
      label: 'Resources', 
      hasDropdown: true,
      dropdownItems: [
        { href: '/blog', label: 'Blog' },
        { href: 'https://shop.tphealthfitness.com/', label: 'Shop' }
      ]
    },
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
    { href: '/book', label: 'Book Now', isButton: true },
  ];


  return (
    <header className={`sticky top-0 z-50 w-full bg-white ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container-custom mx-auto px-4 sm:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between md:grid md:grid-cols-3 md:gap-4">
          {/* Left Side Navigation */}
          <nav className="hidden md:flex items-center justify-start gap-x-8">
            {leftNavLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setProgrammesDropdownOpen(true)}
                    onMouseLeave={() => setProgrammesDropdownOpen(false)}
                  >
                    <button
                      className={`font-medium transition-colors flex items-center gap-1 whitespace-nowrap ${
                        link.dropdownItems?.some(item => item.href === pathname)
                          ? 'text-[#56b5bd] font-semibold' 
                          : 'text-gray-800 hover:text-[#56b5bd]'
                      }`}
                    >
                      {link.label}
                      {link.label === 'Programmes' && (
                        <span className="ml-1 px-2 py-0.5 rounded-full bg-[#56b5bd] text-white text-xs font-semibold">NEW</span>
                      )}
                      <FiChevronDown className="ml-0.5 h-4 w-4" />
                    </button>
                    
                    {programmesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                      >
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              item.href === pathname 
                                ? 'text-[#56b5bd] font-semibold bg-[#56b5bd]/5' 
                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#56b5bd]'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.href}
                    className={`font-medium transition-colors flex items-center gap-1 whitespace-nowrap ${
                      link.href === pathname 
                        ? 'text-[#56b5bd] font-semibold border-b-2 border-[#56b5bd]' 
                        : 'text-gray-800 hover:text-[#56b5bd]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Logo (Centered) */}
          <Link href="/" className="flex flex-col items-center justify-self-center">
            <div className="relative h-16 w-40 sm:h-20 sm:w-52 md:h-24 md:w-64">
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
          <nav className="hidden md:flex items-center justify-end gap-x-8">
            {rightNavLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setResourcesDropdownOpen(true)}
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >
                    <button
                      className={`font-medium transition-colors flex items-center gap-1 whitespace-nowrap ${
                        link.dropdownItems?.some(item => item.href === pathname)
                          ? 'text-[#56b5bd] font-semibold' 
                          : 'text-gray-800 hover:text-[#56b5bd]'
                      }`}
                    >
                      {link.label}
                      <FiChevronDown className="ml-0.5 h-4 w-4" />
                    </button>
                    
                    {resourcesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                      >
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              item.href === pathname 
                                ? 'text-[#56b5bd] font-semibold bg-[#56b5bd]/5' 
                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#56b5bd]'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : link.isButton ? (
                  <Link 
                    href={link.href}
                    className="px-4 py-2 bg-[#56b5bd] text-white font-semibold rounded-lg hover:bg-[#45a4ac] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link 
                    href={link.href}
                    className={`font-medium transition-colors flex items-center whitespace-nowrap ${
                      link.href === pathname 
                        ? 'text-[#56b5bd] font-semibold' 
                        : 'text-gray-800 hover:text-[#56b5bd]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none p-2 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
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
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-50 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="container-custom flex flex-col space-y-1 px-4">
            {leftNavLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div>
                    <div className="font-medium py-3 text-gray-800 border-b border-gray-200 min-h-[44px] flex items-center">
                      {link.label}
                      {link.label === 'Programmes' && (
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-[#56b5bd] text-white text-[10px] font-semibold">NEW</span>
                      )}
                    </div>
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block py-3 pl-4 text-sm min-h-[44px] flex items-center touch-manipulation ${
                          item.href === pathname ? 'text-[#56b5bd] font-semibold' : 'text-gray-600 hover:text-[#56b5bd]'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium py-3 block min-h-[44px] flex items-center touch-manipulation ${
                      link.href === pathname ? 'text-[#56b5bd]' : 'text-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            {rightNavLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div>
                    <div className="font-medium py-3 text-gray-800 border-b border-gray-200 min-h-[44px] flex items-center">
                      {link.label}
                    </div>
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block py-3 pl-4 text-sm min-h-[44px] flex items-center touch-manipulation ${
                          item.href === pathname ? 'text-[#56b5bd] font-semibold' : 'text-gray-600 hover:text-[#56b5bd]'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : link.isButton ? (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 bg-[#56b5bd] text-white font-semibold rounded-lg hover:bg-[#45a4ac] transition-colors text-center mt-2 min-h-[44px] flex items-center justify-center touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium py-3 block min-h-[44px] flex items-center touch-manipulation ${
                      link.href === pathname ? 'text-[#56b5bd]' : 'text-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 