import React from 'react';
import { Calendar, Users, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'Total Booking',
    value: '1,200',
    change: '+2.88%',
    positive: true,
    icon: Calendar,
    color: 'blue'
  },
  {
    title: 'Total New Customers',
    value: '2,845',
    change: '-1.40%',
    positive: false,
    icon: Users,
    color: 'green'
  },
  {
    title: 'Total Earnings',
    value: '$12,890',
    change: '+3.75%',
    positive: true,
    icon: DollarSign,
    color: 'purple'
  }
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              stat.positive 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}