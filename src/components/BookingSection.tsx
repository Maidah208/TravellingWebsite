import Image from "next/image";

const BookingSection = () => {
  return (
    <>
      <section className="mt-32 mx-6 md:mx-24 gap-8 md:gap-32 grid lg:grid-cols-2 md:grid-cols-1 justify-items-center">
        <div className="w-full md:w-auto">
          <h3 className="text-zinc-600 opacity-55 text-lg md:text-xl font-bold">
            Easy and Fast
          </h3>
          <h1 className="text-zinc-900 font-serif font-bold text-2xl md:text-4xl mt-4 mb-8 md:mb-10">
            Book your next trip in 3 easy steps
          </h1>
          <div className="flex flex-col gap-6 md:gap-4">
            <div className="flex flex-row gap-4 md:gap-6">
              <Image
                src="/images/BooingSectionImages/Step1.png"
                alt="Step 1"
                height={50}
                width={50}
                className="md:h-16 md:w-16"
              />
              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  Choose Destination
                </h3>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 md:gap-6">
              <Image
                src="/images/BooingSectionImages/Step2.png"
                alt="Step 2"
                height={50}
                width={50}
                className="md:h-16 md:w-16"
              />
              <div>
                <h3 className="font-bold text-lg md:text-xl">Make Payment</h3>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 md:gap-6">
              <Image
                src="/images/BooingSectionImages/Step3.png"
                alt="Step 3"
                height={50}
                width={50}
                className="md:h-16 md:w-16"
              />
              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  Reach Airport on Selected Date
                </h3>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-auto">
          {/* First Card with Zoom Effect */}
          <div className="rounded-xl shadow-lg px-6 py-4 md:px-9 md:py-5 w-full md:w-96 transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <Image
                src="/images/BooingSectionImages/Booking1.jpg"
                alt="Trip to Greece"
                height={250}
                width={450}
                className="rounded-xl"
              />
            </div>
            <p className="font-bold mb-3 md:mb-4 mt-3 ml-3">Trip To Greece</p>
            <p className="text-zinc-800 opacity-75 mb-2 ml-3 text-sm md:text-base">
              14-29 June | by Robbin Joseph
            </p>
            <div>
              <div className="flex flex-row gap-4 ml-3 md:gap-6">
                <div className="bg-slate-300 rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center">
                  <Image
                    src="/images/BooingSectionImages/CardImage1.png"
                    alt="Card Image"
                    height={18}
                    width={18}
                    className="md:h-6 md:w-6"
                  />
                </div>
                <div className="bg-slate-300 rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center">
                  <Image
                    src="/images/BooingSectionImages/CardImage2.png"
                    alt="Card Image"
                    height={18}
                    width={18}
                    className="md:h-6 md:w-6"
                  />
                </div>
                <div className="bg-slate-300 rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center">
                  <Image
                    src="/images/BooingSectionImages/CardImage3.png"
                    alt="Card Image"
                    height={18}
                    width={18}
                    className="md:h-6 md:w-6"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 ml-3 mt-3 md:gap-4">
                <Image
                  src="/images/BooingSectionImages/building 1.png"
                  alt="Building"
                  height={18}
                  width={18}
                  className=""
                />
                <p className="text-zinc-800 opacity-75 text-sm md:text-base">
                  24 people going
                </p>
              </div>
            </div>
          </div>

          {/* Second Overlapping Card with Zoom Effect */}
          <div className="absolute bottom-28 right-[-80px] md:right-[-125px] z-10 bg-white rounded-xl shadow-lg px-4 py-3 md:px-6 md:py-4 w-80 md:w-auto transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row gap-4 md:gap-5">
              <Image
                src="/images/BooingSectionImages/Booking2.png"
                alt=""
                height={40}
                width={40}
                className="rounded-full h-12 w-12 md:h-16 md:w-16"
              />
              <div>
                <p className="text-zinc-800 opacity-75 mb-1 text-sm md:text-base">
                  Ongoing
                </p>
                <p className="font-semibold text-sm md:text-base">
                  Trip to Rome
                </p>
                <div>
                  <p className="font-semibold text-sm md:text-base">
                    <span className="text-purple-800">60%</span> completed
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                    <div
                      className="bg-purple-700 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSection;
