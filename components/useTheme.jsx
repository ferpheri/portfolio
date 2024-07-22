// components/useTheme.js
import { create } from "zustand";
import { useEffect } from "react";

const useTheme = create((set) => ({
  theme:
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark",
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

export default useTheme;
