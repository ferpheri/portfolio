"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const stats = [
  {
    num: 6,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Project completed",
  },
  {
    num: 7,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <motion.section className="pt-4 pb-12 lg:pt-0 lg:absolute lg:bottom-0 w-full left-0 mt-[20px] "
    initial={{opacity:0}} 
    animate={{opacity:1,transition:{delay:1, duration:0.4,ease:"easeIn"}} }
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((stat, index) => (
            <div
              className="flex flex-1 gap-4 items-center justify-center lg:justify-start"
              key={index}
            >
              <CountUp
                end={stat.num}
                delay={2}
                duration={5}
                className="text-4xl lg:text-6xl font-extrabold text-indigo-900 dark:text-accent"
              />
              <p
                className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-black dark:text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Stats;
