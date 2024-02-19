import React, { useState } from "react";
import Logo from "/logo.svg";
import { Navlivks } from "../data";
import Hamburger from "/icon-menu.svg";
import HamburgerClose from "/icon-menu-close.svg";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="py-5 relative">
      <nav className="container">
        <div className="flex justify-between items-center">
          {/* left side  */}
          <div>
            <img src={Logo} alt="" />
          </div>

          {/* right */}

          <ul className="hidden md:flex justify-between items-center gap-5">
            {Navlivks.map((data, index) => (
              <li
                key={index}
                className="text-DarkgrayishBlue hover:text-SoftOrange duration-75"
              >
                {data.title}
              </li>
            ))}
          </ul>

          <ul className="md:hidden" onClick={handleMenu}>
            <div className="z-50 absolute top-8 right-8">
              {isMenu ? (
                <img src={HamburgerClose} alt="" />
              ) : (
                <img src={Hamburger} alt="" />
              )}
            </div>

            {isMenu ? (
              <ul className="bg-OffWhite flex flex-col gap-5 absolute top-0 right-0 p-5 py-40 w-[200px] shadow-md h-screen">
                {Navlivks.map((data, index) => (
                  <li key={index}>{data.title}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
