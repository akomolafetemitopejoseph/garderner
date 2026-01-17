import React from "react";
import brandImg from "../assets/brandImg.jpg";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 capitalize">
        about
        <span className="underline underline-offset-4 decoration-1 under font-light ml-2 ">
          our brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate about plants and gardens. Bring nature to your environment
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={brandImg}
          className="w-full h-150 sm:w-1/2 max-w-lg"
          alt="brandimage"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 capitalize">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>years of excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">30+</p>
              <p>project completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">30+</p>
              <p>recommendation from clients</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">5+</p>
              <p>ongoing projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We deliver professional plant care and garden maintenance services,
            including precision trimming that creates clean edges, structured
            shapes, and refined garden designs.
            Reliable plant care and garden maintenance services you can trust.
          </p>
          <button className="bg-green-800 text-white px-8 py-3 rounded capitalize hover:text-gray-200 cursor-pointer">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
