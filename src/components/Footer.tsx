import React from 'react';
import { MapPin, Phone, Clock, Star, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-[#FFFDFB] pt-20 pb-10 border-t border-[#C89B5C]/20 font-poppins text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C89B5C] flex items-center justify-center bg-[#1B1B1B] text-[#C89B5C] font-playfair font-bold text-xl">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-bold tracking-[0.2em] text-[#FFFDFB] leading-none">
                  D SALON
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C89B5C] uppercase mt-1">
                  Luxury Beauty Salon
                </span>
              </div>
            </a>

            <p className="text-[#E8CFC2]/70 font-light leading-relaxed">
              Sector 18 Noida's top-rated 5-Star luxury salon for bespoke hair coloring, glass-skin hydra facials, acrylic nail extensions, and couture bridal makeup.
            </p>

            <div className="flex items-center gap-1.5 text-[#C89B5C] font-semibold">
              <Star className="w-4 h-4 fill-[#C89B5C]" />
              <span>5.0 Rating on Google ({BUSINESS_INFO.reviewCount}+ Reviews)</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#C89B5C] hover:border-[#C89B5C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#C89B5C] hover:border-[#C89B5C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#C89B5C] hover:border-[#C89B5C] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-playfair text-lg font-bold text-white uppercase tracking-wider text-[#C89B5C]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#E8CFC2]/80">
              <li><a href="#home" className="hover:text-[#C89B5C] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C89B5C] transition-colors">About D SALON</a></li>
              <li><a href="#services" className="hover:text-[#C89B5C] transition-colors">Luxury Services & Prices</a></li>
              <li><a href="#gallery" className="hover:text-[#C89B5C] transition-colors">Transformation Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#C89B5C] transition-colors">205+ Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#C89B5C] transition-colors">FAQ & Policies</a></li>
              <li><a href="#contact" className="hover:text-[#C89B5C] transition-colors">Contact & Directions</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Treatments */}
          <div className="space-y-3">
            <h4 className="font-playfair text-lg font-bold text-white uppercase tracking-wider text-[#C89B5C]">
              Top Services
            </h4>
            <ul className="space-y-2 text-[#E8CFC2]/80">
              {SERVICES_LIST.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#C89B5C] transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location & Hours */}
          <div className="space-y-3">
            <h4 className="font-playfair text-lg font-bold text-white uppercase tracking-wider text-[#C89B5C]">
              Address & Contact
            </h4>

            <div className="flex items-start gap-2.5 text-[#E8CFC2]/80">
              <MapPin className="w-4 h-4 text-[#C89B5C] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#E8CFC2]/80">
              <Phone className="w-4 h-4 text-[#C89B5C] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#C89B5C] transition-colors font-semibold">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-[#E8CFC2]/80 pt-1">
              <Clock className="w-4 h-4 text-[#C89B5C] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.hours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E8CFC2]/60">
          <p>© {new Date().getFullYear()} D SALON Noida. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted for pure luxury & comfort in Sector 18, Noida
          </p>
        </div>

      </div>
    </footer>
  );
};
