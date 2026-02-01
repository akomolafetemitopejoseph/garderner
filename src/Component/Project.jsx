import React, { useEffect, useState } from "react";
import { IoPlayBackOutline } from "react-icons/io5";
import { TbPlayerTrackNext } from "react-icons/tb";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";
import project7 from "../assets/project7.jpeg";
import project8 from "../assets/project8.jpeg";
import project9 from "../assets/project9.jpeg";
import project10 from "../assets/project10.jpeg";
import { motion } from "framer-motion";

const Project = () => {
  const projectData = [
    {
      title: "lawn And Flowers",
      location: "Pinnock Estate lekki",
      image: project1,
    },

    {
      title: "lawn And Flowers",
      location: "Shoreline Estate Ikoyi",
      image: project2,
    },

    {
      title: "Flowers",
      location: "Shoreline Estate Ikoyi",
      image: project3,
    },

    {
      title: "Topiary",
      location: "Lekki",
      image: project4,
    },

    {
      title: "Lawn And Flowers",
      location: "Igando Lagos",
      image: project5,
    },

    {
      title: "Pot And Flowers",
      location: "1004 VI Lagos",
      image: project6,
    },
    {
      title: "Flowers",
      location: "Shoreline Ikoyi",
      image: project7,
    },
    {
      title: "Palms",
      location: "Ikoyi",
      image: project8,
    },
    {
      title: "Working On Tree",
      location: "Ikoyi",
      image: project9,
    },
    {
      title: "Flowers",
      location: "Ikoyi",
      image: project10,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardsShow, setCardsShow] = useState(1);

  const nextproject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const updateCardsShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsShow(projectData.length);
      } else {
        setCardsShow(1);
      }
    };
    updateCardsShow();

    window.addEventListener("resize", updateCardsShow);
    return () => window.removeEventListener("resize", updateCardsShow);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x:-200}}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
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
          onClick={prevProject}
          className="p-3 rounded mr-2 bg-gray-200 cursor-pointer"
          aria-label="Previous Project"
        />

        <TbPlayerTrackNext
          onClick={nextproject}
          className="p-3 rounded mr-2 bg-gray-200 cursor-pointer"
          aria-label="Next Project"
        />
      </div>
      {/* Project slider container */}
      <div className="">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 110) / cardsShow}%)`,
          }}
        >
          {projectData.map((projects, index) => (
            <div key={index} className="relative flex shrink-0 w-full sm:w-1/4">
              <img
                className="w-fit h-auto mb-14"
                src={projects.image}
                alt={projects.title}
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 py-2 shadow-md text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {projects.title}
                  </h2>
                  <h2 className="text-gray-500 text-sm">{projects.location}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
