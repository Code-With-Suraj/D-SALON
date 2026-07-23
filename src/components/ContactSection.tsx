import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, MessageSquare, Star, Navigation } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/salonData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0].name,
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: SERVICES_LIST[0].name,
        preferredDate: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FFFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs uppercase tracking-[0.25em] text-[#C89B5C] font-semibold">
            Visit Our Luxury Lounge
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#1B1B1B] mt-3 tracking-tight">
            Connect & <span className="text-[#C89B5C] italic font-normal">Find Us</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C89B5C] mx-auto mt-4" />
          <p className="font-poppins text-sm text-[#333333]/80 mt-4 leading-relaxed font-light">
            Located conveniently on the 2nd Floor, Dharam Palace in Sector 18, Noida. Drop in or send us a inquiry message anytime.
          </p>
        </div>

        {/* 2 Column Layout: Left Details & Map, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Info & Google Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-3xl bg-[#F7F2EE] border border-[#C89B5C]/20 shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1B1B1B] text-[#C89B5C] flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-[#1B1B1B]">Salon Location</h4>
                  <p className="font-poppins text-xs sm:text-sm text-[#333333]/80 mt-1 font-light leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <span className="inline-block text-[11px] font-poppins text-[#C89B5C] mt-1 font-semibold">
                    Landmark: {BUSINESS_INFO.landmark}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#C89B5C]/15">
                <div className="w-12 h-12 rounded-2xl bg-[#1B1B1B] text-[#C89B5C] flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-[#1B1B1B]">Direct Phone & Bookings</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-poppins text-sm font-semibold text-[#C89B5C] hover:underline block mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="font-poppins text-xs text-gray-500 mt-0.5">Calls & WhatsApp available</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#C89B5C]/15">
                <div className="w-12 h-12 rounded-2xl bg-[#1B1B1B] text-[#C89B5C] flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-[#1B1B1B]">Opening Hours</h4>
                  <p className="font-poppins text-xs sm:text-sm text-[#333333]/80 mt-1 font-light">
                    {BUSINESS_INFO.hours}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-poppins text-emerald-600 font-semibold mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open All 7 Days a Week
                  </span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-5 py-2.5 rounded-full bg-[#1B1B1B] text-white text-xs font-poppins font-semibold flex items-center gap-2 hover:bg-[#C89B5C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-poppins font-semibold flex items-center gap-2 hover:bg-[#1EBE5A] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-[#C89B5C] text-[#1B1B1B] text-xs font-poppins font-semibold flex items-center gap-2 hover:bg-[#C89B5C] hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C89B5C]" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Embedded Responsive Google Map */}
            <div className="rounded-3xl overflow-hidden border-2 border-[#C89B5C]/30 shadow-md h-72 relative">
              <iframe
                title="D SALON Noida Sector 18 Google Map"
                src={BUSINESS_INFO.googleEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#C89B5C]/30 shadow-xl relative">
              <span className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#C89B5C]">
                Get In Touch
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1B1B1B] mt-1 mb-6">
                Send an Inquiry Message
              </h3>

              {formSubmitted ? (
                <div className="py-12 text-center text-emerald-600 font-poppins text-sm font-semibold flex flex-col items-center justify-center gap-3">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 animate-bounce" />
                  <span className="text-base">Inquiry Sent Successfully!</span>
                  <p className="text-xs text-gray-500 font-normal max-w-xs">
                    Our Sector 18 desk manager will call or message you back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-poppins text-xs">
                  <div>
                    <label className="block text-[#1B1B1B] font-medium mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Himanshu Thakur"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/20 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[#1B1B1B] font-medium mb-1">Phone Number (+91) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9899886767"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/20 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1B1B1B] font-medium mb-1">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/20 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs cursor-pointer"
                      >
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#1B1B1B] font-medium mb-1">Preferred Date</label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/20 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1B1B1B] font-medium mb-1">Message / Question</label>
                    <textarea
                      rows={3}
                      placeholder="Ask about bridal pricing, hair color advice, or slot availability..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/20 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#1B1B1B] hover:bg-[#C89B5C] text-white font-poppins font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4 text-[#C89B5C]" />
                    <span>Send Message to D SALON</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
