import React from "react";
import Image from "next/image";

const AirlineSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 items-center justify-items-center px-8 md:px-16 lg:px-32 py-12 my-16">
      <Image
        src="/images/AirlinesImages/axon-airlines.png"
        alt="Axon Airlines"
        height={40}
        width={170}
        className="h-10 w-auto"
      />
      <Image
        src="/images/AirlinesImages/jetstar-airlines.png"
        alt="Jetstar Airlines"
        height={40}
        width={170}
        className="h-10 w-auto"
      />
      <Image
        src="/images/AirlinesImages/expedia-airlines.png"
        alt="Expedia Airlines"
        height={40}
        width={170}
        className="h-10 w-auto"
      />
      <Image
        src="/images/AirlinesImages/qantas-airlines.png"
        alt="Qantas Airlines"
        height={40}
        width={170}
        className="h-10 w-auto"
      />
      <Image
        src="/images/AirlinesImages/Alitalia-airlines.png"
        alt="Alitalia Airlines"
        height={40}
        width={170}
        className="h-10 w-auto"
      />
    </section>
  );
};

export default AirlineSection;
