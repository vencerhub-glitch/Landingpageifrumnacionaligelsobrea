import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  Check,
  Users,
  GraduationCap,
  UserCheck,
  Award,
} from "lucide-react";

export function Pricing() {
  const scrollToInscricao = () => {
    const element = document.getElementById("inscricao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingPlans = [
    {
      name: "Público em Geral",
      description: "Acesso completo ao evento",
      price: "R$ 800",
      icon: Users,
      color: "blue",
      features: [
        "Acesso aos 3 dias de evento",
        "02 almoços incluídos (quinta e sexta)",
        "Certificado de participação",
        "Material digital do evento",
        "Coffee breaks incluídos",
        "Acesso às palestras e mesas redondas",
      ],
    },
    {
      name: "Associados IGEL ou SOBREA",
      description: "Anteriores a 2026",
      price: "R$ 200",
      icon: Award,
      color: "amber",
      featured: true,
      features: [
        "Acesso aos 3 dias de evento",
        "02 almoços incluídos (quinta e sexta)",
        "Certificado de participação",
        "Material digital do evento",
        "Coffee breaks incluídos",
        "Acesso às palestras e mesas redondas",
        "Desconto exclusivo para associados",
      ],
    },
    {
      name: "Associados IGEL ou SOBREA",
      description: "A partir de 2026",
      price: "R$ 400",
      icon: UserCheck,
      color: "green",
      features: [
        "Acesso aos 3 dias de evento",
        "02 almoços incluídos (quinta e sexta)",
        "Certificado de participação",
        "Material digital do evento",
        "Coffee breaks incluídos",
        "Acesso às palestras e mesas redondas",
        "Benefício para novos associados",
      ],
    },
    {
      name: "Estudantes",
      description: "Eng., arquitetura ou agronomia",
      price: "R$ 500",
      icon: GraduationCap,
      color: "purple",
      features: [
        "Acesso aos 3 dias de evento",
        "02 almoços incluídos (quinta e sexta)",
        "Certificado de participação",
        "Material digital do evento",
        "Coffee breaks incluídos",
        "Acesso às palestras e mesas redondas",
        "Limitado a 20 vagas",
        "Comprovação de matrícula necessária",
      ],
    },
  ];

  return (
    <section
      id="inscricao"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Valores e Inscrições
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Garanta sua vaga no I Fórum Nacional IGEL & SOBREA
          </p>
          <div className="mt-6 inline-block">
            <div className="bg-amber-100 border border-amber-300 text-amber-800 px-6 py-3 rounded-full">
              <span className="font-bold">
                Lote 1 - Janeiro a Março
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            const colorClasses = {
              blue: {
                bg: "bg-blue-600",
                bgLight: "bg-blue-50",
                border: "border-blue-200",
                text: "text-blue-600",
                hover: "hover:bg-blue-700",
              },
              amber: {
                bg: "bg-amber-600",
                bgLight: "bg-amber-50",
                border: "border-amber-300",
                text: "text-amber-600",
                hover: "hover:bg-amber-700",
              },
              green: {
                bg: "bg-green-600",
                bgLight: "bg-green-50",
                border: "border-green-200",
                text: "text-green-600",
                hover: "hover:bg-green-700",
              },
              purple: {
                bg: "bg-purple-600",
                bgLight: "bg-purple-50",
                border: "border-purple-200",
                text: "text-purple-600",
                hover: "hover:bg-purple-700",
              },
            };

            const colors =
              colorClasses[
                plan.color as keyof typeof colorClasses
              ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative"
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Melhor Custo-Benefício
                    </span>
                  </div>
                )}
                <div
                  className={`
                    bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col
                    ${plan.featured ? "ring-2 ring-amber-600 scale-105" : "border border-gray-200"}
                    hover:shadow-2xl transition-all duration-300
                  `}
                >
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 ${colors.bgLight} rounded-xl mb-4`}
                    >
                      <Icon
                        className={`h-7 w-7 ${colors.text}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {plan.price}
                    </div>
                    <p className="text-sm text-gray-500">
                      por pessoa
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map(
                      (feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <Check
                            className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>

                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.google.com",
                        "_blank",
                      )
                    }
                    className={`w-full ${colors.bg} ${colors.hover} text-white text-base py-5 h-auto`}
                  >
                    Inscreva-se Agora
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto mb-6">
            <p className="text-blue-900 font-semibold mb-2">
              📚 Workshops e Cursos - Dia 05/08
            </p>
            <p className="text-gray-700">
              Os valores para participação em workshops e cursos
              serão divulgados em breve, juntamente com a
              programação detalhada.
            </p>
          </div>

          <p className="text-gray-600">
            <strong>Atenção:</strong> Número de vagas limitado.
            Garanta sua participação!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            (*) Incluídos no valor da inscrição 02 almoços
            (quinta e sexta)
          </p>
        </motion.div>
      </div>
    </section>
  );
}