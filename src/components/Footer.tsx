import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="mt-20"
      style={{ 
        background: 'linear-gradient(135deg, #F8A035 0%, #F7AC70 100%)',
        boxShadow: '0 -10px 20px rgba(17, 6, 6, 0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-black">Redes Sociais</h3>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.instagram.com/nutrievellyn_/#" target="_blank" 
              className="text-black hover:scale-110 transition-transform duration-300 ease-out"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a 
              href="mailto:nutricionistaevellyn@gmail.com" target="_blank"
              className="text-black hover:scale-110 transition-transform duration-300 ease-out"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Mail className="w-7 h-7" />
            </a>
            <a 
              href="https://wa.me/5581984434851" target="_blank"
              className="text-black hover:scale-110 transition-transform duration-300 ease-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Phone className="w-7 h-7" />
            </a>
          </div>
        </div>
        <div 
          className="text-center text-sm text-black/90"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>© 2024 Nutricionista Maria Evellyn. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}