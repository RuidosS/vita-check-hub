
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
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Diabetes Tipo 2",
      icon: Activity,
      imageUrl: "https://images.unsplash.com/photo-1576086599659-7b2c86d8e19e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cancro do Cólon",
      icon: CircleDot,
      imageUrl: "https://images.unsplash.com/photo-1557234195-bdcf5e4b0725?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Inflamação Crónica",
      icon: Flame,
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Síndrome do Ovário Poliquístico",
      icon: CircleDot,
      imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Deficiência de Vitamina D",
      icon: Sun,
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Doença da Tiroide",
      icon: Droplet,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Envelhecimento Acelerado",
      icon: Clock,
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ansiedade & Cortisol Elevado",
      icon: Brain,
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Intoxicação por Metais Pesados",
      icon: FlaskRound,
      imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 whitespace-nowrap">
            Doenças silenciosas. Dados que falam.
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

