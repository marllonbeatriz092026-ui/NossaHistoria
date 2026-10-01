import React, { useState } from 'react';
import { randomMemories } from '../data/randomMemories';
import { Sparkles, RefreshCw } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';

export const RandomMemorySection: React.FC = () => {
  const [currentMemory, setCurrentMemory] = useState<string>(randomMemories[0]);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const getRandom = () => {
    setIsSpinning(true);
    let next: string;
    do {
      const idx = Math.floor(Math.random() * randomMemories.length);
      next = randomMemories[idx];
    } while (next === currentMemory && randomMemories.length > 1);

    setTimeout(() => {
      setCurrentMemory(next);
      setIsSpinning(false);
    }, 250);
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative bg-[#100F0E] border-b border-[#24201D]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Lembrança Espontânea</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif text-[#FBF9F5] mb-8">
          Eu Lembro Quando...
        </h2>

        <div className="bg-[#171514] border border-[#2D2724] p-8 sm:p-10 rounded-sm mb-8 shadow-lg">
          <p className="font-handwriting text-2xl sm:text-3xl text-[#E5DFD7] leading-relaxed transition-opacity duration-300">
            "{currentMemory}"
          </p>
        </div>

        <button
          onClick={getRandom}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1C1A] hover:bg-[#2A2623] text-xs font-vintage-mono uppercase tracking-wider text-[#C8A97E] border border-[#38302B] hover:border-[#C8A97E]/50 rounded-sm transition-all shadow-sm"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSpinning ? 'animate-spin' : ''}`} />
          <span>Lembrar de Outro Momento</span>
        </button>
      </div>
    </section>
  );
};
