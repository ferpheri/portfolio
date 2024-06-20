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
    title: "Phone",
    description: "(+98) 939 837 3570",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dehghanian77@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Iran, Shiraz",
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
      errors.firstname = "First name is required.";
    }
    if (!form.lastname.value.trim()) {
      errors.lastname = "Last name is required.";
    }
    if (!form.email.value.trim()) {
      errors.email = "Email address is required.";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        form.email.value
      )
    ) {
      errors.email = "Email address is invalid.";
    }
    if (!form.phone.value.trim()) {
      errors.phone = "Phone number is required.";
    }
    if (!selectedService) {
      errors.service = "Please select a service.";
    }
    if (!form.message.value.trim()) {
      errors.message = "Message is required.";
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
            title: "Success!",
            message: "Message Sent Successfully!",
            isError: false,
          });
          resetForm(e.target);
        },
        (error) => {
          setModalInfo({
            show: true,
            title: "Error",
            message: "Failed to Send Message, please try again.",
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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2 mt-1 text-sm text-red-600"
    >
      <FaExclamationCircle className="animate-pulse" />
      {message}
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
        className="py-6 lg:py-0"
      >
        <div className="container mx-auto mt-12">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {/* form */}
            <div className="lg:w-[54%] order-2 lg:order-none">
              <form
                action=""
                className="flex flex-col gap-6 p-10 bg-indigo-400 dark:bg-[#27272c] rounded-xl"
                onSubmit={(e) => sendEmail(e, setModalInfo, resetForm)}
              >
                <h3 className="text-4xl text-indigo-900 dark:text-accent">
                  Let's work together
                </h3>
                <p className="text-black/80 dark:text-white/60">
                  If you have any questions, feel free to reach out to us. I am
                  here to help and look forward to working with you. Please
                  provide your details and message below, and I will get back to
                  you as soon as possible.
                </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative flex flex-col">
                    <Input
                      type="text"
                      name="firstname"
                      placeholder="First name"
                    />
                    {formError.firstname &&
                      renderErrorMessage(formError.firstname)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                    />
                    {formError.lastname &&
                      renderErrorMessage(formError.lastname)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                    {formError.email && renderErrorMessage(formError.email)}
                  </div>
                  <div className="relative flex flex-col">
                    <Input type="tel" name="phone" placeholder="Phone number" />
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
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="UI/UX">UI/UX</SelectItem>
                        <SelectItem value="Code Robots">Code Robots</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/*showing error for not selecting a service */}
                  {formError.service && renderErrorMessage(formError.service)}
                </div>
                {/* textarea */}
                <div className="relative flex flex-col">
                  <Textarea
                    className="h-[200px]"
                    name="message"
                    placeholder="Type your message here..."
                  />
                  {formError.message && renderErrorMessage(formError.message)}
                </div>
                {/* btn */}
                <Button
                  type="submit"
                  size="md"
                  className="max-w-40"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      Sending
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex flex-1 items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-indigo-400 dark:bg-[#27272c] text-indigo-900 dark:text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-black/80 dark:text-white/60">
                        {item.title}
                      </h3>
                      <p className="text-xl">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
