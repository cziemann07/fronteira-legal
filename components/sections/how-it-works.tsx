"use client"

import { MessageSquare, ListChecks, FileSearch, Building2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"

const ICONS = [MessageSquare, ListChecks, FileSearch, Building2]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="como-funciona" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal
          as="h2"
          className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {t.howItWorks.title}
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = ICONS[i] ?? MessageSquare
            const n = i + 1
            return (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 80}
                className="card-interactive relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 font-mono text-sm font-semibold text-primary"
                  >
                    {String(n).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-5 text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
