import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1B1B1B] text-[#FFFDFB]"
        >
          {/* Subtle glowing halo */}
          <div className="absolute w-72 h-72 rounded-full bg-[#C89B5C]/15 blur-3xl animate-pulse pointer-events-none" />

          {/* Luxury Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full border-2 border-[#C89B5C] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(200,155,92,0.3)] bg-[#1B1B1B]">
              <span className="font-playfair text-3xl font-bold tracking-widest text-[#C89B5C]">D</span>
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-playfair text-3xl tracking-[0.3em] font-light text-[#FFFDFB] uppercase text-center"
            >
              D SALON
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-poppins text-xs tracking-[0.25em] text-[#C89B5C] uppercase mt-2 flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3 text-[#C89B5C]" />
              Luxury Beauty Salon • Noida Sector 18
              <Sparkles className="w-3 h-3 text-[#C89B5C]" />
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full mt-10 overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#E8CFC2] via-[#C89B5C] to-[#A77B43]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
