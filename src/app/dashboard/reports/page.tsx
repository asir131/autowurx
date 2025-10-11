"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md"
import car from "@/assets/vendor/car.png"

interface StatCardProps {
  value: string | number
  label: string
}

interface Vehicle {
  id: string;
  vehicle: string;
  added: string;
  onMarket: number;
  price: string;
  leads: number;
  views: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="rounded-lg border border-[#B1B1B1] bg-white p-6 shadow-sm">
      <div className="text-center">
        <div className="text-3xl font-semibold text-gray-900">
          {value}
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {label}
        </div>
      </div>
    </div>
  )
}

const Page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 9;
  
  const [vehicleData] = useState<Vehicle[]>([
    { id: '#434232', vehicle: '2020 Honda Civic LX', added: '6 April 2023', onMarket: 10, price: '$9,990', leads: 100, views: 100 },
    { id: '#434233', vehicle: '2021 Toyota Camry SE', added: '15 March 2023', onMarket: 25, price: '$12,500', leads: 85, views: 120 },
    { id: '#434234', vehicle: '2019 Ford F-150 XLT', added: '22 May 2023', onMarket: 5, price: '$18,990', leads: 150, views: 200 },
    { id: '#434235', vehicle: '2020 Chevrolet Silverado', added: '10 June 2023', onMarket: 15, price: '$21,450', leads: 95, views: 180 },
    { id: '#434236', vehicle: '2022 Mazda CX-5', added: '8 April 2023', onMarket: 12, price: '$15,780', leads: 110, views: 145 },
    { id: '#434237', vehicle: '2018 Nissan Altima SV', added: '30 January 2023', onMarket: 45, price: '$8,990', leads: 75, views: 90 },
    { id: '#434238', vehicle: '2021 Kia Sportage LX', added: '19 February 2023', onMarket: 32, price: '$13,900', leads: 88, views: 115 },
    { id: '#434239', vehicle: '2020 Honda Accord EX', added: '14 March 2023', onMarket: 28, price: '$14,500', leads: 92, views: 130 },
    { id: '#434240', vehicle: '2019 Toyota RAV4 LE', added: '5 May 2023', onMarket: 18, price: '$16,200', leads: 105, views: 160 },
    { id: '#434241', vehicle: '2021 Ford Escape SE', added: '27 April 2023', onMarket: 22, price: '$17,890', leads: 98, views: 140 },
    { id: '#434242', vehicle: '2020 Chevrolet Malibu', added: '11 June 2023', onMarket: 8, price: '$11,750', leads: 80, views: 95 },
    { id: '#434243', vehicle: '2019 Mazda3 Sedan', added: '3 February 2023', onMarket: 38, price: '$9,450', leads: 70, views: 85 },
    { id: '#434244', vehicle: '2022 Nissan Rogue SV', added: '16 May 2023', onMarket: 14, price: '$19,990', leads: 125, views: 175 },
    { id: '#434245', vehicle: '2018 Kia Forte LX', added: '29 January 2023', onMarket: 48, price: '$7,890', leads: 65, views: 78 },
    { id: '#434246', vehicle: '2020 Honda CR-V EX', added: '12 April 2023', onMarket: 20, price: '$16,990', leads: 115, views: 155 },
    { id: '#434247', vehicle: '2021 Toyota Corolla LE', added: '7 March 2023', onMarket: 26, price: '$10,900', leads: 82, views: 105 },
    { id: '#434248', vehicle: '2019 Ford Explorer XLT', added: '24 May 2023', onMarket: 11, price: '$20,500', leads: 135, views: 190 },
    { id: '#434249', vehicle: '2020 Chevrolet Equinox LT', added: '18 June 2023', onMarket: 6, price: '$14,200', leads: 90, views: 125 },
    { id: '#434250', vehicle: '2022 Mazda CX-30', added: '9 April 2023', onMarket: 16, price: '$17,450', leads: 108, views: 150 },
    { id: '#434251', vehicle: '2018 Nissan Sentra SV', added: '2 February 2023', onMarket: 42, price: '$7,990', leads: 68, views: 80 },
    { id: '#434252', vehicle: '2021 Kia Seltos EX', added: '21 May 2023', onMarket: 13, price: '$15,900', leads: 102, views: 138 },
    { id: '#434253', vehicle: '2020 Honda Pilot EX-L', added: '13 March 2023', onMarket: 24, price: '$22,990', leads: 142, views: 195 },
    { id: '#434254', vehicle: '2019 Toyota Highlander LE', added: '6 June 2023', onMarket: 9, price: '$19,750', leads: 128, views: 170 },
    { id: '#434255', vehicle: '2021 Ford Mustang GT', added: '28 April 2023', onMarket: 21, price: '$25,990', leads: 165, views: 220 },
    { id: '#434256', vehicle: '2020 Chevrolet Traverse LT', added: '10 February 2023', onMarket: 35, price: '$18,450', leads: 95, views: 132 },
    { id: '#434257', vehicle: '2019 Mazda6 Touring', added: '4 May 2023', onMarket: 19, price: '$11,990', leads: 85, views: 110 },
    { id: '#434258', vehicle: '2022 Nissan Kicks SR', added: '17 June 2023', onMarket: 7, price: '$13,750', leads: 78, views: 98 },
    { id: '#434259', vehicle: '2018 Kia Soul LX', added: '31 January 2023', onMarket: 46, price: '$6,990', leads: 62, views: 75 },
    { id: '#434260', vehicle: '2020 Honda Fit EX', added: '14 April 2023', onMarket: 23, price: '$9,750', leads: 76, views: 92 },
    { id: '#434261', vehicle: '2021 Toyota Tacoma SR5', added: '8 March 2023', onMarket: 27, price: '$23,900', leads: 148, views: 205 },
    { id: '#434262', vehicle: '2019 Ford Fusion SE', added: '25 May 2023', onMarket: 12, price: '$10,500', leads: 88, views: 118 },
    { id: '#434263', vehicle: '2020 Chevrolet Camaro LT', added: '19 June 2023', onMarket: 5, price: '$21,750', leads: 155, views: 215 },
    { id: '#434264', vehicle: '2022 Mazda MX-5 Miata', added: '11 April 2023', onMarket: 17, price: '$19,990', leads: 138, views: 188 },
    { id: '#434265', vehicle: '2018 Nissan Murano SV', added: '3 February 2023', onMarket: 40, price: '$12,990', leads: 72, views: 88 },
    { id: '#434266', vehicle: '2021 Kia Telluride EX', added: '22 May 2023', onMarket: 14, price: '$26,900', leads: 172, views: 235 },
    { id: '#434267', vehicle: '2020 Honda Odyssey EX', added: '15 March 2023', onMarket: 25, price: '$20,450', leads: 118, views: 165 },
    { id: '#434268', vehicle: '2019 Toyota Sienna LE', added: '7 June 2023', onMarket: 10, price: '$17,990', leads: 105, views: 148 },
    { id: '#434269', vehicle: '2021 Ford Ranger XLT', added: '29 April 2023', onMarket: 22, price: '$19,750', leads: 132, views: 182 },
    { id: '#434270', vehicle: '2020 Chevrolet Suburban LT', added: '12 February 2023', onMarket: 36, price: '$28,990', leads: 185, views: 245 },
    { id: '#434271', vehicle: '2019 Mazda CX-9 Touring', added: '5 May 2023', onMarket: 20, price: '$16,750', leads: 112, views: 152 },
    { id: '#434272', vehicle: '2022 Nissan Pathfinder SV', added: '18 June 2023', onMarket: 8, price: '$24,900', leads: 168, views: 228 },
    { id: '#434273', vehicle: '2018 Kia Optima LX', added: '1 February 2023', onMarket: 44, price: '$8,450', leads: 66, views: 82 },
    { id: '#434274', vehicle: '2020 Honda Insight EX', added: '16 April 2023', onMarket: 24, price: '$11,990', leads: 84, views: 108 },
    { id: '#434275', vehicle: '2021 Toyota Venza LE', added: '9 March 2023', onMarket: 28, price: '$18,750', leads: 122, views: 168 },
    { id: '#434276', vehicle: '2019 Ford Edge SEL', added: '26 May 2023', onMarket: 13, price: '$14,900', leads: 96, views: 135 },
    { id: '#434277', vehicle: '2020 Chevrolet Blazer RS', added: '20 June 2023', onMarket: 6, price: '$19,450', leads: 128, views: 175 },
    { id: '#434278', vehicle: '2022 Mazda CX-50', added: '12 April 2023', onMarket: 18, price: '$21,990', leads: 145, views: 198 },
    { id: '#434279', vehicle: '2018 Nissan Maxima SV', added: '4 February 2023', onMarket: 41, price: '$10,750', leads: 74, views: 90 },
    { id: '#434280', vehicle: '2021 Kia K5 GT-Line', added: '23 May 2023', onMarket: 15, price: '$16,900', leads: 108, views: 145 },
    { id: '#434281', vehicle: '2020 Honda Ridgeline RTL', added: '17 March 2023', onMarket: 26, price: '$24,750', leads: 158, views: 212 }
  ]);

  const totalPages: number = Math.ceil(vehicleData.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentVehicles: Vehicle[] = vehicleData.slice(startIndex, endIndex);

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4 sm:mb-8 px-2 sm:px-5">
        <div
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 text-lg sm:text-[28px] font-semibold cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft size={24} className="sm:w-[35px] sm:h-[35px]" />
          <span className="hidden sm:inline">Inventory History</span>
          <span className="sm:hidden text-base">Inventory History</span>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="px-2 sm:px-5 mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="12" label="Avg. Days on Market" />
          <StatCard value="1000.00$" label="Price" />
          <StatCard value="149" label="Leads" />
          <StatCard value="149" label="Views" />
        </div>
      </div>

      {/* Vehicle Table */}
      <div className="px-2 sm:px-5">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col min-h-[600px]">
          <div 
            className="overflow-x-auto flex-grow scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100" 
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin' as const,
              scrollbarColor: '#9CA3AF #F3F4F6'
            }}
          >
            <table className="w-full min-w-[1000px]">
              <thead className="border-b h-20 border-gray-200">
                <tr>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Product ID</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Vehicle</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Added</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">On Market</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Price</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Leads</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Views</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentVehicles.map((vehicle: Vehicle, index: number) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.id}</td>
                    <td className="px-3 sm:px-4 py-3">
                      <div className="flex items-center gap-2">
                        <img 
                          src={car.src} 
                          alt="Vehicle" 
                          className="w-8 h-8 sm:w-12 sm:h-10 object-cover rounded"
                        />
                        <span className="text-xs sm:text-sm text-gray-700">{vehicle.vehicle}</span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.added}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.onMarket}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.price}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.leads}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer with pagination */}
          <div className="border-t h-20 mb-5 md:mb-0 border-gray-200 px-3 sm:px-4 py-3 md:flex flex-col sm:flex-row justify-between items-center gap-3 mt-auto">
            {/* Left side - Showing info */}
            <div className="flex mb-5 md:mb-0 items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span>Showing</span>
              <option className='border px-4 rounded-md py-1' value={9}>{currentVehicles.length}</option>
              <span>of {vehicleData.length}</span>
            </div>

            {/* Right side - Pagination */}
            <div className="flex items-center gap-1 sm:gap-1">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
              >
                &lt;
              </button>
              
              {[...Array(totalPages)].map((_, index: number) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${
                      currentPage === pageNum
                        ? 'bg-[#FFE135] font-medium'
                        : 'text-gray-600 bg-gray-100 hover:bg-yellow-300'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page