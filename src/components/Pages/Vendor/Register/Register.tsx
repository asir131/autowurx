"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import singupImg from "@/assets/vendor/vendorSingupImg.png"
import logo from "@/assets/vendor/vendorlogo.png"
import Link from "next/link"
import BusinessLogo from "@/assets/vendor/businessLogo.png"

export default function Register() {
  const [businessName, setBusinessName] = useState("")
  const [businessCategory, setBusinessCategory] = useState("")
  const [businessAddress, setBusinessAddress] = useState("")
  const [businessHourFrom, setBusinessHourFrom] = useState("")
  const [businessHourTo, setBusinessHourTo] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here (e.g., API call)
    console.log({ 
      businessName, 
      businessCategory, 
      businessAddress, 
      businessHourFrom, 
      businessHourTo, 
      phoneNumber, 
      password,
      acceptTerms 
    })
  }

  return (
    <div className="flex flex-col  md:flex-row bg-gray-100">
      {/* Left Side: Background Image with Overlay */}
      <div className="md:w-1/2 h-64 md:h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Car Image - Replace with your actual image */}
        <Image
  src={singupImg || "/placeholder.svg"}
  alt="Green classic car"
  className="w-full h-full object-cover drop-shadow-lg"
/>
        {/* Optional: Add subtle lines or clouds as SVG if needed */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gray-300"></div>
        <div className="absolute top-8 left-1/4 w-32 h-1 bg-gray-300"></div>
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2 flex flex-col items-start justify-start p-6 md:px-24 md:pt-10  bg-white">
        <div className="mb-4">
          <Image src={logo || "/placeholder.svg"} height={80} width={160} alt="" />
          <h2 className="text-base md:text-2xl font-semibold text-gray-700 mb-2">Complete Your Business Account</h2>
          <p className="text-sm text-gray-600 mb-1">Hello there, Let's start your journey with us.</p>
          <p className="text-sm mb-1 font-semibold my-8">Business Logo</p>
          <Image src={BusinessLogo} width={100} height={100} alt="" />
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-3">
          <div>
            <label htmlFor="businessName" className="block text-xs font-semibold text-gray-700 mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Type here..."
              required
            />
          </div>

          <div>
            <label htmlFor="businessCategory" className="block text-xs font-semibold text-gray-700 mb-1">
              Business Category
            </label>
            <select
              id="businessCategory"
              value={businessCategory}
              onChange={(e) => setBusinessCategory(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              required
            >
              <option value="">Select</option>
              <option value="automotive">Automotive</option>
              <option value="retail">Retail</option>
              <option value="service">Service</option>
              <option value="restaurant">Restaurant</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="businessAddress" className="block text-xs font-semibold text-gray-700 mb-1">
              Business Address
            </label>
            <input
              type="text"
              id="businessAddress"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Type here..."
              required
            />
          </div>

          <div>
            <label htmlFor="businessHour" className="block text-xs font-semibold text-gray-700 mb-1">
              Business Hour
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                id="businessHourFrom"
                value={businessHourFrom}
                onChange={(e) => setBusinessHourFrom(e.target.value)}
                className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="07:00 PM"
                required
              />
              <span className="text-gray-500 text-xs">To</span>
              <input
                type="time"
                id="businessHourTo"
                value={businessHourTo}
                onChange={(e) => setBusinessHourTo(e.target.value)}
                className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="10:00 AM"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-xs font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter Number"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition duration-200"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded accent-yellow-500"
              required
            />
            <label htmlFor="acceptTerms" className="ml-2 block text-xs md:my-5 text-gray-600">
              I accept the Terms of Service and Privacy Policy.
            </label>
          </div>

          <Link href="/dashboard">
          <button 
            type="submit"
            className="w-full mt-3 bg-yellow-500 hover:bg-yellow-600 text-sm font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition duration-200"
          >
            Sign Up
          </button></Link>
        </form>

        <div className="flex w-3/4    justify-center">
            <p className="mt-4 mr-10 text-center text-xs text-gray-600">
          Already have an account?{" "}
          <span  className="text-yellow-500 hover:underline">
            Login
          </span>
        </p>
        </div>
      </div>
    </div>
  )
}