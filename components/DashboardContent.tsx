import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { StatsCards } from './StatsCards';
import { RevenueChart } from './RevenueChart';
import { TopDestinations } from './TopDestinations';
import { TravelPackages } from './TravelPackages';
import { Calendar } from './Calendar';
import { UpcomingTrips } from './UpcomingTrips';
import { Messages } from './Messages';
import { RecentBookings } from './RecentBookings';
import { RecentActivity } from './RecentActivity';

export function DashboardContent() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search anything"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-semibold">SH</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Susan Horwitz</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Stats Cards */}
        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          
          {/* Top Destinations */}
          <div>
            <TopDestinations />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Travel Packages */}
          <div className="lg:col-span-2">
            <TravelPackages />
          </div>
          
          {/* Calendar */}
          <div>
            <Calendar />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Messages */}
          <div>
            <Messages />
          </div>
          
          {/* Upcoming Trips */}
          <div>
            <UpcomingTrips />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <RecentBookings />
          </div>
          
          {/* Recent Activity */}
          <div>
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
}