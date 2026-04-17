"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type Dictionary, type Language } from "./translations"

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "fl-lang"

function detectInitialLang(): Language {
  if (typeof window === "undefined") return "pt"
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored === "pt" || stored === "es" || stored === "en") return stored
  const nav = window.navigator.language.toLowerCase()
  if (nav.startsWith("es")) return "es"
  if (nav.startsWith("en")) return "en"
  return "pt"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("pt")

  useEffect(() => {
    setLangState(detectInitialLang())
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
    }
  }, [lang])

  const setLang = (next: Language) => {
    setLangState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
