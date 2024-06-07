"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] dark:text-accent text-indigo-700" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-24 mb-24 text-center text-2xl">
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
              href={link.path}
              className={`${link.path === pathname && "dark:text-accent text-indigo-700 border-b-2 dark:border-accent border-indigo-700"} text-xl capitalize dark:hover:text-accent hover:text-indigo-700 transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
