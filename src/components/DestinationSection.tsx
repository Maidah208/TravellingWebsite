import React from "react";
import Image from "next/image";

const DestinationSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <p className="text-zinc-600 opacity-55 font-bold">Top Selling</p>
        <h1 className="text-zinc-900 font-serif font-bold text-3xl mt-4 mb-10">
          Top Destinations
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex flex-col items-center justify-center rounded-xl shadow-md w-80 overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="relative w-full h-64 m-0 p-0">
            <Image
              src="/images/DestinationSectionImages/Destination1.png"
              alt="Destination"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="m-0 p-0"
            />
          </div>
          <div className="p-4 w-full">
            <div className="flex flex-row items-center justify-between">
              <p>Rome, Italy</p>
              <p>$5,42k</p>
            </div>
            <div className="flex flex-row items-center mt-3">
              <Image
                src="/images/DestinationSectionImages/Navigation.png"
                alt="Navigation"
                height={20}
                width={20}
              />
              <p className="text-zinc-600 opacity-55 ml-4">10 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl shadow-md w-80 overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="relative w-full h-64 m-0 p-0">
            <Image
              src="/images/DestinationSectionImages/Destination2.jpg"
              alt="Destination"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="m-0 p-0"
            />
          </div>
          <div className="p-4 w-full">
            <div className="flex flex-row items-center justify-between">
              <p>London, UK</p>
              <p>$4.2k</p>
            </div>
            <div className="flex flex-row items-center mt-3">
              <Image
                src="/images/DestinationSectionImages/Navigation.png"
                alt="Navigation"
                height={20}
                width={20}
              />
              <p className="text-zinc-600 opacity-55 ml-4">12 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl shadow-md w-80 overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="relative w-full h-64 m-0 p-0">
            <Image
              src="/images/DestinationSectionImages/Destination3.png"
              alt="Destination"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="m-0 p-0"
            />
          </div>
          <div className="p-4 w-full">
            <div className="flex flex-row items-center justify-between">
              <p>Full Europe</p>
              <p>$15k</p>
            </div>
            <div className="flex flex-row items-center mt-3">
              <Image
                src="/images/DestinationSectionImages/Navigation.png"
                alt="Navigation"
                height={20}
                width={20}
              />
              <p className="text-zinc-600 opacity-55 ml-4">28 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
