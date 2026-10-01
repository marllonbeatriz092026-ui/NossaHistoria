/**
 * Você provavelmente não sabe...
 * Pequenas confissões sinceras e cheias de carinho.
 */

export interface ConfessionItem {
  id: string;
  statement: string;
  context: string;
}

export const confessions: ConfessionItem[] = [
  {
    id: "conf-1",
    statement: "Você provavelmente não sabe que eu fiquei olhando sua mensagem por alguns minutos antes de responder...",
    context: "Porque meu coração batia tão rápido que eu precisava respirar fundo só para não parecer desesperado.",
  },
  {
    id: "conf-2",
    statement: "Você provavelmente não sabe que eu tenho uma pasta secreta no celular só com fotos suas rindo distraída.",
    context: "É o lugar para onde eu corro toda vez que meu dia fica pesado e eu preciso de paz.",
  },
  {
    id: "conf-3",
    statement: "Você provavelmente não sabe que antes de te conhecer, eu achava clichês românticos pura bobagem.",
    context: "Hoje em dia, qualquer canção de amor brega parece que foi composta sob medida pensando em você.",
  },
  {
    id: "conf-4",
    statement: "Você provavelmente não sabe que quando você me dá a mão na rua, eu me sinto a pessoa mais sortuda do planeta.",
    context: "É um orgulho bobo e lindo de poder caminhar pelo mundo ao seu lado.",
  },
  {
    id: "conf-5",
    statement: "Você provavelmente não sabe que eu oro todas as noites pela sua felicidade e proteção.",
    context: "Porque cuidar de você, mesmo em pensamentos e silêncio, virou meu instinto mais bonito.",
  }
];
