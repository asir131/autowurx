
"use client"
import Image from 'next/image';
import moreImage from "@/assets/OurServices/left.jpg";
import howtoWorkIamge from "@/assets/OurServices/howtoWorkIamge.png"
import HowItWorkCar from '@/assets/OurServices/howToWorkCar.jpg';
import { SetStateAction, useState } from 'react';

import BackgroundImage from '../Pages/Home/backgroundImage';


export default function HowItWork() {
    const [activeTab, setActiveTab] = useState('vin');

    const handleTabClick = (tab: SetStateAction<string>) => {
        setActiveTab(tab);
    };
    return (
        <div>

            <div className='w-full container'>
                <div className="md:flex   ">
                    {/* Left Column - Content */}
                    <div className="md:w-1/2 p-6 text-left z-10  ">
                        <h1 className="text-6xl font-bold">Sell Your Car Online Fast,<br />Free, and Securely</h1>

                        <p className="text-sm mt-2 leading-7">
                            Discover the easiest way to sell your car online with Autowurx. Add <br /> your car’s year, model, make, and trim to start your car-selling journey in <br /> just 24 hours with the trusted digital platform millions rely on.
                        </p>
                        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500">
                            Sell Your Car Now
                        </button>
                    </div>
                    {/* Right Column - Background Image */}
                    <div className="md:w-1/2 h-[calc(60vh-2rem)] bg-cover bg-center bg-no-repeat rounded-md relative" style={{ backgroundImage: `url(${moreImage.src})` }}>
                        <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div> {/* Overlay for fade effect */}
                    </div>
                </div>



                <div className="w-full flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 mt-10">
                    {/* Left Column - Instructions */}
                    <div className="md:w-1/2">
                        <button className="flex items-center justify-center w-16 h-8 bg-yellow-400 text-black font-semibold rounded-full text-sm mb-4">
                            Step 1
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Your Listing to Sell Your Car Online</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>A great listing makes all the difference. Add your car’s details for listings that attract top offers.</li>
                            <li>Upload high-quality photos from multiple angles to showcase your vehicle.</li>
                            <li>
                                Listings with 5+ photos rank higher and attract 70% more views from our dealer network.
                            </li>
                            <li>
                                Include your VIN, condition, and standout features to sell your car faster.
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Form */}
                    <div className="md:w-1/3 flex justify-end">
                        <div className="bg-white border rounded-lg p-6 w-full max-w-md">
                            <div className="flex justify-between mb-4 border-b">
                                <button
                                    type="button"
                                    className={`px-4 py-2 ${activeTab === 'vin' ? 'border-b-2 border-yellow-400 text-yellow-600' : 'text-gray-500'}`}
                                    onClick={() => handleTabClick('vin')}
                                >
                                    VIN
                                </button>
                                <button
                                    type="button"
                                    className={`px-4 py-2 ${activeTab === 'plate' ? 'border-b-2 border-yellow-400 text-yellow-600' : 'text-gray-500'}`}
                                    onClick={() => handleTabClick('plate')}
                                >
                                    Plate
                                </button>
                            </div>
                            <form className="space-y-4">
                                {activeTab === 'vin' ? (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="VIN Number*"
                                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        />
                                        <div className="flex space-x-4">
                                            <input
                                                type="text"
                                                placeholder="Mileage*"
                                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Zip Code*"
                                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Asking price (optional)"
                                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <div className="flex space-x-4">
                                            <input
                                                type="text"
                                                placeholder="License Plate*"
                                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            />
                                            <select
                                                className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            >
                                                <option value="">State*</option>
                                                <option value="CA">California</option>
                                                <option value="TX">Texas</option>
                                                <option value="NY">New York</option>
                                                {/* Add more states as needed */}
                                            </select>
                                        </div>
                                        <div className="flex space-x-4">
                                            <input
                                                type="text"
                                                placeholder="Mileage*"
                                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Zip Code*"
                                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Asking price (optional)"
                                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        />
                                    </>
                                )}
                                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                                    <label className="cursor-pointer">
                                        <input
                                            type="file"
                                            accept="image/svg+xml, image/png, image/jpeg, image/gif"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                        const img = document.createElement('img');
                                                        if (event.target) {
                                                            img.src = (event.target as FileReader).result as string;
                                                        }
                                                        img.style.maxWidth = '100%';
                                                        img.style.maxHeight = '300px';
                                                        const parent = e.target.closest('div');
                                                        if (parent) {
                                                            parent.innerHTML = '';
                                                            parent.appendChild(img);
                                                        }
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                        <p className="text-gray-500">Click to upload or drag and drop</p>
                                        <p className="text-sm text-gray-400">(SVG, PNG, JPG or GIF | max 800 x 800px)</p>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500 transition duration-200"
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto  md:flex flex-col md:flex-row gap-4 mt-10">
                    {/* Chat Section */}
                    <div className="w-full md:w-1/2 bg-white p-4 rounded-lg  border border-blue-50">
                        <Image
                            src={howtoWorkIamge}
                            alt="How to work with nationwide dealers"
                            width={500}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>

                    {/* Instructions Section */}
                    <div className="w-full md:w-1/2 bg-white p-4 rounded-lg  flex flex-col ">
                        <div className="mb-4">
                            <span className="inline-block bg-yellow-300 text-yellow-800 text-sm font-medium px-2 py-1 rounded">
                                Step 2
                            </span>
                            <h2 className="text-4xl font-semibold mt-2">Compare Offers from Nationwide Dealers</h2>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Once your car is listed, we notify our network of over 50,000 trusted dealerships.</li>
                            <li>Receive multiple offers within 24-48 hours and compare them side-by-side.</li>
                            <li>
                                Choose the best deal and the winning dealer will handle pickup and payment at your convenience.
                            </li>
                            <li>Your privacy is always protected with secure in-app messaging.</li>
                        </ul>
                    </div>
                </div>


                {/* step3 */}

                <div className="w-full mx-auto  md:flex flex-col md:flex-row items-center gap-6 mt-10 mb-10">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center mb-4">
                            <div className="bg-yellow-400 text-white font-bold py-1 px-3 rounded-full text-sm">
                                Step 3
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Sell Your Car Online and Get Paid Fast
                        </h2>
                        <p className="text-gray-600">
                            Autowurx! Your car is sold, and payment is on its way. With
                            Autowurx, you can sell your car online securely and effortlessly.
                            Looking for your next ride? Explore thousands of vehicles from
                            trusted sellers on Autowurx today.
                        </p>
                    </div>

                    {/* Image and Notification Section */}
                    <div className="w-2/3 relative ">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
                            <Image
                                src={HowItWorkCar} // Replace with your car image
                                alt="Car for sale"
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                            {/* Notification Overlay */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md border border-yellow-200 w-64 text-center">
                                <div className="flex justify-center mb-2">
                                    <div className="bg-yellow-100 rounded-full p-2">
                                        <svg
                                            className="w-6 h-6 text-yellow-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Vehicle sell successfully!
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Your car has been successfully sold from auction. Keep an eye out for new auctions!
                                </p>
                                <button className="mt-3 w-full bg-yellow-400 text-white py-1 rounded hover:bg-yellow-500">
                                    Okay!
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='w-full container  '>
                    <BackgroundImage />
                </div>
            </div>
        </div>

    );
}