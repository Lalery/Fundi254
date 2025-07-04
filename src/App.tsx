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

  const filteredProviders = providers.filter((provider) => {
    const matchesCategory =
      selectedCategory === 'All' || provider.profession === selectedCategory;
    const matchesSearch =
      provider.name.toLowerCase().includes(search.toLowerCase()) ||
      provider.profession.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
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
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
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
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">WhatsApp</button>
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">Book</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
