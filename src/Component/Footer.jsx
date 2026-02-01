import React from "react";

import logo from "../assets/joshLogo_modifyCopy.jpeg";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-green-600 w-full overflow-hidden"
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start mb-5">
        <div>
          <div className="flex justify-center items-center gap-5 capitalize mb-8 md:mb-0">
          <h1 className="text-black font-extralight text-sm">plant & garden</h1>
            <img className="w-15 h-15 border-green-700 rounded-full " src={logo} alt="logo" />
          </div>

          <p className="text-gray-200 mt-4 mb-5">
            Reliable flower landscaping plant care <br /> garden maintenance
            services you can trust.
          </p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-black text-2xl font-extrabold mb-4 text-center">
            Company
          </h3>
          <ul className="flex text-center flex-col gap-2 text-gray-200">
            <a href="header" className="hover:text-gray-700">
              Home
            </a>
            <a href="#about" className="hover:text-gray-700">
              About us
            </a>
            <a href="#project" className="hover:text-gray-700">
              project
            </a>
            <a href="#contact" className="hover:text-gray-700">
              Contact
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] lg:text-sm">
            Copyright 2026 &copy;. All Right Reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
