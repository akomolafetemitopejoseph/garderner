import React from "react";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

const Project = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        projects{" "}
        <span className="underline-offset-8 decoration-1 underline font-light capitalize">
          completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Caring for Plants. Maintaining Beautiful Gardens.
        <span className="font-light">
          Building legacies-explore our portfolio
        </span>
      </p>
      {/* sliders button */}
      <div className="flex justify-end items-center mb-8 gap-5">
        <TbPlayerTrackPrev
        //   className="p-3 bg-gray-200 rounded mr-2"
        //   aria-label="Previous Project"
        />

        <TbPlayerTrackNextFilled
        //   className="p-3 bg-gray-200 rounded mr-2"
        //   aria-label="Next Project"
        />
      </div>
    </div>
  );
};

export default Project;
