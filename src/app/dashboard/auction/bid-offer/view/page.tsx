'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface BidData {
  bidNumber: string;
  orderDate: string;
  userName: string;
  userPhone: string;
  userId: string;
  userEmail: string;
  productName: string;
  category: string;
  productId: string;
  bidId: string;
  mainItemPrice: number;
  additionalItem?: string;
  additionalItemPrice?: string;
  bidCount: number;
  comment: string;
}

const BidDetail: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<BidData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // You can replace this with your actual API call
    const fetchData = async () => {
      const auctionId = new URLSearchParams(window.location.search).get('auctionId') || 'N/A';

      // Sample data - replace with actual API call using the auctionId
      const fetchedData: BidData = {
        bidNumber: '5444',
        orderDate: 'Order 21 April, 2025 14:30 GMT',
        userName: 'Abdur Rahman',
        userPhone: '98390903',
        userId: 'USR-#888',
        userEmail: 'example@gmail.com',
        productName: '2020 Honda Civic LX',
        category: 'Sedan',
        productId: '434232',
        bidId: auctionId,
        mainItemPrice: 1818,
        additionalItem: 'Tool box',
        additionalItemPrice: 'Free',
        bidCount: 5,
        comment: '-----------',
      };

      setData(fetchedData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleReject = () => {
    console.log('Bid rejected');
    // Add your reject logic here
  };

  const handleAccept = () => {
    console.log('Bid accepted');
    // Add your accept logic here
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or any other loading state
  }

  if (!data) {
    return <div>No data available</div>; // Handle the case where there's no data
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl">
        <button
          onClick={handleBack}
          className="px-6 py-2 text-sm font-medium rounded-lg text-black mb-6"
          style={{ backgroundColor: '#FFE135' }}
        >
          Back
        </button>
        <div className="flex justify-between items-start mb-8 border-b-2 pb-5">
          <h1 className="text-3xl font-semibold text-gray-900">
            Bid #{data.bidId}
          </h1>
          <p className="text-sm text-gray-600">{data.orderDate}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-4">
                User Information
              </h2>
              <div className="space-y-3">
                <p className="text-gray-900">
                  <span className="font-medium">Name:</span> {data.userName}
                </p>
                <p className="text-gray-900">
                  <span className="font-medium">Phone Number:</span> {data.userPhone}
                </p>
                <p className="text-gray-900">
                  <span className="font-medium">User ID:</span> {data.userId}
                </p>
                <p className="text-gray-900">
                  <span className="font-medium">Email:</span> {data.userEmail}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-4">
                Product Info
              </h2>
              <div className="space-y-3">
                <p className="text-gray-900">
                  <span className="font-medium">Name:</span> {data.productName}
                </p>
                <p className="text-gray-900">
                  <span className="font-medium">Category:</span> {data.category}
                </p>
                <p className="text-gray-900">
                  <span className="font-medium">Product ID:</span> {data.productId}
                </p>
                <p className="text-gray-900">
                  <span className="font-medium">Bid ID:</span> {data.bidId}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Bidding Details
            </h2>

            <div className="space-y-6">
              <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                <div>
                  <p className="text-gray-900 font-medium mb-1">
                    {data.productName}
                  </p>
                  <p className="text-sm text-gray-500">Great Deal</p>
                </div>
                <p className="text-gray-900 font-semibold">
                  ${data.mainItemPrice}
                </p>
              </div>

              {data.additionalItem && (
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-gray-900 font-medium mb-1">
                      {data.additionalItem}
                    </p>
                    <p className="text-sm text-gray-500">Great Deal</p>
                  </div>
                  <p className="text-gray-900 font-semibold">
                    {data.additionalItemPrice}
                  </p>
                </div>
              )}

              <div className="pt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700 font-medium">Bid</p>
                  <p className="text-gray-900">{data.bidCount}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Comment</p>
                  <p className="text-gray-900">{data.comment}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-12">
            <button
              onClick={handleReject}
              className="px-8 py-3 text-sm font-medium text-black rounded"
              style={{
                backgroundColor: '#FFFCEB',
                border: '2px solid #FFE135'
              }}
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-8 py-3 text-sm font-medium text-black rounded"
              style={{ backgroundColor: '#FFE135' }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidDetail;
