"use client"

import { Check, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const OPTIONS: { code: Language; label: string; native: string }[] = [
  { code: "pt", label: "PT", native: "Português" },
  { code: "es", label: "ES", native: "Español" },
  { code: "en", label: "EN", native: "English" },
]

export function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "compact" }) {
  const { lang, setLang, t } = useLanguage()
  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t.langSwitcher}
        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        <span>{current.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[9rem]">
        {OPTIONS.map((opt) => (
          <DropdownMenuItem
            key={opt.code}
            onSelect={() => setLang(opt.code)}
            className="flex items-center justify-between gap-4"
          >
            <span className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">{opt.label}</span>
              <span>{opt.native}</span>
            </span>
            {opt.code === lang && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
