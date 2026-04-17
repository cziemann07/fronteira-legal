import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Audience } from "@/components/sections/audience"
import { Pricing } from "@/components/sections/pricing"
import { About } from "@/components/sections/about"
import { FAQ } from "@/components/sections/faq"
import { CTAFinal } from "@/components/sections/cta-final"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Audience />
        <Pricing />
        <About />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
