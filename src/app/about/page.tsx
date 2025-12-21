"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Code } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Marquee } from "@/components/motion/marquee";
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

                <div className="mb-20">
                    {/* Bio */}
                    <div className="space-y-6">
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


                </div>

                {/* Skills - Infinite Marquee (Full Width) */}
                <div className="space-y-8 overflow-hidden">
                    <FadeIn delay={0.5}>
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {t.about.technologies}
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="relative flex flex-col gap-6 -mx-4 sm:-mx-6 lg:-mx-8">
                        {/* First Row - Frontend (Left) */}
                        <Marquee pauseOnHover className="[--duration:40s]">
                            {skillCategories[0].skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="mx-3 px-5 py-2.5 text-base font-medium rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm hover:scale-110 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </Marquee>

                        {/* Second Row - Backend & Tools (Right) */}
                        <Marquee reverse pauseOnHover className="[--duration:40s]">
                            {[...skillCategories[1].skills, ...skillCategories[2].skills].map((skill) => (
                                <span
                                    key={skill}
                                    className="mx-3 px-5 py-2.5 text-base font-medium rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm hover:scale-110 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </Marquee>

                        {/* Gradient Masks for Fade Effect */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
