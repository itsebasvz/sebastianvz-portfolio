"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
    texts: string[];
    className?: string;
    interval?: number;
}

export function RotatingText({
    texts,
    className = "",
    interval = 3000,
}: RotatingTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, interval);

        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <span className={`inline-block relative ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.4,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="inline-block"
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
