"use client";

import {
  FaHtml5,
  FaReact,
  FaJs,
  FaCss3,
  FaNodeJs,
  FaVuejs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiNextdotjs,
  SiC,
  SiGreensock,
  SiFramer,
  SiThreedotjs,
  SiTailwindcss,
  SiArduino,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react"; // Import useState

// about data
const about = {
  title: "About me",
  description:
    "Passionate software engineer with experience in web development and robotics programming: ",
  info: [
    {
      fieldName: "Name",
      feildValue: "Mohamad Dehghanian",
    },
    {
      fieldName: "Phone",
      feildValue: "(+98) 939 837 3570",
    },
    {
      fieldName: "Experience",
      feildValue: "3+ Years",
    },
    {
      fieldName: "Email",
      feildValue: "Dehghanian77@gmail.com",
    },
    {
      fieldName: "Nationality",
      feildValue: "Iranian",
    },
    {
      fieldName: "Languages",
      feildValue: "English, Persian",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have had the opportunity to work with various organizations and gain valuable experience in different roles:",
  items: [
    {
      company: "Shiraz Hub",
      position: "Teaching Assistant",
      duration: "Summer 2020",
    },
    {
      company: "Yazd Blue Cup",
      position: "Robot Programmer",
      duration: "Summer and Fall 2022 ",
    },
    {
      company: "Yazd Blue Cup 2",
      position: "Robot Programmer",
      duration: "2023-2024 ",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have pursued education in both software engineering and languages to broaden my knowledge:",
  items: [
    {
      institution: "Yazd University",
      degree: "Bachelor's degree of Software Engineering",
      duration: "Summer 2020",
    },
    {
      institution: "Iran Language Institute",
      degree: "English language diploma",
      duration: "2019",
    },
    {
      institution: "Online Course",
      degree: "Front-end Programming",
      duration: "2021-2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I have developed expertise in various technologies and tools essential for modern software development:",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiGreensock />,
      name: "GSAP",
    },
    {
      icon: <SiFramer />,
      name: "Framer motion",
    },
    {
      icon: <SiThreedotjs />,
      name: "three.js",
    },
    {
      icon: <SiArduino />,
      name: "arduino",
    },
  ],
};

const Resume = () => {
  const [selectedSkill, setSelectedSkill] = useState(null); // State to track the selected skill

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto mt-12">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-black/80 dark:text-white/60 mx-auto lg:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-indigo-400 dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
                      >
                        <span className="text-indigo-950 dark:text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-indigo-700 dark:bg-accent rounded-full"></span>
                          <p className="text-black/80 dark:text-white/60">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-black/80 dark:text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-indigo-400 dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
                      >
                        <span className="text-indigo-950 dark:text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-indigo-700 dark:bg-accent rounded-full"></span>
                          <p className="text-black/80 dark:text-white/60">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col text-center lg:text-left gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-black/80 dark:text-white/60 mx-auto lg:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px] ">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                    {skills.skillsList.map((skill, index) => (
                      <li
                        key={index}
                        className="mb-4 relative"
                        onClick={() => setSelectedSkill(index)} // Set selected skill on click
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-indigo-400 dark:bg-[#232329] rounded-xl justify-center items-center flex group">
                              <div className="text-6xl group-hover:text-indigo-700 dark:group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="sm:hidden lg:block">
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        {selectedSkill === index && (
                          <motion.div
                            className="lg:hidden absolute bottom-0 w-full bg-indigo-700 dark:bg-accent text-center p1-2 rounded-b-xl"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: {
                                delay:0.05,
                                duration: 0.7,
                                ease: "easeInOut",
                              },
                            }}
                          >
                            <p className="capitalize text-white/60 dark:text-black/80 font-semibold">
                              {skill.name}
                            </p>
                          </motion.div>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-black/80 dark:text-white/60 max-w-[600px] mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center lg:justify-start gap-4"
                    >
                      <span className="text-black/80 dark:text-white/60">
                        {item.fieldName}
                        <span className="text-indigo-700 dark:text-accent">
                          :
                        </span>
                      </span>
                      <span className="text-xl">{item.feildValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
