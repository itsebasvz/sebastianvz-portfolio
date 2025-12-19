"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { useLocale } from "@/components/providers/locale-provider";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
    const { t } = useLocale();

    const contactMethods = [
        {
            icon: Mail,
            label: t.contact.emailLabel,
            value: siteConfig.email,
            href: `mailto:${siteConfig.email}`,
            description: t.contact.emailDesc,
        },
        {
            icon: Github,
            label: "GitHub",
            value: "itsebasvz",
            href: siteConfig.links.github,
            description: t.contact.githubDesc,
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "jsebastianvz",
            href: siteConfig.links.linkedin,
            description: t.contact.linkedinDesc,
        },
    ];

    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {t.contact.title}
                    </h1>
                    <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mb-4" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
                        {t.contact.subtitle}
                    </p>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <FadeIn delay={0.1}>
                        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                                {t.contact.sendMessage}
                            </h2>
                            <form
                                action={`mailto:${siteConfig.email}`}
                                method="POST"
                                encType="text/plain"
                                className="space-y-4"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                    >
                                        {t.contact.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                                        placeholder={t.contact.namePlaceholder}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                    >
                                        {t.contact.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                                        placeholder={t.contact.emailPlaceholder}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                    >
                                        {t.contact.message}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                                        placeholder={t.contact.messagePlaceholder}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                                >
                                    <Send className="w-4 h-4" />
                                    {t.contact.submit}
                                </button>
                            </form>
                        </div>
                    </FadeIn>

                    {/* Contact Methods */}
                    <div className="space-y-6">
                        <FadeIn delay={0.2}>
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                                {t.contact.otherWays}
                            </h2>
                        </FadeIn>

                        {contactMethods.map((method, index) => (
                            <FadeIn key={method.label} delay={0.3 + index * 0.1}>
                                <Link
                                    href={method.href}
                                    target={method.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel={
                                        method.href.startsWith("mailto")
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    className="group flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
                                >
                                    <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-950 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900 transition-colors">
                                        <method.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {method.label}
                                        </h3>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400">
                                            {method.value}
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                                            {method.description}
                                        </p>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
