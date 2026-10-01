import React from 'react';
import { relationshipData } from '../data/relationship';
import { siteConfig } from '../data/siteConfig';
import { BunnyIcon } from './BunnyIcon';
import { Heart, Star } from 'lucide-react';

interface FooterProps {
  onStarClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStarClick }) => {
  return (
    <footer className="py-16 px-4 bg-[#0A0908] border-t border-[#1C1816] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Subtle vintage visitor counter */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141211] border border-[#2B2421] rounded-sm text-[11px] font-vintage-mono text-[#8C827A]">
          <span>VISITANTE Nº</span>
          <span className="text-[#C8A97E] font-bold tracking-wider">000001</span>
          <span>·</span>
          <span>A ÚNICA QUE IMPORTA</span>
        </div>

        {/* Minimalist Brand and Love statement */}
        <div className="flex items-center gap-2 text-sm font-serif text-[#C8A97E]">
          <span>Feito especialmente para</span>
          <span className="text-[#FBF9F5] font-semibold">{siteConfig.partnerName}</span>
          <Heart className="w-3.5 h-3.5 text-[#A84351] fill-current" />
        </div>

        <div className="text-xs font-vintage-mono text-[#5A524C] flex items-center justify-center gap-3">
          <span>{relationshipData.signaturePhrase}</span>
          <span>·</span>
          <span>{siteConfig.authorName}</span>
        </div>

        {/* Hidden Little Star (Easter Egg #3) */}
        <button
          onClick={onStarClick}
          className="text-[#2C2622] hover:text-[#C8A97E] transition-colors p-1"
          title="Uma pequena estrela no céu..."
          aria-label="Estrela secreta"
        >
          <Star className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};
