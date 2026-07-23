export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'nails' | 'makeup' | 'grooming';
  description: string;
  longDescription?: string;
  price: string;
  numericPrice: number;
  duration: string;
  image: string;
  badge?: string;
  popular?: boolean;
  benefits: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'nails' | 'bridal' | 'interior';
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  serviceReceived?: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'services' | 'bridal' | 'payments' | 'hygiene';
}

export interface AppointmentBooking {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'Pending' | 'Confirmed';
  createdAt: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsappPhone: string;
  address: string;
  landmark: string;
  sector: string;
  city: string;
  state: string;
  pincode: string;
  googleRating: number;
  reviewCount: number;
  hours: string;
  googleMapsUrl: string;
  googleEmbedUrl: string;
}
