
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
      name: "BIOLOGICAL AGE",
      description: "Entende o verdadeiro ritmo do teu corpo.",
      dates: ["Jun 22", "Dec 23", "Jun 24"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    },
    {
      value: "650",
      unit: "ng/dL",
      name: "TESTOSTERONE",
      description: "Energia, força e vitalidade.",
      dates: ["Jan 23", "Jul 23", "Jan 24"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
      value: "115",
      unit: "ng/mL",
      name: "FERRITIN",
      description: "Energia e armazenamento de ferro.",
      dates: ["Apr 23", "Oct 23", "Apr 24"],
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1890&auto=format&fit=crop"
    },
    {
      value: "98",
      unit: "mg/dL",
      name: "ApoB",
      description: "Transporte de lípidos na corrente sanguínea.",
      dates: ["Sep 23", "Mar 24", "Sep 24"],
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1887&auto=format&fit=crop"
    },
    {
      value: "42",
      unit: "ng/mL",
      name: "VITAMIN D",
      description: "Essencial para o sistema imunitário.",
      dates: ["Mar 23", "Sep 23", "Mar 24"],
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
    }
  ];

  const plugin = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    playOnInit: true,
  });

  return (
    <section className="py-16">
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
