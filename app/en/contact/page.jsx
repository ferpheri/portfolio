"use client";
import { useState } from "react";
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
import emailjs from "emailjs-com";
import Modal from "@/components/Modal";

const sendEmail = (e, setModalInfo, resetForm) => {
  e.preventDefault();

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
    );
};
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
  const handleCloseModal = () => {
    setModalInfo({ ...modalInfo, show: false });
  };

  const resetForm = (form) => {
    form.reset();
    setSelectedService("");
  };

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
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    required
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                  />
                </div>
                {/* select */}
                <Select name="service" value={selectedService} onValueChange={setSelectedService}>
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
                      <SelectItem value="Robot Code">Robot Code</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textarea */}
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Type your message here..."
                  required
                />
                {/* btn */}
                <Button type="submit" size="md" className="max-w-40">
                  Send message
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
