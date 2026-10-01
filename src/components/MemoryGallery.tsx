import React, { useState } from 'react';
import { memories, memoryCategories, MemoryCategory, MemoryItem } from '../data/memories';
import { Lightbox } from './Lightbox';
import { BunnyIcon } from './BunnyIcon';
import { ZoomIn } from 'lucide-react';

export const MemoryGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MemoryCategory>('Todos');
  const [selectedMemoryIndex, setSelectedMemoryIndex] = useState<number | null>(null);

  const filteredMemories = activeCategory === 'Todos'
    ? memories
    : memories.filter(m => m.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedMemoryIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedMemoryIndex(null);
  };

  const handleNext = () => {
    if (selectedMemoryIndex !== null && selectedMemoryIndex < filteredMemories.length - 1) {
      setSelectedMemoryIndex(selectedMemoryIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedMemoryIndex !== null && selectedMemoryIndex > 0) {
      setSelectedMemoryIndex(selectedMemoryIndex - 1);
    }
  };

  return (
    <section id="memorias" className="py-24 px-4 sm:px-6 relative bg-[#0E0D0C] border-b border-[#24201D]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>04</span>
            <span>·</span>
            <span>Nossas Memórias</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            Álbum de Scrapbook & Fotografias
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Retalhos dos nossos dias felizes, polaroids guardadas com fitas adesivas e lembranças que não envelhecem.
          </p>
        </div>

        {/* Filter Segmented Controls (anti-slop clean buttons with functional click handlers) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {memoryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#C8A97E] text-[#100F0E] font-semibold shadow-sm'
                    : 'bg-[#181615] text-[#A89F97] hover:text-[#FBF9F5] border border-[#2B2522] hover:border-[#423934]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredMemories.map((item: MemoryItem, idx: number) => {
            const rotation = item.rotation || (idx % 2 === 0 ? -1.5 : 1.5);

            return (
              <div
                key={item.id}
                className="relative group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
                onClick={() => handleOpenLightbox(idx)}
              >
                {/* Washi tape strip on top of polaroid */}
                <div
                  className="washi-tape left-1/2 -top-2.5 -translate-x-1/2 w-24"
                  style={{ transform: `translateX(-50%) rotate(${rotation * -0.8}deg)` }}
                />

                {/* Polaroid Frame */}
                <div className="polaroid-frame p-4 pb-6 rounded-sm">
                  {/* Photo area */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#24211F] rounded-sm mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Hover zoom overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-2 rounded-full bg-white/90 text-[#100F0E] shadow-lg">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Polaroid caption & handwritten note */}
                  <div className="px-1 text-center">
                    <h3 className="text-base font-serif font-bold text-[#1C1917] tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="font-handwriting text-lg text-[#661B28] leading-tight mb-2">
                      "{item.caption}"
                    </p>
                    <div className="text-[10px] font-vintage-mono text-[#78716C] uppercase tracking-wider flex items-center justify-center gap-2">
                      <span>{item.date}</span>
                      {item.location && (
                        <>
                          <span>·</span>
                          <span>{item.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state safeguard */}
        {filteredMemories.length === 0 && (
          <div className="text-center py-16 text-[#A89F97]">
            <p className="font-serif text-lg">Nenhuma memória nesta categoria ainda.</p>
          </div>
        )}

        {/* Scrapbook footer note */}
        <div className="mt-20 text-center flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#8C827A]">
          <BunnyIcon className="w-3.5 h-3.5 text-[#C8A97E]" />
          <span>Clique em qualquer fotografia para abrir em alta resolução</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMemoryIndex !== null && (
        <Lightbox
          memory={filteredMemories[selectedMemoryIndex]}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          hasPrev={selectedMemoryIndex > 0}
          hasNext={selectedMemoryIndex < filteredMemories.length - 1}
        />
      )}
    </section>
  );
};
