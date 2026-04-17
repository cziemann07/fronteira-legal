"use client"

import { useLanguage } from "@/lib/language-context"
import { whatsappUrl } from "@/lib/whatsapp"
import { WhatsAppIcon } from "./whatsapp-button"

export function WhatsAppFloat() {
  const { lang, t } = useLanguage()
  return (
    <a
      href={whatsappUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-colors hover:bg-whatsapp-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 md:hidden"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  )
}
