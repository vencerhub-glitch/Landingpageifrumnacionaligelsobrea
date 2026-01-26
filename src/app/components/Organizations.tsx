import { motion } from 'motion/react';
import { Calendar, Users, Award } from 'lucide-react';
import logoIGEL from 'figma:asset/8aeb9730468feba4483f6ae9337eadefe2b1538b.png';
import logoSOBREA from 'figma:asset/13521b15098d450ec4f6455bd500c870918bef81.png';

export function Organizations() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Uma união construída por história, propósito e excelência técnica
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Congregar engenheiros e arquitetos dedicados à Engenharia de Avaliações, com foco no rigor científico e nas melhores práticas de mercado. Pautada pela ética e transparência, nossa atuação visa difundir o conhecimento técnico através de eventos acadêmicos e profissionais de excelência.
          </p>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mt-6">
            O I Fórum Nacional IGEL & SOBREA.....
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {/* IGEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src={logoIGEL} 
                  alt="IGEL - Instituto Gaúcho de Engenharia Legal e de Avaliações" 
                  className="h-20 w-auto mb-4"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold">IGEL</h3>
                  <p className="text-gray-300 text-sm">Instituto Gaúcho de Engenharia Legal e de Avaliações</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-amber-400 mb-4">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">Fundado em 1961</span>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Consolidou-se como uma das principais referências estaduais na promoção da qualificação técnica, 
                  do debate profissional e da integração entre engenheiros e arquitetos que atuam nas 
                  áreas de avaliações e perícias.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Sua trajetória é marcada pelo <strong className="text-white">compromisso com a ética</strong>, 
                  a evolução metodológica e a valorização da prática profissional.
                </p>
              </div>

              <div className="pt-6 border-t border-white/20">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-300">
                    Mais de 60 anos dedicados à excelência em Engenharia Legal e Avaliações
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SOBREA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src={logoSOBREA} 
                  alt="SOBREA - Sociedade Brasileira de Engenharia de Avaliações" 
                  className="h-20 w-auto mb-4"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold">SOBREA</h3>
                  <p className="text-gray-300 text-sm">Sociedade Brasileira de Engenharia de Avaliações</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-green-400 mb-4">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">Fundada em 2005</span>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Possui atuação de abrangência nacional com foco em congregar engenheiros e arquitetos dedicados à Engenharia de Avaliações, com foco no rigor científico e nas melhores práticas de mercado.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Promove eventos, simpósios e ações que impulsionam a <strong className="text-white">excelência 
                  profissional em nível nacional</strong>.
                </p>
              </div>

              <div className="pt-6 border-t border-white/20">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-300">
                    Referência nacional em desenvolvimento técnico-científico
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Event Scope */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              A Abrangência deste Encontro
            </h3>

            <p className="text-lg text-gray-200 text-center mb-10 leading-relaxed">
              Este encontro representa um <strong className="text-amber-400">marco institucional</strong> para ambas as entidades.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-3 text-amber-400">SOBREA</h4>
                <p className="text-gray-200 leading-relaxed">
                  O I Fórum integra a realização do <strong className="text-white">XII Simpósio da Sociedade Brasileira de Engenharia de Avaliações - SOBREA</strong>, um dos mais tradicionais e relevantes encontros da entidade. O evento é dedicado à discussão científica, à consolidação de boas práticas e ao avanço da Engenharia de Avaliações no Brasil.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-3 text-green-400">IGEL</h4>
                <p className="text-gray-200 leading-relaxed">
                  O I Fórum iniciará a realização do <strong className="text-white">I Simpósio Estadual do Instituto Gaúcho de Engenharia Legal e Avaliações - IGEL</strong>, concatenando sua relevante atuação estadual ao cenário nacional e promovendo a integração entre profissionais, especialistas e pesquisadores, com foco nos desafios presentes e futuros.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}