/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * CONFIGURACIÓN DEL SITIO - OSADÍA TATTOO STUDIO
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este archivo centraliza TODOS los datos del negocio.
 * Edita aquí para actualizar información en todo el sitio.
 * 
 * ⚠️  IMPORTANTE: Después de editar, reconstruir el sitio con `pnpm run build`
 * ═══════════════════════════════════════════════════════════════════════════════
 */

export const siteConfig = {
  // ─────────────────────────────────────────────────────────────────────────────
  // INFORMACIÓN BÁSICA
  // ─────────────────────────────────────────────────────────────────────────────
  name: "Osadia Tattoo Studio",
  shortName: "Osadía",
  slogan: "El arte de ser audaz",
  
  // URL del sitio (sin trailing slash)
  url: "https://osadia-studio.com",
  
  // ─────────────────────────────────────────────────────────────────────────────
  // CONTACTO
  // ─────────────────────────────────────────────────────────────────────────────
  contact: {
    // Teléfono principal (formato internacional con código de país)
    phone: "+593999999999",
    // Teléfono formateado para mostrar
    phoneDisplay: "+593 99 999 9999",
    // WhatsApp (puede ser diferente al teléfono principal)
    whatsapp: "+593999999999",
    // Email
    email: "contacto@osadia-studio.com",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // UBICACIÓN
  // ─────────────────────────────────────────────────────────────────────────────
  location: {
    street: "Av. Quito y Río Toachi",
    city: "Santo Domingo",
    region: "Santo Domingo de los Tsáchilas",
    country: "Ecuador",
    countryCode: "EC",
    postalCode: "230101",
    // Coordenadas GPS (obtener de Google Maps)
    latitude: -0.253,
    longitude: -79.1754,
    // URL de Google Maps (copiar el enlace de compartir)
    mapsUrl: "https://maps.google.com/?q=-0.253,-79.1754",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HORARIOS DE ATENCIÓN
  // ─────────────────────────────────────────────────────────────────────────────
  hours: {
    // Formato 24 horas
    opens: "10:00",
    closes: "20:00",
    // Días de atención (en inglés para schema.org)
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    // Texto para mostrar en el sitio
    displayText: "Lun - Sáb: 10:00 - 20:00",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // REDES SOCIALES
  // ─────────────────────────────────────────────────────────────────────────────
  social: {
    instagram: {
      url: "https://www.instagram.com/osadia_tattoo/",
      handle: "@osadia_tattoo",
    },
    tiktok: {
      url: "https://www.tiktok.com/@osadia_tattoo",
      handle: "@osadia_tattoo",
    },
    facebook: {
      url: "https://www.facebook.com/osadia_tattoo",
      handle: "osadia_tattoo",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ARTISTAS
  // ─────────────────────────────────────────────────────────────────────────────
  artists: [
    {
      name: "Anahi",
      role: "Artista Principal",
      specialties: ["Realismo", "Blackwork", "Fine Line", "Minimalismo"],
    },
    // Agregar más artistas aquí
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // ESTILOS DE TATUAJE OFRECIDOS
  // ─────────────────────────────────────────────────────────────────────────────
  styles: [
    "Realismo",
    "Blackwork",
    "Fine Line",
    "Minimalismo",
    "Neotradicional",
    "Dotwork",
    "Geométrico",
    "Cover Up",
    "Black & Grey",
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // IMÁGENES
  // ─────────────────────────────────────────────────────────────────────────────
  images: {
    // Imagen principal para compartir en redes (1200x630 recomendado)
    ogImage: "/images/og-image.jpg",
    // Logo del estudio
    logo: "/images/logo.png",
    // Favicon
    favicon: "/favicon.svg",
  },
} as const;

// Tipos exportados para TypeScript
export type SiteConfig = typeof siteConfig;
