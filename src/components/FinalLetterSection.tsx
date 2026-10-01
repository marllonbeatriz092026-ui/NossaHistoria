import React from 'react';
import { finalLetterData } from '../data/finalLetter';
import { siteConfig } from '../data/siteConfig';
import { BunnyIcon } from './BunnyIcon';
import { Heart } from 'lucide-react';

export const FinalLetterSection: React.FC = () => {
  return (
    <section id="carta-final" className="py-28 px-4 sm:px-6 relative bg-[#0D0C0B]">
      <div className="max-w-4xl mx-auto">
        {/* Section Kicker */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>14</span>
            <span>·</span>
            <span>Encerramento</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            {finalLetterData.title}
          </h2>
          <p className="text-base font-serif italic text-[#A89F97]">
            {finalLetterData.subtitle}
          </p>
        </div>

        {/* Clean Editorial Letter Container */}
        <div className="bg-[#141211] border border-[#2B2421] p-8 sm:p-16 rounded-sm shadow-2xl relative mb-24">
          {/* Subtle top stamp */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#241E1B] text-xs font-vintage-mono text-[#78716C]">
            <span>DOCUMENTO DE AMOR ETERNO</span>
            <div className="flex items-center gap-2 text-[#C8A97E]">
              <BunnyIcon className="w-4 h-4" />
              <span>{siteConfig.partnerName.toUpperCase()}</span>
            </div>
          </div>

          {/* Lead Paragraph */}
          <p className="text-xl sm:text-2xl font-serif text-[#FBF9F5] leading-relaxed mb-8 italic">
            "{finalLetterData.leadParagraph}"
          </p>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg font-serif text-[#D6CFCA] leading-relaxed">
            {finalLetterData.bodyParagraphs.map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Signature */}
          <div className="mt-12 pt-8 border-t border-[#241E1B] text-right">
            <p className="font-handwriting text-3xl sm:text-4xl text-[#C8A97E] mb-2">
              {finalLetterData.signature}
            </p>
            {finalLetterData.psNote && (
              <p className="text-xs font-vintage-mono text-[#8C827A] italic mt-4">
                {finalLetterData.psNote}
              </p>
            )}
          </div>
        </div>

        {/* Grand Final Closing with Generous Negative Space */}
        <div className="text-center py-20 border-t border-[#221D1A]">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#E5DFD7] tracking-wide mb-6">
            {finalLetterData.closingHeading}
          </h3>

          <div className="text-3xl sm:text-5xl font-vintage-mono font-light text-[#C8A97E] tracking-widest mb-6">
            {finalLetterData.closingInfinity}
          </div>

          <div className="font-handwriting text-4xl sm:text-5xl text-[#A84351] flex items-center justify-center gap-3">
            <span>{finalLetterData.closingLove}</span>
            <Heart className="w-5 h-5 fill-current" />
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#6A615A]">
            <BunnyIcon className="w-4 h-4 text-[#C8A97E]" />
            <span>Para todo o sempre.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
