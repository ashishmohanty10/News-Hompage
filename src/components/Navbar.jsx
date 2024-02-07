import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.svg";
import { Navlinks } from "./Links";

const Navbar = () => {
  return (
    <nav className="py-5">
      <section className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="" />
          </div>

          <ul className="flex justify-between items-center gap-5">
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
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
