"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, MessageCircle } from "lucide-react";
import { useChatStore } from "@/lib/store/chat-store";
import { useLocale } from "@/components/providers/locale-provider";
import { TextBlur } from "@/components/ui/text-blur";

export function ChatFAB() {
    const { isOpen, setIsOpen, hasInteracted } = useChatStore();
    const { t, locale } = useLocale();
    const [isVisible, setIsVisible] = React.useState(false);
    const [showPopover, setShowPopover] = React.useState(false);
    const [popoverDismissed, setPopoverDismissed] = React.useState(false);

    // Check if popover was already dismissed (persisted in localStorage)
    React.useEffect(() => {
        const dismissed = localStorage.getItem("chat-popover-dismissed");
        if (dismissed) {
            setPopoverDismissed(true);
        }
    }, []);

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

    // Show popover after FAB is visible (if not dismissed and not interacted)
    React.useEffect(() => {
        if (isVisible && !hasInteracted && !popoverDismissed && !isOpen) {
            const timer = setTimeout(() => {
                setShowPopover(true);
            }, 2000);

            // Auto-hide after 12 seconds (longer visibility)
            const hideTimer = setTimeout(() => {
                setShowPopover(false);
            }, 14000);

            return () => {
                clearTimeout(timer);
                clearTimeout(hideTimer);
            };
        }
    }, [isVisible, hasInteracted, popoverDismissed, isOpen]);

    const dismissPopover = () => {
        setShowPopover(false);
        setPopoverDismissed(true);
        localStorage.setItem("chat-popover-dismissed", "true");
    };

    if (isOpen) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
                    {/* Popover */}
                    <AnimatePresence>
                        {showPopover && (
                            <motion.div
                                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-full right-0 mb-4 w-56"
                            >
                                <div className="relative rounded-xl border border-indigo-500/40 bg-white dark:bg-slate-900/95 backdrop-blur-xl p-3 shadow-xl">
                                    {/* Arrow */}
                                    <div className="absolute -bottom-2 right-5 h-4 w-4 rotate-45 border-r border-b border-indigo-500/30 bg-white dark:bg-slate-900/95" />

                                    <div className="flex items-start gap-2">
                                        <div className="flex-1">
                                            <div className="text-sm font-medium text-slate-800 dark:text-white/90 flex items-center gap-1.5">
                                                <MessageCircle className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                                                <TextBlur trigger={locale}>{t.chat.popover.title}</TextBlur>
                                            </div>
                                            <TextBlur trigger={locale} className="text-xs text-slate-500 dark:text-white/50 mt-1">
                                                {t.chat.popover.description}
                                            </TextBlur>
                                        </div>
                                        <button
                                            onClick={dismissPopover}
                                            className="p-1 rounded-md text-slate-400 dark:text-white/30 hover:text-slate-600 dark:hover:text-white/60 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* FAB Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setIsOpen(true);
                            useChatStore.getState().setHasInteracted(true);
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-black/40 shadow-lg backdrop-blur-md transition-all hover:bg-slate-50 dark:hover:bg-black/60 hover:shadow-xl group"
                    >
                        <div className="absolute inset-0 rounded-full bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Sparkles className="h-5 w-5 text-indigo-400 relative z-10" />
                        {!hasInteracted && (
                            <span className="absolute top-0 right-0 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                            </span>
                        )}
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
}
