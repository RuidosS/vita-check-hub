
export const CompleteHealth = () => {
  const features = [
    "Mais de 60 análises laboratoriais.",
    "Avaliação de milhares de potenciais doenças e desequilíbrios.",
    "Interpretação médica especializada.",
    "Relatórios claros e acionáveis."
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          A visão mais completa da sua saúde
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
