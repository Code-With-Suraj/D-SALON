import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, Zap, CheckCircle2, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C89B5C]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#C89B5C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C89B5C]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#C89B5C]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#C89B5C]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C89B5C]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C89B5C]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#FFFDFB] relative overflow-hidden">
      {/* Decorative Subtle Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7F2EE] rounded-full blur-3xl opacity-70 pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8CFC2]/20 rounded-full blur-3xl opacity-70 pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs uppercase tracking-[0.25em] text-[#C89B5C] font-semibold">
            Uncompromising Excellence
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#1B1B1B] mt-3 tracking-tight">
            Why Choose <span className="text-[#C89B5C] italic font-normal">D SALON</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C89B5C] mx-auto mt-4" />
          <p className="font-poppins text-sm text-[#333333]/80 mt-4 leading-relaxed font-light">
            Designed for discerning clients in Sector 18, Noida who seek gold-standard artistry, uncompromised sanitization, and bespoke personal care.
          </p>
        </div>

        {/* 6 Luxury Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-[#F7F2EE]/80 border border-[#C89B5C]/20 hover:border-[#C89B5C] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1B1B1B] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-[#C89B5C] transition-all duration-300">
                <div className="group-hover:text-white transition-colors">
                  {getIcon(item.icon)}
                </div>
              </div>

              <h3 className="font-playfair text-2xl font-bold text-[#1B1B1B] mb-3 group-hover:text-[#C89B5C] transition-colors">
                {item.title}
              </h3>

              <p className="font-poppins text-xs sm:text-sm text-[#333333]/80 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
