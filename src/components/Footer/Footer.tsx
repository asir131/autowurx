import React from 'react';

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#2B2B2B] text-white">
      <div className="w-full md:px-6 px-2 py-7 border-t border-b border-[#FFF6C0]">
        <div className="xl:container mx-auto grid md:grid-cols-12 gap-4 md:gap-2 lg:gap-16 text-center md:text-left pt-7">
          {/* About Section */}
          <div className="md:col-span-3 lg:col-span-4 col-span-12  lg:mr-16">
            <p className="text-gray-300 text-sm leading-relaxed mb-6 ">
              Our team of automotive professionals is committed to making the process of buying, selling, and trading vehicles simple, secure, and efficient. We provide a trusted platform where you can connect, negotiate, and complete your car deals with confidence.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <span className="text-sm font-medium">Visit Our:</span>
              <div className="flex space-x-3">
                <Link 
                  href="#" 
                  className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-colors duration-200"
                >
                  <FaFacebookF size={14} />
                </Link>
                <Link 
                  href="#" 
                  className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-colors duration-200"
                >
                  <FaTwitter size={14} />
                </Link>
                <Link 
                  href="#" 
                  className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-colors duration-200"
                >
                  <FaLinkedinIn size={14} />
                </Link>
                <Link 
                  href="#" 
                  className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-colors duration-200"
                >
                  <FaYoutube size={14} />
                </Link>
              </div>
            </div>
          </div>

      
          <div className="md:col-span-9 lg:col-span-8 col-span-12 grid grid-cols-1 md:grid-cols-3 gap-1">
            
            {/* Company Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-xl mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about-us" className="hover:text-gray-300 text-sm">About Us</Link>
                </li>
                <li>
                  <Link href="/howIt-work" className="hover:text-gray-300 text-sm">How it Works</Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-gray-300 text-sm">News</Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-gray-300 text-sm">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-300 text-sm">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-condition" className="hover:text-gray-300 text-sm">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-xl mb-4">Quick Link</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/find-car" className="hover:text-gray-300 text-sm">Find a Car</Link>
                </li>
                <li>
                  <Link href="/find-dealer" className="hover:text-gray-300 text-sm">Find a Dealer</Link>
                </li>
                <li>
                  <Link href="/dealer-login" className="hover:text-gray-300 text-sm">Dealer Login</Link>
                </li>
                <li>
                  <Link href="/trust-safety" className="hover:text-gray-300 text-sm">Trust & Safety</Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Contact us</h3>
              <ul className="space-y-3">
                <li className="flex  items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <FaEnvelope size={14} className="text-gray-300" />
                  </div>
                  <Link 
                    href="mailto:info@yourwebsite.com" 
                    className="hover:text-gray-300 text-sm"
                  >
                    info@yourwebsite.com
                  </Link>
                </li>
                <li className="flex  items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <FaPhone size={14} className="text-gray-300" />
                  </div>
                  <Link 
                    href="tel:866-856-0261" 
                    className="hover:text-gray-300 text-sm"
                  >
                    866-856-0261
                  </Link>
                </li>
                <li className="flex md:justify-center items-start">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <FaMapMarkerAlt size={14} className="text-gray-300" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    2572 Westheimer Rd. Santa Ana, Illinois 85486
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright and Social Links */}
      <div className="py-3">
        <p className="text-lg text-center">© 2025 AUTOWURX All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
