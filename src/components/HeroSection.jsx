import React from "react";
import Web3 from "/image-web-3-desktop.jpg";
import Balancer from "react-wrap-balancer";
import CTA from "./CTA";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-start gap-5">
        {/* left side */}
        <div className="w-full md:w-[70%]">
          <img src={Web3} alt="" className="" />

          <div className="md:grid grid-cols-2 justify-between items-start my-5 gap-5">
            <div>
              <Balancer className="text-5xl font-extrabold text-left tracking-wider mb-4 md:mb-0">
                The Bright Future of Web 3.0?
              </Balancer>
            </div>

            <div className="flex flex-col items-start gap-y-6">
              <p className="text-base font-normal text-DarkgrayishBlue tracking-widest">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <CTA title={"READ MORE"} />
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="w-full bg-VerydarkBlue md:w-[30%] px-5 py-8 h-full">
          <h3 className="text-2xl text-SoftOrange font-bold mb-4">New</h3>

          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2 border-b border-DarkgrayishBlue">
              <a
                href=""
                className="text-xl tracking-wide font-semibold text-OffWhite hover:text-SoftOrange duration-75"
              >
                Hydrogen VS Electric Cars
              </a>

              <p className="text-DarkgrayishBlue font-normal pb-9">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>

            <div className="flex flex-col gap-y-2 border-b border-DarkgrayishBlue">
              <a
                href=""
                className="text-xl tracking-wide font-semibold text-OffWhite hover:text-SoftOrange duration-75"
              >
                The Downsides of AI Artistry
              </a>

              <p className="text-DarkgrayishBlue font-normal pb-9">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>

            <div className="flex flex-col gap-y-2 ">
              <a
                href=""
                className="text-xl tracking-wide font-semibold text-OffWhite hover:text-SoftOrange duration-75"
              >
                Is VC Funding Drying Up?
              </a>

              <p className="text-DarkgrayishBlue font-normal pb-9">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
