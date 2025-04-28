
import React from 'react';
import { Card, CardContent } from './ui/card';

export const TestingSteps = () => {
  const steps = [
    {
      step: "Passo 1",
      title: "Agenda instantaneamente os teus testes laboratoriais",
      description: "Garante um horário num dos laboratórios parceiros",
      image: "/lovable-uploads/86693b73-f68f-41bf-adcc-a0b600061df4.png",
      alt: "Agendar Teste"
    },
    {
      step: "Passo 2",
      title: "Visitas rápidas de laboratório, com uma média de 15 minutos",
      description: "Incluímos o custo de duas visitas por ano, com análise de mais de 100 biomarcadores",
      image: "/lovable-uploads/51e635fb-a674-46e1-9d02-3667b07b2b47.png",
      alt: "Visita Laboratório"
    },
    {
      step: "Passo 3",
      title: "Resultados poderosos",
      description: "Monitoriza sinais precoces de doença e descobre onde e como podes melhorar",
      image: "/lovable-uploads/c4cb9b90-5f28-4fa7-9026-74dea217bb4e.png",
      alt: "Resultados Poderosos"
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
              <CardContent className="flex flex-col items-center p-0">
                <div className="w-full h-96 mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4 text-center px-4">
                  <span className="text-primary font-semibold">{step.step}</span>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
