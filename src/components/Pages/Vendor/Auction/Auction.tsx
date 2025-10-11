"use client"
import { useState } from 'react';

interface Auction {
  id: number;
  productName: string;
  productId: string;
  category: string;
  bidId: string;
  offerValue: string;
  date: string;
  image: string;
  hasAccept: boolean;
  hasOffer: boolean;
}

const GavelIcon = () => (
  <svg width="96" height="97" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3">
      <path d="M3.7002 42.7719L9.7002 36.7719C10.8123 35.6608 12.2455 34.9272 13.7973 34.6749C15.349 34.4225 16.9408 34.6642 18.3477 35.3657L35.2977 18.4157C34.5957 17.0091 34.3535 15.4176 34.6051 13.8659C34.8568 12.3142 35.5897 10.8807 36.7002 9.76816L42.7002 3.76816C44.1066 2.36213 46.014 1.57227 48.0027 1.57227C49.9914 1.57227 51.8987 2.36213 53.3052 3.76816L77.3052 27.7682C78.7112 29.1746 79.5011 31.0819 79.5011 33.0707C79.5011 35.0594 78.7112 36.9667 77.3052 38.3732L71.3052 44.3732C70.1965 45.4819 68.7682 46.2153 67.2212 46.4702C65.6741 46.7252 64.086 46.4888 62.6802 45.7944L84.9927 68.0919C87.2434 70.3426 88.5078 73.3952 88.5078 76.5782C88.5078 79.7611 87.2434 82.8137 84.9927 85.0644C82.742 87.3151 79.6894 88.5795 76.5064 88.5795C73.3235 88.5795 70.2709 87.3151 68.0202 85.0644L45.7527 62.7782C46.4409 64.1821 46.6732 65.766 46.4171 67.3084C46.1609 68.8508 45.4291 70.2746 44.3239 71.3807L38.3239 77.3807C37.6275 78.0774 36.8005 78.6301 35.8904 79.0072C34.9803 79.3843 34.0047 79.5784 33.0196 79.5784C32.0344 79.5784 31.0589 79.3843 30.1487 79.0072C29.2386 78.6301 28.4117 78.0774 27.7152 77.3807L3.71519 53.3807C3.01842 52.6842 2.46571 51.8573 2.08861 50.9471C1.71151 50.037 1.51742 49.0615 1.51742 48.0763C1.51742 47.0911 1.71151 46.1156 2.08861 45.2055C2.46571 44.2953 3.01842 43.4684 3.71519 42.7719H3.7002ZM66.0027 36.9519L69.8877 33.0744L48.0027 11.1932L44.1252 15.0744L66.0027 36.9519ZM74.3877 78.7007C74.9506 79.2631 75.7139 79.5788 76.5096 79.5785C77.3054 79.5781 78.0684 79.2617 78.6308 78.6988C79.1932 78.1359 79.509 77.3726 79.5087 76.5768C79.5083 75.7811 79.1919 75.0181 78.6289 74.4557L56.3089 52.1357L52.0677 56.3807L74.3877 78.7007ZM39.6252 56.0919L56.0202 39.6969L41.3952 25.0719L25.0002 41.4669L39.6252 56.0919ZM33.0064 69.9669L36.8839 66.0744L15.0027 44.1969L11.1252 48.0744L33.0064 69.9669Z" fill="#FFE135"/>
    </g>
  </svg>
);

