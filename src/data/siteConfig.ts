/**
 * Configuração Central do Site
 * Modifique estas variáveis para personalizar para o seu relacionamento!
 */

export interface SiteConfig {
  partnerName: string;
  authorName: string;
  relationshipStartDate: string; // Formato ISO: YYYY-MM-DDTHH:mm:ss
  nextChapterDate: string; // Próximo evento ou viagem importante
  nextChapterTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroQuote: string;
  heroImage: string;
  secretPassphrase: string; // Palavra para desbloquear a página secreta (case insensitive)
  secretHint: string;
  easterEggNote: string;
  voiceAudioSrc: string; // Caminho para gravação de voz pessoal (ex: '/audio/message.mp3')
  finalSurpriseGiftType: 'card' | 'ticket' | 'video' | 'custom';
  bunnyNickname: string;
}

export const siteConfig: SiteConfig = {
  // Nome da sua namorada (ex: "Isabela", "Beatriz", "Mariana")
  partnerName: "Meu Amor",
  // Seu nome
  authorName: "Para Sempre Seu",
  // Data exata em que começaram a namorar (Ano-Mês-DiaTHora:Minuto:Segundo)
  relationshipStartDate: "2023-05-15T20:30:00",
  // Próximo evento importante / próximo capítulo (ex: aniversário de namoro, viagem marcada)
  nextChapterDate: "2027-05-15T00:00:00",
  nextChapterTitle: "Nosso próximo aniversário especial & viagem dos sonhos",
  // Frases de abertura
  heroTitle: "Nossa História",
  heroSubtitle: "De todas as histórias que eu poderia contar, essa é a minha favorita.",
  heroQuote: "Um lugar onde cada memória, canção, riso e promessa se tornaram eternos.",
  // Imagem principal do Hero (substitua pelo caminho da sua foto ou mantenha a cinematográfica)
  heroImage: "/src/assets/images/hero_cinematic_story_1790889703321.jpg",
  // Palavra-chave para abrir a área secreta (ex: coelho, amor, infinito, 1505)
  secretPassphrase: "coelho",
  secretHint: "O animalzinho que você mais ama no mundo todo...",
  // Mensagem do Easter Egg
  easterEggNote: "Você achou a toca do coelho secreto! Se você chegou até aqui, saiba que eu te amo mais do que ontem e menos do que amanhã.",
  // Áudio da sua voz: coloque um arquivo message.mp3 na pasta public/audio/
  voiceAudioSrc: "/audio/message.mp3",
  finalSurpriseGiftType: "ticket",
  bunnyNickname: "Coelhinha",
};
