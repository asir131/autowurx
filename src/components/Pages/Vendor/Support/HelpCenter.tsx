"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

const HelpCenter: React.FC = () => {
  
 
  return (
    <div>
      <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10">
        <div className="grid mb-8">
          <div
            className="flex items-center gap-2 text-lg sm:text-xl md:text-[28px] font-semibold cursor-pointer"
            onClick={() => window.history.back()}
          >
            <MdOutlineKeyboardArrowLeft size={35} />
            <span className="break-words">Help Center</span>
          </div>
        </div>

        <div className='bg-white p-3 rounded-lg border mb-6'>
          {/* Support Info Card */}
          <div className="bg-white rounded-lg border shadow-sm p-4 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              
              {/* Contact Us Section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.1667 14.7415H34.8333C36.8584 14.7415 38.5 16.3832 38.5 18.4082V29.4082C38.5 31.4332 36.8584 33.0749 34.8333 33.0749H31.1667V40.4082L23.8333 33.0749H16.5C15.4875 33.0749 14.5708 32.6645 13.9073 32.0009M13.9073 32.0009L20.1667 25.7415H27.5C29.525 25.7415 31.1667 24.0999 31.1667 22.0749V11.0749C31.1667 9.04983 29.525 7.4082 27.5 7.4082H9.16667C7.14162 7.4082 5.5 9.04983 5.5 11.0749V22.0749C5.5 24.0999 7.14162 25.7415 9.16667 25.7415H12.8333V33.0749L13.9073 32.0009Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600 text-sm mb-1">1-866-388-9778</p>
                  <p className="text-gray-600 text-sm">support@autowurx.com</p>
                </div>
              </div>

              {/* Support Hours Section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 14.7409V22.0742L27.5 27.5742M38.5 22.0742C38.5 31.1869 31.1127 38.5742 22 38.5742C12.8873 38.5742 5.5 31.1869 5.5 22.0742C5.5 12.9615 12.8873 5.57422 22 5.57422C31.1127 5.57422 38.5 12.9615 38.5 22.0742Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Hours</h3>
                  <p className="text-gray-600 text-sm mb-1">Monday-Friday 8:30 - 5:30 CST</p>
                  <p className="text-gray-600 text-sm">Saturday 9:00 - 3:00 CST</p>
                </div>
              </div>

              {/* Support Status Section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.3867 10.5911C30.9768 9.16705 29.2999 8.03509 27.452 7.26002C25.6041 6.48495 23.6214 6.08199 21.6175 6.07422H21.5011C17.4376 6.07422 13.5406 7.68844 10.6672 10.5618C7.79391 13.4351 6.17969 17.3322 6.17969 21.3956V29.6456C6.17969 30.5834 6.5522 31.4827 7.21527 32.1458C7.87835 32.8089 8.77767 33.1814 9.7154 33.1814H12.0725C13.0103 33.1814 13.9096 32.8089 14.5727 32.1458C15.2357 31.4827 15.6083 30.5834 15.6083 29.6456V23.7528C15.6083 22.8151 15.2357 21.9157 14.5727 21.2527C13.9096 20.5896 13.0103 20.2171 12.0725 20.2171H8.58987C8.81716 17.7597 9.7402 15.4179 11.2508 13.4664C12.7614 11.5148 14.797 10.0343 17.119 9.19827C19.441 8.36227 21.9532 8.20545 24.3612 8.7462C26.7691 9.28695 28.973 10.5029 30.7146 12.2514C32.8432 14.391 34.1526 17.2103 34.4138 20.2171H30.9297C29.992 20.2171 29.0926 20.5896 28.4296 21.2527C27.7665 21.9157 27.394 22.8151 27.394 23.7528V29.6456C27.394 30.5834 27.7665 31.4827 28.4296 32.1458C29.0926 32.8089 29.992 33.1814 30.9297 33.1814H34.4654C34.4654 34.1191 34.0929 35.0184 33.4298 35.6815C32.7667 36.3446 31.8674 36.7171 30.9297 36.7171H22.6797C22.3671 36.7171 22.0673 36.8412 21.8463 37.0623C21.6253 37.2833 21.5011 37.5831 21.5011 37.8956C21.5011 38.2082 21.6253 38.508 21.8463 38.729C22.0673 38.9501 22.3671 39.0742 22.6797 39.0742H30.9297C32.4926 39.0742 33.9914 38.4534 35.0966 37.3482C36.2017 36.2431 36.8225 34.7442 36.8225 33.1814V21.3956C36.8302 19.3914 36.4424 17.4054 35.6812 15.5514C34.92 13.6973 33.8004 12.0117 32.3867 10.5911ZM12.0725 22.5742C12.3851 22.5742 12.6849 22.6984 12.9059 22.9194C13.1269 23.1404 13.2511 23.4402 13.2511 23.7528V29.6456C13.2511 29.9582 13.1269 30.258 12.9059 30.479C12.6849 30.7001 12.3851 30.8242 12.0725 30.8242H9.7154C9.40283 30.8242 9.10305 30.7001 8.88203 30.479C8.661 30.258 8.53683 29.9582 8.53683 29.6456V22.5742H12.0725ZM30.9297 30.8242C30.6171 30.8242 30.3173 30.7001 30.0963 30.479C29.8753 30.258 29.7511 29.9582 29.7511 29.6456V23.7528C29.7511 23.4402 29.8753 23.1404 30.0963 22.9194C30.3173 22.6984 30.6171 22.5742 30.9297 22.5742H34.4654V30.8242H30.9297Z" fill="#606060"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Support is: In the Office</h3>
                  <p className="text-gray-600 text-sm">Assisted Support</p>
                </div>
              </div>

              

            </div>
            
          </div>
           {/* Need some help with? */}
          <div className="mt-8">
            <div className="grid border-b pb-4 md:flex justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Need some help with?</h2>
              <div className="relative w-full sm:w-auto">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search the Help Center"
                  className="w-full sm:w-80 px-4 py-2 pl-16 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Adding a Vehicle",
                  description: "Add a vehicle, select the + Add Inventory button located in the top right corner of the header in Account Center. The Add Inventory page is where you c...."
                },
                {
                  title: "Existing Inventory Page",
                  description: "All available vehicles can be found on the Existing Inventory page. This page also has options to assign location to This page also hasn location to ..."
                },
                {
                  title: "Editing A Vehicle",
                  description: "We offer many ways to enter specific information about your vehicle for your customer to see. To access this feature about your vehicle for  ...."
                },
                {
                  title: "Sold Inventory Page",
                  description: "The sold inventory page has printable, download and print report, sort and filter, statistics, vehicle listings, and ability to edit statistics, vehicle listings ..."
                },
                {
                  title: "Email Leads",
                  description: "Forms submitted from autowurx.com or the Dealer's Website come into Account Center as an email lead. To access this feature ...."
                },
                {
                  title: "All Contacts Page",
                  description: "The Contacts page has Import Contacts, Download List, Fix Duplicates, Add a Contact, Statistics, Filter and Sort, and a , and  , and a List , and a List ..."
                },
                {
                  title: "Leads Report",
                  description: "As you continue receiving and adding leads to the system, the Leads Report will provide you important info for ever you important info for every..."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 bg-[#F5F5F5] p-4 rounded-full border border-[#E7E8EC]">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9984 21.6746C17.3004 21.6746 21.5984 17.3765 21.5984 12.0746C21.5984 6.77268 17.3004 2.47461 11.9984 2.47461C6.6965 2.47461 2.39844 6.77268 2.39844 12.0746C2.39844 17.3765 6.6965 21.6746 11.9984 21.6746ZM16.447 11.2261L12.847 7.62608C12.3783 7.15745 11.6185 7.15745 11.1499 7.62608C10.6813 8.09471 10.6813 8.85451 11.1499 9.32314L12.7014 10.8746L8.39844 10.8746C7.7357 10.8746 7.19844 11.4119 7.19844 12.0746C7.19844 12.7374 7.7357 13.2746 8.39844 13.2746H12.7014L11.1499 14.8261C10.6813 15.2947 10.6813 16.0545 11.1499 16.5231C11.6185 16.9918 12.3783 16.9918 12.847 16.5231L16.447 12.9231C16.9156 12.4545 16.9156 11.6947 16.447 11.2261Z" fill="#606060"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default HelpCenter