export default function AuctionPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Newest');
  const [category, setCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [showCongratsModal, setShowCongratsModal] = useState<boolean>(false);
  const [showAuctionModal, setShowAuctionModal] = useState<boolean>(false);
  const [selectedAuction, setSelectedAuction] = useState<Auction | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=80&h=60&fit=crop',
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=80&h=60&fit=crop'
  ]);

  const categories: string[] = [
    'Sedan',
    'Micro',
    'Fielder',
    'SUV',
    'Hatchback',
    'Wagon',
    'Coupe',
    'Convertible'
  ];

  const sortOptions: string[] = ['Newest', 'Oldest', 'Price: Low to High', 'Price: High to Low'];

  const [auctionData, setAuctionData] = useState<Auction[]>(
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      productName: '2020 Honda Civic LX',
      productId: '#434232',
      category: 'Sedan',
      bidId: '#434232',
      offerValue: '$200',
      date: '6 April,2025',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=100&h=60&fit=crop',
      hasAccept: i % 3 === 0,
      hasOffer: i % 2 === 0 && i % 3 !== 0
    }))
  );

  // Filter and sort data
  const filteredData = auctionData.filter(auction => {
    const matchesSearch = auction.productName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === '' || auction.category === category;
    return matchesSearch && matchesCategory;
  });

  const totalPages: number = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentData: Auction[] = filteredData.slice(startIndex, endIndex);

  const goToPage = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAccept = (auctionId: number): void => {
    setAuctionData(prevData => 
      prevData.map(auction => 
        auction.id === auctionId 
          ? { ...auction, hasAccept: false }
          : auction
      )
    );
    setShowCongratsModal(true);
  };

  const handleView = (auction: Auction): void => {
    setSelectedAuction(auction);
    setShowAuctionModal(true);
  };

  const handleViewAuction = (): void => {
    setShowCongratsModal(false);
    setShowAuctionModal(true);
  };

  const handleRemoveImage = (index: number): void => {
    setUploadedImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string);
            if (newImages.length === files.length) {
              setUploadedImages(prev => [...prev, ...newImages]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleApplyFilter = (): void => {
    setCurrentPage(1);
  };

  return (
    <div className='min-h-screen '>
      <div className='md:ml-5 p-6 flex flex-col gap-6'>
        {/* Header */}
        <div className='flex flex-col gap-3'>
          <h1 className='font-medium text-xl'>Auction</h1>
          <button className='bg-[#FFE135] px-6 py-2 rounded-3xl w-28 font-medium'>
            Product
          </button>
        </div>

        {/* Filters Section */}
        <div className='flex bg-white p-5 py-8 flex-wrap items-center gap-5'>
          {/* Search Input */}
          <div className='relative flex-1 min-w-[200px] max-w-[510px]'>
            <svg 
              className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400'
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' 
              />
            </svg>
            <input
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent'
            />
          </div>

          {/* Sort Dropdown */}
          <div className='relative flex-1 min-w-[200px] max-w-[310px]'>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='w-full opacity-60 px-4 py-2.5 border border-gray-300 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent cursor-pointer'
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <svg 
              className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none'
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M19 9l-7 7-7-7' 
              />
            </svg>
          </div>

          {/* Category Dropdown */}
          <div className='relative flex-1 min-w-[200px] max-w-[310px]'>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full px-4 py-2.5 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE135] focus:border-transparent cursor-pointer text-gray-500'
            >
              <option value=''>Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <svg 
              className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none'
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M19 9l-7 7-7-7' 
              />
            </svg>
          </div>

          {/* Apply Filter Button */}
          <button 
            onClick={handleApplyFilter}
            className='px-6 py-2.5 bg-[#FFFCEB] border-2 border-[#FFE135] rounded-lg font-medium hover:bg-[#FFE135] transition-colors'
          >
            Apply Filter
          </button>

          {/* Add Auction Button */}
          <button className='px-6 py-2.5 bg-[#FFE135] rounded-lg font-medium hover:bg-[#FFD700] transition-colors flex items-center gap-2'>
            <span className='text-xl'>+</span>
            Add Auction
          </button>
        </div>

        {/* Content Area - Auction Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full  min-w-[900px]">
              <thead className="bg-white  border-b">
                <tr>
                  <th className="px-6 py-6 text-left text-sm font-medium text-gray-600">Product Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Product ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Bid ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Offer Value</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentData.map((auction) => (
                  <tr key={auction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={auction.image} 
                          alt={auction.productName}
                          className="w-12 h-8 rounded object-cover"
                        />
                        <span className="text-sm font-semibold text-gray-900">{auction.productName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{auction.productId}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{auction.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{auction.bidId}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{auction.offerValue}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{auction.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {auction.hasAccept && (
                          <button
                            onClick={() => handleAccept(auction.id)}
                            className="px-4 py-1.5 bg-[#4CAF50] text-white text-sm rounded hover:bg-[#45a049] transition-colors"
                          >
                            Accept
                          </button>
                        )}
                        <button
                          onClick={() => handleView(auction)}
                          className="px-4 py-1.5 bg-[#FFE135] text-gray-900 text-sm rounded hover:bg-[#ffd700] transition-colors"
                        >
                          View
                        </button>
                        {auction.hasOffer && (
                          <button
                            className="px-4 py-1.5 bg-[#FFFCEB] border border-[#FFE135] text-gray-900 text-sm rounded hover:bg-[#FFF9D6] transition-colors"
                          >
                            Offer
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="border-t border-gray-200 px-6 py-4 grid  md:flex justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Showing</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span>of {filteredData.length}</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                &lt;
              </button>
              
              {[...Array(Math.min(5, totalPages))].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`px-3 py-1 rounded ${
                      currentPage === pageNum
                        ? 'bg-[#FFE135] text-gray-900 font-medium'
                        : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations Modal */}
      {showCongratsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <div className="flex justify-center mb-6">
              <GavelIcon />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Congratulations! Your Car is Listed.
            </h2>
            <p className="text-gray-600 mb-6">
              Your car has been successfully listed for auction.<br />
              Dealers can now place bids.
            </p>
            <button
              onClick={handleViewAuction}
              className="w-full py-3 bg-white border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Auction
            </button>
          </div>
        </div>
      )}

      {/* Auction Details Modal */}
      {showAuctionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Auction Details</h2>
              <button
                onClick={() => setShowAuctionModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vin</label>
                  <input
                    type="text"
                    placeholder="VIN Or Plate Number *"
                    className="w-full px-3 py-2.5  border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plate</label>
                  <input
                    type="text"
                    placeholder="VIN Or Plate Number *"
                    className="w-full px-3 py-2.5  border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mileage</label>
                  <input
                    type="text"
                    defaultValue="12,500"
                    className="w-full px-3 py-2.5  border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Asking price</label>
                  <input
                    type="text"
                    placeholder="Asking price"
                    className="w-full px-3 py-2.5  border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full px-3 py-2.5  border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full px-3 py-2.5  border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
  <label className="block text-sm font-medium text-gray-700 mb-3">
    What is the condition of the vehicle?
  </label>
  <div className="flex gap-6">
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="condition"
        className="w-4 h-4 appearance-none border-2 border-gray-300 rounded-full checked:bg-[#FFE135] checked:border-[#FFE135]  focus:outline-none  cursor-pointer"
      />
      <span className="text-sm text-gray-700">Poor</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="condition"
        defaultChecked
        className="w-4 h-4 appearance-none border-2 border-gray-300 rounded-full checked:bg-[#FFE135] checked:border-[#FFE135]  cursor-pointer"
      />
      <span className="text-sm text-gray-700">Fair</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="condition"
        className="w-4 h-4 appearance-none border-2 border-gray-300 rounded-full checked:bg-[#FFE135] checked:border-[#FFE135] cursor-pointer"
      />
      <span className="text-sm text-gray-700">Good</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="condition"
        className="w-4 h-4 appearance-none border-2 border-gray-300 rounded-full checked:bg-[#FFE135] checked:border-[#FFE135]  cursor-pointer"
      />
      <span className="text-sm text-gray-700">Excellent</span>
    </label>
  </div>
</div>

              <div className="bg-[#F6F7F8] border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/svg+xml,image/png,image/jpeg,image/gif"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                  <p className="text-xs text-gray-500">(max. 800x400px)</p>
                </label>
                
              </div>
              <div>
                {uploadedImages.length > 0 && (
                  <div className="flex gap-3 justify-start mt-4 flex-wrap">
                    {uploadedImages.map((img, index) => (
                      <div key={index} className="relative">
                        <img 
                          src={img} 
                          alt={`Upload ${index + 1}`} 
                          className="w-20 h-16 rounded object-cover" 
                        />
                        <button 
                          onClick={() => handleRemoveImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Describe your car for potential buyers</label>
                <textarea
                  placeholder="Description"
                  rows={3}
                  className="w-full px-3 py-2.5  border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button onClick={() => setShowAuctionModal(false)} className="w-full py-3 bg-[#FFE135] text-gray-900 rounded-lg font-semibold hover:bg-[#ffd700] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}