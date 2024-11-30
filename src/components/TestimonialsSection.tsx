import React from "react";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-1 gap-28 mt-24 px-6 sm:px-8 md:px-10">
      {/* Left Section (Text Section) */}
      <div className="mt-24 flex flex-col justify-center lg:items-start sm:items-center md:ml-0 lg:ml-28 text-center">
        <h3 className="text-zinc-600 opacity-55 text-xl font-bold">
          Testimonials
        </h3>
        <h1 className="text-zinc-900 font-serif font-bold text-4xl mt-4 mb-10 lg:text-left">
          What people say <br />
          about Us.
        </h1>
        <div className="flex flex-row gap-6 justify-center">
          <div className="h-6 w-6 bg-black rounded-full"></div>
          <div className="h-6 w-6 bg-zinc-700 rounded-full"></div>
          <div className="h-6 w-6 bg-zinc-500 rounded-full"></div>
        </div>
      </div>

      {/* Right Section (Testimonial Card) */}
      <div className="rounded shadow-md lg:w-[500px] md:w-auto lg:mt-20 md:mt-2 mx-9 md:mx-0 flex justify-center items-center">
        <div className="flex flex-col items-center space-y-4 p-6 w-full">
          <div>
            <Image
              src="/images/Testimonial.png"
              alt="testimonial"
              height={60}
              width={60}
              className="mt-4"
            />
          </div>
          <div className="text-xl text-center">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="font-bold mt-6">Mike Taylor</p>
            <p className="mb-5">Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
