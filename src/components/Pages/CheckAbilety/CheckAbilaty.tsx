"use client";

import { BatteryCharging, Car, Flashlight, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import WhyAutowurx from "../Home/WhyAutowurx";

const carData = [
  {
    name: "Tesla Model S Plaid",
    year: 2025,
    miles: 800,
    hp: "1,020",
    fuel: "Electric",
    transmission: "Automatic",
    location: "San Francisco",
    price: 134990,
    image:
      "https://i.ibb.co/hxXW3PfM/af5509826beea284b87a577b2fef8e56deba1fe1.png",
  },
  // Add other car objects here as needed
  {
    name: "Tesla Model S Plaid",
    year: 2025,
    miles: 800,
    hp: "1,020",
    fuel: "Electric",
    transmission: "Automatic",
    location: "San Francisco",
    price: 134990,
    image:
      "https://i.ibb.co/hxXW3PfM/af5509826beea284b87a577b2fef8e56deba1fe1.png",
  },
  {
    name: "Tesla Model S Plaid",
    year: 2025,
    miles: 800,
    hp: "1,020",
    fuel: "Electric",
    transmission: "Automatic",
    location: "San Francisco",
    price: 134990,
    image:
      "https://i.ibb.co/hxXW3PfM/af5509826beea284b87a577b2fef8e56deba1fe1.png",
  },
  {
    name: "Tesla Model S Plaid",
    year: 2025,
    miles: 800,
    hp: "1,020",
    fuel: "Electric",
    transmission: "Automatic",
    location: "San Francisco",
    price: 134990,
    image:
      "https://i.ibb.co/hxXW3PfM/af5509826beea284b87a577b2fef8e56deba1fe1.png",
  },
];

const CarModalWithForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [selectedTab, setSelectedTab] = useState("Used");
  const [likedCars, setLikedCars] = useState<Set<number>>(new Set());

  const toggleLike = (index: number) => {
    setLikedCars((prevLikedCars) => {
      const newLikedCars = new Set(prevLikedCars);
      if (newLikedCars.has(index)) {
        newLikedCars.delete(index);
      } else {
        newLikedCars.add(index);
      }
      return newLikedCars;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Featured Cars Section */}
      <div className="xl:container mx-auto px-2 md:px-4 py-10">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl md:text-3xl font-bold mb-6">Featured Cars</h1>
          <div className="flex space-x-2 mb-6">
            <button
              className={`px-3 md:px-4 py-1 md:py-2 rounded-full border ${
                selectedTab === "New"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedTab("New")}
            >
              New
            </button>
            <button
              className={`px-3 md:px-4 py-1 md:py-2  rounded-full ${
                selectedTab === "Used"
                  ? "bg-yellow-400 text-black"
                  : "bg-white text-black border"
              }`}
              onClick={() => setSelectedTab("Used")}
            >
              Used
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {carData.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-4 group transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">{car.name}</h2>
                <Heart
                  className={`w-5 h-5 cursor-pointer ${
                    likedCars.has(index) ? "text-red-500 " : "text-gray-400"
                  }`}
                  onClick={() => toggleLike(index)}
                />
              </div>
              <p className="text-sm text-gray-500">
                {car.year} • {car.miles} miles
              </p>
              <div className="grid grid-cols-2 text-sm text-gray-600 my-2 gap-2">
                <span className="flex items-center gap-1">
                  <Flashlight className="w-4 h-4" /> {car.hp} hp
                </span>
                <span className="flex items-center gap-1">
                  <BatteryCharging className="w-4 h-4" /> {car.fuel}
                </span>
                <span className="flex items-center gap-1">
                  <Car className="w-4 h-4" /> {car.transmission}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {car.location}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold">
                  ${car.price.toLocaleString()}
                </span>
                <button
                  onClick={openModal}
                  className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button>
            <span className="text-blue-500 hover:underline mt-4">
              View All Cars
            </span>
          </button>
        </div>
      </div>

      <div className="w-full mt-5">
        <WhyAutowurx />
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[300] p-6 rounded-xl shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold">
                Get closer to your dream car!
              </h2>
            </div>

            <form>
              <div className="flex gap-5">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
                    placeholder="First Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="flex gap-5">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400">
                  <option>Check availability</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Comments
                </label>
                <textarea
                  rows={3}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400"
                  placeholder="Comments"
                ></textarea>
              </div>

              <div className="flex items-center mb-4">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm">
                  I agree to all{" "}
                  <span className="font-medium text-yellow-500">
                    terms & conditions
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Check Availability
              </button>
            </form>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarModalWithForm;
