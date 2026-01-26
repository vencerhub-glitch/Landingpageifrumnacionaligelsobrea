import { motion } from 'motion/react';
import { MapPin, Calendar, Building, Plane, Phone, Mail, Hotel } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LocationProps {
  locationImage: string;
  cityImage: string;
  airportImage: string;
  hotelImages: {
    interior: string;
    conference: string;
    lobby: string;
  };
}

export function Location({ locationImage, cityImage, airportImage, hotelImages }: LocationProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={locationImage}
          alt="Canela RS"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-6">
            Local do Evento
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Hotel Images Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-7xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden shadow-lg h-64">
            <ImageWithFallback
              src={cityImage}
              alt="Canela - RS"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-64">
            <ImageWithFallback
              src={hotelImages.interior}
              alt="Grande Hotel Canela - Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-64">
            <ImageWithFallback
              src={hotelImages.conference}
              alt="Grande Hotel Canela - Sala de Conferências"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-64">
            <ImageWithFallback
              src={airportImage}
              alt="Aeroporto Salgado Filho"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 h-full text-white">
              <MapPin className="h-12 w-12 text-amber-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Grande Hotel Canela</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Um dos hotéis mais tradicionais e completos de Canela, com infraestrutura 
                de excelência para eventos corporativos e técnicos.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-300 text-sm">
                      R. Getúlio Vargas, 300 - Vila Luiza<br />
                      Canela - RS, 95684-002
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Acesso</p>
                    <p className="text-gray-300 text-sm">
                      Aeroporto Salgado Filho (POA) - 120 km<br />
                      Fácil acesso pela RS-235
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Informações</p>
                    <p className="text-gray-300 text-sm">
                      Condições especiais para participantes
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-start gap-3 mb-4">
                  <Hotel className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Reservas de Hospedagem</p>
                    <p className="text-gray-300 text-sm mb-2">
                      Valores promocionais exclusivos para participantes do evento
                    </p>
                    <a 
                      href="mailto:reservas@grandehotelcanela.com.br" 
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm"
                    >
                      <Mail className="h-4 w-4" />
                      reservas@grandehotelcanela.com.br
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Entre em contato diretamente com o hotel para garantir as melhores condições
                </p>
              </div>
            </div>
          </motion.div>

          {/* Date Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 h-full">
              <Calendar className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                5, 6 e 7 de Agosto de 2026
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Reserve estas datas na sua agenda para participar deste evento histórico 
                da engenharia brasileira.
              </p>

              {/* Date Breakdown */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-900">
                  <p className="font-semibold text-blue-900">Quarta-feira, 5 de Agosto</p>
                  <p className="text-sm text-gray-600">Cursos e Workshops</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-amber-600">
                  <p className="font-semibold text-amber-600">Quinta-feira, 6 de Agosto</p>
                  <p className="text-sm text-gray-600">Palestras e Mesas Redondas</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-700">
                  <p className="font-semibold text-green-700">Sexta-feira, 7 de Agosto</p>
                  <p className="text-sm text-gray-600">Apresentação de Trabalhos</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4">
                  <p className="text-sm font-semibold text-amber-900 mb-1">
                    ⏰ Horário estimado
                  </p>
                  <p className="text-sm text-amber-800">
                    9h às 18h (com intervalos programados)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-blue-900 mb-4 text-center">
              Por que o Grande Hotel Canela?
            </h4>
            <p className="text-gray-700 text-center leading-relaxed">
              O Grande Hotel Canela foi escolhido por sua excelente infraestrutura para eventos técnicos, 
              salas de conferência equipadas, ambiente inspirador e localização estratégica na Serra Gaúcha, 
              proporcionando o cenário perfeito para networking e troca de conhecimentos em um dos 
              destinos mais belos do Brasil.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}