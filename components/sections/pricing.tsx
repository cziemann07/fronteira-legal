"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"
import { WhatsAppButton, WhatsAppIcon } from "@/components/whatsapp-button"

export function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal
            as="h2"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t.pricing.title}
          </Reveal>
          <Reveal
            as="p"
            className="mt-4 text-pretty text-[15px] leading-6 text-muted-foreground"
          >
            {t.pricing.subtitle}
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {t.pricing.plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 90}
              className="card-interactive flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/30 hover:shadow-md md:p-7"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold leading-snug text-foreground">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t.pricing.currency}
                  </span>
                  <span className="text-4xl font-semibold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-5 text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-auto pt-2">
                <WhatsAppButton
                  size="md"
                  className="w-full"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                  customMessage={`${plan.name} — ${t.pricing.currency} ${plan.price}`}
                >
                  {t.pricing.cta}
                </WhatsAppButton>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>Pix</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
