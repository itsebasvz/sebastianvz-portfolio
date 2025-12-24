"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useChatStore } from "@/lib/store/chat-store";

export function ChatFAB() {
    const { isOpen, setIsOpen, hasInteracted } = useChatStore();
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        if (hasInteracted) {
            setIsVisible(true);
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasInteracted]);

    if (isOpen) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 shadow-lg backdrop-blur-md transition-all hover:bg-black/60 hover:shadow-xl sm:bottom-6 sm:right-6 group"
                >
                    <div className="absolute inset-0 rounded-full bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Sparkles className="h-5 w-5 text-indigo-400 relative z-10" />
                    {!hasInteracted && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                    )}
                </motion.button>
            )}
        </AnimatePresence>
    );
}
