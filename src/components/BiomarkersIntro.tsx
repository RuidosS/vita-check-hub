
import React from "react";
import { ChartLine } from "lucide-react";

export const BiomarkersIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <ChartLine className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">O teu corpo fala. Aprende a ouvi-lo.</h2>
          </div>
          
          <p className="text-xl text-gray-800 mb-8">
            Cada biomarcador conta uma história. Energia, hormonas, inflamação, metabolismo — agora podes ver tudo com clareza.
          </p>
        </div>
      </div>
    </section>
  );
};
