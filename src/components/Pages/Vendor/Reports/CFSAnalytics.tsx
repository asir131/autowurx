"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { IoCameraOutline } from "react-icons/io5"

interface Vehicle {
  id: number;
  name: string;
  views: number;
  listedDays: number;
  miles: number;
  price: number;
  listingPrice: number;
  regionAvgPrice: number;
  difference: number;
  demandRatio: number;
  demandOf: number;
  valueRank: string;
  priceRank: string;
}

const CFSAnalytics = () => {
  const [vehicleData] = useState<Vehicle[]>([
    { id: 1, name: '2015 Chevrolet Silverado 1500', views: 0, listedDays: 8, miles: 183000, price: 9990, listingPrice: 9990, regionAvgPrice: 9658, difference: 332, demandRatio: 1.2, demandOf: 7, valueRank: '2 of 3', priceRank: '3 of 3' },
    { id: 2, name: '2015 Chevrolet Silverado 1500', views: 0, listedDays: 8, miles: 183000, price: 9990, listingPrice: 9990, regionAvgPrice: 9658, difference: 332, demandRatio: 1.2, demandOf: 7, valueRank: '2 of 3', priceRank: '3 of 3' },
    { id: 3, name: '2015 Chevrolet Silverado 1500', views: 0, listedDays: 8, miles: 183000, price: 9990, listingPrice: 9990, regionAvgPrice: 9658, difference: 332, demandRatio: 1.2, demandOf: 7, valueRank: '2 of 3', priceRank: '3 of 3' },
    { id: 4, name: '2015 Chevrolet Silverado 1500', views: 0, listedDays: 8, miles: 183000, price: 9990, listingPrice: 9990, regionAvgPrice: 9658, difference: 332, demandRatio: 1.2, demandOf: 7, valueRank: '2 of 3', priceRank: '3 of 3' },
    { id: 5, name: '2016 Ford F-150 XLT', views: 5, listedDays: 12, miles: 145000, price: 12500, listingPrice: 12500, regionAvgPrice: 12200, difference: 300, demandRatio: 1.5, demandOf: 9, valueRank: '1 of 3', priceRank: '2 of 3' },
    { id: 6, name: '2017 Toyota Tacoma SR5', views: 15, listedDays: 6, miles: 98000, price: 18990, listingPrice: 18990, regionAvgPrice: 19500, difference: -510, demandRatio: 2.1, demandOf: 8, valueRank: '1 of 3', priceRank: '1 of 3' },
    { id: 7, name: '2014 Dodge Ram 2500', views: 2, listedDays: 15, miles: 205000, price: 11990, listingPrice: 11990, regionAvgPrice: 11450, difference: 540, demandRatio: 0.9, demandOf: 6, valueRank: '3 of 3', priceRank: '3 of 3' },
    { id: 8, name: '2018 GMC Sierra 1500', views: 8, listedDays: 10, miles: 112000, price: 15990, listingPrice: 15990, regionAvgPrice: 15700, difference: 290, demandRatio: 1.8, demandOf: 10, valueRank: '2 of 3', priceRank: '2 of 3' },
    { id: 9, name: '2015 Nissan Frontier SV', views: 3, listedDays: 18, miles: 175000, price: 8990, listingPrice: 8990, regionAvgPrice: 8500, difference: 490, demandRatio: 1.1, demandOf: 5, valueRank: '2 of 3', priceRank: '3 of 3' },
    
  ]);

  return (
    <div className="min-h-screen mx-2 md:mx-10">
      {/* Header */}
      <div className="  px-4 sm:px-6 py-4  flex items-center justify-between">
        <div
          onClick={() => window.history.back()}
          className="flex items-center  gap-2 text-xl sm:text-2xl font-semibold cursor-pointer text-gray-900"
        >
          <MdOutlineKeyboardArrowLeft size={28} className="sm:w-[32px] sm:h-[32px]" />
          <span>CFS Analytics</span>
        </div>

        {/* Printables Button */}
        <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          <svg
            width="20"
            height="21"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              d="M6.5 19.8805L6.5 11.5742C6.5 10.6314 6.5 10.16 6.79289 9.86711C7.08579 9.57422 7.55719 9.57422 8.5 9.57422L15.5 9.57422C16.4428 9.57422 16.9142 9.57422 17.2071 9.86711C17.5 10.16 17.5 10.6314 17.5 11.5742L17.5 19.8805C17.5 20.1971 17.5 20.3553 17.3962 20.4302C17.2924 20.505 17.1422 20.455 16.8419 20.3548L14.6738 19.6321C14.5878 19.6035 14.5448 19.5892 14.5005 19.5905C14.4561 19.5918 14.4141 19.6086 14.3299 19.6422L12.1857 20.4999C12.094 20.5366 12.0481 20.555 12 20.555C11.9519 20.555 11.906 20.5366 11.8143 20.4999L9.67005 19.6422C9.58592 19.6086 9.54385 19.5918 9.49952 19.5905C9.45519 19.5892 9.41221 19.6035 9.32625 19.6321L7.15811 20.3548C6.8578 20.455 6.70764 20.505 6.60382 20.4302C6.5 20.3553 6.5 20.1971 6.5 19.8805Z"
              fill="#7E869E"
              fillOpacity="0.25"
              stroke="#606060"
            />
            <rect x="6.5" y="2.57422" width="11" height="4" rx="1" fill="#7E869E" fillOpacity="0.25" />
            <path
              d="M18 13.5742H18.5C19.4428 13.5742 19.9142 13.5742 20.2071 13.2813C20.5 12.9884 20.5 12.517 20.5 11.5742V10.5742C20.5 8.6886 20.5 7.74579 19.9142 7.16001C19.3284 6.57422 18.3856 6.57422 16.5 6.57422H7.5C5.61438 6.57422 4.67157 6.57422 4.08579 7.16001C3.5 7.74579 3.5 8.6886 3.5 10.5742V12.5742C3.5 13.0456 3.5 13.2813 3.64645 13.4278C3.79289 13.5742 4.0286 13.5742 4.5 13.5742H6"
              stroke="#606060"
            />
            <path d="M9.5 13.5742L13.5 13.5742" stroke="#606060" strokeLinecap="round" />
            <path d="M9.5 16.5742L14.5 16.5742" stroke="#606060" strokeLinecap="round" />
            <path
              d="M17.5 6.57422V6.17422C17.5 4.47716 17.5 3.62863 16.9728 3.10143C16.4456 2.57422 15.5971 2.57422 13.9 2.57422H10.1C8.40294 2.57422 7.55442 2.57422 7.02721 3.10143C6.5 3.62863 6.5 4.47716 6.5 6.17422V6.57422"
              stroke="#606060"
            />
          </svg>
          <span className="text-xs sm:text-sm text-gray-700 hidden sm:inline">Printables</span>
        </button>
      </div>

      {/* Vehicle Cards */}
      <div className="px-4 sm:px-6 bg-white mx-auto rounded-lg py-6 space-y-4">
        {vehicleData.map((vehicle) => (
          <div key={vehicle.id} className="bg-white  rounded-lg border border-gray-200 p-4 sm:p-6">
            {/* Top Row - Main Info */}
            <div className="grid grid-cols-1 border-b pb-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{vehicle.name}</h3>
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  {vehicle.views} Views <span className="text-sm font-normal text-gray-500">(Listed for {vehicle.listedDays} days)</span>
                </p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900">Miles: {vehicle.miles.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900">Price: ${vehicle.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Bottom Row - Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Photo Section */}
              <div className="w-full max-w-[160px]">
                <div className="py-10 md:w-52  border border-gray-200 rounded-md flex flex-col items-center justify-center text-gray-400">
                  <IoCameraOutline size={28} className="mb-1" />
                  <span className="text-xs font-medium text-gray-500">PHOTOS</span>
                  <span className="text-xs text-gray-400">Coming Soon</span>
                </div>
              </div>

              {/* Pricing Details */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Listing Price: <span className="text-gray-900">${vehicle.listingPrice.toLocaleString()}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Region Average Price: <span style={{ color: '#FFE135' }}>${vehicle.regionAvgPrice.toLocaleString()}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Difference: <span className="text-gray-900">${vehicle.difference} ABOVE Average</span>
                </p>
              </div>

              {/* Demand Details */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Demand Ratio: <span style={{ color: '#FFE135' }}>{vehicle.demandRatio}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Demand Ratio: <span style={{ color: '#FFE135' }}>1 of {vehicle.demandOf}</span>
                </p>
              </div>

              {/* Rank Details */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  Value Rank: <span className="text-gray-900">{vehicle.valueRank}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Price Rank: <span className="text-gray-900">{vehicle.priceRank}</span>
                </p>
                <button className="text-sm font-medium hover:underline" style={{ color: '#FFE135' }}>
                  View Competition
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CFSAnalytics