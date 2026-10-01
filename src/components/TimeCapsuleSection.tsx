import React, { useState } from 'react';
import { timeCapsules, TimeCapsuleItem } from '../data/timeCapsules';
import { Lock, Unlock, Clock, Sparkles } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';

export const TimeCapsuleSection: React.FC = () => {
  const [unlockedCapsules, setUnlockedCapsules] = useState<Record<string, boolean>>({});

  const toggleUnlock = (id: string) => {
    setUnlockedCapsules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="capsula" className="py-24 px-4 sm:px-6 relative bg-[#121110] border-b border-[#24201D]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>11</span>
            <span>·</span>
            <span>Cápsula do Tempo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            Mensagens Guardadas Para o Futuro
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Palavras guardadas a sete chaves, escritas no presente para ecoarem nos nossos próximos aniversários e conquistas.
          </p>
        </div>

        {/* Capsules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {timeCapsules.map((capsule: TimeCapsuleItem) => {
            const isUnlocked = !!unlockedCapsules[capsule.id];

            return (
              <div
                key={capsule.id}
                className="bg-[#181615] border border-[#2F2926] p-6 rounded-sm shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-vintage-mono text-[#C8A97E] uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      <span>{capsule.symbolicUnlockDate}</span>
                    </span>
                    <div className="text-[#C8A97E]">
                      {isUnlocked ? <Unlock className="w-4 h-4 text-[#85A67C]" /> : <Lock className="w-4 h-4 text-[#852636]" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-[#FBF9F5] mb-3">
                    {capsule.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-[#A89F97] leading-relaxed mb-6">
                    {capsule.previewNote}
                  </p>

                  {/* Revealed Content */}
                  {isUnlocked && (
                    <div className="p-4 bg-[#11100F] border border-[#C8A97E]/30 rounded-sm text-xs sm:text-sm font-serif text-[#E5DFD7] leading-relaxed mb-6 animate-fadeIn whitespace-pre-line">
                      {capsule.letterContent}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#26211F]">
                  <button
                    onClick={() => toggleUnlock(capsule.id)}
                    className={`w-full py-2.5 text-xs uppercase tracking-wider font-vintage-mono rounded-sm transition-colors flex items-center justify-center gap-2 ${
                      isUnlocked
                        ? 'bg-[#292422] text-[#A89F97] hover:text-[#FBF9F5]'
                        : 'bg-[#4A1521] hover:bg-[#661B28] text-[#FBF9F5] border border-[#C8A97E]/30'
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        <span>Fechar e Selar Novamente</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3.5 h-3.5" />
                        <span>Romper Lacre Simbólico</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vintage Seal badge */}
        <div className="mt-14 text-center flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#8C827A]">
          <BunnyIcon className="w-4 h-4 text-[#C8A97E]" />
          <span>Lacrado com promessas de amor eterno e risos futuros</span>
        </div>
      </div>
    </section>
  );
};
