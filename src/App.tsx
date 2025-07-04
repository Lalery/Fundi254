import React, { useState } from 'react';
import { User } from 'lucide-react';

const providers = [
  {
    name: 'John Mwangi',
    profession: 'Electrician',
    rating: 4.8,
    reviews: 127,
    location: 'Nairobi, Westlands',
    skills: ['Wiring', 'Solar Installation'],
    price: 'KSh 1,500/hour',
    availability: 'Available Today',
  },
  {
    name: 'Grace Akinyi',
    profession: 'House Cleaner',
    rating: 4.9,
    reviews: 203,
    location: 'Nairobi, Kilimani',
    skills: ['Deep Cleaning', 'Laundry'],
    price: 'KSh 800/day',
    availability: 'Available Tomorrow',
  },
  {
    name: 'Peter Kimani',
    profession: 'Plumber',
    rating: 4.7,
    reviews: 89,
    location: 'Nairobi, Kasarani',
    skills: ['Pipe Installation', 'Leak Repairs'],
    price: 'KSh 1,200/hour',
    availability: 'Available Today',
  },
  {
    name: 'Mary Wambui',
    profession: 'Math Tutor',
    rating: 4.95,
    reviews: 150,
    location: 'Nairobi, Parklands',
    skills: ['Algebra', 'Calculus'],
    price: 'KSh 1,000/hour',
    availability: 'Available Today',
  },
  {
    name: 'Samuel Otieno',
    profession: 'Carpenter',
    rating: 4.6,
    reviews: 78,
    location: 'Nairobi, Donholm',
    skills: ['Furniture Making', 'Repairs'],
    price: 'KSh 1,800/hour',
    availability: 'Available Tomorrow',
  },
  {
    name: 'Janet Njeri',
    profession: 'Cook',
    rating: 4.85,
    reviews: 112,
    location: 'Nairobi, Lavington',
    skills: ['Kenyan Cuisine', 'Baking'],
    price: 'KSh 2,000/day',
    availability: 'Available Today',
  },
];

const categories = [
  'All',
  'Electrician',
  'House Cleaner',
  'Plumber',
  'Math Tutor',
  'Carpenter',
  'Cook',
];

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingProvider, setBookingProvider] = useState(null as null | typeof providers[0]);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    duration: '',
    location: '',
    description: '',
  });

  const filteredProviders = providers.filter((provider) => {
    const matchesCategory =
      selectedCategory === 'All' || provider.profession === selectedCategory;
    const matchesSearch =
      provider.name.toLowerCase().includes(search.toLowerCase()) ||
      provider.profession.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (provider: typeof providers[0]) => {
    setBookingProvider(provider);
    setBookingData({ date: '', time: '', duration: '', location: '', description: '' });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setBookingProvider(null);
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const getWhatsAppBookingUrl = () => {
    if (!bookingProvider) return '#';
    const msg = `Hello, I would like to book ${bookingProvider.name} (${bookingProvider.profession}) on ${bookingData.date} at ${bookingData.time} for ${bookingData.duration}. Location: ${bookingData.location}. Description: ${bookingData.description}`;
    return `https://wa.me/254700000000?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-green-600 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Fundi254</h1>
          <p className="text-lg text-white mb-6">Find Trusted Local Service Providers</p>
          <p className="text-white mb-6">
            Connect with skilled fundis, cleaners, tutors, and more via WhatsApp
          </p>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Search for services or providers..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-green-600 text-white border-green-600'
                  : 'bg-white text-green-700 border-green-300 hover:bg-green-50'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProviders.map((provider) => (
            <div
              key={provider.name}
              className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{provider.name}</h2>
                  <p className="text-sm text-gray-600">{provider.profession}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-bold mr-1">★</span>
                <span className="text-gray-800 font-medium mr-2">{provider.rating}</span>
                <span className="text-gray-500 text-sm">({provider.reviews} reviews)</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">{provider.location}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {provider.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {provider.skills.length > 1 && (
                  <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-xs">
                    +1 more
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900">{provider.price}</span>
                <span className="text-green-600 font-medium text-sm">{provider.availability}</span>
              </div>
              <div className="flex gap-2 mt-auto">
                <a
                  href={`https://wa.me/254700000000?text=Hi%20${encodeURIComponent(provider.name)},%20I%20am%20interested%20in%20your%20${encodeURIComponent(provider.profession)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition text-center"
                >
                  WhatsApp
                </a>
                <button
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition text-center"
                  onClick={() => openModal(provider)}
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Booking Form */}
        {modalOpen && bookingProvider && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 relative animate-fade-in">
              <h2 className="text-2xl font-bold mb-2">Book {bookingProvider.name}</h2>
              <p className="text-gray-600 mb-4">{bookingProvider.profession} &bull; {bookingProvider.price}</p>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  window.open(getWhatsAppBookingUrl(), '_blank');
                }}
              >
                <label className="block mb-2 text-sm font-medium">Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={bookingData.date}
                  onChange={handleBookingChange}
                  className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <label className="block mb-2 text-sm font-medium">Time *</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={bookingData.time}
                  onChange={handleBookingChange}
                  className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <label className="block mb-2 text-sm font-medium">Duration</label>
                <select
                  name="duration"
                  value={bookingData.duration}
                  onChange={handleBookingChange}
                  className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Select duration</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                  <option value="Half day">Half day</option>
                  <option value="Full day">Full day</option>
                </select>
                <label className="block mb-2 text-sm font-medium">Location *</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={bookingData.location}
                  onChange={handleBookingChange}
                  placeholder="Enter your location"
                  className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <label className="block mb-2 text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={bookingData.description}
                  onChange={handleBookingChange}
                  placeholder="Describe the work needed..."
                  className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows={3}
                />
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    Book via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">F</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Fundi254</h3>
            </div>
          </div>
          <p className="text-gray-400">
            Connecting Kenyans with trusted local service providers
          </p>
          <p className="text-gray-500 mt-2 text-xs">
            © 2025 Fundi254. All rights reserved. | WhatsApp-based booking platform for Kenya
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
