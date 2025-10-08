import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface BidOfferPageProps {
  params: Promise<{ id: string }>;
}

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
  additionalItem: string;
  additionalItemPrice: string;
  bidCount: number;
  comment: string;
}

export default async function BidOfferPage({ params }: BidOfferPageProps) {
  const { id } = await params;

  const bidData: BidData = {
    bidNumber: '5444',
    orderDate: 'Order 21 April, 2025 14:30 GMT',
    userName: 'Abdur Khan',
    userPhone: '98390903',
    userId: 'USR-#888',
    userEmail: 'example@gmail.com',
    productName: '2020 Honda Civic LX',
    category: 'Sedan',
    productId: '434232',
    bidId: '434232',
    mainItemPrice: 1800,
    additionalItem: 'Tool box',
    additionalItemPrice: 'Free',
    bidCount: 5,
    comment: 'I would like to bid at 2007 Toyota Tacoma Base you have listed on Autowurx.com for $18,499 is still available.'
  };

  // Server Action for handling form submission
  async function handleOffer(formData: FormData) {
    'use server';
    const offer = formData.get('offer');
    const comments = formData.get('comments');
    
    console.log('Offer submitted:', { offer, comments });
    // Handle the offer submission logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/previous-page"
          className="inline-block px-6 py-2 text-sm font-medium rounded text-black mb-6"
          style={{ backgroundColor: '#FFE135' }}
        >
          Back
        </Link>

        <div className="flex justify-between items-start border-b-2 pb-5 mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Bid #{id || 'N/A'}
          </h1>
          <p className="text-sm text-gray-600">{bidData.orderDate}</p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
            <div>
              <h2 className="text-xs text-gray-500 mb-4">
                Your Information
              </h2>
              <div className="space-y-2">
                <p className="text-sm text-gray-900">
                  Name: {bidData.userName}
                </p>
                <p className="text-sm text-gray-900">
                  Phone Number: {bidData.userPhone}
                </p>
                <p className="text-sm text-gray-900">
                  User ID: {bidData.userId}
                </p>
                <p className="text-sm text-gray-900">
                  Email: {bidData.userEmail}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xs text-gray-500 mb-4">
                Product Info
              </h2>
              <div className="space-y-2">
                <p className="text-sm text-gray-900">
                  Name: {bidData.productName}
                </p>
                <p className="text-sm text-gray-900">
                  Category: {bidData.category}
                </p>
                <p className="text-sm text-gray-900">
                  Product ID: {bidData.productId}
                </p>
                <p className="text-sm text-gray-900">
                  Bid ID: {bidData.bidId}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-base font-semibold text-gray-900 mb-6">
              Bid Details
            </h2>

            <form action={handleOffer}>
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-900">Bid</p>
                  <p className="text-sm text-gray-900">{bidData.bidCount}</p>
                </div>

                <div className="flex justify-between items-center pb-5 border-b border-gray-200">
                  <p className="text-sm text-gray-900">Bid Price</p>
                  <p className="text-sm text-gray-900">${bidData.mainItemPrice}</p>
                </div>

                <div>
                  <label htmlFor="offer-input" className="block text-sm text-gray-900 mb-2">
                    Offer
                  </label>
                  <input
                    id="offer-input"
                    name="offer"
                    type="text"
                    placeholder="Offer $"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="comments-textarea" className="block text-sm text-gray-900 mb-2">
                    Comments
                  </label>
                  <textarea
                    id="comments-textarea"
                    name="comments"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    rows={3}
                    defaultValue={bidData.comment}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-16 py-2.5 text-sm font-medium text-black rounded"
                    style={{ backgroundColor: '#FFE135' }}
                  >
                    Offer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}