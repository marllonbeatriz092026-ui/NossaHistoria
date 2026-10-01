import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Play, Pause, Mic, Volume2 } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';
import { ambientAudio } from '../utils/audio';

export const VoiceMessage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(42); // 42 seconds symbolic duration
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      if (timerRef.current) clearInterval(timerRef.current);
      setIsPlaying(false);
    } else {
      // Tentar tocar elemento de áudio real
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Se não houver arquivo físico ainda, toca o chimes sintetizado do Web Audio API
          ambientAudio.playChimeLullaby();
        });
      } else {
        ambientAudio.playChimeLullaby();
      }

      setIsPlaying(true);
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            if (timerRef.current) clearInterval(timerRef.current);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <section className="py-24 px-4 sm:px-6 relative bg-[#121110] border-b border-[#24201D]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
          <Mic className="w-3.5 h-3.5" />
          <span>Mensagem em Áudio</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
          Tem Uma Coisa Que Eu Queria Te Dizer
        </h2>

        <p className="text-sm font-sans text-[#A89F97] max-w-md mx-auto mb-10">
          Gravei isso para você ouvir com calma, onde quer que esteja.
        </p>

        {/* Audio Player Card */}
        <div className="bg-[#181615] border border-[#2E2825] p-6 sm:p-8 rounded-sm shadow-xl">
          {/* Waveform Visualization Bars */}
          <div className="flex items-center justify-center gap-1.5 h-16 sm:h-20 mb-8 px-4">
            {Array.from({ length: 28 }).map((_, i) => {
              const baseHeight = 20 + Math.sin(i * 0.4) * 15 + Math.cos(i * 0.8) * 10;
              const activeHeight = isPlaying
                ? Math.min(65, Math.max(12, baseHeight + Math.sin(Date.now() / 200 + i) * 20))
                : baseHeight;

              const isPassed = (i / 28) <= (currentTime / duration);

              return (
                <div
                  key={i}
                  className={`w-1.5 rounded-full transition-all duration-150 ${
                    isPassed ? 'bg-[#C8A97E]' : 'bg-[#332A26]'
                  }`}
                  style={{
                    height: `${activeHeight}px`,
                  }}
                />
              );
            })}
          </div>

          {/* Controls & Tracker */}
          <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
            <span className="text-xs font-vintage-mono text-[#8C827A] tabular-nums">
              {formatTime(currentTime)}
            </span>

            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-[#4A1521] hover:bg-[#661B28] text-[#FBF9F5] flex items-center justify-center border border-[#C8A97E]/40 shadow-lg transition-transform hover:scale-105"
              aria-label={isPlaying ? "Pausar gravação de voz" : "Tocar gravação de voz"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <span className="text-xs font-vintage-mono text-[#8C827A] tabular-nums">
              {formatTime(duration)}
            </span>
          </div>

          {/* Hidden Audio Tag for local user file /public/audio/message.mp3 */}
          <audio
            ref={audioRef}
            src={siteConfig.voiceAudioSrc}
            preload="metadata"
            onLoadedMetadata={() => {
              if (audioRef.current && audioRef.current.duration) {
                setDuration(audioRef.current.duration);
              }
            }}
            onEnded={() => {
              setIsPlaying(false);
              setCurrentTime(0);
            }}
          />

          <div className="mt-6 pt-4 border-t border-[#26201E] text-[11px] font-vintage-mono text-[#6A615A] flex items-center justify-center gap-2">
            <Volume2 className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Coloque o arquivo message.mp3 em public/audio/ para sua voz real</span>
          </div>
        </div>
      </div>
    </section>
  );
};
