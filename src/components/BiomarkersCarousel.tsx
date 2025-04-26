
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export const BiomarkersCarousel = () => {
  const biomarkers = [
    {
      name: "CORTISOL",
      description: "Hormona do stress e energia",
      color: "bg-[#FB923C]"
    },
    {
      name: "HDL CHOLESTEROL",
      description: "Colesterol bom",
      color: "bg-[#6366F1]"
    },
    {
      name: "VITAMIN D",
      description: "Essencial para ossos e imunidade",
      color: "bg-[#22C55E]"
    },
    {
      name: "TESTOSTERONE",
      description: "Hormona vital para energia e força",
      color: "bg-[#FB923C]"
    },
    {
      name: "IRON",
      description: "Fundamental para energia",
      color: "bg-[#6366F1]"
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Biomarcadores em Destaque
        </h2>
        <div className="relative">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent className="-ml-4">
              {biomarkers.map((biomarker, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${biomarker.color} mb-4 opacity-20`} />
                      <h3 className="font-semibold text-lg mb-2">{biomarker.name}</h3>
                      <p className="text-muted-foreground">{biomarker.description}</p>
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
