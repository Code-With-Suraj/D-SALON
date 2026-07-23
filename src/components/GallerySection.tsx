import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types/salon';
import { Sparkles, Maximize2, X, Calendar, ArrowLeftRight } from 'lucide-react';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  // Before/After comparison slider value (0 to 100)
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'hair', label: 'Hair Transformations' },
    { id: 'skin', label: 'Facial & Skin Glow' },
    { id: 'bridal', label: 'Bridal & Glam' },
    { id: 'nails', label: 'Nail Art' },
    { id: 'interior', label: 'Salon Ambience' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-[#1B1B1B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-poppins text-xs uppercase tracking-[0.25em] text-[#C89B5C] font-semibold">
            Visual Transformations
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#FFFDFB] mt-3 tracking-tight">
            Our Portfolio & <span className="gold-gradient-text italic font-normal">Gallery</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C89B5C] mx-auto mt-4" />
          <p className="font-poppins text-sm text-[#F7F2EE]/70 mt-4 leading-relaxed font-light">
            Explore authentic hair color balayage reveals, glass-skin facial transformations, custom nail extensions, and haute-couture bridal styling.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-poppins font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C89B5C] text-white shadow-lg shadow-[#C89B5C]/30 scale-105'
                  : 'bg-white/10 text-[#E8CFC2] hover:bg-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => {
                setSelectedLightboxItem(item);
                setSliderPosition(50);
              }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer h-72 border border-[#C89B5C]/20 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase font-poppins font-bold tracking-widest text-[#C89B5C]">
                  {item.category}
                </span>
                <h3 className="font-playfair text-lg font-bold text-white mt-1">
                  {item.title}
                </h3>
                <p className="font-poppins text-xs text-[#E8CFC2]/80 mt-1 line-clamp-2 font-light">
                  {item.description}
                </p>

                {item.beforeImage && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-poppins text-[#C89B5C] font-semibold bg-white/10 px-2.5 py-1 rounded-full w-fit backdrop-blur-md">
                    <ArrowLeftRight className="w-3 h-3" />
                    Interactive Before / After Available
                  </span>
                )}

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/20 text-xs font-poppins text-[#C89B5C]">
                  <span>Click to Expand</span>
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Zoom & Interactive Before/After Comparison Slider */}
      <AnimatePresence>
        {selectedLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-[#1B1B1B] rounded-3xl overflow-hidden border border-[#C89B5C]/40 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#C89B5C] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image / Before-After Slider Container */}
              <div className="md:w-3/5 bg-black relative flex items-center justify-center min-h-[320px] md:min-h-[500px]">
                {selectedLightboxItem.beforeImage && selectedLightboxItem.afterImage ? (
                  /* Interactive Before / After Comparison Slider */
                  <div className="relative w-full h-full min-h-[360px] md:min-h-[500px] overflow-hidden select-none">
                    {/* After Image (Background) */}
                    <img
                      src={selectedLightboxItem.afterImage}
                      alt="After Transformation"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#1B1B1B]/80 text-[#C89B5C] text-xs font-bold font-poppins border border-[#C89B5C]/40">
                      AFTER
                    </span>

                    {/* Before Image (Clipped Overlay) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img
                        src={selectedLightboxItem.beforeImage}
                        alt="Before Transformation"
                        className="absolute inset-0 w-full h-full object-cover max-w-none"
                        style={{ width: '100%', height: '100%' }}
                      />
                      <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#1B1B1B]/80 text-[#E8CFC2] text-xs font-bold font-poppins border border-white/20">
                        BEFORE
                      </span>
                    </div>

                    {/* Slider Range Control Input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition}
                      onChange={(e) => setSliderPosition(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />

                    {/* Divider Line */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-[#C89B5C] shadow-[0_0_15px_#C89B5C] pointer-events-none z-10"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#C89B5C] text-white flex items-center justify-center shadow-lg">
                        <ArrowLeftRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedLightboxItem.image}
                    alt={selectedLightboxItem.title}
                    className="w-full h-full object-cover max-h-[500px]"
                  />
                )}
              </div>

              {/* Lightbox Details Column */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#1B1B1B]">
                <div>
                  <span className="text-xs uppercase font-poppins font-semibold text-[#C89B5C] tracking-widest">
                    {selectedLightboxItem.category} Portfolio
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-white mt-2">
                    {selectedLightboxItem.title}
                  </h3>
                  <p className="font-poppins text-xs text-[#E8CFC2]/80 mt-4 leading-relaxed font-light">
                    {selectedLightboxItem.description}
                  </p>

                  {selectedLightboxItem.beforeImage && (
                    <div className="mt-4 p-3 rounded-xl bg-white/5 border border-[#C89B5C]/20 text-xs text-[#E8CFC2] font-poppins">
                      💡 <strong>Tip:</strong> Drag the slider on the image to compare the BEFORE vs AFTER transformation!
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <p className="text-xs font-poppins text-white/70 mb-3">
                    Want this exact look created for you by our master artists?
                  </p>

                  <button
                    onClick={() => {
                      const title = selectedLightboxItem.title;
                      setSelectedLightboxItem(null);
                      onOpenBooking(`Look: ${title}`);
                    }}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C89B5C] to-[#A77B43] text-white font-poppins font-semibold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>I Want This Look - Book Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
