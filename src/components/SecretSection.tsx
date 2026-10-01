import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Lock, Unlock, KeyRound, Sparkles, Heart } from 'lucide-react';
import { BunnyIcon } from './BunnyIcon';
import confetti from 'canvas-confetti';

interface SecretSectionProps {
  onUnlock?: () => void;
}

export const SecretSection: React.FC<SecretSectionProps> = ({ onUnlock }) => {
  const [passphrase, setPassphrase] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = passphrase.trim().toLowerCase();
    const cleanTarget = siteConfig.secretPassphrase.trim().toLowerCase();

    if (cleanInput === cleanTarget) {
      setIsUnlocked(true);
      setErrorMsg('');
      confetti({
        particleCount: 70,
        spread: 80,
        colors: ['#C8A97E', '#4A1521', '#FBF9F5', '#E5DFD7']
      });
      if (onUnlock) onUnlock();
    } else {
      setErrorMsg('Palavra incorreta... Olhe a dica com carinho!');
    }
  };

  return (
    <section id="segredo" className="py-24 px-4 sm:px-6 relative bg-[#0E0D0C] border-b border-[#24201D]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
          <KeyRound className="w-3.5 h-3.5" />
          <span>Capítulo 12</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
          O Nosso Segredo
        </h2>

        <p className="text-sm font-sans text-[#A89F97] max-w-md mx-auto mb-10">
          Uma gaveta digital trancada que só abre com a chave certa.
        </p>

        {/* Vault Container */}
        <div className="bg-[#171514] border border-[#2E2825] p-8 sm:p-12 rounded-sm shadow-2xl relative">
          {!isUnlocked ? (
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#11100F] border border-[#3D3530] flex items-center justify-center mx-auto text-[#C8A97E]">
                <Lock className="w-6 h-6 text-[#A84351]" />
              </div>

              <div>
                <h3 className="text-xl font-serif text-[#FBF9F5] mb-2">
                  Qual é a palavra-chave?
                </h3>
                <p className="text-xs font-sans text-[#A89F97]">
                  Dica: <span className="text-[#C8A97E] italic">{siteConfig.secretHint}</span>
                </p>
              </div>

              <form onSubmit={handleVerify} className="max-w-xs mx-auto space-y-3">
                <input
                  type="text"
                  value={passphrase}
                  onChange={(e) => setPassphrase(e.target.value)}
                  placeholder="Digite aqui..."
                  className="w-full px-4 py-2.5 bg-[#100F0E] border border-[#332A26] rounded-sm text-center text-sm font-vintage-mono text-[#FBF9F5] focus:outline-none focus:border-[#C8A97E]"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#4A1521] hover:bg-[#661B28] text-xs font-vintage-mono uppercase tracking-wider text-[#FBF9F5] rounded-sm border border-[#C8A97E]/30 transition-colors"
                >
                  Abrir Cofre
                </button>
              </form>

              {errorMsg && (
                <p className="text-xs font-vintage-mono text-[#E06D7C] animate-fadeIn">
                  {errorMsg}
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="flex items-center justify-between border-b border-[#2C2421] pb-4">
                <div className="flex items-center gap-2 text-xs font-vintage-mono text-[#85A67C]">
                  <Unlock className="w-4 h-4" />
                  <span>SEGREDO DESBLOQUEADO</span>
                </div>
                <BunnyIcon className="w-5 h-5 text-[#C8A97E]" />
              </div>

              <div className="p-4 bg-[#121110] border border-[#C8A97E]/40 rounded-sm">
                <p className="font-handwriting text-2xl text-[#C8A97E] mb-3">
                  "Você é a única dona desse cofre e do meu coração inteiro."
                </p>
                <p className="text-sm font-serif text-[#D8D1C7] leading-relaxed">
                  Eu preparei cada vírgula, cada foto e cada detalhe deste site pensando no seu sorriso. Mesmo quando tudo ao nosso redor parece corrido e caótico, lembrar de você é o meu lugar de paz absoluta. Te amo com tudo o que sou!
                </p>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setIsUnlocked(false)}
                  className="text-xs font-vintage-mono text-[#8C827A] hover:text-[#FBF9F5] transition-colors"
                >
                  Trancar cofre novamente
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
