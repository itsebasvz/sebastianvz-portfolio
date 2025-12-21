"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TextBlurProps {
    children: React.ReactNode;
    className?: string;
    duration?: number;
    text?: string;
    trigger?: unknown;
}

export function TextBlur({ children, className, duration = 0.3, text, trigger }: TextBlurProps) {
    const key = trigger !== undefined ? String(trigger) : (text || String(children));

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={key}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration, ease: "easeInOut" }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
