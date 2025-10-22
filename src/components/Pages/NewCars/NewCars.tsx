"use client";
import { BatteryCharging, Car, Flashlight, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

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

export default function NewCars() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [selectedDistance, setSelectedDistance] = useState("Nationwide");
  const [currentPage, setCurrentPage] = useState(15); // Default to page 15
  const [location, setLocation] = useState("Washington, DC");
  const [distance, setDistance] = useState("Nationwide");
  const [make, setMake] = useState("All");
  const [year, setYear] = useState("2022");
  const [mileage, setMileage] = useState("Under 10,000 miles");
  const [price, setPrice] = useState("Under $10,000");
  const [body, setBody] = useState("All");
  const [exteriorColor, setExteriorColor] = useState("All");
  const [interiorColor, setInteriorColor] = useState("All");
  const [driveType, setDriveType] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [doors, setDoors] = useState("All");
  const [cylinders, setCylinders] = useState("All");
  const [features, setFeatures] = useState("All");
  const [dealership, setDealership] = useState("All");
  // Define total number of pages (for example, 20)
  const totalPages = 20;

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const handlePageClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const [likedCars, setLikedCars] = useState<Set<number>>(new Set());
  // Handle search bar input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle filter changes
  // const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setFilters((prevState) => ({ ...prevState, [name]: value }));
  // };

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
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-full container mx-auto px-4">
        {/* Search bar */}
        <div className="xl:flex justify-center items-center py-4 bg-gray-200 rounded-full relative lg:max-w-4xl mx-auto mb-6">
          <div className="relative xl:w-full xl:max-w-3xl  right-4">
            <input
              value={searchQuery}
              onChange={handleSearch}
              type="text"
              placeholder="Search Vehicles"
              className="xl:w-full py-3 pl-6 pr-14 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg placeholder-gray-500"
            />
            <button className="absolute  ml-5 top-2.5 bg-yellow-400 text-white rounded-full p-2 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
              <IoMdSearch className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
        <div className="lg:flex gap-5">
          {/* Filters */}
          <div className="w-full h-[1400px] max-w-xs  p-5 bg-white shadow-lg rounded-md">
            {/* Location */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>Washington, DC</option>
                <option>New York</option>
                <option>San Francisco</option>
              </select>
            </div>

            {/* Distance */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Distance
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              >
                <option>Nationwide</option>
                <option>50 miles</option>
                <option>100 miles</option>
              </select>
            </div>

            {/* Make */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Make
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              >
                <option>All</option>
                <option>Toyota</option>
                <option>Ford</option>
                <option>BMW</option>
              </select>
            </div>

            {/* Year */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>

            {/* Mileage */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mileage
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
              >
                <option>Under 10,000 miles</option>
                <option>10,000-50,000 miles</option>
                <option>50,000-100,000 miles</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option>Under $10,000</option>
                <option>$10,000 - $20,000</option>
                <option>$20,000 - $30,000</option>
              </select>
            </div>

            {/* Body */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Body
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              >
                <option>All</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Truck</option>
              </select>
            </div>

            {/* Exterior Color */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Exterior Color
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={exteriorColor}
                onChange={(e) => setExteriorColor(e.target.value)}
              >
                <option>All</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Black</option>
              </select>
            </div>

            {/* Interior Color */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Interior Color
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={interiorColor}
                onChange={(e) => setInteriorColor(e.target.value)}
              >
                <option>All</option>
                <option>Beige</option>
                <option>Black</option>
                <option>Gray</option>
              </select>
            </div>

            {/* Drive Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Drive Type
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={driveType}
                onChange={(e) => setDriveType(e.target.value)}
              >
                <option>All</option>
                <option>AWD</option>
                <option>FWD</option>
                <option>RWD</option>
              </select>
            </div>

            {/* Transmission */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Transmission
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              >
                <option>All</option>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>

            {/* Fuel */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Fuel
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
              >
                <option>All</option>
                <option>Gasoline</option>
                <option>Diesel</option>
                <option>Electric</option>
              </select>
            </div>

            {/* Doors */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Doors
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={doors}
                onChange={(e) => setDoors(e.target.value)}
              >
                <option>All</option>
                <option>2</option>
                <option>4</option>
              </select>
            </div>

            {/* Cylinders */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Cylinders
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={cylinders}
                onChange={(e) => setCylinders(e.target.value)}
              >
                <option>All</option>
                <option>4</option>
                <option>6</option>
                <option>8</option>
              </select>
            </div>

            {/* Features */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Features
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
              >
                <option>All</option>
                <option>Bluetooth</option>
                <option>GPS</option>
                <option>Backup Camera</option>
              </select>
            </div>

            {/* By Dealership */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                By Dealership
              </label>
              <select
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                value={dealership}
                onChange={(e) => setDealership(e.target.value)}
              >
                <option>All</option>
                <option>Dealer 1</option>
                <option>Dealer 2</option>
                <option>Dealer 3</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <div className="flex space-x-4 mb-5">
              <button className="text-black py-2 px-4 rounded-lg">
                Sort by: Best Selling
              </button>
              <select
                id="distance"
                value={selectedDistance}
                onChange={(e) => setSelectedDistance(e.target.value)}
                className="mt-1 block w-[130px] rounded-md px-3 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Nationwide">Best Selling</option>
                <option value="Within 10 miles"> Selling</option>
              </select>
              {/* More filter buttons */}
            </div>
            <div className="grid grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-2 lg:gap-7">
              {carData.map((car, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[300px] md:w-[340px] xl:w-[400px] bg-white rounded-2xl shadow p-4 group transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="relative h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={car.image}
                      alt={car.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-base sm:text-lg font-semibold truncate">
                      {car.name}
                    </h2>
                    <Heart
                      className={`w-5 h-5 cursor-pointer ${
                        likedCars.has(index)
                          ? "text-[#FFE135]"
                          : "text-gray-400"
                      }`}
                      onClick={() => toggleLike(index)}
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500">
                    {car.year} • {car.miles} miles
                  </p>

                  <div className="grid grid-cols-2 text-xs sm:text-sm text-gray-600 my-2 gap-2">
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

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-3">
                    <span className="text-lg sm:text-xl font-bold">
                      ${car.price.toLocaleString()}
                    </span>
                    <button
                      onClick={openModal}
                      className="bg-yellow-500 text-white py-2 px-4 sm:px-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-auto"
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Car grid */}
        {isOpenModal && (
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

        {/* Pagination */}
        <div className="mt-10 flex justify-center space-x-4 sm:flex-wrap sm">
          <div className="lg:flex items-center space-x-4 py-4">
            {/* Back Button */}
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              className="text-gray-700 font-semibold p-2 rounded-lg hover:bg-gray-200"
            >
              ← Back
            </button>

            {/* First Page Button */}
            <button
              onClick={() => handlePageClick(1)}
              className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              1
            </button>

            {/* Ellipsis */}
            <span className="px-3 py-2 hidden sm:inline-block">...</span>

            {/* Middle Page Numbers */}
            {[12, 13, 14, 15, 16, 17].map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-3 py-2 border border-gray-300 rounded-lg ${
                  page === currentPage
                    ? "bg-yellow-400 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Ellipsis */}
            <span className="px-3 py-2 hidden sm:inline-block">...</span>

            {/* Last Page Button */}
            <button
              onClick={() => handlePageClick(totalPages)}
              className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              {totalPages}
            </button>

            {/* Next Button */}
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              className="text-gray-700 font-semibold p-2 rounded-lg hover:bg-gray-200"
            >
              Next →
            </button>

            {/* Page Input (responsive) */}
            <div className="flex items-center space-x-2 ml-4 sm:ml-6">
              <span className="hidden sm:inline">Page</span>
              <input
                type="number"
                value={currentPage}
                onChange={(e) => handlePageClick(Number(e.target.value))}
                className="w-16 p-2 text-center border border-gray-300 rounded-md"
                min={1}
                max={totalPages}
              />
              <button
                onClick={() => handlePageClick(Number(currentPage))}
                className="bg-yellow-400 text-white px-3 py-2 rounded-lg"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
