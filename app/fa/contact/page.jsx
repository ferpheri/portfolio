"use client";
import { useState, useEffect } from "react";
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
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Modal from "@/components/Modal";

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
  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: "",
    message: "",
    isError: false,
  });

  const [selectedService, setSelectedService] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const validateForm = (form) => {
    const errors = {};
    if (!form.firstname.value.trim()) {
      errors.firstname = ".لطفاً نام خود را وارد کنید";
    }
    if (!form.lastname.value.trim()) {
      errors.lastname = ".لطفاً نام خانوادگی خود را وارد کنید";
    }
    if (!form.email.value.trim()) {
      errors.email = ".لطفاً ایمیل خود را وارد کنید";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        form.email.value
      )
    ) {
      errors.email = ".ایمیل وارد شده معتبر نیست";
    }
    if (!form.phone.value.trim()) {
      errors.phone = ".لطفاً شماره تماس خود را وارد کنید";
    }
    if (!selectedService) {
      errors.service = ".لطفاً یک سرویس را انتخاب کنید";
    }
    if (!form.message.value.trim()) {
      errors.message = ".لطفاً پیام خود را وارد کنید";
    }
    return errors;
  };

  const sendEmail = (e, setModalInfo, resetForm) => {
    e.preventDefault();
    const errors = validateForm(e.target);
    setFormError(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_g04mdgm",
        "template_6dp3fnr",
        e.target,
        "Agg89X9B4Qni1Fyqq"
      )
      .then(
        (result) => {
          setModalInfo({
            show: true,
            title: "موفق!",
            message: "پیام شما با موفقیت ارسال شد!",
            isError: false,
          });
          resetForm(e.target);
        },
        (error) => {
          setModalInfo({
            show: true,
            title: "خطا",
            message: "پیام ارسال نشد. لطفا دوباره تلاش کنید.",
            isError: true,
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service");
      setSelectedService(service || "");
    }
  }, [typeof window !== "undefined" && window.location.search]);

  const handelServiceChange = (newValue) => {
    setSelectedService(newValue);
    setFormError((prev) => ({ ...prev, service: "" }));
  };

  const handleCloseModal = () => {
    setModalInfo({ ...modalInfo, show: false });
  };

  const resetForm = (form) => {
    form.reset();
    setSelectedService("");
    setFormError({});
  };

  const renderErrorMessage = (message) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2 mt-1 text-sm text-red-600 justify-end"
    >
      {message}
      <FaExclamationCircle className="animate-pulse" />
    </motion.div>
  );

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6 lg:py-0 "
      >
        <div className="container mx-auto mt-12">
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
                onSubmit={(e) => sendEmail(e, setModalInfo, resetForm)}
              >
                <h3 className="text-4xl text-indigo-900 dark:text-accent">
                  شروع همکاری
                </h3>
                <p
                  className="text-black/80 dark:text-white/60"
                  style={{ direction: "rtl" }}
                >
                  اگر سوالی دارید، لطفاً با من تماس بگیرید. من اینجا هستم تا به
                  شما کمک کنم و منتظر همکاری با شما هستم. لطفاً جزئیات و پیام
                  خودتون رو در قسمت زیر وارد کنید و من در اسرع وقت با شما تماس
                  می گیرم .
                </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative flex flex-col">
                    <Input
                      type="text"
                      name="lastname"
                      className="text-right"
                      placeholder="نام خانوادگی"
                    />
                    {formError.lastname &&
                      renderErrorMessage(formError.lastname)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input
                      type="text"
                      name="firstname"
                      className="text-right"
                      placeholder="نام"
                    />
                    {formError.firstname &&
                      renderErrorMessage(formError.firstname)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input
                      type="text"
                      name="email"
                      className="text-right"
                      placeholder="آدرس ایمیل"
                    />
                    {formError.email && renderErrorMessage(formError.email)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input
                      type="tel"
                      name="phone"
                      className="text-right"
                      placeholder="شماره تماس"
                    />
                    {formError.phone && renderErrorMessage(formError.phone)}
                  </div>
                </div>
                {/* select */}
                <div className="relative flex flex-col">
                  <Select
                    name="service"
                    value={selectedService}
                    onValueChange={handelServiceChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="یکی از خدمات را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel className="text-right">
                          یکی از خدمات را انتخاب کنید
                        </SelectLabel>
                        <SelectItem className="justify-end" value="توسعه وب">
                          توسعه وب
                        </SelectItem>
                        <SelectItem className="justify-end" value="UI/UX">
                          UI/UX
                        </SelectItem>
                        <SelectItem
                          className="justify-end"
                          value="برنامه نویسی ربات"
                        >
                          برنامه نویسی ربات
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* showing error for not selecting a service */}
                  {formError.service && renderErrorMessage(formError.service)}
                </div>
                {/* textarea */}
                <div className="relative flex flex-col">
                  <Textarea
                    className="h-[200px] text-right"
                    name="message"
                    placeholder="... پیام خود را اینجا بنویسید"
                  />
                  {formError.message && renderErrorMessage(formError.message)}
                </div>
                {/* btn */}
                <Button
                  type="submit"
                  size="lg"
                  className="max-w-40"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <svg
                        className="animate-spin h-5 w-5 mr-1"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      در حال ارسال
                    </div>
                  ) : (
                    "ارسال پیام"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
      <Modal
        show={modalInfo.show}
        onClose={handleCloseModal}
        title={modalInfo.title}
        message={modalInfo.message}
        isError={modalInfo.isError}
      />
    </>
  );
};
export default Contact;
