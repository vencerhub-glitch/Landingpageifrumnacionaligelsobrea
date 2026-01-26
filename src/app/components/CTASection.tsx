import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Bell, Mail, Calendar } from 'lucide-react';

export function CTASection() {
  const scrollToInscricao = () => {
    const element = document.getElementById('inscricao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <div className="inline-block p-4 bg-amber-600/20 rounded-full mb-6">
              <Bell className="h-12 w-12 text-amber-400" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Não Perca Esta Oportunidade
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            As inscrições serão abertas em breve
          </p>

          <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Seja um dos primeiros a garantir sua vaga no I Fórum Nacional IGEL & SOBREA. 
            Cadastre-se para receber informações exclusivas sobre inscrições, programação 
            detalhada e benefícios para participantes.
          </p>

          {/* CTA Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Receba avisos sobre as inscrições
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-6 py-4 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 h-auto whitespace-nowrap"
              >
                <Mail className="mr-2 h-5 w-5" />
                Notifique-me
              </Button>
            </div>

            <div className="text-center">
              <Button
                onClick={scrollToInscricao}
                variant="outline"
                size="lg"
                className="border-2 border-amber-400 text-amber-400 bg-transparent hover:bg-amber-400 hover:text-blue-900 px-8 py-4 h-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Ver Valores das Inscrições
              </Button>
            </div>

            <p className="text-sm text-gray-300 mt-4">
              Seus dados estão seguros. Não compartilhamos informações com terceiros.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Calendar className="h-8 w-8 text-amber-400 mb-3 mx-auto" />
              <p className="text-white font-semibold mb-2">Inscrições Antecipadas</p>
              <p className="text-gray-300 text-sm">Condições especiais para os primeiros inscritos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Bell className="h-8 w-8 text-amber-400 mb-3 mx-auto" />
              <p className="text-white font-semibold mb-2">Atualizações Exclusivas</p>
              <p className="text-gray-300 text-sm">Seja o primeiro a saber das novidades</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
            >
              <Mail className="h-8 w-8 text-amber-400 mb-3 mx-auto" />
              <p className="text-white font-semibold mb-2">Material Antecipado</p>
              <p className="text-gray-300 text-sm">Acesso prévio à programação completa</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}