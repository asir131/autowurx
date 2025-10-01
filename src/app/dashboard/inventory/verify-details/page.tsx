"use client";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Verify: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!contentRef.current) return;

    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content is longer than one page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('sale-document.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to print if PDF generation fails
      window.print();
    }
  };

  // Add print styles
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body * {
          visibility: hidden;
        }
        .print-content, .print-content * {
          visibility: visible;
        }
        .print-content {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {
          display: none !important;
        }
      }
    `;
    if (!document.head.querySelector('style[data-print-styles]')) {
      style.setAttribute('data-print-styles', 'true');
      document.head.appendChild(style);
    }
  }

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10">
      <div className="no-print mb-8 flex justify-between">
        <div
          className="flex items-center gap-2 text-lg sm:text-xl md:text-[28px] font-semibold cursor-pointer"
          onClick={() => window.history.back()}
        >
          <MdOutlineKeyboardArrowLeft size={35} />
          <span className="break-words">
            Back
          </span>
        </div>
         <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          <svg
            width="20"
            height="21"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-6 sm:h-6"
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

      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6 print-content">
        <div className="max-w-full mx-auto p-8 bg-white">
          <div className="mb-8">
            <div className="border-t border-gray-400 relative mb-8">
              <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-lg font-medium">
                Sale Details
              </h2>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">This vehicle was sold:</div>
                <div>Sold Retail</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Sale Price:</div>
                <div>4,990</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Sale Date:</div>
                <div>04/30/2025</div>
              </div>
            </div>
          </div>

          <div>
            <div className="border-t border-gray-400 relative mb-8">
              <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-lg font-medium">
                Purchaser Information
              </h2>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">First Name:</div>
                <div>Bm</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Last Name:</div>
                <div>Uthshob</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Email Address:</div>
                <div>bmutshob@gmail.com</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Phone:</div>
                <div>+1412452025</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Salesperson:</div>
                <div></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Street Address:</div>
                <div></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">City:</div>
                <div></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">State:</div>
                <div></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Zip Code:</div>
                <div></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Driver's License State:</div>
                <div></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right pr-4">Driver's License:</div>
                <div>04ftd30h2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto p-8 bg-white">
        {/* Vehicle Details Section */}
        <div className="mb-8">
          <div className="border-t border-gray-400 relative mb-8">
            <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-lg font-medium">
              Vehicle Details
            </h2>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Selling Price:</div>
              <div>$ 4,990</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Title Number:</div>
              <div>45202</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Mileage:</div>
              <div>180,004</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Date Mileage Read:</div>
              <div>04/30/2025</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">This vehicle was sold:</div>
              <div>Reflects the actual mileage</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Affidavit (when applicable):</div>
              <div></div>
            </div>
          </div>
        </div>

        {/* Costs & Discounts Section */}
        <div className="mb-8">
          <div className="border-t border-gray-400 relative mb-8">
            <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-lg font-medium">
              Costs & Discounts
            </h2>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Date:</div>
              <div>04/30/2025</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Cost Type:</div>
              <div>Bank Fees</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Amount:</div>
              <div>$ 4,990</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Add Cost/Discount:</div>
              <div></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Note:</div>
              <div></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-right pr-4">Total:</div>
              <div>$4,990.00</div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleDownload}
            className="px-6 py-2 text-sm font-medium text-black rounded hover:opacity-90 transition-opacity no-print"
            style={{ backgroundColor: '#FFE135' }}
          >
            Complete Sale & Print Paperwork
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;