"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Creating user-friendly and functional websites with a focus on speed and security.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Code Robots",
    description:
      "Programming robots to automate tasks, improving efficiency and reducing costs.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Web Design",
    description:
      "Designing creative and unique web layouts to enhance user experience.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-start py-12 lg:py-0">
      <div className="container mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-1 flex-col justify-center gap-6 group ${
                index === 2
                  ? "lg:col-span-2 lg:col-start-1 lg:col-end-3 lg:mx-auto lg:w-2/3"
                  : ""
              }`}
            >
              <div className="w-full flex justify-between items-center">
                {/* top */}
                <div className="text-5xl font-extrabold dark:dark-text-outline text-outline text-transparent dark:group-hover:dark-text-outline-hover group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={{
                    pathname: service.href,
                    query: { service: service.title === "Web Design" ? "UI/UX" : service.title },
                  }}
                  className="w-[70px] h-[70px] bg-black dark:bg-white rounded-full group-hover:bg-indigo-700 dark:group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="dark:text-primary text-indigo-200 text-3xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-black dark:text-white group-hover:text-indigo-700 dark:group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-black/80 dark:text-white/60">
                {service.description}
              </p>
              <div className="border-b border-black dark:border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
