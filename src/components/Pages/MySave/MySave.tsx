// components/SavedVehicles.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import car from "@/assets/car/sugestCar.png"
import { Heart } from 'lucide-react';

const SavedVehicles = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Newest Saved');

    const vehicles = [
        {
            name: 'Tesla Model S Plaid',
            price: '$134,990',
            horsepower: '1,020 hp',
            mileage: '2025 + 800 miles',
            fuel: 'Electric',
            transmission: 'Automatic',
            location: 'San Francisco',
            image: car, // Replace with actual image path
        },
        {
            name: 'Tesla Model S Plaid',
            price: '$134,990',
            horsepower: '1,020 hp',
            mileage: '2025 + 800 miles',
            fuel: 'Electric',
            transmission: 'Automatic',
            location: 'San Francisco',
            image: car
        },
        {
            name: 'Tesla Model S Plaid',
            price: '$134,990',
            horsepower: '1,020 hp',
            mileage: '2025 + 800 miles',
            fuel: 'Electric',
            transmission: 'Automatic',
            location: 'San Francisco',
            image: car, // Replace with actual image path
        },
        {
            name: 'Tesla Model S Plaid',
            price: '$134,990',
            horsepower: '1,020 hp',
            mileage: '2025 + 800 miles',
            fuel: 'Electric',
            transmission: 'Automatic',
            location: 'San Francisco',
            image: car, // Replace with actual image path
        },
    ];

    const options = [
        'Newest Saved',
        'Oldest Saved',
        'Lowest Price',
        'Highest Price',
        'Lowest Mileage',
        'Highest Mileage',
        'Newest Year',
        'Oldest Year',
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Saved Vehicles</h2>
                <div className="relative inline-block text-left">
                    <button
                        type="button"
                        className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedOption}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        className={`${selectedOption === option ? 'bg-indigo-100 text-indigo-900' : 'text-gray-700'
                                            } block w-full text-left px-4 py-2 text-sm hover:bg-[#FFE135] hover:text-white`}
                                        onClick={() => {
                                            setSelectedOption(option);
                                            setIsOpen(false);
                                        }}
                                        role="menuitem"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {vehicles.map((vehicle, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <Image src={vehicle.image} alt={vehicle.name} width={300} height={250} className="w-full h-48 object-cover" />
                        <div className="p-4">

                            <div className='flex justify-between'>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                                </div>
                                <div>
                                    <Heart
                                        className={`w-5 h-5 cursor-pointer text-[#FFE135]
                                        }`}

                                    />
                                </div>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm space-x-4 mt-2">
                                <span>{vehicle.horsepower}</span>
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {vehicle.mileage}
                                </span>
                            </div>
                            <div className="text-gray-600 text-sm mt-2">
                                <span>{vehicle.fuel}</span> | <span>{vehicle.transmission}</span> | <span>{vehicle.location}</span>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-xl font-bold text-yellow-600">{vehicle.price}</span>
                                <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
                                    Check Availability
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-center">
                <Link href="/new-cars">
                    <p className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
                        View All Cars
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default SavedVehicles;