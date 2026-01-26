import { motion } from 'motion/react';
import { Trophy, Network, Building2, Sparkles } from 'lucide-react';

const valueProps = [
  {
    icon: Trophy,
    title: 'Atualização de Alto Nível',
    description: 'Acesso a debates técnicos-científicos e às melhores práticas da Engenharia de Avaliações e Perícias.',
    highlight: 'Referência técnica'
  },
  {
    icon: Network,
    title: 'Integração Profissional',
    description: 'Networking estratégico que conecta profissionais, especialistas e instituições em todo o território nacional.',
    highlight: 'Conexões de valor'
  },
  {
    icon: Building2,
    title: 'Inteligência Coletiva',
    description: 'Compartilhamento de experiências e soluções, integrando conhecimentos para impulsionar o avanço da área.',
    highlight: 'Construção conjunta'
  },
  {
    icon: Sparkles,
    title: 'Relevância e Pioneirismo',
    description: 'O I Fórum marca um encontro histórico, unindo duas instituições líderes e inovadoras, reconhecidas pela excelência técnica e pela forte representatividade nos cenários estadual e nacional. Um espaço único para gerar impacto, fortalecer conexões e impulsionar o futuro da Engenharia de Avaliações e Perícias.',
    highlight: 'Evento histórico'
  }
];

export function ValueProps() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-6">
            Por que Participar?
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-amber-600 transition-all duration-300 hover:shadow-2xl">
                  {/* Highlight Badge */}
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-amber-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      {prop.highlight}
                    </span>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">
                        {prop.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}