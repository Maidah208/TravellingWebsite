import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-y-8 items-center text-zinc-700 px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col items-center sm:items-center text-center">
          <Image src="/images/Logo.png" alt="Jadoo." height={50} width={120} />
          <p className="mt-6 text-sm">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex flex-col items-center sm:text-center">
          <h1 className="font-bold text-xl mb-2 text-black">Company</h1>
          <a>About</a>
          <a>Careers</a>
          <a>Mobile</a>
        </div>
        <div className="flex flex-col items-center sm:text-center">
          <h1 className="font-bold text-xl mb-2 text-black">Help/FAQ</h1>
          <a>About</a>
          <a>Press</a>
          <a>Affiliates</a>
        </div>
        <div className="flex flex-col items-center sm:text-center">
          <h1 className="font-bold text-xl mb-2 text-black">More</h1>
          <a>Airlinefees</a>
          <a>Airline</a>
          <a>Low fare tips</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-row justify-center gap-3">
            <Image
              src="/images/FooterSectionImages/FbLogo.png"
              alt="FaceBook"
              height={65}
              width={65}
            />
            <Image
              src="/images/FooterSectionImages/IGLogo.png"
              alt="Instagram"
              height={65}
              width={65}
            />
            <Image
              src="/images/FooterSectionImages/TwitterLogo.png"
              alt="Twitter"
              height={66}
              width={65}
            />
          </div>
          <a className="font-bold py-3 px-3">Discover our app</a>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <div className="bg-black rounded-[50px] flex flex-row px-3 w-[107px] h-[35px]">
              <Image
                src="/images/FooterSectionImages/GPlayStoreLogo.png"
                alt="Google PlayStore"
                height={20}
                width={20}
                className="h-[20px] w-[20px] mt-[6px] mr-1"
              />
              <div className="text-white text-[9px] mt-1">
                <p className="font-bold">GET IT ON</p>
                <p>GOOGLE PLAY</p>
              </div>
            </div>
            <div className="bg-black rounded-[50px] flex flex-row px-2 w-[100px] h-[35px]">
              <Image
                src="/images/FooterSectionImages/AppleLogo.png"
                alt="Apple"
                height={16}
                width={16}
                className="h-[16px] w-[16px] mt-[8px] mr-1"
              />
              <div className="text-white text-[9px] mt-1">
                <p>Available on the</p>
                <p className="font-bold">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center pb-10">
        <p className="text-zinc-600 font-bold text-center">
          All rights reserved @ jadoo.co
        </p>
      </div>
    </>
  );
};

export default Footer;
