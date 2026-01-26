import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Quem pode participar do evento?',
    answer: 'O evento é aberto a engenheiros, arquitetos, peritos, avaliadores, estudantes de engenharia e arquitetura, profissionais do setor jurídico e todos os interessados em engenharia de avaliações e perícias. Tanto membros do IGEL e SOBREA quanto não-membros são bem-vindos.'
  },
  {
    question: 'Quando e onde será o evento?',
    answer: 'O I Fórum Nacional IGEL & SOBREA acontecerá nos dias 5, 6 e 7 de Agosto de 2026, no Grande Hotel Canela, localizado na R. Getúlio Vargas, 300 - Vila Luiza, Canela - RS, CEP 95684-002. O horário estimado das atividades é das 9h às 18h, com intervalos programados.'
  },
  {
    question: 'Quais são os valores das inscrições?',
    answer: 'Os valores oficiais são: Público Geral - R$ 800,00 | Associados anteriores a 2026 - R$ 200,00 | Associados a partir de 2026 - R$ 400,00 | Estudantes (com comprovação de matrícula) - R$ 500,00. Todas as modalidades incluem acesso completo aos 3 dias de evento, certificado de participação, material digital e coffee breaks.'
  },
  {
    question: 'Como faço para me inscrever?',
    answer: 'As inscrições serão abertas em breve através do site oficial do evento. Cadastre seu e-mail na seção de inscrições para ser notificado assim que as vagas estiverem disponíveis. O número de vagas é limitado, por isso recomendamos garantir sua participação assim que as inscrições abrirem.'
  },
  {
    question: 'O que está incluído na inscrição?',
    answer: 'Todas as modalidades de inscrição incluem: acesso completo aos 3 dias de evento (5, 6 e 7 de agosto de 2026), certificado de participação emitido conjuntamente por IGEL e SOBREA, material digital do evento, coffee breaks e acesso a todas as palestras, painéis e workshops programados.'
  },
  {
    question: 'Qual o formato do evento?',
    answer: 'O evento será 100% presencial, com três dias completos de conteúdo técnico e prático. A programação inclui palestras com especialistas renomados, painéis de debate, mesas redondas, workshops práticos, apresentação de cases, sessões técnicas e amplas oportunidades de networking. Este é um evento histórico que integra o XII Simpósio SOBREA e inicia o I Simpósio Estadual IGEL.'
  },
  {
    question: 'Haverá certificado de participação?',
    answer: 'Sim, todos os participantes receberão certificado digital de participação emitido conjuntamente pelo IGEL (Instituto Gaúcho de Engenharia Legal e de Avaliações, fundado em 1961) e pela SOBREA (Sociedade Brasileira de Engenharia de Avaliações, fundada em 2005), com carga horária discriminada conforme presença nas atividades dos 3 dias de evento.'
  },
  {
    question: 'O evento oferece créditos de educação continuada?',
    answer: 'Sim, o evento está sendo estruturado para oferecer créditos de educação continuada para engenheiros e arquitetos. Informações detalhadas sobre a quantidade de créditos, modalidades e procedimentos de validação serão divulgadas em breve junto com a programação completa.'
  },
  {
    question: 'Como chegar ao Grande Hotel Canela?',
    answer: 'O Grande Hotel Canela está localizado em Canela/RS, na Serra Gaúcha. O aeroporto mais próximo é o Salgado Filho (POA), em Porto Alegre, a aproximadamente 120 km de distância. O hotel tem fácil acesso pela RS-235. Informações sobre transfer e opções de deslocamento serão disponibilizadas em breve.'
  },
  {
    question: 'Haverá opções de hospedagem com desconto?',
    answer: 'Sim, estamos negociando condições especiais de hospedagem no próprio Grande Hotel Canela e em hotéis e pousadas parceiros na região. Uma lista completa com opções de hospedagem e valores diferenciados para participantes do evento será divulgada junto com a abertura das inscrições.'
  },
  {
    question: 'Estudantes têm desconto?',
    answer: 'Sim! O ingresso para Estudantes tem valor especial de R$ 500,00, com os mesmos benefícios das demais modalidades. Para adquirir este ingresso, será necessário comprovar matrícula ativa em instituição de ensino superior de curso relacionado à Engenharia ou Arquitetura.'
  },
  {
    question: 'Qual a diferença entre as categorias de associados?',
    answer: 'Associados anteriores a 2026 (IGEL ou SOBREA) pagam R$ 200,00. Profissionais que se associarem a partir de 2026 pagam R$ 400,00. Já o público geral (não associados) paga R$ 800,00. Essa estrutura valoriza a fidelidade dos membros históricos das instituições.'
  },
  {
    question: 'Posso apresentar trabalhos técnicos no evento?',
    answer: 'Sim, haverá espaço dedicado para apresentação de trabalhos técnicos, cases práticos e pesquisas científicas em engenharia de avaliações e perícias. O edital para submissão de trabalhos será divulgado em breve, com todas as diretrizes, prazos, modalidades de apresentação e critérios de avaliação.'
  },
  {
    question: 'O que torna este evento especial?',
    answer: 'Este é o I Fórum Nacional que marca a união histórica entre o IGEL (fundado em 1961, com mais de 60 anos de trajetória) e a SOBREA (fundada em 2005, com atuação nacional). É a primeira vez que estas duas instituições de referência se unem para realizar um evento conjunto, integrando o XII Simpósio SOBREA e iniciando o I Simpósio Estadual IGEL, reunindo profissionais de todo o Brasil.'
  },
  {
    question: 'Como posso entrar em contato para mais informações?',
    answer: 'Para dúvidas e informações adicionais, você pode entrar em contato através dos canais oficiais do IGEL (contato@igel.org.br) e da SOBREA (contato@sobrea.org.br). Acompanhe também nossas redes sociais para atualizações constantes sobre o evento. Em breve disponibilizaremos um canal de atendimento específico para o Fórum.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="h-10 w-10 text-blue-900" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-6">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre o evento
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 overflow-hidden hover:border-amber-600/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-blue-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 max-w-3xl mx-auto border border-gray-200">
            <p className="text-lg text-gray-700 mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e teremos prazer em ajudar
            </p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Fale Conosco
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}