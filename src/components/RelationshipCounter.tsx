import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { relationshipData } from '../data/relationship';
import { BunnyIcon } from './BunnyIcon';
import { Sparkles, Calendar } from 'lucide-react';

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const RelationshipCounter: React.FC = () => {
  const [elapsed, setElapsed] = useState<TimeElapsed>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [daysUntilNextChapter, setDaysUntilNextChapter] = useState<number>(0);

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(siteConfig.relationshipStartDate);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        // Obter número de dias no mês anterior
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setElapsed({
        years: Math.max(0, years),
        months: Math.max(0, months),
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
      });

      // Calcular tempo até o próximo capítulo
      const nextDate = new Date(siteConfig.nextChapterDate);
      const diffTime = nextDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysUntilNextChapter(diffDays > 0 ? diffDays : 0);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Anos", value: elapsed.years },
    { label: "Meses", value: elapsed.months },
    { label: "Dias", value: elapsed.days },
    { label: "Horas", value: elapsed.hours },
    { label: "Minutos", value: elapsed.minutes },
    { label: "Segundos", value: elapsed.seconds },
  ];

  return (
    <section id="tempo" className="py-24 px-4 sm:px-6 relative bg-[#121110] border-b border-[#24201D]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-vintage-mono text-[#C8A97E] tracking-[0.25em] uppercase mb-3">
            <span>02</span>
            <span>·</span>
            <span>Nosso Tempo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#FBF9F5] tracking-tight mb-4">
            Estamos Juntos Há
          </h2>
          <p className="text-sm font-sans text-[#A89F97] max-w-md mx-auto">
            Cada segundo registrado desde {relationshipData.startDateDisplay}, construindo nossa eternidade.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-[#181615] border border-[#2E2825] p-5 sm:p-6 text-center rounded-sm transition-all duration-300 hover:border-[#C8A97E]/40 group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#FBF9F5] group-hover:text-[#C8A97E] transition-colors tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-[11px] font-vintage-mono text-[#8C827A] uppercase tracking-widest mt-2">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* Romantic Subtext Quote */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-lg sm:text-xl font-serif italic text-[#E5DFD7]">
            "{relationshipData.counterSubtext}"
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-vintage-mono text-[#C8A97E]">
            <BunnyIcon className="w-3.5 h-3.5" />
            <span>{relationshipData.signaturePhrase}</span>
          </div>
        </div>

        {/* Next Chapter Banner */}
        <div className="max-w-2xl mx-auto bg-[#161413] border border-[#332B27] p-6 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-sm bg-[#4A1521]/30 border border-[#661B28]/50 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div>
              <div className="text-[10px] font-vintage-mono uppercase tracking-widest text-[#C8A97E] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Nosso Próximo Capítulo</span>
              </div>
              <h3 className="text-sm font-serif text-[#FBF9F5] mt-0.5">
                {siteConfig.nextChapterTitle}
              </h3>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-2xl font-serif text-[#FBF9F5] tabular-nums font-bold">
              {daysUntilNextChapter}
            </span>
            <span className="text-xs font-vintage-mono text-[#A89F97] ml-1.5 uppercase">
              dias restantes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
