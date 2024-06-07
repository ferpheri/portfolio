"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({theme}) => {
  return (
    <div className="w-full h-full relative ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="mt-8 lg:mt-0"
      >
        {/* image */}
        <motion.div
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[263px] h-[263px] lg:h-[468px] lg:w-[468px] absolute right-5 top-5"
        >
          <Image
            src="/assets/mohamad3.png"
            priority
            quality={100}
            fill
            alt="me"
            className="object-contain rounded-full"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] h-[300px] lg:w-[506px] lg:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke={theme === "dark" ? "#00ff99" : "#303F9F"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
export default Photo;
