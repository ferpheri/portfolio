"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "۰۱",
    title: "توسعه وب",
    description:
      "لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    href: "/fa/contact",
  },
  {
    num: "۰۲",
    title: "برنامه نویسی ربات",
    description:
      "لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    href: "/fa/contact",
  },
  {
    num: "۰۳",
    title: "طراحی وب",
    description:
      "لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    href: "/fa/contact",
  },
  {
    num: "۰۴",
    title: "سئو",
    description:
      "لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    href: "/fa/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                {/* top */}
                <div className="text-5xl font-extrabold dark:dark-text-outline text-outline text-transparent dark:group-hover:dark-text-outline-hover group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
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
              <p
                className="text-black/80 dark:text-white/60"
                style={{ direction: "rtl" }}
              >
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
