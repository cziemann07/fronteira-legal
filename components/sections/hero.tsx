"use client"

import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"
import { WhatsAppButton, WhatsAppIcon } from "@/components/whatsapp-button"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <Reveal as="h1" className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            {t.hero.title}{" "}
            <span className="text-primary">{t.hero.titleAccent}</span>
          </Reveal>

          <Reveal as="p" className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.subtitle}
          </Reveal>

          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
              {t.hero.ctaPrimary}
            </WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 text-base font-medium text-foreground transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t.hero.ctaSecondary}
            </a>
          </Reveal>

          <Reveal className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>{t.hero.seal}</span>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-secondary shadow-sm lg:aspect-[5/4]">
          <Image
            src="/hero-documents.jpg"
            alt={t.hero.imageAlt}
            fill
            sizes="(min-width: 1024px) 42rem, 100vw"
            className="object-cover"
            priority
          />
        </Reveal>
      </div>
    </section>
  )
}
