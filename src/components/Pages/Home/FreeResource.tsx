import Head from "next/head";
import Link from "next/link";

const resourceData = [
  {
    id: 1,
    title: "Tesla's Shake–Up",
    subtitle: "Tesla’s Shake–Up And New Competitors Into The U.S. EV Market",
    image:
      "https://i.ibb.co/Wp5Ff1VK/2281fb6ce9821bcd255e1f04e1a8ccc01bf358cb.png",
  },
  {
    id: 2,
    title: "Tesla's Shake–Up",
    subtitle: "Tesla’s Shake–Up And New Competitors Into The U.S. EV Market",
    image:
      "https://i.ibb.co/Wp5Ff1VK/2281fb6ce9821bcd255e1f04e1a8ccc01bf358cb.png",
  },
  {
    id: 3,
    title: "Tesla's Shake–Up",
    subtitle: "Tesla’s Shake–Up And New Competitors Into The U.S. EV Market",
    image:
      "https://i.ibb.co/Wp5Ff1VK/2281fb6ce9821bcd255e1f04e1a8ccc01bf358cb.png",
  },
  {
    id: 4,
    title: "Tesla's Shake–Up",
    subtitle: "Tesla’s Shake–Up And New Competitors Into The U.S. EV Market",
    image:
      "https://i.ibb.co/Wp5Ff1VK/2281fb6ce9821bcd255e1f04e1a8ccc01bf358cb.png",
  },
];

const FreeResource = () => {
  return (
    <div className="xl:container mx-auto px-2 md:px-4 pb-10">
      <Head>
        <title>Free Resource Highlights</title>
      </Head>
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Free Resource Highlights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {resourceData.map((resource) => (
            <div
              key={resource.id}
              className="relative rounded-xl overflow-hidden shadow-lg "
            >
              <div
                className="object-cover w-full h-[336px] rounded-md bg-black/40 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(78.97deg, rgba(7, 7, 7, 0) 0.94%, rgba(7, 7, 7, 0.55) 39.27%), url(${resource.image})`,
                  opacity: 1,
                }}
              />
              <div className="absolute inset-0  flex flex-col justify-center p-6 w-full lg:w-[70%] xl:w-[45%] mx-auto">
                <h2 className="text-white text-[24px] md:text-[36px] font-bold text-center">
                  {resource.title}
                </h2>
                <p className="text-white text-[16px] mt-1 mb-4  text-center">
                  {resource.subtitle}
                </p>

                <Link href='/freeResor-details'>
                  <button className="mx-auto flex justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full w-fit font-medium">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeResource;
