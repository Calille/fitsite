import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="/img/logo.png"
                  alt="TP Health & Fitness Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-[#56b5bd]">TP</span> Health & Fitness
              </span>
            </Link>
            <p className="text-gray-600 mt-4">
              Elevate your fitness journey with our community-focused studio. 
              We specialize in strength, endurance, and functional training.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="text-gray-600 hover:text-[#56b5bd] text-xl" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-[#56b5bd] text-xl" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-[#56b5bd] text-xl" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" className="text-gray-600 hover:text-[#56b5bd] text-xl" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Services</Link></li>
              <li><Link href="/schedule" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Class Schedule</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#56b5bd] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Personal Training</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Group Classes</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Strength Training</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Endurance Programs</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#56b5bd] transition-colors">Nutritional Guidance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Harpenden, Hertfordshire</li>
              <li>AL5 3BL, England, UK</li>
              <li>Email: info@tphealthfitness.com</li>
              <li>Phone: +44 7123 456789</li>
              <li className="pt-2">
                <Link href="/contact" className="text-[#56b5bd] hover:underline">
                  Get Directions →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} TP Health & Fitness Coaching. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-[#56b5bd] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#56b5bd] text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 