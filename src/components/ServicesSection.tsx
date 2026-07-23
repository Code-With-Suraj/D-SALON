import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, Check, Search, Calendar, ChevronRight, X, ArrowRight, Calculator, Plus, Trash2 } from 'lucide-react';
import { SERVICES_LIST } from '../data/salonData';
import { ServiceItem } from '../types/salon';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  // Custom Package Builder State
  const [packageBuilderOpen, setPackageBuilderOpen] = useState(false);
  const [customPackage, setCustomPackage] = useState<ServiceItem[]>([]);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Care & Colors' },
    { id: 'skin', label: 'Skin & Facials' },
    { id: 'nails', label: 'Nails & Pedicure' },
    { id: 'makeup', label: 'Makeup & Bridal' },
    { id: 'grooming', label: 'Waxing & Grooming' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToPackage = (service: ServiceItem) => {
    if (!customPackage.some((s) => s.id === service.id)) {
      setCustomPackage([...customPackage, service]);
    }
  };

  const removeFromPackage = (serviceId: string) => {
    setCustomPackage(customPackage.filter((s) => s.id !== serviceId));
  };

  const totalPackagePrice = customPackage.reduce((acc, item) => acc + item.numericPrice, 0);
  const discountedPrice = Math.round(totalPackagePrice * 0.9); // 10% Package Discount

  return (
    <section id="services" className="py-24 bg-[#FFFDFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-poppins text-xs uppercase tracking-[0.25em] text-[#C89B5C] font-semibold">
            Bespoke Beauty Treatments
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#1B1B1B] mt-3 tracking-tight">
            Our Luxury <span className="text-[#C89B5C] italic font-normal">Services</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C89B5C] mx-auto mt-4" />
          <p className="font-poppins text-sm text-[#333333]/80 mt-4 leading-relaxed font-light">
            Every service at D SALON is performed using premium international products, dermatologically tested formulations, and meticulous attention to detail.
          </p>
        </div>

        {/* Custom Package Builder Floating Banner Callout */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-[#1B1B1B] via-[#2A2A2A] to-[#1B1B1B] text-white border border-[#C89B5C]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C89B5C]/20 border border-[#C89B5C] flex items-center justify-center text-[#C89B5C] shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-[#FFFDFB]">
                Build Your Own Custom Pamper Package
              </h3>
              <p className="font-poppins text-xs text-[#E8CFC2] mt-1 font-light">
                Combine 2 or more services to receive an instant <strong className="text-[#C89B5C]">10% Package Discount</strong> & priority scheduling!
              </p>
            </div>
          </div>

          <button
            onClick={() => setPackageBuilderOpen(!packageBuilderOpen)}
            className="px-6 py-3 rounded-full bg-[#C89B5C] hover:bg-[#A77B43] text-white text-xs font-semibold font-poppins uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer shrink-0 flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            <span>{packageBuilderOpen ? 'Close Builder' : `Open Package Builder (${customPackage.length})`}</span>
          </button>
        </div>

        {/* Custom Package Drawer / Panel */}
        <AnimatePresence>
          {packageBuilderOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#F7F2EE] border-2 border-[#C89B5C]/40 shadow-inner overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#C89B5C]/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C89B5C]" />
                  <h4 className="font-playfair text-2xl font-bold text-[#1B1B1B]">Your Custom Beauty Package</h4>
                </div>
                <span className="text-xs font-poppins text-[#C89B5C] font-semibold bg-white px-3 py-1 rounded-full border border-[#C89B5C]/30">
                  {customPackage.length} Selected Service{customPackage.length !== 1 ? 's' : ''}
                </span>
              </div>

              {customPackage.length === 0 ? (
                <p className="text-xs font-poppins text-[#333333]/70 py-6 text-center italic">
                  Click the "+ Add to Package" button on any service card below to build your bundle.
                </p>
              ) : (
                <div className="py-6 flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {customPackage.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#C89B5C]/20 shadow-sm"
                      >
                        <div className="truncate pr-2">
                          <p className="font-playfair text-sm font-bold text-[#1B1B1B] truncate">{pkg.name}</p>
                          <p className="text-xs text-[#C89B5C] font-medium">₹{pkg.numericPrice}</p>
                        </div>
                        <button
                          onClick={() => removeFromPackage(pkg.id)}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Remove service"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Price Summary & Instant Booking Button */}
                  <div className="mt-6 pt-6 border-t border-[#C89B5C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-poppins text-[#333333]/70 line-through">Total: ₹{totalPackagePrice}</span>
                        <span className="text-xs font-semibold font-poppins text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          10% Package Discount Applied
                        </span>
                      </div>
                      <p className="font-playfair text-2xl font-bold text-[#1B1B1B] mt-1">
                        Package Total: <span className="text-[#C89B5C]">₹{discountedPrice}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        const packageNames = customPackage.map((s) => s.name).join(', ');
                        onOpenBooking(`Custom Package: ${packageNames} (₹${discountedPrice})`);
                      }}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C89B5C] to-[#A77B43] text-white font-poppins font-semibold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Custom Package Now</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-poppins font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1B1B1B] text-[#C89B5C] shadow-md border border-[#C89B5C]/40'
                    : 'bg-[#F7F2EE] text-[#333333] hover:bg-[#E8CFC2]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#C89B5C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Haircut, Hydra Facial..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F7F2EE] border border-[#C89B5C]/20 text-xs font-poppins text-[#333333] focus:outline-none focus:border-[#C89B5C] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const inPackage = customPackage.some((s) => s.id === service.id);

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-white border border-[#C89B5C]/20 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C89B5C]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Badge */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {service.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C89B5C] text-white text-[10px] font-poppins font-semibold tracking-wider uppercase shadow-md">
                      {service.badge}
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-poppins text-xs">
                    <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-[#C89B5C]" />
                      {service.duration}
                    </span>
                    <span className="font-bold text-sm bg-[#1B1B1B]/80 px-3 py-1 rounded-full border border-[#C89B5C]/40 text-[#E8CFC2]">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#1B1B1B] group-hover:text-[#C89B5C] transition-colors">
                      {service.name}
                    </h3>
                    <p className="font-poppins text-xs text-[#333333]/80 mt-2 line-clamp-2 font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Benefits Bullets */}
                    <ul className="mt-4 space-y-1.5">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] font-poppins text-[#333333]/70">
                          <Check className="w-3.5 h-3.5 text-[#C89B5C] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 mt-6 border-t border-[#F7F2EE] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedServiceDetail(service)}
                      className="text-xs font-poppins font-medium text-[#1B1B1B] hover:text-[#C89B5C] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C89B5C]" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => addToPackage(service)}
                        className={`p-2 rounded-full border text-xs font-poppins transition-colors cursor-pointer ${
                          inPackage
                            ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                            : 'bg-[#F7F2EE] text-[#333333] hover:bg-[#E8CFC2] border-[#C89B5C]/20'
                        }`}
                        title={inPackage ? 'Added to custom package' : 'Add to package'}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onOpenBooking(service.name)}
                        className="px-4 py-2 rounded-full bg-[#1B1B1B] hover:bg-[#C89B5C] text-white text-xs font-semibold font-poppins tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Book Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#F7F2EE] rounded-3xl mt-8">
            <p className="font-playfair text-xl text-[#1B1B1B]">No services found for "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#C89B5C] text-white text-xs font-poppins font-semibold"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>

      {/* Learn More Detail Modal */}
      <AnimatePresence>
        {selectedServiceDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-[#C89B5C]/30 max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C89B5C] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 overflow-hidden shrink-0">
                <img
                  src={selectedServiceDetail.image}
                  alt={selectedServiceDetail.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-[#C89B5C] text-[10px] uppercase font-poppins font-bold tracking-widest">
                    {selectedServiceDetail.category}
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold mt-2">
                    {selectedServiceDetail.name}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-poppins text-[#E8CFC2] mt-1">
                    <span>Duration: {selectedServiceDetail.duration}</span>
                    <span>•</span>
                    <span className="font-bold text-white text-sm">{selectedServiceDetail.price}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-playfair text-lg font-bold text-[#1B1B1B]">Treatment Overview</h4>
                  <p className="font-poppins text-xs sm:text-sm text-[#333333]/80 mt-2 leading-relaxed font-light">
                    {selectedServiceDetail.longDescription || selectedServiceDetail.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-playfair text-lg font-bold text-[#1B1B1B] mb-3">Key Benefits & Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedServiceDetail.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-poppins text-[#333333] p-2.5 rounded-xl bg-[#F7F2EE]">
                        <Check className="w-4 h-4 text-[#C89B5C] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F7F2EE] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-poppins text-gray-500 block">Starting Price</span>
                    <span className="font-playfair text-2xl font-bold text-[#C89B5C]">{selectedServiceDetail.price}</span>
                  </div>

                  <button
                    onClick={() => {
                      const name = selectedServiceDetail.name;
                      setSelectedServiceDetail(null);
                      onOpenBooking(name);
                    }}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C89B5C] to-[#A77B43] text-white font-poppins font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Treatment</span>
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
