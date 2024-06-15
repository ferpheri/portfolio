"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: { en: "home", fa: "خانه" },
    path: { en: "/", fa: "/fa" },
  },
  {
    name: { en: "services", fa: "خدمات" },
    path: { en: "/services", fa: "/fa/services" },
  },
  {
    name: { en: "resume", fa: "رزومه" },
    path: { en: "/resume", fa: "/fa/resume" },
  },
  {
    name: { en: "work", fa: "کارها" },
    path: { en: "/work", fa: "/fa/work" },
  },
  {
    name: { en: "contact", fa: "تماس" },
    path: { en: "/contact", fa: "/fa/contact" },
  },
];

const MobileNav = ({currentLang}) => {
  const pathname = usePathname();
  const [isOpen,setIsOpen] = useState(false);
  const handleLinkClick = () =>{
    setIsOpen(false);
  }
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] dark:text-accent text-indigo-700" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-24 mb-10 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ferferi<span className="dark:text-accent text-indigo-700">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={`${link.path[currentLang]}`}
              className={`${link.path[currentLang] === pathname && "dark:text-accent text-indigo-700 border-b-2 dark:border-accent border-indigo-700"} text-xl capitalize dark:hover:text-accent hover:text-indigo-700 transition-all`}
              onClick={handleLinkClick}
            >
              {link.name[currentLang]}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
