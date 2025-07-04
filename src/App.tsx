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

// Add some sample reviews for demonstration
const sampleReviews = [
  { reviewer: 'Alice', rating: 5, comment: 'Excellent service!' },
  { reviewer: 'Brian', rating: 4, comment: 'Very professional and on time.' },
  { reviewer: 'Cynthia', rating: 5, comment: 'Highly recommended.' },
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
  const [skillsModal, setSkillsModal] = useState<{ open: boolean; skills: string[]; name: string } | null>(null);
  const [reviewsModal, setReviewsModal] = useState<{ open: boolean; provider: typeof providers[0] | null } | null>(null);
  const [filterModal, setFilterModal] = useState(false);
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterMinPrice, setFilterMinPrice] = useState('');
  const [filterMaxPrice, setFilterMaxPrice] = useState('');

  // Helper to extract numeric value from price string
  const getPriceValue = (price: string) => {
    const match = price.replace(/,/g, '').match(/\d+/g);
    return match ? parseInt(match[0], 10) : 0;
  };

  const filteredProviders = providers.filter((provider) => {
    const matchesCategory =
      (selectedCategory === 'All' || provider.profession === selectedCategory) &&
      (filterCategory === 'All' || provider.profession === filterCategory);
    const matchesSearch =
      provider.name.toLowerCase().includes(search.toLowerCase()) ||
      provider.profession.toLowerCase().includes(search.toLowerCase());
    const price = getPriceValue(provider.price);
    const matchesMin = filterMinPrice ? price >= parseInt(filterMinPrice, 10) : true;
    const matchesMax = filterMaxPrice ? price <= parseInt(filterMaxPrice, 10) : true;
    return matchesCategory && matchesSearch && matchesMin && matchesMax;
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
      {/* Top Navigation Bar */}
      <nav className="bg-white w-full shadow-sm flex items-center justify-between px-8 py-3">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center mr-3">
            <span className="text-white text-xl font-bold">F</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Fundi254</span>
        </div>
        <span className="text-gray-700 text-base font-medium hidden md:block">Trusted Local Services in Kenya</span>
      </nav>
      {/* Header/Hero Section */}
      <header className="bg-green-600 pb-16 pt-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">Find Trusted Local Service Providers</h2>
          <p className="text-xl text-white mb-8 text-center">Connect with skilled fundis, cleaners, tutors, and more via WhatsApp</p>
          <div className="flex justify-center gap-2">
            <div className="bg-white rounded-2xl shadow-lg px-6 py-4 w-full max-w-2xl flex items-center">
              <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-lg px-2"
                placeholder="Search for services or providers..."
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              />
            </div>
            <button
              className="ml-2 px-5 py-3 rounded-2xl bg-white shadow-lg text-green-700 font-semibold hover:bg-green-50 border border-green-200 flex items-center gap-2"
              onClick={() => setFilterModal(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M6 10h12M8 14h8M10 18h4" /></svg>
              Filter
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
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
          {filteredProviders.map((provider) => {
            const extraSkills = provider.skills.length > 2 ? provider.skills.slice(2) : [];
            return (
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
                  <button
                    className="text-blue-600 underline text-sm focus:outline-none"
                    onClick={() => setReviewsModal({ open: true, provider })}
                  >
                    ({provider.reviews} reviews)
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-2">{provider.location}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {provider.skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {extraSkills.length > 0 && (
                    <button
                      className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-xs underline focus:outline-none"
                      onClick={() => setSkillsModal({ open: true, skills: provider.skills, name: provider.name })}
                    >
                      +{extraSkills.length} more
                    </button>
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
            );
          })}
        </div>

        {/* Skills Modal */}
        {skillsModal && skillsModal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-lg max-w-xs w-full p-6 relative animate-fade-in">
              <h3 className="text-lg font-bold mb-4">All Skills for {skillsModal.name}</h3>
              <ul className="mb-4">
                {skillsModal.skills.map((skill) => (
                  <li key={skill} className="mb-2 text-gray-700">{skill}</li>
                ))}
              </ul>
              <button
                className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
                onClick={() => setSkillsModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Reviews Modal */}
        {reviewsModal && reviewsModal.open && reviewsModal.provider && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative animate-fade-in">
              <h3 className="text-lg font-bold mb-4">Reviews for {reviewsModal.provider.name}</h3>
              <ul className="mb-4">
                {sampleReviews.map((review, idx) => (
                  <li key={idx} className="mb-3">
                    <div className="flex items-center mb-1">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-semibold text-gray-800 mr-2">{review.rating}</span>
                      <span className="text-gray-700">{review.reviewer}</span>
                    </div>
                    <div className="text-gray-600 text-sm">{review.comment}</div>
                  </li>
                ))}
              </ul>
              <button
                className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
                onClick={() => setReviewsModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Filter Modal */}
        {filterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-lg max-w-xs w-full p-6 relative animate-fade-in">
              <h3 className="text-lg font-bold mb-4">Filter Providers</h3>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Service/Profession</label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={filterCategory}
                  onChange={e => setFilterCategory(e.target.value)}
                >
                  <option value="All">All</option>
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4 flex gap-2">
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium">Min Price</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={filterMinPrice}
                    onChange={e => setFilterMinPrice(e.target.value)}
                    placeholder="e.g. 500"
                    min="0"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium">Max Price</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={filterMaxPrice}
                    onChange={e => setFilterMaxPrice(e.target.value)}
                    placeholder="e.g. 2000"
                    min="0"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                  onClick={() => {
                    setFilterCategory('All');
                    setFilterMinPrice('');
                    setFilterMaxPrice('');
                    setFilterModal(false);
                  }}
                >
                  Reset
                </button>
                <button
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
                  onClick={() => setFilterModal(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Booking Form */}
        {modalOpen && bookingProvider && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 relative animate-fade-in">
              <h2 className="text-2xl font-bold mb-2">Book {bookingProvider.name}</h2>
              <p className="text-gray-600 mb-4">{bookingProvider.profession} &bull; {bookingProvider.price}</p>
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
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
