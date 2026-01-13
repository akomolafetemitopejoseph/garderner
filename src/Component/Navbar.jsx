import React from "react";
import { BsFillTreeFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <div className="flex justify-center items-center">
          <BsFillTreeFill />
          <h1>plant & garden</h1>
        </div>
        <div>
          <ul className="hidden md:flex gap-7 text-white">
            <li>
              <a
                href="#home"
                className="capitalize cursor-pointer hover:text-gray-400"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="capitalize cursor-pointer hover:text-gray-400"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="capitalize cursor-pointer hover:text-gray-400"
              >
                project
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="capitalize cursor-pointer hover:text-gray-400"
              >
                testimonials
              </a>
            </li>
          </ul>
        </div>

        <button className="hidden md:block bg-white px-8 py-4 rounded-full">
          connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
