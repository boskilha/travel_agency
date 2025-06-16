import React from 'react';
import { MoreHorizontal, User, CreditCard, UserCheck, Star } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'profile',
    user: 'Alberta Carrie',
    action: 'updated his profile and added a new payment method',
    time: '2h ago',
    icon: User,
    color: 'blue'
  },
  {
    id: 2,
    type: 'booking',
    user: 'Cornelia Swan',
    action: 'booked the Venice Dreams package for June 30, 2024',
    time: '4h ago',
    icon: CreditCard,
    color: 'green'
  },
  {
    id: 3,
    type: 'payment',
    user: 'Payment',
    action: 'was processed for Ludwig Carlsson Alpine Escape package',
    time: '6h ago',
    icon: CreditCard,
    color: 'purple'
  },
  {
    id: 4,
    type: 'signup',
    user: 'Carla-Claire Meyer',
    action: 'cancelled her Caribbean Cruise package',
    time: '8h ago',
    icon: UserCheck,
    color: 'orange'
  },
  {
    id: 5,
    type: 'review',
    user: 'Lydia Billings',
    action: 'submitted a review for his recent bookings',
    time: '10h ago',
    icon: Star,
    color: 'yellow'
  }
];

export function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-900">Today</p>
        
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full bg-${activity.color}-100 flex items-center justify-center flex-shrink-0`}>
                <activity.icon className={`w-4 h-4 text-${activity.color}-600`} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}