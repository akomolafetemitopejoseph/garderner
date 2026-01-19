import React from "react";
import { IoPlayBackOutline } from "react-icons/io5";
import { TbPlayerTrackNext } from "react-icons/tb";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";

const Project = () => {
  const projectData = [
    {
      title: "lawn and flowers",
      location: "Pinnock Estate lekki",
      image: project1,
    },

    {
      title: "lawn and flowers",
      location: "Shoreline Estate Ikoyi",
      image: project2,
    },

    {
      title: "flowers",
      location: "Shoreline Estate Ikoyi",
      image: project3,
    },

    {
      title: "Topiary",
      location: "Lekki",
      image: project4,
    },

    {
      title: "Lawn and flowers",
      location: "Igando Lagos",
      image: project5,
    },

    {
      title: "Pot and Flowers",
      location: "1004 VI Lagos",
      image: project6,
    },
  ];
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        projects
        <span className="ml-2 underline-offset-8 decoration-1 underline font-light capitalize">
          completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Caring for Plants. Maintaining Beautiful Gardens.
        <span className="font-light">
          Building legacies-explore our portfolio.
        </span>
      </p>
      {/* sliders button */}
      <div className="flex justify-end items-center mb-8 text-4xl">
        <IoPlayBackOutline
          className="p-3 rounded mr-2 bg-gray-200 cursor-pointer"
          aria-label="Previous Project"
        />

        <TbPlayerTrackNext
          className="p-3 rounded mr-2 bg-gray-200 cursor-pointer"
          aria-label="Next Project"
        />
      </div>
      {/* Project slider container */}
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out">
          {projectData.map((projects, index) => (
            <div key={index} className="relative flex shrink-0 w-full sm:w-1/4">
              <img
                className="w-100 h-100"
                src={projects.image}
                alt={projects.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
