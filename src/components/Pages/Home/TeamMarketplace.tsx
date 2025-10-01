import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamMarketplace: React.FC = () => {
  const services = [
    {
      title: "Dealer / Broker",
      description: "Browse & White Inventory And Get Expert Help To Match You With The Perfect Vehicle",
      buttonText: "Get started",
      imageUrl: "https://i.ibb.co/CZyngNt/image-7.png",
      buttonColor: "yellow"
    },
    {
      title: "Local Area Vendor View",
      description: "Local Area Vendor View To See The Local Autos Car To Buy",
      buttonText: "Start now",
      imageUrl: "https://i.ibb.co/CZyngNt/image-7.png",
      buttonColor: "yellow"
    },
    {
      title: "Collision Center",
      description: "Seek Out Trusted Body Shops To Handle Accident Repairs With Care",
      buttonText: "Find a shop",
      imageUrl: "https://i.ibb.co/CZyngNt/image-7.png",
      buttonColor: "yellow"
    },
    {
      title: "Tag Office / MVA",
      description: "Quickly Access Official Office Services Like Title Transfers And Registration",
      buttonText: "Start now",
      imageUrl: "https://i.ibb.co/CZyngNt/image-7.png",
      buttonColor: "yellow"
    },
    {
      title: "Roadside Assistance",
      description: "Solve Or Overcome Help me 24/7 Roadside Assistance Services",
      buttonText: "Request assistance",
      imageUrl: "https://i.ibb.co/CZyngNt/image-7.png",
      buttonColor: "yellow"
    },
    {
      title: "Auction",
      description: "Get The Toolbox Help With Car Key Auctions And Wholesale Deals",
      buttonText: "Start now",
      imageUrl: "https://i.ibb.co/3mR4GSyv/image-8.png",
      buttonColor: "yellow"
    }
  ];

  return (
    <div className="py-10">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your local auto team marketplace!
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map(
            (
              { title, description, buttonText, imageUrl, buttonColor },
              index
            ) => {
              // Determine link destination based on buttonText
              const linkDestination = buttonText === "Get started" ? "/dellers" : "/local-start";

              return (
                <div
                  key={index}
                  className="shadow-even shadow-md bg-white rounded-2xl border border-gray-50 p-6 text-center flex flex-col items-center"
                >
                  <div className="mb-4">
                    <Image
                      src={imageUrl}
                      alt={title}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed w-full md:w-[80%] lg:w-[70%] xl:w-[50%] mb-4">
                    {description}
                  </p>
                  <Link href={linkDestination}>
                    <button
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-colors mt-4 ${
                        buttonColor === "yellow"
                          ? "bg-[#FFE135] hover:bg-yellow-500 text-black"
                          : "bg-[#FFE135] hover:bg-yellow-500 text-black"
                      }`}
                    >
                      {buttonText}
                    </button>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMarketplace;