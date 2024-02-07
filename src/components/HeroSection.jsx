import React from "react";
import Web3 from "/image-web-3-desktop.jpg";
import Balancer from "react-wrap-balancer";

const HeroSection = () => {
  return (
    <>
      <section className="grid grid-cols-2 justify-between items-center">
        {/* left side */}
        <div>
          <img src={Web3} alt="" />

          <div className="grid grid-cols-2 justify-between items-center my-5">
            <div>
              <Balancer className="text-5xl font-extrabold text-left">
                The Bright Future of Web 3.0?
              </Balancer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
