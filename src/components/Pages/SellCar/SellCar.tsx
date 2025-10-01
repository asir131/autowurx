"use client";
import redBrander from "@/assets/banner/redbrand.png";
import car from "@/assets/banner/car.png";
import FAQAccordion from "../Home/FAQAccordion";
import { SetStateAction, useState } from "react";  
import Link from "next/link";
import Image from "next/image";

interface ImageFile extends File {
  preview: string;
}

export default function SellCar() {
  const [activeTab, setActiveTab] = useState("vin");

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const [images, setImages] = useState<ImageFile[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newImages = files.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => {
      const newImages = prevImages.filter((_, i) => i !== index);
      return newImages;
    });
  };

  return (
    <div>
      <div className=" bg-gray-50 p-6">
        <div className="w-full container  mx-auto pt-10 pb-20">
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
            <div className="md:w-1/2 ">
              <h1 className="text-[60px] font-bold text-gray-900">
                Sell Your Car in Minutes
              </h1>
              <p className="text-[60px] text-gray-900 mt-2">
                {"No Fees, No Obligations"}
              </p>
              <p className="text-gray-500 mt-4">
                Our platform makes it simple and anonymous. List for free, <br /> and get
                multiple offers—whether you decide to sell or not is <br />
                entirely up to you.
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>
                  Enter your VIN, mileage, and zip to auto-fill your vehicle info in
                  seconds.
                </li>
                <li>
                  {"Show off your car’s best angles, so you’ll receive higher-quality offers."}
                </li>
                <li>
                  Receive offers from verified buyers and dealers with no pressure to sell.
                </li>
              </ul>
              <p className=" mt-4 ">
                <span className="text-gray-400">Already have a listing?</span>{" "}
                <a href="#" className="underline text-yellow-500">
                  Go to dashboard
                </a>
              </p>
            </div>

            <div className="md:w-1/3 bg-white border rounded-lg p-6">
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
                      multiple
                      onChange={handleImageUpload}
                    />
                    <p className="text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400">
                      (SVG, PNG, JPG or GIF | max 800 x 800px)
                    </p>
                  </label>
                </div>
                {/* Display Uploaded Images */}
                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={image.preview}
                          alt={`Uploaded ${index}`}
                          className="w-20 h-20 object-cover rounded-md"
                          width={80}
                          height={80}
                          unoptimized
                        />
                        <button
                          type="button"
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                          onClick={() => handleRemoveImage(index)}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <Link href="/sellCar-getStart">
                  <button
                    type="button"
                    className="w-full bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500 transition duration-200"
                  >
                    Get Started
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full bg-[#F5F5F555] pt-10">
        <div className="container   pb-20">
          {/* Header */}
          <div className=" ">
            <h1 className="text-3xl font-bold text-gray-900">
              Expert Guidance for Selling Your Car Online
            </h1>
          </div>

          {/* Card Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="  p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image
                  src={redBrander.src}
                  alt="EV Vehicles"
                  className="w-full h-[250px]"
                  width={600}
                  height={250}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {"Tesla’s Shake-Up And New Competitors"}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {"EV Vehicles: Tesla Shake-Up And New Competitors into the U.S. EV Market"}
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image
                  src={car.src}
                  alt="EV Vehicles"
                  className="w-full h-[250px]"
                  width={600}
                  height={250}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {"Tesla’s Shake-Up And New Competitors"}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {"EV Vehicles: Tesla Shake-Up And New Competitors into the U.S. EV Market"}
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="  p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image
                  src={redBrander.src}
                  alt="EV Vehicles"
                  className="w-full h-[250px]"
                  width={600}
                  height={250}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {"Tesla’s Shake-Up And New Competitors"}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {"EV Vehicles: Tesla Shake-Up And New Competitors into the U.S. EV Market"}
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="  p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image
                  src={redBrander.src}
                  alt="EV Vehicles"
                  className="w-full h-[250px]"
                  width={600}
                  height={250}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {"Tesla’s Shake-Up And New Competitors"}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {"EV Vehicles: Tesla Shake-Up And New Competitors into the U.S. EV Market"}
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6  ">
            <button className="bg-gray-100 border text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
              Read the Latest Trends
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto  pb-20">
        <FAQAccordion />
      </div>
    </div>
  );
}
