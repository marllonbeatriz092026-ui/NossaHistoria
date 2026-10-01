/**
 * Cartas de Amor ("Abra quando...")
 * Envelopes interativos com selo de cera e papéis de carta elegantes.
 */

export interface LetterItem {
  id: string;
  triggerPhrase: string; // Ex: "Abra quando estiver com saudade"
  title: string;
  date?: string;
  sealColor?: string;
  envelopeStyle?: string;
  message: string;
  closing?: string;
}

export const letters: LetterItem[] = [
  {
    id: "letter-1",
    triggerPhrase: "Abra quando estiver com saudade",
    title: "Para encurtar a distância num instante",
    date: "Escrita com carinho",
    sealColor: "#661B28",
    message: `Meu amor,

Se você está lendo isso, deve estar sentindo aquele aperto manso no peito que eu também sinto quando fico longe de você.

Fecha os olhos por um segundo. Respira fundo. Lembra daquele abraço demorado que a gente dá quando nos encontramos no final do dia — aquele que parece encaixar cada pedacinho nosso no lugar certo.

A distância não diminui nada do que sinto por você; na verdade, só me prova que você é o único endereço no mundo onde meu coração realmente descansa.

Já já estou aí para te encher de beijos na testa e te fazer um café quentinho.`,
    closing: "Com todo o amor que cabe em mim, sempre seu.",
  },
  {
    id: "letter-2",
    triggerPhrase: "Abra quando o dia tiver sido difícil",
    title: "Para você descansar o coração",
    date: "Para dias cinzas",
    sealColor: "#4A1521",
    message: `Minha princesa,

Eu sei que alguns dias exigem demais da gente. Que o cansaço às vezes pesa nos ombros e as coisas parecem não sair do jeito que você planejou.

Eu quero que você se lembre de quem você é: a mulher mais forte, generosa e brilhante que eu conheço. Mas você não precisa carregar o mundo nas costas o tempo todo.

Deixa o mundo lá fora por um instante. Você deu o seu melhor hoje, e o seu melhor é mais que suficiente. 

Toma um banho quentinho, veste a sua roupa mais confortável, e sabe que eu estou aqui para te ouvir, para te abraçar em silêncio ou para simplesmente fazer você rir até esquecer o cansaço.`,
    closing: "Eu acredito em você, em todos os seus dias.",
  },
  {
    id: "letter-3",
    triggerPhrase: "Abra quando precisar lembrar o quanto eu te amo",
    title: "Um lembrete que nunca envelhece",
    date: "Uma verdade eterna",
    sealColor: "#852636",
    message: `Minha menina,

Se algum dia a rotina, o barulho do mundo ou qualquer insegurança fizer você duvidar da imensidão do meu amor, guarda estas palavras:

Eu amo você no seu jeito de rir tapando a boca. Amo quando você fica empolgada contando uma história com as mãos. Amo o som da sua respiração tranquila quando você dorme com a cabeça no meu peito. Amo a sua generosidade e a sua alma pura.

Eu amo você nos dias fáceis e nos dias complicados. Eu te amo quando você está cheia de certezas e quando só precisa de um colo.

Não existe um dia sequer em que eu não agradeça ao universo por ter cruzado os nossos destinos. Você é a minha escolha mais bonita.`,
    closing: "Para sempre e mais um pouco.",
  },
  {
    id: "letter-4",
    triggerPhrase: "Abra no nosso aniversário de namoro",
    title: "Celebrando a nossa melhor decisão",
    date: "15 de Maio",
    sealColor: "#3B111A",
    message: `Meu grande amor,

Hoje celebramos mais um ciclo de nós. E que privilégio é ver o tempo passar ao seu lado!

Quando penso em tudo o que construímos — as conversas maduras, as piadas bobas, os cafés da manhã preguiçosos, os planos traçados no papel e as tempestades que enfrentamos de mãos dadas — eu só consigo sentir gratidão profunda.

Você não é apenas minha namorada; você é minha melhor amiga, minha maior conselheira e meu refúgio seguro.

Que a gente continue colecionando primaveras, coelhinhos, viagens e sorrisos. O melhor da nossa história ainda está sendo escrito.`,
    closing: "Feliz nosso dia, meu amor de todas as vidas.",
  }
];
