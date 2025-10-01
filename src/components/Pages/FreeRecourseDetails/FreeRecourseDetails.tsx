"use client";

import redBrander from "@/assets/banner/redbrand.png";
import freeImage from "@/assets/free-datils.png";
import background from "@/assets/bacground.png";
import { SetStateAction, useState } from "react";
import BackgroundImage from "../Home/backgroundImage";
import Image from "next/image";

export default function FreeRecourseDetails() {
  const [activeTab, setActiveTab] = useState("vin");

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100">
      <div className="w-full container">
        {/* If you want a page title in the App Router, set it in the parent server component via `export const metadata = { title: "..." }`. */}

        <div className="md:flex min-h-screen">
          {/* Left Sidebar */}
          <div className="flex flex-col items-center p-4">
            {/* Header Section */}
            <div className="w-full mb-6">
              <div className="flex justify-between">
                <a href="#" className="text-gray-600 hover:underline">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:underline">
                  Blog
                </a>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="md:w-full rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-2">
                Selling Your Car Just Got Way Easier
              </h1>
              <p className="text-gray-600 mb-4">
                Published on Sep 27, 2024 • 4 min read
              </p>

              {/* Hero Section */}
              <div className="relative text-white rounded-lg mb-6">
                <Image
                  src={freeImage}
                  alt="Man with Laptop"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white text-black p-2 rounded shadow">
                  <p>2020 BMW X5 • $44,500</p>
                </div>
              </div>

              {/* Description Section */}
              <p className="text-gray-700 mb-4">
                Trying to sell your car online usually means low offers,
                no-shows, and endless messages. Most platforms are outdated,
                clunky, and built for dealers and not individuals.
              </p>
              <p className="text-gray-700 mb-4">
                That’s why we launched a better way to sell your car on
                Autowurx: the Sell Your Car page.
              </p>
              <p className="text-gray-700 mb-4">
                List your vehicle in minutes, get competing offers from real
                dealers, and manage the entire process in one place with 100%
                convenience. No hassle.
              </p>

              {/* Why Autos Today is Different */}
              <h2 className="text-2xl font-bold mb-4">
                Why Autos Today is Different
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>100% free to list and sell</li>
                <li>No middleman or marketplace headaches</li>
                <li>Offers come from over 60,000 licensed dealerships</li>
                <li>Built for speed, clarity, and control</li>
                <li>Remain 100% anonymous until the offer is finalized</li>
              </ul>

              {/* How It Works */}
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Enter your VIN or license plate</li>
                <li>Add a few photos, and a quick description</li>
                <li>Confirm condition and vehicle history</li>
                <li>Go live with one click</li>
              </ol>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            {/* Header Section */}
            <div className="w-full max-w-2xl mb-6">
              <div className="flex mb-2">
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    f
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    t
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    in
                  </a>
                  <a href="#" className="text-blue-600 hover:underline">
                    t
                  </a>
                </div>
              </div>
              <div className="text-black p-2 rounded">
                <p className="font-bold">Why Autos Today is Different</p>
                <ul className="text-sm">
                  <li>How it Works</li>
                  <li>Designed for Real Life</li>
                  <li>Why Dealers Are Here</li>
                  <li>Get Your First Offer Today</li>
                </ul>
              </div>
            </div>

            {/* News Section */}
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4">
              <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image
                  src={redBrander}
                  alt="EV Vehicles"
                  className="w-full h-[250px]"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Tesla’s Shake-Up And New Competitors
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  EV Vehicles: Tesla Shake-Up And New Competitors into the U.S.
                  EV Market
                </p>
                <p className="mt-1 text-gray-500 text-xs">
                  Apr 8, 2023 • 4 min read
                </p>
              </div>
            </div>

            {/* Ad Section */}
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 mt-6">
              <Image
                src={background}
                alt="Background"
                className="object-contain"
                sizes="80vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 mx-auto bg-white border rounded-lg p-6">
        <div className="flex justify-between mb-4 border-b">
          <button
            type="button"
            className={`px-4 py-2 ${
              activeTab === "vin"
                ? "border-b-2 border-yellow-400 text-yellow-600"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("vin")}
          >
            VIN
          </button>
          <button
            type="button"
            className={`px-4 py-2 ${
              activeTab === "plate"
                ? "border-b-2 border-yellow-400 text-yellow-600"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("plate")}
          >
            Plate
          </button>
        </div>
        <form className="space-y-4">
          {activeTab === "vin" ? (
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

                <select className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
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
                      const img = document.createElement("img");
                      if (event.target) {
                        img.src = (event.target as FileReader)
                          .result as string;
                      }
                      img.style.maxWidth = "100%";
                      img.style.maxHeight = "300px";
                      const parent = e.target?.closest("div");
                      if (parent) {
                        parent.innerHTML = "";
                        parent.appendChild(img);
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <p className="text-gray-500">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-400">
                (SVG, PNG, JPG or GIF | max 800 x 800px)
              </p>
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

      <div className="max-w-6xl mx-auto p-4">
        <p className="text-gray-600 text-sm mb-4">
          Once your listing is up, dealers start bidding. You can accept,
          counter, or ignore any offer. You’re always in control.
        </p>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Designed for Real Life
        </h1>
        {/* Chat Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex items-center mb-2">
            <button className="text-gray-500 mr-2">&larr;</button>
            <div className="flex-1 text-center">
              <h2 className="text-lg font-semibold">2022 BMW X5 M Sport</h2>
              <p className="text-yellow-500">Chicago Motors ★4.6</p>
            </div>
            <button className="text-gray-500">&hellip;</button>
          </div>
          <div className="space-y-4">
            <div className="bg-pink-100 p-2 rounded-lg max-w-xs ml-auto">
              <p className="text-gray-700">
                Hi! I would like to know if the price is negotiable.
              </p>
              <p className="text-xs text-gray-500 text-right">14:02</p>
              <span className="inline-block bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                TR
              </span>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg max-w-xs">
              <p className="text-gray-700">
                We can discuss the price. Currently, it’s listed at $58,000.
                Do you have an offer in mind?
              </p>
              <p className="text-xs text-gray-500 text-right">14:02</p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-4 text-gray-600">
          <p>
            You don’t have to deal with strangers or negotiate over text. Every
            offer comes from a verified dealership. You’ll see:
            <ul className="list-disc list-inside mt-2">
              <li>Who made the offer</li>
              <li>How much they’re offering</li>
              <li>How their offer compares to others</li>
              <li>Your current highest bid</li>
            </ul>
          </p>
          <p>
            You can also message directly with dealers and handle everything—
            from the first bid to scheduling a sale—right inside your dashboard.
          </p>
        </div>

        {/* Why Dealers Are Here Section */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Why Dealers Are Here
        </h2>
        <p className="text-gray-600">
          Dealerships across the country are constantly searching for inventory.
          Autowurx gives them a direct line to individuals looking to sell. That
          competition works in your favor.
        </p>
        <p className="text-gray-600 mt-2">
          When dealers bid against each other, your offer goes up.
        </p>

        {/* Get Your First Offer Section */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Get Your First Offer Today
        </h2>
        <p className="text-gray-600">
          It’s fast, easy, and completely free to list your car. Whether you’re
          ready to sell or just curious what it’s worth, now is the time.
        </p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          List your car
        </button>
      </div>

      <div className="w-full container">
        <BackgroundImage />
      </div>

      <div className="container pb-20 mt-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Latest news</h1>
        </div>

        {/* Card Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
              <Image
                src={redBrander}
                alt="EV Vehicles"
                className="w-full h-[250px]"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Tesla’s Shake-Up And New Competitors
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                EV Vehicles: Tesla Shake-Up And New Competitors into the U.S.
                EV Market
              </p>
              <p className="mt-1 text-gray-500 text-xs">
                Apr 8, 2023 • 4 min read
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
              <Image
                src={redBrander}
                alt="EV Vehicles"
                className="w-full h-[250px]"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Tesla’s Shake-Up And New Competitors
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                EV Vehicles: Tesla Shake-Up And New Competitors into the U.S.
                EV Market
              </p>
              <p className="mt-1 text-gray-500 text-xs">
                Apr 8, 2023 • 4 min read
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
              <Image
                src={redBrander}
                alt="EV Vehicles"
                className="w-full h-[250px]"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Tesla’s Shake-Up And New Competitors
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                EV Vehicles: Tesla Shake-Up And New Competitors into the U.S.
                EV Market
              </p>
              <p className="mt-1 text-gray-500 text-xs">
                Apr 8, 2023 • 4 min read
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
              <Image
                src={redBrander}
                alt="EV Vehicles"
                className="w-full h-[250px]"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Tesla’s Shake-Up And New Competitors
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                EV Vehicles: Tesla Shake-Up And New Competitors into the U.S.
                EV Market
              </p>
              <p className="mt-1 text-gray-500 text-xs">
                Apr 8, 2023 • 4 min read
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-gray-100 border text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
            Read the Latest Trends
          </button>
        </div>
      </div>
    </div>
  );
}
