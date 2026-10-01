/**
 * Ainda quero viver com você — Planos e Sonhos
 * Alterne o status para 'realizado' quando conquistarem cada sonho!
 */

export interface FutureItem {
  id: string;
  title: string;
  description: string;
  category: 'Viagem' | 'Casa' | 'Cotidiano' | 'Aventura' | 'Coelhinhos';
  status: 'ainda não' | 'realizado';
  targetDateOrYear?: string;
  noteIfDone?: string;
}

export const futureDreams: FutureItem[] = [
  {
    id: "dream-1",
    title: "Nossa viagem para ver a Aurora Boreal",
    description: "Ficar bem abraçados no frio extremo enquanto o céu dança em verde e violeta em cima da gente.",
    category: "Viagem",
    status: "ainda não",
    targetDateOrYear: "Próximos anos"
  },
  {
    id: "dream-2",
    title: "Adotar nosso coelhinho de estimação",
    description: "Ter um mini coelho correndo pela sala de orelhinha caída e brigando com as almofadas do sofá.",
    category: "Coelhinhos",
    status: "ainda não",
    targetDateOrYear: "Em breve"
  },
  {
    id: "dream-3",
    title: "Nosso cantinho com uma varanda cheia de plantas",
    description: "Uma estante inteira de livros, uma poltrona confortável e uma xícara de café quente todo domingo de manhã.",
    category: "Casa",
    status: "ainda não",
    targetDateOrYear: "Nosso futuro lar"
  },
  {
    id: "dream-4",
    title: "A primeira viagem internacional juntos",
    description: "Perder o rumo pelas ruelas de pedras, comer doce típico na calçada e colecionar fotos na câmera analógica.",
    category: "Viagem",
    status: "ainda não"
  },
  {
    id: "dream-5",
    title: "Dormir sob um céu com chuva de meteoros",
    description: "Estender colchões no meio do nada, longe das luzes da cidade, e fazer pedidos juntos a cada estrela cadente.",
    category: "Aventura",
    status: "ainda não"
  },
  {
    id: "dream-6",
    title: "O primeiro café da manhã na cama no nosso aniversário",
    description: "Frutas cortadas, torradas quentinhas e flores frescas logo ao despertar.",
    category: "Cotidiano",
    status: "realizado",
    noteIfDone: "Realizado com muito carinho e amor!"
  },
  {
    id: "dream-7",
    title: "Envelhecer lado a lado de mãos dadas",
    description: "Ter o cabelo branquinho, rugas de tanto sorrir e a mesma certeza inabalável de que amar você é a melhor coisa que me aconteceu.",
    category: "Cotidiano",
    status: "ainda não",
    targetDateOrYear: "Para sempre"
  }
];
