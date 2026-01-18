/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * CONFIGURACIÓN SEO - OSADÍA TATTOO STUDIO
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Configuración centralizada de SEO, meta tags, y structured data.
 * Optimizado para Google Search y descubrimiento por LLMs.
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { siteConfig } from "./siteConfig";

// ─────────────────────────────────────────────────────────────────────────────
// KEYWORDS Y META TAGS
// ─────────────────────────────────────────────────────────────────────────────

export const seoKeywords = {
  // Keywords principales para Ecuador
  primary: [
    "tatuajes ecuador",
    "tattoo studio ecuador",
    "tatuadores ecuador",
    "estudio de tatuajes santo domingo",
    "tattoo santo domingo ecuador",
  ],
  // Keywords secundarias (estilos)
  styles: [
    "tatuajes realismo ecuador",
    "blackwork ecuador",
    "tatuajes minimalistas",
    "fine line tattoo ecuador",
    "tatuajes personalizados",
    "cover up tatuajes",
    "tatuajes dotwork",
    "tatuajes geométricos",
  ],
  // Keywords locales
  local: [
    "tatuajes santo domingo",
    "tattoo santo domingo de los tsachilas",
    "mejor tatuador santo domingo",
    "osadia tattoo",
    "tatuajes profesionales ecuador",
  ],
  // Combinar todas las keywords
  get all() {
    return [...this.primary, ...this.styles, ...this.local];
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// META DESCRIPTIONS POR PÁGINA
// ─────────────────────────────────────────────────────────────────────────────

export const seoMeta = {
  home: {
    title: `${siteConfig.name} | Tatuajes en ${siteConfig.location.city}, Ecuador`,
    description: `El mejor estudio de tatuajes en ${siteConfig.location.city}, Ecuador. Especialistas en Realismo, Blackwork, Fine Line y diseños personalizados. ¡Agenda tu cita hoy!`,
    keywords: seoKeywords.all.join(", "),
  },
  portfolio: {
    title: `Galería de Tatuajes | ${siteConfig.name}`,
    description: `Explora nuestra galería de tatuajes. Realismo, Blackwork, Tradicional y más. Inspírate con el arte de nuestros tatuadores en Ecuador.`,
    keywords: [
      "galería tatuajes",
      "portafolio tatuajes",
      "diseños tatuajes ecuador",
      ...seoKeywords.styles,
    ].join(", "),
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD STRUCTURED DATA GENERATORS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Schema principal: TattooShop / LocalBusiness
 */
export function generateTattooShopSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: seoMeta.home.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.images.ogImage}`,
    logo: `${siteConfig.url}${siteConfig.images.logo}`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card, Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      postalCode: siteConfig.location.postalCode,
      addressCountry: siteConfig.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.latitude,
      longitude: siteConfig.location.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.hours.days,
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
    sameAs: [
      siteConfig.social.instagram.url,
      siteConfig.social.facebook.url,
      siteConfig.social.tiktok.url,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Estilos de Tatuaje",
      itemListElement: siteConfig.styles.map((style, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: `Tatuaje ${style}`,
          description: `Servicio de tatuaje estilo ${style}`,
        },
      })),
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.location.latitude,
        longitude: siteConfig.location.longitude,
      },
      geoRadius: "100000", // 100km
    },
    knowsAbout: siteConfig.styles,
    slogan: siteConfig.slogan,
  };
}

/**
 * Schema para la página web
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: seoMeta.home.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "es-EC",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Schema para galería de imágenes
 */
export function generateImageGallerySchema(images: { src: string; title: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${siteConfig.url}/portfolio#gallery`,
    name: "Galería de Tatuajes - Osadía Tattoo Studio",
    description: "Colección de trabajos de tatuaje realizados en nuestro estudio.",
    url: `${siteConfig.url}/portfolio`,
    image: images.map((img, index) => ({
      "@type": "ImageObject",
      "@id": `${siteConfig.url}${img.src}`,
      url: `${siteConfig.url}${img.src}`,
      name: img.title,
      description: img.description,
      position: index + 1,
      creator: {
        "@id": `${siteConfig.url}/#organization`,
      },
    })),
  };
}

/**
 * Schema FAQ para preguntas frecuentes sobre tatuajes
 * (Ayuda al posicionamiento en rich snippets y LLMs)
 */
export function generateFAQSchema() {
  const faqs = [
    {
      question: "¿Cuánto cuesta un tatuaje en Osadía Tattoo Studio?",
      answer: "El precio varía según el tamaño, complejidad y ubicación del tatuaje. Ofrecemos cotizaciones personalizadas sin compromiso. Contáctanos por WhatsApp para obtener un presupuesto exacto.",
    },
    {
      question: "¿Necesito cita previa para tatuarme?",
      answer: "Sí, trabajamos únicamente con cita previa para garantizar la mejor atención. Puedes agendar tu cita a través de WhatsApp o redes sociales.",
    },
    {
      question: "¿Qué estilos de tatuaje realizan?",
      answer: `Nos especializamos en ${siteConfig.styles.slice(0, 5).join(", ")} y más. Cada artista tiene su especialidad pero todos son versátiles.`,
    },
    {
      question: "¿Cuánto tiempo tarda en sanar un tatuaje?",
      answer: "La cicatrización completa toma entre 2 a 4 semanas. Te proporcionamos instrucciones detalladas de cuidado para asegurar una sanación óptima.",
    },
    {
      question: "¿Dónde está ubicado Osadía Tattoo Studio?",
      answer: `Estamos ubicados en ${siteConfig.location.street}, ${siteConfig.location.city}, ${siteConfig.location.country}. Atendemos de ${siteConfig.hours.displayText}.`,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Genera todos los schemas combinados para una página
 */
export function generateAllSchemas(page: "home" | "portfolio" = "home", portfolioImages?: { src: string; title: string; description: string }[]): object[] {
  const schemas: object[] = [
    generateTattooShopSchema(),
    generateWebSiteSchema(),
    generateFAQSchema(),
  ];

  if (page === "portfolio" && portfolioImages) {
    schemas.push(generateImageGallerySchema(portfolioImages));
  }

  return schemas;
}
