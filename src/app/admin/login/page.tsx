"use client";
import React from 'react';

export default function Admin() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 flex flex-col justify-between shadow-lg rounded-r-2xl">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-500 mb-8">Admin Dashboard</h2>
          <ul>
            {['Dashboard', 'Orders', 'Users', 'Products', 'Settings'].map((item, index) => (
              <li
                key={index}
                className="mb-5 p-3 rounded-md hover:bg-blue-700 transition-all cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8 space-y-6">
        {/* Topbar */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Logout
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-4xl font-bold text-blue-600">500</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-gray-700">Total Orders</h3>
            <p className="text-4xl font-bold text-blue-600">120</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-gray-700">Total Revenue</h3>
            <p className="text-4xl font-bold text-green-600">$5000</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-gray-700">Pending Orders</h3>
            <p className="text-4xl font-bold text-yellow-500">15</p>
          </div>
        </div>
      </div>
    </div>
  );
}
