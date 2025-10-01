
import BackgroundImage from "@/components/Pages/Home/backgroundImage";
import CarBrandSelector from "@/components/Pages/Home/CarBrandSelector";
import FAQAccordion from "@/components/Pages/Home/FAQAccordion";
import FeaturedCars from "@/components/Pages/Home/FeaturedCars";
import FreeResource from "@/components/Pages/Home/FreeResource";
import HeroBannerSection from "@/components/Pages/Home/HeroBannerSection";
import TeamMarketplace from "@/components/Pages/Home/TeamMarketplace";
import Testimonials from "@/components/Pages/Home/Testimonials";
import TopRatedUsed from "@/components/Pages/Home/TopRatedUsed";
import WhyAutowurx from "@/components/Pages/Home/WhyAutowurx";

import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroBannerSection />
       <div className=" pt-8 md:pt-12 lg:pt-18 "  style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)" }}>
          <FeaturedCars />
       </div>
       <div className="xl:container mx-auto px-2 md:px-4 pt-8 md:pt-12 lg:pt-18">
          <TeamMarketplace />
       </div>
         <div className=" mx-auto pt-8 md:pt-12 lg:pt-18">
            <WhyAutowurx />
         </div>
         <div className=" pt-8 md:pt-12 lg:pt-18" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)" }}>
            <CarBrandSelector />
         </div>
       <div className=" pt-8 md:pt-12 lg:pt-18 " style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)" }}>
          <FreeResource />
       </div>
       <div className=" pt-8 md:pt-12 lg:pt-18 " style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)" }}>
          <TopRatedUsed />
       </div>
       <div className="xl:container mx-auto px-2 md:px-4 pt-8 md:pt-12 lg:pt-18">
          <Testimonials />
       </div>
       <div className="xl:container mx-auto px-2 md:px-4 pt-8 md:pt-12 lg:pt-18">
          <BackgroundImage />
       </div>
       <div className="xl:container mx-auto px-2 md:px-4 py-8 md:py-12 lg:py-16">
          <FAQAccordion />
       </div>
    </section>
  );
};

export default HomePage;
