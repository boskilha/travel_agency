import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Calendar, 
  Users, 
  BookOpen, 
  Image, 
  MessageSquare, 
  Tag, 
  MessageCircle,
  LogOut
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Package, label: 'Packages' },
  { icon: Calendar, label: 'Bookings' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Users, label: 'Travelers' },
  { icon: BookOpen, label: 'Guides' },
  { icon: Image, label: 'Gallery' },
  { icon: MessageSquare, label: 'Messages', badge: '8' },
  { icon: Tag, label: 'Deals' },
  { icon: MessageCircle, label: 'Feedback' }
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">T</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">Travelle</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Upgrade Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg text-center">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Enhance Your Travelle Experience!
          </h3>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition-colors">
            Upgrade Now
          </button>
        </div>
        
        <button className="flex items-center w-full mt-4 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}