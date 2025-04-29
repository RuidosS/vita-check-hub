
import React from 'react';

export const BiomarkersIntro = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12">
            O teu corpo fala. Aprende a ouvi-lo — com ciência.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[70ch] mx-auto leading-relaxed">
            Cada biomarcador é um sinal.
            Agora podes ver, compreender e agir com clareza sobre o que o teu corpo te está a dizer.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-8 max-w-[70ch] mx-auto leading-relaxed">
            Energia, sono, peso, libido, foco mental — tudo começa dentro de ti.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-4">
          </h3>
          {/* The BiomarkersCarousel component will render here */}
        </div>
      </div>
    </section>
  );
};
