import React from 'react';

const bookings = [
  {
    id: 1,
    name: 'Cornelia Swan',
    package: 'Venice Dreams',
    tourists: 'GOIN',
    date: 'Jun 25 - Jun 30',
    price: '$1,840',
    status: 'Confirmed',
    statusColor: 'green'
  },
  {
    id: 2,
    name: 'Raphael Blackman',
    package: 'Safari Adventure',
    tourists: 'BLFH',
    date: 'Jun 25 - Jul 2',
    price: '$3,360',
    status: 'Pending',
    statusColor: 'yellow'
  },
  {
    id: 3,
    name: 'Ludwig Carlsson',
    package: 'Alpine Escape',
    tourists: 'TOPH',
    date: 'Jun 20 - Jun 23',
    price: '$2,190',
    status: 'Confirmed',
    statusColor: 'green'
  },
  {
    id: 4,
    name: 'Annika Soul-Meyer',
    package: 'Caribbean Cruise',
    tourists: 'SCARN',
    date: 'Jun 24 - Jul 5',
    price: '$2,820',
    status: 'Cancelled',
    statusColor: 'red'
  },
  {
    id: 5,
    name: 'James Dunn',
    package: 'Parisian Romance',
    tourists: 'RITH',
    date: 'Jun 28 - Jun 30',
    price: '$1,690',
    status: 'Confirmed',
    statusColor: 'green'
  }
];

export function RecentBookings() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
        <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-sm font-medium text-gray-500">Name</th>
              <th className="text-left py-3 text-sm font-medium text-gray-500">Package</th>
              <th className="text-left py-3 text-sm font-medium text-gray-500">Tourists</th>
              <th className="text-left py-3 text-sm font-medium text-gray-500">Date</th>
              <th className="text-left py-3 text-sm font-medium text-gray-500">Price</th>
              <th className="text-left py-3 text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b border-gray-100">
                <td className="py-3 text-sm text-gray-900">{booking.name}</td>
                <td className="py-3 text-sm text-gray-600">{booking.package}</td>
                <td className="py-3 text-sm text-gray-600">{booking.tourists}</td>
                <td className="py-3 text-sm text-gray-600">{booking.date}</td>
                <td className="py-3 text-sm font-medium text-gray-900">{booking.price}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.statusColor === 'green' 
                      ? 'bg-green-100 text-green-800'
                      : booking.statusColor === 'yellow'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}