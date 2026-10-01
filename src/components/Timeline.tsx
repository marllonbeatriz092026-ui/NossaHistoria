import React from 'react';
import { timelineEvents, TimelineEvent } from '../data/timeline';
import { MapPin, Music, Sparkles } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';

export const Timeline: React.FC = () => {
  return (
    <section id="historia" className="py-24 px-4 sm:px-6 relative bg-[#100F0E] border-b border-[#24201D]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>03</span>
            <span>·</span>
            <span>Nossa História</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            A Linha do Tempo de Nós
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Os marcos inesquecíveis, os passos que demos juntos e os dias em que o amor falou mais alto.
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C8A97E]/30 via-[#4A1521] to-[#C8A97E]/30 -translate-x-1/2" />
          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-[#332B27]" />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event: TimelineEvent, idx: number) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#181615] border-2 border-[#C8A97E] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(200,169,126,0.3)]">
                    <span className="w-2 h-2 rounded-full bg-[#661B28]" />
                  </div>

                  {/* Empty half for desktop alternating balance */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Side */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="bg-[#161413] border border-[#2D2724] hover:border-[#C8A97E]/50 transition-all duration-300 p-6 rounded-sm shadow-sm group">
                      {/* Metadata Row: Clean text with typographic separators (anti-slop rule) */}
                      <div
                        className={`flex items-center gap-2 text-xs font-vintage-mono text-[#C8A97E] mb-2 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span>{event.displayDate}</span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize text-[#A89F97]">{event.category}</span>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-xl sm:text-2xl font-serif text-[#FBF9F5] group-hover:text-[#C8A97E] transition-colors mb-3">
                        {event.title}
                      </h3>

                      {/* Optional Photo */}
                      {event.image && (
                        <div className="my-4 overflow-hidden rounded-sm border border-[#332A26]">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 sm:h-56 object-cover object-center filter brightness-[0.9] hover:scale-105 transition-transform duration-500 ease-out"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm font-sans text-[#CBC4BA] leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Location & Song info */}
                      {(event.location || event.song) && (
                        <div
                          className={`pt-3 border-t border-[#26211F] flex flex-wrap items-center gap-4 text-xs text-[#8C827A] ${
                            isEven ? 'md:justify-end' : 'md:justify-start'
                          }`}
                        >
                          {event.location && (
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
                              <span>{event.location}</span>
                            </div>
                          )}
                          {event.song && (
                            <div className="flex items-center gap-1.5">
                              <Music className="w-3.5 h-3.5 text-[#A84351]" />
                              <span>{event.song}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Footer Note */}
        <div className="text-center mt-16 flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#8C827A]">
          <BunnyIcon className="w-4 h-4 text-[#C8A97E]" />
          <span>E novos capítulos estão sendo escritos todos os dias...</span>
        </div>
      </div>
    </section>
  );
};
