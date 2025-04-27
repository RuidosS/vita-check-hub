
import React from "react";
import { ChartLine } from "lucide-react";

export const BiomarkersIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <ChartLine className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Os teus biomarcadores: a verdadeira fotografia da tua saúde.</h2>
          </div>
          
          <p className="text-xl text-gray-800 mb-8">
            Cada biomarcador conta uma história única sobre o teu corpo.
            Monitorizamos os indicadores mais importantes para que possas agir hoje e cuidar do teu futuro.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Interpreta facilmente os teus resultados:</h3>
            <ul className="text-left list-disc pl-8 space-y-2">
              <li className="text-gray-800">Vê se cada valor está dentro do intervalo ideal.</li>
              <li className="text-gray-800">Entende o significado por trás de cada número.</li>
              <li className="text-gray-800">Acompanha a tua evolução ao longo do tempo.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
