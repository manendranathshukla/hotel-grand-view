import { Amenity, Room, Review } from './types';

// Data derived from Hotel Grand View, Pimple Saudagar, Pune
export const HOTEL_NAME = "Hotel Grand View";
export const HOTEL_LOCATION = "Pimple Saudagar, Pune, Maharashtra, India";
export const HOTEL_DESC = "Experience luxury and comfort at Hotel Grand View. Located in the heart of Pune's Pimple Saudagar, we offer a perfect blend of modern amenities and traditional hospitality. Whether for business or leisure, our premium rooms and dedicated service ensure a memorable stay.";

// Using placeholder images from unsplash/picsum as requested, but mapped to context
export const HERO_IMAGE = "https://images.trvl-media.com/lodging/118000000/117240000/117236000/117235939/w1079h718x0y4-192e460a.jpg?impolicy=resizecrop&rw=1200&ra=fit"; 

export const AMENITIES: Amenity[] = [
  { icon: 'Wifi', label: 'Free High-Speed WiFi', description: 'Stay connected throughout the property.' },
  { icon: 'Wind', label: 'Air Conditioning', description: 'Climate control in every room.' },
  { icon: 'Car', label: 'Free Parking', description: 'Secure on-site parking for guests.' },
  { icon: 'Utensils', label: 'In-house Dining', description: 'Fresh breakfast and room service available.' },
  { icon: 'Clock', label: '24/7 Front Desk', description: 'Round-the-clock assistance.' },
  { icon: 'CheckCircle', label: 'Daily Housekeeping', description: 'Immaculate cleanliness guaranteed.' },
];

export const ROOMS: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 2850,
    currency: 'INR',
    description: 'A spacious 200 sq.ft room featuring a king-size bed, modern workstation, and city views. Perfect for solo travelers or couples.',
    image: 'https://images.trvl-media.com/lodging/118000000/117240000/117236000/117235939/aba4e44f.jpg?impolicy=resizecrop&rw=1200&ra=fit', // Replace with actual URL
    amenities: ['King Bed', 'AC', 'WiFi', 'TV', 'Tea/Coffee Maker'],
    maxGuests: 2
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Room',
    price: 3500,
    currency: 'INR',
    description: 'Elevate your stay with our Super Deluxe rooms. Includes a seating area, premium toiletries, and enhanced soundproofing.',
    image: 'https://images.trvl-media.com/lodging/118000000/117240000/117236000/117235939/79691d41.jpg?impolicy=resizecrop&rw=1200&ra=fit', // Replace with actual URL
    amenities: ['King Bed', 'Sitting Area', 'Premium Bath', 'City View', 'Mini Bar'],
    maxGuests: 3
  },
  {
    id: 'suite',
    name: 'Grand Suite',
    price: 5200,
    currency: 'INR',
    description: 'The ultimate luxury experience. Separate living room, bathtub, and panoramic views of Pune.',
    image: 'https://images.trvl-media.com/lodging/118000000/117240000/117236000/117235939/b6cccfa2.jpg?impolicy=resizecrop&rw=1200&ra=fit', // Replace with actual URL
    amenities: ['Living Room', 'Bathtub', 'Welcome Drink', 'Late Checkout', 'Mountain View'],
    maxGuests: 4
  }
];

export const GALLERY_IMAGES = [
  "https://images.trvl-media.com/lodging/118000000/117240000/117236000/117235939/2e1399b6.jpg?impolicy=resizecrop&rw=1200&ra=fit",
  "https://images.trvl-media.com/lodging/118000000/117240000/117236000/117235939/53368a43.jpg?impolicy=resizecrop&rw=1200&ra=fit",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940&auto=format&fit=crop"
];

export const REVIEWS: Review[] = [
  { id: 1, author: "Rajesh K.", rating: 5, text: "Excellent stay in Pimple Saudagar. The staff was very courteous and the rooms were spotless.", date: "2024-02-15" },
  { id: 2, author: "Sarah M.", rating: 4, text: "Great value for money. The location is perfect for business travelers visiting Pune.", date: "2024-01-20" },
  { id: 3, author: "Amit P.", rating: 5, text: "The Grand View lives up to its name. Very comfortable beds and good breakfast.", date: "2024-03-01" }
];
