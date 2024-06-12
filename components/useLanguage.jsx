// useLanguage.js

import { usePathname } from "next/navigation";

const useLanguage = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/fa") ? "fa" : "en";

  return currentLang;
};

export default useLanguage;
