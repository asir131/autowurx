

"use client"

import React, { useState } from 'react';
import carImage from '@/assets/banner/car.png';
import redBrander from '@/assets/banner/redbrand.png';
import Image from 'next/image';

export default function NewsInsight() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', active: selectedCategory === 'All' },
    { name: 'Automotive News', active: selectedCategory === 'Automotive News' },
    { name: 'Used Cars', active: selectedCategory === 'Used Cars' },
    { name: 'Car Maintenance', active: selectedCategory === 'Car Maintenance' },
    { name: 'Car Reviews', active: selectedCategory === 'Car Reviews' },
    { name: 'New Cars', active: selectedCategory === 'New Cars' },
    { name: 'EV Vehicles', active: selectedCategory === 'EV Vehicles' },
    { name: 'Sell Your Car', active: selectedCategory === 'Sell Your Car' },
  ];

  const newsItems = [
    {
      title: "Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market",
      category: 'EV Vehicles',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: "Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market",
      category: 'EV Vehicles',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: "Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market",
      category: 'EV Vehicles',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: "Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market",
      category: 'EV Vehicles',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: "Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market",
      category: 'EV Vehicles',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: 'Why is My Car Heater Blowing Cold Air? Fix It Fast!',
      category: 'Car Maintenance',
      date: 'Apr 6, 2025 • 4 min read',
      image: carImage,
    },
    {
      title: 'A Holiday Guide to Buying a Used Vehicle and Saving Big',
      category: 'Automotive News',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: 'Avoid Engine Damage! How to Check Oil Levels in 6 Steps',
      category: 'Car Maintenance',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: "Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market",
      category: 'EV Vehicles',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: 'How Long Should It Take Your Car Warm Up? And Why Less is More',
      category: 'Car Maintenance',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: "Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market",
      category: 'EV Vehicles',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
    {
      title: "Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market",
      category: 'EV Vehicles',
      date: 'Apr 6, 2025 • 4 min read',
      image: redBrander,
    },
  ];

  // Filter news items based on selected category
  const filteredNewsItems =
    selectedCategory === 'All'
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  // Handle category click
  const handleCategoryClick = (categoryName: React.SetStateAction<string>) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <div className="w-full bg-gray-50 p-6">
        <div className="container mx-auto">
          <h2 className="text-[60px] font-semibold text-gray-700 mb-4">
            Featured News & Insights
          </h2>
          <div className="flex flex-col md:flex-row rounded-lg justify-between">
            <div className="md:w-[788px] mr-10">
              <Image
                src={carImage}
                alt="EV Vehicles"
                className="w-full h-[466px] rounded-md object-cover md:rounded-md"
              />
            </div>
            <div className="md:w-[916px] p-10">
              <button className="border p-3 rounded bg-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wide">EV Vehicles</p>
              </button>
              <h3 className="text-[40px] font-bold text-gray-900 mt-2">
                Tesla&#39;s Shake-Up And New Competitors Into the U.S. EV Market
              </h3>
              <p className="text-gray-600 mt-2 text-[20px]">
                Charging a Tesla can vary from 30 minutes to several hours, depending...
              </p>
              <div className="flex items-center mt-4">
                <p className="text-[20px] text-gray-500">Published on Sep 27, 2024 • 4 min read</p>
              </div>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">o</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6">
        <div className="container mx-auto">
          <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className={`px-3 py-1 rounded-full text-sm ${
                  cat.active
                    ? 'bg-yellow-400 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
            {filteredNewsItems.length > 0 ? (
              filteredNewsItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-4 bg-white text-black">
                    <p className="text-xs uppercase">{item.category}</p>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-xs mt-2">{item.date}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No news items found for this category.</p>
            )}
          </div>
          <div className="mt-6">
            <button className="border text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
              Read the Latest Trends
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F5F555] pt-10">
        <div className="container pb-20">
          <div className="">
            <h1 className="text-3xl font-bold text-gray-900">Latest News</h1>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredNewsItems.slice(0, 4).map((item, index) => (
              <div key={index} className="rounded-lg shadow-md">
                <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
                  <Image src={item.image} alt={item.title} className="w-full h-[250px]" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.category}: {item.title}
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="bg-gray-100 border text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
              Read the Latest Trends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
