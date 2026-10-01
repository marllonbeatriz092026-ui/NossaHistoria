/**
 * Linha do tempo da nossa história
 * Adicione novos momentos simplesmente copiando e colando um objeto na lista!
 */

export interface TimelineEvent {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  description: string;
  image?: string;
  category: 'comeco' | 'viagem' | 'especial' | 'marcante' | 'cotidiano';
  location?: string;
  song?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "01",
    date: "2023-04-12",
    displayDate: "12 de Abril de 2023",
    title: "O Primeiro Olhar",
    description: "O dia em que nossos caminhos se cruzaram pela primeira vez. Eu não fazia ideia de que você viraria o meu mundo de cabeça para baixo — no melhor sentido possível.",
    image: "/src/assets/images/memory_coffee_rain_1790889714168.jpg",
    category: "comeco",
    location: "Café da Esquina",
    song: "Leon Bridges — Texas Sun",
  },
  {
    id: "02",
    date: "2023-05-15",
    displayDate: "15 de Maio de 2023",
    title: "O Início Oficial de Nós",
    description: "Coração acelerado, mãos um pouco trêmulas e a certeza mais doce da minha vida: o pedido que transformou duas pessoas numa só história.",
    category: "especial",
    location: "Sob o céu estrelado",
    song: "Coldplay — Sparks",
  },
  {
    id: "03",
    date: "2023-09-22",
    displayDate: "22 de Setembro de 2023",
    title: "Nossa Primeira Viagem Juntos",
    description: "A mala com roupas demais, a playlist no carro que cantamos errando a letra e aquela sensação de que qualquer lugar com você é casa.",
    image: "/src/assets/images/memory_coastal_sunset_1790889726077.jpg",
    category: "viagem",
    location: "Litoral",
    song: "Novo Amor — Anchor",
  },
  {
    id: "04",
    date: "2023-12-31",
    displayDate: "31 de Dezembro de 2023",
    title: "Virada de Ano nos Seus Braços",
    description: "Fogos explodindo ao longe, e a única coisa que eu conseguia olhar eram os seus olhos brilhando enquanto você me abraçava apertado.",
    category: "marcante",
    location: "Praia",
  },
  {
    id: "05",
    date: "2024-04-08",
    displayDate: "08 de Abril de 2024",
    title: "A Tarde do Piquenique e dos Coelhinhos",
    description: "Demos comida para os coelhinhos no parque, estendemos a toalha na grama e esquecemos da hora. Foi uma das tardes mais doces e calmas que já vivemos.",
    image: "/src/assets/images/memory_picnic_flowers_1790889735997.jpg",
    category: "cotidiano",
    location: "Parque da Cidade",
    song: "Taylor Swift — Lover",
  },
  {
    id: "06",
    date: "2024-05-15",
    displayDate: "15 de Maio de 2024",
    title: "365 Dias Escolhendo Você",
    description: "Nosso primeiro ano juntos. Um brinde a cada risada boba, a cada café na cama e a todas as pontes que construímos lado a lado.",
    category: "especial",
    location: "Nosso cantinho favorito",
    song: "The Paper Kites — Bloom",
  },
  {
    id: "07",
    date: "2024-11-10",
    displayDate: "10 de Novembro de 2024",
    title: "O Pôr do Sol Sem Palavras",
    description: "A gente sentado sem falar nada durante meia hora, só ouvindo o mar e vendo o céu tingido de vinho e dourado. Momentos em que o silêncio com você diz tudo.",
    category: "marcante",
    location: "Mirante da Enseada",
  }
];
