import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardContent } from './components/DashboardContent';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardContent />
      </div>
    </div>
  );
}