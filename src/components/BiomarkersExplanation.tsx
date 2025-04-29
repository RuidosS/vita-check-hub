
import React from 'react';
import { Dna } from 'lucide-react';

export const BiomarkersExplanation = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Dna className="h-16 w-16 text-primary" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">O que são biomarcadores?</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-[70ch]">
                Biomarcadores são dados do teu sangue que dizem como está a tua saúde — desde os níveis de vitaminas, 
                hormonas e inflamação até sinais silenciosos de doenças como diabetes, problemas da tiroide ou 
                desequilíbrios hormonais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[70ch]">
                Quando analisamos mais de 100 biomarcadores, estamos a procurar pistas que o teu corpo já está a dar, 
                mesmo antes de sentires sintomas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
