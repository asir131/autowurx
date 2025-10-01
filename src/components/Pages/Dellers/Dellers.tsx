// components/AutoWurxCard.js
import redBrander from '@/assets/banner/redbrand.png'
import car from '@/assets/banner/car.png'
import Image from 'next/image';

export default function Dellers() {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-20 pb-20 bg-[#F8F8F8]">
        <div className="w-full container flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Card 1 */}
          <div className="flex-1 bg-[#FFE135]  rounded-lg shadow-lg">
            <div className=" p-6 rounded-lg text-center md:text-left">
              <h2 className="text-2xl font-bold text-black">
                Unlock the power to
              </h2>
              <h1 className="text-3xl font-bold text-black mt-2">
                Buy, Sell, and Trade
              </h1>
              <h2 className="text-2xl font-bold text-black mt-2">
                cars with ease.
              </h2>
              <div className="flex md:justify-end origin-bottom-left">
                <div className="mt-4 rotate-[-45deg] transform   ">
                  <span className="text-white text-xl font-semibold bg-black px-4 py-1">
                    AUTOWURX
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-lg">
            <div className="p-6">
              <p className="text-gray-500 text-[30px] leading-[1.4]">
                <span className="font-semibold">Autowurx&apos;s Dealers Hub</span> - connect,
                browse inventory, negotiate, streamline buying/selling/trading,
                generate leads, boost sales, maintain inventory, all just a click away!
              </p>
              <button className="mt-4 bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional deller search Section */}
      <div className=" bg-[#fffffa]">
        <div className="container  p-6 pt-10 mt-10">
          {/* Header */}
          <div className="">
            <h1 className="text-4xl font-bold ">
              Connect With <span className="text-[#FFE135]">61,430</span> Trusted Dealers in Your Area
            </h1>
            <p className="mt-2 text-gray-600">
              Here to help you find your perfect car! Get the best deals in your area from our digital buying platform.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-6 md:w-[800px]">
            <input
              type="text"
              placeholder="Search by dealer name or location"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Card Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Cards (repeated) */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex">
                  <div className="p-2">
                    <p className="text-gray-700">Tesla Model S Plaid</p>
                    <p className="text-sm text-gray-500 pt-2">5.7 miles away • Capitol Heights, MD</p>
                    <div className="flex items-center mt-5">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-600 ml-1">4.6 (620 reviews)</span>
                    </div>
                  </div>
                  <div className="justify-end ml-auto">
                    <span className="text-blue-600 mt-2 inline-block">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-6  ">
            <button className="bg-blue-100 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition">
              Find The Best Dealers
            </button>
          </div>
        </div>
      </div>

      {/* slot Section */}
      <div className="bg-gray-50 w-full">
        <div className="container bg-gray-50 p-6 pb-10">
          {/* Header */}
          <div className=" pt-10">
            <h1 className="text-3xl font-bold text-gray-900">
              The easy way to stock your slot
            </h1>
            <p className="mt-2 text-gray-600">
              Get instant access to a wide range of affordable cars with Autowurx Bid on cars, connect <br />
              with sellers, and make deals in real-time—all from the comfort of your device!
            </p>
          </div>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1: Unmatched Connections */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full mb-2">
                <span className="text-white font-bold">🚗</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Unmatched Connections</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Autowurx offers exclusive access to vehicles, auctions, ensuring a constant influx of the latest cars,
                trucks, vans, and SUVs to enrich your inventory and ready to sell their vehicles and buy yours straight from
                the Autowurx inventory.
              </p>
            </div>

            {/* Card 2: Direct Consumer Engagement */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full mb-2">
                <span className="text-white font-bold">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Direct Consumer Engagement</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Seamlessly connect with consumers through our user-friendly platform. Showcase your inventory to a
                broad audience actively searching for vehicles like yours, resulting in increased sales and customer
                satisfaction.
              </p>
            </div>

            {/* Card 3: Efficient Inventory Management */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full mb-2">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Efficient Inventory Management</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Autowurx puts you in charge. Bid, buy, and control your inventory right from your phone, saving time,
                fees, and the hassle of traditional auctions. Our cutting-edge platform delivers perfect inventory
                straight to you.
              </p>
            </div>

            {/* Card 4: Maximize Exposure */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full mb-2">
                <span className="text-white font-bold">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Maximize Exposure</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Adding to local dealerships like yours to self-used inventory page - introducing your dealership to
                unique customers and untapped demographics.
              </p>
            </div>

            {/* Card 5: Strategic Audience Building */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full mb-2">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Strategic Audience Building</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Adding to inventory builds the quickest route for local dealerships like yours to used vehicles,
                with thousands of daily clicks to Autowurx inventory page - introducing your dealership to unique
                customers and untapped demographics.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Section */}
      <div className=" w-full bg-gray-50 pt-10">
        <div className="container p-6">
          {/* Header */}
          <div className=" ">
            <h1 className="text-3xl font-bold text-gray-900">
              Stay Informed With Insights From Our Experts
            </h1>
          </div>

          {/* Card Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="  p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image src={redBrander} alt="EV Vehicles" className="w-full h-auto" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Tesla&apos;s Shake-Up And New Competitors</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  EV Vehicles: Tesla Shake-Up And New Competitors into the U.S. EV Market
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image src={car} alt="EV Vehicles" className="w-full h-[250px]" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Tesla&apos;s Shake-Up And New Competitors</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  EV Vehicles: Tesla Shake-Up And New Competitors into the U.S. EV Market
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="  p-2 rounded-t-lg flex items-center justify-center rounded-md">
                <Image src={redBrander} alt="EV Vehicles" className="w-full h-auto" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Tesla&apos;s Shake-Up And New Competitors</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  EV Vehicles: Tesla Shake-Up And New Competitors into the U.S. EV Market
                </p>
                <p className="mt-1 text-gray-500 text-xs">Apr 8, 2023 • 4 min read</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 text-center">
            <button className="bg-gray-100 text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
              Read the Latest Trends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
