"use client";

import Image from "next/image";
import { useState } from "react";

interface CarBrand {
  id: string;
  name: string;
  logo: string;
  logoAlt: string;
}

interface CarBrandSelectorProps {
  brands?: CarBrand[];
}

// JSON data for car brands with real logo URLs
const defaultBrands: CarBrand[] = [
  {
    id: "toyota",
    name: "Toyota",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png",
    logoAlt: "Toyota logo",
  },
  {
    id: "bmw",
    name: "BMW",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    logoAlt: "BMW logo",
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Chevrolet-Logo.png",
    logoAlt: "Chevrolet logo",
  },
  {
    id: "honda",
    name: "Honda",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Logo.png",
    logoAlt: "Honda logo",
  },
  {
    id: "ford",
    name: "Ford",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Ford-Logo.png",
    logoAlt: "Ford logo",
  },
  {
    id: "audi",
    name: "Audi",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png",
    logoAlt: "Audi logo",
  },
  {
    id: "volvo",
    name: "Volvo",
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Volvo-Logo.png",
    logoAlt: "Volvo logo",
  },
  {
    id: "hyundai",
    name: "Hyundai",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo.png",
    logoAlt: "Hyundai logo",
  },
  {
    id: "dodge",
    name: "Dodge",
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Dodge-Logo.png",
    logoAlt: "Dodge logo",
  },
  {
    id: "kia",
    name: "Kia",
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Kia-Logo.png",
    logoAlt: "Kia logo",
  },
  {
    id: "porsche",
    name: "Porsche",
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png",
    logoAlt: "Porsche logo",
  },
  {
    id: "nissan",
    name: "Nissan",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Nissan-Logo.png",
    logoAlt: "Nissan logo",
  },

  {
    id: "mercedes",
    name: "Mercedes-Benz",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrv719NGlgQAaAUp_QolnVIO3KRlb07AmzQ&s",
    logoAlt: "Mercedes-Benz logo",
  },

  {
    id: "subaru",
    name: "Subaru",
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Subaru-Logo.png",
    logoAlt: "Subaru logo",
  },
  {
    id: "jeep",
    name: "Jeep",
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Jeep-Logo.png",
    logoAlt: "Jeep logo",
  },
  {
    id: "tesla",
    name: "Tesla",
    logo: "https://i.guim.co.uk/img/media/fd844c04b9bbd2a2c11efb3fc4b7091dadc646b2/0_291_5471_3283/master/5471.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7d388b605474d8a6a103001cfc75986c",
    logoAlt: "Tesla logo",
  },
];

const CarBrandSelector: React.FC<CarBrandSelectorProps> = ({
  brands = defaultBrands,
}) => {
  const [activeTab, setActiveTab] = useState<"new" | "used">("new");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  const visibleBrands = showMore ? brands : brands.slice(0, 12);

  const handleBrandClick = (brandId: string) => {
    setSelectedBrand(brandId);
    console.log(`Selected brand: ${brandId}`);
  };

  const handleTabChange = (tab: "new" | "used") => {
    setActiveTab(tab);
    setSelectedBrand(null);
  };

  return (
    <div className="xl:container mx-auto px-2 md:px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Shop your favorite brands
        </h1>

        {/* Tab Navigation */}
        <div className="inline-flex space-x-4 ">
          <button
            onClick={() => handleTabChange("new")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "new"
                ? "bg-[#FFE135] text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            New Cars
          </button>
          <button
            onClick={() => handleTabChange("used")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === "used"
                ? "bg-[#F3F4F6] text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Used Cars
          </button>
        </div>
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {visibleBrands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => handleBrandClick(brand.id)}
            className={`bg-white rounded-xl p-6  shadow-sm border border-gray-200 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-gray-300 ${
              selectedBrand === brand.id
                ? "ring-2 ring-blue-500 border-blue-500 bg-blue-50"
                : ""
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              {/* Brand Logo */}
              <div className="w-12 h-12 relative">
                <Image
                  width="72"
                  height="72"
                  src={brand.logo}
                  alt={brand.logoAlt}
                  className="w-full h-full object-contain"
                />
                <div className="w-full h-full bg-gray-100 rounded-lg hidden items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">
                    {brand.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {brand.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {brands.length > 8 && (
        <div className="text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            {showMore ? "Show Less" : "See More"}
            <svg
              className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                showMore ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default CarBrandSelector;
