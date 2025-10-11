"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import car from "@/assets/vendor/car.png";

interface Invoice {
  id: number;
  dateSold: string;
  vehicle: string;
  amount: string;
  status: string;
  selected: boolean;
}

const Page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const itemsPerPage: number = 10;

  const [invoiceData, setInvoiceData] = useState<Invoice[]>([
    {
      id: 1,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 2,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 3,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 4,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 5,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 6,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 7,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 8,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 9,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 10,
      dateSold: "6 April 2023",
      vehicle: "2020 Honda Civic LX",
      amount: "$99.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 11,
      dateSold: "15 March 2023",
      vehicle: "2021 Toyota Camry SE",
      amount: "$125.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 12,
      dateSold: "22 May 2023",
      vehicle: "2019 Ford F-150 XLT",
      amount: "$189.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 13,
      dateSold: "10 June 2023",
      vehicle: "2020 Chevrolet Silverado",
      amount: "$214.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 14,
      dateSold: "8 April 2023",
      vehicle: "2022 Mazda CX-5",
      amount: "$157.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 15,
      dateSold: "30 January 2023",
      vehicle: "2018 Nissan Altima SV",
      amount: "$89.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 16,
      dateSold: "19 February 2023",
      vehicle: "2021 Kia Sportage LX",
      amount: "$139.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 17,
      dateSold: "14 March 2023",
      vehicle: "2020 Honda Accord EX",
      amount: "$145.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 18,
      dateSold: "5 May 2023",
      vehicle: "2019 Toyota RAV4 LE",
      amount: "$162.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 19,
      dateSold: "27 April 2023",
      vehicle: "2021 Ford Escape SE",
      amount: "$178.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 20,
      dateSold: "11 June 2023",
      vehicle: "2020 Chevrolet Malibu",
      amount: "$117.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 21,
      dateSold: "3 February 2023",
      vehicle: "2019 Mazda3 Sedan",
      amount: "$94.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 22,
      dateSold: "16 May 2023",
      vehicle: "2022 Nissan Rogue SV",
      amount: "$199.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 23,
      dateSold: "29 January 2023",
      vehicle: "2018 Kia Forte LX",
      amount: "$78.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 24,
      dateSold: "12 April 2023",
      vehicle: "2020 Honda CR-V EX",
      amount: "$169.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 25,
      dateSold: "7 March 2023",
      vehicle: "2021 Toyota Corolla LE",
      amount: "$109.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 26,
      dateSold: "24 May 2023",
      vehicle: "2019 Ford Explorer XLT",
      amount: "$205.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 27,
      dateSold: "18 June 2023",
      vehicle: "2020 Chevrolet Equinox LT",
      amount: "$142.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 28,
      dateSold: "9 April 2023",
      vehicle: "2022 Mazda CX-30",
      amount: "$174.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 29,
      dateSold: "2 February 2023",
      vehicle: "2018 Nissan Sentra SV",
      amount: "$79.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 30,
      dateSold: "21 May 2023",
      vehicle: "2021 Kia Seltos EX",
      amount: "$159.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 31,
      dateSold: "13 March 2023",
      vehicle: "2020 Honda Pilot EX-L",
      amount: "$229.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 32,
      dateSold: "6 June 2023",
      vehicle: "2019 Toyota Highlander LE",
      amount: "$197.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 33,
      dateSold: "28 April 2023",
      vehicle: "2021 Ford Mustang GT",
      amount: "$259.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 34,
      dateSold: "10 February 2023",
      vehicle: "2020 Chevrolet Traverse LT",
      amount: "$184.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 35,
      dateSold: "4 May 2023",
      vehicle: "2019 Mazda6 Touring",
      amount: "$119.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 36,
      dateSold: "17 June 2023",
      vehicle: "2022 Nissan Kicks SR",
      amount: "$137.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 37,
      dateSold: "31 January 2023",
      vehicle: "2018 Kia Soul LX",
      amount: "$69.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 38,
      dateSold: "14 April 2023",
      vehicle: "2020 Honda Fit EX",
      amount: "$97.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 39,
      dateSold: "8 March 2023",
      vehicle: "2021 Toyota Tacoma SR5",
      amount: "$239.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 40,
      dateSold: "25 May 2023",
      vehicle: "2019 Ford Fusion SE",
      amount: "$105.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 41,
      dateSold: "19 June 2023",
      vehicle: "2020 Chevrolet Camaro LT",
      amount: "$217.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 42,
      dateSold: "11 April 2023",
      vehicle: "2022 Mazda MX-5 Miata",
      amount: "$199.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 43,
      dateSold: "3 February 2023",
      vehicle: "2018 Nissan Murano SV",
      amount: "$129.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 44,
      dateSold: "22 May 2023",
      vehicle: "2021 Kia Telluride EX",
      amount: "$269.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 45,
      dateSold: "15 March 2023",
      vehicle: "2020 Honda Odyssey EX",
      amount: "$204.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 46,
      dateSold: "7 June 2023",
      vehicle: "2019 Toyota Sienna LE",
      amount: "$179.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 47,
      dateSold: "29 April 2023",
      vehicle: "2021 Ford Ranger XLT",
      amount: "$197.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 48,
      dateSold: "12 February 2023",
      vehicle: "2020 Chevrolet Suburban LT",
      amount: "$289.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 49,
      dateSold: "5 May 2023",
      vehicle: "2019 Mazda CX-9 Touring",
      amount: "$167.00",
      status: "Paid",
      selected: false,
    },
    {
      id: 50,
      dateSold: "18 June 2023",
      vehicle: "2022 Nissan Pathfinder SV",
      amount: "$249.00",
      status: "Paid",
      selected: false,
    },
  ]);

  const totalPages: number = Math.ceil(invoiceData.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentInvoices: Invoice[] = invoiceData.slice(startIndex, endIndex);

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  const toggleSelectAll = (): void => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setInvoiceData(
      invoiceData.map((invoice) => ({ ...invoice, selected: newSelectAll }))
    );
  };

  const toggleSelect = (id: number): void => {
    setInvoiceData(
      invoiceData.map((invoice) =>
        invoice.id === id
          ? { ...invoice, selected: !invoice.selected }
          : invoice
      )
    );
  };

  const removeInvoice = (id: number): void => {
    setInvoiceData(invoiceData.filter((invoice) => invoice.id !== id));
  };

  const handlePrintClick = (): void => {
    setShowModal(true);
  };

  const handlePrintInvoice = (): void => {
    // Handle print logic here
    console.log("Printing selected invoices...");
    setShowModal(false);
  };

  const handleRemoveSelected = (): void => {
    setInvoiceData(invoiceData.filter((invoice) => !invoice.selected));
    setShowModal(false);
  };

  const selectedCount = invoiceData.filter(
    (invoice) => invoice.selected
  ).length;

  return (
    <div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="md:flex items-center justify-between px-6 py-4  border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">{selectedCount}</span>
                <span className="text-gray-600">selected</span>
              </div>
              <div className="p-6 flex  gap-3 justify-center">
              <button 
                onClick={handlePrintInvoice}
                className="flex flex-col w-44 items-center justify-center gap-1 bg-[#FFE135] hover:bg-[#FFD700] px-6 py-3 rounded-md transition-colors font-medium"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M6.5 19.8805L6.5 11.5742C6.5 10.6314 6.5 10.16 6.79289 9.86711C7.08579 9.57422 7.55719 9.57422 8.5 9.57422L15.5 9.57422C16.4428 9.57422 16.9142 9.57422 17.2071 9.86711C17.5 10.16 17.5 10.6314 17.5 11.5742L17.5 19.8805C17.5 20.1971 17.5 20.3553 17.3962 20.4302C17.2924 20.505 17.1422 20.455 16.8419 20.3548L14.6738 19.6321C14.5878 19.6035 14.5448 19.5892 14.5005 19.5905C14.4561 19.5918 14.4141 19.6086 14.3299 19.6422L12.1857 20.4999C12.094 20.5366 12.0481 20.555 12 20.555C11.9519 20.555 11.906 20.5366 11.8143 20.4999L9.67005 19.6422C9.58592 19.6086 9.54385 19.5918 9.49952 19.5905C9.45519 19.5892 9.41221 19.6035 9.32625 19.6321L7.15811 20.3548C6.8578 20.455 6.70764 20.505 6.60382 20.4302C6.5 20.3553 6.5 20.1971 6.5 19.8805Z"
                    fill="#333"
                    fillOpacity="0.25"
                    stroke="#333"
                  />
                  <rect x="6.5" y="2.57422" width="11" height="4" rx="1" fill="#333" fillOpacity="0.25" />
                  <path
                    d="M18 13.5742H18.5C19.4428 13.5742 19.9142 13.5742 20.2071 13.2813C20.5 12.9884 20.5 12.517 20.5 11.5742V10.5742C20.5 8.6886 20.5 7.74579 19.9142 7.16001C19.3284 6.57422 18.3856 6.57422 16.5 6.57422H7.5C5.61438 6.57422 4.67157 6.57422 4.08579 7.16001C3.5 7.74579 3.5 8.6886 3.5 10.5742V12.5742C3.5 13.0456 3.5 13.2813 3.64645 13.4278C3.79289 13.5742 4.0286 13.5742 4.5 13.5742H6"
                    stroke="#333"
                  />
                  <path d="M9.5 13.5742L13.5 13.5742" stroke="#333" strokeLinecap="round" />
                  <path d="M9.5 16.5742L14.5 16.5742" stroke="#333" strokeLinecap="round" />
                  <path
                    d="M17.5 6.57422V6.17422C17.5 4.47716 17.5 3.62863 16.9728 3.10143C16.4456 2.57422 15.5971 2.57422 13.9 2.57422H10.1C8.40294 2.57422 7.55442 2.57422 7.02721 3.10143C6.5 3.62863 6.5 4.47716 6.5 6.17422V6.57422"
                    stroke="#333"
                  />
                </svg>
                <span>Print Invoice</span>
              </button>
              
              <button 
                onClick={handleRemoveSelected}
                className="flex flex-col w-44 items-center justify-center gap-1 bg-[#FFE135] hover:bg-[#FFD700] px-6 py-3 rounded-md transition-colors font-medium"
              >
                <IoClose className="w-5 h-5" />
                <span>Remove Invoice</span>
              </button>
              
              <button 
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-md transition-colors font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
            </div>
            
            
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4 sm:mb-8 px-2 sm:px-5">
        <div
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 text-lg sm:text-[28px] font-semibold cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft
            size={24}
            className="sm:w-[35px] sm:h-[35px]"
          />
          <span className="hidden sm:inline">Invoice History</span>
          <span className="sm:hidden text-base">Invoice History</span>
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
            <rect
              x="6.5"
              y="2.57422"
              width="11"
              height="4"
              rx="1"
              fill="#7E869E"
              fillOpacity="0.25"
            />
            <path
              d="M18 13.5742H18.5C19.4428 13.5742 19.9142 13.5742 20.2071 13.2813C20.5 12.9884 20.5 12.517 20.5 11.5742V10.5742C20.5 8.6886 20.5 7.74579 19.9142 7.16001C19.3284 6.57422 18.3856 6.57422 16.5 6.57422H7.5C5.61438 6.57422 4.67157 6.57422 4.08579 7.16001C3.5 7.74579 3.5 8.6886 3.5 10.5742V12.5742C3.5 13.0456 3.5 13.2813 3.64645 13.4278C3.79289 13.5742 4.0286 13.5742 4.5 13.5742H6"
              stroke="#606060"
            />
            <path
              d="M9.5 13.5742L13.5 13.5742"
              stroke="#606060"
              strokeLinecap="round"
            />
            <path
              d="M9.5 16.5742L14.5 16.5742"
              stroke="#606060"
              strokeLinecap="round"
            />
            <path
              d="M17.5 6.57422V6.17422C17.5 4.47716 17.5 3.62863 16.9728 3.10143C16.4456 2.57422 15.5971 2.57422 13.9 2.57422H10.1C8.40294 2.57422 7.55442 2.57422 7.02721 3.10143C6.5 3.62863 6.5 4.47716 6.5 6.17422V6.57422"
              stroke="#606060"
            />
          </svg>
          <span className="text-xs sm:text-sm text-gray-700 hidden sm:inline">
            Printables
          </span>
        </button>
      </div>

      {/* Invoice Table */}
      <div className="px-2 sm:px-5">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col min-h-[600px]">
          <div
            className="overflow-x-auto flex-grow scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin" as const,
              scrollbarColor: "#9CA3AF #F3F4F6",
            }}
          >
            <table className="w-full min-w-[900px]">
              <thead className="border-b h-16 border-gray-200">
                <tr>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">
                    <button
                      onClick={toggleSelectAll}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Select
                    </button>
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">
                    Print
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">
                    Date Sold
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">
                    Vehicle
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">
                    Amount
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-600">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentInvoices.map((invoice: Invoice) => (
                  <tr
                    key={invoice.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-3 sm:px-4 py-4">
                      <div
                        onClick={() => toggleSelect(invoice.id)}
                        className={`w-5 h-5 ml-2 rounded-full cursor-pointer transition-colors border-2 ${
                          invoice.selected
                            ? "bg-[#FFE135] border-[#FFE135]"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      ></div>
                    </td>
                    <td className="px-3 sm:px-4 py-4">
                      <button
                        onClick={handlePrintClick}
                        className="bg-[#FFE135] px-4 py-1.5 rounded text-sm font-medium hover:bg-[#FFD700] transition-colors"
                      >
                        Print
                      </button>
                    </td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-700">
                      {invoice.dateSold}
                    </td>
                    <td className="px-3 sm:px-4 py-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={car.src}
                          alt="Vehicle"
                          className="w-8 h-8 sm:w-10 sm:h-8 object-cover rounded"
                        />
                        <span className="text-xs sm:text-sm text-gray-700">
                          {invoice.vehicle}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm text-gray-700">
                      {invoice.amount}
                    </td>
                    <td className="px-3 sm:px-4 py-4 text-xs sm:text-sm font-medium text-gray-700">
                      {invoice.status}
                    </td>
                    <td className="px-3 sm:px-4 py-4">
                      <button
                        onClick={() => removeInvoice(invoice.id)}
                        className="text-gray-500 ml-5 hover:text-red-600 transition-colors text-lg"
                      >
                        ✕
                      </button>
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
              <select className="border px-4 rounded-md py-1">
                <option value={10}>{itemsPerPage}</option>
              </select>
              <span>of {invoiceData.length}</span>
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
                        ? "bg-[#FFE135] font-medium"
                        : "text-gray-600 bg-gray-100 hover:bg-yellow-300"
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
};

export default Page;
