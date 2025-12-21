"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { RotatingText } from "@/components/motion/rotating-text";
import { InteractiveGrid } from "@/components/motion/interactive-grid";
import { useLocale } from "@/components/providers/locale-provider";
import { siteConfig } from "@/lib/data";

import { TextBlur } from "@/components/ui/text-blur";

export default function HomePage() {
  const { t, locale } = useLocale();
  const roles = t.home.roles as unknown as string[];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      <InteractiveGrid />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <TextBlur trigger={locale}>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                {t.home.greeting}
              </p>
            </TextBlur>
          </FadeIn>

          <FadeIn delay={0.1}>
            <TextBlur trigger={locale}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                {siteConfig.name}
                <span className="text-indigo-600 dark:text-indigo-400">.</span>
              </h1>
            </TextBlur>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-[1.2em]">
              <TextBlur trigger={locale}>
                <RotatingText
                  texts={roles}
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent"
                  interval={3000}
                />
              </TextBlur>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <TextBlur trigger={locale}>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
                {t.home.description}
              </p>
            </TextBlur>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                <TextBlur trigger={locale} className="flex items-center gap-2">
                  {t.home.viewProjects}
                  <ArrowRight className="w-4 h-4" />
                </TextBlur>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                <TextBlur trigger={locale}>
                  {t.home.aboutMe}
                </TextBlur>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                <TextBlur trigger={locale}>
                  {t.home.contactMe}
                </TextBlur>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex items-center gap-4 mt-10">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
