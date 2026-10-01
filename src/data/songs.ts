/**
 * Nossa Trilha Sonora
 * Registre aqui as músicas que marcam a história de vocês.
 */

export interface SongItem {
  id: string;
  title: string;
  artist: string;
  platform: 'Spotify' | 'YouTube' | 'Apple Music';
  url: string;
  embedId?: string; // ID para embed do Spotify ou YouTube opcional
  category: 'Nossa música' | 'Música que lembra você' | 'Viagens' | 'Momentos' | 'Piadas internas';
  story: string;
  duration?: string;
}

export const songs: SongItem[] = [
  {
    id: "song-1",
    title: "Texas Sun",
    artist: "Leon Bridges & Khruangbin",
    platform: "Spotify",
    url: "https://open.spotify.com/track/2ZLLqZh07qgL0bYq3zWf6l",
    category: "Nossa música",
    story: "Tocou na primeira vez em que pegamos a estrada sem rumo certo. O refrão parece ter sido escrito exatamente pra brisa entrando pela janela do carro com você ao meu lado.",
    duration: "4:12"
  },
  {
    id: "song-2",
    title: "Bloom",
    artist: "The Paper Kites",
    platform: "Spotify",
    url: "https://open.spotify.com/track/1ogByegUfkn93Wb0h5vO0n",
    category: "Música que lembra você",
    story: "Toda vez que ouço esse violão calmo, eu vejo você acordando de manhã com o cabelo bagunçado e os olhos sonolentos procurando o meu abraço.",
    duration: "3:30"
  },
  {
    id: "song-3",
    title: "Sparks",
    artist: "Coldplay",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=Ar48yzvn1qE",
    category: "Momentos",
    story: "A música de fundo no dia do nosso primeiro beijo demorado. Ficou gravada na minha memória como uma fotografia que nunca desbota.",
    duration: "3:47"
  },
  {
    id: "song-4",
    title: "Lover",
    artist: "Taylor Swift",
    platform: "Spotify",
    url: "https://open.spotify.com/track/1dGr1nsAZOsDuQVTe97X7x",
    category: "Nossa música",
    story: "Você cantando o refrão com o controle remoto na sala virou patrimônio histórico da minha felicidade. 'Can I go where you go? Can we always be this close?'",
    duration: "3:41"
  },
  {
    id: "song-5",
    title: "Here Comes The Sun",
    artist: "The Beatles",
    platform: "Spotify",
    url: "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2",
    category: "Viagens",
    story: "Depois de horas de chuva na estrada, o sol apareceu bem na hora em que chegamos ao mar e essa faixa começou a tocar no som. Foi um momento de pura mágica.",
    duration: "3:05"
  },
  {
    id: "song-6",
    title: "Evidências",
    artist: "Chitãozinho & Xororó",
    platform: "Spotify",
    url: "https://open.spotify.com/track/23gXfQn26qD9bE8F",
    category: "Piadas internas",
    story: "Aquele karaokê improvisado em que você desafinou no agudo com a maior pose do mundo e eu chorei de rir. Uma das melhores noites das nossas vidas.",
    duration: "4:39"
  }
];
