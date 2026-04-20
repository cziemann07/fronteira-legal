"use client"

import { useLanguage } from "@/lib/language-context"
import { Reveal } from "@/components/reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28">
        <Reveal as="h2" className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t.faq.title}
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
