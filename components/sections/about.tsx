"use client"

import Image from "next/image"
import { AlertTriangle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <Reveal as="h2" className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.about.title}
          </Reveal>
          <Reveal as="p" className="text-pretty text-base leading-relaxed text-muted-foreground">
            {t.about.text}
          </Reveal>
          <Reveal className="flex items-start gap-3 rounded-md border border-border bg-card p-4 text-sm leading-relaxed text-foreground">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
            <span>{t.about.disclaimer}</span>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative order-first aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm lg:order-last">
          <Image
            src="/about-team.jpg"
            alt={t.about.imageAlt}
            fill
            sizes="(min-width: 1024px) 42rem, 100vw"
            className="object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}
