"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { useLocale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/data";
import { TextBlur } from "@/components/ui/text-blur";

function ProjectCard({
    project,
    index,
    t,
    locale,
    className,
}: {
    project: Project;
    index: number;
    t: ReturnType<typeof useLocale>["t"];
    locale: string;
    className?: string;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={cn(
                "group relative flex flex-col h-full p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 md:hover:border-indigo-300 md:dark:hover:border-indigo-800 transition-colors",
                className
            )}
        >
            {/* Featured Badge */}
            {project.featured && (
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    <TextBlur trigger={locale}>
                        {t.projects.featured}
                    </TextBlur>
                </span>
            )}

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 pr-16 md:group-hover:text-indigo-600 md:dark:group-hover:text-indigo-400 transition-colors">
                    <TextBlur trigger={locale}>
                        {(t.projects.titles as Record<string, string>)[project.id] || project.title}
                    </TextBlur>
                </h3>
                <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    <TextBlur trigger={locale}>
                        {(t.projects.items as Record<string, string>)[project.id] || project.description}
                    </TextBlur>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                            <TextBlur trigger={locale}>
                                {tech}
                            </TextBlur>
                        </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                    <TextBlur trigger={locale} className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        {t.projects.code}
                    </TextBlur>
                </Link>
                {project.demo && (
                    <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        <TextBlur trigger={locale} className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            {t.projects.demo}
                        </TextBlur>
                    </Link>
                )}
            </div>
        </motion.article>
    );
}

export default function ProjectsPage() {
    const { t, locale } = useLocale();

    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn>
                    <TextBlur trigger={locale}>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            {t.projects.title}
                        </h1>
                    </TextBlur>
                    <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mb-4" />
                    <TextBlur trigger={locale}>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
                            {locale === "es" ? (
                                <>
                                    Convirtiendo ideas en realidad.{" "}
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        Si lo puedes imaginar, lo puedes programar.
                                    </span>
                                </>
                            ) : (
                                <>
                                    Turning ideas into reality.{" "}
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        If you can imagine it, you can program it.
                                    </span>
                                </>
                            )}
                        </p>
                    </TextBlur>
                </FadeIn>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            t={t}
                            locale={locale}
                            className={cn(
                                index === projects.length - 1 && projects.length % 2 !== 0
                                    ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]"
                                    : ""
                            )}
                        />
                    ))}
                </div>

                {/* GitHub CTA */}
                <FadeIn delay={0.4}>
                    <div className="mt-12 text-center">
                        <TextBlur trigger={locale}>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                {t.projects.moreProjects}
                            </p>
                        </TextBlur>
                        <Link
                            href="https://github.com/itsebasvz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            <TextBlur trigger={locale}>
                                {t.projects.viewGithub}
                            </TextBlur>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
