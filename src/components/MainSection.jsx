import React from "react";
import Gaming from "/image-gaming-growth.jpg";
import Laptop from "/image-top-laptops.jpg";
import Retro from "/image-retro-pcs.jpg";
import Balancer from "react-wrap-balancer";

const MainSection = () => {
  return (
    <main className="md:grid md:grid-cols-3  justify-between items-start py-5 ">
      <div className="grid grid-cols-2 justify-between items-start   mb-4 md:mb-0">
        <img src={Retro} alt="" className="h-[200px]" />

        <div>
          <h3 className="text-2xl text-GrayishBlue font-bold mb-2">01</h3>

          <h4 className="text-base font-bold text-VerydarkBlue mb-1">
            Reviving Retro PCs
          </h4>
          <Balancer className="text-sm font-normal text-DarkgrayishBlue">
            What happens when old PCs are given modern upgrades?
          </Balancer>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-between items-start  mb-4 md:mb-0">
        <img src={Laptop} alt="" className="h-[200px]" />

        <div>
          <h3 className="text-2xl text-GrayishBlue font-bold mb-2">02</h3>

          <h4 className="text-base font-bold text-VerydarkBlue mb-1">
            Top 10 Laptops of 2022
          </h4>
          <Balancer className="text-sm font-normal text-DarkgrayishBlue">
            Our best picks for various needs and budgets.
          </Balancer>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-between items-start mb-4 md:mb-0">
        <img src={Gaming} alt="" className="h-[200px]" />

        <div>
          <h3 className="text-2xl text-GrayishBlue font-bold mb-2">03</h3>

          <h4 className="text-base font-bold text-VerydarkBlue mb-1">
            The Growth of Gaming
          </h4>
          <Balancer className="text-sm font-normal text-DarkgrayishBlue">
            How the pandemic has sparked fresh opportunities.
          </Balancer>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
