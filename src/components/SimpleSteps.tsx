
export const SimpleSteps = () => {
  const steps = [
    {
      number: "1",
      description: "Agende a sua colheita de análises online em poucos minutos."
    },
    {
      number: "2",
      description: "A sua visita ao laboratório dura, em média, apenas 15 minutos."
    },
    {
      number: "3",
      description: "Receba resultados poderosos que ajudam a identificar sinais precoces de doenças e oportunidades de melhoria."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testar é simples
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <p className="text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
