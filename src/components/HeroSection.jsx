import React from "react";
import Web3 from "/image-web-3-desktop.jpg";
import Balancer from "react-wrap-balancer";
import CTA from "./CTA";

const HeroSection = () => {
  return (
    <>
      <section className="grid grid-cols-2 justify-between items-center gap-5">
        {/* left side */}
        <div>
          <img src={Web3} alt="" />

          <div className="grid grid-cols-2 justify-between items-center my-5">
            <div>
              <Balancer className="text-5xl font-extrabold text-left">
                The Bright Future of Web 3.0?
              </Balancer>
            </div>

            <div className="flex flex-col items-start gap-y-6">
              <p className="text-sm font-normal text-DarkgrayishBlue tracking-wide">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <CTA title={"READ MORE"} />
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="bg-VerydarkBlue h-full"></div>
      </section>
    </>
  );
};

export default HeroSection;
