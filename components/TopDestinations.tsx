import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tokyo, Japan', value: 35, color: '#3B82F6', participants: '2,198 Participants' },
  { name: 'Sydney, Australia', value: 28, color: '#10B981', participants: '3,876 Participants' },
  { name: 'Paris, France', value: 22, color: '#F59E0B', participants: '2,467 Participants' },
  { name: 'Venice, Italy', value: 15, color: '#EF4444', participants: '2,340 Participants' }
];

export function TopDestinations() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Destinations</h3>
        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
          This Month
        </button>
      </div>
      
      <div className="h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div>
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.participants}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}