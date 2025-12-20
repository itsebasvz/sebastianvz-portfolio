"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function InteractiveGrid() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        function handleMouseMove({ clientX, clientY }: MouseEvent) {
            mouseX.set(clientX);
            mouseY.set(clientY);
        }

        function handleTouchMove(e: TouchEvent) {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                mouseX.set(touch.clientX);
                mouseY.set(touch.clientY);
            }
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Base Grid Pattern - Subtle */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px),
                           linear-gradient(to bottom, #808080 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Spotlight Effect */}
            <motion.div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.08),
              transparent 80%
            )
          `,
                }}
            />

            {/* Highlighted Grid under Spotlight */}
            <motion.div
                className="absolute inset-0 opacity-30 dark:opacity-40"
                style={{
                    backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px),
                           linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
                }}
            />
        </div>
    );
}
