"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project1",
    description:
      "This project is a simulation of the Apple website, showcasing a seamless user experience. Explore its innovative design and functionality.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Gsap" }],
    image: "/assets/work/apple-final.png",
    live: "https://apple-website-simulation.vercel.app/",
    github: "https://github.com/ferpheri/Apple-Website-Simulation",
  },
  {
    num: "02",
    category: "frontend",
    title: "project3",
    description:
      "Get ready for liftoff with this engaging rocket simulation. It offers an immersive journey into the fascinating world of space exploration.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/rocket-final.png",
    live: "https://fer-rockets.onrender.com/",
    github: "https://github.com/ferpheri/Acme-Rockets/",
  },
  {
    num: "03",
    category: "frontend",
    title: "project2",
    description:
      "Craving tacos? This simulation of a vibrant taco shop brings the flavors to your screen.",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/taco-final.png",
    live: "https://little-taco-shop-eta.vercel.app/",
    github: "https://github.com/ferpheri/Little-Taco-Shop",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0 lg:py-0"
    >
      <div className="container mx-auto mt-12">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl dark:dark-text-outline text-outline text-transparent leading-none font-extrabold">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold text-black dark:text-white hover:text-indigo-700 dark:hover:text-accent leading-none transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className=" text-black/80 dark:text-white/60">
                {project.description}
              </p>
              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl text-indigo-700 dark:text-accent"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-black dark:border-white/20" />
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-indigo-400 dark:bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-black dark:text-white text-3xl transition-all dark:group-hover:text-accent group-hover:text-indigo-800 group-hover:rotate-45 duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-indigo-400 dark:bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-black dark:text-white text-3xl dark:group-hover:text-accent group-hover:text-indigo-800 group-hover:text-4xl duration-500 transition-all" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[530px] mb-12 lg:mb-0"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="bg-pink-50/20 h-[460px] relative group flex justify-center items-center">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                    {/* images */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                conatinerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-2 w-full z-20 justify-between lg:w-max lg:justify-start"
                btnStyles="bg-indigo-700 dark:bg-accent dark:hover:bg-accent-hover hover:bg-indigo-600 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
