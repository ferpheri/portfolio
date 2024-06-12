// components/useTheme.js
import { create } from "zustand";
import { useEffect } from "react";

const useTheme = create((set) => ({
  theme:
    (typeof window !== "undefined" && localStorage.getItem("theme")),
  setTheme: (newTheme) => {
    set({ theme: newTheme });
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      const root = window.document.documentElement;
      const isDark = newTheme === "dark";
      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(newTheme);
    }
  },
}));

// Custom hook to synchronize theme with localStorage and document root
// export const useThemeSync = () => {
//   const theme = useTheme((state) => state.theme);
//   useEffect(() => {
//     const root = window.document.documentElement;
//     const isDark = theme === "dark";
//     root.classList.remove(isDark ? "light" : "dark");
//     root.classList.add(theme);
//   }, [theme]);
// };

export default useTheme;
