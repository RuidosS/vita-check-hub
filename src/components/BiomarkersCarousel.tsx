
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const BiomarkersCarousel = () => {
  const biomarkers = [
    {
      value: "43",
      unit: "",
      name: "BIOLOGICAL AGE",
      description: "5 years younger than your calendar age",
      dates: ["Jun 22", "Dec 23", "Jun 24"]
    },
    {
      value: "98",
      unit: "mg/dL",
      name: "ApoB",
      description: "Transport lipids in the bloodstream. Risk marker for heart disease.",
      dates: ["Sep 25", "Feb 26", "Sep 27"]
    },
    {
      value: "42",
      unit: "ng/mL",
      name: "VITAMIN D",
      description: "Essential for immune system and bone health.",
      dates: ["Mar 23", "Sep 23", "Mar 24"]
    },
    {
      value: "650",
      unit: "ng/dL",
      name: "TESTOSTERONE",
      description: "Hormone critical for muscle, energy and vitality.",
      dates: ["Jan 23", "Jul 23", "Jan 24"]
    },
    {
      value: "115",
      unit: "µg/dL",
      name: "FERRITIN",
      description: "Iron storage protein. Key for energy production.",
      dates: ["Apr 23", "Oct 23", "Apr 24"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="relative">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
              skipSnaps: false,
              plugins: [
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false
                })
              ]
            }}
          >
            <CarouselContent className="-ml-4">
              {biomarkers.map((biomarker, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-bold">{biomarker.value}</span>
                        <span className="text-sm text-muted-foreground">{biomarker.unit}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{biomarker.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{biomarker.description}</p>
                      
                      <div className="relative h-12 w-full">
                        {/* Simple graph visualization */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-muted-foreground/20"></div>
                        <div className="relative h-full flex items-end justify-between">
                          {biomarker.dates.map((date, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div className="h-2 w-2 rounded-full bg-primary mb-1"></div>
                              <span className="text-xs text-muted-foreground">{date}</span>
                            </div>
                          ))}
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

