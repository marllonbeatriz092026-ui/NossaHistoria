/**
 * Galeria de Memórias — Scrapbook Editorial
 * Adicione suas fotografias substituindo os caminhos das imagens.
 */

export interface MemoryItem {
  id: string;
  image: string;
  title: string;
  date: string;
  description: string;
  category: 'Momentos' | 'Viagens' | 'Aniversários' | 'Engraçados' | 'Lugares' | 'Cotidiano';
  caption: string;
  rotation?: number; // Ângulo leve para dar sensação de polaroid solta (-3 a 3 graus)
  location?: string;
  note?: string;
}

export const memoryCategories = [
  'Todos',
  'Momentos',
  'Viagens',
  'Aniversários',
  'Engraçados',
  'Lugares',
  'Cotidiano'
] as const;

export type MemoryCategory = typeof memoryCategories[number];

export const memories: MemoryItem[] = [
  {
    id: "mem-1",
    image: "/src/assets/images/hero_cinematic_story_1790889703321.jpg",
    title: "O Lago na Névoa",
    date: "14 de Outubro de 2023",
    description: "Aquele final de tarde em que a névoa baixou sobre as águas e você segurou a minha mão dentro do bolso do seu casaco. Fazia frio, mas nunca estive tão aquecido por dentro.",
    category: "Viagens",
    caption: "quando o mundo lá fora parecia parar só pra nós dois.",
    rotation: -1.5,
    location: "Serra da Mantiqueira",
  },
  {
    id: "mem-2",
    image: "/src/assets/images/memory_coffee_rain_1790889714168.jpg",
    title: "Café, Chuva e Segredos",
    date: "12 de Agosto de 2023",
    description: "Eu estava nervoso antes de você chegar e provavelmente você nem percebeu. Pedimos cappuccino e passamos três horas conversando sobre tudo, esquecendo que o resto do mundo existia.",
    category: "Momentos",
    caption: "onde as horas viraram minutos.",
    rotation: 1.8,
    location: "Café Colonial",
  },
  {
    id: "mem-3",
    image: "/src/assets/images/memory_coastal_sunset_1790889726077.jpg",
    title: "O Céu em Tons de Vinho",
    date: "28 de Janeiro de 2024",
    description: "A brisa salgada, o som calmo das ondas e o seu sorriso iluminado pelo dourado do crepúsculo. Tirei essa foto sem você ver porque não queria esquecer essa sensação nunca mais.",
    category: "Lugares",
    caption: "meu lugar favorito é onde você estiver.",
    rotation: -2.2,
    location: "Praia do Rosa",
  },
  {
    id: "mem-4",
    image: "/src/assets/images/memory_picnic_flowers_1790889735997.jpg",
    title: "Piquenique, Margaridas e Risos",
    date: "08 de Abril de 2024",
    description: "Você deitou a cabeça no meu colo lendo poesia enquanto eu fingia prestar atenção mas só ficava acariciando o seu cabelo e reparando nas suas covinhas.",
    category: "Cotidiano",
    caption: "a poesia era você e o livro era só pretexto.",
    rotation: 2.1,
    location: "Jardim Botânico",
  },
  {
    id: "mem-5",
    image: "/src/assets/images/memory_coffee_rain_1790889714168.jpg",
    title: "A Crise de Riso no Meio da Noite",
    date: "19 de Setembro de 2024",
    description: "Tentando fazer um bolo às 23h da noite, a farinha espalhou na sua bochecha e a gente começou a rir tão alto que tivemos medo de acordar o prédio inteiro.",
    category: "Engraçados",
    caption: "o bolo queimou, mas valeu cada gargalhada.",
    rotation: -1.2,
    location: "Nossa Cozinha",
  },
  {
    id: "mem-6",
    image: "/src/assets/images/hero_cinematic_story_1790889703321.jpg",
    title: "1 Ano de Nós: O Jantar à Luz de Velas",
    date: "15 de Maio de 2024",
    description: "Você colocou aquele vestido vinho que eu amo. Olhar nos seus olhos naquela mesa foi ver um ano inteiro de carinho, cumplicidade e a certeza de que escolhi a pessoa certa.",
    category: "Aniversários",
    caption: "365 dias que passaram como um suspiro bom.",
    rotation: 1.4,
    location: "Bistrô das Rosas",
  },
];
