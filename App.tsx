import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Phone, Mail, Star, 
  Wifi, Wind, Car, Utensils, Clock, CheckCircle, 
  ChevronDown, Facebook, Instagram, Twitter
} from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';
import { HOTEL_NAME, HOTEL_LOCATION, HOTEL_DESC, HERO_IMAGE, ROOMS, AMENITIES, REVIEWS, GALLERY_IMAGES } from './constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wider">
          GRAND<span className="text-green-500">VIEW</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/90 hover:text-green-400 font-medium text-sm tracking-wide transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-gray-700 shadow-xl">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 text-white hover:bg-white/5 hover:text-green-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Hotel Grand View Exterior" 
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="mb-4 flex justify-center space-x-2 text-green-400">
          {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Welcome to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Grand View</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
          Experience the pinnacle of luxury in Pimple Saudagar. Where modern elegance meets timeless hospitality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#rooms" className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold tracking-widest uppercase rounded-sm transition-all transform hover:-translate-y-1 shadow-lg">
            Book Your Stay
          </a>
          <a href="#amenities" className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-primary font-bold tracking-widest uppercase rounded-sm transition-all">
            Explore Amenities
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce left-1/2 transform -translate-x-1/2 text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-accent z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2940&auto=format&fit=crop" 
              alt="Hotel Interior" 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl rounded-sm"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-accent z-0"></div>
          </div>
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 mb-8">
              A Sanctuary of <br/> Comfort & Class
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {HOTEL_DESC}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Strategically located near Pune's business hubs yet tucked away for tranquility, Hotel Grand View is the preferred choice for discerning travelers.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-serif font-bold text-accent mb-2">100+</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wide">Luxury Rooms</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif font-bold text-accent mb-2">4.5</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wide">Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const iconMap: Record<string, React.ReactNode> = {
  'Wifi': <Wifi size={32} />,
  'Wind': <Wind size={32} />,
  'Car': <Car size={32} />,
  'Utensils': <Utensils size={32} />,
  'Clock': <Clock size={32} />,
  'CheckCircle': <CheckCircle size={32} />
};

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-400 font-bold tracking-widest uppercase text-sm">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4">Premium Amenities</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity, idx) => (
            <div key={idx} className="group p-8 border border-white/10 hover:border-green-500/50 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-sm">
              <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[amenity.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">{amenity.label}</h3>
              <p className="text-gray-400 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Accommodation</span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mt-4">Stay in Style</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {ROOMS.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary px-4 py-1 font-bold rounded-full text-sm shadow-sm">
                  Max {room.maxGuests} Guests
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-2xl font-serif font-bold text-primary">{room.name}</h3>
                </div>
                <div className="text-accent font-bold text-xl mb-4">
                  ₹{room.price.toLocaleString('en-IN')} <span className="text-gray-400 text-sm font-normal">/ night</span>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.amenities.slice(0, 3).map((am, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {am}
                    </span>
                  ))}
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">+{room.amenities.length - 3} more</span>
                </div>

                <button className="w-full bg-primary text-white py-3 font-bold uppercase tracking-wider hover:bg-accent transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Visual Tour</span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mt-4">Our Gallery</h2>
        </div>
        
        {/* Masonry-style Grid using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white font-serif italic text-lg tracking-wider">View</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-accent text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Guest Experiences</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
              <div className="flex space-x-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg italic mb-6 font-serif opacity-90">"{review.text}"</p>
              <div className="flex justify-between items-center opacity-75 text-sm">
                <span className="font-bold uppercase tracking-wide">{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Get in Touch</span>
            <h2 className="text-4xl font-serif text-primary mt-4 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-10">
              Have questions or special requests? Reach out to our front desk team for personalized assistance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 text-accent rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Location</h4>
                  <p className="text-gray-600">{HOTEL_NAME}, {HOTEL_LOCATION}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 text-accent rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <p className="text-gray-600">+91 20 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 text-accent rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-gray-600">reservations@hotelgrandview.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-accent" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-accent" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-accent" />
              <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-accent"></textarea>
              <button type="button" className="w-full bg-primary text-white py-4 font-bold uppercase tracking-wider hover:bg-accent transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#25282a] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-serif font-bold tracking-wider block mb-6">
              GRAND<span className="text-green-500">VIEW</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your luxury escape in the heart of Pune. Experience unmatched hospitality and comfort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-green-500">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-green-500">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 px-4 py-2 w-full focus:outline-none focus:border-green-500" />
              <button className="bg-green-600 px-4 py-2 hover:bg-green-700 transition-colors">
                <ChevronDown className="transform -rotate-90" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Hotel Grand View. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-green-200 selection:text-green-900">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Rooms />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}