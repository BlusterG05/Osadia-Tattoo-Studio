export interface TattooWork {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  artist: string;
  span?: string; // Para el layout tipo grid (ej: 'span-2')
}

export const portfolioData: TattooWork[] = [
  {
    id: 10,
    src: "/portfolio/tatto10.jpg",
    title: "Brazo Completo Realista",
    category: "Realismo / Black & Grey",
    description: "Composición completa de brazo con temática de escultura clásica y elementos florales. 15 horas de trabajo.",
    artist: "Alex Ink",
    span: "row-span-2"
  },
  {
    id: 8,
    src: "/portfolio/tatto8.jpg",
    title: "Minimalismo Lineal",
    category: "Fine Line",
    description: "Diseño delicado de línea fina. Precisión y sutileza para un resultado elegante.",
    artist: "Sarah Art",
  },
  {
    id: 11,
    src: "/portfolio/tatto11.jpg",
    title: "Geometría Sagrada",
    category: "Blackwork / Geométrico",
    description: "Patrones geométricos complejos con alto contraste. Tinta negra sólida y puntillismo.",
    artist: "Alex Ink",
    span: "row-span-2"
  },
  {
    id: 12,
    src: "/portfolio/tatto12.jpg",
    title: "Neotradicional Color",
    category: "Neotradicional",
    description: "Uso vibrante del color con líneas sólidas características del estilo neotradicional.",
    artist: "David Color",
  },
  {
    id: 3,
    src: "/portfolio/tatto3.jpg",
    title: "Cover Up Floral",
    category: "Cover Up",
    description: "Cobertura total de tatuaje anterior utilizando elementos orgánicos oscuros y texturas.",
    artist: "Alex Ink",
  },
  {
    id: 14,
    src: "/portfolio/tatto14.jpg",
    title: "Retrato Hiperrealista",
    category: "Realismo",
    description: "Retrato detallado capturando la expresión y profundidad de la mirada.",
    artist: "Sarah Art",
  },
  // Resto de imágenes para rellenar la galería
  { id: 1, src: "/portfolio/tatto1.jpg", title: "Diseño Ornamental", category: "Ornamental", description: "Detalles finos para decorar la piel.", artist: "Sarah Art" },
  { id: 2, src: "/portfolio/tatto2.jpg", title: "Blackwork Abstracto", category: "Blackwork", description: "Formas abstractas y flujo corporal.", artist: "Alex Ink" },
  { id: 4, src: "/portfolio/tatto4.jpg", title: "Lettering Chicano", category: "Lettering", description: "Caligrafía personalizada a mano alzada.", artist: "David Color" },
  { id: 5, src: "/portfolio/tatto5.jpg", title: "Micro Realismo", category: "Micro Realismo", description: "Pequeño formato, gran detalle.", artist: "Sarah Art" },
  { id: 6, src: "/portfolio/tatto6.jpg", title: "Tradicional Americano", category: "Old School", description: "Líneas gruesas y colores sólidos.", artist: "David Color" },
  { id: 7, src: "/portfolio/tatto7.jpg", title: "Manga Japonesa", category: "Irezumi", description: "Fondo de agua y viento con motivos clásicos.", artist: "Alex Ink" },
  { id: 9, src: "/portfolio/tatto9.jpg", title: "Puntillismo", category: "Dotwork", description: "Sombras creadas punto a punto.", artist: "Sarah Art" },
  { id: 13, src: "/portfolio/tatto13.jpg", title: "Animal Realista", category: "Realismo", description: "Textura de pelaje y vida animal.", artist: "Alex Ink" },
];