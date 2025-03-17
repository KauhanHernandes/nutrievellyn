import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Clock, Building2 } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  institution: string;
  year: string;
  imagePath: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Especialização em Naturopata Bio-Ortomolecular",
    institution: "IV Curso Introdutório de Naturopatia",
    year: "2022",
    imagePath: "/imgs/certificados/cert1.png"
  },
  {
    id: 2,
    title: "Suplementação Nutricional: Concepção á Adolescência",
    institution: "ArinaBonelli - Materno Infanto Juvenil",
    year: "2022",
    imagePath: "/imgs/certificados/cert2.png"
  },
  {
    id: 3,
    title: "Atuação Interdisciplinar no Autismo",
    institution: "Faculdade IDE",
    year: "2022",
    imagePath: "/imgs/certificados/cert3.png"
  },
  {
    id: 4,
    title: "Jogos Lúdicos Para Alfabetização",
    institution: "Fernanda Ávila",
    year: "2022",
    imagePath: "/imgs/certificados/cert4.png"
  },
  {
    id: 5,
    title: "Capacitação e Aprimoramento em ABA",
    institution: "Curso ABA",
    year: "2024",
    imagePath: "/imgs/certificados/cert5.png"
  },
  {
    id: 6,
    title: "Pós-Graduação Nutrição Materno Infantil",
    institution: "Faculdade Metropolitana",
    year: "2018",
    imagePath: "/imgs/certificados/cert6.png"
  },
  {
    id: 7,
    title: "VB-MAPP Descomplicado ",
    institution: "VB-MAAP",
    year: "2024",
    imagePath: "/imgs/certificados/cert7.png"
  },
  {
    id: 8,
    title: "Giro Ciclos",
    institution: "Instituto Ciclos PÓS-GRADUAÇÃO e Cursos LTDA",
    year: "2023",
    imagePath: "/imgs/certificados/cert8.png"
  },
  {
    id: 9,
    title: "Nutrologia Pediátrica",
    institution: "NutroPedcon ",
    year: "2023",
    imagePath: "/imgs/certificados/cert9.png"
  },
  {
    id: 10,
    title: "Interpretação de Exames Laboratoriais",
    institution: "Nutricionista Diana Belen Lopez",
    year: "2023",
    imagePath: "/imgs/certificados/cert10.png"
  },
  {
    id: 11,
    title: "Simpósio Internacional Multidisciplinar de Saúde",
    institution: "Unibra",
    year: "2022",
    imagePath: "/imgs/certificados/cert11.png"
  },
  {
    id: 12,
    title: "Meeting Especial - Dia do Nutricionista",
    institution: "Unibra",
    year: "2021",
    imagePath: "/imgs/certificados/cert12.png"
  },
  {
    id: 13,
    title: "Nutrição e Mercado de Trabalho - Noite",
    institution: "Unibra",
    year: "2019",
    imagePath: "/imgs/certificados/cert13.png"
  },
  {
    id: 14,
    title: "Jornada Acadêmica - Nutrição",
    institution: "Unibra",
    year: "2019",
    imagePath: "/imgs/certificados/cert14.png"
  },
  {
    id: 15,
    title: "Meeting do Curso Bacharelado em Nutrição",
    institution: "Unibra",
    year: "2020",
    imagePath: "/imgs/certificados/cert15.png"
  },
  {
    id: 16,
    title: "Nutrição na Prática Esportiva. Pós-Graduação",
    institution: "Faculdade Metropolitana",
    year: "2018",
    imagePath: "/imgs/certificados/cert16.png"
  },
  {
    id: 17,
    title: "Montagem de Cardápios do Nutriocionista na Merenda Escolar",
    institution: "Unibra",
    year: "2019",
    imagePath: "/imgs/certificados/cert17.png"
  },
  {
    id: 18,
    title: "Alimentação Pediátrica Através de uma Lente Compassiva",
    institution: "Equipe EnVuelo Formação",
    year: "2023",
    imagePath: "/imgs/certificados/cert18.png"
  }
];

export default function CertificationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { 
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStart(null);
  };

  return (
    <div 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 border-b border-orange-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 rounded-full">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {certifications[currentIndex].title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">{certifications[currentIndex].institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">{certifications[currentIndex].year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={certifications[currentIndex].imagePath}
              alt={certifications[currentIndex].title}
              className="w-full h-auto max-h-[400px] object-contain transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all transform hover:scale-110 pointer-events-auto"
              aria-label="Certificação anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all transform hover:scale-110 pointer-events-auto"
              aria-label="Próxima certificação"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-orange-500'
                    : 'w-2 h-2 bg-orange-200'
                } rounded-full`}
                aria-label={`Ir para certificação ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}