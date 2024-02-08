import React, { useState } from "react";
import Logo from "/logo.svg";
import { Navlinks } from "./Links";
import Menu from "/icon-menu.svg";
import CloseMenu from "/icon-menu-close.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="py-5 relative">
      <section className="container ">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="" />
          </div>

          <ul className="hidden md:flex justify-between items-center gap-5">
            {Navlinks.map(({ href, name }) => (
              <li key={href}>
                <a
                  to={href}
                  target="_self"
                  className="text-sm font-base text-DarkgrayishBlue hover:text-SoftOrange duration-75"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile navbar  */}

          <div onClick={handleMenu} className="z-50 md:hidden">
            {toggleMenu ? <img src={CloseMenu}></img> : <img src={Menu}></img>}
          </div>

          {toggleMenu ? (
            <div className="md:hidden absolute top-0 right-0 bg-OffWhite px-5 py-32  h-screen w-[200px] flex items-start">
              <ul className="flex flex-col gap-5">
                {Navlinks.map(({ href, name }) => (
                  <li key={href}>
                    <a
                      to={href}
                      target="_self"
                      className="text-xl font-base text-VerydarkBlue hover:text-SoftOrange duration-75"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
