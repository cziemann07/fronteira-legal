"use client"

import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"
import { WhatsAppButton, WhatsAppIcon } from "@/components/whatsapp-button"

export function CTAFinal() {
  const { t } = useLanguage()

  return (
    <section id="contato" className="bg-dark-section text-dark-section-foreground">
      <div className="mx-auto max-w-4xl px-4 py-24 text-center md:px-6 md:py-32">
        <Reveal as="h2" className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {t.ctaFinal.title}
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-dark-section-foreground/70 md:text-lg"
        >
          {t.ctaFinal.subtitle}
        </Reveal>
        <Reveal delay={160} className="mt-10 flex justify-center md:mt-12">
          <WhatsAppButton size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
            {t.ctaFinal.cta}
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  )
}
