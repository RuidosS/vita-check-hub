
import { Check, Clock, FileSearch } from 'lucide-react';

export const ServiceSteps = () => {
  const steps = [
    {
      title: "Marque a sua colheita de análises",
      description: "Agende facilmente as suas análises laboratoriais numa dos laboratórios parceiros.",
      icon: Clock
    },
    {
      title: "Receba os seus resultados",
      description: "Aceda a um resumo clínico personalizado, insights baseados em investigação médica e receba contacto imediato em caso de resultados críticos.",
      icon: FileSearch
    },
    {
      title: "Aja e acompanhe a sua evolução",
      description: "Acompanhe os seus resultados ao longo do tempo e tome decisões informadas para manter a sua saúde no seu melhor.",
      icon: Check
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-start p-6 bg-muted rounded-lg hover:shadow-md transition-shadow">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
