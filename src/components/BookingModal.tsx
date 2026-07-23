import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';
import { X, Calendar, Clock, Phone, User, MessageSquare, CheckCircle2, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { AppointmentBooking } from '../types/salon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || SERVICES_LIST[0].name);
  const [preferredDate, setPreferredDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState<AppointmentBooking | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const newBooking: AppointmentBooking = {
      id: `DS-${Math.floor(100000 + Math.random() * 900000)}`,
      name,
      phone,
      serviceId: service,
      serviceName: service,
      preferredDate,
      preferredTime,
      notes,
      status: 'Confirmed',
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('dsalon_bookings') || '[]');
    localStorage.setItem('dsalon_bookings', JSON.stringify([newBooking, ...existing]));

    setBookingSuccess(newBooking);
  };

  const handleSendWhatsAppConfirmation = () => {
    if (!bookingSuccess) return;
    const text = encodeURIComponent(
      `Hello D SALON Sector 18 Noida! I would like to confirm my appointment:\n\n` +
      `📌 *Booking ID:* ${bookingSuccess.id}\n` +
      `👤 *Name:* ${bookingSuccess.name}\n` +
      `📞 *Phone:* ${bookingSuccess.phone}\n` +
      `💆‍♀️ *Service:* ${bookingSuccess.serviceName}\n` +
      `📅 *Date:* ${bookingSuccess.preferredDate}\n` +
      `⏰ *Time Slot:* ${bookingSuccess.preferredTime}\n` +
      (bookingSuccess.notes ? `💬 *Notes:* ${bookingSuccess.notes}\n` : '') +
      `\nPlease verify slot availability. Thank you!`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setBookingSuccess(null);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative max-w-xl w-full bg-[#FFFDFB] rounded-3xl overflow-hidden border-2 border-[#C89B5C]/30 shadow-2xl my-8"
        >
          {/* Header Bar */}
          <div className="bg-[#1B1B1B] text-white p-6 sm:p-8 relative">
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C89B5C] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#C89B5C] font-poppins text-xs uppercase tracking-[0.2em] font-semibold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>D SALON Sector 18 Noida</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
              Reserve Your Luxury Experience
            </h2>
            <p className="font-poppins text-xs text-[#E8CFC2] mt-1 font-light">
              Select your preferred service, date & time slot. Instant slot reservation.
            </p>
          </div>

          {/* Form Body / Confirmation Body */}
          <div className="p-6 sm:p-8">
            {bookingSuccess ? (
              <div className="text-center py-4 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="px-3 py-1 rounded-full bg-[#C89B5C]/20 text-[#C89B5C] text-xs font-bold font-poppins">
                    BOOKING CONFIRMED • ID: {bookingSuccess.id}
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-[#1B1B1B] mt-2">
                    Thank You, {bookingSuccess.name}!
                  </h3>
                  <p className="font-poppins text-xs text-[#333333]/80 mt-1 max-w-md mx-auto">
                    Your appointment request for <strong className="text-[#1B1B1B]">{bookingSuccess.serviceName}</strong> has been logged for <strong className="text-[#C89B5C]">{bookingSuccess.preferredDate}</strong> at <strong className="text-[#C89B5C]">{bookingSuccess.preferredTime}</strong>.
                  </p>
                </div>

                {/* Reservation Voucher Summary */}
                <div className="p-4 rounded-2xl bg-[#F7F2EE] border border-[#C89B5C]/20 text-left font-poppins text-xs space-y-2">
                  <div className="flex justify-between border-b border-[#C89B5C]/10 pb-1.5">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium text-[#1B1B1B]">Sector 18, Noida (2nd Floor, Dharam Palace)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#C89B5C]/10 pb-1.5">
                    <span className="text-gray-500">Phone:</span>
                    <span className="font-medium text-[#1B1B1B]">{bookingSuccess.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Salon Contact:</span>
                    <span className="font-medium text-[#C89B5C]">{BUSINESS_INFO.phone}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleSendWhatsAppConfirmation}
                    className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-poppins font-semibold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Confirmation via WhatsApp</span>
                  </button>

                  <button
                    onClick={resetAndClose}
                    className="w-full py-3 rounded-full border border-gray-300 text-gray-700 font-poppins text-xs font-semibold hover:bg-gray-50 cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-poppins text-xs">
                {/* Full Name */}
                <div>
                  <label className="block text-[#1B1B1B] font-medium mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C89B5C]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/30 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[#1B1B1B] font-medium mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C89B5C]" />
                    Mobile Phone (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/30 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-[#1B1B1B] font-medium mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C89B5C]" />
                    Select Treatment / Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/30 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs cursor-pointer"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.price})
                      </option>
                    ))}
                    <option value="Consultation & Customized Service">
                      Unsure? Book Free Consultation & Custom Service
                    </option>
                  </select>
                </div>

                {/* Date & Time Slot Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1B1B1B] font-medium mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C89B5C]" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/30 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[#1B1B1B] font-medium mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C89B5C]" />
                      Time Slot *
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/30 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Request / Notes */}
                <div>
                  <label className="block text-[#1B1B1B] font-medium mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#C89B5C]" />
                    Special Requests / Hair or Skin Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Sensitive skin, balayage hair color fix, bridal event..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F2EE] border border-[#C89B5C]/30 text-[#1B1B1B] focus:outline-none focus:border-[#C89B5C] focus:bg-white text-xs"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-gray-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#C89B5C] shrink-0" />
                  <span>No upfront payment required. Pay after your service at the salon.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#C89B5C] via-[#B88B4C] to-[#A77B43] text-white font-poppins font-semibold text-xs uppercase tracking-widest shadow-xl gold-button-shadow hover:scale-[1.02] transition-transform cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Booking</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
