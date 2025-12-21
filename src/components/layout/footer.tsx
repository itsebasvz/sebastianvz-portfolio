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

const PORTFOLIO_REPO = "https://github.com/itsebasvz/sebastianvz-portfolio";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLocale();

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left: Copyright & Designed by */}
                    <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
                        © {currentYear} Sebs. {t.footer.designedBy}
                    </p>

                    {/* Center: Social Links */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                aria-label={link.label}
                            >
                                <link.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>

                    {/* Right: View Source Link */}
                    <Link
                        href={PORTFOLIO_REPO}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
                    >
                        {t.footer.viewSource}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
