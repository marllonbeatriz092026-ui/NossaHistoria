import React, { useState } from 'react';
import { Gift, Sparkles, X, Heart, Ticket } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';
import confetti from 'canvas-confetti';

export const FinalSurprise: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#C8A97E', '#4A1521', '#FBF9F5', '#E5DFD7', '#852636']
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 relative bg-[#121110] border-b border-[#24201D]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
          <Gift className="w-3.5 h-3.5" />
          <span>Capítulo 13</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
          Ainda Tem Uma Coisa...
        </h2>

        <p className="text-sm font-sans text-[#A89F97] max-w-md mx-auto mb-10">
          Guardei uma última surpresa especial antes da nossa carta de encerramento.
        </p>

        {/* Big Reveal Action Button */}
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#4A1521] hover:bg-[#661B28] text-[#FBF9F5] text-sm uppercase tracking-[0.25em] font-medium rounded-sm border-2 border-[#C8A97E]/40 transition-all duration-300 shadow-[0_0_30px_rgba(74,21,33,0.5)] hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-[#C8A97E]" />
          <span>ABRIR SURPRESA</span>
          <BunnyIcon className="w-4 h-4 text-[#C8A97E]" />
        </button>

        {/* Surprise Modal Dialog */}
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Surpresa Especial"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative max-w-lg w-full bg-[#181615] border-2 border-[#C8A97E] p-8 sm:p-10 rounded-sm shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#8C827A] hover:text-[#FBF9F5] transition-colors"
                aria-label="Fechar surpresa"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#4A1521] border border-[#C8A97E] flex items-center justify-center mx-auto mb-6 text-[#C8A97E]">
                <Ticket className="w-8 h-8" />
              </div>

              <div className="text-xs font-vintage-mono text-[#C8A97E] uppercase tracking-widest mb-2">
                VALE-EXPERIÊNCIA INESQUECÍVEL
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#FBF9F5] mb-4">
                Um Jantar Romântico & Um Dia Inteirinho Para Nós Dois
              </h3>

              <p className="text-sm font-sans text-[#D8D1C7] leading-relaxed mb-6">
                Este vale é válido para sempre e dá direito a: massagem nos pés, café da manhã preparado na cama, um passeio no nosso parque favorito e um jantar especial em qualquer restaurante que você escolher!
              </p>

              <div className="p-4 bg-[#11100F] border border-[#332A26] rounded-sm text-left mb-6">
                <div className="flex items-center justify-between text-[11px] font-vintage-mono text-[#8C827A] mb-1">
                  <span>EMITIDO COM AMOR</span>
                  <span>SEM VALIDADE DE EXPIRAÇÃO</span>
                </div>
                <div className="text-sm font-serif text-[#C8A97E] font-medium">
                  Beneficiária: O Amor da Minha Vida
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-[#C8A97E] hover:bg-[#D5B88F] text-[#100F0E] font-semibold text-xs font-vintage-mono uppercase tracking-widest rounded-sm transition-colors"
              >
                Guardar No Coração
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
