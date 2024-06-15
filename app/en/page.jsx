"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import useTheme from "@/components/useTheme";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const { theme } = useTheme();
  return (
    <section className="h-full">
      <div className="container mx-auto h-full mt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-5 lg:pb-3">
          {/* text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="dark:text-accent text-indigo-900">
                Mohamad Dehghanian
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 dark:text-white/80 text-indigo-600">
              I excel at crafting elegant digital experience and I am proficient
              in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                href="/CV.pdf"
                download="Mohamad_Dehghanian_CV.pdf"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 lg:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="flex w-9 h-9 border dark:border-accent border-indigo-700 rounded-full justify-center items-center text-indigo-700 dark:text-accent text-base hover:bg-indigo-700 dark:hover:bg-accent dark:hover:text-primary hover:text-indigo-200 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 lg:order-none -mt-14 lg:mb-0">
            <Photo theme={theme} />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
