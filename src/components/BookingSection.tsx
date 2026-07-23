import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Sparkles, Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface BookingSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#1B1B1B] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C89B5C]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#232323] to-[#1B1B1B] border-2 border-[#C89B5C]/40 shadow-[0_0_50px_rgba(200,155,92,0.15)] relative overflow-hidden"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#C89B5C]" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#C89B5C]" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B5C]/20 border border-[#C89B5C]/40 text-[#C89B5C] text-xs font-poppins font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sector 18 Noida's Premier Beauty Destination</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold text-[#FFFDFB] leading-tight tracking-tight">
            Ready for Your Next <span className="gold-gradient-text italic font-normal">Makeover?</span>
          </h2>

          <p className="font-poppins text-sm sm:text-lg text-[#F7F2EE]/90 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            Experience 5-Star luxury hair color, glass-skin hydra facials, acrylic nail extensions, and bespoke bridal styling. Book your appointment today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs font-poppins text-[#E8CFC2]">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#C89B5C] fill-[#C89B5C]" /> 5.0 Google Rating
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C89B5C]" /> 205+ Happy Verified Reviews
            </span>
          </div>

          {/* Large CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#C89B5C] via-[#B88B4C] to-[#A77B43] text-white font-poppins font-semibold text-sm uppercase tracking-widest gold-button-shadow hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Appointment Today</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C89B5C]/60 text-[#FFFDFB] font-poppins font-semibold text-sm hover:bg-[#C89B5C]/20 hover:border-[#C89B5C] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5 text-[#C89B5C]" />
              <span>Call +91 9899886767</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
