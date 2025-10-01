"use client";
import Link from "next/link";
import { useState } from "react";

// Verify Modal Component
function VerifyEmailModal({ isOpen, onClose, email }: { isOpen: boolean; onClose: () => void; email: string }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md relative w-full mx-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close verification modal"
        >
          <span className="text-2xl">&times;</span>
        </button>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-600">AUTOWURX</h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-2">Verify Email</h3>
          <p className="text-gray-600 mt-2">
            Verification code sent to {email}
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div className="flex justify-between gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <input
                key={item}
                type="text"
                maxLength={1}
                className="w-12 h-12 border text-center text-xl font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-500 transition duration-200"
          >
            Verify
          </button>
        </form>

        <div className="text-center mt-4 text-gray-600">
          Didn&apos;t receive the code? <button className="text-yellow-600 underline">Resend</button>
        </div>
      </div>
    </div>
  );
}

// Sign Up Modal Component
interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

function SignUpModal({ isOpen, onClose, onSwitchToSignIn }: SignUpModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Email/Phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-500"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          Have an account? <button onClick={onSwitchToSignIn} className="text-yellow-600 underline">Signin</button>
        </div>
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-center border border-yellow-200">
          <p className="font-semibold text-gray-800">Are you a Dealer?</p>
          <p className="text-sm text-gray-600 mt-1">
            Access leads, inventory, car details, and subscriptions all in one place.
          </p>
          <button
            className="mt-2 bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-200"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

// Sign In Modal Component
interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleSwitchToSignIn = () => {
    setIsSignUpOpen(false);
    // Don't automatically reopen sign-in modal
  };

  const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    setUserEmail(email || "bmuthshob@gmail.com");
    setIsVerifyOpen(true);
  };

  const handleCloseAll = () => {
    setIsVerifyOpen(false);
    setIsSignUpOpen(false);
    onClose();
  };

  if (!isOpen && !isSignUpOpen && !isVerifyOpen) return null;

  return (
    <>
      {/* Sign In Modal */}
      {isOpen && !isSignUpOpen && !isVerifyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md relative w-full mx-4">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close sign in modal"
            >
              <span className="text-2xl">&times;</span>
            </button>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-yellow-600">AUTOWURX</h2>
              <p className="text-gray-600 mt-2">
                Sign in to the largest automotive industry&apos;s best experience right at your fingertips.
              </p>
            </div>

            <form
              className="mt-6 space-y-4"
              onSubmit={handleSignInSubmit}
            >
              <input
                type="text"
                name="email"
                placeholder="Email/Phone number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

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
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={handleOpenSignUp}
                className="text-yellow-600 underline"
              >
                Signup
              </button>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-center">
              <p className="font-semibold text-gray-800">Are you a Dealer?</p>
              <p className="text-sm text-gray-600 mt-1 mb-5">
                Access leads, inventory, car dealer, and subscriptions all in one place.
              </p>
              <Link href="/signup"
                type="button"
                className="mt-5 bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-200"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Sign Up Modal */}
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={handleCloseAll} 
        onSwitchToSignIn={handleSwitchToSignIn}
      />
      
      {/* Verify Email Modal */}
      <VerifyEmailModal
        isOpen={isVerifyOpen}
        onClose={handleCloseAll}
        email={userEmail}
      />
    </>
  );
}