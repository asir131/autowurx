/* eslint-disable react/no-unescaped-entities */
import pic1 from "@/assets/Group.png";
import pic2 from "@/assets/setting.png";
import { Input } from "antd";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import HeroBannerSection1 from "../../../assets/HeroBannerSection/HeroBannerSection.png";

const HeroBannerSection = () => (
  <div>
    <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-[78vh] lg:h-[85vh]">
      {/* Background + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(78.97deg, rgba(7, 7, 7, 0) 0.94%, rgba(7, 7, 7, 0.55) 39.27%), url(${HeroBannerSection1.src})`,
          opacity: 1,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 text-center text-white">
        {/* Logo + tagline */}
        <h1 className=" text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl  w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%]  font-bold leading-tight sm:leading-snug md:leading-normal mb-2 sm:mb-2 md:mb-4">
          Find Your Next Car - with Confidence"
        </h1>

        {/* Search bar */}
        <div className="mt-4 sm:mt-6 md:mt-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          <Input
            prefix={
              <IoSearch
                size={20}
                className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 opacity-40 mr-5"
              />
            }
            type="text"
            placeholder="Search make, model, or type"
            className="flex-1 text-sm sm:text-base md:text-xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 lg:py-4 rounded-full bg-white border-white shadow-lg"
          />
        </div>

        {/* Feature cards */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-4 justify-items-center">
            {/* Sell your car */}
            <div className="bg-[#ECFCFA14] backdrop-blur-sm px-1 sm:px-2 md:px-3 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]">
              <Image
                src="https://i.ibb.co/YTpTBFRh/Vector.png"
                alt="Sell your car"
                width={40}
                height={40}
                className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 mx-auto mb-2 sm:mb-3"
              />
              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                  Sell your car
                </h1>
                <MdArrowForwardIos className="text-xs sm:text-sm md:text-base" />
              </div>
            </div>

            {/* Car Under 5K */}
            <div className="bg-[#ecfcfa3b] backdrop-blur-sm px-1 sm:px-2 md:px-3 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]">
              <Image
                src="https://i.ibb.co/27MJ1vfw/Vector-1.png"
                alt="Car Under 5K"
                width={40}
                height={40}
                className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 mx-auto mb-2 sm:mb-3"
              />
              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                  Cars Under 5K
                </h1>
                <MdArrowForwardIos className="text-xs sm:text-sm md:text-base" />
              </div>
            </div>

            {/* Hybrid */}
            <div className="bg-[#ECFCFA14] backdrop-blur-sm px-1 sm:px-2 md:px-3 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]">
              <Image
                src="https://i.ibb.co/6J1yZRcz/GasPump.png"
                alt="Hybrid"
                width={40}
                height={40}
                className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 mx-auto mb-2 sm:mb-3"
              />
              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                  Hybrid
                </h1>
                <MdArrowForwardIos className="text-xs sm:text-sm md:text-base" />
              </div>
            </div>

            {/* Electric */}
            <div className="bg-[#ECFCFA14] backdrop-blur-sm px-1 sm:px-2 md:px-3 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]">
              <Image
                src="https://i.ibb.co/s9qKYvVJ/Vector-2.png"
                alt="Electric"
                width={40}
                height={40}
                className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-8 mx-auto mb-2 sm:mb-3"
              />
              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                  Electric
                </h1>
                <MdArrowForwardIos className="text-xs sm:text-sm md:text-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-black text-white py-12">
      <div className="w-full container mx-auto  text-center">
        <h2 className="text-3xl font-semibold  mb-8">
          Autowurx gives you search tools, inspection resources. <br /> and
          expert buying guidance -- all in one place
        </h2>

        <div className="flex flex-col  relative md:flex-row justify-center items-center py-10">
          <Image
            src={pic2}
            alt="Left image"
            className="w-full md:w-72 h-80 mb-8 md:mb-0 -bottom-5 -left-2 md:absolute -z-1"
          />
          <div className=" max-w-7xl  bg-[#ECFCFA14] backdrop-blur-[4px] text-center p-5 py-10 rounded-2xl  ">
            <h3 className="text-2xl sm:text-2xl md:text-4xl font-semibold mb-8 sm:mb-12">
              How does{" "}
              <span className="bg-gradient-to-b from-[#FFFCEB] to-[#FFE135] text-transparent bg-clip-text">
                Autowurx
              </span>
              work?
            </h3>
            <div className="md:grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-12">
              <div className="items-center  ">
                <div className="flex justify-center items-center">
                  <div className="w-full h-auto">
                    <div
                      className="text-4xl sm:text-[144px] font-bold mb-4 leading-none inline-block"
                      style={{
                        background:
                          "radial-gradient(circle at center,  #FFE135 0%, #FFFCEB 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                    >
                      1
                    </div>
                  </div>

                  <div className="ml-2 text-start">
                    <h4 className="text-lg sm:text-md font-semibold mb-2">
                      Search
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">
                      Browse At Your Own Pace And Explore A Wide Selection Of
                      New And Used Vehicles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center sm:ml-3">
                <div className="flex justify-center items-center">
                  <div className="w-full h-auto">
                    <div
                      className="text-4xl sm:text-[144px] font-bold mb-4 leading-none inline-block"
                      style={{
                        background:
                          "radial-gradient(circle at center,  #FFE135 0%, #FFFCEB 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                    >
                      2
                    </div>
                  </div>
                  <div className="ml-2 text-start">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">
                      Inspect
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">
                      Review Detailed Specs, Photos, And Financing Options To
                      Find The Perfect Match For Your Needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="  flex-col items-center ">
                <div className="flex  justify-center items-center">
                  <div className="w-full h-auto">
                    <div
                      className="text-4xl sm:text-[144px] mr-5 md:mr-0 font-bold mb-4 leading-none inline-block"
                      style={{
                        background:
                          "radial-gradient(circle at center,  #FFE135 0%, #FFFCEB 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                    >
                      3
                    </div>
                  </div>
                  <div className="text-start">
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">
                      Buy
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">
                      Complete Your Purchase Online And Choose Pickup Or
                      Delivery (Used Cars Only) To Get On The Road.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center col-span-3 mt-8">
                <button className="bg-[#FFE135] text-black py-2 px-8 rounded-md text-lg sm:text-xl font-semibold">
                  Buy Online
                </button>
              </div>
            </div>
          </div>
          <Image
            src={pic1}
            alt="Right image"
            className="w-full md:w-72 h-80 mt-8 md:mt-0 md:absolute -bottom-6 -right-10"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeroBannerSection;
