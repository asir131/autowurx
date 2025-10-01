"use client";
import logo from "@/assets/logo/logo.png";
import SignInModal from "@/utils/SingInModal";
import profile from "@/assets/logo/profile.png";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const navLink = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/new-cars",
    label: "New Cars",
  },
  {
    href: "/used-cars",
    label: "Used Cars",
  },
  {
    href: "/sell-car",
    label: "Sell Your Car",
  },
  {
    href: "/dellers",
    label: "Dealers",
  },
  {
    href: "/news",
    label: "News",
  },
];

const Navbar = () => {
  const user = {
    name: "John Doe",
    avatar: "/avatar.jpg",
    email: "john.doe@example.com",
  };

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropDown,setDropDown] = useState(false);
  const signInClicked = () => {
    setIsSignedIn(!isSignedIn);
    setIsModalOpen(true);
  };

  const showDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="xl:container mx-auto flex justify-between items-center py-2 sm:py-3 md:px-3 sm:px-4 lg:px-0 xl:pr-2">
        {/* Logo - Responsive sizing */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={logo}
            width={268}
            height={100}
            alt="logo"
            className="rounded-md w-24 sm:w-28 md:w-40 lg:w-48 xl:w-[288px] h-auto"
          />
        </Link>

        {/* Desktop Navigation Links - Better breakpoint management */}
        <ul className="hidden lg:flex items-center space-x-3 xl:space-x-8">
          {navLink.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm xl:text-base font-bold py-2 whitespace-nowrap transition-colors duration-200 
                  ${activeLink === link.href ? "text-[#FFE135]" : "text-white"} 
                  hover:text-yellow-400`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        {isSignedIn ? (
          <div className="relative">
            <div onClick={()=>setDropDown(!dropDown)}  className="w-12 mr-20">
              <Image src={profile} height={100} width={100} alt="" />
            </div>
            {
              dropDown && (
              <div className="bg-white absolute w-80 right-10 rounded-xl border border-[#FFE135] p-5 mt-1">
              <Link href="/my-listing" onClick={()=>setDropDown(!dropDown)} className="text-black font-medium text-lg flex px-2  gap-3 items-center hover:bg-[#FFF6C0] mb-2 cursor-pointer rounded-lg p-1">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 9.375H21.7313L19.2262 3.73875C19.079 3.40721 18.8387 3.12553 18.5345 2.92784C18.2303 2.73015 17.8753 2.62495 17.5125 2.625H6.4875C6.12472 2.62495 5.76972 2.73015 5.46553 2.92784C5.16134 3.12553 4.92104 3.40721 4.77375 3.73875L2.26875 9.375H1.5C1.20163 9.375 0.915483 9.49353 0.704505 9.7045C0.493526 9.91548 0.375 10.2016 0.375 10.5C0.375 10.7984 0.493526 11.0845 0.704505 11.2955C0.915483 11.5065 1.20163 11.625 1.5 11.625H1.875V18.75C1.875 19.2473 2.07254 19.7242 2.42417 20.0758C2.77581 20.4275 3.25272 20.625 3.75 20.625H6.375C6.87228 20.625 7.34919 20.4275 7.70083 20.0758C8.05246 19.7242 8.25 19.2473 8.25 18.75V16.875H15.75V18.75C15.75 19.2473 15.9475 19.7242 16.2992 20.0758C16.6508 20.4275 17.1277 20.625 17.625 20.625H20.25C20.7473 20.625 21.2242 20.4275 21.5758 20.0758C21.9275 19.7242 22.125 19.2473 22.125 18.75V11.625H22.5C22.7984 11.625 23.0845 11.5065 23.2955 11.2955C23.5065 11.0845 23.625 10.7984 23.625 10.5C23.625 10.2016 23.5065 9.91548 23.2955 9.7045C23.0845 9.49353 22.7984 9.375 22.5 9.375ZM6.73125 4.875H17.2687L19.2684 9.375H4.73156L6.73125 4.875ZM6 18.375H4.125V16.875H6V18.375ZM18 18.375V16.875H19.875V18.375H18ZM19.875 14.625H4.125V11.625H19.875V14.625Z"
                      fill="#717171"
                    />
                  </svg>
                </span>
                My Listings
              </Link>
              <Link href="/my-save" onClick={()=>setDropDown(!dropDown)} className="text-black font-medium text-lg flex px-2  gap-3 items-center hover:bg-[#FFF6C0] mb-2 cursor-pointer rounded-lg p-1">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z"
                      stroke="#717171"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Saved Vehicles
              </Link>
              <Link href="/chat" onClick={()=>setDropDown(!dropDown)} className="text-black font-medium text-lg flex px-2  gap-3 items-center hover:bg-[#FFF6C0] mb-2 cursor-pointer rounded-lg p-1">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9H6.01M10 9H10.01M14 9H14.01M19 9C19 13.4183 14.9706 17 10 17C8.46073 17 7.01172 16.6565 5.74467 16.0511L1 17L2.39499 13.28C1.51156 12.0423 1 10.5743 1 9C1 4.58172 5.02944 1 10 1C14.9706 1 19 4.58172 19 9Z"
                      stroke="#717171"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Chat
              </Link>
              <Link href="/account-setting" onClick={()=>setDropDown(!dropDown)} className="text-black font-medium text-lg flex px-2  gap-3 items-center hover:bg-[#FFF6C0] mb-2 cursor-pointer rounded-lg p-1">
                <span>
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.08168 13.9445C2.55298 12.9941 2.28862 12.5188 2.28862 12C2.28862 11.4812 2.55298 11.0059 3.08169 10.0555L4.43094 7.63L5.85685 5.24876C6.4156 4.31567 6.69498 3.84912 7.14431 3.5897C7.59364 3.33028 8.13737 3.3216 9.22483 3.30426L12 3.26L14.7752 3.30426C15.8626 3.3216 16.4064 3.33028 16.8557 3.5897C17.305 3.84912 17.5844 4.31567 18.1431 5.24876L19.5691 7.63L20.9183 10.0555C21.447 11.0059 21.7114 11.4812 21.7114 12C21.7114 12.5188 21.447 12.9941 20.9183 13.9445L19.5691 16.37L18.1431 18.7512C17.5844 19.6843 17.305 20.1509 16.8557 20.4103C16.4064 20.6697 15.8626 20.6784 14.7752 20.6957L12 20.74L9.22483 20.6957C8.13737 20.6784 7.59364 20.6697 7.14431 20.4103C6.69498 20.1509 6.4156 19.6843 5.85685 18.7512L4.43094 16.37L3.08168 13.9445Z"
                      stroke="#717171"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#717171"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                Account Settings
              </Link>

              <div className=" border-b border-[#9194A9] mb-2">

              </div>

              <div onClick={() => {
  setIsSignedIn(!isSignedIn);
  setDropDown(!dropDown);
}} className="text-[#F91919] font-medium text-lg flex px-2  gap-3 items-center hover:bg-[#FFF6C0]  cursor-pointer rounded-lg p-1">
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM6 7L5.21913 6.3753L1.21913 11.3753L2 12L2.78087 12.6247L6.78087 7.6247L6 7ZM2 12L1.21913 12.6247L5.21913 17.6247L6 17L6.78087 16.3753L2.78087 11.3753L2 12ZM2 12V13H11V12V11H2V12Z"
                      fill="#F91919"
                    />
                    <path
                      d="M10 8.13193V7.38851C10 5.77017 10 4.961 10.474 4.4015C10.9479 3.84201 11.7461 3.70899 13.3424 3.44293L15.0136 3.1644C18.2567 2.62388 19.8782 2.35363 20.9391 3.25232C22 4.15102 22 5.79493 22 9.08276V14.9172C22 18.2051 22 19.849 20.9391 20.7477C19.8782 21.6464 18.2567 21.3761 15.0136 20.8356L13.3424 20.5571C11.7461 20.291 10.9479 20.158 10.474 19.5985C10 19.039 10 18.2298 10 16.6115V16.066"
                      stroke="#F91919"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                Log out
              </div>
            </div>)
            }
          </div>
        ) : (
          <div className="flex items-center md:px-4 lg:px-1 lg:space-x-1">
            <button className="hidden md:block text-white hover:text-yellow-400 transition-colors duration-200 p-1.5 sm:p-2">
              <AiOutlineHeart size={30} />
            </button>
            <button
              onClick={signInClicked}
              className="hidden md:block px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md border border-gray-600 hover:border-yellow-400 text-xs sm:text-sm lg:text-base font-bold whitespace-nowrap text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Sign In
            </button>
            <Link href="/sell-car" className="hidden md:block">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm lg:text-base font-bold transition-colors duration-200 whitespace-nowrap">
                <span className="hidden lg:inline">Post Your Car</span>
                <span className="lg:hidden">Post Car</span>
              </button>
            </Link>
            <button
              className="lg:hidden text-white hover:text-yellow-400 transition-colors duration-200 p-1.5 sm:p-2 ml-2"
              onClick={showDrawer}
            >
              <MenuOutlined className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center justify-start">
            <Image
              src={logo}
              width={60}
              height={60}
              alt="logo"
              className="rounded-md w-24 h-auto"
            />
          </div>
        }
        placement="right"
        onClose={closeDrawer}
        open={isDrawerOpen}
        width="85%"
        className="mobile-drawer"
        style={{
          maxWidth: "320px",
        }}
        maskClosable={true}
        closable={true}
        destroyOnClose={true}
        styles={{
          header: {
            backgroundColor: "#000",
            borderBottom: "1px solid #374151",
            color: "#fff",
            padding: "12px 16px",
            textAlign: "left",
          },
          body: {
            backgroundColor: "#000",
            color: "#fff",
            padding: "0",
            width: "100%",
            maxWidth: "720px",
          },
          mask: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          wrapper: {
            width: "100% !important",
            maxWidth: "720px !important",
          },
          content: {
            width: "100% !important",
            maxWidth: "720px !important",
          },
        }}
      >
        <div className="bg-black text-white h-full">
          <ul className="flex flex-col">
            {navLink.map((link) => (
              <li key={link.href} className="border-b border-gray-800">
                <Link
                  href={link.href}
                  className={`block px-4 sm:px-6 py-3 sm:py-4 text-white hover:text-yellow-400 hover:bg-gray-900 transition-colors duration-200 font-bold text-sm sm:text-base 
                    ${
                      activeLink === link.href ? "text-[#FFE135]" : "text-white"
                    }`}
                  onClick={() => {
                    setActiveLink(link.href);
                    closeDrawer();
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile Actions */}
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 border-t border-gray-800 mt-4">
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-600 text-white hover:text-yellow-400 hover:border-yellow-400 rounded-md font-bold transition-colors duration-200">
              <AiOutlineHeart className="w-4 h-4" />
              <span>Wishlist</span>
            </button>

            {user.name ? (
              <>
                <Link href="/profile" className="block">
                  <button
                    className="w-full text-center px-4 py-3 border border-gray-600 text-white hover:text-yellow-400 hover:border-yellow-400 rounded-md font-bold transition-colors duration-200 text-sm sm:text-base"
                    onClick={closeDrawer}
                  >
                    Profile
                  </button>
                </Link>
                <Link href="/logout" className="block">
                  <button
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md font-bold transition-colors duration-200 text-sm sm:text-base"
                    onClick={closeDrawer}
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    closeDrawer();
                  }}
                  className="w-full text-center px-4 py-3 border border-gray-600 text-white hover:text-yellow-400 hover:border-yellow-400 rounded-md font-bold transition-colors duration-200 text-sm sm:text-base"
                >
                  Sign In
                </button>
                <Link href="/register" className="block">
                  <button
                    className="w-full bg-[#FFE135] hover:bg-yellow-300 text-black px-4 py-3 rounded-md font-bold transition-colors duration-200 text-sm sm:text-base"
                    onClick={closeDrawer}
                  >
                    Post Your Car
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Drawer>
      <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
