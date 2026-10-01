import React, { useState } from 'react';
import { insideJokes, InsideJokeItem } from '../data/insideJokes';
import { BunnyIcon } from './BunnyIcon';
import { Utensils, Smile, Car, Moon, Sparkles } from 'lucide-react';

export const InsideJokes: React.FC = () => {
  const [expandedJoke, setExpandedJoke] = useState<string | null>(insideJokes[0].id);

  const getIcon = (type: InsideJokeItem['iconType']) => {
    switch (type) {
      case 'food':
        return <Utensils className="w-4 h-4 text-[#C8A97E]" />;
      case 'bunny':
        return <BunnyIcon className="w-4 h-4 text-[#C8A97E]" />;
      case 'car':
        return <Car className="w-4 h-4 text-[#C8A97E]" />;
      case 'sleep':
        return <Moon className="w-4 h-4 text-[#C8A97E]" />;
      default:
        return <Smile className="w-4 h-4 text-[#C8A97E]" />;
    }
  };

  return (
    <section id="piadas" className="py-24 px-4 sm:px-6 relative bg-[#0E0D0C] border-b border-[#24201D]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>08</span>
            <span>·</span>
            <span>Só Nós Dois Entendemos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            Nossos Códigos, Risadas & Bobagens
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Porque o amor de verdade é feito de conversas profundas, mas também de crises de riso às 2 da manhã.
          </p>
        </div>

        {/* Jokes Grid / Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {insideJokes.map((joke: InsideJokeItem) => {
            const isExpanded = expandedJoke === joke.id;

            return (
              <div
                key={joke.id}
                onClick={() => setExpandedJoke(isExpanded ? null : joke.id)}
                className={`p-6 rounded-sm border transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'bg-[#181615] border-[#C8A97E]/70 shadow-lg'
                    : 'bg-[#131110] border-[#292320] hover:border-[#3D3531]'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-vintage-mono text-[#C8A97E]">
                    {getIcon(joke.iconType)}
                    <span className="uppercase tracking-wider">{joke.tag}</span>
                  </div>
                  {joke.date && (
                    <span className="text-[11px] font-vintage-mono text-[#78716C]">
                      {joke.date}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif text-[#FBF9F5] mb-2">
                  {joke.title}
                </h3>

                <p className="font-serif italic text-[#E5DFD7] text-sm mb-3">
                  {joke.punchline}
                </p>

                {isExpanded && (
                  <div className="pt-3 border-t border-[#26211F] text-xs sm:text-sm font-sans text-[#A89F97] leading-relaxed animate-fadeIn">
                    {joke.story}
                  </div>
                )}

                <div className="text-right text-[11px] font-vintage-mono text-[#6A615A] mt-2">
                  {isExpanded ? "Fechar história ↑" : "Ler episódio completo ↓"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Nostalgic vintage quote */}
        <div className="mt-14 text-center max-w-md mx-auto">
          <p className="text-xs font-vintage-mono text-[#8C827A] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Nenhum ser humano no planeta entenderia metade das nossas piadas.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
