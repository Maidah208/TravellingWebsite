import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 relative mt-28 mr-10 px-6 md:px-0">
        <div className="ml-0 md:ml-32 mt-12 md:mt-20">
          <h3 className="text-red-700 font-semibold text-xl md:text-2xl">
            BEST DESTINATIONS AROUND THE WORLD
          </h3>
          <h1 className="text-zinc-900 font-serif font-bold text-3xl md:text-6xl mt-4">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="mt-8 text-zinc-600 w-full md:w-96 text-base md:text-lg">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex flex-row items-center space-x-4 mt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 rounded text-white h-10 px-6 text-base">
              Find out More
            </button>

            <div className="flex flex-row items-center">
              <Image
                className="pt-6"
                src="/images/HeroSectionImages/PlayButton.png"
                alt="PlayButton"
                height={90}
                width={90}
              />
              <p className="text-zinc-600 font-semibold">Play Demo</p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <Image
            src="/images/HeroSectionImages/HeroSectionImage.png"
            alt="Hero Section Image"
            height={400}
            width={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
