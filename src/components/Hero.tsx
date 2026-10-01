import React from 'react';
import { ArrowDown, Heart } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';
import { siteConfig } from '../data/siteConfig';
import { relationshipData } from '../data/relationship';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section
      id="abertura"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0C0B]"
    >
      {/* Background Cinematic Photo with gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroImage}
          alt="Momento cinematográfico nosso"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100F0E] via-[#100F0E]/60 to-[#100F0E]/40" />
      </div>

      {/* Floating subtle elements */}
      <div className="absolute top-24 left-8 text-[11px] font-vintage-mono text-[#8C827A] tracking-widest hidden md:block">
        REGISTRO ANALÓGICO Nº 01
      </div>
      <div className="absolute top-24 right-8 text-[11px] font-vintage-mono text-[#8C827A] tracking-widest hidden md:flex items-center gap-2">
        <BunnyIcon className="w-3.5 h-3.5 text-[#C8A97E]" />
        <span>EDICÃO ESPECIAL DE AMOR</span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center">
        {/* Subtle kicker */}
        <div className="flex items-center gap-3 mb-6 opacity-90 animate-fadeIn">
          <span className="h-[1px] w-8 bg-[#C8A97E]/60" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A97E] font-medium">
            PARA VOCÊ, {siteConfig.partnerName.toUpperCase()}
          </span>
          <span className="h-[1px] w-8 bg-[#C8A97E]/60" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#FBF9F5] tracking-tight mb-6 max-w-3xl leading-[1.1] text-balance">
          {siteConfig.heroTitle}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#D8D1C7] font-serif italic max-w-2xl mb-8 leading-relaxed text-balance">
          "{siteConfig.heroSubtitle}"
        </p>

        {/* Discreet relationship start date */}
        <div className="flex items-center gap-2 text-xs font-vintage-mono text-[#A89F97] tracking-wider mb-12">
          <span>DESDE</span>
          <span className="text-[#E0D8CE] font-bold">{relationshipData.startDateDisplay.toUpperCase()}</span>
          <span>·</span>
          <span>E PARA SEMPRE</span>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-[#4A1521] hover:bg-[#661B28] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-medium rounded-sm border border-[#C8A97E]/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,169,126,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
        >
          <span>COMEÇAR NOSSA HISTÓRIA</span>
          <ArrowDown className="w-4 h-4 text-[#C8A97E] group-hover:translate-y-0.5 transition-transform" />
        </button>

        {/* Delicate Bunny Signature note */}
        <div className="mt-14 flex items-center gap-2 text-[11px] text-[#7A7169] tracking-wide">
          <Heart className="w-3 h-3 text-[#A84351] fill-current" />
          <span>Feito com todo o carinho do mundo para o amor da minha vida</span>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3A332F] to-transparent" />
    </section>
  );
};
