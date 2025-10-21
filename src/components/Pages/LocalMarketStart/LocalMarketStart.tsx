


import Image from 'next/image';
import carBrand from '@/assets/localstrat/carbrand.png';
import brand from '@/assets/localstrat/brand.png';
import car25 from '@/assets/localstrat/car25.png';
import autoday1 from '@/assets/localstrat/autoday1.png';
import autoday2 from '@/assets/localstrat/autoday2.png';
import TeamMarketplace from '../Home/TeamMarketplace';
import FeaturedCars from '../Home/FeaturedCars';
import Tools from '../Home/Tools';

export default function LocalMarketStart() {
    return (
        <div className="bg-gray-50 p-4">
            <div className="flex flex-col md:flex-row w-full container gap-6">
                {/* Left Section */}
                <div className='w-2/3 '>
                    <div className="flex-1 flex flex-col items-center space-y-6">
                        {/* Logo */}
                        <Image
                            src={brand}
                            alt="AutoWurx Logo"
                            width={1000}
                            height={550}
                            className="object-contain  "
                        />

                        {/* Ad and Listings Section */}
                        <div className="w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                            <div className="bg-black text-white p-4 rounded-lg text-center flex-1 bg-white w-[400]">

                                <div className="mt-2">
                                    <Image
                                        src={carBrand}
                                        alt="Car Ad"
                                        width={200}
                                        height={150}
                                        className="w-full object-cover rounded"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 bg-white w-[400]">
                                <h2 className="text-2xl font-bold text-center mb-4">LISTINGS</h2>
                                <div className="w-full h-[400]">
                                    <Image
                                        src={car25}
                                        alt="Car Listing"
                                        width={300}
                                        height={200}
                                        className="w-full object-cover rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className='w-1/3'>
                    <div className=" flex-1 flex flex-col space-y-6">
                        {/* Newsletter Section */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Join Our Newsletter</h2>
                            <p className="text-gray-600 mb-4">
                                Don’t miss the latest from us! Get free access to exclusive deals, event news, and more!
                            </p>
                            <form className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <div className="flex items-center">
                                    <input type="checkbox" id="terms" className="mr-2" />
                                    <label htmlFor="terms" className="text-sm text-gray-600">
                                        I agree to all terms & conditions.
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 text-white p-2 rounded hover:bg-yellow-500 transition duration-200"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        {/* Top Vendors Section */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Top Vendor near you</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Image
                                        src={autoday1}
                                        alt="AutosToday Vendor"
                                        width={48}
                                        height={48}
                                        className="rounded-full mr-2"
                                    />
                                    <div>
                                        <p className="font-bold">AutosToday</p>
                                        <p className="text-sm text-gray-600">Tampa, FL 33602, United States</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Image
                                        src={autoday2}
                                        alt="AutoToday Vendor"
                                        width={48}
                                        height={48}
                                        className="rounded-full mr-2"
                                    />
                                    <div>
                                        <p className="font-bold">AutoToday</p>
                                        <p className="text-sm text-gray-600">Tampa, FL 33602, United States</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-yellow-400 text-sm mt-4 block hover:underline">
                                See all
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <Tools/>
            </div>

            <div className='container'>
                <FeaturedCars></FeaturedCars>
            </div>
        </div>
    );
}