import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, Shield, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, BRAND_PARTNERS } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#1B1B1B] text-white relative overflow-hidden">
      {/* Background Gold Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C89B5C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Luxury Salon Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#C89B5C]/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                alt="D SALON Luxury Salon Interior Noida"
                className="w-full h-[480px] sm:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-transparent to-transparent opacity-60" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card-dark border border-[#C89B5C]/40">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C89B5C] flex items-center justify-center text-white font-bold text-xl font-playfair">
                    5.0
                  </div>
                  <div>
                    <div className="flex text-[#C89B5C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C89B5C]" />
                      ))}
                    </div>
                    <p className="text-xs font-poppins text-[#FFFDFB] font-semibold mt-0.5">
                      Top Rated Luxury Salon in Sector 18, Noida
                    </p>
                    <p className="text-[11px] text-[#E8CFC2] font-poppins">
                      205+ Verified Customer Reviews on Google
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Floating Border Box */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#C89B5C] pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#C89B5C] pointer-events-none" />
          </motion.div>

          {/* Right Brand Story & Typography Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-[#C89B5C] font-poppins text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>The Sanctuary of Modern Elegance</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#FFFDFB] leading-tight tracking-tight">
              Where Couture Artistry Meets{' '}
              <span className="gold-gradient-text italic font-normal">Rejuvenation</span>
            </h2>

            <p className="font-poppins text-sm sm:text-base text-[#F7F2EE]/80 mt-6 leading-relaxed font-light">
              Welcome to <strong className="text-[#C89B5C]">D SALON</strong>, located at Dharam Palace in the vibrant heart of Sector 18, Noida. We believe beauty is an intimate art form—a harmonious blend of personalized hair couture, dermatological skin therapies, and relaxing spa rituals.
            </p>

            <p className="font-poppins text-sm text-[#F7F2EE]/70 mt-4 leading-relaxed font-light">
              Whether you are looking to refresh your signature hair color with hand-painted balayage, achieve glass skin radiance with medical-grade Hydra Facials, or prepare for your fairytale wedding with royal HD makeup, our master artists curate every detail to perfection.
            </p>

            {/* Core Values / Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#C89B5C]/20 text-[#C89B5C] mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-playfair text-base font-semibold text-[#FFFDFB]">Pristine Hygiene</h4>
                  <p className="text-xs text-[#E8CFC2]/80 font-poppins mt-0.5">Autoclave tool UV sterilization & single-use capes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#C89B5C]/20 text-[#C89B5C] mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-playfair text-base font-semibold text-[#FFFDFB]">100% Original Products</h4>
                  <p className="text-xs text-[#E8CFC2]/80 font-poppins mt-0.5">L'Oréal, Kérastase, Dermalogica & MAC Cosmetics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#C89B5C]/20 text-[#C89B5C] mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-playfair text-base font-semibold text-[#FFFDFB]">Tailored Consultations</h4>
                  <p className="text-xs text-[#E8CFC2]/80 font-poppins mt-0.5">Diagnostic hair & skin analysis before every service.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#C89B5C]/20 text-[#C89B5C] mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-playfair text-base font-semibold text-[#FFFDFB]">Luxurious Ambience</h4>
                  <p className="text-xs text-[#E8CFC2]/80 font-poppins mt-0.5">Ergonomic chairs, coffee lounge & peaceful spa music.</p>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mt-10 p-6 rounded-2xl bg-white/5 border border-[#C89B5C]/20 text-center">
              <div>
                <span className="font-playfair text-3xl font-bold text-[#C89B5C]">5.0 ★</span>
                <p className="text-[11px] font-poppins text-[#E8CFC2] uppercase mt-1">Google Rating</p>
              </div>
              <div>
                <span className="font-playfair text-3xl font-bold text-[#C89B5C]">205+</span>
                <p className="text-[11px] font-poppins text-[#E8CFC2] uppercase mt-1">Happy Reviews</p>
              </div>
              <div>
                <span className="font-playfair text-3xl font-bold text-[#C89B5C]">10,000+</span>
                <p className="text-[11px] font-poppins text-[#E8CFC2] uppercase mt-1">Makeovers</p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Brand Partners Marquee Strip */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-center font-poppins text-xs uppercase tracking-[0.25em] text-[#C89B5C] mb-8 font-medium">
            Exclusively Using Global Luxury Beauty Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            {BRAND_PARTNERS.map((partner) => (
              <span
                key={partner.name}
                className="font-playfair text-xl sm:text-2xl font-bold tracking-wider text-[#E8CFC2] hover:text-[#C89B5C] transition-colors cursor-default"
              >
                {partner.logoText}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
