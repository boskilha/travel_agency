import React from 'react';
import { MoreHorizontal, Phone, MessageSquare } from 'lucide-react';

const messages = [
  {
    id: 1,
    name: 'Eurojet Hotel',
    message: 'Are you planning to complete your check-in?',
    time: '1:10 pm',
    avatar: 'EH',
    color: 'blue'
  },
  {
    id: 2,
    name: 'Global Travel Co',
    message: 'We have returned our form.',
    time: '2:10 pm',
    avatar: 'GT',
    color: 'green'
  },
  {
    id: 3,
    name: 'Valencia Ursiana',
    message: 'Hi! I need assistance to My trip in July',
    time: '4:45 pm',
    avatar: 'VU',
    color: 'purple'
  },
  {
    id: 4,
    name: 'Oman Foreast',
    message: 'Hello! I finished my trip payment',
    time: '6:30 pm',
    avatar: 'OF',
    color: 'orange'
  },
  {
    id: 5,
    name: 'Mellinda Jenkins',
    message: 'Can you provide more information',
    time: '8:15 pm',
    avatar: 'MJ',
    color: 'pink'
  },
  {
    id: 6,
    name: 'David Hernandez',
    message: 'I want to book my ticket to france',
    time: '10:00 pm',
    avatar: 'DH',
    color: 'indigo'
  },
  {
    id: 7,
    name: 'Alexandra Green',
    message: 'Our company is interested in your services',
    time: '11:45 pm',
    avatar: 'AG',
    color: 'teal'
  }
];

export function Messages() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
            <div className={`w-8 h-8 rounded-full bg-${message.color}-100 flex items-center justify-center flex-shrink-0`}>
              <span className={`text-xs font-medium text-${message.color}-600`}>
                {message.avatar}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {message.name}
                </h4>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}