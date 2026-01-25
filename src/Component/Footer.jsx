import React from "react";
import { BsFillTreeFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-green-600 w-full overflow-hidden"
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div>
          <div className="flex w-full md:w-1/3 mb-8 md:mb-0">
            <div></div>
            <p
              className="text-[12px]
           font-bold"
            >
              josh
            </p>
            <BsFillTreeFill className="text-[20px] text-green-950" />
            <h1 className="text-[12px] font-bold">plant & garden</h1>
          </div>

          <p className="text-gray-800 mt-4">
            Reliable plant care and <br /> garden maintenance services you can
            trust.
          </p>
        </div>

        <div>
            <h3 className="text-white text-lg font-bold mb-4">company</h3>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
