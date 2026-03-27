import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';

export const HomeContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#020617] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <SubpageContactSection
          kicker="Zacznijmy współpracę"
          title="Napisz"
          highlightedTitle="do nas"
          description="Przekaż nam podstawowe informacje — wrócimy z odpowiedzią i propozycją kolejnych kroków w ciągu 24h."
          messagePlaceholder="Opisz krótko czego potrzebujesz (typ obiektu, lokalizacja, liczba miejsc, dostępna moc)..."
        />
      </div>
    </section>
  );
};

