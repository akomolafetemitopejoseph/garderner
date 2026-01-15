import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/bgImage.jpg')" }}
      id="#header"
    >
      <Navbar />
      <div className="m-auto text-center  py-4 px-6 md:px-20 lg:px-32">
        <div className="text-white text-2xl md:text-4xl max-w-3xl sm:text-6xl font-bold leading-13">
          <p className="">We care for yor garden like it's our own.</p>
          <p>
            Turning every space into a blooming garden, <br /> growing beauty
            and naturally.
          </p>
        </div>

        <div className="space-x-6 mt-16">
          <a href="#project">
            <button className="border border-white px-8 py-3 rounded text-green-700 font-bold text-xl lg:text-2xl bg-gray-100 hover:bg-gray-200 active:bg-green-200 transition-all duration-300 cursor-pointer">
              Projects
            </button>
          </a>
          <a href="#contact">
            <button className="border border-white px-8 py-3 rounded text-green-700 font-bold text-xl lg:text-2xl bg-gray-100 hover:bg-gray-200 active:bg-green-200 transition-all duration-300 cursor-pointer">
              Contact us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
