"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import useLanguage from "@/components/useLanguage";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "موبایل",
    description: "(+۹۸) ۹۳۹ ۸۳۷ ۳۵۷۰",
  },
  {
    icon: <FaEnvelope />,
    title: "ایمیل",
    description: "dehghanian77@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "آدرس",
    description: "ایران , شیراز",
  },
];

const Contact = () => {
  const lang = useLanguage();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 lg:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] text-right">
          {/* info */}
          <div className="flex flex-1 items-center justify-center lg:justify-start order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-black/80 dark:text-white/60">
                      {item.title}
                    </h3>
                    <p className="text-xl">{item.description}</p>
                  </div>
                  <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-indigo-400 dark:bg-[#27272c] text-indigo-900 dark:text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* form */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-indigo-400 dark:bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-indigo-900 dark:text-accent">
                شروع همکاری
              </h3>
              <p className="text-black/80 dark:text-white/60">
                لورم ایپسوم متن ساختگی با تولید نامفهوم از صنعت چاپ و با استفاده
                از طراحان گرافیک است.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  className="text-right"
                  placeholder="نام"
                />
                <Input
                  type="lastname"
                  className="text-right"
                  placeholder="نام خانوادگی"
                />
                <Input
                  type="email"
                  className="text-right"
                  placeholder="آدرس ایمیل"
                />
                <Input
                  type="phone"
                  className="text-right"
                  placeholder="شماره تماس"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="یکی از خدمات را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-right">
                      یکی از خدمات را انتخاب کنید
                    </SelectLabel>
                    <SelectItem className="justify-end" value="est">
                      توسعه وب
                    </SelectItem>
                    <SelectItem className="justify-end" value="cst">
                      UI/UX
                    </SelectItem>
                    <SelectItem className="justify-end" value="mst">
                      برنامه نویسی ربات
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px] text-right"
                placeholder="پیام خود را اینجا بنویسید"
              />
              {/* btn */}
              <Button size="lg" className="max-w-40">
                ارسال پیام
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
