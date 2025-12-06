export interface Amenity {
  icon: string;
  label: string;
  description?: string;
}

export interface Room {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  amenities: string[];
  maxGuests: number;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
