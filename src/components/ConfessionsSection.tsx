import React, { useState } from 'react';
import { confessions, ConfessionItem } from '../data/confessions';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';

export const ConfessionsSection: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const current = confessions[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % confessions.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + confessions.length) % confessions.length);

  return (
    <section className="py-20 px-4 sm:px-6 relative bg-[#0D0C0B] border-b border-[#24201D]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
          <Eye className="w-3.5 h-3.5" />
          <span>Pequenas Confissões</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif text-[#FBF9F5] mb-10">
          Você Provavelmente Não Sabe...
        </h2>

        {/* Confession Box */}
        <div className="bg-[#161413] border border-[#2D2623] p-8 sm:p-12 rounded-sm relative shadow-xl min-h-[220px] flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl font-serif italic text-[#FBF9F5] leading-relaxed">
              "{current.statement}"
            </p>
            <p className="text-sm font-sans text-[#A89F97] max-w-xl mx-auto">
              {current.context}
            </p>
          </div>

          <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#26201E]">
            <button
              onClick={handlePrev}
              className="text-xs font-vintage-mono text-[#8C827A] hover:text-[#FBF9F5] flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <span className="text-[11px] font-vintage-mono text-[#C8A97E]">
              {String(index + 1).padStart(2, '0')} / {String(confessions.length).padStart(2, '0')}
            </span>

            <button
              onClick={handleNext}
              className="text-xs font-vintage-mono text-[#8C827A] hover:text-[#FBF9F5] flex items-center gap-1 transition-colors"
            >
              <span>Próxima</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
