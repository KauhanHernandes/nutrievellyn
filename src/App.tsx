import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CertificationsCarousel from './components/CertificationsCarousel';
import ServiceCard from './components/ServiceCard';
import { services } from './data/services';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/certificacoes" element={<Certifications />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <section className="text-center py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Nutricionista Maria Evellyn</h1>
      <p className="text-lg sm:text-xl lg:text-2xl">Especialista em Nutrição Materno-Infantil, Terapia Alimentar e Nutrição Escolar</p>
    </section>

    <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]">
        <img 
          src="src/imgs/evellyimg/ev4.jpg" 
          alt="Maria Evellyn com bonecos de alimentos" 
          className="rounded-2xl shadow-xl w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Sobre mim</h2>
        <div className="prose prose-lg">
          <p className="text-base sm:text-lg">
            Sou a Maria Evellyn, nutricionista especializada no cuidado materno-infantil,
            oferecendo suporte para mães e crianças em todas as fases da vida.
          </p>
          <p className="text-base sm:text-lg">
            Também atuo com terapia alimentar e nutrição escolar, promovendo uma
            alimentação saudável desde a infância. Meu objetivo é ajudar famílias
            a desenvolverem uma relação positiva e equilibrada com a alimentação.
          </p>
          <p className="text-base sm:text-lg">
            Com uma abordagem acolhedora e personalizada, trabalho para criar
            planos nutricionais que se adequem à realidade de cada família,
            respeitando suas particularidades e necessidades específicas.
          </p>
        </div>
      </div>
    </section>
  </div>
);

const Services = () => (
  <div className="py-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" data-aos="fade-up">Serviços</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  </div>
);

const Certifications = () => (
  <div className="py-8">
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Minhas Certificações</h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
        Compromisso com a excelência e educação continuada para oferecer o melhor
        atendimento nutricional para você e sua família.
      </p>
    </div>
    <CertificationsCarousel />
  </div>
);

export default App;