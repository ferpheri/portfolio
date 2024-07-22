import { useEffect } from "react";
import useTheme from "@/components/useTheme";

const useThemeMeta = () => {
    const { theme } = useTheme();

    useEffect(() => {
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (theme === "dark") {
            metaThemeColor.setAttribute("content", "#00ff99");
        } else {
            metaThemeColor.setAttribute("content", "#312e81");
        }
    }, [theme]);
};

export default useThemeMeta;
