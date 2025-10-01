"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CarData {
  id: number;
  title: string;
  image: string;
  author: string;
  profileImage: string;
}

const TopRatedUsed: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const carData: CarData[] = [
    {
      id: 1,
      title: "2025 Nissan Armada",
      image:
        "https://i.ibb.co/QjjncY2z/8cf14d933b2e12bb1f4e9786ea8ce8a963530f28.png",
      author: "Perry Stern",
      profileImage: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 2,
      title: "2025 Toyota Camry",
      image:
        "https://i.ibb.co/rqgNd03/9b65fcf3ecd6e598caedaeecbc1130ca8703dca3.png",
      author: "Sarah Johnson",
      profileImage: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 3,
      title: "2025 Honda Accord",
      image:
        "https://i.ibb.co/fYyPRgFw/3e6f580c6610922a93773361d12be6d01b188c7d.png",
      author: "Mike Davis",
      profileImage: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 4,
      title: "2025 BMW X5",
      image:
        "https://i.ibb.co/KnDRzjt/792e7d646f2d6ca7288bbeedcf98ae28cf0df496.png",
      author: "Emily Chen",
      profileImage: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 5,
      title: "2025 Mercedes C-Class",
      image:
        "https://i.ibb.co/QjjncY2z/8cf14d933b2e12bb1f4e9786ea8ce8a963530f28.png",
      author: "David Wilson",
      profileImage: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 6,
      title: "2025 Audi A4",
      image:
        "https://i.ibb.co/rqgNd03/9b65fcf3ecd6e598caedaeecbc1130ca8703dca3.png",
      author: "Lisa Park",
      profileImage: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 7,
      title: "2025 Lexus RX",
      image:
        "https://i.ibb.co/fYyPRgFw/3e6f580c6610922a93773361d12be6d01b188c7d.png",
      author: "Robert Kim",
      profileImage: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 8,
      title: "2025 Tesla Model 3",
      image:
        "https://i.ibb.co/KnDRzjt/792e7d646f2d6ca7288bbeedcf98ae28cf0df496.png",
      author: "Anna Martinez",
      profileImage: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
  ];

  const updateVisibleCards = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1280) setVisibleCards(4);
      else if (width >= 1024) setVisibleCards(3);
      else if (width >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, carData.length - visibleCards);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex, carData.length]);

  const maxSlides = Math.max(0, carData.length - visibleCards);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxSlides));
  };

  return (
    <div className="xl:container mx-auto px-2 md:px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Top rated used cars by local experts
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Cards Container */}
        <div className="overflow-hidden mb-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
            }}
          >
            {carData.map((car, index) => (
              <div
                key={`${car.id}-${index}`}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Car Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      width={400}
                      height={300}
                      src={car.image}
                      alt={car.title}
                      className="w-full h-full rounded-t-lg object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="text-lg  flex justify-center font-semibold text-gray-900 mb-3">
                      {car.title}
                    </h3>

                    {/* Author Info */}
                    <div className="flex justify-center items-center space-x-3">
                      <Image
                        width={32}
                        height={32}
                        src={car.profileImage}
                        alt={car.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        by {car.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      {carData.length > visibleCards && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "bg-red-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRatedUsed;
