"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Code } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { useLocale } from "@/components/providers/locale-provider";
import { siteConfig, skillCategories } from "@/lib/data";

export default function AboutPage() {
    const { t } = useLocale();

    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {t.about.title}
                    </h1>
                    <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mb-8" />
                </FadeIn>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Bio */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Photo */}
                        <FadeIn delay={0.1}>
                            <div className="flex items-center gap-6 mb-2">
                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                                    <Image
                                        src="/sebastianvz.jpeg"
                                        alt={siteConfig.name}
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover rounded-full ring-4 ring-indigo-100 dark:ring-indigo-950"
                                        priority
                                    />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                                        {siteConfig.name}
                                    </h2>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                                        {siteConfig.faculty} - UNAM
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t.about.bio.paragraph1}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t.about.bio.paragraph2}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t.about.bio.paragraph3}
                            </p>
                        </FadeIn>

                        {/* Info Cards */}
                        <FadeIn delay={0.4}>
                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950">
                                        <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white">
                                            {t.about.education}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {t.about.degree}
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500">
                                            {siteConfig.faculty} - UNAM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                    <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-950">
                                        <MapPin className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white">
                                            {t.about.location}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {t.about.city}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Skills */}
                    <div className="space-y-6">
                        <FadeIn delay={0.2}>
                            <div className="flex items-center gap-2 mb-4">
                                <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    {t.about.technologies}
                                </h2>
                            </div>
                        </FadeIn>

                        {skillCategories.map((category, categoryIndex) => (
                            <FadeIn key={category.name} delay={0.3 + categoryIndex * 0.1}>
                                <div className="space-y-3">
                                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        {category.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
