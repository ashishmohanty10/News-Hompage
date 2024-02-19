import React from "react";
import DesktopImg from "/image-web-3-desktop.jpg";
import MobileImg from "/image-web-3-mobile.jpg";
import Balancer from "react-wrap-balancer";
import CTA from "./CTA";

const Hero = () => {
  return (
    <div className="py-4">
      <div className="container">
        <div className="lg:grid grid-cols-12 gap-5">
          {/* left side */}
          <div className="lg:col-span-8 mb-4 lg:mb-0">
            <img src={DesktopImg} alt="" className="hidden md:block" />
            <img src={MobileImg} alt="" className="md:hidden" />

            <div className="md:flex justify-between items-start py-2">
              <Balancer className="text-6xl font-extrabold md:w-1/2 w-full mb-4 md:mb-0">
                The Bright Future of Web 3.0?
              </Balancer>

              <div className="md:w-1/2 w-full ">
                <p className="text-DarkgrayishBlue text-base mb-8 font-normal">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>

                <CTA title={"READ MORE"} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 h-full bg-VerydarkBlue p-4">
            <h3 className="text-SoftOrange font-bold text-2xl">NEW</h3>
            <div className="flex flex-col justify-between gap-10">
              <div className="border-b border-DarkgrayishBlue pb-10">
                <a className="cursor-pointer text-OffWhite text-2xl font-bold hover:text-SoftOrange duration-75 ">
                  Hydrogen VS Electric Cars
                </a>
                <p className="text-DarkgrayishBlue text-lg mt-5">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>

              <div className="border-b border-DarkgrayishBlue pb-10">
                <a className="cursor-pointer text-OffWhite text-2xl font-bold hover:text-SoftOrange duration-75 ">
                  The Downsides of AI Artistry
                </a>
                <p className="text-DarkgrayishBlue text-lg mt-5">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>

              <div>
                <a className="cursor-pointer text-OffWhite text-2xl font-bold hover:text-SoftOrange duration-75 ">
                  Is VC Funding Drying Up?
                </a>
                <p className="text-DarkgrayishBlue text-lg mt-5">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
