/**
 * Cápsula do Tempo
 * Mensagens guardadas a sete chaves para momentos futuros.
 */

export interface TimeCapsuleItem {
  id: string;
  title: string;
  symbolicUnlockDate: string; // Ex: "15 de Maio de 2026", "Daqui a 2 anos"
  sealType: 'coelho' | 'coração' | 'estrela';
  status: 'lacrada' | 'disponível';
  previewNote: string;
  letterContent: string;
}

export const timeCapsules: TimeCapsuleItem[] = [
  {
    id: "capsule-1",
    title: "Para nós daqui a 1 ano",
    symbolicUnlockDate: "15 de Maio de 2027",
    sealType: "coelho",
    status: "lacrada",
    previewNote: "Uma mensagem sobre os medos e as esperanças do nosso presente, pronta para nos fazer sorrir no futuro.",
    letterContent: `Se você está lendo isso daqui a 1 ano:
Lembra de como a gente sonhava com este momento? Espero que estejamos ainda mais cúmplices, que tenhamos feito aquela viagem que planejamos e que você ainda me olhe com aquele mesmo brilho no olhar de quando tudo começou. Te amo no passado, no presente e no que ainda está por vir.`
  },
  {
    id: "capsule-2",
    title: "Para o dia em que comprarmos nosso cantinho",
    symbolicUnlockDate: "O Dia das Chaves",
    sealType: "coração",
    status: "lacrada",
    previewNote: "Para abrir sentados no chão da sala vazia, com caixas de papelão ao redor e pizza no prato descartável.",
    letterContent: `Conseguimos, meu amor!
Este chão que você pisa agora é o palco de todas as noites de filme, manhãs preguiçosas e cafés que sonhamos durante tanto tempo. Que esta casa seja abençoada com a nossa paz, nossas risadas e muitos coelhinhos correndo felizes.`
  },
  {
    id: "capsule-3",
    title: "Para quando estivermos passando por uma fase difícil",
    symbolicUnlockDate: "Em Dias de Tempestade",
    sealType: "estrela",
    status: "lacrada",
    previewNote: "Um abraço em forma de palavras para nos lembrar de que somos muito maiores que qualquer problema.",
    letterContent: `Respira fundo comigo.
Não importa o tamanho da onda ou o peso do dia: eu não vou a lugar nenhum. A gente já superou tanta coisa de mãos dadas, e isso aqui é só mais uma tempestade passageira. Aperta minha mão forte. Nós somos um time, para sempre.`
  }
];
