"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import useLanguage from "./useLanguage";
import numeral from "numeral";

const formatNumber = (num, lang) => {
  if (lang === "fa") {
    return numeral(num)
      .format("0,0")
      .replace(/[0-9]/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1728)); // Convert digits to Persian
  }
  return num;
};

const stats = [
  { num: 6, text: { en: "Years of experience", fa: "سال تجربه" } },
  { num: 10, text: { en: "Projects completed", fa: "پروژه‌های تکمیل شده" } },
  { num: 7, text: { en: "Technologies mastered", fa: "فناوری‌های مسلط شده" } },
  { num: 500, text: { en: "Code commits", fa: "مشارکت‌های در برنامه‌نویسی" } },
];

const Stats = () => {
  const currentLang = useLanguage();
  return (
    <motion.section
      className="pt-4 pb-12 lg:pt-0 w-full mt-[20px] "
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((stat, index) => (
            <div
              className={`flex flex-col lg:flex-row md:flex-row items-center lg:items-center justify-center text-center  ${currentLang === "fa" ? "gap-x-2 lg:justify-end" : "gap-0 lg:justify-start"}`}
              key={index}
              style={{ direction: currentLang === "fa" ? "rtl" : "ltr" }}
            >
              <CountUp
                end={stat.num}
                delay={3}
                duration={5}
                formattingFn={(num) => formatNumber(num, currentLang)}
                className="text-4xl lg:text-6xl font-extrabold text-indigo-900 dark:text-accent"
              />
              <p
                className={`mt-2 lg:mt-0 lg:ml-2 ${stat.text[currentLang].length < 15 ? "max-w-[100px]" : "max-w-[150px]"} ${currentLang === "fa" ? "whitespace-nowrap" : ""} leading-snug text-black dark:text-white/80`}
              >
                {stat.text[currentLang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
