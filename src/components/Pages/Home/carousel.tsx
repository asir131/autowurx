// import React from 'react';
// import { Carousel } from 'antd';
// import Image from 'next/image';

// interface CarouselItem {
//   image: string;
//   title: string;
//   author: string;
// }

// const carouselData: CarouselItem[] = [
//   {
//     image: 'https://i.ibb.co/QjjncY2z/8cf14d933b2e12bb1f4e9786ea8ce8a963530f28.png',
//     title: '2025 Nissan Armada',
//     author: 'by Perry Stern',
//   },
//   {
//     image: 'https://i.ibb.co/rqgNd03/9b65fcf3ecd6e598caedaeecbc1130ca8703dca3.png',
//     title: '2025 Nissan Armada',
//     author: 'by Perry Stern',
//   },
//   {
//     image: 'https://i.ibb.co/fYyPRgFw/3e6f580c6610922a93773361d12be6d01b188c7d.png',
//     title: '2025 Nissan Armada',
//     author: 'by Perry Stern',
//   },
//   {
//     image: 'https://i.ibb.co/KnDRzjt/792e7d646f2d6ca7288bbeedcf98ae28cf0df496.png',
//     title: '2025 Nissan Armada',
//     author: 'by Perry Stern',
//   },
// ];

// const Carousels: React.FC = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto p-4">
//       <h2 className="text-center text-2xl font-semibold mb-6">Top rated used cars by local experts</h2>
//       <Carousel autoplay className="shadow-xl">
//         {carouselData.map((item, index) => (
//           <div key={index} className="p-4">
//             <div className="relative">
//               <Image
//                  width={80}
//                  height={80}
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full rounded-lg shadow-lg"
//               />
//               <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
//                 <h3 className="font-semibold text-xl">{item.title}</h3>
//                 <p>{item.author}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Carousels;


const Carousel = () => {
 return (
 <div>
 <h2>Welcome to the Carousel page</h2>
 </div>
 );
};

export default Carousel;