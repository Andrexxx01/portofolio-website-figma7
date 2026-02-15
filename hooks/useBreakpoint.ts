"use client";

import { useEffect, useState } from "react";

export function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const handleChange = () => {
            setIsDesktop(mediaQuery.matches);
        };
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);
    return isDesktop;
}