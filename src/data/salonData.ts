import { BusinessInfo, ServiceItem, GalleryItem, ReviewItem, FAQItem } from '../types/salon';

export const BUSINESS_INFO: BusinessInfo = {
  name: "D SALON",
  tagline: "Luxury Beauty Salon & Spa",
  phone: "+91 9899886767",
  whatsappPhone: "919899886767",
  address: "2nd Floor, Dharam Palace, K-1, K Block, Pocket E, Sector 18, Noida, Uttar Pradesh 201301",
  landmark: "Near Sector 18 Metro Station, Above Dharam Palace",
  sector: "Sector 18",
  city: "Noida",
  state: "Uttar Pradesh",
  pincode: "201301",
  googleRating: 5.0,
  reviewCount: 205,
  hours: "Monday - Sunday: 10:00 AM - 8:30 PM",
  googleMapsUrl: "https://maps.google.com/?q=D+SALON+Dharam+Palace+Sector+18+Noida",
  googleEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.14887373887!2d77.3242698!3d28.5653198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce516e812d4a1%3A0xb3ff76c4db618e5e!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
};

export const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85",
    subtitle: "Premier Salon in Sector 18, Noida",
    title: "Reveal Your True Beauty with Confidence",
    highlight: "Confidence"
  },
  {
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=85",
    subtitle: "Signature Hair Transformations",
    title: "Keratin, Balayage & Rejuvenating Spas",
    highlight: "Transformations"
  },
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=85",
    subtitle: "Advanced Medical & Glow Facials",
    title: "Hydra Facial & Bespoke Skin Therapy",
    highlight: "Glow Facials"
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1920&q=85",
    subtitle: "Haute Couture Bridal & Glam Makeup",
    title: "Unforgettable Elegance for Your Special Day",
    highlight: "Bridal Makeup"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "haircut-styling",
    name: "Luxury Haircut & Couture Styling",
    category: "hair",
    description: "Precision haircut customized to your face structure, including hair wash, deep conditioning, and signature blow-dry styling.",
    longDescription: "Our master hair stylists conduct a detailed face-shape and hair texture consultation before executing a precision haircut. Includes luxury hair wash with premium sulfate-free products, scalp massage, and red-carpet blow-dry styling.",
    price: "₹899 onwards",
    numericPrice: 899,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    popular: true,
    benefits: ["Custom face contour cut", "Sulfate-free luxury hair wash", "Relieving head massage", "Thermal blow-dry styling"]
  },
  {
    id: "hair-coloring-balayage",
    name: "Couture Balayage & Global Coloring",
    category: "hair",
    description: "Ammonia-free global hair color or hand-painted balayage/ombre highlights using international luxury color systems.",
    longDescription: "Transform your look with seamless dimension. Using premium L'Oréal Professionnel and Schwarzkopf Royal color palettes, our colorists craft sun-kissed dimension and high-gloss shine while preserving hair integrity.",
    price: "₹3,499 onwards",
    numericPrice: 3499,
    duration: "120 mins",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    popular: true,
    benefits: ["100% Ammonia-free options", "Custom color matching", "Bond-builder protection", "Long-lasting radiant gloss"]
  },
  {
    id: "keratin-treatment",
    name: "Brazilian Keratin Smoothening",
    category: "hair",
    description: "Deep protein rebuilding treatment that eliminates frizzy texture, locks in moisture, and yields silky manageable straight hair for 4-6 months.",
    longDescription: "Infuse pure keratin proteins into the hair cuticles. Repairs heat damage, tames stubborn frizz, cuts daily styling time by 70%, and imparts intense glass-like shine.",
    price: "₹4,999 onwards",
    numericPrice: 4999,
    duration: "150 mins",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
    popular: true,
    benefits: ["Frizz-free for 4-6 months", "Restores damaged hair fibers", "Glass hair high-gloss shine", "Includes home-care guide"]
  },
  {
    id: "luxury-hair-spa",
    name: "Kérastase Deep Nourishing Hair Spa",
    category: "hair",
    description: "Intense scalp detox, steam therapy, and custom hair ritual infused with essential oil concentrates for ultimate softness.",
    longDescription: "An indulgent retreat for dry, stressed hair. Combines deep scalp exfoliation, customized nourishing serum ampoules, warm micro-mist steaming, and a 20-minute relaxing neck and shoulder massage.",
    price: "₹1,499",
    numericPrice: 1499,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    benefits: ["Detoxifies scalp pores", "Stimulates hair growth", "Aromatherapy steam", "Stress relief shoulder massage"]
  },
  {
    id: "hydra-facial-gold",
    name: "Signature 7-Step Hydra Facial",
    category: "skin",
    description: "Medical-grade hydro-dermabrasion, deep pore extraction, antioxidant infusion, and LED light therapy for instant glass skin glow.",
    longDescription: "Our signature non-invasive facial treatment uses hydro-vortex extraction to eliminate blackheads and dead skin, followed by hyaluronic acid hydration, cold hammer soothing, and LED cell renewal therapy.",
    price: "₹2,999",
    numericPrice: 2999,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    badge: "5.0 Rated",
    popular: true,
    benefits: ["Pain-free extraction", "Deep hyaluronic hydration", "Immediate glass skin glow", "Reduces fine lines & pore size"]
  },
  {
    id: "dermalogica-glow-facial",
    name: "Dermalogica Custom Radiance Facial",
    category: "skin",
    description: "Dermatologist-grade facial targeting pigmentation, sun tan, and dullness using active botanical serums and custom jade roller massage.",
    longDescription: "Formulated specifically for Indian skin concerns like tan and hyperpigmentation. Includes double cleansing, enzyme exfoliation, lymphatic facial drainage massage, and specialized vitamin C glow mask.",
    price: "₹2,199",
    numericPrice: 2199,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1512290900676-26c2a4d4b53b?auto=format&fit=crop&w=800&q=80",
    benefits: ["Tan removal & brightened tone", "Customized for skin type", "Lymphatic drainage massage", "Zero downtime"]
  },
  {
    id: "de-tan-skin-cleanup",
    name: "O3+ Oxygen Whitening Cleanup",
    category: "skin",
    description: "Quick deep cleansing ritual with steam, blackhead removal, fruit peel, and soothing pack for refreshed clear skin.",
    longDescription: "Perfect for routine skin maintenance. Thoroughly cleanses pores, removes accumulated city pollution, balances sebum, and revitalizes tired skin.",
    price: "₹999",
    numericPrice: 999,
    duration: "40 mins",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    benefits: ["Pore de-clogging", "Blackhead & whitehead removal", "Instant tan reduction", "Refreshing herbal pack"]
  },
  {
    id: "gel-nail-extensions",
    name: "Luxury Gel / Acrylic Nail Extensions",
    category: "nails",
    description: "Custom nail shaping, durable gel or acrylic extensions with premium O.P.I polish, chrome effects, or hand-painted art.",
    longDescription: "Flawless nail enhancements customized to your desired length and shape (Almond, Coffin, Stiletto, Square). Includes cuticle care, gel color application, UV curing, and hydrating cuticles oil.",
    price: "₹1,799 onwards",
    numericPrice: 1799,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    popular: true,
    benefits: ["Chip-resistant for 4+ weeks", "Custom 3D & chrome nail art", "Protects natural nail bed", "Includes moisturizing massage"]
  },
  {
    id: "rose-spa-pedicure-manicure",
    name: "Aroma Spa Pedicure & Manicure Combo",
    category: "nails",
    description: "Soaking ritual with essential oils, rose petal scrub, foot callus filing, mask, and invigorating reflexology massage.",
    longDescription: "Relax tired feet and hands in a warm whirlpool bath infused with organic bath salts and rose oil. Features deep callus smoothing, exfoliating scrub, hydrating paraffin mask, and soothing massage.",
    price: "₹1,299",
    numericPrice: 1299,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    benefits: ["Relieves foot muscle tension", "Softens calluses & cracked heels", "O.P.I nail lacquer finishing", "Hydrating paraffin therapy"]
  },
  {
    id: "hd-bridal-makeup",
    name: "HD / Airbrush Royal Bridal Makeup",
    category: "makeup",
    description: "Exclusive bridal makeup package including trial, HD airbrush application, hair styling, saree/dupatta draping, and jewelry setting.",
    longDescription: "Our head makeup artist uses luxury products (MAC, Charlotte Tilbury, Huda Beauty, NARS) to craft a sweat-proof, photo-ready bridal look tailored to your outfit and aesthetic vision. Includes lashes, extensions, and hair ornament setting.",
    price: "₹14,999 onwards",
    numericPrice: 14999,
    duration: "240 mins",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    badge: "Royal Luxury",
    popular: true,
    benefits: ["Includes Pre-Bridal Consultation", "Waterproof & 18-Hour transfer proof", "Airbrush options available", "Dupatta & Jewelry Draping included"]
  },
  {
    id: "party-glam-makeup",
    name: "Celebrity Party & Engagement Makeup",
    category: "makeup",
    description: "High-definition glam look for engagements, sangeet, cocktail parties, or festival celebrations.",
    longDescription: "Look camera-ready with seamless skin blending, subtle smokey or cut-crease eye makeup, mink eyelashes, contouring, and long-lasting hair setting.",
    price: "₹3,999",
    numericPrice: 3999,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    benefits: ["Long-wearing 12Hr formula", "Custom eye & lip styling", "Lashes & Hair styling included", "High-contrast photography ready"]
  },
  {
    id: "painless-waxing-threading",
    name: "RICA Liposoluble Painless Waxing Full Body",
    category: "grooming",
    description: "Gentle Italian RICA wax suitable for sensitive skin, removing tan and short hairs while leaving skin velvety smooth.",
    longDescription: "Unlike harsh traditional waxes, Italian RICA wax adheres only to hair strands, reducing discomfort by 80%. Infused with argan and titanium oil, it leaves skin moisturized and tan-free.",
    price: "₹1,999",
    numericPrice: 1999,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    benefits: ["Painless RICA Italian wax", "Reduces ingrown hairs", "Tan removal effect", "Soothing post-wax lotion"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Caramel Honey Balayage & Silk Finish",
    category: "hair",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    beforeImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    description: "Seamless dimension created with ammonia-free global balayage color at D SALON."
  },
  {
    id: "gallery-2",
    title: "Signature Glass Skin Hydra Facial Transformation",
    category: "skin",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    description: "Instant hydration and pore refinement after our 7-step Hydro-dermabrasion treatment."
  },
  {
    id: "gallery-3",
    title: "Couture Bridal Makeup & Royal Draping",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
    description: "High-definition bridal glam with soft nude lips and hand-embroidered dupatta drape."
  },
  {
    id: "gallery-4",
    title: "French Ombre Gel Extensions with Rhinestones",
    category: "nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80",
    description: "Precision acrylic nail sculpting with chip-resistant high gloss top coat."
  },
  {
    id: "gallery-5",
    title: "Luxury Salon Washing & Spa Station Ambience",
    category: "interior",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    description: "Clean, hygienic, ergonomic reclining chairs designed for maximum client relaxation."
  },
  {
    id: "gallery-6",
    title: "Keratin Smoothening Frizz Transformation",
    category: "hair",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    beforeImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    description: "100% frizz elimination and glass hair smoothness lasting 5 months."
  },
  {
    id: "gallery-7",
    title: "Radiant Haldi & Mehendi Engagement Glam",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1000&q=80",
    description: "Fresh floral makeup aesthetic with long-lasting airbrush foundation."
  },
  {
    id: "gallery-8",
    title: "VIP Private Styling Lounge at Sector 18 Noida",
    category: "interior",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80",
    description: "A calm, sanitized sanctuary crafted for privacy, comfort, and luxury service."
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Saachi Jain",
    rating: 5,
    comment: "Had such a lovely experience at the salon today. They really took the time to fix my hair color exactly how I wanted. The staff was patient, kind and genuinely sweet.",
    date: "2 weeks ago",
    serviceReceived: "Global Balayage & Hair Spa",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-2",
    author: "Himanshu Thakur",
    rating: 5,
    comment: "Loved the services there. I have been visiting for pedicures and facials and every experience has been consistently excellent.",
    date: "1 month ago",
    serviceReceived: "Hydra Facial & Aroma Pedicure",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-3",
    author: "Aashu Sa",
    rating: 5,
    comment: "Friendly staff, professional service and great attention to detail. Booking was easy and the experience was relaxing.",
    date: "3 weeks ago",
    serviceReceived: "Keratin Treatment & Gel Extensions",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-4",
    author: "Priyanka Sharma",
    rating: 5,
    comment: "Best salon in Sector 18 Noida! I got my bridal makeup done at D SALON and everyone praised my look. Very hygienic, gentle products, and super professional team.",
    date: "1 month ago",
    serviceReceived: "Royal HD Bridal Makeup Package",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-5",
    author: "Neha Verma",
    rating: 5,
    comment: "Cleanliness is 10/10. Fresh disposable gowns and sanitized tools. The Hydra Facial gave my skin an instant glow that lasted for weeks!",
    date: "2 months ago",
    serviceReceived: "7-Step Hydra Facial",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Sparkles",
    title: "Luxury Experience",
    description: "Soothing ambiance, ergonomic leather chairs, relaxing ambient music, and complimentary artisan refreshments."
  },
  {
    icon: "Award",
    title: "Certified Experts",
    description: "Internationally certified hair stylists and senior estheticians with 10+ years of high-end experience."
  },
  {
    icon: "ShieldCheck",
    title: "Premium International Products",
    description: "We strictly use original L'Oréal Professionnel, Kérastase, Dermalogica, O3+, MAC, and O.P.I products."
  },
  {
    icon: "Zap",
    title: "Latest Beauty Techniques",
    description: "State-of-the-art Hydra-dermabrasion machines, LED photon light therapy, and ammonia-free hair technologies."
  },
  {
    icon: "CheckCircle2",
    title: "Clean & Hygienic Protocols",
    description: "UV-sanitized tools, 100% single-use disposable towels & cape, sterilized brushes, and air filtration."
  },
  {
    icon: "HeartHandshake",
    title: "Personalized Care",
    description: "Complimentary 1-on-1 consultation prior to every service to understand your unique hair & skin goals."
  }
];

