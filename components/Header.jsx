"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import useTheme from "./useTheme";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { usePathname } from "next/navigation";
import useLanguage from "./useLanguage";
import { useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const currentLang = useLanguage();

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "fa" : "en";
    const newPathname =
      currentLang === "en" ? pathname : pathname.replace("/fa", "");
    window.location.href = `/${newLang}${newPathname}`;
  };

  const { theme, setTheme } = useTheme();

  const toggleBtnIcon =
    theme === "dark" ? (
      <FaMoon className="animate-rotate text-xl" />
    ) : (
      <FaSun className="animate-rotate text-xl" />
    );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (
      pathname === "/fa/contact" ||
      pathname === "/contact" ||
      window.innerHeight < 675
    ) {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }
    return () => {
      document.body.classList.remove("no-overflow");
    };
  }, [pathname]);

  useEffect(() => {
    // Ensure the theme is set correctly when the component mounts
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-indigo-300 dark:bg-emerald-900 shadow-md dark:shadow-emerald-950">
      <div className="container mx-auto flex justify-between items-center p-5 lg:py-8 text-primary dark:text-white">
        {/* Logo */}
        <Link href={`/${currentLang}`}>
          <h1 className="text-4xl font-semibold font-primary">
            Ferferi<span className="dark:text-accent text-indigo-700">.</span>
          </h1>
        </Link>
        <div className="flex lg:gap-8 gap-4 items-center justify-center">
          {/* Language Toggle Button */}
          <div className="relative group">
            <button
              onClick={toggleLanguage}
              className="p-2 font-primary rounded-full h-[40px] w-[80px] bg-indigo-700 dark:bg-accent hover:bg-indigo-600 dark:hover:bg-accent-hover text-indigo-200 dark:text-primary flex items-center justify-center transition-transform duration-500 dark:font-bold"
            >
              <FaGlobe className="text-xl" />
              <span className="ml-2">
                {currentLang === "en" ? "Fa" : "En"}
              </span>
            </button>
            <span className="absolute bottom-full mb-2 hidden w-max bg-primary text-white text-xs rounded-xl py-1 px-2 lg:group-hover:block sm:group-hover:hidden">
              {currentLang === "en"
                ? "Change language to Persian"
                : "تغییر زبان به انگلیسی"}
            </span>
          </div>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full h-[40px] w-[40px] bg-indigo-700 dark:bg-accent hover:bg-indigo-600 dark:hover:bg-accent-hover text-indigo-200 dark:text-primary flex items-center justify-center transition-transform duration-500"
          >
            {toggleBtnIcon}
          </button>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Nav currentLang={currentLang} />
            <Link href="/contact">
              <Button>{currentLang === "en" ? "Hire me" : "استخدام"}</Button>
            </Link>
          </div>
          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <MobileNav currentLang={currentLang} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
