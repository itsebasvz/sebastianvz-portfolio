"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    ReactNode,
    useRef,
} from "react";
import { translations, type Locale, type Translations } from "@/lib/i18n";

interface LocaleContextType {
    locale: Locale;
    t: Translations;
    toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("en");
    const [mounted, setMounted] = useState(false);
    const initializedRef = useRef(false);

    useEffect(() => {
        if (initializedRef.current) return;
        initializedRef.current = true;

        const savedLocale = localStorage.getItem("locale") as Locale | null;
        const initialLocale = savedLocale === "es" ? "es" : "en";

        queueMicrotask(() => {
            setLocale(initialLocale);
            setMounted(true);
        });
    }, []);

    const toggleLocale = useCallback(() => {
        const newLocale = locale === "en" ? "es" : "en";
        setLocale(newLocale);
        localStorage.setItem("locale", newLocale);
    }, [locale]);

    const t = translations[locale];

    // Prevent hydration mismatch by rendering with default locale until mounted
    if (!mounted) {
        return (
            <LocaleContext.Provider
                value={{ locale: "en", t: translations.en, toggleLocale }}
            >
                {children}
            </LocaleContext.Provider>
        );
    }

    return (
        <LocaleContext.Provider value={{ locale, t, toggleLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
}
