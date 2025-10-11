"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { IoSearch } from "react-icons/io5"
import car from "@/assets/vendor/car.png"

interface Lead {
  id: number;
  added: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  type: string;
  vehicle: string;
  assignedTo: string;
}

const LeadsInfo = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All Type Lead');
  const itemsPerPage: number = 6;

  const [leadsData] = useState<Lead[]>([
    { id: 1, added: '5/3/2025', name: 'Jean Vednal Delouis', email: 'vednaltok@gmail.com', phone: '7177122859', address: '22 drifwood buildi ... Middletown, PA 17 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Honda Civic LX', assignedTo: 'Unassigned - Edit' },
    { id: 2, added: '5/3/2025', name: 'Jean Vednal Delouis', email: 'vednaltok@gmail.com', phone: '7177122859', address: '22 drifwood buildi ... Middletown, PA 17 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Honda Civic LX', assignedTo: 'Jay Ferrel' },
    { id: 3, added: '5/3/2025', name: 'Jean Vednal Delouis', email: 'vednaltok@gmail.com', phone: '7177122859', address: '22 drifwood buildi ... Middletown, PA 17 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Honda Civic LX', assignedTo: 'Unassigned - Edit' },
    { id: 4, added: '5/3/2025', name: 'Jean Vednal Delouis', email: 'vednaltok@gmail.com', phone: '7177122859', address: '22 drifwood buildi ... Middletown, PA 17 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Honda Civic LX', assignedTo: 'Unassigned - Edit' },
    { id: 5, added: '5/3/2025', name: 'Jean Vednal Delouis', email: 'vednaltok@gmail.com', phone: '7177122859', address: '22 drifwood buildi ... Middletown, PA 17 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Honda Civic LX', assignedTo: 'Jay Ferrel' },
    { id: 6, added: '5/3/2025', name: 'Jean Vednal Delouis', email: 'vednaltok@gmail.com', phone: '7177122859', address: '22 drifwood buildi ... Middletown, PA 17 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Honda Civic LX', assignedTo: 'Unassigned - Edit' },
    { id: 7, added: '5/4/2025', name: 'Sarah Johnson', email: 'sarah.j@gmail.com', phone: '7177123456', address: '45 Oak Street ... Harrisburg, PA 17 ...', status: 'Active', type: 'Hot Lead', vehicle: '2021 Toyota Camry SE', assignedTo: 'Joe Root' },
    { id: 8, added: '5/4/2025', name: 'Michael Brown', email: 'mbrown@yahoo.com', phone: '7177124567', address: '78 Pine Avenue ... Lancaster, PA 17 ...', status: 'New', type: 'Warm Lead', vehicle: '2019 Ford F-150 XLT', assignedTo: 'Kvaratskhelia' },
    { id: 9, added: '5/5/2025', name: 'Emily Davis', email: 'emily.davis@outlook.com', phone: '7177125678', address: '12 Maple Drive ... York, PA 17 ...', status: 'Pending', type: 'Vehicle Inquiry', vehicle: '2022 Mazda CX-5', assignedTo: 'Jay Ferrel' },
    { id: 10, added: '5/5/2025', name: 'David Wilson', email: 'dwilson@gmail.com', phone: '7177126789', address: '33 Elm Street ... Reading, PA 19 ...', status: 'New', type: 'Cold Lead', vehicle: '2020 Chevrolet Silverado', assignedTo: 'Unassigned - Edit' },
    { id: 11, added: '5/6/2025', name: 'Lisa Anderson', email: 'lisa.a@hotmail.com', phone: '7177127890', address: '56 Birch Road ... Allentown, PA 18 ...', status: 'Active', type: 'Hot Lead', vehicle: '2018 Nissan Altima SV', assignedTo: 'Joe Root' },
    { id: 12, added: '5/6/2025', name: 'Robert Taylor', email: 'rtaylor@gmail.com', phone: '7177128901', address: '89 Cedar Lane ... Scranton, PA 18 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2021 Kia Sportage LX', assignedTo: 'Kvaratskhelia' },
    { id: 13, added: '5/7/2025', name: 'Jennifer Martinez', email: 'jmartinez@yahoo.com', phone: '7177129012', address: '101 Willow Court ... Erie, PA 16 ...', status: 'Pending', type: 'Warm Lead', vehicle: '2020 Honda Accord EX', assignedTo: 'Jay Ferrel' },
    { id: 14, added: '5/7/2025', name: 'Chris Thompson', email: 'cthompson@outlook.com', phone: '7177130123', address: '234 Spruce Street ... Bethlehem, PA 18 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2019 Toyota RAV4 LE', assignedTo: 'Unassigned - Edit' },
    { id: 15, added: '5/8/2025', name: 'Amanda White', email: 'awhite@gmail.com', phone: '7177131234', address: '567 Walnut Avenue ... Altoona, PA 16 ...', status: 'Active', type: 'Hot Lead', vehicle: '2021 Ford Escape SE', assignedTo: 'Joe Root' },
    { id: 16, added: '5/8/2025', name: 'Daniel Harris', email: 'dharris@hotmail.com', phone: '7177132345', address: '890 Chestnut Drive ... Williamsport, PA 17 ...', status: 'New', type: 'Cold Lead', vehicle: '2020 Chevrolet Malibu', assignedTo: 'Kvaratskhelia' },
    { id: 17, added: '5/9/2025', name: 'Michelle Clark', email: 'mclark@yahoo.com', phone: '7177133456', address: '123 Hickory Road ... Chambersburg, PA 17 ...', status: 'Pending', type: 'Vehicle Inquiry', vehicle: '2019 Mazda3 Sedan', assignedTo: 'Jay Ferrel' },
    { id: 18, added: '5/9/2025', name: 'Kevin Lewis', email: 'klewis@gmail.com', phone: '7177134567', address: '456 Sycamore Lane ... New Castle, PA 16 ...', status: 'New', type: 'Warm Lead', vehicle: '2022 Nissan Rogue SV', assignedTo: 'Unassigned - Edit' },
    { id: 19, added: '5/10/2025', name: 'Laura Walker', email: 'lwalker@outlook.com', phone: '7177135678', address: '789 Ash Court ... Johnstown, PA 15 ...', status: 'Active', type: 'Hot Lead', vehicle: '2018 Kia Forte LX', assignedTo: 'Joe Root' },
    { id: 20, added: '5/10/2025', name: 'James Hall', email: 'jhall@hotmail.com', phone: '7177136789', address: '1011 Poplar Street ... Pottsville, PA 17 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Honda CR-V EX', assignedTo: 'Kvaratskhelia' },
    { id: 21, added: '5/11/2025', name: 'Patricia Allen', email: 'pallen@gmail.com', phone: '7177137890', address: '1213 Magnolia Avenue ... Lebanon, PA 17 ...', status: 'Pending', type: 'Cold Lead', vehicle: '2021 Toyota Corolla LE', assignedTo: 'Jay Ferrel' },
    { id: 22, added: '5/11/2025', name: 'Mark Young', email: 'myoung@yahoo.com', phone: '7177138901', address: '1415 Dogwood Drive ... Hazleton, PA 18 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2019 Ford Explorer XLT', assignedTo: 'Unassigned - Edit' },
    { id: 23, added: '5/12/2025', name: 'Nancy King', email: 'nking@outlook.com', phone: '7177139012', address: '1617 Redwood Road ... Bloomsburg, PA 17 ...', status: 'Active', type: 'Hot Lead', vehicle: '2020 Chevrolet Equinox LT', assignedTo: 'Joe Root' },
    { id: 24, added: '5/12/2025', name: 'Steven Wright', email: 'swright@gmail.com', phone: '7177140123', address: '1819 Cypress Lane ... Pottstown, PA 19 ...', status: 'New', type: 'Warm Lead', vehicle: '2022 Mazda CX-30', assignedTo: 'Kvaratskhelia' },
    { id: 25, added: '5/13/2025', name: 'Karen Lopez', email: 'klopez@hotmail.com', phone: '7177141234', address: '2021 Sequoia Court ... Norristown, PA 19 ...', status: 'Pending', type: 'Vehicle Inquiry', vehicle: '2018 Nissan Sentra SV', assignedTo: 'Jay Ferrel' },
    { id: 26, added: '5/13/2025', name: 'Paul Hill', email: 'phill@yahoo.com', phone: '7177142345', address: '2223 Fir Street ... Chester, PA 19 ...', status: 'New', type: 'Cold Lead', vehicle: '2021 Kia Seltos EX', assignedTo: 'Unassigned - Edit' },
    { id: 27, added: '5/14/2025', name: 'Betty Scott', email: 'bscott@gmail.com', phone: '7177143456', address: '2425 Palm Avenue ... West Chester, PA 19 ...', status: 'Active', type: 'Hot Lead', vehicle: '2020 Honda Pilot EX-L', assignedTo: 'Joe Root' },
    { id: 28, added: '5/14/2025', name: 'Gary Green', email: 'ggreen@outlook.com', phone: '7177144567', address: '2627 Laurel Drive ... Coatesville, PA 19 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2019 Toyota Highlander LE', assignedTo: 'Kvaratskhelia' },
    { id: 29, added: '5/15/2025', name: 'Sandra Adams', email: 'sadams@hotmail.com', phone: '7177145678', address: '2829 Juniper Road ... Phoenixville, PA 19 ...', status: 'Pending', type: 'Warm Lead', vehicle: '2021 Ford Mustang GT', assignedTo: 'Jay Ferrel' },
    { id: 30, added: '5/15/2025', name: 'Donald Baker', email: 'dbaker@gmail.com', phone: '7177146789', address: '3031 Beech Lane ... Kennett Square, PA 19 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Chevrolet Traverse LT', assignedTo: 'Unassigned - Edit' },
    { id: 31, added: '5/16/2025', name: 'Carol Nelson', email: 'cnelson@yahoo.com', phone: '7177147890', address: '3233 Hawthorn Court ... Oxford, PA 19 ...', status: 'Active', type: 'Hot Lead', vehicle: '2019 Mazda6 Touring', assignedTo: 'Joe Root' },
    { id: 32, added: '5/16/2025', name: 'Edward Carter', email: 'ecarter@outlook.com', phone: '7177148901', address: '3435 Alder Street ... Downingtown, PA 19 ...', status: 'New', type: 'Cold Lead', vehicle: '2022 Nissan Kicks SR', assignedTo: 'Kvaratskhelia' },
    { id: 33, added: '5/17/2025', name: 'Dorothy Mitchell', email: 'dmitchell@gmail.com', phone: '7177149012', address: '3637 Hemlock Avenue ... Exton, PA 19 ...', status: 'Pending', type: 'Vehicle Inquiry', vehicle: '2018 Kia Soul LX', assignedTo: 'Jay Ferrel' },
    { id: 34, added: '5/17/2025', name: 'Jason Perez', email: 'jperez@hotmail.com', phone: '7177150123', address: '3839 Willow Drive ... Media, PA 19 ...', status: 'New', type: 'Warm Lead', vehicle: '2020 Honda Fit EX', assignedTo: 'Unassigned - Edit' },
    { id: 35, added: '5/18/2025', name: 'Helen Roberts', email: 'hroberts@yahoo.com', phone: '7177151234', address: '4041 Cottonwood Road ... Swarthmore, PA 19 ...', status: 'Active', type: 'Hot Lead', vehicle: '2021 Toyota Tacoma SR5', assignedTo: 'Joe Root' },
    { id: 36, added: '5/18/2025', name: 'Brian Turner', email: 'bturner@gmail.com', phone: '7177152345', address: '4243 Basswood Lane ... Springfield, PA 19 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2019 Ford Fusion SE', assignedTo: 'Kvaratskhelia' },
    { id: 37, added: '5/19/2025', name: 'Ruth Phillips', email: 'rphillips@outlook.com', phone: '7177153456', address: '4445 Boxwood Court ... Drexel Hill, PA 19 ...', status: 'Pending', type: 'Cold Lead', vehicle: '2020 Chevrolet Camaro LT', assignedTo: 'Jay Ferrel' },
    { id: 38, added: '5/19/2025', name: 'Jeffrey Campbell', email: 'jcampbell@hotmail.com', phone: '7177154567', address: '4647 Ironwood Street ... Havertown, PA 19 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2022 Mazda MX-5 Miata', assignedTo: 'Unassigned - Edit' },
    { id: 39, added: '5/20/2025', name: 'Sharon Parker', email: 'sparker@gmail.com', phone: '7177155678', address: '4849 Rosewood Avenue ... Broomall, PA 19 ...', status: 'Active', type: 'Warm Lead', vehicle: '2018 Nissan Murano SV', assignedTo: 'Joe Root' },
    { id: 40, added: '5/20/2025', name: 'Ryan Evans', email: 'revans@yahoo.com', phone: '7177156789', address: '5051 Sandalwood Drive ... Newtown Square, PA 19 ...', status: 'New', type: 'Hot Lead', vehicle: '2021 Kia Telluride EX', assignedTo: 'Kvaratskhelia' },
    { id: 41, added: '5/21/2025', name: 'Deborah Edwards', email: 'dedwards@outlook.com', phone: '7177157890', address: '5253 Mahogany Road ... Villanova, PA 19 ...', status: 'Pending', type: 'Vehicle Inquiry', vehicle: '2020 Honda Odyssey EX', assignedTo: 'Jay Ferrel' },
    { id: 42, added: '5/21/2025', name: 'Nicholas Collins', email: 'ncollins@gmail.com', phone: '7177158901', address: '5455 Teak Lane ... Radnor, PA 19 ...', status: 'New', type: 'Cold Lead', vehicle: '2019 Toyota Sienna LE', assignedTo: 'Unassigned - Edit' },
    { id: 43, added: '5/22/2025', name: 'Melissa Stewart', email: 'mstewart@hotmail.com', phone: '7177159012', address: '5657 Ebony Court ... Wayne, PA 19 ...', status: 'Active', type: 'Hot Lead', vehicle: '2021 Ford Ranger XLT', assignedTo: 'Joe Root' },
    { id: 44, added: '5/22/2025', name: 'Gregory Sanchez', email: 'gsanchez@yahoo.com', phone: '7177160123', address: '5859 Cherry Street ... Berwyn, PA 19 ...', status: 'New', type: 'Warm Lead', vehicle: '2020 Chevrolet Suburban LT', assignedTo: 'Kvaratskhelia' },
    { id: 45, added: '5/23/2025', name: 'Stephanie Morris', email: 'smorris@gmail.com', phone: '7177161234', address: '6061 Pecan Avenue ... Paoli, PA 19 ...', status: 'Pending', type: 'Vehicle Inquiry', vehicle: '2019 Mazda CX-9 Touring', assignedTo: 'Jay Ferrel' },
    { id: 46, added: '5/23/2025', name: 'Andrew Rogers', email: 'arogers@outlook.com', phone: '7177162345', address: '6263 Walnut Drive ... Malvern, PA 19 ...', status: 'New', type: 'Cold Lead', vehicle: '2022 Nissan Pathfinder SV', assignedTo: 'Unassigned - Edit' },
    { id: 47, added: '5/24/2025', name: 'Rebecca Reed', email: 'rreed@hotmail.com', phone: '7177163456', address: '6465 Hickory Road ... Devon, PA 19 ...', status: 'Active', type: 'Hot Lead', vehicle: '2018 Kia Optima LX', assignedTo: 'Joe Root' },
    { id: 48, added: '5/24/2025', name: 'Anthony Cook', email: 'acook@gmail.com', phone: '7177164567', address: '6667 Maple Lane ... Frazer, PA 19 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2020 Honda Insight EX', assignedTo: 'Kvaratskhelia' },
    { id: 49, added: '5/25/2025', name: 'Cynthia Morgan', email: 'cmorgan@yahoo.com', phone: '7177165678', address: '6869 Oak Court ... Exton, PA 19 ...', status: 'Pending', type: 'Warm Lead', vehicle: '2021 Toyota Venza LE', assignedTo: 'Jay Ferrel' },
    { id: 50, added: '5/25/2025', name: 'Joshua Bell', email: 'jbell@outlook.com', phone: '7177166789', address: '7071 Pine Street ... West Chester, PA 19 ...', status: 'New', type: 'Vehicle Inquiry', vehicle: '2019 Ford Edge SEL', assignedTo: 'Unassigned - Edit' }
  ]);

  const totalPages: number = Math.ceil(leadsData.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentLeads: Lead[] = leadsData.slice(startIndex, endIndex);

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-xl sm:text-2xl font-semibold cursor-pointer text-gray-900"
        >
          <MdOutlineKeyboardArrowLeft size={28} className="sm:w-[32px] sm:h-[32px]" />
          <span>Leads</span>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white mx-4 sm:mx-6 mt-6 rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sort By - Search */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Sort By:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Contact By Email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent text-sm"
              />
              <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent text-sm appearance-none cursor-pointer bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1.5em 1.5em',
              }}
            >
              <option value="All">All</option>
              <option value="New">New</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent text-sm appearance-none cursor-pointer bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1.5em 1.5em',
              }}
            >
              <option value="All Type Lead">All Type Lead</option>
              <option value="Hot Lead">Hot Lead</option>
              <option value="Warm Lead">Warm Lead</option>
              <option value="Cold Lead">Cold Lead</option>
              <option value="Vehicle Inquiry">Vehicle Inquiry</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="px-4 sm:px-6 mt-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col min-h-[600px]">
          <div 
            className="overflow-x-auto flex-grow scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100" 
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin' as const,
              scrollbarColor: '#9CA3AF #F3F4F6'
            }}
          >
            <table className="w-full min-w-[1400px]">
              <thead className=" border-b h-16 border-gray-200">
                <tr>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Added</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Name</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Email</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Phone Number</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Address</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Status</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Type</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Vehicle Interested In</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">Assigned To</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentLeads.map((lead: Lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-700">{lead.added}</td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-700">{lead.name}</td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-700">{lead.email}</td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-700">{lead.phone}</td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-700">{lead.address}</td>
                    <td className="px-3 sm:px-4 py-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full text-[#FFE135]">
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-700">{lead.type}</td>
                    <td className="px-3 sm:px-4 py-4">
                      <div className="flex items-center gap-2">
                        <img 
                          src={car.src} 
                          alt="Vehicle" 
                          className="w-8 h-8 sm:w-10 sm:h-8 object-cover rounded"
                        />
                        <span className="text-xs sm:text-sm text-gray-700">{lead.vehicle}</span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm">
                      <span className={lead.assignedTo.includes('Unassigned') ? 'text-[#FFE135]' : 'text-gray-700'}>
                        {lead.assignedTo}
                      </span>
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
              <select className='border px-4 rounded-md py-1'>
                <option value={6}>{itemsPerPage}</option>
              </select>
              <span>of {leadsData.length}</span>
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
              
              {[...Array(Math.min(5, totalPages))].map((_, index: number) => {
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

export default LeadsInfo