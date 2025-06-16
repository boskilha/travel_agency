import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const trips = [
  {
    id: 1,
    title: 'Remote Galaxy',
    destination: 'Paris, France',
    date: 'Jul 18, 25 July',
    participants: 32,
    type: 'Cultural Exploration',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Adventure Isle',
    destination: 'Tokyo, Japan',
    date: 'Jul 21, 28 July',
    participants: 28,
    type: 'City Highlights',
    color: 'purple'
  },
  {
    id: 3,
    title: 'Adventure Isle',
    destination: 'Sydney, Australia',
    date: 'Aug 1, 8 Aug',
    participants: 45,
    type: 'City Highlights',
    color: 'green'
  },
  {
    id: 4,
    title: 'Adventure Isle',
    destination: 'New York, USA',
    date: 'Aug 10, 17 Aug',
    participants: 23,
    type: 'City Highlights',
    color: 'orange'
  }
];

export function UpcomingTrips() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Trips</h3>
        <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
      </div>
      
      <div className="space-y-4">
        {trips.map((trip) => (
          <div key={trip.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <div className={`w-3 h-3 rounded-full bg-${trip.color}-500 mt-2`}></div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{trip.title}</h4>
              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{trip.destination}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{trip.date}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">{trip.type}</span>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Users className="w-3 h-3" />
                  <span>{trip.participants}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}