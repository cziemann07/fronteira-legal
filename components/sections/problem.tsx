"use client"

import { AlertCircle, FileQuestion, CalendarX } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"

const ICONS = [AlertCircle, FileQuestion, CalendarX]

export function Problem() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <Reveal as="h2" className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t.problem.title}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-6">
          {t.problem.items.map((item, i) => {
            const Icon = ICONS[i] ?? AlertCircle
            return (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm"
              >
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold leading-snug text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal as="p" className="mx-auto mt-10 max-w-2xl text-pretty text-center text-base leading-relaxed text-foreground md:mt-12">
          {t.problem.footer}
        </Reveal>
      </div>
    </section>
  )
}
