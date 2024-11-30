import Image from "next/image";

const SubscriptionSection = () => {
  return (
    <>
      <section className="bg-[#DFD7F9] py-16 lg:mx-52 sm:mx-12 my-8 rounded-tr-[50px] rounded-bl-[50px] relative">
        {/* Decorative Image (Top-Right) */}
        <div className="absolute top-4 right-4">
          <Image
            src="/images/SubscriptionSectionImages/Group 77.png"
            alt="Decorative Graphic"
            height={40}
            width={40}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h3 className="text-2xl text-gray-700 font-semibold max-w-xl mx-auto">
            Subscribe to get information, latest news, and other interesting
            offers about <span className="text-indigo-600">Jadoo</span>.
          </h3>

          {/* Subscription Form */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <input type="text" placeholder="Your Email" className="rounded px-2 text-sm text-black py-2" />
            <button className="bg-[#FF946D] px-5 py-2 rounded text-white hover:shadow-2xl">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscriptionSection;
