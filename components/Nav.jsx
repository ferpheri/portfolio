"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${link.path === pathName && "dark:text-accent text-indigo-700 border-b-2 dark:border-accent border-indigo-700"} capitalize font-medium dark:hover:text-accent hover:text-indigo-700 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
