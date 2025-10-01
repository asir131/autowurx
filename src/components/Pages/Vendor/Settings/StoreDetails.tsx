import { useState, ChangeEvent } from 'react';
import logo from "@/assets/vendor/businessLogo.png"
import Image from 'next/image';
interface BusinessFormData {
  businessName: string;
  businessCategory: string;
  businessAddress: string;
  startTime: string;
  endTime: string;
  phoneNumber: string;
}

export default function BusinessInfoForm() {
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: '',
    businessCategory: 'Salon',
    businessAddress: '',
    startTime: '07:00 PM',
    endTime: '10:00 AM',
    phoneNumber: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl border rounded-lg  p-6 bg-white">
      <div className="space-y-5">
        {/* Business Logo */}
        <div>
          <p className="text-base font-semibold text-gray-900 mb-3">
            Business Logo
          </p>
          <div className="relative inline-block">
            <div className=" flex items-center justify-center overflow-hidden bg-white p-2">
              <Image src={logo} width={150} height={100} alt='' />
            </div>
            <button
              type="button"
              className="absolute bottom-2 right-6 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors shadow-md"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7H12M7 2L7 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="businessName" className="block text-sm font-semibold text-gray-900 mb-2">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Type here..."
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400"
          />
        </div>

        {/* Business Category */}
        <div>
          <label htmlFor="businessCategory" className="block text-sm font-semibold text-gray-900 mb-2">
            Business Category
          </label>
          <input
            type="text"
            id="businessCategory"
            name="businessCategory"
            value={formData.businessCategory}
            onChange={handleChange}
            placeholder="Salon"
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400"
          />
        </div>

        {/* Business Address */}
        <div>
          <label htmlFor="businessAddress" className="block text-sm font-semibold text-gray-900 mb-2">
            Business Adress
          </label>
          <input
            type="text"
            id="businessAddress"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            placeholder="Type here..."
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400"
          />
        </div>

        {/* Business Hour */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Business Hour
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              placeholder="07:00 PM"
              className="flex-1 w-20 md:w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400"
            />
            <span className="text-sm text-gray-600 px-1">To</span>
            <input
              type="text"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              placeholder="10:00 AM"
              className="flex-1 w-20 md:w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Number"
            className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 placeholder:text-gray-400"
          />
        </div>

        {/* Update Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#FFE135] text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-[#ffd700] transition-colors duration-200 mt-2"
        >
          Update
        </button>
      </div>
    </div>
  );
}