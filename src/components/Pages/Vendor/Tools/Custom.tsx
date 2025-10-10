"use client"
import React, { useState } from 'react';
import { Plus, X, Upload } from 'lucide-react';

const Custom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="min-h-screen p-2 sm:p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-8 px-2 sm:px-5">
          <div
            onClick={() => window.history.back()}
            className="flex items-center gap-1 sm:gap-2 text-lg sm:text-[28px] font-semibold cursor-pointer hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 sm:w-[30px] sm:h-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Custom </span>
            <span className="sm:hidden text-base">Custom </span>
          </div>
        </div>

        {/* Settings Content */}
        <div className="max-w-full bg-white py-5 rounded-lg px-2 sm:px-6">
          {/* Buyer's Guide Settings */}
          <div className="mb-8">
            <div className="border rounded-lg p-4 sm:p-4" style={{ borderColor: '#E8E8E8' }}>
              <h2 className="text-xl font-semibold border-b pb-4 mb-6">Buyer's Guide Settings</h2>
              <h3 className="text-base font-semibold mb-2">Create Customized Buyer's Guides</h3>
              <p className="text-sm text-gray-600 mb-4">
                Customize the following options to create a personalized Buyer's Guide. Then, download it from the Existing Inventory page.
              </p>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded font-medium text-sm mb-6"
                style={{ backgroundColor: '#FFE135' }}
              >
                <div className='bg-black font-bold rounded-full'>
                  <Plus size={18} className='text-white' />
                </div>
                Create Custom
              </button>
              
              <div className="flex gap-3">
                <button className="px-4 border rounded-md py-2 text-sm text-gray-700 hover:text-gray-900">
                  Cancel
                </button>
                <button className="px-4 border rounded-md py-2 text-sm text-gray-700 hover:text-gray-900">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Window Sticker Settings */}
          <div className="mb-8">
            <div className="border rounded-lg p-4 sm:p-6" style={{ borderColor: '#E8E8E8' }}>
              <h2 className="text-xl font-semibold border-b pb-4 mb-6">Window Sticker Settings</h2>
              <h3 className="text-base font-semibold mb-2">Create Customized Window Stickers</h3>
              <p className="text-sm text-gray-600 mb-4">
                Customize the following options to create a personalized Window Sticker. Then, download it from the Existing Inventory page.
              </p>
              
              <button 
                className="flex items-center gap-2 px-4 py-2 rounded font-medium text-sm mb-6"
                style={{ backgroundColor: '#FFE135' }}
                onClick={() => setIsModalOpen(true)}
              >
                <div className='bg-black font-bold rounded-full'>
                  <Plus size={18} className='text-white' />
                </div>
                Create Custom
              </button>
              
              <div className="flex gap-3">
                <button className="px-4 border rounded-md py-2 text-sm text-gray-700 hover:text-gray-900">
                  Cancel
                </button>
                <button className="px-4 border rounded-md py-2 text-sm text-gray-700 hover:text-gray-900">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Mirror Hanger Settings */}
          <div>
            <div className="border rounded-lg p-4 sm:p-6" style={{ borderColor: '#E8E8E8' }}>
              <h2 className="text-xl font-semibold mb-6 border-b pb-4">Mirror Hanger Settings</h2>
              <h3 className="text-base font-semibold mb-2">Create Customized Mirror Hangers</h3>
              <p className="text-sm text-gray-600 mb-4">
                Customize the following options to create a personalized Mirror Hanger. Then, download it from the Existing Inventory page.
              </p>
              
              <button 
              onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded font-medium text-sm mb-6"
                style={{ backgroundColor: '#FFE135' }}
              >
                <div className='bg-black font-bold rounded-full'>
                  <Plus size={18} className='text-white' />
                </div>
                Create Custom
              </button>
              
              <div className="flex gap-3">
                <button className="px-4 border rounded-md py-2 text-sm text-gray-700 hover:text-gray-900">
                  Cancel
                </button>
                <button className="px-4 border rounded-md py-2 text-sm text-gray-700 hover:text-gray-900">
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className='bg-[#fffceb] rounded-lg text-sm p-5 mt-10'>
            These forms are provided solely for the convenience of dealers. They are not intended to provide legal information or advice and are made available to you on the understanding and express condition that Carsforsale.com, Inc., its subsidiaries, and its affiliates (collectively, "Carsforsale.com®") is not providing you with legal services or advice. In order to ensure compliance with applicable laws, you should consult legal counsel about any form or transaction involving a form before proceeding with using the form or completing the transaction. You acknowledge and agree: (1) Carsforsale.com® is not providing you legal or other professional advice or services; (2) Carsforsale.com® makes no warranties or representations about the accuracy or legal validity of these forms; (3) your use of these forms are entirely at your own risk; (4) Carsforsale.com® disclaims any and all liability associated with your use of these forms; and (5) you will hold harmless and indemnify Carsforsale.com® for any liability associated with your use of these forms. You are also affirming that you have read and consent to our <span className='font-semibold border-b border-black'>Terms and Conditions of Use.</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
            {/* Modal Header */}
            <div className="px-6 pt-5 pb-4 ">
              <h2 className="text-xl border-b pb-2 font-semibold">Buyer's Guide Settings</h2>
            </div>

            {/* Modal Content */}
            <div className="px-6 pb-6">
              <h3 className="text-sm font-semibold mb-1">Create Customized Buyer's Guides</h3>
              <p className="text-xs text-gray-600 mb-6">
                Customize the following options to create a personalized Buyer's Guide. Then, download it from the Existing Inventory page.
              </p>

              {/* Upload Area */}
              <div className='bg-white p-2 border rounded-md w-72 h-44 mb-5'>
                <div className="border w-full h-40 border-gray-300 rounded py-2 text-center mb-6 bg-gray-50">
                <div className="flex border h-full mx-2 p-2  border-dashed flex-col items-center">
                  <Upload className="text-gray-400 mb-3" size={40} />
                  <p className="text-sm text-gray-700 font-medium">Drag & Drop To Upload Or Browse</p>
                  <p className="text-xs text-gray-500 mt-1">Image</p>
                </div>
              </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-start">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 border rounded-md py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  className="px-6 py-2 text-sm font-medium rounded"
                  style={{ backgroundColor: '#FFE135' }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Custom;