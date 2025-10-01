"use client";

import Link from "next/link";
import moreImage from "@/assets/logo/moreImage.jpg";
import Image from "next/image";
import towUser from "@/assets/icon/twoUser.png";
import single from "@/assets/icon/singleUser.png";
import save from "@/assets/icon/save.png";
import squre from "@/assets/icon/squere.png";
import tali from "@/assets/icon/tali.png";
import { useState } from "react";
import left from "@/assets/OurServices/left.jpg";
import rigt from "@/assets/OurServices/right-top.jpg";
import buttom from "@/assets/OurServices/right-buttom.jpg";

import BackgroundImage from "../Home/backgroundImage";
import redBrander from "@/assets/banner/redbrand.png";
import car from "@/assets/banner/car.png";

export default function MoreAutowurx() {
  // ✅ precise typing — no 'any'
  const [expandedItems, setExpandedItems] = useState<number[]>([0]); 

  const items = [
    {
      number: "01",
      title: "Comprehensive Vehicle Listings",
      description:
        "Discover your perfect vehicle with our diverse catalog, which includes sleek sedans and rugged trucks. Our intuitive search and broad filtering options help you quickly find options that fit your taste and budget.",
    },
    {
      number: "02",
      title: "Seamless Trade-In Solutions",
      description:
        "Easily trade in your current vehicle with our streamlined process, offering fair valuations and quick transactions to get you into your next car hassle-free.",
    },
    {
      number: "03",
      title: "Direct Dealer Connections",
      description:
        "Connect directly with verified dealers, bypassing middlemen for faster negotiations and personalized deals tailored to your needs.",
    },
    {
      number: "04",
      title: "Effortless Selling Experience",
      description:
        "Sell your vehicle with ease using our platform, which handles listings, inquiries, and payments, ensuring a smooth and efficient process.",
    },
  ];

  // ✅ typed parameter; infer 'prev' from state generic
  const handleToggle = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const cards = [
    {
      icon: towUser,
      title: "Seamless Connectivity",
      description:
        "Instantly connect with over 60,000 verified dealerships and thousands of private sellers, all through one intuitive dashboard. Enjoy built-in messaging and comparison tools that simplify every step of your car-buying journey.",
    },
    {
      icon: squre,
      title: "Trusted Expertise",
      description:
        "Our Chicago-based team brings 50+ years of automotive insight to every decision. We blend real-time market data with seasoned expertise to guide you with clear, reliable advice.",
    },
    {
      icon: single,
      title: "Empower You",
      description:
        "Access detailed vehicle histories, real-time price comparisons, and user reviews, all in one place. Our tools empower you to make smart, data-driven decisions every time.",
    },
    {
      icon: save,
      title: "Digital Transformation",
      description:
        "Our platform streamlines the car buying process by moving key steps online. We make transactions faster and more efficient without unnecessary complexity by skipping the middlemen and connecting you to dealerships directly.",
    },
    {
      icon: tali,
      title: "Customer-Centric Approach",
      description:
        "We design our platform with your needs in mind. Enjoy intuitive navigation and dependable support, ensuring that your experience, whether buying or selling, is straightforward and stress-free.",
    },
    {
      icon: squre,
      title: "Customer-Centric Approach",
      description:
        "We design our platform with your needs in mind. Enjoy intuitive navigation and dependable support, ensuring that your experience, whether buying or selling, is straightforward and stress-free.",
    },
    {
      icon: single,
      title: "Customer-Centric Approach",
      description:
        "We design our platform with your needs in mind. Enjoy intuitive navigation and dependable support, ensuring that your experience, whether buying or selling, is straightforward and stress-free.",
    },
  ];

  return (
    <div className="bg-gray-200">
      <div className="md:flex items-center justify-center">
        <div className="md:flex container w-full ">
          {/* Left Column - Content */}
          <div className="md:w-1/2 p-6 text-left z-10">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">
              The fastest-growing US online automotive marketplace
            </h1>
            <p className="text-gray-600 mb-6">
              Backed by over 20 years of industry expertise, Autowurk has become
              the go-to resource for car shoppers across the region. From
              initial research to final purchase, we guide you every step of the
              way, making your car-buying journey faster, easier, and more
              transparent.
            </p>
            <Link href="/cars">
              <p className="inline-block bg-yellow-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-200">
                Find Your Car
              </p>
            </Link>
          </div>
          {/* Right Column - Background Image */}
          <div
            className="md:w-1/2 h-[calc(50vh-2rem)] bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${moreImage.src})` }}
          >
            {/* Replace with actual image URL or import */}
          </div>
        </div>
      </div>

      {/* CARD SESSION  */}

      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full">
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={34}
                  height={34}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>

      {/* accroding  */}

      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Buy, Sell, and Trade Vehicles
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg font-semibold mr-4">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-blue-900 font-semibold">
                        {item.title}
                      </h3>
                      {expandedItems.includes(index) && (
                        <p className="text-gray-600 text-sm mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-400">
                    {expandedItems.includes(index) ? "↓" : "→"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Large left image */}
            <div className="col-span-1">
              <div className="w-full h-[450px] relative">
                <Image
                  src={left}
                  alt="Large image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            {/* Right column with two smaller images */}
            <div className="col-span-1 grid grid-rows-2 gap-4">
              <div className="w-full h-[220px] relative">
                <Image
                  src={rigt}
                  alt="Small top image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full h-[220px] relative">
                <Image
                  src={buttom}
                  alt="Small bottom image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8F8]">
        <div className=" container mx-auto p-8 pt-10 pb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Buy or Sell a Car with{" "}
            <span className="text-yellow-400">Just a Tap!</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left column with text */}

            <div className="md:w-1/2 space-y-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Endless Inventory at Your Fingertips
                  </h2>
                  <p className="text-gray-600">
                    Break free from traditional car shopping. With
                    Autowurx.com, browse an extensive inventory of vehicles—from
                    sedans to SUVs—from home or on the go. Our easy-to-use
                    interface lets you quickly explore makes, models, and
                    features that match your needs.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Quick and Easy Research
                  </h2>
                  <p className="text-gray-600">
                    Did you know that 92% of car buyers begin their search
                    online? With the Autowurx platform, you can make informed
                    decisions without the need for a physical showroom. Browse a
                    wide range of vehicles, check their mileage, features, and
                    more, and enjoy a relaxed research experience at your own
                    pace.
                  </p>
                </div>
              </div>
            </div>
            {/* Right column with image */}
            <div className="md:w-1/2 h-[400px] relative rounded-lg overflow-hidden">
              <Image
                src={moreImage}
                alt="Car interior"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* brand  */}

      <div className="w-full container p-5">
        <BackgroundImage />
      </div>

      {/* End Section */}
      <div className=" w-full bg-gray-50 pt-10">
        <div className="container p-6">
          {/* Header */}
          <div className=" ">
            <h1 className="text-3xl font-bold text-gray-900">
              Stay Informed With Insights From Our Experts
            </h1>
          </div>

          {/* Card Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image src={redBrander} alt="EV Vehicles" className="w-full h-auto" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Tesla&apos;s Shake-Up And New Competitors
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  EV Vehicles: Tesla Shake-Up And New Competitors into the U.S.
                  EV Market
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image src={car} alt="EV Vehicles" className="w-full h-[250px]" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Tesla&apos;s Shake-Up And New Competitors
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  EV Vehicles: Tesla Shake-Up And New Competitors into the U.S.
                  EV Market
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image src={redBrander} alt="EV Vehicles" className="w-full h-auto" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Tesla&apos;s Shake-Up And New Competitors
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  EV Vehicles: Tesla Shake-Up And New Competitors into the U.S.
                  EV Market
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button className="bg-gray-100 text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
              Read the Latest Trends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
