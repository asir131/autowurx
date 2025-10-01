"use client";
import { useState, useEffect } from 'react';

interface VerifyEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function VerifyEmailModal({ isOpen, onClose, email }: VerifyEmailModalProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [resendTimer, setResendTimer] = useState(56); // 56 seconds timer
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isOpen && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [isOpen, resendTimer]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Limit to 1 character
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleResend = () => {
    setResendTimer(56);
    setIsResendDisabled(true);
    // Add logic to resend OTP here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6   max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-600">AUTOWURX</h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-2">Verify Email</h3>
          <p className="text-gray-600 mt-2">
            A 4-digit code has been sent to {email}
          </p>
        </div>
        <div className="mt-6 flex justify-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <button
          type="button"
          className="w-full bg-yellow-400 text-white p-2 rounded-lg mt-6 hover:bg-yellow-500 transition duration-200"
          onClick={() => {
            // Add OTP verification logic here
            console.log('OTP submitted:', otp.join(''));
          }}
        >
          Verify
        </button>
        <p className="text-center mt-4 text-gray-600 text-sm">
          Resend code in {resendTimer} seconds{' '}
          <button
            onClick={handleResend}
            disabled={isResendDisabled}
            className={`text-yellow-600 underline ${isResendDisabled ? 'cursor-not-allowed opacity-50' : 'hover:text-yellow-700'}`}
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}