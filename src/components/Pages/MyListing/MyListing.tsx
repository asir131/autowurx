"use client";
import React, { useState } from "react";
import Listing from "@/assets/car/listingCar.jpg";
import Image from "next/image";
import Img from "@/assets/image.png";

const MyListings = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBids, setShowBids] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showAuctionModal, setShowAuctionModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal
  const [showRemoveModal, setShowRemoveModal] = useState(false); // State for removal modal
  const [activeAuction, setActiveAuction] = useState(true);
  const [relisted,setRelisted] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setShowBids(false);
  };

  const toggleBids = () => {
    setShowBids(!showBids);
    setShowDetails(false);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSaveChanges = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
    setShowSuccessModal(true);
  };

  const openRemoveModal = () => setShowRemoveModal(true);
  const closeRemoveModal = () => setShowRemoveModal(false);

  const handleRemoveVehicle = () => {
    // Simulate vehicle removal logic here (e.g., API call)
    closeRemoveModal();
    // Optionally reset states or update UI after removal
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="md:flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Listings</h2>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
            + Add Vehicle
          </button>
        </div>

        {/* Listings Section */}
        <div className="flex mt-2 items-center space-x-3">
          <button className="bg-gray-900 text-white py-1 rounded-full text-sm px-3">
            2019 Acura LX Premium
          </button>
          <p className="text-sm text-gray-500 mt-1">2020 Honda Civic LX</p>
        </div>

        <div className="md:grid grid-cols-2 gap-6">
          {/* Listing Card */}
          <div className="rounded-lg pt-5">
            <Image
              src={Listing}
              alt="Car"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Details Card */}
          <div className="max-w-md h-[350px] mx-auto bg-white rounded-lg shadow-md ">
            <div className="flex flex-col items-center p-6">
              <div className=" w-full">
                <h2 className="text-xl text-start font-semibold text-gray-900">
                  Complete your car details
                </h2>
                <p className="text-gray-600 mt-1">
                  Your car&apos;s profile is 60% complete.
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <div className="flex gap-2">
                <div className="w-40">
                  <Image src={Img} width={100} height={100} alt="" />
                </div>
                <div className="text-start">
                  <p className="text-gray-600">
                    You&apos;ve uploaded only one photo.
                  </p>
                  <p className="text-gray-600">
                    Add 3 or more photos to increase your chances of getting
                    bids
                  </p>
                </div>
              </div>
              <div className="bg-full flex justify-center ">
                <button className="mt-4 flex items-center  hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border   transition">
                  <span className="mr-2 ">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 3.57422V2.57422H22V3.57422H21ZM16.7071 9.28133C16.3166 9.67185 15.6834 9.67185 15.2929 9.28133C14.9024 8.8908 14.9024 8.25764 15.2929 7.86711L16.7071 9.28133ZM21 8.57422H20V3.57422H21H22V8.57422H21ZM21 3.57422V4.57422H16V3.57422V2.57422H21V3.57422ZM21 3.57422L21.7071 4.28133L16.7071 9.28133L16 8.57422L15.2929 7.86711L20.2929 2.86711L21 3.57422Z"
                        fill="#2B2B2B"
                      />
                      <path
                        d="M12 3.57422H7C4.79086 3.57422 3 5.36508 3 7.57422V17.5742C3 19.7834 4.79086 21.5742 7 21.5742H17C19.2091 21.5742 21 19.7834 21 17.5742V12.5742"
                        stroke="#2B2B2B"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.5 11.0742L10.7966 15.8358C11.4501 16.7798 12.7625 16.9809 13.6688 16.2761L15.2721 15.0291C15.9944 14.4674 17.0056 14.4674 17.7279 15.0291L21 17.574"
                        stroke="#2B2B2B"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  <span>Add more photos</span>
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-between bg-yellow-50 w-full h-24  rounded-lg p-3 text-sm text-gray-700">
              <div className="flex flex-col justify-start items-start gap-5">
                <span className="opacity-60 font-semibold">Listing Status</span>
                <span className="flex items-center">


                  {activeAuction ? (
                    <span className="mr-2 font-semibold text-xl">
                      0d 9h 59m 1s
                    </span>
                  ) : (
                    <span className="mr-2 font-semibold text-xl flex items-center gap-2">
                      Not on Auction
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.5984 12.0741C21.5984 17.3761 17.3004 21.6741 11.9984 21.6741C6.6965 21.6741 2.39844 17.3761 2.39844 12.0741C2.39844 6.77219 6.6965 2.47412 11.9984 2.47412C17.3004 2.47412 21.5984 6.77219 21.5984 12.0741ZM13.1984 7.27412C13.1984 7.93686 12.6612 8.47412 11.9984 8.47412C11.3357 8.47412 10.7984 7.93686 10.7984 7.27412C10.7984 6.61138 11.3357 6.07412 11.9984 6.07412C12.6612 6.07412 13.1984 6.61138 13.1984 7.27412ZM10.7984 10.8741C10.1357 10.8741 9.59844 11.4114 9.59844 12.0741C9.59844 12.7369 10.1357 13.2741 10.7984 13.2741V16.8741C10.7984 17.5369 11.3357 18.0741 11.9984 18.0741H13.1984C13.8612 18.0741 14.3984 17.5369 14.3984 16.8741C14.3984 16.2114 13.8612 15.6741 13.1984 15.6741V12.0741C13.1984 11.4114 12.6612 10.8741 11.9984 10.8741H10.7984Z"
                          fill="#2B2B2B"
                        />
                      </svg>
                    </span>
                  )}
                </span>
              </div>
              {activeAuction ? (
                <svg
                  onClick={() => setShowAuctionModal(true)}
                  width="48"
                  className="mt-3"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 24.5742C42 34.5153 33.9411 42.5742 24 42.5742C14.0589 42.5742 6 34.5153 6 24.5742C6 14.6331 14.0589 6.57422 24 6.57422C33.9411 6.57422 42 14.6331 42 24.5742Z"
                    stroke="#34C759"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.6693 20.5742V29.9076C30.6693 30.438 30.4586 30.9467 30.0835 31.3218C29.7084 31.6968 29.1997 31.9076 28.6693 31.9076H19.3359C18.8055 31.9076 18.2968 31.6968 17.9217 31.3218C17.5467 30.9467 17.3359 30.438 17.3359 29.9076V20.5742C17.3359 20.0438 17.5467 19.5351 17.9217 19.16C18.2968 18.7849 18.8055 18.5742 19.3359 18.5742H28.6693C29.1997 18.5742 29.7084 18.7849 30.0835 19.16C30.4586 19.5351 30.6693 20.0438 30.6693 20.5742Z"
                    fill="#2B2B2B"
                  />
                </svg>
              ) : (
                <div onClick={()=>setRelisted(true)} className="flex items-center bg-[#FFFFFF] px-2 h-10 mt-3 rounded-lg border hover:bg-slate-100 cursor-pointer">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12.5742"
                      r="7"
                      stroke="#2B2B2B"
                      strokeWidth="2"
                    />
                    <path
                      d="M5.96472 3.71052C5.2865 3.89224 4.66807 4.2493 4.17157 4.74579C3.67508 5.24228 3.31803 5.86072 3.1363 6.53894"
                      stroke="#2B2B2B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.0353 3.71052C18.7135 3.89224 19.3319 4.2493 19.8284 4.74579C20.3249 5.24228 20.682 5.86072 20.8637 6.53894"
                      stroke="#2B2B2B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 8.57422V12.3242C12 12.4623 12.1119 12.5742 12.25 12.5742H15"
                      stroke="#2B2B2B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  List Again
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-24 md:mt-4 flex space-x-4 border-b">
          <a
            href="#"
            className={`${
              showBids ? "text-yellow-500 font-semibold" : "text-gray-600"
            } hover:underline`}
            onClick={(e) => {
              e.preventDefault();
              toggleBids();
            }}
          >
            Bids by dealerships
          </a>
          <a
            href="#"
            className={`${
              showDetails ? "text-yellow-500 font-semibold" : "text-gray-600"
            } hover:underline`}
            onClick={(e) => {
              e.preventDefault();
              toggleDetails();
            }}
          >
            Details
          </a>
        </div>

        {/* Additional Table/Details Section */}
        {showDetails && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-3xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              2020 Honda Civic LX
            </h3>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border text-left">Attribute</th>
                  <th className="px-4 py-2 border text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">VIN</td>
                  <td className="px-4 py-2 border">5TELU24N87Z238956</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Mileage</td>
                  <td className="px-4 py-2 border">54,456</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Asking Price</td>
                  <td className="px-4 py-2 border">---</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Seller Notes</td>
                  <td className="px-4 py-2 border">---</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  Listing Status
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    ! Not on Auction
                  </span>
                  <span className="text-sm text-gray-600">
                    ! Not on Auction
                  </span>
                  <span className="text-sm text-gray-600">
                    ! Not on Auction
                  </span>
                  <span className="text-sm text-gray-600">
                    ! Not on Auction
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button className="text-sm text-blue-500" onClick={openModal}>
                Edit Details
              </button>
              <button
                className="text-sm text-red-500 ml-4"
                onClick={openRemoveModal}
              >
                Remove car from account
              </button>
            </div>
          </div>
        )}

        {/* Bids Section */}
        {showBids && (
          <div className="mt-6 md:mt-20 text-center pb-10">
            <div className="inline-block  p-4 rounded-full">
              <svg
                width="96"
                height="97"
                viewBox="0 0 96 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.7002 42.7719L9.7002 36.7719C10.8123 35.6608 12.2455 34.9272 13.7973 34.6749C15.349 34.4225 16.9408 34.6642 18.3477 35.3657L35.2977 18.4157C34.5957 17.0091 34.3535 15.4176 34.6051 13.8659C34.8568 12.3142 35.5897 10.8807 36.7002 9.76816L42.7002 3.76816C44.1066 2.36213 46.014 1.57227 48.0027 1.57227C49.9914 1.57227 51.8987 2.36213 53.3052 3.76816L77.3052 27.7682C78.7112 29.1746 79.5011 31.0819 79.5011 33.0707C79.5011 35.0594 78.7112 36.9667 77.3052 38.3732L71.3052 44.3732C70.1965 45.4819 68.7682 46.2153 67.2212 46.4702C65.6741 46.7252 64.086 46.4888 62.6802 45.7944L84.9927 68.0919C87.2434 70.3426 88.5078 73.3952 88.5078 76.5782C88.5078 79.7611 87.2434 82.8137 84.9927 85.0644C82.742 87.3151 79.6894 88.5795 76.5064 88.5795C73.3235 88.5795 70.2709 87.3151 68.0202 85.0644L45.7527 62.7782C46.4409 64.1821 46.6732 65.766 46.4171 67.3084C46.1609 68.8508 45.4291 70.2746 44.3239 71.3807L38.3239 77.3807C37.6275 78.0774 36.8005 78.6301 35.8904 79.0072C34.9803 79.3843 34.0047 79.5784 33.0196 79.5784C32.0344 79.5784 31.0589 79.3843 30.1487 79.0072C29.2386 78.6301 28.4117 78.0774 27.7152 77.3807L3.71519 53.3807C3.01842 52.6842 2.46571 51.8573 2.08861 50.9471C1.71151 50.037 1.51742 49.0615 1.51742 48.0763C1.51742 47.0911 1.71151 46.1156 2.08861 45.2055C2.46571 44.2953 3.01842 43.4684 3.71519 42.7719H3.7002ZM66.0027 36.9519L69.8877 33.0744L48.0027 11.1932L44.1252 15.0744L66.0027 36.9519ZM74.3877 78.7007C74.9506 79.2631 75.7139 79.5788 76.5096 79.5785C77.3054 79.5781 78.0684 79.2617 78.6308 78.6988C79.1932 78.1359 79.509 77.3726 79.5087 76.5768C79.5083 75.7811 79.1919 75.0181 78.6289 74.4557L56.3089 52.1357L52.0677 56.3807L74.3877 78.7007ZM39.6252 56.0919L56.0202 39.6969L41.3952 25.0719L25.0002 41.4669L39.6252 56.0919ZM33.0064 69.9669L36.8839 66.0744L15.0027 44.1969L11.1252 48.0744L33.0064 69.9669Z"
                  fill="#FFE135"
                />
              </svg>
            </div>
            <p className="text-gray-600 mt-2 font-semibold text-xl my-5">
              No Bids from dealers yet
            </p>
            <p className="text-sm text-gray-500 opacity-55 mb-5 ">
              Dealers haven&apos;t placed any bids on your <br /> car yet. Check
              back later or explore ways <br /> to attract more offers!
            </p>

            <button className="mt-2 border  text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              <div className="flex gap-2 ">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11181_79239)">
                    <path
                      d="M22.3212 13.5005C21.9972 13.2523 21.6204 13.0819 21.22 13.0026C20.8197 12.9232 20.4064 12.9371 20.0122 13.043L16.625 13.8173C16.625 13.778 16.625 13.7386 16.625 13.6992C16.625 12.9036 16.3089 12.1405 15.7463 11.5779C15.1837 11.0153 14.4206 10.6992 13.625 10.6992H8.93188C8.4886 10.698 8.04949 10.7847 7.63994 10.9543C7.2304 11.1239 6.85856 11.3731 6.54594 11.6873L4.53125 13.6992H2.375C1.87772 13.6992 1.40081 13.8968 1.04917 14.2484C0.697544 14.6 0.5 15.0769 0.5 15.5742L0.5 19.3242C0.5 19.8215 0.697544 20.2984 1.04917 20.65C1.40081 21.0017 1.87772 21.1992 2.375 21.1992H11.75C11.842 21.1993 11.9336 21.1879 12.0228 21.1655L18.0228 19.6655C18.0802 19.6514 18.1363 19.6326 18.1906 19.6092L21.83 18.0586C21.8516 18.0502 21.8722 18.0408 21.8928 18.0305C22.2998 17.8268 22.6483 17.523 22.9056 17.1475C23.1628 16.7721 23.3202 16.3373 23.363 15.8843C23.4059 15.4312 23.3328 14.9746 23.1505 14.5576C22.9682 14.1406 22.6829 13.7768 22.3212 13.5005ZM3.875 18.9492H2.75V15.9492H3.875V18.9492ZM20.9075 16.0064L17.3909 17.5064L11.6112 18.9492H6.125V15.293L8.13688 13.2811C8.24087 13.176 8.36468 13.0925 8.50114 13.0355C8.6376 12.9786 8.784 12.9492 8.93188 12.9492H13.625C13.8239 12.9492 14.0147 13.0282 14.1553 13.1689C14.296 13.3095 14.375 13.5003 14.375 13.6992C14.375 13.8981 14.296 14.0889 14.1553 14.2295C14.0147 14.3702 13.8239 14.4492 13.625 14.4492H11C10.7016 14.4492 10.4155 14.5677 10.2045 14.7787C9.99353 14.9897 9.875 15.2759 9.875 15.5742C9.875 15.8726 9.99353 16.1587 10.2045 16.3697C10.4155 16.5807 10.7016 16.6992 11 16.6992H14C14.0848 16.6992 14.1694 16.6898 14.2522 16.6711L20.5334 15.2264L20.5775 15.2152C20.6415 15.1977 20.7087 15.1953 20.7739 15.208C20.839 15.2208 20.9003 15.2483 20.9531 15.2886C21.0058 15.3288 21.0486 15.3807 21.0781 15.4401C21.1076 15.4996 21.123 15.565 21.1231 15.6314C21.1236 15.7074 21.1039 15.7822 21.066 15.848C21.0281 15.9139 20.9734 15.9686 20.9075 16.0064ZM15.875 9.94922C16.0374 9.94903 16.1996 9.93838 16.3606 9.91734C16.695 10.51 17.1843 11.0005 17.7761 11.3363C18.3679 11.672 19.04 11.8405 19.7202 11.8235C20.4004 11.8065 21.0632 11.6048 21.6376 11.2399C22.2119 10.875 22.6762 10.3607 22.9805 9.75217C23.2849 9.1436 23.418 8.46368 23.3655 7.78526C23.313 7.10684 23.0769 6.4555 22.6824 5.90102C22.288 5.34654 21.7502 4.90983 21.1265 4.63767C20.5029 4.36552 19.8169 4.26818 19.1422 4.35609C18.8179 3.78152 18.3478 3.30268 17.7793 2.96789C17.2108 2.6331 16.564 2.45423 15.9043 2.44932C15.2445 2.44442 14.5952 2.61366 14.0218 2.93996C13.4483 3.26625 12.9711 3.73806 12.6384 4.30775C12.3056 4.87743 12.129 5.52483 12.1264 6.18458C12.1239 6.84434 12.2954 7.49309 12.6237 8.06536C12.952 8.63762 13.4255 9.11314 13.9964 9.44391C14.5672 9.77467 15.2152 9.94897 15.875 9.94922ZM19.625 6.57422C19.9217 6.57422 20.2117 6.66219 20.4584 6.82701C20.705 6.99184 20.8973 7.2261 21.0108 7.50019C21.1244 7.77428 21.1541 8.07588 21.0962 8.36685C21.0383 8.65783 20.8954 8.9251 20.6857 9.13488C20.4759 9.34466 20.2086 9.48752 19.9176 9.5454C19.6267 9.60327 19.3251 9.57357 19.051 9.46004C18.7769 9.34651 18.5426 9.15425 18.3778 8.90757C18.213 8.6609 18.125 8.37089 18.125 8.07422C18.125 7.67639 18.283 7.29486 18.5643 7.01356C18.8456 6.73225 19.2272 6.57422 19.625 6.57422ZM15.875 4.69922C16.1115 4.69912 16.3447 4.75495 16.5555 4.86215C16.7664 4.96936 16.9489 5.12491 17.0881 5.31609C16.4109 5.93684 15.9857 6.78513 15.8937 7.69922H15.875C15.4772 7.69922 15.0956 7.54118 14.8143 7.25988C14.533 6.97857 14.375 6.59704 14.375 6.19922C14.375 5.80139 14.533 5.41986 14.8143 5.13856C15.0956 4.85725 15.4772 4.69922 15.875 4.69922Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11181_79239">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5 0.574219)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-semibold">Get Tips &amp; Tricks</span>
              </div>
            </button>
          </div>
        )}

        {/* Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Vehicle Details</h3>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleSaveChanges}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Mileage
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    defaultValue="12,500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    What is the condition of the vehicle?
                  </label>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="condition"
                        className="mr-2"
                        defaultChecked
                      />
                      <span>
                        Excellent (e.g., no scratches or dents, runs perfectly,
                        and has a clean history (e.g., no accidents))
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="condition" className="mr-2" />
                      <span>
                        Good (e.g., minor cosmetic wear (e.g., light scratches,
                        rust, nicks) and no major mechanical issues)
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="condition" className="mr-2" />
                      <span>
                        Fair (e.g., some visible damage (e.g., dents or fading
                        paint) or minor mechanical issues that don’t affect
                        drivability)
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="condition" className="mr-2" />
                      <span>
                        Poor (e.g., significant cosmetic damage (e.g., rust,
                        large dents) or major mechanical problems (e.g., engine
                        issues))
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Description for potential buyers
                  </label>
                  <textarea className="mt-1 block w-full border rounded-md shadow-sm" />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 14a1 1 0 100 2 1 1 0 000-2zm-5-7a1 1 0 011-1h1a1 1 0 110 2H6a1 1 0 01-1-1zm9 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-5-7a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm0 12a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM6 8a1 1 0 011-1h1a1 1 0 110 2H6a1 1 0 01-1-1zm9 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Vehicle relisted successfully!
              </h3>
              <p className="text-gray-600 mt-2">
                Your car has been successfully relisted for auction.
              </p>
              <p className="text-gray-600">Keep an eye out for new bids!</p>
              <button
                className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                onClick={() => setShowSuccessModal(false)}
              >
                Okey
              </button>
            </div>
          </div>
        )}

        {/* Auction Modal */}
        {showAuctionModal && (
          <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border border-[#FFE135]  rounded-lg shadow-md p-6 max-w-md w-80 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  width="96"
                  height="97"
                  viewBox="0 0 96 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.3">
                    <path
                      d="M3.7002 42.7719L9.7002 36.7719C10.8123 35.6608 12.2455 34.9272 13.7973 34.6749C15.349 34.4225 16.9408 34.6642 18.3477 35.3657L35.2977 18.4157C34.5957 17.0091 34.3535 15.4176 34.6051 13.8659C34.8568 12.3142 35.5897 10.8807 36.7002 9.76816L42.7002 3.76816C44.1066 2.36213 46.014 1.57227 48.0027 1.57227C49.9914 1.57227 51.8987 2.36213 53.3052 3.76816L77.3052 27.7682C78.7112 29.1746 79.5011 31.0819 79.5011 33.0707C79.5011 35.0594 78.7112 36.9667 77.3052 38.3732L71.3052 44.3732C70.1965 45.4819 68.7682 46.2153 67.2212 46.4702C65.6741 46.7252 64.086 46.4888 62.6802 45.7944L84.9927 68.0919C87.2434 70.3426 88.5078 73.3952 88.5078 76.5782C88.5078 79.7611 87.2434 82.8137 84.9927 85.0644C82.742 87.3151 79.6894 88.5795 76.5064 88.5795C73.3235 88.5795 70.2709 87.3151 68.0202 85.0644L45.7527 62.7782C46.4409 64.1821 46.6732 65.766 46.4171 67.3084C46.1609 68.8508 45.4291 70.2746 44.3239 71.3807L38.3239 77.3807C37.6275 78.0774 36.8005 78.6301 35.8904 79.0072C34.9803 79.3843 34.0047 79.5784 33.0196 79.5784C32.0344 79.5784 31.0589 79.3843 30.1487 79.0072C29.2386 78.6301 28.4117 78.0774 27.7152 77.3807L3.71519 53.3807C3.01842 52.6842 2.46571 51.8573 2.08861 50.9471C1.71151 50.037 1.51742 49.0615 1.51742 48.0763C1.51742 47.0911 1.71151 46.1156 2.08861 45.2055C2.46571 44.2953 3.01842 43.4684 3.71519 42.7719H3.7002ZM66.0027 36.9519L69.8877 33.0744L48.0027 11.1932L44.1252 15.0744L66.0027 36.9519ZM74.3877 78.7007C74.9506 79.2631 75.7139 79.5788 76.5096 79.5785C77.3054 79.5781 78.0684 79.2617 78.6308 78.6988C79.1932 78.1359 79.509 77.3726 79.5087 76.5768C79.5083 75.7811 79.1919 75.0181 78.6289 74.4557L56.3089 52.1357L52.0677 56.3807L74.3877 78.7007ZM39.6252 56.0919L56.0202 39.6969L41.3952 25.0719L25.0002 41.4669L39.6252 56.0919ZM33.0064 69.9669L36.8839 66.0744L15.0027 44.1969L11.1252 48.0744L33.0064 69.9669Z"
                      fill="#FFE135"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Are you sure you want to stop the auction?
              </h3>
              <p className="text-gray-600 mt-2 text-xs">
                This will remove your vehicle from the active auction and clear
                our any existing bids from dealerships. You can always put this
                vehicle back on auction later.
              </p>

              <button
                className="mt-4 px-6 py-2 hover:bg-gray-100 text-gray-700 rounded-lg border w-full "
                onClick={() => {setActiveAuction(false);setShowAuctionModal(false)}}
              >
                Yes, Stop Auction
              </button>
              <button
                className="mt-4 px-6 py-2 hover:bg-gray-100 text-gray-700 rounded-lg border w-full "
                onClick={() => setShowAuctionModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Relisted Modal */}
        {relisted && (
          <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border border-[#FFE135]  rounded-lg shadow-md p-6 max-w-md w-88 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  width="96"
                  height="97"
                  viewBox="0 0 96 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.3">
                    <path
                      d="M3.7002 42.7719L9.7002 36.7719C10.8123 35.6608 12.2455 34.9272 13.7973 34.6749C15.349 34.4225 16.9408 34.6642 18.3477 35.3657L35.2977 18.4157C34.5957 17.0091 34.3535 15.4176 34.6051 13.8659C34.8568 12.3142 35.5897 10.8807 36.7002 9.76816L42.7002 3.76816C44.1066 2.36213 46.014 1.57227 48.0027 1.57227C49.9914 1.57227 51.8987 2.36213 53.3052 3.76816L77.3052 27.7682C78.7112 29.1746 79.5011 31.0819 79.5011 33.0707C79.5011 35.0594 78.7112 36.9667 77.3052 38.3732L71.3052 44.3732C70.1965 45.4819 68.7682 46.2153 67.2212 46.4702C65.6741 46.7252 64.086 46.4888 62.6802 45.7944L84.9927 68.0919C87.2434 70.3426 88.5078 73.3952 88.5078 76.5782C88.5078 79.7611 87.2434 82.8137 84.9927 85.0644C82.742 87.3151 79.6894 88.5795 76.5064 88.5795C73.3235 88.5795 70.2709 87.3151 68.0202 85.0644L45.7527 62.7782C46.4409 64.1821 46.6732 65.766 46.4171 67.3084C46.1609 68.8508 45.4291 70.2746 44.3239 71.3807L38.3239 77.3807C37.6275 78.0774 36.8005 78.6301 35.8904 79.0072C34.9803 79.3843 34.0047 79.5784 33.0196 79.5784C32.0344 79.5784 31.0589 79.3843 30.1487 79.0072C29.2386 78.6301 28.4117 78.0774 27.7152 77.3807L3.71519 53.3807C3.01842 52.6842 2.46571 51.8573 2.08861 50.9471C1.71151 50.037 1.51742 49.0615 1.51742 48.0763C1.51742 47.0911 1.71151 46.1156 2.08861 45.2055C2.46571 44.2953 3.01842 43.4684 3.71519 42.7719H3.7002ZM66.0027 36.9519L69.8877 33.0744L48.0027 11.1932L44.1252 15.0744L66.0027 36.9519ZM74.3877 78.7007C74.9506 79.2631 75.7139 79.5788 76.5096 79.5785C77.3054 79.5781 78.0684 79.2617 78.6308 78.6988C79.1932 78.1359 79.509 77.3726 79.5087 76.5768C79.5083 75.7811 79.1919 75.0181 78.6289 74.4557L56.3089 52.1357L52.0677 56.3807L74.3877 78.7007ZM39.6252 56.0919L56.0202 39.6969L41.3952 25.0719L25.0002 41.4669L39.6252 56.0919ZM33.0064 69.9669L36.8839 66.0744L15.0027 44.1969L11.1252 48.0744L33.0064 69.9669Z"
                      fill="#FFE135"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Vehicle relisted successfully!
              </h3>
              <p className="text-gray-600 mt-2 text-xs mx-10">
               Your car has been successfully relisted for auction. Keep an eye out for new bids!
              </p>

              <button
                className="mt-4 px-6 py-2 hover:bg-gray-100 text-gray-700 rounded-lg border w-full "
                onClick={() => {
  setActiveAuction(true);
  setRelisted(false);
}}
              >
                Okay
              </button>
              
            </div>
          </div>
        )}

        {/* Remove Modal */}
        {showRemoveModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full border border-yellow-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  Remove car from account
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeRemoveModal}
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                Remove this vehicle <strong>2019 Acura LX Premium</strong> from
                your Listings?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full"
                  onClick={closeRemoveModal}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  onClick={handleRemoveVehicle}
                >
                  Yes, remove vehicle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListings;
