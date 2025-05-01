
import React from 'react';
import { 
  Heart, 
  Activity, 
  Flame, 
  CircleDot, 
  Droplet,
  Sun, 
  Brain, 
  Clock,
  FlaskRound
} from 'lucide-react';

interface DiseaseCardProps {
  title: string;
  icon: React.ElementType;
  imageUrl: string;
}

const DiseaseCard = ({ title, icon: Icon, imageUrl }: DiseaseCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg cursor-pointer group">
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-56 p-6 flex flex-col justify-end items-center text-center">
        <div className="mb-3 p-2 bg-black/50 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-bold text-white text-lg">{title}</h3>
      </div>
    </div>
  );
};

export const SilentDiseases = () => {
  const diseases = [
    {
      title: "Doença Cardiovascular",
      icon: Heart,
      imageUrl: "/lovable-uploads/b2a96be8-1c97-4c40-bf71-cb2d1a9b028c.png"
    },
    {
      title: "Diabetes Tipo 2",
      icon: Activity,
      imageUrl: "/lovable-uploads/7f80cac3-ff5e-475e-8f7b-05a071181ce1.png"
    },
    {
      title: "Cancro do Cólon",
      icon: CircleDot,
      imageUrl: "/lovable-uploads/f9be680b-92a7-42f9-bc03-522e96bfc594.png"
    },
    {
      title: "Inflamação Crónica",
      icon: Flame,
      imageUrl: "/lovable-uploads/63e953de-1911-48f2-86b5-c455c7a751ec.png"
    },
    {
      title: "Síndrome do Ovário Poliquístico",
      icon: CircleDot,
      imageUrl: "/lovable-uploads/e23d74f6-9a79-435f-b81c-fde9e9c458f5.png"
    },
    {
      title: "Deficiência de Vitamina D",
      icon: Sun,
      imageUrl: "/lovable-uploads/b19caaa9-58a9-4ed5-9621-796ce640f1d3.png"
    },
    {
      title: "Doença da Tiroide",
      icon: Droplet,
      imageUrl: "/lovable-uploads/e9c4ac93-d9e6-45e7-a22f-d083625bc2e1.png"
    },
    {
      title: "Envelhecimento Acelerado",
      icon: Clock,
      imageUrl: "/lovable-uploads/75031c33-b967-466f-985b-f5c5aa8a16af.png"
    },
    {
      title: "Ansiedade & Cortisol Elevado",
      icon: Brain,
      imageUrl: "/lovable-uploads/bb28bc46-c3c2-4d8a-b150-ed7c46e0622d.png"
    },
    {
      title: "Intoxicação por Metais Pesados",
      icon: FlaskRound,
      imageUrl: "/lovable-uploads/6c56d874-4162-469a-a4e2-aa81342f4ee2.png"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">Doenças silenciosas.</span>
            <span className="block">Dados que falam.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Descobre o que o teu corpo pode estar a esconder. Estes são alguns dos problemas de saúde que podem ser 
            detetados e prevenidos com os nossos testes laboratoriais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {diseases.map((disease, index) => (
            <DiseaseCard 
              key={index} 
              title={disease.title} 
              icon={disease.icon} 
              imageUrl={disease.imageUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
