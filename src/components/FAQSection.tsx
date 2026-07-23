import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_LIST } from '../data/salonData';
import { ChevronDown, HelpCircle, Search, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [faqSearch, setFaqSearch] = useState<string>('');

  const filteredFaqs = FAQS_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#FFFDFB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-poppins text-xs uppercase tracking-[0.25em] text-[#C89B5C] font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#1B1B1B] mt-3 tracking-tight">
            Frequently Asked <span className="text-[#C89B5C] italic font-normal">Questions</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C89B5C] mx-auto mt-4" />
          <p className="font-poppins text-sm text-[#333333]/80 mt-4 leading-relaxed font-light">
            Everything you need to know about our Sector 18 Noida salon protocols, product lines, and booking policies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <Search className="w-4 h-4 text-[#C89B5C] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. appointment, bridal, payments...)"
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#F7F2EE] border border-[#C89B5C]/20 text-xs font-poppins text-[#333333] focus:outline-none focus:border-[#C89B5C] focus:bg-white transition-all shadow-sm"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#C89B5C] bg-[#F7F2EE] shadow-md'
                    : 'border-[#C89B5C]/20 bg-white hover:border-[#C89B5C]/40'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-playfair text-lg font-bold text-[#1B1B1B] flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#C89B5C]' : 'text-gray-400'}`} />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C89B5C] text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 font-poppins text-xs sm:text-sm text-[#333333]/80 leading-relaxed font-light border-t border-[#C89B5C]/10"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call Support Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F7F2EE] border border-[#C89B5C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-playfair text-base font-bold text-[#1B1B1B]">Have a specific query not answered here?</h4>
            <p className="text-xs font-poppins text-[#333333]/70">Our desk team in Sector 18 Noida is happy to assist you directly.</p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-5 py-2.5 rounded-full bg-[#1B1B1B] text-[#C89B5C] hover:bg-[#C89B5C] hover:text-white transition-colors text-xs font-poppins font-semibold flex items-center gap-2 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
