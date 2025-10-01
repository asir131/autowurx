"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import singupImg from "@/assets/vendor/vendorSingupImg.png"
import logo from "@/assets/vendor/vendorlogo.png"
import Link from "next/link"

export default function Singup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here (e.g., API call)
    console.log({ firstName, lastName, email })
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
      <div className="md:w-1/2  flex flex-col items-start justify-center p-8 md:p-36 bg-white py-8 md:py-12">
        <div className="mb-8">
          <Image src={logo || "/placeholder.svg"} height={100} width={200} alt="" />
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4">Create an Business Account</h2>
          <p className="text-gray-600">Hello there, Let’s start your journey with us.</p>
          
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="First name"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Last name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition duration-200"
              placeholder="you@example.com"
              required
            />
          </div>

          <Link href="/signup/vendor-register">
          <button 
            type="submit"
            className="w-full mt-5 bg-yellow-500 hover:bg-yellow-600  font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition duration-200"
          >
            Next
          </button></Link>
        </form>

         <div className="flex md:w-3/4    justify-center">
            <p className="mt-4 mr-10 text-center text-sm text-gray-600">
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