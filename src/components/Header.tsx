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
  const [dropdownCloseTimeout, setDropdownCloseTimeout] = useState<NodeJS.Timeout | null>(null);
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownCloseTimeout) {
        clearTimeout(dropdownCloseTimeout);
      }
    };
  }, [dropdownCloseTimeout]);

  const leftNavLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { 
      href: '#', 
      label: 'Programmes', 
      hasDropdown: true,
      dropdownItems: [
        { 
          href: '/menopause-way', 
          label: 'Menopause Way'
        }
      ]
    },
    { href: '/services', label: 'Personal Training' },
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
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => {
                      // Clear any pending close timeout
                      if (dropdownCloseTimeout) {
                        clearTimeout(dropdownCloseTimeout);
                        setDropdownCloseTimeout(null);
                      }
                      setProgrammesDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      // Add delay before closing
                      const timeout = setTimeout(() => {
                        setProgrammesDropdownOpen(false);
                      }, 200); // 200ms delay
                      setDropdownCloseTimeout(timeout);
                    }}
                  >
                    <button
                      className={`font-medium transition-colors flex items-center gap-1 whitespace-nowrap ${
                        pathname === '/menopause-way'
                          ? 'text-[#56b5bd] font-semibold border-b-2 border-[#56b5bd]' 
                          : 'text-gray-800 hover:text-[#56b5bd]'
                      }`}
                    >
                      {link.label}
                      <span className="bg-[#56b5bd] text-white text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded ml-1">New</span>
                      <FiChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {programmesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-1 w-64 bg-transparent z-50"
                        onMouseEnter={() => {
                          // Clear any pending close timeout when hovering over dropdown
                          if (dropdownCloseTimeout) {
                            clearTimeout(dropdownCloseTimeout);
                            setDropdownCloseTimeout(null);
                          }
                          setProgrammesDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                          // Add delay before closing
                          const timeout = setTimeout(() => {
                            setProgrammesDropdownOpen(false);
                          }, 200);
                          setDropdownCloseTimeout(timeout);
                        }}
                      >
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#56b5bd] transition-colors"
                            >
                              <div className="font-medium">{item.label}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.href}
                    className={`font-medium transition-colors px-2 flex items-center gap-1 whitespace-nowrap ${
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
                  link.href === pathname 
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
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div>
                    <div className="font-medium py-2 text-gray-800 border-b border-gray-200 flex items-center gap-2">
                      {link.label}
                      <span className="bg-[#56b5bd] text-white text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded">New</span>
                    </div>
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 pl-4 text-sm text-gray-600 hover:text-[#56b5bd]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium py-2 flex items-center gap-2 ${
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