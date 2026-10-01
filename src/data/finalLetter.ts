/**
 * Carta Final ("Para você")
 * A seção mais limpa, profunda e emocionante de todo o site.
 * Edite estas linhas com os seus sentimentos mais verdadeiros.
 */

export interface FinalLetterData {
  title: string;
  subtitle: string;
  leadParagraph: string;
  bodyParagraphs: string[];
  signature: string;
  psNote?: string;
  closingHeading: string;
  closingInfinity: string;
  closingLove: string;
}

export const finalLetterData: FinalLetterData = {
  title: "Para você.",
  subtitle: "Com todo o meu amor, em cada linha que o coração dita.",
  leadParagraph: "Se algum dia me perguntassem em qual momento da minha vida eu tive a maior certeza sobre o futuro, eu responderia sem hesitar: no momento em que você segurou a minha mão pela primeira vez.",
  bodyParagraphs: [
    "O amor, para mim, nunca foi sobre perfeição. Ele sempre foi sobre abrigo. Sobre encontrar alguém com quem o silêncio é confortável, com quem o riso é solto e com quem as conversas difíceis nos deixam ainda mais fortes.",
    "Com você, descobri que o amor tem cheiro de café passado, tem a fofura de um coelhinho pulando na grama, tem a calma de um fim de tarde à beira-mar e tem a segurança de um abraço que cura qualquer ferida.",
    "Obrigado por ser essa mulher extraordinária. Pela sua doçura, pela sua luz que invade qualquer ambiente e pela sua generosidade sem tamanho. Você me inspira a ser um ser humano melhor todos os dias.",
    "Este site é apenas um pequeno reflexo do universo imenso que construímos juntos. Mas as páginas mais bonitas da nossa história não estão escritas em código nem guardadas em telas: elas estão nos nossos olhares, nos nossos planos sussurrados no escuro e em cada passo que damos rumo ao amanhã.",
    "Eu escolheria você ontem. Eu escolho você hoje. E vou continuar escolhendo você em todos os amanhãs que Deus nos conceder."
  ],
  signature: "Com todo o amor do mundo, para sempre seu.",
  psNote: "P.S.: E sim, ainda vamos ter o nosso coelhinho de orelha caída.",
  closingHeading: "Nossa história ainda está sendo escrita.",
  closingInfinity: "15/05/2023 → ∞",
  closingLove: "Te amo infinitamente."
};
