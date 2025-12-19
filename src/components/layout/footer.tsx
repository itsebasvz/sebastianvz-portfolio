"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useLocale } from "@/components/providers/locale-provider";

const socialLinks = [
    {
        href: siteConfig.links.github,
        icon: Github,
        label: "GitHub",
    },
    {
        href: siteConfig.links.linkedin,
        icon: Linkedin,
        label: "LinkedIn",
    },
    {
        href: `mailto:${siteConfig.email}`,
        icon: Mail,
        label: "Email",
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLocale();

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {currentYear} {siteConfig.name}. {t.footer.rights}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                aria-label={link.label}
                            >
                                <link.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
