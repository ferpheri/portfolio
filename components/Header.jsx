"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import useTheme from "./useTheme";
import { FaSun, FaMoon } from "react-icons/fa";
import { usePathname } from "next/navigation";
import useLanguage from "./useLanguage";

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

  return (
    <header className="pt-8 pb-14 lg:pt-8 lg:pb-12 text-primary dark:text-white">
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <Link href={`/${currentLang}`}>
          <h1 className="text-4xl font-semibold">
            Ferferi<span className="dark:text-accent text-indigo-700">.</span>
          </h1>
        </Link>
        <div className="flex gap-8 items-center justify-center">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full h-[40px] w-[40px] bg-indigo-700 dark:bg-accent hover:bg-indigo-600 dark:hover:bg-accent-hover text-indigo-200 dark:text-primary flex items-center justify-center transition-transform duration-500"
          >
            {/* Show language toggle button */}
            {currentLang === "en" ? "Fa" : "En"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full h-[40px] w-[40px] bg-indigo-700 dark:bg-accent hover:bg-indigo-600 dark:hover:bg-accent-hover text-indigo-200 dark:text-primary flex items-center justify-center transition-transform duration-500"
          >
            {toggleBtnIcon}
          </button>
          {/* desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Nav currentLang={currentLang} />
            <Link href="/contact">
              <Button>{currentLang === "en" ? "Hire me" : "استخدام"}</Button>
            </Link>
          </div>
          <div className="lg:hidden">
            <MobileNav currentLang={currentLang} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
