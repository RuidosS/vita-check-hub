
import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Membership = () => {
  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cuida da tua saúde como quem cuida do seu maior ativo.
          </h2>
          <div className="mb-8 space-y-6">
            <p className="text-xl">Junta-te à Ōuma Health Adesão:</p>
            <ul className="space-y-2 text-lg">
              <li>- Testes laboratoriais</li>
              <li>- Planos personalizados</li>
              <li>- Acompanhamento contínuo</li>
            </ul>
            <p className="text-lg font-medium">
              Sem complicações. Sem surpresas. Sem bullshit.
            </p>
          </div>
          <button 
            onClick={goToWaitlist}
            className="btn-primary inline-flex items-center gap-2 text-white"
          >
            Junta-te à Lista de Espera
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
