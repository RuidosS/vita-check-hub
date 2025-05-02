
import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

export const HealthEvolution = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Vê como as tuas escolhas transformam a tua saúde.
          </h2>
          <p className="text-xl text-muted-foreground">
            Pequenas mudanças hoje. Grandes transformações ao longo do tempo. Acompanha a tua evolução.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-[40px] shadow-xl p-6 border-[12px] border-gray-900 w-full max-w-sm">
            <div className="bg-gray-50 rounded-3xl p-4 h-[600px] flex flex-col gap-4 overflow-y-auto">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">Rácio Colesterol Total / HDL</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 hover:bg-green-200 text-green-600">2.9</Badge>
                      <span className="text-xs text-muted-foreground">Ideal: &lt;5.0</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
                <div className="relative mt-4">
                  <div className="h-2 w-full bg-green-100 rounded-full">
                    <div className="h-2 w-[60%] bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Um rácio mais baixo indica menor risco cardiovascular.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">Triglicerídeos</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 hover:bg-green-200 text-green-600">99 mg/dL</Badge>
                      <span className="text-xs text-muted-foreground">Ideal: &lt;150 mg/dL</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
                <div className="relative mt-4">
                  <div className="h-2 w-full bg-green-100 rounded-full">
                    <div className="h-2 w-[70%] bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">HDL</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 hover:bg-green-200 text-green-600">65 mg/dL</Badge>
                      <span className="text-xs text-muted-foreground">Ideal: &gt;40 mg/dL</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
                <div className="relative mt-4">
                  <div className="h-2 w-full bg-green-100 rounded-full">
                    <div className="h-2 w-[80%] bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">Homocisteína</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-100 hover:bg-red-200 text-red-600">16.2 µmol/L</Badge>
                      <span className="text-xs text-muted-foreground">Ideal: &lt;12 µmol/L</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
                <div className="relative mt-4">
                  <div className="h-2 w-full bg-red-100 rounded-full">
                    <div className="h-2 w-[85%] bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Níveis elevados podem indicar risco cardiovascular aumentado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
