import { motion } from 'motion/react';
import { ClipboardList, Users, CheckCircle, FileText } from 'lucide-react';

const administrativeResponsibilities = [
  'Coordenação Geral: Gestão integrada e cooperação institucional',
  'Operações e Logística: Planejamento executivo e infraestrutura',
  'Infraestrutura e Tecnologia: Suporte tecnológico e soluções de conectividade',
  'Atendimento ao Participante: Gestão de credenciamento e recepção',
  'Governança Financeira: Controle de recursos e aspectos administrativos',
  'Relacionamento Institucional: Articulação com parceiros e entidades do setor'
];

const technicalResponsibilities = [
  'Curadoria Científica: Supervisão do conteúdo e alinhamento com as tendências da área',
  'Programação Técnica: Estruturação da grade de cursos, palestras, painéis e horários',
  'Seleção de Especialistas: Escolha de palestrantes e professores, referências nacionais e internacionais',
  'Moderação de Debates: Mediação qualificada das discussões e mesas redondas',
  'Avaliação de Trabalhos: Análise e seleção de artigos e produções técnicas',
  'Certificação: Definição dos critérios para o reconhecimento oficial dos participantes'
];

export function Governance() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-6">
            Organização Técnica e Administrativa
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Concebido para garantir excelência e transparência, o I Fórum é organizado por comissões integradas. Essa estrutura une representantes das duas entidades em uma gestão compartilhada, focada no rigor técnico e na eficiência administrativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Comissão Administrativa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:border-blue-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Comissão Administrativa
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Gestão Organizacional e Operacional</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Responsável pela viabilização e suporte do evento, atuando nas seguintes frentes:
              </p>

              <div className="space-y-3">
                {administrativeResponsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200">
                <div className="flex items-center gap-2 text-blue-900">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold text-sm">
                    Representantes IGEL & SOBREA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comissão Técnica */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:border-amber-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900">
                    Comissão Técnica
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Gestão Técnica e Científica</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Responsável por assegurar o rigor acadêmico e a qualidade das discussões, com foco em:
              </p>

              <div className="space-y-3">
                {technicalResponsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-amber-200">
                <div className="flex items-center gap-2 text-amber-900">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold text-sm">
                    Especialistas IGEL & SOBREA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Essa organização assegura um ambiente qualificado para a{' '}
              <strong className="text-blue-900">troca de experiências</strong>, o{' '}
              <strong className="text-blue-900">aprofundamento técnico</strong> e a{' '}
              <strong className="text-blue-900">construção coletiva do conhecimento</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}