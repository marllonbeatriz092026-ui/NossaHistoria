import React, { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { BunnyIcon } from './BunnyIcon';
import { Sparkles, X, Heart, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EasterEggsModalProps {
  isOpen: boolean;
  onClose: () => void;
  eggType?: 'bunny' | 'keyboard' | 'star';
}

export const EasterEggsModal: React.FC<EasterEggsModalProps> = ({
  isOpen,
  onClose,
  eggType = 'bunny',
}) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        colors: ['#C8A97E', '#852636', '#FBF9F5', '#FFD1DC']
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Segredo Revelado"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-[#181615] border-2 border-[#C8A97E] p-8 rounded-sm shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8C827A] hover:text-[#FBF9F5] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-[#4A1521] border border-[#C8A97E] flex items-center justify-center mx-auto mb-5 text-[#C8A97E]">
          {eggType === 'star' ? (
            <Star className="w-8 h-8 fill-current text-[#C8A97E]" />
          ) : (
            <BunnyIcon className="w-9 h-9 text-[#C8A97E]" />
          )}
        </div>

        <div className="text-xs font-vintage-mono text-[#C8A97E] uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EASTER EGG ENCONTRADO!</span>
        </div>

        <h3 className="text-2xl font-serif text-[#FBF9F5] mb-3">
          Você Encontrou o Que Eu Escondi!
        </h3>

        <p className="text-sm font-sans text-[#D8D1C7] leading-relaxed mb-6">
          {siteConfig.easterEggNote}
        </p>

        <div className="p-4 bg-[#11100F] border border-[#2B2421] rounded-sm mb-6 text-xs font-vintage-mono text-[#8C827A]">
          {eggType === 'bunny' && "Dica: Você clicou tantas vezes no coelhinho que acordou ele da soneca!"}
          {eggType === 'keyboard' && "Dica: Você digitou a palavra secreta no teclado!"}
          {eggType === 'star' && "Dica: Você encontrou a menor estrela brilhando no nosso céu!"}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#4A1521] hover:bg-[#661B28] text-xs font-vintage-mono uppercase tracking-widest text-[#FBF9F5] rounded-sm border border-[#C8A97E]/30 transition-colors"
        >
          Guardar Segredo
        </button>
      </div>
    </div>
  );
};
