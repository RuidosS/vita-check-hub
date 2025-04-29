import React, { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEmblaCarousel } from 'embla-carousel-react';

export const BiomarkersCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
    skipSnaps: false, // Important!
  });

  useEffect(() => {
    if (!emblaApi) return;

    let rafId: number;

    const scroll = () => {
      if (emblaApi) {
        emblaApi.scrollBy(0.5); // <-- move 0.5 pixel per frame (smooth!)
      }
      rafId = requestAnimationFrame(scroll);
    };

    scroll(); // Start scrolling

    return () => cancelAnimationFrame(rafId); // Clean up
  }, [emblaApi]);

  const biomarkers = [
    // your biomarker list as before
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="relative">
          <div ref={emblaRef}>
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
          </div>
        </div>
      </div>
    </section>
  );
};
