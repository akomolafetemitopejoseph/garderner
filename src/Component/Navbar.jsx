import React, { useState } from "react";
import { BsFillTreeFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menue, setMenue] = useState(false);

  const toggleMenue = () => {
    setMenue(!menue);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <div className="flex justify-center items-center">
          <p className="text-[14px] font-bold">josh</p>
          <BsFillTreeFill className="text-xl md:text-4xl text-green-950" />
          <h1 className="text-[14px] font-bold">plant & garden</h1>
        </div>
        <div className="text-xl md:text-3xl font-bold">
          <ul className="hidden md:flex gap-7 text-green-900">
            <li>
              <a
                href="#home"
                className="capitalize cursor-pointer hover:text-green-800 transition duration-200"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="capitalize cursor-pointer hover:text-green-800 transition duration-200"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="capitalize cursor-pointer hover:text-green-800 transition duration-200"
              >
                project
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="capitalize cursor-pointer hover:text-green-800 transition duration-200"
              >
                testimonials
              </a>
            </li>
          </ul>
        </div>

        <button className="hidden md:block bg-white px-6 py-2 text-green-900 rounded-full font-bold text-xl md:text-2xl hover:bg-gray-50 hover:text-green-700 cursor-pointer transition duration-200">
          Connect
        </button>
        {/* Menue icons  */}

        <div className="flex lg:hidden justify-end mx-3 my-3">
          {menue ? (
            <AiOutlineMenu onClick={toggleMenue} className="text-3xl" />
          ) : (
            <RxCross1 onClick={toggleMenue} className="text-3xl" />
          )}
        </div>
      </div>

      {/* FOR MOBILE SECTION */}
      {menue && (
        <div className="md:hidden z-10 fixed w-full right-0 top-20 bottom-0 overflow-hidden bg-white transition-all">
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <li>
              <a
                onClick={() => setMenue(false)}
                href="#home"
                className="capitalize cursor-pointer hover:text-green-800 transition duration-200"
              >
                home
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenue(false)}
                href="#about"
                className="capitalize cursor-pointer hover:text-green-800 transition duration-200"
              >
                about
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenue(false)}
                href="#project"
                className="capitalize cursor-pointer hover:text-green-800 transition duration-200"
              >
                project
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenue(false)}
                href="#testimonials"
                className="capitalize cursor-pointer hover:text-green-800 transition duration-200"
              >
                testimonials
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
