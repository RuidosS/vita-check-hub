
import React from 'react';
import { BiomarkersCarousel } from './BiomarkersCarousel';

export const BiomarkersIntro = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O teu corpo fala. Aprende a ouvi-lo — com ciência.
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada biomarcador é um sinal.
            Agora podes ver, compreender e agir com clareza sobre o que o teu corpo te está a dizer.
            <br /><br />
            Energia, sono, peso, libido, foco mental — tudo começa dentro de ti.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Exemplos do que podemos medir:
          </h3>
          <BiomarkersCarousel />
        </div>
      </div>
    </section>
  );
};
