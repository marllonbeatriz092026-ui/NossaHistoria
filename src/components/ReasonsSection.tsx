import React, { useState } from 'react';
import { reasons, ReasonItem } from '../data/reasons';
import { BunnyIcon } from './BunnyIcon';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export const ReasonsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentReason = reasons[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <section id="motivos" className="py-24 px-4 sm:px-6 relative bg-[#121110] border-b border-[#24201D]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>07</span>
            <span>·</span>
            <span>Coisas Que Amo Em Você</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            Pequenos e Grandes Motivos
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Uma lista interminável de detalhes que me fazem agradecer todos os dias por ter você ao meu lado.
          </p>
        </div>

        {/* Spotlight Showcase Card */}
        <div className="bg-[#181615] border border-[#2E2825] p-8 sm:p-12 rounded-sm shadow-2xl relative max-w-3xl mx-auto mb-12">
          {/* Large Editorial Number */}
          <div className="text-6xl sm:text-8xl font-serif font-light text-[#C8A97E]/20 absolute top-4 right-8 select-none tabular-nums">
            {currentReason.number}
          </div>

          <div className="relative z-10">
            <div className="text-xs font-vintage-mono text-[#C8A97E] uppercase tracking-widest mb-4 flex items-center gap-2">
              <BunnyIcon className="w-4 h-4" />
              <span>MOTIVO Nº {currentReason.number} DE {String(reasons.length).padStart(2, '0')}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif text-[#FBF9F5] mb-6 leading-tight">
              {currentReason.title}
            </h3>

            <p className="text-base sm:text-lg font-sans text-[#D8D1C7] leading-relaxed mb-8">
              {currentReason.detail}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#292421]">
              <button
                onClick={handlePrev}
                className="px-4 py-2 border border-[#332A26] hover:border-[#C8A97E] text-xs font-vintage-mono text-[#A89F97] hover:text-[#FBF9F5] rounded-sm transition-colors flex items-center gap-2"
                aria-label="Motivo anterior"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="flex items-center gap-1.5">
                {reasons.slice(0, Math.min(10, reasons.length)).map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                      currentIndex === idx ? 'bg-[#C8A97E] w-5' : 'bg-[#332A26]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 bg-[#4A1521] hover:bg-[#661B28] text-xs font-vintage-mono text-[#FBF9F5] rounded-sm border border-[#C8A97E]/30 transition-colors flex items-center gap-2"
                aria-label="Próximo motivo"
              >
                <span>Próximo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini Grid for quick overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {reasons.slice(0, 6).map((item: ReasonItem, idx: number) => (
            <div
              key={item.number}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-sm border transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'bg-[#221F1C] border-[#C8A97E]'
                  : 'bg-[#151312] border-[#25201E] hover:border-[#38312D]'
              }`}
            >
              <div className="text-xs font-vintage-mono text-[#C8A97E] mb-1">{item.number}</div>
              <h4 className="text-sm font-serif text-[#FBF9F5] truncate">{item.title}</h4>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-vintage-mono text-[#7A7169] flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#A84351]" />
          <span>E a cada dia que passa, eu descubro mais dez motivos novos</span>
        </div>
      </div>
    </section>
  );
};
