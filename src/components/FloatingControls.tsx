import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, ArrowUp, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FloatingControlsProps {
  onOpenBooking: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenBooking }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowBackToTop(currentScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello D SALON Sector 18 Noida! I would like to inquire about booking an appointment.`
  );

  return (
    <>
      {/* Scroll Progress Bar at the top of the window */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#E8CFC2] via-[#C89B5C] to-[#A77B43] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Stack (WhatsApp & Back To Top) */}
      <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex flex-col gap-3">
        {/* Floating WhatsApp Chat Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group border-2 border-white/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white text-white group-hover:rotate-12 transition-transform" />
          <span className="absolute right-14 bg-[#1B1B1B] text-white text-xs font-poppins font-medium px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#C89B5C]/30">
            Chat on WhatsApp
          </span>
        </a>

        {/* Back To Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-[#1B1B1B] border border-[#C89B5C] text-[#C89B5C] flex items-center justify-center shadow-xl hover:bg-[#C89B5C] hover:text-white transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Bottom Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1B1B1B]/95 backdrop-blur-md border-t border-[#C89B5C]/30 p-3 md:hidden flex items-center gap-3">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-3 rounded-full border border-[#C89B5C] text-white text-xs font-poppins font-semibold flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 text-[#C89B5C]" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#C89B5C] to-[#A77B43] text-white text-xs font-poppins font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Slot</span>
        </button>
      </div>
    </>
  );
};
