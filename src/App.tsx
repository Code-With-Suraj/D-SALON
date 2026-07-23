import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { BeautyProcess } from './components/BeautyProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    } else {
      setSelectedServiceForBooking('');
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#333333] font-poppins antialiased selection:bg-[#C89B5C] selection:text-white">
      {/* Preloader Animation */}
      <Preloader />

      {/* Sticky Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main id="main-content">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <WhyChooseUs />
        <AboutSection />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <GallerySection onOpenBooking={handleOpenBooking} />
        <BeautyProcess />
        <TestimonialsSection />
        <FAQSection />
        <BookingSection onOpenBooking={handleOpenBooking} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Controls (WhatsApp, Back To Top, Mobile Call Bar) */}
      <FloatingControls onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={selectedServiceForBooking}
      />
    </div>
  );
}