export const BEAUTY_PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Understanding Your Vision",
    description: "Our senior specialist examines your skin condition, scalp health, or outfit moodboard to recommend bespoke solutions."
  },
  {
    number: "02",
    title: "Custom Service",
    subtitle: "Precision & Pampering",
    description: "Relax in our plush lounge as certified experts execute your treatment using 100% authentic premium international products."
  },
  {
    number: "03",
    title: "Transformation",
    subtitle: "Reveal & Styling",
    description: "Witness your stunning hair color, glass-skin facial glow, or flawless makeup reveal under optimal natural lighting."
  },
  {
    number: "04",
    title: "Radiant Smile",
    subtitle: "Aftercare & Satisfaction",
    description: "Walk out brimming with confidence, armed with personalized homecare guidance and hair/skin maintenance tips."
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need an appointment or do you accept walk-ins?",
    answer: "While we do accommodate walk-ins subject to stylist availability, we strongly recommend booking an appointment online or via phone (+91 9899886767) to ensure zero wait time and guaranteed slot with your preferred specialist.",
    category: "booking"
  },
  {
    id: "faq-2",
    question: "Which beauty brands and products do you use at D SALON?",
    answer: "We take pride in using only 100% genuine premium international brands including L'Oréal Professionnel, Kérastase, Dermalogica, O3+, Schwarzkopf Professional, MAC Cosmetics, Charlotte Tilbury, Huda Beauty, and O.P.I nail lacquers.",
    category: "services"
  },
  {
    id: "faq-3",
    question: "Do you provide customized bridal makeup packages?",
    answer: "Yes! We offer comprehensive Royal HD & Airbrush Bridal Packages. Packages include pre-bridal skin cleanups, hair trials, saree/dupatta draping, jewel setting, and venue options upon request.",
    category: "bridal"
  },
  {
    id: "faq-4",
    question: "Do you accept online payments & UPI?",
    answer: "Yes, we accept all payment modes including Google Pay, PhonePe, Paytm UPI, Credit/Debit Cards (Visa, MasterCard, Amex), Net Banking, and Cash.",
    category: "payments"
  },
  {
    id: "faq-5",
    question: "What hygiene and sanitization measures are taken?",
    answer: "Client safety is our highest priority. All metal instruments undergo medical-grade UV autoclave sterilization between every client. We strictly use fresh single-use disposable towels, aprons, and sanitized neck bands.",
    category: "hygiene"
  },
  {
    id: "faq-6",
    question: "Where is D SALON located in Noida?",
    answer: "D SALON is conveniently located on the 2nd Floor, Dharam Palace, Sector 18, Noida (Right in the heart of Sector 18 market, a 2-minute walk from Sector 18 Metro Station).",
    category: "booking"
  }
];

export const BRAND_PARTNERS = [
  { name: "L'Oréal Professionnel", logoText: "L'ORÉAL" },
  { name: "Kérastase Paris", logoText: "KÉRASTASE" },
  { name: "Dermalogica", logoText: "dermalogica" },
  { name: "O3+ Professional", logoText: "O3+" },
  { name: "MAC Cosmetics", logoText: "M·A·C" },
  { name: "O.P.I Nails", logoText: "O·P·I" },
  { name: "Schwarzkopf", logoText: "Schwarzkopf" }
];
