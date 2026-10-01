import React, { useState } from 'react';
import { songs, SongItem } from '../data/songs';
import { Play, Pause, ExternalLink, Disc, Heart, Music } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';
import { ambientAudio } from '../utils/audio';

export const Soundtrack: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<SongItem>(songs[0]);
  const [isPlayingPreview, setIsPlayingPreview] = useState<boolean>(false);

  const handlePlayPreview = (song: SongItem) => {
    setSelectedSong(song);
    setIsPlayingPreview(true);
    ambientAudio.playChimeLullaby();
    setTimeout(() => {
      setIsPlayingPreview(false);
    }, 3500);
  };

  return (
    <section id="trilha" className="py-24 px-4 sm:px-6 relative bg-[#121110] border-b border-[#24201D]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>05</span>
            <span>·</span>
            <span>Nossa Trilha Sonora</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            As Músicas que Cantam Nossa História
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-lg mx-auto">
            Melodias que guardam a nossa viagem de carro, tardes preguiçosas e noites de cantoria desafinada.
          </p>
        </div>

        {/* Cassette / Vinyl Player Deck */}
        <div className="bg-[#181615] border border-[#2E2825] p-6 sm:p-8 rounded-sm mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Spinning Cassette/Vinyl Graphic */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#11100F] border-4 border-[#24201D] flex items-center justify-center shadow-2xl shrink-0">
              {/* Vinyl grooves */}
              <div className="absolute inset-2 rounded-full border border-white/5" />
              <div className="absolute inset-6 rounded-full border border-white/5" />
              <div className="absolute inset-10 rounded-full border border-white/5" />

              {/* Vinyl center sticker */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#4A1521] border-2 border-[#C8A97E] flex flex-col items-center justify-center text-center p-1 transition-transform duration-1000 ${
                  isPlayingPreview ? 'animate-spin' : ''
                }`}
                style={{ animationDuration: '4s' }}
              >
                <BunnyIcon className="w-4 h-4 text-[#C8A97E] mb-0.5" />
                <span className="text-[8px] font-vintage-mono text-[#E5DFD7] uppercase tracking-tighter">
                  SIDE A · NÓS
                </span>
              </div>
            </div>

            {/* Now Playing Info & Story */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-vintage-mono text-[#C8A97E] mb-2 uppercase">
                <Music className="w-3.5 h-3.5" />
                <span>{selectedSong.category}</span>
                {selectedSong.duration && (
                  <>
                    <span>·</span>
                    <span>{selectedSong.duration}</span>
                  </>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#FBF9F5] mb-1">
                {selectedSong.title}
              </h3>
              <p className="text-sm font-sans text-[#A89F97] mb-4">
                {selectedSong.artist}
              </p>

              {/* Story box */}
              <div className="bg-[#11100F] border-l-2 border-[#C8A97E] p-4 text-left rounded-r-sm mb-6">
                <p className="text-xs sm:text-sm font-sans text-[#D8D1C7] leading-relaxed italic">
                  "{selectedSong.story}"
                </p>
              </div>

              {/* Player Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => handlePlayPreview(selectedSong)}
                  className="px-5 py-2.5 bg-[#4A1521] hover:bg-[#661B28] text-[#FBF9F5] text-xs uppercase tracking-wider font-medium rounded-sm border border-[#C8A97E]/30 transition-colors flex items-center gap-2"
                >
                  {isPlayingPreview ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Tocando Melodia...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Ouvir Prévia Suave</span>
                    </>
                  )}
                </button>

                <a
                  href={selectedSong.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#1E1C1A] hover:bg-[#282522] text-[#E5DFD7] text-xs uppercase tracking-wider font-medium rounded-sm border border-[#332A26] transition-colors flex items-center gap-2"
                >
                  <span>Abrir no {selectedSong.platform}</span>
                  <ExternalLink className="w-3 h-3 text-[#A89F97]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Songs Playlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {songs.map((song: SongItem) => {
            const isSelected = selectedSong.id === song.id;

            return (
              <div
                key={song.id}
                onClick={() => setSelectedSong(song)}
                className={`p-4 rounded-sm border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#1D1A18] border-[#C8A97E]/70 shadow-md'
                    : 'bg-[#151312] border-[#2A2421] hover:border-[#3D3530]'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#4A1521] text-[#C8A97E]' : 'bg-[#221E1C] text-[#8C827A]'
                    }`}
                  >
                    <Disc className={`w-5 h-5 ${isSelected ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm font-serif text-[#FBF9F5] truncate">
                      {song.title}
                    </h4>
                    <p className="text-xs text-[#8C827A] truncate">
                      {song.artist}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] font-vintage-mono text-[#C8A97E] uppercase tracking-wider hidden sm:inline">
                    {song.category}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayPreview(song);
                    }}
                    className="p-1.5 rounded-full hover:bg-[#332A26] text-[#A89F97] hover:text-[#FBF9F5] transition-colors"
                    aria-label={`Tocar ${song.title}`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs font-vintage-mono text-[#8C827A] flex items-center justify-center gap-2">
          <Heart className="w-3 h-3 text-[#A84351]" />
          <span>Cada canção é um portal direto para uma memória nossa</span>
        </div>
      </div>
    </section>
  );
};
