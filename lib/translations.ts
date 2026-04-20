export type Language = "pt" | "es" | "en"

export const SERVICE_NAME = "Fronteira Legal"
export const WHATSAPP_NUMBER = "5545998393963" // placeholder

export const translations = {
  pt: {
    meta: {
      title: `${SERVICE_NAME} — Regularize sua situação no Brasil sem perder tempo na Polícia Federal`,
      description:
        "Consultoria digital de imigração para mercosulinos, fronteiriços e venezuelanos. Revisamos sua documentação, orientamos o agendamento e preparamos tudo para uma única ida à PF.",
    },
    nav: {
      howItWorks: "Como funciona",
      services: "Serviços",
      contact: "Contato",
      whatsapp: "Fale no WhatsApp",
    },
    hero: {
      title: "Regularize sua situação no Brasil",
      titleAccent: "sem perder tempo na Polícia Federal",
      subtitle:
        "Revisamos sua documentação, orientamos sobre agendamento e preparamos tudo para você ir na PF uma única vez — e sair com o que precisa.",
      ctaPrimary: "Falar no WhatsApp",
      ctaSecondary: "Ver como funciona",
      seal: "Atendimento 100% online • Pagamento só após revisão",
      imageAlt: "Documentos de imigração organizados sobre uma mesa",
    },
    problem: {
      title: "Conhece alguma dessas situações?",
      items: [
        {
          title: "Foi na PF e foi mandado embora",
          description: "Chegou com os papéis na mão e descobriu que faltava um documento.",
        },
        {
          title: "Não sabe quais papéis levar",
          description: "A lista da internet não bate com o seu caso e ninguém te explica direito.",
        },
        {
          title: "Não consegue agendamento",
          description: "Tenta marcar vaga na PF há semanas e nunca abre horário perto de você.",
        },
      ],
      footer:
        "Você não está sozinho. O processo da PF é confuso de propósito — e a gente resolve isso por você.",
    },
    howItWorks: {
      title: "Como funciona",
      steps: [
        {
          title: "Você manda uma mensagem no WhatsApp",
          description: "Conta seu caso: qual país, qual tipo de autorização, sua situação atual.",
        },
        {
          title: "A gente te envia uma checklist personalizada",
          description:
            "Lista exata dos documentos que você precisa levar, com base no seu caso específico.",
        },
        {
          title: "Revisamos seus documentos antes da PF",
          description:
            "Você escaneia ou fotografa e manda no WhatsApp. Avisamos se falta algo ou tem erro.",
        },
        {
          title: "Você vai na PF uma única vez",
          description: "Com tudo certo, você resolve de primeira. Sem voltar, sem refilas.",
        },
      ],
    },
    audience: {
      title: "Atendemos",
      items: [
        {
          flag: "🇵🇾",
          title: "Paraguaios",
          description: "Acordo Mercosul",
        },
        {
          flag: "🇦🇷🇺🇾🇧🇴🇨🇱",
          title: "Argentinos, Uruguaios, Bolivianos, Chilenos",
          description: "Acordo Mercosul",
        },
        {
          flag: "🇻🇪",
          title: "Venezuelanos",
          description: "Acordo de residência",
        },
        {
          flag: "🌐",
          title: "Fronteiriços",
          description: "Residência fronteiriça",
        },
      ],
      footer:
        "Ainda não tem certeza do seu caso? Mande uma mensagem e a gente te orienta de graça sobre o que pode fazer.",
    },
    pricing: {
      title: "Quanto custa?",
      subtitle:
        "Preços fixos. Sem letras miúdas. Você paga só depois que a gente revisar seus documentos e confirmar que está tudo certo.",
      currency: "R$",
      plans: [
        {
          name: "Orientação + Checklist personalizada",
          price: "147",
          description:
            "Ideal pra quem quer fazer o processo sozinho com segurança. Você recebe a lista exata de documentos, modelos preenchidos e orientação de agendamento.",
        },
        {
          name: "Revisão completa de documentação",
          price: "297",
          description:
            "Tudo do plano anterior + revisão dos seus documentos digitalizados antes de ir na PF. Se faltar algo, a gente te avisa.",
        },
        {
          name: "Acompanhamento completo",
          price: "497",
          description:
            "Tudo dos planos anteriores + suporte via WhatsApp do início ao fim do processo, incluindo dúvidas pós-atendimento na PF.",
        },
      ],
      cta: "Falar no WhatsApp",
    },
    about: {
      title: "Por que confiar na gente?",
      text: "Somos uma equipe de Foz do Iguaçu, na tríplice fronteira, que conhece de perto como funciona o processo migratório brasileiro. Já vimos de tudo — gente perdendo o dia por falta de uma cópia, gente sendo mandada embora por não saber que precisava apostilar um documento, gente desistindo no meio do caminho. Criamos este serviço pra que você não passe por isso.",
      disclaimer:
        "Importante: não somos escritório de advocacia. Nosso serviço é de orientação documental e consultoria. Para casos que exigem representação jurídica, indicamos advogados parceiros.",
      imageAlt: "Pasta organizadora com documentos de imigração",
    },
    faq: {
      title: "Perguntas frequentes",
      items: [
        {
          question: "Vocês vão comigo na PF?",
          answer:
            "Não. Atendemos 100% online. Mas você vai preparado, com tudo revisado, e com instruções claras do que dizer e o que apresentar.",
        },
        {
          question: "E se eu for na PF e mesmo assim der problema?",
          answer:
            "A gente te dá suporte via WhatsApp no momento, se possível resolve na hora. Se a PF pedir algo novo que ninguém podia prever, orientamos o próximo passo sem cobrar de novo.",
        },
        {
          question: "Como pago?",
          answer:
            "Pix, só depois que a gente revisar seus documentos e você confirmar que quer seguir. Zero risco pra você.",
        },
        {
          question: "Meus documentos ficam em segurança?",
          answer:
            "Sim. Usamos canais criptografados (WhatsApp) e não compartilhamos nada com terceiros. Deletamos seus arquivos após o encerramento do processo.",
        },
        {
          question: "Atendem em qual idioma?",
          answer: "Português, espanhol e inglês.",
        },
        {
          question: "E se eu não souber nem o que preciso fazer?",
          answer:
            "Manda uma mensagem mesmo assim. A conversa inicial é gratuita e a gente te orienta sobre qual caminho seguir.",
        },
      ],
    },
    ctaFinal: {
      title: "Resolva sua situação no Brasil com tranquilidade",
      subtitle: "Mande uma mensagem agora. A primeira conversa é por nossa conta.",
      cta: "Falar no WhatsApp agora",
    },
    footer: {
      tagline: "Consultoria digital de imigração para quem precisa regularizar sua situação no Brasil.",
      linksTitle: "Navegação",
      links: {
        home: "Início",
        howItWorks: "Como funciona",
        services: "Serviços",
        faq: "Perguntas frequentes",
        contact: "Contato",
      },
      contactTitle: "Contato",
      email: "contato@fronteiralegal.com.br",
      hours: "Atendemos de seg a sex, 9h às 18h (BRT)",
      whatsappLabel: "WhatsApp",
      legal: `© 2026 ${SERVICE_NAME} • CNPJ XX.XXX.XXX/0001-XX • ${SERVICE_NAME} é um serviço de orientação documental e não substitui representação jurídica.`,
    },
    whatsappAria: "Abrir conversa no WhatsApp",
    langSwitcher: "Idioma",
  },

  es: {
    meta: {
      title: `${SERVICE_NAME} — Regulariza tu situación en Brasil sin perder tiempo en la Policía Federal`,
      description:
        "Consultoría digital de inmigración para mercosureños, fronterizos y venezolanos. Revisamos tu documentación, te orientamos sobre el turno y preparamos todo para que vayas a la PF una sola vez.",
    },
    nav: {
      howItWorks: "Cómo funciona",
      services: "Servicios",
      contact: "Contacto",
      whatsapp: "Escribir por WhatsApp",
    },
    hero: {
      title: "Regulariza tu situación en Brasil",
      titleAccent: "sin perder tiempo en la Policía Federal",
      subtitle:
        "Revisamos tu documentación, te orientamos sobre el turno y preparamos todo para que vayas a la PF una sola vez — y salgas con lo que necesitas.",
      ctaPrimary: "Escribir por WhatsApp",
      ctaSecondary: "Ver cómo funciona",
      seal: "Atención 100% online • Pagas solo después de la revisión",
      imageAlt: "Documentos de inmigración organizados sobre una mesa",
    },
    problem: {
      title: "¿Te pasó alguna de estas situaciones?",
      items: [
        {
          title: "Fuiste a la PF y te mandaron volver",
          description: "Llegaste con los papeles y descubriste que faltaba un documento.",
        },
        {
          title: "No sabés qué papeles llevar",
          description: "La lista de internet no coincide con tu caso y nadie te lo explica bien.",
        },
        {
          title: "No conseguís turno",
          description: "Hace semanas que intentás sacar turno en la PF y nunca hay cupo cerca tuyo.",
        },
      ],
      footer:
        "No estás solo. El trámite en la PF es confuso a propósito — y nosotros lo resolvemos por vos.",
    },
    howItWorks: {
      title: "Cómo funciona",
      steps: [
        {
          title: "Nos escribís por WhatsApp",
          description: "Contás tu caso: de qué país, qué tipo de autorización, cómo estás hoy.",
        },
        {
          title: "Te enviamos una checklist personalizada",
          description:
            "La lista exacta de documentos que tenés que llevar, según tu caso específico.",
        },
        {
          title: "Revisamos tus documentos antes de la PF",
          description:
            "Los escaneás o fotografiás y los mandás por WhatsApp. Te avisamos si falta algo o hay un error.",
        },
        {
          title: "Vas a la PF una sola vez",
          description: "Con todo en orden, resolvés de una. Sin volver, sin hacer cola de nuevo.",
        },
      ],
    },
    audience: {
      title: "Atendemos",
      items: [
        {
          flag: "🇵🇾",
          title: "Paraguayos",
          description: "Acuerdo Mercosur",
        },
        {
          flag: "🇦🇷🇺🇾🇧🇴🇨🇱",
          title: "Argentinos, Uruguayos, Bolivianos, Chilenos",
          description: "Acuerdo Mercosur",
        },
        {
          flag: "🇻🇪",
          title: "Venezolanos",
          description: "Acuerdo de residencia",
        },
        {
          flag: "🌐",
          title: "Fronterizos",
          description: "Residencia fronteriza",
        },
      ],
      footer:
        "¿No tenés certeza de tu caso? Escribinos y te orientamos gratis sobre qué podés hacer.",
    },
    pricing: {
      title: "¿Cuánto cuesta?",
      subtitle:
        "Precios fijos. Sin letra chica. Pagás solo después de que revisemos tus documentos y confirmes que querés avanzar.",
      currency: "R$",
      plans: [
        {
          name: "Orientación + Checklist personalizada",
          price: "147",
          description:
            "Ideal para quien quiere hacer el trámite por su cuenta con seguridad. Recibís la lista exacta de documentos, modelos completados y orientación para el turno.",
        },
        {
          name: "Revisión completa de documentación",
          price: "297",
          description:
            "Todo lo del plan anterior + revisión de tus documentos digitalizados antes de ir a la PF. Si falta algo, te avisamos.",
        },
        {
          name: "Acompañamiento completo",
          price: "497",
          description:
            "Todo lo de los planes anteriores + soporte por WhatsApp del inicio al final del trámite, incluyendo dudas después de la PF.",
        },
      ],
      cta: "Escribir por WhatsApp",
    },
    about: {
      title: "¿Por qué confiar en nosotros?",
      text: "Somos un equipo de Foz do Iguaçu, en la triple frontera, que conoce de cerca cómo funciona el proceso migratorio brasileño. Vimos de todo — gente que perdió el día por una copia faltante, gente a la que mandaron volver por no saber que había que apostillar un documento, gente que abandonó el trámite a mitad de camino. Creamos este servicio para que vos no pases por eso.",
      disclaimer:
        "Importante: no somos un estudio jurídico. Nuestro servicio es de orientación documental y consultoría. Para casos que requieren representación legal, te derivamos a abogados asociados.",
      imageAlt: "Carpeta organizada con documentos de inmigración",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Van conmigo a la PF?",
          answer:
            "No. Atendemos 100% online. Pero vas preparado, con todo revisado, y con instrucciones claras de qué decir y qué presentar.",
        },
        {
          question: "¿Y si voy a la PF y aun así hay un problema?",
          answer:
            "Te damos soporte por WhatsApp en el momento; si se puede, lo resolvemos ahí. Si la PF pide algo nuevo que nadie podía prever, te orientamos el siguiente paso sin cobrarte de nuevo.",
        },
        {
          question: "¿Cómo pago?",
          answer:
            "Pix, solo después de que revisemos tus documentos y confirmes que querés avanzar. Cero riesgo para vos.",
        },
        {
          question: "¿Mis documentos están seguros?",
          answer:
            "Sí. Usamos canales cifrados (WhatsApp) y no compartimos nada con terceros. Eliminamos tus archivos al cerrar el proceso.",
        },
        {
          question: "¿En qué idiomas atienden?",
          answer: "Portugués, español e inglés.",
        },
        {
          question: "¿Y si ni siquiera sé qué necesito hacer?",
          answer:
            "Escribinos igual. La primera conversación es gratis y te orientamos sobre qué camino seguir.",
        },
      ],
    },
    ctaFinal: {
      title: "Resolvé tu situación en Brasil con tranquilidad",
      subtitle: "Escribinos ahora. La primera conversación corre por nuestra cuenta.",
      cta: "Escribir por WhatsApp ahora",
    },
    footer: {
      tagline:
        "Consultoría digital de inmigración para quienes necesitan regularizar su situación en Brasil.",
      linksTitle: "Navegación",
      links: {
        home: "Inicio",
        howItWorks: "Cómo funciona",
        services: "Servicios",
        faq: "Preguntas frecuentes",
        contact: "Contacto",
      },
      contactTitle: "Contacto",
      email: "contato@fronteiralegal.com.br",
      hours: "Atendemos de lunes a viernes, 9h a 18h (BRT)",
      whatsappLabel: "WhatsApp",
      legal: `© 2026 ${SERVICE_NAME} • CNPJ XX.XXX.XXX/0001-XX • ${SERVICE_NAME} es un servicio de orientación documental y no sustituye la representación jurídica.`,
    },
    whatsappAria: "Abrir conversación en WhatsApp",
    langSwitcher: "Idioma",
  },

  en: {
    meta: {
      title: `${SERVICE_NAME} — Sort out your status in Brazil without wasting time at the Federal Police`,
      description:
        "Digital immigration consultancy for Mercosur citizens, border residents, and Venezuelans. We review your documents, help you book your appointment, and prepare everything so you visit the Federal Police just once.",
    },
    nav: {
      howItWorks: "How it works",
      services: "Services",
      contact: "Contact",
      whatsapp: "Chat on WhatsApp",
    },
    hero: {
      title: "Sort out your status in Brazil",
      titleAccent: "without wasting time at the Federal Police",
      subtitle:
        "We review your documents, guide you through the appointment, and prepare everything so you visit the Federal Police just once — and walk out with what you need.",
      ctaPrimary: "Chat on WhatsApp",
      ctaSecondary: "See how it works",
      seal: "100% online • You only pay after we review your documents",
      imageAlt: "Organized immigration documents on a desk",
    },
    problem: {
      title: "Does any of this sound familiar?",
      items: [
        {
          title: "You went to the PF and were turned away",
          description: "You showed up with your papers and were told a document was missing.",
        },
        {
          title: "You don't know exactly which papers to bring",
          description: "The list you found online doesn't match your case, and no one explains it clearly.",
        },
        {
          title: "You can't get an appointment",
          description: "You've been trying to book a slot at the PF for weeks with no availability nearby.",
        },
      ],
      footer:
        "You're not alone. The PF process is confusing on purpose — and we handle that for you.",
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "You send us a message on WhatsApp",
          description: "Tell us your case: which country, what type of authorization, and where you stand today.",
        },
        {
          title: "We send you a personalized checklist",
          description: "The exact list of documents you need to bring, based on your specific case.",
        },
        {
          title: "We review your documents before the PF",
          description:
            "You scan or photograph them and send them on WhatsApp. We flag anything missing or wrong.",
        },
        {
          title: "You visit the PF only once",
          description: "With everything ready, you get it done first time. No return trips, no new lines.",
        },
      ],
    },
    audience: {
      title: "Who we help",
      items: [
        {
          flag: "🇵🇾",
          title: "Paraguayans",
          description: "Mercosur agreement",
        },
        {
          flag: "🇦🇷🇺🇾🇧🇴🇨🇱",
          title: "Argentinians, Uruguayans, Bolivians, Chileans",
          description: "Mercosur agreement",
        },
        {
          flag: "🇻🇪",
          title: "Venezuelans",
          description: "Residency agreement",
        },
        {
          flag: "🌐",
          title: "Border residents",
          description: "Border residence status",
        },
      ],
      footer:
        "Not sure which category fits you? Send us a message — the initial orientation is free.",
    },
    pricing: {
      title: "How much does it cost?",
      subtitle:
        "Fixed prices. No fine print. You only pay after we review your documents and you confirm everything is in order.",
      currency: "BRL",
      plans: [
        {
          name: "Orientation + Personalized checklist",
          price: "147",
          description:
            "Ideal if you want to handle the process on your own with confidence. You receive the exact list of documents, filled-in templates, and appointment guidance.",
        },
        {
          name: "Full document review",
          price: "297",
          description:
            "Everything in the previous plan + a review of your digitized documents before the PF visit. If anything is missing, we tell you.",
        },
        {
          name: "Full support",
          price: "497",
          description:
            "Everything in the previous plans + WhatsApp support from start to finish, including follow-up questions after your PF appointment.",
        },
      ],
      cta: "Chat on WhatsApp",
    },
    about: {
      title: "Why trust us?",
      text: "We're a team based in Foz do Iguaçu, right at the triple border, and we know the Brazilian immigration process up close. We've seen it all — people losing a full day because of one missing copy, people being turned away because they didn't know a document needed an apostille, people giving up halfway through. We built this service so you don't have to go through that.",
      disclaimer:
        "Important: we are not a law firm. Our service is document guidance and consultancy. For cases that require legal representation, we refer you to partner attorneys.",
      imageAlt: "Organizer folder with immigration documents",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you come with me to the PF?",
          answer:
            "No. We work 100% online. But you'll arrive prepared, with everything reviewed, and with clear instructions on what to say and what to present.",
        },
        {
          question: "What if I go to the PF and there's still a problem?",
          answer:
            "We support you on WhatsApp in real time and, if possible, solve it on the spot. If the PF requests something new that nobody could have anticipated, we guide you through the next step at no extra cost.",
        },
        {
          question: "How do I pay?",
          answer:
            "Via Pix, only after we review your documents and you confirm you want to move forward. Zero risk on your side.",
        },
        {
          question: "Are my documents safe?",
          answer:
            "Yes. We use encrypted channels (WhatsApp) and share nothing with third parties. We delete your files once the process is closed.",
        },
        {
          question: "Which languages do you support?",
          answer: "Portuguese, Spanish, and English.",
        },
        {
          question: "What if I don't even know what I need to do?",
          answer:
            "Message us anyway. The initial conversation is free and we'll help you figure out which path to take.",
        },
      ],
    },
    ctaFinal: {
      title: "Sort out your status in Brazil with peace of mind",
      subtitle: "Send us a message now. The first conversation is on us.",
      cta: "Chat on WhatsApp now",
    },
    footer: {
      tagline: "Digital immigration consultancy for people who need to regularize their status in Brazil.",
      linksTitle: "Navigation",
      links: {
        home: "Home",
        howItWorks: "How it works",
        services: "Services",
        faq: "FAQ",
        contact: "Contact",
      },
      contactTitle: "Contact",
      email: "contato@fronteiralegal.com.br",
      hours: "Mon–Fri, 9am to 6pm (BRT)",
      whatsappLabel: "WhatsApp",
      legal: `© 2026 ${SERVICE_NAME} • CNPJ XX.XXX.XXX/0001-XX • ${SERVICE_NAME} provides document guidance and does not replace legal representation.`,
    },
    whatsappAria: "Open WhatsApp chat",
    langSwitcher: "Language",
  },
} as const

export type Dictionary = (typeof translations)[Language]
