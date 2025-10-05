"use client"
import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowDown } from 'react-icons/md';
import car from "@/assets/vendor/car.png"
interface Vehicle {
  id: string;
  vehicle: string;
  dateSold: string;
  onMarket: number;
  price: string;
  mileage: number;
  customer: string;
  salesperson: string;
  sold: boolean;
}

export default function SoldInventory() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 9;

  // Generate 50 dummy vehicle objects
  const [vehicleData, setVehicleData] = useState<Vehicle[]>(() => [
    { id: '#434232', vehicle: '2020 Honda Civic LX', dateSold: '6 April 2023', onMarket: 10, price: '$9,990', mileage: 100, customer: 'Jay Ferrel', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434233', vehicle: '2021 Toyota Camry SE', dateSold: '15 March 2023', onMarket: 25, price: '$12,500', mileage: 85, customer: 'Sarah Johnson', salesperson: 'Joe Root', sold: true },
    { id: '#434234', vehicle: '2019 Ford F-150 XLT', dateSold: '22 May 2023', onMarket: 5, price: '$18,990', mileage: 120, customer: 'Mike Davis', salesperson: 'Kvaratskhelia', sold: false },
    { id: '#434235', vehicle: '2020 Chevrolet Silverado', dateSold: '10 June 2023', onMarket: 15, price: '$21,450', mileage: 95, customer: 'Emily Brown', salesperson: 'Joe Root', sold: true },
    { id: '#434236', vehicle: '2022 Mazda CX-5', dateSold: '8 April 2023', onMarket: 12, price: '$15,780', mileage: 60, customer: 'David Wilson', salesperson: 'Kvaratskhelia', sold: true },
    { id: '#434237', vehicle: '2018 Nissan Altima SV', dateSold: '30 January 2023', onMarket: 45, price: '$8,990', mileage: 140, customer: 'Lisa Anderson', salesperson: 'Jay Ferrel', sold: true },
    { id: '#434238', vehicle: '2021 Kia Sportage LX', dateSold: '19 February 2023', onMarket: 32, price: '$13,900', mileage: 75, customer: 'Robert Taylor', salesperson: 'Joe Root', sold: false },
    { id: '#434239', vehicle: '2020 Honda Accord EX', dateSold: '14 March 2023', onMarket: 28, price: '$14,500', mileage: 88, customer: 'Jennifer Martinez', salesperson: 'Kvaratskhelia', sold: false },
    { id: '#434240', vehicle: '2019 Toyota RAV4 LE', dateSold: '5 May 2023', onMarket: 18, price: '$16,200', mileage: 102, customer: 'Chris Thompson', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434241', vehicle: '2021 Ford Escape SE', dateSold: '27 April 2023', onMarket: 22, price: '$17,890', mileage: 70, customer: 'Amanda White', salesperson: 'Joe Root', sold: true },
    { id: '#434242', vehicle: '2020 Chevrolet Malibu', dateSold: '11 June 2023', onMarket: 8, price: '$11,750', mileage: 92, customer: 'Daniel Harris', salesperson: 'Kvaratskhelia', sold: true },
    { id: '#434243', vehicle: '2019 Mazda3 Sedan', dateSold: '3 February 2023', onMarket: 38, price: '$9,450', mileage: 125, customer: 'Michelle Clark', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434244', vehicle: '2022 Nissan Rogue SV', dateSold: '16 May 2023', onMarket: 14, price: '$19,990', mileage: 55, customer: 'Kevin Lewis', salesperson: 'Joe Root', sold: true },
    { id: '#434245', vehicle: '2018 Kia Forte LX', dateSold: '29 January 2023', onMarket: 48, price: '$7,890', mileage: 155, customer: 'Laura Walker', salesperson: 'Kvaratskhelia', sold: false },
    { id: '#434246', vehicle: '2020 Honda CR-V EX', dateSold: '12 April 2023', onMarket: 20, price: '$16,990', mileage: 85, customer: 'James Hall', salesperson: 'Jay Ferrel', sold: true },
    { id: '#434247', vehicle: '2021 Toyota Corolla LE', dateSold: '7 March 2023', onMarket: 26, price: '$10,900', mileage: 78, customer: 'Patricia Allen', salesperson: 'Joe Root', sold: false },
    { id: '#434248', vehicle: '2019 Ford Explorer XLT', dateSold: '24 May 2023', onMarket: 11, price: '$20,500', mileage: 115, customer: 'Mark Young', salesperson: 'Kvaratskhelia', sold: true },
    { id: '#434249', vehicle: '2020 Chevrolet Equinox LT', dateSold: '18 June 2023', onMarket: 6, price: '$14,200', mileage: 90, customer: 'Nancy King', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434250', vehicle: '2022 Mazda CX-30', dateSold: '9 April 2023', onMarket: 16, price: '$17,450', mileage: 50, customer: 'Steven Wright', salesperson: 'Joe Root', sold: true },
    { id: '#434251', vehicle: '2018 Nissan Sentra SV', dateSold: '2 February 2023', onMarket: 42, price: '$7,990', mileage: 148, customer: 'Karen Lopez', salesperson: 'Kvaratskhelia', sold: false },
    { id: '#434252', vehicle: '2021 Kia Seltos EX', dateSold: '21 May 2023', onMarket: 13, price: '$15,900', mileage: 68, customer: 'Paul Hill', salesperson: 'Jay Ferrel', sold: true },
    { id: '#434253', vehicle: '2020 Honda Pilot EX-L', dateSold: '13 March 2023', onMarket: 24, price: '$22,990', mileage: 95, customer: 'Betty Scott', salesperson: 'Joe Root', sold: false },
    { id: '#434254', vehicle: '2019 Toyota Highlander LE', dateSold: '6 June 2023', onMarket: 9, price: '$19,750', mileage: 108, customer: 'Gary Green', salesperson: 'Kvaratskhelia', sold: true },
    { id: '#434255', vehicle: '2021 Ford Mustang GT', dateSold: '28 April 2023', onMarket: 21, price: '$25,990', mileage: 72, customer: 'Sandra Adams', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434256', vehicle: '2020 Chevrolet Traverse LT', dateSold: '10 February 2023', onMarket: 35, price: '$18,450', mileage: 100, customer: 'Donald Baker', salesperson: 'Joe Root', sold: true },
    { id: '#434257', vehicle: '2019 Mazda6 Touring', dateSold: '4 May 2023', onMarket: 19, price: '$11,990', mileage: 118, customer: 'Carol Nelson', salesperson: 'Kvaratskhelia', sold: false },
    { id: '#434258', vehicle: '2022 Nissan Kicks SR', dateSold: '17 June 2023', onMarket: 7, price: '$13,750', mileage: 48, customer: 'Edward Carter', salesperson: 'Jay Ferrel', sold: true },
    { id: '#434259', vehicle: '2018 Kia Soul LX', dateSold: '31 January 2023', onMarket: 46, price: '$6,990', mileage: 162, customer: 'Dorothy Mitchell', salesperson: 'Joe Root', sold: false },
    { id: '#434260', vehicle: '2020 Honda Fit EX', dateSold: '14 April 2023', onMarket: 23, price: '$9,750', mileage: 82, customer: 'Jason Perez', salesperson: 'Kvaratskhelia', sold: true },
    { id: '#434261', vehicle: '2021 Toyota Tacoma SR5', dateSold: '8 March 2023', onMarket: 27, price: '$23,900', mileage: 76, customer: 'Helen Roberts', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434262', vehicle: '2019 Ford Fusion SE', dateSold: '25 May 2023', onMarket: 12, price: '$10,500', mileage: 122, customer: 'Brian Turner', salesperson: 'Joe Root', sold: true },
    { id: '#434263', vehicle: '2020 Chevrolet Camaro LT', dateSold: '19 June 2023', onMarket: 5, price: '$21,750', mileage: 88, customer: 'Ruth Phillips', salesperson: 'Kvaratskhelia', sold: false },
    { id: '#434264', vehicle: '2022 Mazda MX-5 Miata', dateSold: '11 April 2023', onMarket: 17, price: '$19,990', mileage: 52, customer: 'Jeffrey Campbell', salesperson: 'Jay Ferrel', sold: true },
    { id: '#434265', vehicle: '2018 Nissan Murano SV', dateSold: '3 February 2023', onMarket: 40, price: '$12,990', mileage: 135, customer: 'Sharon Parker', salesperson: 'Joe Root', sold: false },
    { id: '#434266', vehicle: '2021 Kia Telluride EX', dateSold: '22 May 2023', onMarket: 14, price: '$26,900', mileage: 65, customer: 'Ryan Evans', salesperson: 'Kvaratskhelia', sold: true },
    { id: '#434267', vehicle: '2020 Honda Odyssey EX', dateSold: '15 March 2023', onMarket: 25, price: '$20,450', mileage: 92, customer: 'Deborah Edwards', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434268', vehicle: '2019 Toyota Sienna LE', dateSold: '7 June 2023', onMarket: 10, price: '$17,990', mileage: 110, customer: 'Nicholas Collins', salesperson: 'Joe Root', sold: true },
    { id: '#434269', vehicle: '2021 Ford Ranger XLT', dateSold: '29 April 2023', onMarket: 22, price: '$19,750', mileage: 74, customer: 'Melissa Stewart', salesperson: 'Kvaratskhelia', sold: false },
    { id: '#434270', vehicle: '2020 Chevrolet Suburban LT', dateSold: '12 February 2023', onMarket: 36, price: '$28,990', mileage: 98, customer: 'Gregory Sanchez', salesperson: 'Jay Ferrel', sold: true },
    { id: '#434271', vehicle: '2019 Mazda CX-9 Touring', dateSold: '5 May 2023', onMarket: 20, price: '$16,750', mileage: 120, customer: 'Stephanie Morris', salesperson: 'Joe Root', sold: false },
    { id: '#434272', vehicle: '2022 Nissan Pathfinder SV', dateSold: '18 June 2023', onMarket: 8, price: '$24,900', mileage: 46, customer: 'Andrew Rogers', salesperson: 'Kvaratskhelia', sold: true },
    { id: '#434273', vehicle: '2018 Kia Optima LX', dateSold: '1 February 2023', onMarket: 44, price: '$8,450', mileage: 158, customer: 'Rebecca Reed', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434274', vehicle: '2020 Honda Insight EX', dateSold: '16 April 2023', onMarket: 24, price: '$11,990', mileage: 80, customer: 'Anthony Cook', salesperson: 'Joe Root', sold: true },
    { id: '#434275', vehicle: '2021 Toyota Venza LE', dateSold: '9 March 2023', onMarket: 28, price: '$18,750', mileage: 70, customer: 'Cynthia Morgan', salesperson: 'Kvaratskhelia', sold: false },
    { id: '#434276', vehicle: '2019 Ford Edge SEL', dateSold: '26 May 2023', onMarket: 13, price: '$14,900', mileage: 125, customer: 'Joshua Bell', salesperson: 'Jay Ferrel', sold: true },
    { id: '#434277', vehicle: '2020 Chevrolet Blazer RS', dateSold: '20 June 2023', onMarket: 6, price: '$19,450', mileage: 86, customer: 'Kathleen Murphy', salesperson: 'Joe Root', sold: false },
    { id: '#434278', vehicle: '2022 Mazda CX-50', dateSold: '12 April 2023', onMarket: 18, price: '$21,990', mileage: 54, customer: 'Matthew Bailey', salesperson: 'Kvaratskhelia', sold: true },
    { id: '#434279', vehicle: '2018 Nissan Maxima SV', dateSold: '4 February 2023', onMarket: 41, price: '$10,750', mileage: 142, customer: 'Barbara Rivera', salesperson: 'Jay Ferrel', sold: false },
    { id: '#434280', vehicle: '2021 Kia K5 GT-Line', dateSold: '23 May 2023', onMarket: 15, price: '$16,900', mileage: 67, customer: 'Joshua Cooper', salesperson: 'Joe Root', sold: true },
    { id: '#434281', vehicle: '2020 Honda Ridgeline RTL', dateSold: '17 March 2023', onMarket: 26, price: '$24,750', mileage: 94, customer: 'Virginia Richardson', salesperson: 'Kvaratskhelia', sold: false }
  ]);

  const totalPages: number = Math.ceil(vehicleData.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentVehicles: Vehicle[] = vehicleData.slice(startIndex, endIndex);

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  const toggleSoldStatus = (index: number): void => {
    const actualIndex = startIndex + index;
    const newVehicleData = [...vehicleData];
    newVehicleData[actualIndex].sold = !newVehicleData[actualIndex].sold;
    setVehicleData(newVehicleData);
  };

  return (
    <div className="min-h-screen p-2 sm:p-4 overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-8 px-2 sm:px-5">
        <div
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 text-lg sm:text-[28px] font-semibold cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft size={24} className="sm:w-[35px] sm:h-[35px]" />
          <span className="hidden sm:inline">Sold Inventory</span>
          <span className="sm:hidden text-base">Inventory</span>
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

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 mx-2 sm:mx-5 mb-4 sm:mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3 sm:gap-4">
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

          {/* Date Sold */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Date Sold</label>
            <input 
              type="date" 
              className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
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

          {/* Sales Person */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Sales Person</label>
            <div className="relative">
              <select className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                <option>All</option>
                <option>Joe Root</option>
                <option>Kvaratskhelia</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* Display as sold */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Display as sold</label>
            <div className="relative">
              <select className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none">
                <option>All</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>
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
            <table className="w-full  min-w-[1000px]">
              <thead className=" border-b h-20 border-gray-200">
                <tr>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Product ID</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Vehicle</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Date Sold</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">On Market</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Price</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Mileage</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Customer</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Salesperson</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Display as Sold</th>
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
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.dateSold}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.onMarket}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.price}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.mileage}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.customer}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{vehicle.salesperson}</td>
                    <td className="px-3 sm:px-4 py-3">
                      <div className="flex justify-center">
                        <div 
                          onClick={() => toggleSoldStatus(index)}
                          className={`w-4 h-4 rounded-full cursor-pointer transition-colors ${vehicle.sold ? 'bg-[#FFE135]' : 'border-2 border-gray-300 hover:border-gray-400'}`}
                        ></div>
                      </div>
                    </td>
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
                        ? 'bg-[#FFE135]  font-medium'
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
  );
}