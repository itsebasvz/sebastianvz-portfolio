"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Github,
    Linkedin,
    Mail,
    Home,
    LayoutGrid,
    FileText,
    Send,
    Laptop,
    Moon,
    Sun,
    Check,
    Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useLocale } from "@/components/providers/locale-provider";
import { useChatStore } from "@/lib/store/chat-store";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const [copied, setCopied] = React.useState(false);
    const router = useRouter();
    const { t, locale } = useLocale();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", down);

        const openMenu = () => setOpen(true);
        document.addEventListener("open-command-menu", openMenu);

        return () => {
            document.removeEventListener("keydown", down);
            document.removeEventListener("open-command-menu", openMenu);
        };
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-foreground/10 bg-background/80 shadow-2xl backdrop-blur-xl"
                    >
                        <Command className="w-full bg-transparent">
                            <Command.Input
                                autoFocus
                                placeholder={t.commandMenu.placeholder}
                                className="w-full border-b border-indigo-500 bg-transparent px-4 py-4 text-base text-foreground placeholder-foreground/40 outline-none !ring-0 !shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none"
                            />
                            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 scrollbar-thin scrollbar-thumb-foreground/10 scrollbar-track-transparent">
                                <Command.Empty className="py-6 text-center text-sm text-foreground/40">
                                    {t.commandMenu.noResults}
                                </Command.Empty>

                                <Command.Group heading={t.commandMenu.navigation} className="px-2 py-0 text-xs font-medium text-foreground/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-4">
                                    <Command.Item
                                        onSelect={() => runCommand(() => router.push("/"))}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 aria-selected:bg-foreground/10 aria-selected:text-foreground"
                                    >
                                        <Home className="h-4 w-4" />
                                        <span>{t.nav.home}</span>
                                    </Command.Item>
                                    <Command.Item
                                        onSelect={() => runCommand(() => router.push("/about"))}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 aria-selected:bg-foreground/10 aria-selected:text-foreground"
                                    >
                                        <User className="h-4 w-4" />
                                        <span>{t.nav.about}</span>
                                    </Command.Item>
                                    <Command.Item
                                        onSelect={() => runCommand(() => router.push("/projects"))}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 aria-selected:bg-foreground/10 aria-selected:text-foreground"
                                    >
                                        <LayoutGrid className="h-4 w-4" />
                                        <span>{t.nav.projects}</span>
                                    </Command.Item>
                                    <Command.Item
                                        onSelect={() => runCommand(() => router.push("/contact"))}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 aria-selected:bg-foreground/10 aria-selected:text-foreground"
                                    >
                                        <Send className="h-4 w-4" />
                                        <span>{t.nav.contact}</span>
                                    </Command.Item>
                                </Command.Group>

                                <Command.Group heading={t.commandMenu.social} className="px-2 py-0 text-xs font-medium text-foreground/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-4">
                                    <Command.Item
                                        onSelect={() => runCommand(() => window.open(siteConfig.links.github, "_blank"))}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 aria-selected:bg-foreground/10 aria-selected:text-foreground"
                                    >
                                        <Github className="h-4 w-4" />
                                        <span>GitHub</span>
                                    </Command.Item>
                                    <Command.Item
                                        onSelect={() => runCommand(() => window.open(siteConfig.links.linkedin, "_blank"))}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 aria-selected:bg-foreground/10 aria-selected:text-foreground"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                        <span>LinkedIn</span>
                                    </Command.Item>
                                </Command.Group>

                                <Command.Group heading="AI Assistant" className="px-2 py-0 text-xs font-medium text-foreground/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-4">
                                    <Command.Item
                                        onSelect={() => runCommand(() => useChatStore.getState().setIsOpen(true))}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 aria-selected:bg-foreground/10 aria-selected:text-foreground"
                                    >
                                        <Sparkles className="h-4 w-4 text-indigo-500" />
                                        <span>Ask AI...</span>
                                    </Command.Item>
                                </Command.Group>

                                <Command.Group heading={t.commandMenu.general} className="px-2 py-0 text-xs font-medium text-foreground/40 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-4">
                                    <Command.Item
                                        onSelect={() => {
                                            const copyToClipboard = (text: string) => {
                                                if (navigator.clipboard && navigator.clipboard.writeText) {
                                                    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
                                                } else {
                                                    fallbackCopy(text);
                                                }
                                            };
                                            const fallbackCopy = (text: string) => {
                                                const textArea = document.createElement("textarea");
                                                textArea.value = text;
                                                textArea.style.position = "fixed";
                                                textArea.style.left = "-9999px";
                                                document.body.appendChild(textArea);
                                                textArea.select();
                                                document.execCommand("copy");
                                                document.body.removeChild(textArea);
                                            };
                                            copyToClipboard(siteConfig.email);
                                            setCopied(true);
                                            setTimeout(() => {
                                                setCopied(false);
                                                setOpen(false);
                                            }, 1000);
                                        }}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-foreground/10 aria-selected:bg-foreground/10 aria-selected:text-foreground"
                                    >
                                        {copied ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <Mail className="h-4 w-4" />
                                        )}
                                        <span>{copied ? (locale === "es" ? "¡Copiado!" : "Copied!") : t.commandMenu.copyEmail}</span>
                                    </Command.Item>
                                </Command.Group>
                            </Command.List>

                            <div className="border-t border-foreground/10 px-4 py-2 text-[10px] text-foreground/40 flex justify-between">
                                <span>{t.commandMenu.navigation}</span>
                                <div className="flex gap-2">
                                    <span>↵ {t.commandMenu.actions.select}</span>
                                    <span>↑↓ {t.commandMenu.actions.navigate}</span>
                                    <span>esc {t.commandMenu.actions.close}</span>
                                </div>
                            </div>
                        </Command>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
