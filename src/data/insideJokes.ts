/**
 * Só nós dois entendemos
 * Piadas internas, histórias engraçadas e episódios inesquecíveis.
 */

export interface InsideJokeItem {
  id: string;
  date?: string;
  title: string;
  punchline: string;
  story: string;
  tag: string;
  iconType: 'food' | 'laugh' | 'bunny' | 'car' | 'sleep';
}

export const insideJokes: InsideJokeItem[] = [
  {
    id: "joke-1",
    date: "25/07/2023",
    title: "A Missão McDonald's às 02h da Manhã",
    punchline: "“A gente só vai comprar uma casquinha...”",
    story: "Terminamos com dois combos gigantes, batata frita espalhada no banco do passageiro e rindo sem fôlego da nossa falta de vergonha na cara.",
    tag: "Gula da Madrugada",
    iconType: "food"
  },
  {
    id: "joke-2",
    date: "14/11/2023",
    title: "O Ataque do Coelhinho Imaginário",
    punchline: "“Ele não é bravo, amor, ele só tem personalidade forte!”",
    story: "A discussão de 40 minutos sobre quem cuidaria melhor de um mini lop e o nome pomposo que daríamos pra ele: 'Lorde Orelhudo III'.",
    tag: "Sonhos com Orelhas",
    iconType: "bunny"
  },
  {
    id: "joke-3",
    date: "03/02/2024",
    title: "O GPS Desgovernado na Estrada de Terra",
    punchline: "“O moço do mapa falou que era por aqui...”",
    story: "Descobrimos que a 'rota mais rápida' era uma ladeira de barro onde quase viramos amigos de um rebanho de vacas. Mas a vista lá de cima valeu cada susto.",
    tag: "Aventura Involuntária",
    iconType: "car"
  },
  {
    id: "joke-4",
    date: "29/08/2024",
    title: "O Filme de 2 Horas que Durou 8 Minutos",
    punchline: "“Não amor, eu juro que não estou com sono, pode colocar o filme!”",
    story: "Oito minutos de introdução e você já estava apagada com a boca entreaberta, roncando baixinho igual um gatinho.",
    tag: "Mestre do Cochilo",
    iconType: "sleep"
  }
];
