/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RelationshipCounter } from './components/RelationshipCounter';
import { Timeline } from './components/Timeline';
import { MemoryGallery } from './components/MemoryGallery';
import { Soundtrack } from './components/Soundtrack';
import { LettersSection } from './components/LettersSection';
import { ReasonsSection } from './components/ReasonsSection';
import { InsideJokes } from './components/InsideJokes';
import { PlacesMap } from './components/PlacesMap';
import { FutureDreams } from './components/FutureDreams';
import { TimeCapsuleSection } from './components/TimeCapsuleSection';
import { ConfessionsSection } from './components/ConfessionsSection';
import { RandomMemorySection } from './components/RandomMemorySection';
import { VoiceMessage } from './components/VoiceMessage';
import { SecretSection } from './components/SecretSection';
import { FinalSurprise } from './components/FinalSurprise';
import { FinalLetterSection } from './components/FinalLetterSection';
import { Footer } from './components/Footer';
import { EasterEggsModal } from './components/EasterEggsModal';

export default function App() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [bunnyClickCount, setBunnyClickCount] = useState(0);
  const [easterEggOpen, setEasterEggOpen] = useState(false);
  const [easterEggType, setEasterEggType] = useState<'bunny' | 'keyboard' | 'star'>('bunny');

  // Smooth scroll handler from Hero to Chapter 02
  const handleStartStory = () => {
    const tempoSection = document.getElementById('tempo');
    if (tempoSection) {
      tempoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSecret = () => {
    const secretSection = document.getElementById('segredo');
    if (secretSection) {
      secretSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Easter Egg 1: Click bunny 5 times
  const handleBunnyClick = () => {
    const nextCount = bunnyClickCount + 1;
    setBunnyClickCount(nextCount);
    if (nextCount >= 5) {
      setEasterEggType('bunny');
      setEasterEggOpen(true);
      setBunnyClickCount(0);
    }
  };

  // Easter Egg 3: Click hidden star in footer
  const handleStarClick = () => {
    setEasterEggType('star');
    setEasterEggOpen(true);
  };

  // Easter Egg 2: Secret keyboard sequence ("LOVE" or "COELHO")
  useEffect(() => {
    let keyBuffer = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > 10) {
        keyBuffer = keyBuffer.slice(-10);
      }

      if (keyBuffer.includes('love') || keyBuffer.includes('coelho')) {
        setEasterEggType('keyboard');
        setEasterEggOpen(true);
        keyBuffer = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll spy to update current chapter (01 to 14)
  useEffect(() => {
    const sectionIds = [
      'abertura',
      'tempo',
      'historia',
      'memorias',
      'trilha',
      'cartas',
      'motivos',
      'piadas',
      'lugares',
      'futuro',
      'capsula',
      'segredo',
      'surpresa',
      'carta-final'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentChapter(i + 1);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#100F0E] text-[#F3EFEA] flex flex-col selection:bg-[#4A1521] selection:text-[#FBF9F5]">
      {/* Fixed Navigation Bar with Chapter Indicator & Vinyl Ambient Sound */}
      <Navbar
        currentChapter={currentChapter}
        totalChapters={14}
        onOpenSecret={handleOpenSecret}
        onBunnyClick={handleBunnyClick}
      />

      {/* Main Experience Chapters */}
      <main className="flex-1">
        {/* 01 — Abertura */}
        <Hero onStart={handleStartStory} />

        {/* 02 — Nosso Tempo */}
        <RelationshipCounter />

        {/* 03 — Nossa História */}
        <Timeline />

        {/* 04 — Nossas Memórias */}
        <MemoryGallery />

        {/* 05 — Nossa Trilha Sonora */}
        <Soundtrack />

        {/* 06 — Cartas Para Você */}
        <LettersSection />

        {/* 07 — Coisas Que Amo Em Você */}
        <ReasonsSection />

        {/* 08 — Só Nós Dois Entendemos */}
        <InsideJokes />

        {/* 09 — Lugares da Nossa História */}
        <PlacesMap />

        {/* Interlúdio Emocional: "Você Provavelmente Não Sabe..." */}
        <ConfessionsSection />

        {/* 10 — Ainda Quero Viver Com Você */}
        <FutureDreams />

        {/* Interlúdio Lúdico: "Eu Lembro Quando..." */}
        <RandomMemorySection />

        {/* 11 — Cápsula do Tempo */}
        <TimeCapsuleSection />

        {/* Mensagem em Áudio e Voz Pessoal */}
        <VoiceMessage />

        {/* 12 — O Segredo */}
        <SecretSection onUnlock={() => {}} />

        {/* 13 — A Surpresa Final */}
        <div id="surpresa">
          <FinalSurprise />
        </div>

        {/* 14 — Carta Final & Encerramento */}
        <FinalLetterSection />
      </main>

      {/* Footer */}
      <Footer onStarClick={handleStarClick} />

      {/* Easter Egg Modal */}
      <EasterEggsModal
        isOpen={easterEggOpen}
        onClose={() => setEasterEggOpen(false)}
        eggType={easterEggType}
      />
    </div>
  );
}
