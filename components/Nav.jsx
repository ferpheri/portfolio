"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: { en: "home", fa: "خانه" },
    path: {en:"/",fa:'/fa'},
  },
  {
    name: { en: "services", fa: "خدمات" },
    path: {en:"/services", fa:'/fa/services'},
  },
  {
    name: { en: "resume", fa: "رزومه" },
    path: {en:"/resume", fa:'/fa/resume'},
  },
  {
    name: { en: "work", fa: "کارها" },
    path: {en:"/work", fa:'/fa/work'},
  },
  {
    name: { en: "contact", fa: "تماس" },
    path: {en:"/contact", fa:'/fa/contact'},
  },
];
const Nav = ({ currentLang }) => {
  
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={`${link.path[currentLang]}`}
          key={index}
          className={`${link.path[currentLang] === pathName && "dark:text-accent text-indigo-700 border-b-2 dark:border-accent border-indigo-700"} capitalize font-medium dark:hover:text-accent hover:text-indigo-700 transition-all`}
        >
          {link.name[currentLang]}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
