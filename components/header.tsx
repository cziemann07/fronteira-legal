"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { SERVICE_NAME } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { WhatsAppButton, WhatsAppIcon } from "./whatsapp-button"

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const nav = [
    { href: "#como-funciona", label: t.nav.howItWorks },
    { href: "#servicos", label: t.nav.services },
    { href: "#contato", label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur-md transition-colors",
        scrolled && "border-border bg-background/95",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold"
          >
            FL
          </span>
          <span>{SERVICE_NAME}</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <LanguageSwitcher />
          <WhatsAppButton size="sm" icon={<WhatsAppIcon className="h-4 w-4" />}>
            {t.nav.whatsapp}
          </WhatsAppButton>
        </div>

        {/* Mobile right */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-tactile inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-secondary focus:outline-none"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 px-1">
              <WhatsAppButton
                size="md"
                className="w-full"
                icon={<WhatsAppIcon className="h-4 w-4" />}
              >
                {t.nav.whatsapp}
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
