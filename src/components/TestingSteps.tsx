
import React from 'react';
import { Card, CardContent } from './ui/card';

export const TestingSteps = () => {
  const steps = [
    {
      step: "Passo 1",
      title: "Agenda instantaneamente os teus testes laboratoriais",
      description: "Garante um horário num dos laboratórios parceiros"
    },
    {
      step: "Passo 2",
      title: "Visitas rápidas de laboratório, com uma média de 15 minutos",
      description: "Incluímos o custo de duas visitas por ano, com análise de mais de 100 biomarcadores"
    },
    {
      step: "Passo 3",
      title: "Resultados poderosos",
      description: "Monitoriza sinais precoces de doença e descobre onde e como podes melhorar"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Testar é fácil
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                {/* Image placeholder - aspect ratio 16:9 */}
                <div className="w-full aspect-[16/9] bg-muted rounded-lg mb-6"></div>
                <div className="space-y-4">
                  <span className="text-primary font-semibold">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-lg">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
