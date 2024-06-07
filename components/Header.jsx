"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import useTheme, { useThemeSync } from "./useTheme";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme(); // Use Zustand store
  useThemeSync();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="pt-8 pb-14 lg:pt-8 lg:pb-12 text-primary dark:text-white">
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ferferi<span className="dark:text-accent text-indigo-700">.</span>
          </h1>
        </Link>
        <div className="flex gap-8 items-center justify-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full h-[40px] w-[40px] bg-indigo-700 dark:bg-accent text-indigo-200 dark:text-primary flex items-center justify-center transition-transform duration-500"
          >
            {theme === "dark" ? (
              <FaMoon className="animate-rotate text-xl" />
            ) : (
              <FaSun className="animate-rotate text-xl" />
            )}
          </button>
          {/* desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button>Hire me</Button>
            </Link>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
