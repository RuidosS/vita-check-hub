
import React from "react";

export const HealthEvolution = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Vê como as tuas escolhas transformam a tua saúde.
          </h2>
          <p className="text-xl text-muted-foreground">
            Pequenas mudanças hoje. Grandes resultados amanhã. Acompanha a evolução mês após mês.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Mockup de dispositivo móvel com gráfico de evolução */}
          <div className="bg-white rounded-3xl shadow-xl p-3 border-8 border-gray-800 w-full max-w-xs">
            <div className="bg-gray-100 rounded-2xl p-4 h-[500px] flex flex-col">
              <div className="bg-primary/10 rounded-xl p-3 mb-4">
                <h3 className="text-sm font-medium mb-1">Evolução - ApoB</h3>
                <div className="h-40 bg-white rounded-lg p-2">
                  {/* Representação gráfica simplificada */}
                  <div className="h-full flex items-end">
                    <div className="w-1/4 h-[60%] bg-primary/30 rounded-t-md mx-0.5"></div>
                    <div className="w-1/4 h-[70%] bg-primary/50 rounded-t-md mx-0.5"></div>
                    <div className="w-1/4 h-[55%] bg-primary/70 rounded-t-md mx-0.5"></div>
                    <div className="w-1/4 h-[45%] bg-primary rounded-t-md mx-0.5"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Jun</span>
                    <span>Set</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 rounded-xl p-3">
                <h3 className="text-sm font-medium mb-1">Evolução - HDL</h3>
                <div className="h-40 bg-white rounded-lg p-2">
                  {/* Representação gráfica simplificada */}
                  <div className="h-full flex items-end">
                    <div className="w-1/4 h-[40%] bg-primary/30 rounded-t-md mx-0.5"></div>
                    <div className="w-1/4 h-[50%] bg-primary/50 rounded-t-md mx-0.5"></div>
                    <div className="w-1/4 h-[60%] bg-primary/70 rounded-t-md mx-0.5"></div>
                    <div className="w-1/4 h-[70%] bg-primary rounded-t-md mx-0.5"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Jun</span>
                    <span>Set</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
