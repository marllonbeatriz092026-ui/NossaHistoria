import React, { useState } from 'react';
import { futureDreams, FutureItem } from '../data/future';
import { CheckCircle2, Circle, Sparkles, Heart } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';
import confetti from 'canvas-confetti';

export const FutureDreams: React.FC = () => {
  const [dreamsList, setDreamsList] = useState<FutureItem[]>(futureDreams);
  const [filter, setFilter] = useState<string>('todos');

  const toggleDreamStatus = (id: string) => {
    setDreamsList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newStatus = item.status === 'realizado' ? 'ainda não' : 'realizado';
          if (newStatus === 'realizado') {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#C8A97E', '#4A1521', '#FBF9F5', '#852636']
            });
          }
          return { ...item, status: newStatus };
        }
        return item;
      })
    );
  };

  const filteredDreams = filter === 'todos'
    ? dreamsList
    : dreamsList.filter(d => d.category.toLowerCase() === filter.toLowerCase());

  const categories = ['todos', 'viagem', 'coelhinhos', 'casa', 'aventura', 'cotidiano'];

  return (
    <section id="futuro" className="py-24 px-4 sm:px-6 relative bg-[#0E0D0C] border-b border-[#24201D]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>10</span>
            <span>·</span>
            <span>Ainda Quero Viver Com Você</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            Nossos Sonhos & Próximas Páginas
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Uma lista de desejos para o nosso futuro juntos. Clique em um item para marcar quando conquistarmos cada um!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-vintage-mono uppercase tracking-wider rounded-sm transition-colors ${
                filter === cat
                  ? 'bg-[#C8A97E] text-[#100F0E] font-bold'
                  : 'bg-[#181615] text-[#8C827A] hover:text-[#FBF9F5] border border-[#2B2522]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dreams List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredDreams.map((dream: FutureItem) => {
            const isDone = dream.status === 'realizado';

            return (
              <div
                key={dream.id}
                onClick={() => toggleDreamStatus(dream.id)}
                className={`p-5 rounded-sm border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                  isDone
                    ? 'bg-[#181514] border-[#4A1521]/80 opacity-85'
                    : 'bg-[#151312] border-[#2A2421] hover:border-[#C8A97E]/50 hover:bg-[#1A1816]'
                }`}
              >
                {/* Status Toggle Icon */}
                <button
                  className="mt-0.5 text-[#C8A97E] shrink-0 focus:outline-none"
                  aria-label={isDone ? "Marcar como não realizado" : "Marcar como realizado"}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-[#C8A97E] fill-[#4A1521]" />
                  ) : (
                    <Circle className="w-5 h-5 text-[#4D443E] hover:text-[#C8A97E]" />
                  )}
                </button>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-vintage-mono mb-1">
                    <span className="text-[#C8A97E] uppercase">{dream.category}</span>
                    <span>·</span>
                    <span className={isDone ? 'text-[#85A67C]' : 'text-[#8C827A]'}>
                      {isDone ? 'Conquistado!' : 'Ainda não'}
                    </span>
                    {dream.targetDateOrYear && (
                      <>
                        <span>·</span>
                        <span className="text-[#78716C]">{dream.targetDateOrYear}</span>
                      </>
                    )}
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-serif text-[#FBF9F5] mb-1 ${
                      isDone ? 'line-through text-[#9E958C]' : ''
                    }`}
                  >
                    {dream.title}
                  </h3>

                  <p className="text-sm font-sans text-[#A89F97] leading-relaxed">
                    {dream.description}
                  </p>

                  {isDone && dream.noteIfDone && (
                    <div className="mt-2 text-xs font-handwriting text-[#C8A97E] text-base">
                      "{dream.noteIfDone}"
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-14 text-center text-xs font-vintage-mono text-[#8C827A] flex items-center justify-center gap-2">
          <BunnyIcon className="w-4 h-4 text-[#C8A97E]" />
          <span>O mundo inteiro é pequeno demais para tudo o que eu ainda quero viver com você.</span>
        </div>
      </div>
    </section>
  );
};
