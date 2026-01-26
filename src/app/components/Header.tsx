import image_5cc23581707db985cd430cc0b6646d33a9d463b0 from 'figma:asset/5cc23581707db985cd430cc0b6646d33a9d463b0.png';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import logoEvento from 'figma:asset/0554e9d256dd9a08a8a3fe4a05cafdf264f28e05.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={image_5cc23581707db985cd430cc0b6646d33a9d463b0} 
                alt="I Fórum Nacional IGEL & SOBREA" 
                className="h-14 w-auto"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-blue-900 transition-colors text-sm font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('programacao')}
              className="text-gray-700 hover:text-blue-900 transition-colors text-sm font-medium"
            >
              Programação
            </button>
            <button
              onClick={() => scrollToSection('palestrantes')}
              className="text-gray-700 hover:text-blue-900 transition-colors text-sm font-medium"
            >
              Palestrantes
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-900 transition-colors text-sm font-medium"
            >
              FAQ
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection('inscricao')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-7 py-4 h-auto text-base font-bold uppercase"
          >
            Inscreva-se
          </Button>
        </div>
      </div>
    </header>
  );
}