
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const WaitlistForm = () => {
  const location = useLocation();

  // Efeito para rolar até ao formulário quando navegado a partir de outras páginas
  useEffect(() => {
    if (location.state && location.state.scrollToForm) {
      const formElement = document.getElementById('waitlist-form');
      if (formElement) {
        setTimeout(() => {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.state]);

  // Add Tally script to the document when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-8" id="waitlist-form">
      <div className="container-custom max-w-lg relative z-10">
        <div className="bg-black/60 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-xl border border-[#FF6B00]/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Junta-te à lista de espera</h2>
            <p className="text-white/80">Preenche os dados abaixo para garantir o teu lugar</p>
          </div>
          
          {/* Tally.so Embed */}
          <iframe
            data-tally-src="https://tally.so/r/3xgWJd"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Inscrição Ōuma Health"
            style={{
              borderRadius: "8px",
              background: "transparent"
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
