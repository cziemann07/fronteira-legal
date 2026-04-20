"use client"

import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function Audience() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-muted/60">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal
          as="h2"
          className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {t.audience.title}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {t.audience.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className="card-interactive flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/30 hover:shadow-md"
            >
              <span className="text-2xl leading-none" aria-hidden="true">
                {item.flag}
              </span>
              <h3 className="text-base font-semibold leading-snug text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-5 text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 text-center md:mt-16">
          <p className="text-pretty text-[15px] leading-6 text-foreground">
            {t.audience.footer}
          </p>
          <WhatsAppButton size="md">{t.nav.whatsapp}</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  )
}
