import React, { useEffect } from 'react';
import { MemoryItem } from '../data/memories';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

interface LightboxProps {
  memory: MemoryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  memory,
  onClose,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!memory) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={memory.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0908]/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-4xl w-full bg-[#161413] border border-[#332A26] rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#100F0E]/80 text-[#E5DFD7] hover:text-white hover:bg-[#4A1521] transition-colors"
          aria-label="Fechar visualizador"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden min-h-[300px] md:min-h-[480px]">
          <img
            src={memory.image}
            alt={memory.title}
            className="w-full h-full object-contain max-h-[75vh]"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Controls on Image */}
          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-[#E5DFD7] hover:text-white hover:bg-[#4A1521] transition-colors"
              aria-label="Memória anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-[#E5DFD7] hover:text-white hover:bg-[#4A1521] transition-colors"
              aria-label="Próxima memória"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Details Pane */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Metadata (anti-slop clean text) */}
            <div className="flex items-center gap-2 text-xs font-vintage-mono text-[#C8A97E] mb-2">
              <span>{memory.category}</span>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{memory.date}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FBF9F5] mb-4">
              {memory.title}
            </h3>

            {/* Handwritten Caption */}
            {memory.caption && (
              <p className="font-handwriting text-xl text-[#C8A97E] mb-4 italic">
                "{memory.caption}"
              </p>
            )}

            {/* Full Story Description */}
            <p className="text-sm font-sans text-[#D1C9BF] leading-relaxed mb-6">
              {memory.description}
            </p>

            {/* Location */}
            {memory.location && (
              <div className="flex items-center gap-1.5 text-xs text-[#8C827A] pt-4 border-t border-[#26211F]">
                <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>{memory.location}</span>
              </div>
            )}
          </div>

          {/* Bottom helper */}
          <div className="mt-8 text-[11px] font-vintage-mono text-[#6A615A] flex items-center justify-between">
            <span>Dica: Use as setas ← → do teclado</span>
            <span>ESC para fechar</span>
          </div>
        </div>
      </div>
    </div>
  );
};
