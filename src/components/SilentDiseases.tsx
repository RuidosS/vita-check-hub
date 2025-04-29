
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
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-56 p-6 flex flex-col justify-end items-center text-center">
        <div className="mb-3 p-2 bg-primary/20 backdrop-blur-sm rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-bold text-white text-lg drop-shadow-md">{title}</h3>
      </div>
    </div>
  );
};

export const SilentDiseases = () => {
  const diseases = [
    {
      title: "Doença Cardiovascular",
      icon: Heart,
      imageUrl: "https://images.unsplash.com/photo-1559757175-569a19aefeff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Diabetes Tipo 2",
      icon: Activity,
      imageUrl: "https://images.unsplash.com/photo-1576765608622-067acf0b5c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cancro do Cólon",
      icon: CircleDot,
      imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Inflamação Crónica",
      icon: Flame,
      imageUrl: "https://images.unsplash.com/photo-1582560474991-d7c9d03ca378?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Síndrome do Ovário Poliquístico",
      icon: CircleDot,
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Deficiência de Vitamina D",
      icon: Sun,
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Doença da Tiroide",
      icon: Droplet,
      imageUrl: "https://images.unsplash.com/photo-1579165466991-467135ad3875?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Envelhecimento Acelerado",
      icon: Clock,
      imageUrl: "https://images.unsplash.com/photo-1584555613483-85892b7a9db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ansiedade & Cortisol Elevado",
      icon: Brain,
      imageUrl: "https://images.unsplash.com/photo-1559757148-7a890dc52247?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Intoxicação por Metais Pesados",
      icon: FlaskRound,
      imageUrl: "https://images.unsplash.com/photo-1581093196277-9f6e9b62be04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
