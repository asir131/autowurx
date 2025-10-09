"use client"
import React, { useState } from 'react';

interface PaperworkItem {
  id: number;
  title: string;
  pdfUrl: string;
}

const paperworkItems: PaperworkItem[] = [
  { id: 1, title: "Bill Of Sale", pdfUrl: "/pdf.pdf" },
  { id: 2, title: "Application For Certif ...", pdfUrl: "/pdf.pdf" },
  { id: 3, title: "Notice Of Exclusive O ...", pdfUrl: "/pdf.pdf" },
  { id: 4, title: "Bill Of Sale", pdfUrl: "/pdf.pdf" },
  { id: 5, title: "Verification Of Resid ...", pdfUrl: "/pdf.pdf" },
  { id: 6, title: "Restricted Power O ...", pdfUrl: "/pdf.pdf" },
  { id: 7, title: "Odometer Disclosu ...", pdfUrl: "/pdf.pdf" }
];

const marketingPrintables: PaperworkItem[] = [
  { id: 8, title: "Buyer's Guide", pdfUrl: "/pdf.pdf" },
  { id: 9, title: "Window Sticker", pdfUrl: "/pdf.pdf" },
  { id: 10, title: "Mirror Hanger", pdfUrl: "/pdf.pdf" },
  { id: 11, title: "Vehicle Ad", pdfUrl: "/pdf.pdf" }
];

const salesWorksheets: PaperworkItem[] = [
  { id: 12, title: "Loan Application", pdfUrl: "/pdf.pdf" },
  { id: 13, title: "Used Vehicle Inspe ...", pdfUrl: "/pdf.pdf" },
  { id: 14, title: "Trade-In Negotiatio ...", pdfUrl: "/pdf.pdf" }
];

export default function Paperwork() {
  const [selectedPdf, setSelectedPdf] = useState<PaperworkItem | null>(null);
  const [selectedState, setSelectedState] = useState<string>("Maryland");

  const openPdfViewer = (item: PaperworkItem) => {
    setSelectedPdf(item);
  };

  const closePdfViewer = () => {
    setSelectedPdf(null);
  };

  const renderPdfGrid = (items: PaperworkItem[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {items.map((item) => (
        <div 
          key={item.id}
          onClick={() => openPdfViewer(item)}
          className="cursor-pointer group"
        >
          {/* PDF Thumbnail Container */}
          <div className="rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow h-[200px] sm:h-[250px] relative border" style={{ borderColor: '#E8E8E8' }}>
            <div className="absolute bg-white pb-10 overflow-hidden" style={{ top: '-20px', left: '-20px', right: '-20px', bottom: '0' }}>
              <iframe
                src={`${item.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className="pointer-events-none"
                title={item.title}
                scrolling="no"
                style={{ 
                  width: 'calc(100% + 20px)',
                  height: 'calc(100% + 40px)',
                  overflow: 'hidden',
                  pointerEvents: 'none',
                  border: 'none'
                }}
              />
            </div>
            
            {/* Title on bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 z-10 text-sm sm:text-base font-medium text-gray-800 text-center" style={{ backgroundColor: '#F4F4F4' }}>
              {item.title}
            </div>
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center pointer-events-none">
              <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium">
                View Document
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body::-webkit-scrollbar,
        html::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        body, html, * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
      `}} />
      <div className="min-h-screen p-2 sm:p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-8 px-2 sm:px-5">
          <div
            onClick={() => window.history.back()}
            className="flex items-center gap-1 sm:gap-2 text-lg sm:text-[28px] font-semibold cursor-pointer hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 sm:w-[35px] sm:h-[35px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Paperwork</span>
            <span className="sm:hidden text-base">Paperwork</span>
          </div>
        </div>

        {/* All Sections Combined */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mx-2 sm:mx-5">
          {/* Available State Paperwork Section */}
          <div className="flex items-center justify-between mb-6 border-b border-b-[#E8E8E8] pb-2">
            <h2 className="text-sm md:text-2xl md:font-semibold">Available State Paperwork</h2>
            <select 
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Maryland</option>
              <option>Virginia</option>
              <option>Pennsylvania</option>
            </select>
          </div>
          {renderPdfGrid(paperworkItems)}

          {/* Marketing Printables Section */}
          <div className="mt-8 mb-6 border-b border-b-[#E8E8E8] pb-2">
            <h2 className="text-sm md:text-2xl md:font-semibold">Marketing Printables</h2>
          </div>
          {renderPdfGrid(marketingPrintables)}

          {/* Sales Worksheets Section */}
          <div className="mt-8 mb-6 border-b border-b-[#E8E8E8] pb-2">
            <h2 className="text-sm md:text-2xl md:font-semibold">Sales Worksheets</h2>
          </div>
          {renderPdfGrid(salesWorksheets)}
          <div className='bg-[#fffceb] rounded-lg text-sm p-5 mt-10'>
            These forms are provided solely for the convenience of dealers. They are not intended to provide legal information or advice and are made available to you on the understanding and express condition that Carsforsale.com, Inc., its subsidiaries, and its affiliates (collectively, "Carsforsale.com®") is not providing you with legal services or advice. In order to ensure compliance with applicable laws, you should consult legal counsel about any form or transaction involving a form before proceeding with using the form or completing the transaction. You acknowledge and agree: (1) Carsforsale.com® is not providing you legal or other professional advice or services; (2) Carsforsale.com® makes no warranties or representations about the accuracy or legal validity of these forms; (3) your use of these forms are entirely at your own risk; (4) Carsforsale.com® disclaims any and all liability associated with your use of these forms; and (5) you will hold harmless and indemnify Carsforsale.com® for any liability associated with your use of these forms. You are also affirming that you have read and consent to our <span className='font-semibold border-b border-black'>Terms and Conditions of Use.</span>
          </div>
        </div>

        {/* Full Screen PDF Viewer Modal */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
            {/* Modal Header */}
            <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold">{selectedPdf.title}</h3>
              <button
                onClick={closePdfViewer}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close viewer"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 bg-gray-800">
              <iframe
                src={selectedPdf.pdfUrl}
                className="w-full h-full"
                title={selectedPdf.title}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}