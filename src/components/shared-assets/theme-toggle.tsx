"use client";

import { Moon01, Sun } from "@untitledui/icons";
import { useEffect, useState } from "react";
import { Button } from "@/components/base/buttons/button";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    // Initialize theme on mount
    useEffect(() => {
        const html = document.documentElement;
        const savedTheme = localStorage.getItem("cemara-theme");

        if (savedTheme === "dark-mode") {
            html.classList.remove("light-mode");
            html.classList.add("dark-mode");
            setIsDark(true);
        } else {
            html.classList.remove("dark-mode");
            html.classList.add("light-mode");
            setIsDark(false);
        }

        setMounted(true);
    }, []);

    const handleLightClick = () => {
        const html = document.documentElement;
        html.classList.remove("dark-mode");
        html.classList.add("light-mode");
        localStorage.setItem("cemara-theme", "light-mode");
        setIsDark(false);
    };

    const handleDarkClick = () => {
        const html = document.documentElement;
        html.classList.remove("light-mode");
        html.classList.add("dark-mode");
        localStorage.setItem("cemara-theme", "dark-mode");
        setIsDark(true);
    };

    if (!mounted) {
        return <div className="w-24" />; // Placeholder to prevent layout shift
    }

    return (
        <div className="inline-flex gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1 dark:border-gray-800 dark:bg-gray-900">
            <Button
                color={!isDark ? "secondary" : "tertiary"}
                size="sm"
                iconLeading={Sun}
                onClick={handleLightClick}
                className={!isDark ? "bg-white shadow-sm dark:bg-gray-800" : ""}
            >
                Light
            </Button>
            <Button
                color={isDark ? "secondary" : "tertiary"}
                size="sm"
                iconLeading={Moon01}
                onClick={handleDarkClick}
                className={isDark ? "bg-white shadow-sm dark:bg-gray-800" : ""}
            >
                Dark
            </Button>
        </div>
    );
}
