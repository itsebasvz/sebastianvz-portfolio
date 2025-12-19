"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

export function LocaleToggle() {
    const { locale, toggleLocale } = useLocale();

    return (
        <button
            onClick={toggleLocale}
            className={cn(
                "p-2 rounded-lg text-sm font-medium transition-colors",
                "bg-slate-100 hover:bg-slate-200",
                "dark:bg-slate-800 dark:hover:bg-slate-700",
                "text-slate-700 dark:text-slate-300",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                "dark:focus:ring-offset-slate-900"
            )}
            aria-label={`Switch to ${locale === "en" ? "Spanish" : "English"}`}
        >
            {locale === "en" ? "ES" : "EN"}
        </button>
    );
}
