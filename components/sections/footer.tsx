"use client"

import { Instagram } from "lucide-react"
import { SERVICE_NAME } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { whatsappUrl } from "@/lib/whatsapp"

// Ícone do TikTok (lucide-react não inclui)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1Z" />
    </svg>
  )
}

export function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Coluna 1 - Marca */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold"
              >
                FL
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                {SERVICE_NAME}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <div className="mt-2 flex items-center gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">{t.footer.linksTitle}</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#top" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.links.home}
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.links.howItWorks}
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.links.services}
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">{t.footer.contactTitle}</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={whatsappUrl(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.email}
                </a>
              </li>
              <li className="text-muted-foreground">{t.footer.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 md:mt-14">
          <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
            {t.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  )
}
