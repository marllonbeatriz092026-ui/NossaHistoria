import React, { useState } from 'react';
import { places, PlaceItem } from '../data/places';
import { MapPin, Calendar, Compass, Sparkles } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';

export const PlacesMap: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<PlaceItem>(places[0]);

  return (
    <section id="lugares" className="py-24 px-4 sm:px-6 relative bg-[#11100F] border-b border-[#24201D]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>09</span>
            <span>·</span>
            <span>Lugares da Nossa História</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            O Mapa das Nossas Coordenadas
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Os endereços, cidades e esquinas que se tornaram sagrados porque nós estivemos lá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Stylized Cartographic Map Canvas */}
          <div className="lg:col-span-7 bg-[#171514] border border-[#2E2825] rounded-sm p-4 sm:p-6 shadow-xl relative overflow-hidden">
            {/* Top map toolbar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#24201D] text-xs font-vintage-mono text-[#8C827A]">
              <div className="flex items-center gap-2 text-[#C8A97E]">
                <Compass className="w-4 h-4 animate-pulse" />
                <span>ATLAS DO NOSSO AMOR</span>
              </div>
              <span>CLIQUE NOS PINOS PARA EXPLORAR</span>
            </div>

            {/* Stylized Topographic / Cartographic Canvas */}
            <div className="relative aspect-[16/10] bg-[#0E0D0C] rounded-sm border border-[#26211F] overflow-hidden flex items-center justify-center">
              {/* Subtle map contour lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                viewBox="0 0 800 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 50 120 Q 200 40 400 130 T 750 90" stroke="#C8A97E" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 80 260 Q 320 180 500 280 T 780 220" stroke="#C8A97E" strokeWidth="1" />
                <path d="M 20 400 Q 280 320 520 420 T 780 360" stroke="#C8A97E" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="400" cy="250" r="160" stroke="#C8A97E" strokeWidth="0.5" strokeOpacity="0.4" />
                <circle cx="400" cy="250" r="280" stroke="#C8A97E" strokeWidth="0.5" strokeOpacity="0.2" />
              </svg>

              {/* Decorative Compass Rose */}
              <div className="absolute top-4 right-4 text-[10px] font-vintage-mono text-[#6A615A] flex flex-col items-center">
                <span>N</span>
                <span className="w-[1px] h-3 bg-[#6A615A]" />
              </div>

              {/* Interactive Location Pins */}
              {places.map((place: PlaceItem) => {
                const isSelected = selectedPlace.id === place.id;

                return (
                  <button
                    key={place.id}
                    onClick={() => setSelectedPlace(place)}
                    style={{ left: `${place.x}%`, top: `${place.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                    aria-label={`Ver local: ${place.name}`}
                  >
                    {/* Ripple / pulse animation */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-[#C8A97E]/30 animate-ping" />
                    )}

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-transform duration-300 shadow-lg ${
                        isSelected
                          ? 'bg-[#4A1521] border-[#C8A97E] scale-125 text-[#FBF9F5]'
                          : 'bg-[#181615] border-[#4A3E38] text-[#C8A97E] group-hover:scale-110'
                      }`}
                    >
                      <MapPin className="w-4 h-4 fill-current" />
                    </div>

                    {/* Tooltip on pin */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-0.5 rounded text-[10px] font-vintage-mono text-[#FBF9F5] pointer-events-none">
                      {place.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick list pill-free buttons */}
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#24201D]">
              {places.map((place: PlaceItem) => (
                <button
                  key={place.id}
                  onClick={() => setSelectedPlace(place)}
                  className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${
                    selectedPlace.id === place.id
                      ? 'bg-[#C8A97E] text-[#100F0E] font-medium'
                      : 'bg-[#1D1B1A] text-[#A89F97] hover:text-[#FBF9F5]'
                  }`}
                >
                  {place.name}
                </button>
              ))}
            </div>
          </div>

          {/* Place Inspector Detail Card */}
          <div className="lg:col-span-5 bg-[#171514] border border-[#2E2825] p-6 sm:p-8 rounded-sm shadow-xl">
            <div className="text-xs font-vintage-mono text-[#C8A97E] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>{selectedPlace.category}</span>
              <div className="flex items-center gap-1 text-[#8C827A]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedPlace.date}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#FBF9F5] mb-1">
              {selectedPlace.name}
            </h3>
            <p className="text-sm font-sans text-[#8C827A] mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>{selectedPlace.city}</span>
            </p>

            {/* Photo if available */}
            {selectedPlace.image && (
              <div className="rounded-sm overflow-hidden border border-[#332A26] mb-4 aspect-[16/9]">
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-full h-full object-cover filter brightness-[0.9]"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            <p className="font-handwriting text-xl text-[#C8A97E] mb-3">
              "{selectedPlace.highlightPhrase}"
            </p>

            <p className="text-sm font-sans text-[#D1C9BF] leading-relaxed mb-6">
              {selectedPlace.description}
            </p>

            <div className="pt-4 border-t border-[#26211F] text-[11px] font-vintage-mono text-[#6A615A] flex items-center justify-between">
              <span>Coordenadas no nosso coração</span>
              <BunnyIcon className="w-4 h-4 text-[#C8A97E]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
