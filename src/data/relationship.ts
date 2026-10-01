/**
 * Informações e Metadados do Relacionamento
 */

export interface RelationshipData {
  startDateDisplay: string;
  counterSubtext: string;
  anniversaryDay: string;
  memoriesCountText: string;
  signaturePhrase: string;
  visitorCountText: string;
}

export const relationshipData: RelationshipData = {
  startDateDisplay: "15 de Maio de 2023",
  counterSubtext: "...e em cada segundo desse tempo, eu escolheria você de novo.",
  anniversaryDay: "Todo dia 15",
  memoriesCountText: "Incontáveis memórias e apenas no começo",
  signaturePhrase: "15/05/2023 → ∞",
  visitorCountText: "000001 (Você é a única visita que importa no meu coração)",
};
