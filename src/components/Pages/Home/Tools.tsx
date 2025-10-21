"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import wheel from "@/assets/vendor/wheel.png"
import rims from "@/assets/vendor/rims.png"
import tires from "@/assets/vendor/tires.png"
import engine from "@/assets/vendor/engine.png"
import driver from "@/assets/vendor/driver.png"
import tools from "@/assets/vendor/tools.png"

// Product details interface
interface ProductDetails {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  vendor: {
    name: string;
    rating: number;
    reviews: number;
    location: string;
    memberSince: string;
  };
}

const Tools: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Steering wheel",
      price: "$700",
      buttonText: "View",
      imageUrl: wheel,
      buttonColor: "yellow"
    },
    {
      title: "Rims",
      price: "$500",
      buttonText: "View",
      imageUrl: rims,
      buttonColor: "yellow"
    },
    {
      title: "Tire",
      price: "$220",
      buttonText: "View",
      imageUrl: tires,
      buttonColor: "yellow"
    },
    {
      title: "Engine",
      price: "$1100",
      buttonText: "View",
      imageUrl: engine,
      buttonColor: "yellow"
    },
    {
      title: "Accessories",
      price: "$200",
      buttonText: "View",
      imageUrl: driver,
      buttonColor: "yellow"
    },
    {
      title: "Tools",
      price: "$250",
      buttonText: "View",
      imageUrl: tools,
      buttonColor: "yellow"
    }
  ];

  // Product details data
  const productDetails: ProductDetails[] = [
    {
      id: 1,
      title: "Steering wheel",
      price: "$700",
      description: "Premium leather-wrapped steering wheel with enhanced grip and responsive control. Perfect for sports cars and luxury vehicles.",
      features: [
        "Genuine leather wrap",
        "Paddle shifters compatible",
        "Heated function available",
        "Easy installation"
      ],
      specifications: {
        "Material": "Genuine Leather",
        "Diameter": "14.5 inches",
        "Compatibility": "Universal fit",
        "Color Options": "Black, Brown, Red",
        "Warranty": "2 years"
      },
      vendor: {
        name: "AutoElite Parts",
        rating: 4.8,
        reviews: 127,
        location: "Detroit, MI",
        memberSince: "2018"
      }
    },
    {
      id: 2,
      title: "Rims",
      price: "$500",
      description: "High-performance alloy rims that combine style with durability. Designed for optimal heat dissipation and weight reduction.",
      features: [
        "Lightweight alloy construction",
        "Corrosion resistant",
        "Multiple finish options",
        "TPMS compatible"
      ],
      specifications: {
        "Material": "Aluminum Alloy",
        "Size": "18 inches",
        "Finish": "Matte Black, Chrome, Silver",
        "Load Capacity": "1500 lbs",
        "Warranty": "Lifetime structural"
      },
      vendor: {
        name: "Wheel Masters Pro",
        rating: 4.6,
        reviews: 89,
        location: "Los Angeles, CA",
        memberSince: "2015"
      }
    },
    {
      id: 3,
      title: "Tire",
      price: "$220",
      description: "All-season radial tires offering excellent traction in both wet and dry conditions. Built for longevity and comfort.",
      features: [
        "All-season performance",
        "Reduced road noise",
        "Enhanced fuel efficiency",
        "80,000 mile warranty"
      ],
      specifications: {
        "Type": "All-Season Radial",
        "Size": "225/45R17",
        "Speed Rating": "H (130 mph)",
        "Tread Life": "80,000 miles",
        "Weather": "M+S rated"
      },
      vendor: {
        name: "TireTech Solutions",
        rating: 4.7,
        reviews: 203,
        location: "Chicago, IL",
        memberSince: "2012"
      }
    },
    {
      id: 4,
      title: "Engine",
      price: "$1100",
      description: "Reconditioned engine with full testing and certification. Complete with all necessary components for easy installation.",
      features: [
        "Fully reconditioned and tested",
        "6-month warranty",
        "Complete with accessories",
        "Professional installation available"
      ],
      specifications: {
        "Type": "4-Cylinder Gasoline",
        "Displacement": "2.0L",
        "Mileage": "Under 50,000 miles",
        "Warranty": "6 months",
        "Condition": "Reconditioned"
      },
      vendor: {
        name: "MotorWorks Unlimited",
        rating: 4.9,
        reviews: 156,
        location: "Houston, TX",
        memberSince: "2010"
      }
    },
    {
      id: 5,
      title: "Accessories",
      price: "$200",
      description: "Complete car care kit including premium cleaning products, microfiber towels, and interior protection items.",
      features: [
        "Premium cleaning solutions",
        "Microfiber towels included",
        "UV protection spray",
        "Leather conditioner"
      ],
      specifications: {
        "Items": "12-piece kit",
        "Coverage": "Interior & Exterior",
        "Eco-Friendly": "Yes",
        "Shelf Life": "2 years",
        "Package Weight": "8.5 lbs"
      },
      vendor: {
        name: "CarCare Essentials",
        rating: 4.5,
        reviews: 342,
        location: "Miami, FL",
        memberSince: "2019"
      }
    },
    {
      id: 6,
      title: "Tools",
      price: "$250",
      description: "Professional-grade mechanic tool set with 150+ pieces. Perfect for DIY enthusiasts and professional mechanics alike.",
      features: [
        "150+ pieces",
        "Lifetime warranty",
        "Professional quality",
        "Organized storage case"
      ],
      specifications: {
        "Pieces": "152",
        "Material": "Chrome Vanadium Steel",
        "Warranty": "Lifetime",
        "Case Type": "Hard plastic organizer",
        "Socket Sizes": "1/4\" & 3/8\" drive"
      },
      vendor: {
        name: "ProTool Gear",
        rating: 4.8,
        reviews: 278,
        location: "Seattle, WA",
        memberSince: "2016"
      }
    }
  ];

  const handleViewClick = (title: string) => {
    const product = productDetails.find(p => p.title === title);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="py-10">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your local auto team marketplace!
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map(({ title, price, buttonText, imageUrl, buttonColor }, index) => (
            <div
              key={index}
              className="shadow-even shadow-md bg-white rounded-2xl border border-gray-50 p-6 text-center flex flex-col items-center"
            >
              <div className="mb-4">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed w-full md:w-[80%] lg:w-[70%] xl:w-[50%] mb-4">
                <span className='text-lg font-semibold'>Price : </span>{price}
              </p>
              <div>
                <button
                  onClick={() => handleViewClick(title)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors mt-4 ${
                    buttonColor === "yellow"
                      ? "bg-[#FFE135] hover:bg-yellow-500 text-black"
                      : "bg-[#FFE135] hover:bg-yellow-500 text-black"
                  }`}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Header with close button */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-lg p-8 mb-4">
                    <Image
                      src={services.find(s => s.title === selectedProduct.title)?.imageUrl || wheel}
                      alt={selectedProduct.title}
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-800 mb-2">{selectedProduct.price}</p>
                    <button className="bg-[#FFE135] hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-colors w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h3>
                    <div className="space-y-2">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-gray-600 font-medium">{key}:</span>
                          <span className="text-gray-800">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vendor Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Vendor Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vendor:</span>
                        <span className="text-gray-800 font-medium">{selectedProduct.vendor.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        {renderStars(selectedProduct.vendor.rating)}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reviews:</span>
                        <span className="text-gray-800">{selectedProduct.vendor.reviews} reviews</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="text-gray-800">{selectedProduct.vendor.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Member Since:</span>
                        <span className="text-gray-800">{selectedProduct.vendor.memberSince}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tools;