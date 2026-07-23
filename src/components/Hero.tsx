import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, Star, Sparkles, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import { HERO_SLIDES, BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#1B1B1B]">
      {/* Dynamic Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.45, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_SLIDES[currentSlide].image}')` }}
        />
      </AnimatePresence>

      {/* Gradient Overlays for Luxury Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/60 to-[#1B1B1B]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1B1B1B]/50 to-[#1B1B1B]" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1B1B]/80 border border-[#C89B5C]/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(200,155,92,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-[#C89B5C]" />
          <span className="text-xs font-poppins font-medium text-[#E8CFC2] tracking-wider uppercase">
            Sector 18 Noida's 5-Star Luxury Beauty Salon
          </span>
          <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-ping ml-1" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold text-[#FFFDFB] leading-[1.15] max-w-5xl tracking-tight"
        >
          Reveal Your True Beauty with{' '}
          <span className="gold-gradient-text italic font-normal">Confidence</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins text-base sm:text-xl text-[#F7F2EE]/90 mt-6 max-w-3xl font-light tracking-wide leading-relaxed"
        >
          Luxury Hair • Skin • Makeup • Nail Care • Bridal Services
        </motion.p>

        {/* Key USPs Mini Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-xs text-[#E8CFC2]/90 font-poppins"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C89B5C]" /> 100% Authentic Products
          </span>
          <span className="hidden sm:inline text-[#C89B5C]">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#C89B5C]" /> Open Today 10:00 AM - 8:30 PM
          </span>
          <span className="hidden sm:inline text-[#C89B5C]">•</span>
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#C89B5C] fill-[#C89B5C]" /> 205+ Certified 5.0 Reviews
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 w-full max-w-md sm:max-w-none"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#C89B5C] via-[#B88B4C] to-[#A77B43] text-white font-poppins font-semibold text-sm uppercase tracking-widest gold-button-shadow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Calendar className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span>Book Appointment</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C89B5C]/60 text-[#FFFDFB] font-poppins font-semibold text-sm hover:bg-[#C89B5C]/20 hover:border-[#C89B5C] transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5 text-[#C89B5C]" />
            <span>Call Now ({BUSINESS_INFO.phone})</span>
          </a>
        </motion.div>

        {/* Floating Google Review Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 inline-flex items-center gap-4 px-6 py-3 rounded-2xl glass-card-dark border border-[#C89B5C]/30 shadow-2xl"
        >
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-[#C89B5C]"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Client Saachi"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-[#C89B5C]"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="Client Himanshu"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-[#C89B5C]"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="Client Aashu"
            />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1 text-[#C89B5C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C89B5C] text-[#C89B5C]" />
              ))}
              <span className="text-white font-bold text-sm ml-1">5.0</span>
            </div>
            <p className="text-xs text-[#E8CFC2] font-poppins mt-0.5">
              205+ Happy Verified Customer Reviews on Google
            </p>
          </div>
        </motion.div>

        {/* Slider Indicator Dots */}
        <div className="flex items-center gap-2 mt-8">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentSlide === index ? 'w-8 bg-[#C89B5C]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Animated Scroll Down Indicator */}
        <a
          href="#why-us"
          className="mt-8 text-[#E8CFC2]/70 hover:text-[#C89B5C] transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] uppercase tracking-widest font-poppins">Explore D SALON</span>
          <ChevronDown className="w-5 h-5 text-[#C89B5C] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
