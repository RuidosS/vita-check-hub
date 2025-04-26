
import { Check } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      title: "Requisita o teu kit de colheita",
      description: "Recebe o kit em casa e faz a colheita em menos de 5 minutos."
    },
    {
      title: "Envia as amostras",
      description: "Usa o envelope pré-pago para enviar as amostras ao laboratório."
    },
    {
      title: "Análise laboratorial",
      description: "Os nossos especialistas analisam mais de 60 biomarcadores."
    },
    {
      title: "Resultados claros",
      description: "Recebe um relatório detalhado com insights personalizados."
    },
    {
      title: "Plano de ação",
      description: "Obtém recomendações práticas para melhorar a tua saúde."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mais de 60 análises laboratoriais para monitorizar, proteger e otimizar a sua saúde ano após ano.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
