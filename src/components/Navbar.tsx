import React, { useState, useEffect } from 'react';
import { BunnyIcon } from './BunnyIcon';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { ambientAudio } from '../utils/audio';

interface NavbarProps {
  currentChapter: number;
  totalChapters: number;
  onOpenSecret: () => void;
  onBunnyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentChapter,
  totalChapters,
  onOpenSecret,
  onBunnyClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = !isAudioActive;
    setIsAudioActive(newState);
    ambientAudio.toggleVinylCrackle(newState);
    if (newState) {
      ambientAudio.playChimeLullaby();
    }
  };

  const navLinks = [
    { label: "Tempo", href: "#tempo" },
    { label: "História", href: "#historia" },
    { label: "Memórias", href: "#memorias" },
    { label: "Trilha", href: "#trilha" },
    { label: "Cartas", href: "#cartas" },
    { label: "Lugares", href: "#lugares" },
    { label: "Futuro", href: "#futuro" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#100F0E]/90 backdrop-blur-md border-b border-[#2A2421]'
          : 'bg-gradient-to-b from-[#100F0E]/80 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text wordmark with subtle interactive bunny */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBunnyClick}
            className="text-[#C8A97E] hover:text-[#E8D8C3] transition-colors p-1 rounded focus-visible:ring-1 focus-visible:ring-[#C8A97E]"
            title="Um coelhinho secreto..."
            aria-label="Coelhinho secreto"
          >
            <BunnyIcon className="w-5 h-5" />
          </button>
          <a
            href="#abertura"
            className="text-base sm:text-lg font-serif tracking-widest text-[#FBF9F5] hover:text-[#C8A97E] transition-colors whitespace-nowrap"
          >
            NOSSA HISTÓRIA
          </a>
        </div>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider text-[#A89F97]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FBF9F5] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C8A97E] after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenSecret}
            className="hover:text-[#C8A97E] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#C8A97E]" />
            <span>Segredo</span>
          </button>
        </nav>

        {/* Zone 3: Actions - Chapter indicator & Ambient sound toggle */}
        <div className="flex items-center gap-3">
          <span className="font-vintage-mono text-[11px] text-[#A89F97] tracking-wider hidden sm:inline">
            CAPÍTULO {String(currentChapter).padStart(2, '0')} / {String(totalChapters).padStart(2, '0')}
          </span>

          <button
            onClick={toggleSound}
            className={`p-2 rounded-full border transition-all duration-200 flex items-center justify-center ${
              isAudioActive
                ? 'border-[#C8A97E] text-[#C8A97E] bg-[#C8A97E]/10'
                : 'border-[#2C2623] text-[#A89F97] hover:text-[#FBF9F5] hover:border-[#4A3E39]'
            }`}
            title={isAudioActive ? "Desativar atmosfera sonora" : "Ativar som de vinil e chuva suave"}
            aria-label="Atmosfera de áudio"
          >
            {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#A89F97] hover:text-[#FBF9F5] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141211] border-b border-[#2A2421] px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4 text-sm font-serif">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#E5DFD7] hover:text-[#C8A97E] py-1 border-b border-[#221E1C] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-vintage-mono text-[#8C827A]">→</span>
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSecret();
              }}
              className="text-[#C8A97E] text-left py-1 flex items-center justify-between"
            >
              <span>O Segredo</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
