import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Athziri",
      handle: "@Cee_OhWhattt",
      quote:
        "Browse At Your Own Pace And Explore A Wide Selection Of New And Used Vehicles.",
      image: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 2,
      name: "Lee Tyndall",
      handle: "@Photoguy_nc",
      quote:
        "Browse At Your Own Pace And Explore A Wide Selection Of New And Used Vehicles.",
      image: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 3,
      name: "Rajesh Kanna",
      handle: "@Vrajeshkanna1",
      quote:
        "Browse At Your Own Pace And Explore A Wide Selection Of New And Used Vehicles.",
      image: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
    {
      id: 4,
      name: "Monte Pittman",
      handle: "@Montepittman",
      quote:
        "Browse At Your Own Pace And Explore A Wide Selection Of New And Used Vehicles.",
      image: "https://i.ibb.co/bjqrb68n/Ellipse-260.png",
    },
  ];

  return (
    <section>
      <div className="py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 md:mb-4">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative flex items-start">
              {/* Profile Image */}
              <div className="flex-shrink-0 z-10 mt-5">
                <Image
                  width={80}
                  height={80}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-white shadow-sm"
                />
              </div>

              {/* Card Content */}
              <div className="bg-gray-200 rounded-2xl p-6 pl-12 flex-1 ml-[-40px] md:ml-[-48px] min-h-[200px] flex flex-col justify-between">
                {/* Quote */}
                <div className=" ml-4">
                  <div className="text-gray-800 text-base md:text-lg lg:text-[32px] xl:text-[36px]">
                    <p className="mb-4  md:leading-[2.5rem]">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 text-base mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
