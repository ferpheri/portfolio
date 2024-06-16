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
// about data

const about = {
  title: "About me",
  description:
    "من محمدم، عاشق برنامه‌نویسی و تکنولوژی. از ساخت اپلیکیشن‌های خفن و کاربرپسند لذت می‌برم:",
  info: [
    {
      fieldName: "اسم",
      feildValue: "محمد دهقانیان",
    },
    {
      fieldName: "موبایل",
      feildValue: "(+۹۸) ۹۳۹ ۸۳۷ ۳۵۷۰",
    },
    {
      fieldName: "تجربه",
      feildValue: "+سال ۶",
    },
    {
      fieldName: "ایمیل",
      feildValue: "Dehghanian77@gmail.com",
    },
    {
      fieldName: "ملیت",
      feildValue: "ایرانی",
    },
    {
      fieldName: "زبان ها",
      feildValue: "انگلیسی, فارسی",
    },
  ],
};

// experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "تجربه های من",
  description:
    "تو این مدت، با چند شرکت همکاری کردم و تجربه‌های باحالی به دست آوردم:",
  items: [
    {
      company: "هاب شیراز",
      position: "کارآموز دستیار",
      duration: "۱۳۹۹ تابستان",
    },
    {
      company: "جام آبی یزد",
      position: "برنامه نویس ربات",
      duration: "۱۴۰۱ تابستان و پاییز",
    },
    {
      company: "۲ جام آبی یزد ",
      position: "برنامه نوسی ربات",
      duration: "۱۴۰۲ - ۱۴۰۳",
    },
  ],
};

// education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "تحصیلات من",
  description:
    "من تو زمینه مهندسی نرم‌افزار و زبان‌ها تحصیل کردم تا دانشم رو بیشتر کنم:",
  items: [
    {
      institution: "دانشگاه یزد",
      degree: "لیسانس مهندسی کامپیوتر",
      duration: "۱۳۹۸ - ۱۴۰۳",
    },
    {
      institution: "کانون زبان ایران",
      degree: "دیپلم زبان انگلیسی",
      duration: "۱۳۹۷",
    },
    {
      institution: "دوره آنلاین",
      degree: "Front-end برنامه نویسی",
      duration: "۱۴۰۰ - ۱۴۰۱",
    },
  ],
};

// skills data

const skills = {
  title: "مهارت های من",
  description:
    "این‌ها مهارت‌ هایی هست که تو این مدت یاد گرفتم و توشون تبحر دارم:",
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
            <TabsTrigger value="experience">تجربه</TabsTrigger>
            <TabsTrigger value="education">تحصیلات</TabsTrigger>
            <TabsTrigger value="skills">مهارت</TabsTrigger>
            <TabsTrigger value="about">درباره من</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center lg:text-right ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p
                  className="max-w-[600px] text-black/80 dark:text-white/60 mx-auto lg:mx-0 lg:max-w-[750px]"
                  style={{ direction: "rtl" }}
                >
                  {experience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-indigo-400 dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-end gap-1"
                      >
                        <span className="text-indigo-950 dark:text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-right">
                          {item.position}
                        </h3>
                        <div
                          className="flex items-center gap-3"
                          style={{ direction: "rtl" }}
                        >
                          <span className="w-[6px] h-[6px] bg-indigo-700 dark:bg-accent rounded-full"></span>
                          <p
                            className="text-black/80 dark:text-white/60"
                            style={{ direction: "rtl" }}
                          >
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
              <div className="flex flex-col gap-[30px] text-center lg:text-right">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p
                  className="max-w-[600px] text-black/80 dark:text-white/60 mx-auto lg:mx-0 lg:max-w-[750px]"
                  style={{ direction: "rtl" }}
                >
                  {education.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-indigo-400 dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-end gap-1"
                      >
                        <span className="text-indigo-950 dark:text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-right">
                          {item.degree}
                        </h3>
                        <div
                          className="flex items-center gap-3"
                          style={{ direction: "rtl" }}
                        >
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
                <div className="flex flex-col text-center lg:text-right gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p
                    className="max-w-[600px] text-black/80 dark:text-white/60 mx-auto lg:mx-0 lg:max-w-[750px]"
                    style={{ direction: "rtl" }}
                  >
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px] ">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                    {skills.skillsList.map((skill, index) => (
                      <li key={index} className="mb-4">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-indigo-400 dark:bg-[#232329] rounded-xl justify-center items-center flex group">
                              <div className="text-6xl group-hover:text-indigo-700 dark:group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center lg:text-right"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p
                  className="text-black/80 dark:text-white/60 max-w-[600px] mx-auto lg:mx-0 lg:max-w-[750px]"
                  style={{ direction: "rtl" }}
                >
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0 lg:max-w-[750px] lg:gap-x-48">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center lg:justify-end gap-4 "
                    >
                      <span className="text-xl lg:flex-shrink-0">
                        {item.feildValue}
                      </span>
                      <span className="text-black/80 dark:text-white/60 ">
                        <span className="text-indigo-700 dark:text-accent">
                          :
                        </span>
                        {item.fieldName}
                      </span>
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
