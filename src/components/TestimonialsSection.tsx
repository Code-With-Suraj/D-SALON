import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS_LIST, BUSINESS_INFO } from '../data/salonData';
import { Star, Quote, CheckCircle2, MessageSquarePlus, X, Send } from 'lucide-react';
import { ReviewItem } from '../types/salon';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_LIST);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // New review form
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [serviceReceived, setServiceReceived] = useState('Hair & Facial');
  const [comment, setComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-user-${Date.now()}`,
      author: authorName,
      rating,
      comment,
      date: 'Just now',
      serviceReceived,
      verified: true,
      avatarUrl: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`
    };

    setReviews([newRev, ...reviews]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setReviewModalOpen(false);
      setAuthorName('');
      setComment('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#1B1B1B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B5C]/20 border border-[#C89B5C]/40 text-[#C89B5C] text-xs font-poppins font-medium mb-3">
            <Star className="w-3.5 h-3.5 fill-[#C89B5C]" />
            <span>205+ Happy Customer Reviews • 5.0 Google Rating</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-[#FFFDFB] mt-2 tracking-tight">
            Client Words & <span className="gold-gradient-text italic font-normal">Experiences</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C89B5C] mx-auto mt-4" />
          <p className="font-poppins text-sm text-[#F7F2EE]/70 mt-4 leading-relaxed font-light">
            Real feedback from our valued guests who trust D SALON Sector 18 Noida for their routine grooming and special occasions.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#232323] border border-[#C89B5C]/20 relative flex flex-col justify-between hover:border-[#C89B5C] transition-all duration-300 shadow-xl group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C89B5C]/15 group-hover:text-[#C89B5C]/30 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#C89B5C] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C89B5C] text-[#C89B5C]" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="font-poppins text-xs sm:text-sm text-[#F7F2EE]/90 leading-relaxed font-light italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Verified Tag */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {review.avatarUrl ? (
                    <img
                      src={review.avatarUrl}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-[#C89B5C]"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#C89B5C] text-white flex items-center justify-center font-bold text-sm">
                      {review.author[0]}
                    </div>
                  )}
                  <div>
                    <h4 className="font-playfair text-base font-bold text-[#FFFDFB]">
                      — {review.author}
                    </h4>
                    {review.serviceReceived && (
                      <p className="text-[10px] font-poppins text-[#C89B5C] mt-0.5">
                        {review.serviceReceived}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-poppins">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Actions Banner */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-6 p-8 rounded-3xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-[#C89B5C]/30">
          <div>
            <h3 className="font-playfair text-xl font-bold text-[#FFFDFB]">
              Visited D SALON Noida Recently?
            </h3>
            <p className="font-poppins text-xs text-[#E8CFC2] mt-1 font-light">
              We appreciate your feedback! Share your experience on Google or directly with our team.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setReviewModalOpen(true)}
              className="px-6 py-3 rounded-full bg-[#C89B5C] hover:bg-[#A77B43] text-white text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Leave a Review</span>
            </button>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#C89B5C]/40 hover:border-[#C89B5C] text-white text-xs font-poppins font-semibold uppercase tracking-wider transition-all duration-300"
            >
              View on Google Maps ↗
            </a>
          </div>
        </div>

      </div>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {reviewModalOpen && (
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
              className="bg-[#232323] rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#C89B5C]/40 shadow-2xl relative"
            >
              <button
                onClick={() => setReviewModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                Share Your D SALON Experience
              </h3>
              <p className="font-poppins text-xs text-[#E8CFC2] mb-6">
                Your review helps other Sector 18 Noida residents discover luxury beauty.
              </p>

              {reviewSubmitted ? (
                <div className="py-8 text-center text-emerald-400 font-poppins text-sm font-semibold flex flex-col items-center gap-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  <span>Thank you! Your review has been recorded.</span>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4 text-xs font-poppins">
                  <div>
                    <label className="block text-gray-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Saachi Jain"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#C89B5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1">Service Received</label>
                    <input
                      type="text"
                      placeholder="e.g. Hair Spa & Hydra Facial"
                      value={serviceReceived}
                      onChange={(e) => setServiceReceived(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#C89B5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setRating(num)}
                          className={`p-2 rounded-lg border cursor-pointer ${
                            rating >= num ? 'bg-[#C89B5C]/20 border-[#C89B5C] text-[#C89B5C]' : 'border-white/10 text-gray-500'
                          }`}
                        >
                          ★ {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1">Your Feedback *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe your salon experience..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#C89B5C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C89B5C] to-[#A77B43] text-white font-semibold text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
