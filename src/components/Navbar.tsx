import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{ 
        background: 'linear-gradient(135deg, #F8A035 0%, #F7AC70 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-slideIn">
            <span className="text-xl font-semibold text-black">Maria Evellyn</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-black hover:bg-orange-600/20 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { to: '/', label: 'Início' },
              { to: '/servicos', label: 'Serviços' },
              { to: '/certificacoes', label: 'Minhas Certificações' }
            ].map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-black transition-all duration-300 relative ${
                  location.pathname === link.to ? 'font-medium' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.6s ease-out forwards'
                }}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full"
                    style={{
                      transform: 'scaleX(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 space-y-1">
            {[
              { to: '/', label: 'Início' },
              { to: '/servicos', label: 'Serviços' },
              { to: '/certificacoes', label: 'Minhas Certificações' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-black hover:bg-orange-600/20 transition-colors ${
                  location.pathname === link.to ? 'font-medium bg-orange-600/10' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}