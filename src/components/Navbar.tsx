import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Menu, X, Star, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner (Address & Quick Status) */}
      <div className="bg-[#1B1B1B] text-[#FFFDFB] text-xs py-2 px-4 hidden md:block border-b border-[#C89B5C]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-[#E8CFC2]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C89B5C]" />
              Sector 18, Noida (2nd Floor, Dharam Palace)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C89B5C]" />
              Mon-Sun: 10:00 AM - 8:30 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#C89B5C] font-medium">
              <Star className="w-3.5 h-3.5 fill-[#C89B5C] text-[#C89B5C]" />
              5.0 Google Rated ({BUSINESS_INFO.reviewCount}+ Reviews)
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-[#FFFDFB] hover:text-[#C89B5C] transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C89B5C]" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 md:top-[33px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1B1B1B]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C89B5C]/20 text-white'
            : 'bg-gradient-to-b from-[#1B1B1B]/90 via-[#1B1B1B]/60 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#C89B5C] flex items-center justify-center bg-[#1B1B1B] text-[#C89B5C] font-playfair font-bold text-xl group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-2xl font-bold tracking-[0.2em] text-[#FFFDFB] leading-none">
                D SALON
              </span>
              <span className="font-poppins text-[9px] tracking-[0.25em] text-[#C89B5C] uppercase mt-1">
                Luxury Beauty
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins text-sm font-medium text-[#FFFDFB] hover:text-[#C89B5C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C89B5C] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#C89B5C]/40 text-xs font-semibold text-[#FFFDFB] hover:bg-[#C89B5C]/10 transition-all hover:border-[#C89B5C]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89B5C]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C89B5C] to-[#A77B43] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(200,155,92,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 rounded-full bg-[#C89B5C] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FFFDFB] hover:text-[#C89B5C] focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C89B5C]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#1B1B1B]/98 backdrop-blur-xl border-b border-[#C89B5C]/30 text-white lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-playfair text-lg text-[#C89B5C]">D SALON Noida</span>
                <span className="text-xs text-[#E8CFC2]">Sector 18 • 5.0 ★</span>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-playfair text-xl text-[#FFFDFB] hover:text-[#C89B5C] transition-colors py-1 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C89B5C] to-[#A77B43] text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full py-3.5 rounded-full border border-[#C89B5C] text-[#FFFDFB] font-semibold text-sm flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4 text-[#C89B5C]" />
                  <span>Call +91 9899886767</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
