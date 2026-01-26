import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Calendar, MapPin } from 'lucide-react';
import logoEvento from 'figma:asset/0554e9d256dd9a08a8a3fe4a05cafdf264f28e05.png';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const scrollToInscricao = () => {
    const element = document.getElementById('inscricao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSaibaMais = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fórum Nacional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-10 py-4 bg-amber-600/20 border border-amber-600/40 text-amber-300 rounded-full text-lg font-semibold tracking-wide">
                5, 6 e 7 de Agosto de 2026 • Canela/RS
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-tight"
          >
            Uma união inédita que vai marcar a história da{' '}
            <span className="text-amber-400">
              Engenharia de Avaliações e Perícias
            </span>{' '}
            no Brasil
          </motion.h1>

          {/* Logo do Evento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <img
              src={logoEvento}
              alt="I Fórum Nacional IGEL & SOBREA"
              className="h-28 sm:h-36 lg:h-48 w-auto mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              O Instituto Gaúcho de Engenharia Legal e Avaliações – IGEL e a Sociedade Brasileira de Engenharia de Avaliações - SOBREA unem forças para promover o maior evento técnico-científico de Engenharia de Avaliações e Perícias do país.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToInscricao}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white text-xl px-12 py-7 h-auto"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Inscreva-se
            </Button>
            <Button
              onClick={scrollToSaibaMais}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 text-lg px-10 py-6 h-auto"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Saiba Mais
            </Button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-4xl font-bold text-amber-400 mb-2">3</p>
              <p className="text-gray-200">Dias de Conteúdo Técnico-científico</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-4xl font-bold text-amber-400 mb-2">2</p>
              <p className="text-gray-200">Entidades Técnicas-Científicas com reconhecimento Estadual e Nacional</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-4xl font-bold text-amber-400 mb-2">100%</p>
              <p className="text-gray-200">Alta Qualidade Técnica-Científica</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}