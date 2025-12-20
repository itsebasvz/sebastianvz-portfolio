"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const initializedRef = useRef(false);

    useEffect(() => {
        if (initializedRef.current) return;
        initializedRef.current = true;

        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

        // Use a microtask to batch the state updates
        queueMicrotask(() => {
            setTheme(initialTheme);
            setMounted(true);
        });

        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === "dark" ? "light" : "dark";

        // @ts-ignore - View Transitions API might not be in types yet
        if (!document.startViewTransition) {
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            return;
        }

        // @ts-ignore
        document.startViewTransition(() => {
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            document.documentElement.classList.toggle("dark", newTheme === "dark");
        });
    }, [theme]);

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
                aria-label="Toggle theme"
                type="button"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={cn(
                "p-2 rounded-lg transition-colors duration-200",
                "bg-slate-100 hover:bg-slate-200",
                "dark:bg-slate-800 dark:hover:bg-slate-700",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                "dark:focus:ring-offset-slate-900"
            )}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-slate-300" />
            ) : (
                <Moon className="w-5 h-5 text-slate-700" />
            )}
        </button>
    );
}
