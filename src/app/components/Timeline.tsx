import { motion } from 'motion/react';
import { Calendar, BookOpen } from 'lucide-react';

export function Timeline() {
  return (
    <section id="programacao" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-6">
            Programação
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Três dias intensos de muito conteúdo técnico-científico, debates e networking
          </p>
        </motion.div>

        {/* Event Overview */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-blue-900 font-bold text-lg mb-2">Quarta-feira</div>
              <div className="text-3xl font-bold text-blue-900 mb-2">05/08</div>
              <div className="text-gray-700">WORKSHOPS</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-amber-900 font-bold text-lg mb-2">Quinta-feira</div>
              <div className="text-3xl font-bold text-amber-900 mb-2">06/08</div>
              <div className="text-gray-700">PALESTRAS, MESAS REDONDAS E APRESENTAÇÃO DE TRABALHOS</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-green-900 font-bold text-lg mb-2">Sexta-feira</div>
              <div className="text-3xl font-bold text-green-900 mb-2">07/08</div>
              <div className="text-gray-700">PALESTRAS, MESAS REDONDAS E APRESENTAÇÃO DE TRABALHOS</div>
            </div>
          </motion.div>
        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                  EM BREVE
                </span>
              </div>
              
              <BookOpen className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Programação interessante em Desenvolvimento
              </h3>
              
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
                Trabalhamos na curadoria de uma programação exclusiva, reunindo os maiores expoentes da Engenharia de Avaliações e Perícias. Em breve, uma grade técnica completa estará disponível.
              </p>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mt-8">
                <p className="text-white font-semibold mb-2">📋 O que você pode esperar:</p>
                <ul className="text-gray-200 text-sm space-y-2">
                  <li>✓ Workshops especializados no dia 05/08</li>
                  <li>✓ Palestras técnicas, Mesas Redondas com Especialistas renomados e Apresentação de trabalhos técnico-científicos nos dias 06 e 07/08</li>
                </ul>
              </div>

              <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Notifique-me quando disponível
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}