
import React from 'react';

export const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            A nova forma de cuidar da tua saúde.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Cruzamos análises laboratoriais avançadas com ciência de saúde funcional, longevidade, biologia e bioquímica clínica.
            </p>
            <p>
              Recebes um plano de ação prático, focado em nutrição, suplementação, sono e estilo de vida — baseado nos teus dados, não em achismos.
            </p>
            <p className="font-medium">
              Simples. Claro. Pessoal. Sem medicalês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
