"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { useLocale } from "@/components/providers/locale-provider";
import { siteConfig } from "@/lib/data";
import { TextBlur } from "@/components/ui/text-blur";

export default function ContactPage() {
    const { t, locale } = useLocale();
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn>
                    <TextBlur trigger={locale}>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            {t.contact.title}
                        </h1>
                    </TextBlur>
                    <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mb-4" />
                    <TextBlur trigger={locale}>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
                            {t.contact.subtitle}
                        </p>
                    </TextBlur>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <FadeIn delay={0.1}>
                        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                            <TextBlur trigger={locale}>
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                                    {t.contact.sendMessage}
                                </h2>
                            </TextBlur>

                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                    </div>
                                    <TextBlur trigger={locale}>
                                        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                                            {t.contact.successTitle}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                                            {t.contact.successMessage}
                                        </p>
                                    </TextBlur>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                                    >
                                        <TextBlur trigger={locale}>
                                            {t.contact.sendAnother}
                                        </TextBlur>
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                        >
                                            <TextBlur trigger={locale}>
                                                {t.contact.name}
                                            </TextBlur>
                                        </label>
                                        <TextBlur trigger={locale} className="w-full">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                disabled={status === "submitting"}
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder={t.contact.namePlaceholder}
                                            />
                                        </TextBlur>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                        >
                                            <TextBlur trigger={locale}>
                                                {t.contact.email}
                                            </TextBlur>
                                        </label>
                                        <TextBlur trigger={locale} className="w-full">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                disabled={status === "submitting"}
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder={t.contact.emailPlaceholder}
                                            />
                                        </TextBlur>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                        >
                                            <TextBlur trigger={locale}>
                                                {t.contact.message}
                                            </TextBlur>
                                        </label>
                                        <TextBlur trigger={locale} className="w-full">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                required
                                                disabled={status === "submitting"}
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder={t.contact.messagePlaceholder}
                                            />
                                        </TextBlur>
                                    </div>

                                    {status === "error" && (
                                        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
                                            <AlertCircle className="w-4 h-4 shrink-0" />
                                            <TextBlur trigger={locale}>
                                                <p>{t.contact.errorMessage}</p>
                                            </TextBlur>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <TextBlur trigger={locale} className="flex items-center gap-2">
                                                <Send className="w-4 h-4" />
                                                {t.contact.submit}
                                            </TextBlur>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeIn>

                    {/* Contact Methods */}
                    <div className="space-y-6">
                        <FadeIn delay={0.2}>
                            <TextBlur trigger={locale}>
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                                    {t.contact.otherWays}
                                </h2>
                            </TextBlur>
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
                                        <TextBlur trigger={locale}>
                                            <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {method.label}
                                            </h3>
                                            <p className="text-sm text-indigo-600 dark:text-indigo-400">
                                                {method.value}
                                            </p>
                                            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                                                {method.description}
                                            </p>
                                        </TextBlur>
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
