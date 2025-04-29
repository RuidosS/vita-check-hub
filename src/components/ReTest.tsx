
import React from "react";
import { HealthEvolution } from "./HealthEvolution";
import { TrendingUp, Activity } from "lucide-react";

export const ReTest = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HealthEvolution />
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50 p-8 rounded-[30px] shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Background decoration elements */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-r from-amber-100/30 to-blue-100/30"></div>
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-orange-100/50"></div>
              <div className="absolute -bottom-16 -left-10 w-32 h-32 rounded-full bg-blue-100/50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-6 w-6 text-amber-500" />
                  <h3 className="text-2xl font-bold">Evolução da Vitamina D</h3>
                </div>
                
                <div className="text-5xl font-bold mb-1 text-gray-800">33%</div>
                <p className="text-gray-500 mb-5">de melhoria em 12 meses</p>
                
                {/* Timeline */}
                <div className="relative mt-8 pt-8">
                  <div className="absolute top-0 left-4 right-4 h-px bg-gray-200"></div>
                  
                  <div className="flex justify-between">
                    {/* June 22 */}
                    <div className="text-center">
                      <div className="flex justify-center">
                        <div className="h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-200"></div>
                      </div>
                      <div className="mt-2">
                        <div className="font-bold text-2xl">28</div>
                        <div className="text-sm text-gray-500">Jun 22</div>
                      </div>
                    </div>
                    
                    {/* Dec 23 */}
                    <div className="text-center">
                      <div className="flex justify-center">
                        <div className="h-3 w-3 rounded-full bg-amber-500 ring-2 ring-amber-200"></div>
                      </div>
                      <div className="mt-2">
                        <div className="font-bold text-2xl">35</div>
                        <div className="text-sm text-gray-500">Dez 23</div>
                      </div>
                    </div>
                    
                    {/* June 24 */}
                    <div className="text-center">
                      <div className="flex justify-center">
                        <div className="h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-200"></div>
                      </div>
                      <div className="mt-2">
                        <div className="font-bold text-2xl">42</div>
                        <div className="text-sm text-gray-500">Jun 24</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-700">Dentro da faixa ideal (30-100 ng/mL)</span>
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
