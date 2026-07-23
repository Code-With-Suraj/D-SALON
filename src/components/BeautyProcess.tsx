import React from 'react';
import { motion } from 'motion/react';
import { BEAUTY_PROCESS_STEPS } from '../data/salonData';
import { Sparkles, MessageSquare, Scissors, Wand2, Smile } from 'lucide-react';

export const BeautyProcess: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-6 h-6 text-[#C89B5C]" />;
      case 1:
        return <Scissors className="w-6 h-6 text-[#C89B5C]" />;
      case 2:
        return <Wand2 className="w-6 h-6 text-[#C89B5C]" />;
      case 3:
        return <Smile className="w-6 h-6 text-[#C89B5C]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C89B5C]" />;
    }
  };

  return (
    <section className="py-24 bg-[#F7F2EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs uppercase tracking-[0.25em] text-[#C89B5C] font-semibold">
            How We Care For You
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#1B1B1B] mt-3 tracking-tight">
            The D SALON <span className="text-[#C89B5C] italic font-normal">Beauty Process</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C89B5C] mx-auto mt-4" />
          <p className="font-poppins text-sm text-[#333333]/80 mt-4 leading-relaxed font-light">
            A seamless 4-step experience crafted to deliver uncompromised satisfaction, personalized recommendations, and memorable pampering.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {BEAUTY_PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl bg-white border border-[#C89B5C]/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#1B1B1B] flex items-center justify-center shadow-md group-hover:bg-[#C89B5C] group-hover:text-white transition-colors duration-300">
                    {getStepIcon(index)}
                  </div>
                  <span className="font-playfair text-4xl font-bold text-[#C89B5C]/30 group-hover:text-[#C89B5C] transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-playfair text-2xl font-bold text-[#1B1B1B] mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-poppins text-[#C89B5C] font-semibold uppercase tracking-wider block mb-3">
                  {step.subtitle}
                </span>

                <p className="font-poppins text-xs sm:text-sm text-[#333333]/80 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow for desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#C89B5C]">
                  ➔
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
