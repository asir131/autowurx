"use client"
import { useState, useMemo } from 'react';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowDown } from 'react-icons/md';
import { useRouter } from 'next/navigation';

interface Lead {
  id: string;
  vehicle: string;
  dateSold: string;
  customer: string;
  leadType: string;
  isRead: boolean;
  vehicleImage: string;
}

export default function Leads() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedLeads, setSelectedLeads] = useState<Set<number>>(new Set());
  const itemsPerPage: number = 9;

  // Filter states
  const [sortBy, setSortBy] = useState<string>('id-asc');
  const [filterLeadType, setFilterLeadType] = useState<string>('All Lead Types');
  const [filterReadStatus, setFilterReadStatus] = useState<string>('All');
  const [filterMake, setFilterMake] = useState<string>('All');
  const [filterModel, setFilterModel] = useState<string>('All');
  const [filterActiveStatus, setFilterActiveStatus] = useState<string>('All');

  const [leadsData, setLeadsData] = useState<Lead[]>([
    { id: '#434232', vehicle: '2020 Honda Civic LX', dateSold: '6 April 2023', customer: 'Jay Ferrel', leadType: 'Vehicle Inquiry', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434233', vehicle: '2021 Toyota Camry SE', dateSold: '15 March 2023', customer: 'Sarah Johnson', leadType: 'Contact Us Form', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434234', vehicle: '2019 Ford F-150 XLT', dateSold: '22 May 2023', customer: 'Mike Davis', leadType: 'Car Finder', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434235', vehicle: '2020 Chevrolet Silverado', dateSold: '10 June 2023', customer: 'Emily Brown', leadType: 'Loan Application', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434236', vehicle: '2022 Mazda CX-5', dateSold: '8 April 2023', customer: 'David Wilson', leadType: 'Vehicle History Report', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434237', vehicle: '2018 Nissan Altima SV', dateSold: '30 January 2023', customer: 'Lisa Anderson', leadType: 'Vehicle Inquiry', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434238', vehicle: '2021 Kia Sportage LX', dateSold: '19 February 2023', customer: 'Robert Taylor', leadType: 'Contact Us Form', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434239', vehicle: '2020 Honda Accord EX', dateSold: '14 March 2023', customer: 'Jennifer Martinez', leadType: 'Car Finder', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434240', vehicle: '2019 Toyota RAV4 LE', dateSold: '5 May 2023', customer: 'Chris Thompson', leadType: 'Vehicle Inquiry', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434241', vehicle: '2021 Ford Escape SE', dateSold: '27 April 2023', customer: 'Amanda White', leadType: 'Loan Application', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434242', vehicle: '2020 Chevrolet Malibu', dateSold: '11 June 2023', customer: 'Daniel Harris', leadType: 'Vehicle History Report', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434243', vehicle: '2019 Mazda3 Sedan', dateSold: '3 February 2023', customer: 'Michelle Clark', leadType: 'Contact Us Form', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434244', vehicle: '2022 Nissan Rogue SV', dateSold: '16 May 2023', customer: 'Kevin Lewis', leadType: 'Vehicle Inquiry', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434245', vehicle: '2018 Kia Forte LX', dateSold: '29 January 2023', customer: 'Laura Walker', leadType: 'Car Finder', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434246', vehicle: '2020 Honda CR-V EX', dateSold: '12 April 2023', customer: 'James Hall', leadType: 'Loan Application', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434247', vehicle: '2021 Toyota Corolla LE', dateSold: '7 March 2023', customer: 'Patricia Allen', leadType: 'Vehicle History Report', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434248', vehicle: '2019 Ford Explorer XLT', dateSold: '24 May 2023', customer: 'Mark Young', leadType: 'Contact Us Form', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434249', vehicle: '2020 Chevrolet Equinox LT', dateSold: '18 June 2023', customer: 'Nancy King', leadType: 'Vehicle Inquiry', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434250', vehicle: '2022 Mazda CX-30', dateSold: '9 April 2023', customer: 'Steven Wright', leadType: 'Car Finder', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434251', vehicle: '2018 Nissan Sentra SV', dateSold: '2 February 2023', customer: 'Karen Lopez', leadType: 'Loan Application', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434252', vehicle: '2021 Kia Seltos EX', dateSold: '21 May 2023', customer: 'Paul Hill', leadType: 'Vehicle History Report', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434253', vehicle: '2020 Honda Pilot EX-L', dateSold: '13 March 2023', customer: 'Betty Scott', leadType: 'Contact Us Form', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434254', vehicle: '2019 Toyota Highlander LE', dateSold: '6 June 2023', customer: 'Gary Green', leadType: 'Vehicle Inquiry', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434255', vehicle: '2021 Ford Mustang GT', dateSold: '28 April 2023', customer: 'Sandra Adams', leadType: 'Car Finder', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434256', vehicle: '2020 Chevrolet Traverse LT', dateSold: '10 February 2023', customer: 'Donald Baker', leadType: 'Loan Application', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434257', vehicle: '2019 Mazda6 Touring', dateSold: '4 May 2023', customer: 'Carol Nelson', leadType: 'Vehicle History Report', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434258', vehicle: '2022 Nissan Kicks SR', dateSold: '17 June 2023', customer: 'Edward Carter', leadType: 'Contact Us Form', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434259', vehicle: '2018 Kia Soul LX', dateSold: '31 January 2023', customer: 'Dorothy Mitchell', leadType: 'Vehicle Inquiry', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434260', vehicle: '2020 Honda Fit EX', dateSold: '14 April 2023', customer: 'Jason Perez', leadType: 'Car Finder', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434261', vehicle: '2021 Toyota Tacoma SR5', dateSold: '8 March 2023', customer: 'Helen Roberts', leadType: 'Loan Application', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434262', vehicle: '2019 Ford Fusion SE', dateSold: '25 May 2023', customer: 'Brian Turner', leadType: 'Vehicle History Report', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434263', vehicle: '2020 Chevrolet Camaro LT', dateSold: '19 June 2023', customer: 'Ruth Phillips', leadType: 'Contact Us Form', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434264', vehicle: '2022 Mazda MX-5 Miata', dateSold: '11 April 2023', customer: 'Jeffrey Campbell', leadType: 'Vehicle Inquiry', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434265', vehicle: '2018 Nissan Murano SV', dateSold: '3 February 2023', customer: 'Sharon Parker', leadType: 'Car Finder', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434266', vehicle: '2021 Kia Telluride EX', dateSold: '22 May 2023', customer: 'Ryan Evans', leadType: 'Loan Application', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434267', vehicle: '2020 Honda Odyssey EX', dateSold: '15 March 2023', customer: 'Deborah Edwards', leadType: 'Vehicle History Report', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434268', vehicle: '2019 Toyota Sienna LE', dateSold: '7 June 2023', customer: 'Nicholas Collins', leadType: 'Contact Us Form', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434269', vehicle: '2021 Ford Ranger XLT', dateSold: '29 April 2023', customer: 'Melissa Stewart', leadType: 'Vehicle Inquiry', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434270', vehicle: '2020 Chevrolet Suburban LT', dateSold: '12 February 2023', customer: 'Gregory Sanchez', leadType: 'Car Finder', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434271', vehicle: '2019 Mazda CX-9 Touring', dateSold: '5 May 2023', customer: 'Stephanie Morris', leadType: 'Loan Application', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434272', vehicle: '2022 Nissan Pathfinder SV', dateSold: '18 June 2023', customer: 'Andrew Rogers', leadType: 'Vehicle History Report', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434273', vehicle: '2018 Kia Optima LX', dateSold: '1 February 2023', customer: 'Rebecca Reed', leadType: 'Contact Us Form', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434274', vehicle: '2020 Honda Insight EX', dateSold: '16 April 2023', customer: 'Anthony Cook', leadType: 'Vehicle Inquiry', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434275', vehicle: '2021 Toyota Venza LE', dateSold: '9 March 2023', customer: 'Cynthia Morgan', leadType: 'Car Finder', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434276', vehicle: '2019 Ford Edge SEL', dateSold: '26 May 2023', customer: 'Joshua Bell', leadType: 'Loan Application', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434277', vehicle: '2020 Chevrolet Blazer RS', dateSold: '20 June 2023', customer: 'Kathleen Murphy', leadType: 'Vehicle History Report', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434278', vehicle: '2022 Mazda CX-50', dateSold: '12 April 2023', customer: 'Matthew Bailey', leadType: 'Contact Us Form', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434279', vehicle: '2018 Nissan Maxima SV', dateSold: '4 February 2023', customer: 'Barbara Rivera', leadType: 'Vehicle Inquiry', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434280', vehicle: '2021 Kia K5 GT-Line', dateSold: '23 May 2023', customer: 'Joshua Cooper', leadType: 'Car Finder', isRead: false, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' },
    { id: '#434281', vehicle: '2020 Honda Ridgeline RTL', dateSold: '17 March 2023', customer: 'Virginia Richardson', leadType: 'Loan Application', isRead: true, vehicleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop' }
  ]);

  // Helper function to extract make from vehicle string
  const getMake = (vehicle: string): string => {
    const parts = vehicle.split(' ');
    return parts[1] || '';
  };

  // Helper function to extract model from vehicle string
  const getModel = (vehicle: string): string => {
    const parts = vehicle.split(' ');
    return parts[2] || '';
  };

  // Apply filters and sorting
  const filteredAndSortedLeads = useMemo(() => {
    let filtered = [...leadsData];

    // Filter by Lead Type
    if (filterLeadType !== 'All Lead Types') {
      filtered = filtered.filter(lead => lead.leadType === filterLeadType);
    }

    // Filter by Read/Unread
    if (filterReadStatus === 'Read') {
      filtered = filtered.filter(lead => lead.isRead === true);
    } else if (filterReadStatus === 'Unread') {
      filtered = filtered.filter(lead => lead.isRead === false);
    }

    // Filter by Make
    if (filterMake !== 'All' && filterMake !== 'Any') {
      filtered = filtered.filter(lead => getMake(lead.vehicle) === filterMake);
    }

    // Filter by Model
    if (filterModel !== 'All' && filterModel !== 'Any') {
      filtered = filtered.filter(lead => getModel(lead.vehicle) === filterModel);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'id-asc') {
        return a.id.localeCompare(b.id);
      } else if (sortBy === 'id-desc') {
        return b.id.localeCompare(a.id);
      } else if (sortBy === 'date-asc') {
        return new Date(a.dateSold).getTime() - new Date(b.dateSold).getTime();
      } else if (sortBy === 'date-desc') {
        return new Date(b.dateSold).getTime() - new Date(a.dateSold).getTime();
      }
      return 0;
    });

    return filtered;
  }, [leadsData, sortBy, filterLeadType, filterReadStatus, filterMake, filterModel]);

  const totalPages: number = Math.ceil(filteredAndSortedLeads.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentLeads: Lead[] = filteredAndSortedLeads.slice(startIndex, endIndex);
const router = useRouter();

  const goToPage = (page: number): void => {
    setCurrentPage(page);
    setSelectAll(false);
    setSelectedLeads(new Set());
  };

  const handleFilterChange = () => {
    setCurrentPage(1);
    setSelectAll(false);
    setSelectedLeads(new Set());
  };

  const handleSelectAll = (): void => {
    if (selectAll) {
      setSelectedLeads(new Set());
      setSelectAll(false);
    } else {
      const allIndices = new Set(currentLeads.map((_, index) => startIndex + index));
      setSelectedLeads(allIndices);
      setSelectAll(true);
    }
  };

  const handleSelectLead = (index: number): void => {
    const actualIndex = startIndex + index;
    const newSelected = new Set(selectedLeads);
    if (newSelected.has(actualIndex)) {
      newSelected.delete(actualIndex);
    } else {
      newSelected.add(actualIndex);
    }
    setSelectedLeads(newSelected);
    setSelectAll(newSelected.size === currentLeads.length);
  };

  const handleRemoveSingle = (index: number): void => {
    const leadToRemove = currentLeads[index];
    const newLeadsData = leadsData.filter(lead => lead.id !== leadToRemove.id);
    setLeadsData(newLeadsData);
    setSelectedLeads(new Set());
    setSelectAll(false);
  };

  const handleRemoveSelected = (): void => {
    if (selectedLeads.size === 0) return;
    const selectedIds = new Set(
      Array.from(selectedLeads).map(index => filteredAndSortedLeads[index]?.id)
    );
    const newLeadsData = leadsData.filter(lead => !selectedIds.has(lead.id));
    setLeadsData(newLeadsData);
    setSelectedLeads(new Set());
    setSelectAll(false);
  };

  const handleToggleReadStatus = (): void => {
    if (selectedLeads.size === 0) return;
    const selectedIds = new Set(
      Array.from(selectedLeads).map(index => filteredAndSortedLeads[index]?.id)
    );
    const newLeadsData = leadsData.map(lead => {
      if (selectedIds.has(lead.id)) {
        return { ...lead, isRead: !lead.isRead };
      }
      return lead;
    });
    setLeadsData(newLeadsData);
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
          <span className="hidden sm:inline">Leads</span>
          <span className="sm:hidden text-base">Leads</span>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 mx-2 sm:mx-5 mb-4 sm:mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
          {/* Sort By */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Sort By:</label>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              >
                <option value="id-asc">Product ID (Ascending)</option>
                <option value="id-desc">Product ID (Descending)</option>
                <option value="date-asc">Date (Oldest First)</option>
                <option value="date-desc">Date (Newest First)</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* Lead Type */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Lead Type</label>
            <div className="relative">
              <select 
                value={filterLeadType}
                onChange={(e) => {
                  setFilterLeadType(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              >
                <option>All Lead Types</option>
                <option>Contact Us Form</option>
                <option>Vehicle Inquiry</option>
                <option>Car Finder</option>
                <option>Loan Application</option>
                <option>Vehicle History Report</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* Read/Unread */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Read/Unread</label>
            <div className="relative">
              <select 
                value={filterReadStatus}
                onChange={(e) => {
                  setFilterReadStatus(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              >
                <option>All</option>
                <option>Read</option>
                <option>Unread</option>
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
              <select 
                value={filterMake}
                onChange={(e) => {
                  setFilterMake(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              >
                <option>All</option>
                <option>Chevrolet</option>
                <option>Ford</option>
                <option>Honda</option>
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
              <select 
                value={filterModel}
                onChange={(e) => {
                  setFilterModel(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              >
                <option>All</option>
                <option>Accord</option>
                <option>Altima</option>
                <option>Blazer</option>
                <option>Camaro</option>
                <option>Camry</option>
                <option>Civic</option>
                <option>Corolla</option>
                <option>CR-V</option>
                <option>CX-5</option>
                <option>CX-9</option>
                <option>CX-30</option>
                <option>CX-50</option>
                <option>Edge</option>
                <option>Equinox</option>
                <option>Escape</option>
                <option>Explorer</option>
                <option>F-150</option>
                <option>Fit</option>
                <option>Forte</option>
                <option>Fusion</option>
                <option>Highlander</option>
                <option>Insight</option>
                <option>K5</option>
                <option>Kicks</option>
                <option>Malibu</option>
                <option>Maxima</option>
                <option>Mazda3</option>
                <option>Mazda6</option>
                <option>Murano</option>
                <option>Mustang</option>
                <option>MX-5</option>
                <option>Odyssey</option>
                <option>Optima</option>
                <option>Pathfinder</option>
                <option>Pilot</option>
                <option>Ranger</option>
                <option>RAV4</option>
                <option>Ridgeline</option>
                <option>Rogue</option>
                <option>Seltos</option>
                <option>Sentra</option>
                <option>Sienna</option>
                <option>Silverado</option>
                <option>Soul</option>
                <option>Sportage</option>
                <option>Suburban</option>
                <option>Tacoma</option>
                <option>Telluride</option>
                <option>Traverse</option>
                <option>Venza</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>

          {/* Active/Remove */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Active/Remove</label>
            <div className="relative">
              <select 
                value={filterActiveStatus}
                onChange={(e) => {
                  setFilterActiveStatus(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              >
                <option>All</option>
                <option>Active</option>
                <option>Removed</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                size={16}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="px-2 sm:px-5">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col min-h-[600px]">
          {/* Action Buttons */}
          <div className="flex justify-end gap-2 p-4 border-b border-gray-200">
            <button
              onClick={handleToggleReadStatus}
              disabled={selectedLeads.size === 0}
              className="px-4 py-2 text-xs sm:text-sm bg-[#FFE135] rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ffdc13]"
            >
              Mark Read/Unread
            </button>
            <button
              onClick={handleRemoveSelected}
              disabled={selectedLeads.size === 0}
              className="px-4 py-2 text-xs sm:text-sm bg-red-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600"
            >
              Delete Selected
            </button>
          </div>

          <div 
            className="overflow-x-auto flex-grow scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100" 
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin' as const,
              scrollbarColor: '#9CA3AF #F3F4F6'
            }}
          >
            <table className="w-full min-w-[1000px]">
              <thead className="border-b h-16 border-gray-200">
                <tr>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">
                    <div 
                      onClick={handleSelectAll}
                      className="cursor-pointer"
                    >
                      Select
                    </div>
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">View</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Date Sold</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Vehicle</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Customer</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Lead Type</th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium opacity-70 text-gray-600">Remove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentLeads.map((lead: Lead, index: number) => {
                  const actualIndex = startIndex + index;
                  const isSelected = selectedLeads.has(actualIndex);
                  return (
                    <tr 
                      key={lead.id} 
                      className="transition-colors"
                      style={{ backgroundColor: lead.isRead ? '#FFFFFF' : '#F5F5F5' }}
                    >
                      <td className="px-3 sm:px-4 py-3">
                        <div 
                          onClick={() => handleSelectLead(index)}
                          className={`w-5 h-5 ml-2 rounded-full cursor-pointer border-2 flex items-center justify-center ${
                            isSelected ? 'bg-[#FFE135] border-[#FFE135]' : 'border-gray-300'
                          }`}
                        >
                          
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3">
                       <button
  onClick={() => {
    // Ensure the URL matches the dynamic [id] page
    router.push(`/dashboard/leads&contacts/${lead.id.replace('#', '')}`);
  }}
  className="bg-[#FFE135] px-3 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-[#ffdc13]"
>
  View/Reply
</button>
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{lead.dateSold}</td>
                      <td className="px-3 sm:px-4 py-3">
                        <div className="flex items-center gap-2">
                          <img 
                            src={lead.vehicleImage} 
                            alt="Vehicle" 
                            className="w-8 h-8 sm:w-12 sm:h-10 object-cover rounded"
                          />
                          <span className="text-xs font-semibold sm:text-sm text-gray-700">{lead.vehicle}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{lead.customer}</td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{lead.leadType}</td>
                      <td className="px-3 sm:px-4 py-3">
                        <button
                          onClick={() => handleRemoveSingle(index)}
                          className="text-gray-500 ml-5 hover:text-red-500 text-lg font-bold"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer with pagination */}
          <div className="border-t h-20 mb-5 md:mb-0 border-gray-200 px-3 sm:px-4 py-3 md:flex flex-col sm:flex-row justify-between items-center gap-3 mt-auto">
            {/* Left side - Showing info */}
            <div className="flex mb-5 md:mb-0 items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span>Showing</span>
              <span className='border px-4 rounded-md py-1'>{currentLeads.length}</span>
              <span>of {filteredAndSortedLeads.length}</span>
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
  );
}