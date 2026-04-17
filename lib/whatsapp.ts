import { WHATSAPP_NUMBER, type Language } from "./translations"

const defaultMessages: Record<Language, string> = {
  pt: "Olá! Gostaria de saber mais sobre a consultoria de imigração.",
  es: "¡Hola! Me gustaría saber más sobre la consultoría de inmigración.",
  en: "Hi! I'd like to know more about the immigration consultancy.",
}

export function whatsappUrl(lang: Language = "pt", custom?: string) {
  const msg = custom ?? defaultMessages[lang]
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}
