"use client";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { useState } from "react";
import type React from "react";
import MyDetails from "@/components/Pages/Vendor/Settings/MyDetails";
import StoreDetails from "@/components/Pages/Vendor/Settings/StoreDetails";
import TermsAndCondition from "@/components/Pages/Vendor/Settings/TermsAndCondition";
import PrivacyAndPolicy from "@/components/Pages/Vendor/Settings/PrivacyAndPolicy";

const Setting: React.FC = () => {
  const [activeTab, setActiveTab] = useState("myDetails");

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10">
      <div className=" mb-8 ">
        <div
          className="flex items-center gap-2 text-lg sm:text-xl md:text-[28px] font-semibold cursor-pointer"
          onClick={() => window.history.back()}
        >
          <MdOutlineKeyboardArrowLeft size={35} />
          <span className="break-words">Setting</span>
        </div>

        <div className="md:mt-5 md:ml-5 grid grid-cols-2 md:flex gap-2 md:gap-5">
          <button
            className={`border text-xs md:text-base  border-[#FFE135]  md:px-5 py-2 rounded-full ${
              activeTab === "myDetails" ? "bg-[#FFE135]" : "bg-[#FFFCEB]"
            }`}
            onClick={() => setActiveTab("myDetails")}
          >
            My Details
          </button>
          <button
            className={`border text-xs md:text-base border-[#FFE135] md:px-5 py-2 rounded-full ${
              activeTab === "storeDetails" ? "bg-[#FFE135]" : "bg-[#FFFCEB]"
            }`}
            onClick={() => setActiveTab("storeDetails")}
          >
            Store Details
          </button>
          <button
            className={`border text-xs md:text-base border-[#FFE135] md:px-5 py-2 rounded-full ${
              activeTab === "termsCondition" ? "bg-[#FFE135]" : "bg-[#FFFCEB]"
            }`}
            onClick={() => setActiveTab("termsCondition")}
          >
            Terms of Condition
          </button>
          <button
            className={`border text-xs md:text-base border-[#FFE135] md:px-5 py-2 rounded-full ${
              activeTab === "privacyPolicy" ? "bg-[#FFE135]" : "bg-[#FFFCEB]"
            }`}
            onClick={() => setActiveTab("privacyPolicy")}
          >
            Privacy Policy
          </button>
        </div>
      </div>

      <div className="       ">
        <div className="     rounded-lg  md:p-4 sm:p-6">
          {activeTab == "myDetails" && <MyDetails />}
          {activeTab === "storeDetails" && <StoreDetails />}
          {activeTab === "termsCondition" && <TermsAndCondition/>}
          { activeTab === "privacyPolicy" && <PrivacyAndPolicy/>}
        </div>
      </div>
    </div>
  );
};

export default Setting;
