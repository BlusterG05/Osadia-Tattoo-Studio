export interface TattooWork {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  artist: string;
  alt: string; // SEO: Alt text para imágenes
  span?: string; // Para el layout tipo grid (ej: 'span-2')
}

export const portfolioData: TattooWork[] = [
  {
    id: 10,
    src: "/portfolio/tatto10.jpg",
    title: "Brazo Completo Realista",
    category: "Realismo / Black & Grey",
    description: "Este tatuaje es una reflexión visual sobre la vida y la mortalidad. Las manos, el ojo, el corazón y el ángel se entrelazan para representar la conexión entre lo divino y lo humano. Memento Mori recuerda que el tiempo es limitado, mientras las líneas geométricas muestran el orden oculto dentro del caos. Una pieza que invita a mirar hacia adentro y valorar cada instante. 4 horas de trabajo",
    artist: "Anahi",
    alt: "Tatuaje realista de brazo completo con manos, ojo, corazón y ángel - Osadía Tattoo Studio Ecuador",
    span: "row-span-2"
  },
  {
    id: 8,
    src: "/portfolio/tatto8.jpg",
    title: "Minimalismo Lineal",
    category: "Fine Line",
    description: "Este tatuaje captura la ternura en su forma más simple. Figuras minimalistas, unidas por líneas delicadas y toques de color, representan un vínculo lleno de complicidad y cariño. Su diseño sutil transmite que el amor no necesita grandes gestos para ser profundo; a veces, basta un trazo para contar una historia compartida.",
    artist: "Anahi",
    alt: "Tatuaje minimalista fine line con figuras delicadas - Santo Domingo Ecuador",
  },
  {
    id: 11,
    src: "/portfolio/tatto11.jpg",
    title: "Geometría Sagrada",
    category: "Blackwork / Geométrico",
    description: "Este tatuaje muestra un tiburón diseñado con un estilo agresivo y abstracto, compuesto por sombras intensas y formas afiladas que transmiten fuerza y movimiento. La composición negra crea una energía salvaje y feroz, simbolizando instinto, poder y resiliencia. Es una pieza que rompe con lo tradicional y expresa una identidad fuerte y decidida. 4 horas de trabajo.",
    artist: "Anahi",
    alt: "Tatuaje blackwork geométrico de tiburón abstracto con sombras intensas - Ecuador",
    span: "row-span-2"
  },
  {
    id: 12,
    src: "/portfolio/tatto12.jpg",
    title: "Neotradicional Color",
    category: "Neotradicional",
    description: "Este tatuaje captura un momento íntimo y eterno: dos manos enlazadas que simbolizan unión, amor y protección. La línea fina le da un aire delicado, mientras el nombre y la fecha convierten la pieza en un recuerdo profundamente personal. Es un homenaje visual a un lazo madre e hija que marca la vida para siempre.",
    artist: "Anahi",
    alt: "Tatuaje neotradicional de manos enlazadas simbolizando unión familiar - Osadía Tattoo",
  },
  {
    id: 3,
    src: "/portfolio/tatto3.jpg",
    title: "Cover Up Floral",
    category: "Cover Up",
    description: "Esta pieza muestra una rana sobre un encendedor, dibujada con líneas finas y trazos sueltos que crean una sensación de movimiento. Las volutas que emergen alrededor le dan un aire onírico y juguetón, mientras que el estilo esquemático conserva elegancia y sutileza. Es un tatuaje que mezcla curiosidad, sorpresa y un toque de rebeldía, celebrando lo inesperado en lo cotidiano. 2 horas de trabajo.",
    artist: "Anahi",
    alt: "Tatuaje cover up artístico con rana y encendedor en estilo fine line - Santo Domingo",
  },
  {
    id: 14,
    src: "/portfolio/tatto14.jpg",
    title: "Retrato Hiperrealista",
    category: "Realismo",
    description: "Este tatuaje une la dualidad humana: la serenidad del rostro cubierto y la crudeza del cráneo que emerge debajo. Es una metáfora visual del equilibrio entre vida y muerte, belleza y oscuridad. Un recordatorio de que incluso en lo sombrío existe arte, y que cada persona lleva dentro historias que conviven en contraste. 5horas de trabajo.",
    artist: "Anahi",
    alt: "Tatuaje realista hiperrealista de rostro y cráneo representando dualidad - Ecuador",
  },
  { 
    id: 9, 
    src: "/portfolio/tatto9.jpg", 
    title: "Puntillismo", 
    category: "Dotwork", 
    description: "Este tatuaje de laurel está trabajado con líneas limpias y equilibradas, creando una composición que transmite calma y fortaleza. Cada hoja está delineada con intención, logrando un contraste sutil entre simplicidad y detalle. La forma del laurel envuelve la piel con un aire de elegancia natural, simbolizando victoria, crecimiento y el cierre de ciclos. Es una pieza que se siente ligera pero significativa, como un recordatorio silencioso de resiliencia y propósito.", 
    artist: "Anahi",
    alt: "Tatuaje dotwork puntillismo de corona de laurel simbolizando victoria - Osadía Studio",
  },
];