import { motion } from 'motion/react';
import { BookOpen, Users, Lightbulb, Award } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Conteúdo de Excelência',
    description: 'Debates técnicos de alto nível com especialistas renomados em Avaliações e Perícias.'
  },
  {
    icon: Users,
    title: 'Integração Profissional',
    description: 'Networking estratégico conectando profissionais, especialistas e instituições em âmbito nacional.'
  },
  {
    icon: Lightbulb,
    title: 'Inteligência Coletiva',
    description: 'Troca de experiências e soluções, unindo conhecimentos em prol do avanço da área.'
  },
  {
    icon: Award,
    title: 'Relevância e Pioneirismo',
    description: 'Um encontro histórico entre duas instituições líderes, criado para gerar impacto, fortalecer conexões e impulsionar o futuro da Engenharia de Avaliações e Perícias.'
  }
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-6">
            Um encontro que projeta o futuro
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            Mais do que um evento, o I Fórum Nacional IGEL & SOBREA é um{' '}
            <strong className="text-gray-800">espaço de convergência, diálogo e construção de caminhos</strong>{' '}
            para o futuro da Engenharia de Avaliações e Perícias no Brasil.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Reunindo profissionais, instituições e especialistas em um ambiente estrategicamente 
            pensado para aprendizado, conexão e impacto profissional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:border-amber-600/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}