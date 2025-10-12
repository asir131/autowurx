"use client"
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md"
import { useState } from "react"
import Link from "next/link"
import Printable from "./Printable"

const ExistingInventory = () => {
  const [printable,setPrintable] = useState(false)
  console.log(printable);
  
  const cars = [
    {
      id: 1,
      name: "2015 Chevrolet Silverado 1500 LS 4x2 4dr Double Cab 6.5 ft. SB",
      idNumber: "--",
      price: "$9,990",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      avgPrice: "$15,598",
      miles: "245,000",
      leads: "2",
      onMarket: "19",
    },
    {
      id: 2,
      name: "2018 Toyota Camry LE Sedan 4D",
      idNumber: "TC-2018-001",
      price: "$18,500",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
      avgPrice: "$19,200",
      miles: "45,320",
      leads: "8",
      onMarket: "12",
    },
    {
      id: 3,
      name: "2020 Ford F-150 XLT SuperCrew 4WD",
      idNumber: "FF-2020-045",
      price: "$32,990",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      avgPrice: "$35,400",
      miles: "28,500",
      leads: "15",
      onMarket: "5",
    },
    {
      id: 4,
      name: "2019 Nissan Altima 2.5 S Sedan",
      idNumber: "NA-2019-023",
      price: "$16,750",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
      avgPrice: "$17,900",
      miles: "52,100",
      leads: "6",
      onMarket: "8",
    },
  ]

  return (
    <div className="min-h-screen p-2 sm:p-4 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-8 px-2 sm:px-5">
        <div
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 text-lg sm:text-[28px] font-semibold cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft size={24} className="sm:w-[35px] sm:h-[35px]" />
          <span className="hidden sm:inline">Existing Inventory</span>
          <span className="sm:hidden text-base">Inventory</span>
        </div>

        {/* Printables Button */}
        <button onClick={()=>setPrintable(!printable)} className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
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

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 mx-2 sm:mx-5 mb-4 sm:mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
          {/* Sort By */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Sort By:</label>
            <div className="relative">
              <select className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                <option>Product ID Number</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Location</label>
            <div className="relative">
              <select className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                <option>All</option>
                <option>Autowurks</option>
                <option>Autourx</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* Make */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Make</label>
            <div className="relative">
              <select className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                <option>All</option>
                <option>Any</option>
                <option>Chevrolet</option>
                <option>Ford</option>
                <option>Kia</option>
                <option>Mazda</option>
                <option>Nissan</option>
                <option>Toyota</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* Model */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Model</label>
            <div className="relative">
              <select className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                <option>All</option>
                <option>Any</option>
                <option>Camry</option>
                <option>Silverado</option>
                <option>F-150</option>
                <option>Altima</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* Condition */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Condition</label>
            <div className="relative">
              <select className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                <option>All</option>
                <option>New</option>
                <option>Used</option>
                <option>Manufacturer Certified</option>
                <option>Repairable</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* On Market */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">On Market</label>
            <div className="relative">
              <select className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                <option>All Days</option>
                <option>0-30 days</option>
                <option>31-60 Days</option>
                <option>61+ Days</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>
        </div>
      </div>
       {
        printable && (
          <Printable/>
        )
       }
      {/* Car Cards Section */}
      <div className="mx-2 sm:mx-5 space-y-3 sm:space-y-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-sm p-3 sm:p-4">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              {/* Car Image and Basic Info */}
              <div className="flex gap-3 mb-3">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-24 h-20 sm:w-28 sm:h-24 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 line-clamp-2">{car.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">ID: {car.idNumber}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg sm:text-xl font-bold text-gray-800">{car.price}</p>
                    <p className="text-xs text-gray-500">Avg: {car.avgPrice}</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center p-2 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500 mb-1">Miles</p>
                  <p className="text-sm font-medium text-gray-800">{car.miles}</p>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500 mb-1">Leads</p>
                  <p className="text-sm font-medium text-gray-800">{car.leads}</p>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded">
                  <p className="text-xs text-gray-500 mb-1">On Market</p>
                  <p className="text-sm font-medium text-gray-800">{car.onMarket}d</p>
                </div>
              </div>

              {/* Share Options */}
              <div className="mb-3">
                <p className="text-xs text-gray-600 mb-2">Share Options</p>
                <div className="flex items-center gap-3">
                  <button className="hover:opacity-80 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_11181_82336)">
                        <path
                          d="M16.5 8.07422C16.5 3.65597 12.9183 0.0742188 8.5 0.0742188C4.08175 0.0742188 0.5 3.65597 0.5 8.07422C0.5 12.0672 3.4255 15.3769 7.25 15.977V10.3867H5.21875V8.07422H7.25V6.31172C7.25 4.30672 8.44438 3.19922 10.2718 3.19922C11.147 3.19922 12.0625 3.35547 12.0625 3.35547V5.32422H11.0538C10.0599 5.32422 9.75 5.94091 9.75 6.57359V8.07422H11.9688L11.6141 10.3867H9.75V15.977C13.5745 15.3769 16.5 12.0673 16.5 8.07422Z"
                          fill="#1877F2"
                        />
                      </g>
                    </svg>
                  </button>
                  <button className="hover:opacity-80 transition-opacity">
                    <svg width="20" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.0583 2.25783C19.9436 1.83577 19.7198 1.451 19.4093 1.14182C19.0987 0.832639 18.7122 0.609844 18.2883 0.495619C16.7363 0.0742188 10.4899 0.0742188 10.4899 0.0742188C10.4899 0.0742188 4.24314 0.0869743 2.69111 0.508374C2.26716 0.622607 1.88067 0.845413 1.57013 1.15461C1.25958 1.4638 1.03581 1.84859 0.921109 2.27066C0.451656 5.01606 0.269546 9.19942 0.933999 11.835C1.04872 12.2571 1.27249 12.6418 1.58303 12.951C1.89358 13.2602 2.28006 13.483 2.704 13.5972C4.25603 14.0186 10.5026 14.0186 10.5026 14.0186C10.5026 14.0186 16.7491 14.0186 18.301 13.5972C18.725 13.483 19.1115 13.2602 19.422 12.951C19.7326 12.6418 19.9564 12.2571 20.0711 11.835C20.5663 9.08571 20.7188 4.90492 20.0583 2.25783Z"
                        fill="#FF0000"
                      />
                      <path d="M8.5 10.0347L13.6819 7.04666L8.5 4.05859V10.0347Z" fill="white" />
                    </svg>
                  </button>
                  <button className="hover:opacity-80 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.8761 10.0745C19.8801 11.5629 19.3972 13.0118 18.5011 14.2003C18.4518 14.2659 18.39 14.3212 18.3193 14.363C18.2486 14.4048 18.1703 14.4322 18.089 14.4438C18.0077 14.4553 17.9249 14.4507 17.8453 14.4302C17.7658 14.4098 17.691 14.3738 17.6254 14.3245C17.5597 14.2752 17.5044 14.2134 17.4626 14.1426C17.4209 14.0719 17.3934 13.9937 17.3819 13.9123C17.3703 13.831 17.3749 13.7482 17.3954 13.6687C17.4159 13.5891 17.4518 13.5144 17.5012 13.4487C18.2346 12.477 18.6297 11.2919 18.6261 10.0745C18.6261 8.58266 18.0335 7.15192 16.9786 6.09702C15.9237 5.04213 14.493 4.4495 13.0011 4.4495C11.5093 4.4495 10.0786 5.04213 9.02367 6.09702C7.96878 7.15192 7.37615 8.58266 7.37615 10.0745C7.37615 10.2403 7.3103 10.3992 7.19309 10.5164C7.07588 10.6337 6.91691 10.6995 6.75115 10.6995C6.58539 10.6995 6.42642 10.6337 6.30921 10.5164C6.192 10.3992 6.12615 10.2403 6.12615 10.0745C6.12584 9.44378 6.21233 8.81602 6.38318 8.20887C6.29802 8.1995 6.21209 8.1995 6.12615 8.1995C5.13159 8.1995 4.17776 8.59459 3.4745 9.29785C2.77124 10.0011 2.37615 10.9549 2.37615 11.9495C2.37615 12.9441 2.77124 13.8979 3.4745 14.6012C4.17776 15.3044 5.13159 15.6995 6.12615 15.6995H8.00115C8.16691 15.6995 8.32588 15.7653 8.44309 15.8826C8.5603 15.9998 8.62615 16.1587 8.62615 16.3245C8.62615 16.4903 8.5603 16.6492 8.44309 16.7664C8.32588 16.8837 8.16691 16.9495 8.00115 16.9495H6.12615C5.43879 16.9497 4.75877 16.8081 4.12858 16.5336C3.49839 16.2592 2.93155 15.8577 2.46347 15.3544C1.99539 14.851 1.63613 14.2566 1.40812 13.6081C1.1801 12.9597 1.08824 12.2712 1.13826 11.5856C1.18828 10.9001 1.37911 10.2322 1.69884 9.62376C2.01856 9.01528 2.46031 8.47926 2.9965 8.04918C3.53269 7.6191 4.15179 7.30419 4.81515 7.12412C5.47851 6.94405 6.17187 6.90269 6.85193 7.00263C7.54443 5.61759 8.68423 4.5069 10.0867 3.85046C11.4892 3.19402 13.0722 3.03028 14.5794 3.38575C16.0865 3.74123 17.4295 4.5951 18.3909 5.80907C19.3522 7.02304 19.8756 8.52599 19.8761 10.0745Z"
                        fill="#7E869E"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 text-xs">More</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link href={`/dashboard/inventory/[edit]?id=${car.id}`} className="flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex-1">
                  <svg width="16" height="17" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.7305 8.34564C12.7561 9.94898 14.1273 11.3113 15.7491 12.3271L8.85941 19.2177C8.43435 19.6428 8.22109 19.8553 7.96 19.9951C7.69905 20.1346 7.4044 20.1937 6.81547 20.3115L3.73832 20.9267C3.40571 20.9932 3.23918 21.0262 3.14457 20.9316C3.05028 20.837 3.08304 20.6709 3.14945 20.3388L3.76566 17.2617C3.88355 16.6722 3.94233 16.3772 4.08207 16.1161C4.2218 15.8551 4.43442 15.6427 4.85941 15.2177L11.7305 8.34564ZM16.1143 4.11029C16.6738 3.83302 17.3311 3.83304 17.8907 4.11029C18.1848 4.25602 18.4577 4.52891 19.003 5.07416C19.548 5.61918 19.8211 5.89147 19.9668 6.18548C20.2441 6.74496 20.244 7.40235 19.9668 7.96185C19.8211 8.25594 19.5482 8.52891 19.003 9.07416L17.2061 10.8701C15.5335 9.91871 14.1483 8.54232 13.1846 6.89154L15.003 5.07416C15.548 4.52912 15.8203 4.25607 16.1143 4.11029Z"
                      fill="#606060"
                      fillOpacity="0.66"
                    />
                  </svg>
                  <span className="text-xs text-gray-700">Edit</span>
                </Link>
                <Link href={`/dashboard/inventory/sell?id=${car.id}`}
                  className="px-3 pt-2   rounded-md text-xs font-medium transition-colors flex-1"
                  style={{ backgroundColor: "#FFE135", color: "#000" }}
                >
                  Sell / Removes
                </Link>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-48 h-40 object-cover rounded-md flex-shrink-0"
              />

              {/* Car Details */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1 pr-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{car.name}</h3>
                    <p className="text-sm text-gray-500">ID: {car.idNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">{car.price}</p>
                    <p className="text-sm text-gray-500">Average Price: {car.avgPrice}</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex gap-10 mt-10 mb-4">
                  <div className="flex justify-between items-center border-b border-r p-2 w-48">
                    <p className="text-sm text-gray-500">Miles</p>
                    <p className="text-base font-normal text-gray-800">{car.miles}</p>
                  </div>
                  <div className="flex justify-between items-center border-b border-r p-2 w-48">
                    <p className="text-sm text-gray-500">Leads</p>
                    <p className="text-base font-normal text-gray-800">{car.leads}</p>
                  </div>
                  <div className="flex justify-between items-center border-b border-r p-2 w-48">
                    <p className="text-sm text-gray-500">On Market</p>
                    <p className="text-base font-normal text-gray-800">{car.onMarket}</p>
                  </div>
                </div>
              </div>

              {/* Actions Section */}
              <div className="border-l-2 pl-6 flex flex-col items-center gap-4">
                {/* Share Options */}
                <div className="text-center">
                  <p className="text-base text-gray-600 mb-2">Share Options</p>
                  <div className="flex gap-2 justify-center mb-4">
                    <button className="hover:opacity-80 transition-opacity">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_11181_82336)">
                          <path
                            d="M16.5 8.07422C16.5 3.65597 12.9183 0.0742188 8.5 0.0742188C4.08175 0.0742188 0.5 3.65597 0.5 8.07422C0.5 12.0672 3.4255 15.3769 7.25 15.977V10.3867H5.21875V8.07422H7.25V6.31172C7.25 4.30672 8.44438 3.19922 10.2718 3.19922C11.147 3.19922 12.0625 3.35547 12.0625 3.35547V5.32422H11.0538C10.0599 5.32422 9.75 5.94091 9.75 6.57359V8.07422H11.9688L11.6141 10.3867H9.75V15.977C13.5745 15.3769 16.5 12.0673 16.5 8.07422Z"
                            fill="#1877F2"
                          />
                          <path
                            d="M11.6141 10.3867L11.9688 8.07422H9.75V6.57359C9.75 5.94084 10.0599 5.32422 11.0538 5.32422H12.0625V3.35547C12.0625 3.35547 11.147 3.19922 10.2717 3.19922C8.44438 3.19922 7.25 4.30672 7.25 6.31172V8.07422H5.21875V10.3867H7.25V15.977C7.66351 16.0418 8.08144 16.0743 8.5 16.0742C8.91856 16.0743 9.33649 16.0418 9.75 15.977V10.3867H11.6141Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </button>
                    <button className="hover:opacity-80 transition-opacity">
                      <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_11181_82339)">
                          <path
                            d="M20.0583 2.25783C19.9436 1.83577 19.7198 1.451 19.4093 1.14182C19.0987 0.832639 18.7122 0.609844 18.2883 0.495619C16.7363 0.0742188 10.4899 0.0742188 10.4899 0.0742188C10.4899 0.0742188 4.24314 0.0869743 2.69111 0.508374C2.26716 0.622607 1.88067 0.845413 1.57013 1.15461C1.25958 1.4638 1.03581 1.84859 0.921109 2.27066C0.451656 5.01606 0.269546 9.19942 0.933999 11.835C1.04872 12.2571 1.27249 12.6418 1.58303 12.951C1.89358 13.2602 2.28006 13.483 2.704 13.5972C4.25603 14.0186 10.5026 14.0186 10.5026 14.0186C10.5026 14.0186 16.7491 14.0186 18.301 13.5972C18.725 13.483 19.1115 13.2602 19.422 12.951C19.7326 12.6418 19.9564 12.2571 20.0711 11.835C20.5663 9.08571 20.7188 4.90492 20.0583 2.25783Z"
                            fill="#FF0000"
                          />
                          <path d="M8.5 10.0347L13.6819 7.04666L8.5 4.05859V10.0347Z" fill="white" />
                        </g>
                      </svg>
                    </button>
                    <button className="hover:opacity-80 transition-opacity">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.8761 10.0745C19.8801 11.5629 19.3972 13.0118 18.5011 14.2003C18.4518 14.2659 18.39 14.3212 18.3193 14.363C18.2486 14.4048 18.1703 14.4322 18.089 14.4438C18.0077 14.4553 17.9249 14.4507 17.8453 14.4302C17.7658 14.4098 17.691 14.3738 17.6254 14.3245C17.5597 14.2752 17.5044 14.2134 17.4626 14.1426C17.4209 14.0719 17.3934 13.9937 17.3819 13.9123C17.3703 13.831 17.3749 13.7482 17.3954 13.6687C17.4159 13.5891 17.4518 13.5144 17.5012 13.4487C18.2346 12.477 18.6297 11.2919 18.6261 10.0745C18.6261 8.58266 18.0335 7.15192 16.9786 6.09702C15.9237 5.04213 14.493 4.4495 13.0011 4.4495C11.5093 4.4495 10.0786 5.04213 9.02367 6.09702C7.96878 7.15192 7.37615 8.58266 7.37615 10.0745C7.37615 10.2403 7.3103 10.3992 7.19309 10.5164C7.07588 10.6337 6.91691 10.6995 6.75115 10.6995C6.58539 10.6995 6.42642 10.6337 6.30921 10.5164C6.192 10.3992 6.12615 10.2403 6.12615 10.0745C6.12584 9.44378 6.21233 8.81602 6.38318 8.20887C6.29802 8.1995 6.21209 8.1995 6.12615 8.1995C5.13159 8.1995 4.17776 8.59459 3.4745 9.29785C2.77124 10.0011 2.37615 10.9549 2.37615 11.9495C2.37615 12.9441 2.77124 13.8979 3.4745 14.6012C4.17776 15.3044 5.13159 15.6995 6.12615 15.6995H8.00115C8.16691 15.6995 8.32588 15.7653 8.44309 15.8826C8.5603 15.9998 8.62615 16.1587 8.62615 16.3245C8.62615 16.4903 8.5603 16.6492 8.44309 16.7664C8.32588 16.8837 8.16691 16.9495 8.00115 16.9495H6.12615C5.43879 16.9497 4.75877 16.8081 4.12858 16.5336C3.49839 16.2592 2.93155 15.8577 2.46347 15.3544C1.99539 14.851 1.63613 14.2566 1.40812 13.6081C1.1801 12.9597 1.08824 12.2712 1.13826 11.5856C1.18828 10.9001 1.37911 10.2322 1.69884 9.62376C2.01856 9.01528 2.46031 8.47926 2.9965 8.04918C3.53269 7.6191 4.15179 7.30419 4.81515 7.12412C5.47851 6.94405 6.17187 6.90269 6.85193 7.00263C7.54443 5.61759 8.68423 4.5069 10.0867 3.85046C11.4892 3.19402 13.0722 3.03028 14.5794 3.38575C16.0865 3.74123 17.4295 4.5951 18.3909 5.80907C19.3522 7.02304 19.8756 8.52599 19.8761 10.0745Z"
                          fill="#7E869E"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 text-sm">More</button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link href={`/dashboard/inventory/[edit]?id=${car.id}`} className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.7305 8.34564C12.7561 9.94898 14.1273 11.3113 15.7491 12.3271L8.85941 19.2177C8.43435 19.6428 8.22109 19.8553 7.96 19.9951C7.69905 20.1346 7.4044 20.1937 6.81547 20.3115L3.73832 20.9267C3.40571 20.9932 3.23918 21.0262 3.14457 20.9316C3.05028 20.837 3.08304 20.6709 3.14945 20.3388L3.76566 17.2617C3.88355 16.6722 3.94233 16.3772 4.08207 16.1161C4.2218 15.8551 4.43442 15.6427 4.85941 15.2177L11.7305 8.34564ZM16.1143 4.11029C16.6738 3.83302 17.3311 3.83304 17.8907 4.11029C18.1848 4.25602 18.4577 4.52891 19.003 5.07416C19.548 5.61918 19.8211 5.89147 19.9668 6.18548C20.2441 6.74496 20.244 7.40235 19.9668 7.96185C19.8211 8.25594 19.5482 8.52891 19.003 9.07416L17.2061 10.8701C15.5335 9.91871 14.1483 8.54232 13.1846 6.89154L15.003 5.07416C15.548 4.52912 15.8203 4.25607 16.1143 4.11029Z"
                        fill="#606060"
                        fillOpacity="0.66"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">Edit</span>
                  </Link>
                  <Link href={`/dashboard/inventory/sell?id=${car.id}`}
                    className="px-4 py-2 flex items-center rounded-md text-sm font-medium transition-colors"
                    style={{ backgroundColor: "#FFE135", color: "#000" }}
                  >
                    Sell / Remove
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExistingInventory