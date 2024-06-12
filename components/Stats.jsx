"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import useLanguage from "./useLanguage";
import numeral from "numeral";

const formatNumber = (num, lang) => {
  if (lang === "fa") {
    return numeral(num)
      .format("0,0")
      .replace(/0/g, "۰")
      .replace(/1/g, "۱")
      .replace(/2/g, "۲")
      .replace(/3/g, "۳")
      .replace(/4/g, "۴")
      .replace(/5/g, "۵")
      .replace(/6/g, "۶")
      .replace(/7/g, "۷")
      .replace(/8/g, "۸")
      .replace(/9/g, "۹");
  }
  return num;
};

const stats = [
  {
    num: 6,
    text: { en: "Years of experience", fa: "سال تجربه" },
  },
  {
    num: 10,
    text: { en: "Project completed", fa: "پروژه های تکمیل شده" },
  },
  {
    num: 7,
    text: { en: "Technologies mastered", fa: "فن آوری های مسلط شده" },
  },
  {
    num: 500,
    text: { en: "Code commits", fa: "مشارکت در برنامه نویسی" },
  },
];

const Stats = () => {
  const currentLang = useLanguage();
  return (
    <motion.section
      className="pt-4 pb-12 lg:pt-0 lg:absolute lg:bottom-0 w-full left-0 mt-[20px] "
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((stat, index) => (
            <div
              className="flex flex-1 gap-4 items-center justify-center"
              key={index}
              style={{ direction: currentLang === "fa" ? "rtl" : "lrt" }}
            >
              <CountUp
                end={stat.num}
                delay={3}
                duration={5}
                formattingFn={(num) => formatNumber(num, currentLang)}
                className="text-4xl lg:text-6xl font-extrabold text-indigo-900 dark:text-accent"
              />
              <p
                className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-black dark:text-white/80`}
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
