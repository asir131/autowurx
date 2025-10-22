"use client";
import brandcar from "@/assets/brand/brandcar.png";
import car1 from "@/assets/car/car1.png";
import car6 from "@/assets/car/car6.png";
import carImage from "@/assets/car/sugestCar.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCarCrash } from "react-icons/fa";

const ProductReview = () => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [activeCreditScore, setActiveCreditScore] = useState<string | null>(
    null
  );
  const [activeLoanTerm, setActiveLoanTerm] = useState<string | null>(null);

  const handleFocus = (fieldId: string) => {
    setActiveField(fieldId);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleCreditScoreClick = (score: string) => {
    setActiveCreditScore(score);
  };

  const handleLoanTermClick = (term: string) => {
    setActiveLoanTerm(term);
  };

  const carData = [
    {
      image: carImage,
      model: "Tesla Model S Plaid",
      year: "2023",
      hp: "1,020",
      price: "134,990",
      location: "San Francisco",
    },
    {
      image: carImage,
      model: "Tesla Model S Plaid",
      year: "2023",
      hp: "1,020",
      price: "134,990",
      location: "San Francisco",
    },
    {
      image: carImage,
      model: "Tesla Model S Plaid",
      year: "2023",
      hp: "1,020",
      price: "134,990",
      location: "San Francisco",
    },
    {
      image: carImage,
      model: "Tesla Model S Plaid",
      year: "2023",
      hp: "1,020",
      price: "134,990",
      location: "San Francisco",
    },
  ];

  return (
    <div className="w-full mx-auto container">
      <div className="lg:flex p-2 space-x-10">
        {/* Image Section */}
        <div className="lg:w-3/5 space-y-4">
          <div className="relative w-full h-[80%] rounded-md overflow-hidden ">
            <Image
              src={car1}
              alt="Car"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="lg:w-1/4 h-24 bg-gray-300 rounded-md">
                {/* Add images here */}

                <Image
                  src={car6}
                  alt="Car"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-5/6 lg:w-2/5 bg-white shadow-lg rounded-lg p-6 mt-2 space-y-4">
          <h2 className="text-2xl font-semibold">Contact seller</h2>
          <form>
            <div className="space-y-2">
              <div className="flex gap-5">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone (optional)"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option value="check_availability">Check Availability</option>
                  <option value="get_price">Get a price quote</option>
                  <option value="get_quote">Schedule test drive </option>
                  <option value="get_quote">Discuss a financing </option>
                  <option value="get_quote">Asked question </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Comments
                </label>
                <textarea
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="I would like to inquire about the availability..."
                ></textarea>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  I agree to all terms & conditions
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
              >
                Check Availability
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you authorize Autowurx and its
            sellers/partners to contact you by text/calls which may include
            marketing. You also agree to our Terms & Conditions and Privacy
            Policy.
          </p>

          <div className="w-full rounded-lg ">
            <Image
              src={brandcar}
              width="800"
              height="400"
              alt="Car"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex p-2 space-x-5">
        {/* Left Section: Vehicle Details */}
        <div className="lg:w-3/5 space-y-6 ">
          {/* Car Info */}
          <div className="rounded overflow-hidden shadow-lg bg-white p-5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-lg text-yellow-500">Used</span>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    2007 Toyota Tacoma Base
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mt-1">
                  54,456 miles | Manual | Premium Unleaded
                </p>
                <p className="text-3xl font-semibold text-yellow-500 mt-2">
                  $18,499
                </p>
              </div>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full">
                Get a free insurance quote
              </button>
            </div>
          </div>

          <div className="space-y-4 bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold">Overview</h4>
            <table className="w-full ">
              <tbody>
                {[
                  { label: "Exterior Color", value: "Blue" },
                  { label: "Interior Color", value: "Gray" },
                  { label: "Vin", value: "5TELU42N87Z328956" },
                  { label: "Mileage", value: "54,456" },
                  { label: "Stock #", value: "328956" },
                  { label: "Drive Type", value: "4WD" },
                  { label: "Engine", value: "4L V6" },
                  { label: "Transmission", value: "Manual" },
                  { label: "MPG Highway", value: "20 MPG" },
                  { label: "MPG City", value: "16 MPG" },
                ].map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-2 px-4 text-sm text-gray-700">
                      {item.label}
                    </td>
                    <td className="py-2 px-4 text-sm font-medium text-gray-900">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Vehicle History Section */}
          <div className="space-y-4 bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-semibold">Vehicle history by</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { label: "Accident free", icon: <FaCarCrash /> },
                { label: "Single Owner", icon: "👤" },
                { label: "Clean Title", icon: "📝" },
                { label: "Personal", icon: "🏠" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Features
            </h2>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left py-2 px-4">Category</th>
                  <th className="text-left py-2 px-4">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-gray-700 font-medium">
                    Exterior
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-600">
                    <ul>
                      <li>Upgrade Paint</li>
                      <li>Upgraded Tire Type</li>
                      <li>Pickup Bed Liner</li>
                      <li>Upgraded Wheel Size</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-gray-700 font-medium">
                    Vehicle Segment
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-600">
                    Compact Pickup
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-gray-700 font-medium">
                    Infotainment
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-600">
                    <ul>
                      <li>Premium Speakers</li>
                      <li>Premium Audio</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-gray-700 font-medium">
                    Safety & Driver Assist
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-600">
                    Brake Assist
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                Estimated Monthly Payment:
              </h3>
              <h1 className="text-4xl font-bold text-yellow-500 mt-2">
                $360/mo
              </h1>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex justify-between">
                <label htmlFor="carPrice" className="text-gray-700">
                  Car Price (Offer Amount)
                </label>
                <input
                  type="text"
                  id="carPrice"
                  className={`w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    activeField === "carPrice"
                      ? "bg-yellow-500"
                      : "focus:ring-yellow-500"
                  }`}
                  defaultValue="$18,499"
                  onFocus={() => handleFocus("carPrice")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="flex justify-between">
                <label htmlFor="downPayment" className="text-gray-700">
                  Down Payment
                </label>
                <input
                  type="text"
                  id="downPayment"
                  className={`w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    activeField === "downPayment"
                      ? "bg-yellow-500"
                      : "focus:ring-yellow-500"
                  }`}
                  defaultValue="$0"
                  onFocus={() => handleFocus("downPayment")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="flex justify-between">
                <label htmlFor="tradeInValue" className="text-gray-700">
                  Trade-In Value
                </label>
                <input
                  type="text"
                  id="tradeInValue"
                  className={`w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    activeField === "tradeInValue"
                      ? "bg-yellow-500"
                      : "focus:ring-yellow-500"
                  }`}
                  defaultValue="$0"
                  onFocus={() => handleFocus("tradeInValue")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="flex justify-between">
                <label htmlFor="salesTax" className="text-gray-700">
                  Sales Tax (8%)
                </label>
                <input
                  type="text"
                  id="salesTax"
                  className={`w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    activeField === "salesTax"
                      ? "bg-yellow-500"
                      : "focus:ring-yellow-500"
                  }`}
                  defaultValue="$1,479"
                  onFocus={() => handleFocus("salesTax")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="flex justify-between">
                <label htmlFor="apr" className="text-gray-700">
                  APR
                </label>
                <input
                  type="text"
                  id="apr"
                  className={`w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    activeField === "apr"
                      ? "bg-yellow-500"
                      : "focus:ring-yellow-500"
                  }`}
                  defaultValue="9%"
                  onFocus={() => handleFocus("apr")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Credit Score</label>
                <div className="flex justify-between mt-2">
                  <button
                    className={`text-sm px-4 py-2 rounded-lg ${
                      activeCreditScore === "rebuilding"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-300 text-gray-700"
                    }`}
                    onClick={() => handleCreditScoreClick("rebuilding")}
                  >
                    Rebuilding 640
                  </button>
                  <button
                    className={`text-sm px-4 py-2 rounded-lg ${
                      activeCreditScore === "fair"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleCreditScoreClick("fair")}
                  >
                    Fair 641-699
                  </button>
                  <button
                    className={`text-sm px-4 py-2 rounded-lg ${
                      activeCreditScore === "good"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleCreditScoreClick("good")}
                  >
                    Good 700-749
                  </button>
                  <button
                    className={`text-sm px-4 py-2 rounded-lg ${
                      activeCreditScore === "excellent"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleCreditScoreClick("excellent")}
                  >
                    Excellent 750-850
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">
                  Loan Terms (Months)
                </label>
                <div className="flex justify-between mt-2">
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeLoanTerm === "12"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleLoanTermClick("12")}
                  >
                    12
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeLoanTerm === "24"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleLoanTermClick("24")}
                  >
                    24
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeLoanTerm === "36"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleLoanTermClick("36")}
                  >
                    36
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeLoanTerm === "48"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleLoanTermClick("48")}
                  >
                    48
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeLoanTerm === "60"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleLoanTermClick("60")}
                  >
                    60
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeLoanTerm === "72"
                        ? "bg-yellow-500 text-gray-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleLoanTermClick("72")}
                  >
                    72
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg">
                  Make Offer
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg   mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xl font-semibold text-gray-900">
                Staver Auto Group
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-600">5.0</span>
              </div>
            </div>

            <div className="text-gray-600 mb-4">
              <p className="text-sm">44218 Wade Dr. 150, Chantilly, VA</p>
              <a href="tel:123-456-7890" className="text-blue-500 text-sm">
                Call Dealership
              </a>
            </div>

            <div className="mb-4">
              <a href="#" className="text-blue-500 text-sm font-medium">
                Visit Dealership Website
              </a>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Most recent consumer reviews
              </h3>
              <div className="space-y-4">
                {/* Review 1 */}
                <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="text-gray-900 font-semibold">
                      Luke Hogan
                    </div>
                    <div className="text-sm text-gray-600">
                      in the last week
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    Great experience with Staver auto group. Very mannered
                    transparent communication which is rare these days. If I am
                    purchasing a vehicle, I appreciate being treated like a
                    valuable customer instead of just another guy buying a car.
                    I like the way they operate. Staver for the win.
                  </p>
                </div>
                {/* Review 2 */}
                <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="text-gray-900 font-semibold">
                      Luke Hogan
                    </div>
                    <div className="text-sm text-gray-600">
                      in the last week
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    Great experience with Staver auto group. Very mannered
                    transparent communication which is rare these days. If I am
                    purchasing a vehicle, I appreciate being treated like a
                    valuable customer instead of just another guy buying a car.
                    I like the way they operate. Staver for the win.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-blue-500 text-sm font-medium mt-4 block"
            >
              See all 9 consumer reviews
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Suggested for you
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carData.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={car.image}
                alt={car.model}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {car.model}
                </h3>
                <p className="text-sm text-gray-600">
                  {car.year} | {car.hp} hp | {car.location}
                </p>
                <p className="text-lg font-bold text-gray-900 mt-2">{`$${car.price}`}</p>

                <Link href="/checkabilaty">
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-md mt-4 w-full">
                    Check Availability
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
