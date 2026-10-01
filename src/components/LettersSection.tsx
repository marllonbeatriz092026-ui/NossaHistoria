import React, { useState } from 'react';
import { letters, LetterItem } from '../data/letters';
import { BunnyIcon } from './BunnyIcon';
import { Mail, X, Sparkles } from 'lucide-react';

export const LettersSection: React.FC = () => {
  const [openedLetter, setOpenedLetter] = useState<LetterItem | null>(null);

  return (
    <section id="cartas" className="py-24 px-4 sm:px-6 relative bg-[#0F0E0D] border-b border-[#24201D]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>06</span>
            <span>·</span>
            <span>Cartas Para Você</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            Abra Quando o Coração Pedir
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Palavras seladas com cera e carinho para momentos em que você precisar de um abraço em forma de carta.
          </p>
        </div>

        {/* Envelope Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {letters.map((letter: LetterItem) => (
            <div
              key={letter.id}
              onClick={() => setOpenedLetter(letter)}
              className="group relative bg-[#171514] border border-[#2D2623] hover:border-[#C8A97E]/60 p-6 rounded-sm cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              {/* Envelope flap aesthetic */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent" />

              <div className="flex items-start justify-between mb-4">
                {/* Wax seal simulation with bunny */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg border border-[#C8A97E]/40 text-[#C8A97E] transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: letter.sealColor || '#4A1521' }}
                >
                  <BunnyIcon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-vintage-mono text-[#8C827A] uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span>Carta Selada</span>
                </div>
              </div>

              <div className="text-xs font-vintage-mono text-[#C8A97E] uppercase tracking-wider mb-1">
                {letter.triggerPhrase}
              </div>

              <h3 className="text-lg font-serif text-[#FBF9F5] group-hover:text-[#C8A97E] transition-colors mb-2">
                {letter.title}
              </h3>

              <div className="pt-4 border-t border-[#26211F] flex items-center justify-between text-xs text-[#8C827A]">
                <span>{letter.date || "Para você"}</span>
                <span className="group-hover:text-[#FBF9F5] transition-colors flex items-center gap-1 font-vintage-mono">
                  <span>Abrir envelope</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Opened Letter */}
        {openedLetter && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={openedLetter.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
            onClick={() => setOpenedLetter(null)}
          >
            {/* Paper Sheet Document */}
            <div
              className="relative max-w-2xl w-full bg-[#FAF7F2] text-[#1C1917] p-8 sm:p-12 rounded-sm shadow-2xl border border-[#E5DFD5] overflow-y-auto max-h-[85vh] animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenedLetter(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#EAE3D6] text-[#4A453F] hover:text-[#1C1917] hover:bg-[#D5CBBA] transition-colors"
                aria-label="Guardar carta no envelope"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Letter Header Stamp */}
              <div className="border-b border-[#D8CFC2] pb-6 mb-6 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-vintage-mono uppercase tracking-widest text-[#852636] flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{openedLetter.triggerPhrase}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
                    {openedLetter.title}
                  </h3>
                </div>
                {/* Wax seal illustration */}
                <div className="w-12 h-12 rounded-full bg-[#4A1521] text-[#E5DFD7] flex items-center justify-center border-2 border-[#C8A97E] shrink-0">
                  <BunnyIcon className="w-6 h-6 text-[#C8A97E]" />
                </div>
              </div>

              {/* Letter Body Content */}
              <div className="space-y-4 text-base sm:text-lg font-serif leading-relaxed text-[#2B2724] whitespace-pre-line">
                {openedLetter.message}
              </div>

              {/* Letter Closing & Signature */}
              {openedLetter.closing && (
                <div className="mt-8 pt-6 border-t border-[#D8CFC2] text-right">
                  <p className="font-handwriting text-2xl sm:text-3xl text-[#661B28]">
                    {openedLetter.closing}
                  </p>
                </div>
              )}

              {/* Return to envelope button */}
              <div className="mt-10 text-center">
                <button
                  onClick={() => setOpenedLetter(null)}
                  className="px-6 py-2.5 bg-[#2B2724] hover:bg-[#151312] text-[#FBF9F5] text-xs uppercase tracking-widest font-vintage-mono rounded-sm transition-colors"
                >
                  Guardar Carta no Envelope
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
