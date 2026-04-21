export type Language = "es" | "en";

export interface CopyContent {
  nav: {
    work: string;
    approach: string;
    process: string;
    contact: string;
    login: string;
  };
  hero: {
    eyebrow: string;
    title: string[];
    subhead: string;
    lede: string;
    pain: string;
    social: string;
    mockupLabel: string;
    cta: string;
    cta2: string;
    trustItems: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      n: string;
      tag: string;
      title: string;
      body: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      n: string;
      title: string;
      body: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    company: string;
    message: string;
    cta: string;
    reachLabel: string;
    successTitle: string;
    successBody: string;
  };
  footer: {
    tag: string;
    rights: string;
  };
  menu: {
    close: string;
    nav: string[];
    login: string;
    langLabel: string;
  };
  login: {
    back: string;
    title: string;
    sub: string;
    emailLabel: string;
    placeholder: string;
    cta: string;
    fine: string;
    sentTitle: string;
    sentBody: string;
    sentFine: string;
    resend: string;
  };
}

export const COPY: Record<Language, CopyContent> = {
  es: {
    nav: {
      work: "Trabajo",
      approach: "Enfoque",
      process: "Proceso",
      contact: "Contacto",
      login: "Ingresar",
    },
    hero: {
      eyebrow: "Estudio boutique · Buenos Aires",
      title: ["Arquitectura sólida", "para escalar tu negocio."],
      subhead: "Diseñamos sistemas que organizan tu operación, automatizan procesos y convierten datos en decisiones.",
      lede: "Diseñamos y construimos la herramienta que tu operación necesita: gestión, captación o automatización, con fundamentos técnicos que escalan.",
      pain: "Si hoy tu operación depende de Excel, WhatsApp y procesos manuales, estás perdiendo eficiencia y control.",
      social: "Empresas en Paraguay y el exterior ya operan con sistemas diseñados por Ipora.",
      mockupLabel: "Sistema real en uso por clientes",
      cta: "Agendar diagnóstico gratuito",
      cta2: "Cómo trabajamos",
      trustItems: ["Implementaciones rápidas", "Stack moderno", "Soluciones a medida"],
    },
    services: {
      eyebrow: "Principios",
      title: "Tres principios",
      subtitle: "No es un proceso comercial. Es cómo resolvemos problemas reales.",
      items: [
        { n: "01", tag: "Diagnóstico", title: "Diagnóstico real", body: "Antes de construir, entendemos dónde estás perdiendo tiempo, control o dinero." },
        { n: "02", tag: "Arquitectura", title: "Arquitectura sólida", body: "Diseñamos sistemas que no se rompen cuando tu operación crece." },
        { n: "03", tag: "Exclusividad", title: "Exclusividad", body: "No adaptamos herramientas genéricas. Construimos lo que tu operación realmente necesita." },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Cómo trabajamos",
      subtitle: "Cuatro etapas para ordenar y escalar tu operación.",
      steps: [
        { n: "→ 01", title: "Escuchamos", body: "Entendemos cómo funciona tu operación hoy y dónde se generan pérdidas o fricción." },
        { n: "→ 02", title: "Diagnosticamos", body: "Identificamos cuellos de botella, procesos manuales y puntos donde perdés eficiencia." },
        { n: "→ 03", title: "Diseñamos", body: "Diseñamos un sistema claro antes de escribir código, para evitar errores costosos." },
        { n: "→ 04", title: "Construimos", body: "Construimos una solución estable, documentada y lista para escalar con tu negocio." },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Conversemos",
      subtitle: "Contanos qué está frenando tu operación. Te damos una devolución clara en menos de 24hs.",
      name: "Nombre",
      email: "Email",
      company: "Empresa (opcional)",
      message: "¿Qué problema estás teniendo en tu operación hoy?",
      cta: "Solicitar diagnóstico",
      reachLabel: "También podés escribirnos directamente",
      successTitle: "¡Gracias!",
      successBody: "Te respondemos en menos de 24hs.",
    },
    footer: {
      tag: "Software boutique · Buenos Aires",
      rights: "© 2026 Ipora. Todos los derechos reservados.",
    },
    menu: {
      close: "Cerrar",
      nav: ["Trabajo", "Enfoque", "Proceso", "Contacto"],
      login: "Ingresar al panel",
      langLabel: "Idioma",
    },
    login: {
      back: "← Volver al sitio",
      title: "Panel del cliente",
      sub: "Te mandamos un enlace a tu email. Sin contraseñas.",
      emailLabel: "Email corporativo",
      placeholder: "vos@empresa.com",
      cta: "Enviar enlace mágico",
      fine: "Protegido. Los enlaces expiran en 10 minutos.",
      sentTitle: "Revisá tu email",
      sentBody: "Te enviamos un enlace a",
      sentFine: "Si no llega en 2 minutos, revisá spam o pedí otro.",
      resend: "Reenviar",
    },
  },
  en: {
    nav: {
      work: "Work",
      approach: "Approach",
      process: "Process",
      contact: "Contact",
      login: "Sign in",
    },
    hero: {
      eyebrow: "Boutique studio · Buenos Aires",
      title: ["Solid architecture", "to organize and scale."],
      subhead: "We design systems that organize your operation, automate processes, and turn data into decisions.",
      lede: "We design and build the tool your operation actually needs — ops, acquisition or automation — on technical foundations that scale.",
      pain: "If your operation today depends on Excel, WhatsApp and manual processes, you're losing efficiency and control.",
      social: "Companies in Paraguay and abroad already run on systems designed by Ipora.",
      mockupLabel: "Real system in use by clients",
      cta: "Book a free diagnostic",
      cta2: "How we work",
      trustItems: ["Fast implementations", "Modern stack", "Bespoke solutions"],
    },
    services: {
      eyebrow: "Principles",
      title: "Three principles",
      subtitle: "Not a sales funnel. How we solve real problems.",
      items: [
        { n: "01", tag: "Diagnostic", title: "Real diagnostic", body: "Before we build, we understand where you're losing time, control or money." },
        { n: "02", tag: "Architecture", title: "Solid architecture", body: "We design systems that don't break when your operation grows." },
        { n: "03", tag: "Exclusivity", title: "Exclusivity", body: "We don't adapt generic tools. We build what your operation actually needs." },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How we work",
      subtitle: "Four stages to organize and scale your operation.",
      steps: [
        { n: "→ 01", title: "We listen", body: "We understand how your operation works today and where losses or friction happen." },
        { n: "→ 02", title: "We diagnose", body: "We identify bottlenecks, manual processes and places where efficiency leaks." },
        { n: "→ 03", title: "We design", body: "We design a clear system before writing code, to avoid expensive mistakes." },
        { n: "→ 04", title: "We build", body: "We build a stable, documented solution ready to scale with your business." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      subtitle: "Tell us what's blocking your operation. You'll get clear feedback within 24 hours.",
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "What problem is your operation facing today?",
      cta: "Request diagnostic",
      reachLabel: "You can also reach us directly",
      successTitle: "Thanks!",
      successBody: "We reply within 24 hours.",
    },
    footer: {
      tag: "Boutique software · Buenos Aires",
      rights: "© 2026 Ipora. All rights reserved.",
    },
    menu: {
      close: "Close",
      nav: ["Work", "Approach", "Process", "Contact"],
      login: "Enter dashboard",
      langLabel: "Language",
    },
    login: {
      back: "← Back to site",
      title: "Client dashboard",
      sub: "We'll send a link to your email. No passwords.",
      emailLabel: "Work email",
      placeholder: "you@company.com",
      cta: "Send magic link",
      fine: "Secure. Links expire in 10 minutes.",
      sentTitle: "Check your email",
      sentBody: "We sent a link to",
      sentFine: "If it doesn't arrive in 2 minutes, check spam or ask for a new one.",
      resend: "Resend",
    },
  },
};
