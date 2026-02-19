import React from "react";

import logo from "../assets/joshLogo_modifyCopy.jpeg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-green-800 w-full overflow-hidden"
      id="footer"
    >
      <div className="container text-center mx-auto flex flex-col md:flex-row justify-between items-start mb-5">
        <div>
          <div className="flex justify-center items-center gap-5 capitalize mb-8 md:mb-0">
            <h1 className="text-black font-extrabold text-lg">
              Josh plant & garden
            </h1>
            <img
              className="w-15 h-15 border-green-900 rounded-full "
              src={logo}
              alt="logo"
            />
          </div>

          <p className="text-gray-200 mt-4 mb-5 text-2xl">
            Reliable flower landscaping plant care <br /> garden maintenance
            services you can trust.
          </p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-black text-3xl font-extrabold mb-4 text-center">
            Company
          </h3>
          <ul className="flex text-center flex-col gap-2 text-gray-200">
            <Link to="/header" smooth={true} duration={500}>
              <li className="hover:text-gray-900 transform duration-500 cursor-pointer">
                Home
              </li>
            </Link>

            <Link to="about" smooth={true} duration={500}>
              <li className="hover:text-gray-900 transform duration-500 cursor-pointer">
                About us
              </li>
            </Link>
            <Link to="project" smooth={true} duration={500}>
              <li className="hover:text-gray-900 transform duration-500 cursor-pointer">
                Project
              </li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <li className="hover:text-gray-900 transform duration-500 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-center">
          <h1 className="text-[15px] lg:text-sm">
            Copyright 2026 &copy;. All Right Reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
