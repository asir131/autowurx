import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="pb-[30px] md:pb-[65px] lg:pb-[70px] xl:pb-[77px] ">
        <Header />
      </div>
       <div className="min-h-screen">
       {children}
       </div>
      <Footer />
    </section>
  );
};

export default MainLayout;
