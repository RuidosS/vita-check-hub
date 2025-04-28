
import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom';

export const CompleteHealth = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };
  
  return (
    <section className="py-24 bg-muted">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serviço completo para a sua saúde
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nossa plataforma de saúde contínua monitoriza dezenas de 
            biomarcadores que afetam sua saúde ao longo do tempo. 
            Acesse dados e recomendações personalizadas para otimizar seu bem-estar.
          </p>
          <Button 
            onClick={handleClick}
            className="px-8 py-6 text-lg"
          >
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
