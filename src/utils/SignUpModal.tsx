"use client";
import { useState } from "react";
import Link from "next/link";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDealer, setIsDealer] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password, isDealer });
    // Add your form submission logic here (e.g., API call)
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md relative border border-yellow-400">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-600">AUTOWURX</h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-2">Sign Up</h3>
          <p className="text-gray-600 mt-2">
            Experience the largest automotive industry&apos;s best right at your fingertips.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Email/Phone number"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-500"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-500 pr-10"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">👁️</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I agree to all terms &amp; conditions.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500 transition duration-200"
          >
            Next
          </button>
        </form>
        <div className="text-center mt-4 text-gray-600">
          Have an account?{" "}
          <Link href="/signin" className="text-yellow-600 underline">
            Signin
          </Link>
        </div>
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-center border border-yellow-200">
          <p className="font-semibold text-gray-800">Are you a Dealer?</p>
          <p className="text-sm text-gray-600 mt-1">
            Access leads, inventory, car details, and subscriptions all in one place.
          </p>
          <button
            onClick={() => setIsDealer(true)} // Example: toggle dealer mode
            className="mt-2 bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-200"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;