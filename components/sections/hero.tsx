"use client"

import { ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"
import { DocPreview } from "@/components/doc-preview"
import { WhatsAppButton, WhatsAppIcon } from "@/components/whatsapp-button"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero-glow relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 md:px-6 md:py-32 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-7">
          <h1 className="text-balance text-[2.5rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            {t.hero.title}{" "}
            <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.7]">
            {t.hero.subtitle}
          </p>

          <Reveal className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
              {t.hero.ctaPrimary}
            </WhatsAppButton>
            <a
              href="#como-funciona"
              className="btn-tactile inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 text-base font-medium text-foreground shadow-sm hover:bg-muted focus:outline-none"
            >
              {t.hero.ctaSecondary}
            </a>
          </Reveal>

          <Reveal className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>{t.hero.seal}</span>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className="relative flex flex-col items-stretch gap-4 lg:items-end"
        >
          <DocPreview variant="residente" className="lg:ml-auto" />
          <DocPreview
            variant="fronteirico"
            className="lg:max-w-[86%] lg:-translate-x-6"
          />
        </Reveal>
      </div>
    </section>
  )
}
