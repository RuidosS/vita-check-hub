
import { Clock, FileSearch, Check } from 'lucide-react';

export const ServiceSteps = () => {
  const steps = [
    {
      title: "Agenda a tua colheita de análises",
      description: "Agenda facilmente as tuas análises num dos nossos laboratórios parceiros.",
      icon: Clock
    },
    {
      title: "Recebe o teu resumo clínico",
      description: "Recebe insights claros e recomendações práticas baseadas nos teus resultados.",
      icon: FileSearch
    },
    {
      title: "Acompanha a evolução",
      description: "Acompanha a evolução da tua saúde ao longo dos anos.",
      icon: Check
    }
  ];

  return (
    <section className="py-16 bg-white" id="como-funciona">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
        </div>
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
