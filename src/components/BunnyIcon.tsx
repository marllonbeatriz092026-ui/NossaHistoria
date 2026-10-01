import React from 'react';

interface BunnyIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

/**
 * Ícone elegante e minimalista de coelhinho desenhado em vetor contínuo
 */
export const BunnyIcon: React.FC<BunnyIconProps> = ({
  className = "w-5 h-5",
  size = 20,
  strokeWidth = 1.5
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Orelha esquerda estilizada */}
      <path d="M8 3c-1.5 2-2 5-1 8" />
      {/* Orelha direita estilizada */}
      <path d="M12 2.5c1.8 2.2 2 5.5 1 8.5" />
      {/* Cabeça e focinho fofo */}
      <path d="M7 11c-2 1.5-2.5 4-1 6 1.5 2 4.5 2.5 7 1.5 2.5-1 3.5-3.5 2.5-5.5-.8-1.5-2.5-2-4.5-2" />
      {/* Narizinho */}
      <circle cx="9" cy="14" r="0.75" fill="currentColor" />
      {/* Bigodinhos sutis */}
      <path d="M5.5 14.5l-2-.5" />
      <path d="M5.5 15.5l-1.8.8" />
      <path d="M12.5 14.5l2-.5" />
      <path d="M12.5 15.5l1.8.8" />
      {/* Rabinho pompom */}
      <circle cx="16.5" cy="18" r="1.2" />
    </svg>
  );
};
