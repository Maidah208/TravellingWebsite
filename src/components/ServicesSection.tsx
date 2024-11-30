import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <>
      <section>
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mt-14 px-6">
          <p className="text-zinc-600 opacity-55 font-bold">CATEGORY</p>
          <h1 className="text-zinc-900 font-serif font-bold text-3xl md:text-4xl mt-4 mb-10">
            We Offer Best Services
          </h1>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 md:mx-20 my-6">
          {/* Service 1 */}
          <div className="flex flex-col h-[269px] w-full px-5 py-3 items-center justify-center rounded-xl bg-[#fffdf7] shadow-md transform transition-all duration-300 hover:scale-105">
            <Image src="/images/ServicesSectionImages/Service1.png" alt="" height={80} width={80} />
            <h1 className="mt-4 font-bold text-base text-center">Calculated Weather</h1>
            <p className="text-slate-500 mt-2 text-center text-sm md:text-base">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
          {/* Service 2 */}
          <div className="flex flex-col h-[269px] w-full px-5 py-3 items-center justify-center rounded-xl bg-[#fffdf7] shadow-md transform transition-all duration-300 hover:scale-105">
            <Image src="/images/ServicesSectionImages/Service2.png" alt="" height={80} width={80} />
            <h1 className="mt-4 font-bold text-base text-center">Best Flights</h1>
            <p className="text-slate-500 mt-2 text-center text-sm md:text-base">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
          {/* Service 3 */}
          <div className="flex flex-col h-[269px] w-full px-5 py-3 items-center justify-center rounded-xl bg-[#fffdf7] shadow-md transform transition-all duration-300 hover:scale-105">
            <Image src="/images/ServicesSectionImages/Service3.png" alt="" height={60} width={60} />
            <h1 className="mt-4 font-bold text-base text-center">Local Events</h1>
            <p className="text-slate-500 mt-2 text-center text-sm md:text-base">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
          {/* Service 4 */}
          <div className="flex flex-col h-[269px] w-full px-5 py-3 items-center justify-center rounded-xl bg-[#fffdf7] shadow-md transform transition-all duration-300 hover:scale-105">
            <Image src="/images/ServicesSectionImages/Service4.png" alt="" height={80} width={80} />
            <h1 className="mt-4 font-bold text-base text-center">Customization</h1>
            <p className="text-slate-500 mt-2 text-center text-sm md:text-base">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
