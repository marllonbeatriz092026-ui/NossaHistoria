/**
 * Lugares da Nossa História
 * Coordenadas relativas para o mapa visual editorial e histórias de cada cantinho especial.
 */

export interface PlaceItem {
  id: string;
  name: string;
  city: string;
  date: string;
  description: string;
  category: 'Encontro' | 'Viagem' | 'Pôr do Sol' | 'Refúgio' | 'Comida';
  image?: string;
  // Posição percentual no mapa estilizado (0% a 100% X e Y) para renderização limpa e offline
  x: number; // Porcentagem horizontal (0-100)
  y: number; // Porcentagem vertical (0-100)
  highlightPhrase: string;
}

export const places: PlaceItem[] = [
  {
    id: "place-1",
    name: "Café das Flores",
    city: "Centro Histórico",
    date: "Abril de 2023",
    description: "A mesinha redonda de ferro perto da vidraça. Onde trocamos sorrisos tímidos e eu percebi que nunca mais queria parar de te ouvir.",
    category: "Encontro",
    image: "/src/assets/images/memory_coffee_rain_1790889714168.jpg",
    x: 28,
    y: 35,
    highlightPhrase: "Onde tudo começou a fazer sentido.",
  },
  {
    id: "place-2",
    name: "Mirante da Enseada",
    city: "Costa Litorânea",
    date: "Setembro de 2023",
    description: "O vento bagunçando o seu cabelo e você apontando para o horizonte dizendo que queria conhecer o mundo inteiro ao meu lado.",
    category: "Pôr do Sol",
    image: "/src/assets/images/memory_coastal_sunset_1790889726077.jpg",
    x: 72,
    y: 65,
    highlightPhrase: "O pôr do sol mais inesquecível de todos.",
  },
  {
    id: "place-3",
    name: "Chalé na Serra",
    city: "Região Serrana",
    date: "Julho de 2024",
    description: "A lareira estalando, vinho na taça, cobertor pesado e o frio lá fora. Foi como se o tempo tivesse esquecido de andar.",
    category: "Refúgio",
    image: "/src/assets/images/hero_cinematic_story_1790889703321.jpg",
    x: 45,
    y: 20,
    highlightPhrase: "Nosso refúgio favorito no inverno.",
  },
  {
    id: "place-4",
    name: "Parque dos Coelhos & Cerejeiras",
    city: "Jardim das Rosas",
    date: "Primavera de 2024",
    description: "Você correndo atrás das pétalas caídas e tirando fotos de cada coelhinho que via na grama. Uma das memórias mais doces da minha vida.",
    category: "Viagem",
    image: "/src/assets/images/memory_picnic_flowers_1790889735997.jpg",
    x: 82,
    y: 30,
    highlightPhrase: "Tarde com aroma de flores e riso leve.",
  },
  {
    id: "place-5",
    name: "A Pizzaria da Meia-Noite",
    city: "Bairro Boêmio",
    date: "Dezembro de 2023",
    description: "Sentados no balcão dividindo a pizza mais queijuda da cidade e inventando teorias conspiratórias sobre os outros clientes da casa.",
    category: "Comida",
    x: 52,
    y: 78,
    highlightPhrase: "A pizza queimada que virou tradição.",
  }
];
