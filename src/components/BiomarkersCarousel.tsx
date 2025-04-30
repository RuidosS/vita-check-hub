
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export const BiomarkersCarousel = () => {
  const biomarkers = [
    {
      value: "43",
      unit: "",
      name: "IDADE BIOLÓGICA",
      description: "Entende o verdadeiro ritmo do teu corpo.",
      dates: ["Jun 22", "Dec 23", "Jun 24"],
      image: "/lovable-uploads/79b71c3b-feb1-407d-b19f-b98bf45c6559.png",
      testimonial: "Os resultados sugeriram uma idade biológica mais elevada. Com algumas mudanças no estilo de vida, senti melhorias reais."
    },
    {
      value: "650",
      unit: "ng/dL",
      name: "TESTOSTERONA",
      description: "Energia, força e vitalidade.",
      dates: ["Jan 23", "Jul 23", "Jan 24"],
      image: "/lovable-uploads/bb28bc46-c3c2-4d8a-b150-ed7c46e0622d.png",
      testimonial: "Senti alterações no meu bem-estar. Ao analisar os níveis hormonais, consegui compreender melhor o que se passava."
    },
    {
      value: "115",
      unit: "ng/mL",
      name: "FERRITINA",
      description: "Energia e armazenamento de ferro.",
      dates: ["Apr 23", "Oct 23", "Apr 24"],
      image: "/lovable-uploads/c06cf3d5-1f76-4b27-8bae-c887bd196a97.png",
      testimonial: "Sentia cansaço frequente. Os testes apontaram níveis de ferritina mais baixos, o que ajudou a ajustar a alimentação e os meus treinos."
    },
    {
      value: "98",
      unit: "mg/dL",
      name: "ApoB",
      description: "Transporte de lípidos na corrente sanguínea.",
      dates: ["Sep 23", "Mar 24", "Sep 24"],
      image: "/lovable-uploads/da611cc7-eeb5-4ed3-8372-08b3f911fb67.png",
      testimonial: "Tendo histórico familiar, quis investigar. Ver o ApoB ajudou-me a tomar decisões mais informadas sobre o meu futuro."
    },
    {
      value: "42",
      unit: "ng/mL",
      name: "VITAMINA D",
      description: "Essencial para o sistema imunitário.",
      dates: ["Mar 23", "Sep 23", "Mar 24"],
      image: "/lovable-uploads/16d9e705-82be-40c0-abde-4308b771a573.png",
      testimonial: "Tinha sintomas inespecíficos. A análise mostrou níveis baixos de vitamina D — uma peça do puzzle que fez sentido para mim."
    }
  ];

  const plugin = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    playOnInit: true,
  });

  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="relative">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              skipSnaps: true,
              inViewThreshold: 0,
            }}
            plugins={[plugin]}
          >
            <CarouselContent className="-ml-4">
              {biomarkers.map((biomarker, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden relative h-[400px]">
                    <CardContent className="p-0 relative h-full">
                      <div 
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: `url(${biomarker.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10" />
                      <div className="relative z-20 p-6 h-full flex flex-col justify-between text-white">
                        <div>
                          <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-4xl font-bold text-white">{biomarker.value}</span>
                            <span className="text-sm opacity-80 text-white">{biomarker.unit}</span>
                          </div>
                          <h3 className="font-semibold text-lg mb-1 text-white">{biomarker.name}</h3>
                          <p className="text-sm opacity-90 mb-4 text-white">{biomarker.description}</p>
                        </div>
                        
                        <div>
                          {/* Testimonial with quote icon */}
                          <div className="bg-black/40 backdrop-blur-sm p-3 rounded-lg mb-4">
                            <div className="flex items-start">
                              <span className="text-2xl text-primary mr-2">"</span>
                              <p className="text-sm italic text-white">{biomarker.testimonial}</p>
                              <span className="text-2xl text-primary ml-1">"</span>
                            </div>
                          </div>
                          
                          {/* Timeline */}
                          <div className="relative h-12 w-full mt-auto">
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
                            <div className="relative h-full flex items-end justify-between">
                              {biomarker.dates.map((date, i) => (
                                <div key={i} className="flex flex-col items-center">
                                  <div className="h-2 w-2 rounded-full bg-white mb-1"></div>
                                  <span className="text-xs text-white">{date}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
