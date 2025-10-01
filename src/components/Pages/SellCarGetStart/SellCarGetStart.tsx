"use client"
import Image from "next/image";
import car from "@/assets/car/car1.png"
import { useState } from "react";
import Link from "next/link";

export default function SellCarGetStart() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="">
            <div className="md:flex flex-col md:flex-row  justify-between items-center container  mx-auto p-6">
                {/* Left Side - Form */}
                <div className="w-full md:w-1/2   ">
                    <h2 className="text-3xl font-bold mb-4">What’s Your Car’s Condition?</h2>
                    <p className="text-gray-600 mb-6">Accurate details help attract better offers.</p>
                    <div className="space-y-4">
                        <label className="flex items-center">
                            <input type="radio" name="condition" className="mr-2" />
                            <span>Excellent - Looks new, no scratches or dents, runs perfectly, and has a clean history (e.g., no accidents).</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="condition" className="mr-2" />
                            <span>Good - Minor cosmetic wear (e.g., light scratches), runs well, and no major mechanical issues.</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="condition" className="mr-2" />
                            <span>Fair - Some visible damage (e.g., dents or fading paint) or minor mechanical issues that don’t affect drivability.</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="condition" className="mr-2" />
                            <span>Poor - Significant cosmetic damage (e.g., rust, large dents) or major mechanical problems (e.g., engine issues).</span>
                        </label>
                    </div>
                    <p className="text-gray-600 mt-4">Highlight your car’s condition, recent maintenance, standout features, and any flaws to attract serious buyers.</p>
                    <textarea
                        className="w-full p-2 mt-4 border rounded"
                        placeholder="Description (optional)"
                    ></textarea>
                    <button onClick={() => setIsModalOpen(true)} className="w-full bg-[#FFE135] text-black font-semibold py-2 mt-4 rounded hover:bg-yellow-500">
                        List you car
                    </button>

                </div>

                {/* Right Side - Image */}
                <div className="w-full md:w-1/2 p-4 mt-6 md:mt-0 ml-5">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <Image
                            src={car} // Replace with the actual image path
                            alt="Car Image"
                            width={400}
                            height={300}
                            className="rounded-lg w-full"
                        />
                        <p className="text-gray-600 mt-2">2019 Acura ILX Premium - 12k mi | Unloaded Automatic</p>
                    </div>
                </div>
            </div>


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg relative w-full max-w-md">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        <div className="text-center">
                            <div className="mx-auto mb-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-yellow-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold mb-2">Congratulations! Your Car is Listed!</h2>
                            <p className="text-gray-600 mb-4">Your car has been successfully listed for auction. Dealers can now place bids.</p>

                            <Link href="/my-listing">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#FFE135] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 w-full"
                                >
                                    View Auction
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}