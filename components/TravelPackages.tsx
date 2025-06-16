import React from 'react';
import { MapPin, Star, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const packages = [
  {
    id: 1,
    title: 'Cultural Exploration',
    location: 'Seoul, South Korea',
    price: '$2,100',
    duration: '7 Days / 6 Nights',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Historic Treasures',
    location: 'Venice, Italy',
    price: '$1,500',
    duration: '5 Days / 4 Nights',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Urban Adventure',
    location: 'Serengeti, Tanzania',
    price: '$3,200',
    duration: '10 Days / 9 Nights',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=200&fit=crop'
  }
];

const stats = [
  { label: 'Total Trips', value: '1,200' },
  { label: 'Done', value: '820' },
  { label: 'Booked', value: '465' },
  { label: 'Cancelled', value: '115' }
];

export function TravelPackages() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Travel Packages</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200">
            Latest
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200">
            View All
          </button>
        </div>
      </div>
      
      {/* Statistics */}
      <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-32">
              <ImageWithFallback
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-1 mb-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{pkg.location}</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">{pkg.title}</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-blue-600">{pkg.price}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{pkg.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{pkg.duration}</span>
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                  Book Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}