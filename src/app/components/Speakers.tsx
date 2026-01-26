import { motion } from 'motion/react';
import { Linkedin, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const speakers = [
  {
    name: 'Palestrante 1',
    role: 'Presidente',
    institution: 'IGEL - Instituto de Engenharia Legal',
    image: 'https://cdn.cloud.scenario.com/gg-assets-public-prod/user-upload-file/3e8d1f54-d9db-4d5e-bfad-0bcb49f57ac7/file/8e1afb5b-bab4-4871-a7d3-83e3a3d3dcd6.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2dnLWFzc2V0cy1wdWJsaWMtcHJvZC91c2VyLXVwbG9hZC1maWxlLzNlOGQxZjU0LWQ5ZGItNGQ1ZS1iZmFkLTBiY2I0OWY1N2FjNy9maWxlLzhlMWFmYjViLWJhYjQtNDg3MS1hN2QzLTgzZTNhM2QzZGNkNi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Mzg1MzcyMDB9fX1dfQ__&Signature=LL0P3kbE7~Jp5KFgvz-QvY2QR2MVE0F6A1TILc0TUFpn~CkUoI5FDttA7hJpC8KZCcSbNZt-T3rVxPPvT0aDBY~F68Zj~QJohmATc0wsPRwzC5DgBGt4XttQCp2XuSXjGG4Y~HZLOSq~OA37W4KIDtcKKPYG82g-8Z0exhKfIVYAIB5-I7KAJBb~~KI~6R53oYJ2UDcQKi0A-0U1W0P54JR3Ay6SyJgz34lhCpMaZ1mYucVrJXlrU6Yk1yHnWx0R6rCcXD5y-Wn77lI9eV0J0BbfyHx3hQMVPaJAcvxMEjwVP~UQiCHBf9L9rIUkUuL6e~1iU-XNDpN~m1VhqeGo-w__&Key-Pair-Id=K36FIAB9LE2OLR',
    specialty: 'Perícias de Engenharia'
  },
  {
    name: 'Palestrante 2',
    role: 'Diretora Técnica',
    institution: 'SOBREA - Sociedade Brasileira de Engenharia de Avaliações',
    image: 'https://cdn.cloud.scenario.com/gg-assets-public-prod/user-upload-file/3e8d1f54-d9db-4d5e-bfad-0bcb49f57ac7/file/8e1afb5b-bab4-4871-a7d3-83e3a3d3dcd6.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2dnLWFzc2V0cy1wdWJsaWMtcHJvZC91c2VyLXVwbG9hZC1maWxlLzNlOGQxZjU0LWQ5ZGItNGQ1ZS1iZmFkLTBiY2I0OWY1N2FjNy9maWxlLzhlMWFmYjViLWJhYjQtNDg3MS1hN2QzLTgzZTNhM2QzZGNkNi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Mzg1MzcyMDB9fX1dfQ__&Signature=LL0P3kbE7~Jp5KFgvz-QvY2QR2MVE0F6A1TILc0TUFpn~CkUoI5FDttA7hJpC8KZCcSbNZt-T3rVxPPvT0aDBY~F68Zj~QJohmATc0wsPRwzC5DgBGt4XttQCp2XuSXjGG4Y~HZLOSq~OA37W4KIDtcKKPYG82g-8Z0exhKfIVYAIB5-I7KAJBb~~KI~6R53oYJ2UDcQKi0A-0U1W0P54JR3Ay6SyJgz34lhCpMaZ1mYucVrJXlrU6Yk1yHnWx0R6rCcXD5y-Wn77lI9eV0J0BbfyHx3hQMVPaJAcvxMEjwVP~UQiCHBf9L9rIUkUuL6e~1iU-XNDpN~m1VhqeGo-w__&Key-Pair-Id=K36FIAB9LE2OLR',
    specialty: 'Avaliações Imobiliárias'
  },
  {
    name: 'Palestrante 3',
    role: 'Coordenador Acadêmico',
    institution: 'Universidade Federal do Rio Grande do Sul',
    image: 'https://cdn.cloud.scenario.com/gg-assets-public-prod/user-upload-file/3e8d1f54-d9db-4d5e-bfad-0bcb49f57ac7/file/8e1afb5b-bab4-4871-a7d3-83e3a3d3dcd6.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2dnLWFzc2V0cy1wdWJsaWMtcHJvZC91c2VyLXVwbG9hZC1maWxlLzNlOGQxZjU0LWQ5ZGItNGQ1ZS1iZmFkLTBiY2I0OWY1N2FjNy9maWxlLzhlMWFmYjViLWJhYjQtNDg3MS1hN2QzLTgzZTNhM2QzZGNkNi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Mzg1MzcyMDB9fX1dfQ__&Signature=LL0P3kbE7~Jp5KFgvz-QvY2QR2MVE0F6A1TILc0TUFpn~CkUoI5FDttA7hJpC8KZCcSbNZt-T3rVxPPvT0aDBY~F68Zj~QJohmATc0wsPRwzC5DgBGt4XttQCp2XuSXjGG4Y~HZLOSq~OA37W4KIDtcKKPYG82g-8Z0exhKfIVYAIB5-I7KAJBb~~KI~6R53oYJ2UDcQKi0A-0U1W0P54JR3Ay6SyJgz34lhCpMaZ1mYucVrJXlrU6Yk1yHnWx0R6rCcXD5y-Wn77lI9eV0J0BbfyHx3hQMVPaJAcvxMEjwVP~UQiCHBf9L9rIUkUuL6e~1iU-XNDpN~m1VhqeGo-w__&Key-Pair-Id=K36FIAB9LE2OLR',
    specialty: 'Metodologias de Avaliação'
  },
  {
    name: 'Palestrante 4',
    role: 'Especialista',
    institution: 'Conselho Federal de Engenharia - CONFEA',
    image: 'https://cdn.cloud.scenario.com/gg-assets-public-prod/user-upload-file/3e8d1f54-d9db-4d5e-bfad-0bcb49f57ac7/file/8e1afb5b-bab4-4871-a7d3-83e3a3d3dcd6.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2dnLWFzc2V0cy1wdWJsaWMtcHJvZC91c2VyLXVwbG9hZC1maWxlLzNlOGQxZjU0LWQ5ZGItNGQ1ZS1iZmFkLTBiY2I0OWY1N2FjNy9maWxlLzhlMWFmYjViLWJhYjQtNDg3MS1hN2QzLTgzZTNhM2QzZGNkNi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Mzg1MzcyMDB9fX1dfQ__&Signature=LL0P3kbE7~Jp5KFgvz-QvY2QR2MVE0F6A1TILc0TUFpn~CkUoI5FDttA7hJpC8KZCcSbNZt-T3rVxPPvT0aDBY~F68Zj~QJohmATc0wsPRwzC5DgBGt4XttQCp2XuSXjGG4Y~HZLOSq~OA37W4KIDtcKKPYG82g-8Z0exhKfIVYAIB5-I7KAJBb~~KI~6R53oYJ2UDcQKi0A-0U1W0P54JR3Ay6SyJgz34lhCpMaZ1mYucVrJXlrU6Yk1yHnWx0R6rCcXD5y-Wn77lI9eV0J0BbfyHx3hQMVPaJAcvxMEjwVP~UQiCHBf9L9rIUkUuL6e~1iU-XNDpN~m1VhqeGo-w__&Key-Pair-Id=K36FIAB9LE2OLR',
    specialty: 'Normatização Técnica'
  },
  {
    name: 'Palestrante 5',
    role: 'Perito Judicial',
    institution: 'Tribunal de Justiça de São Paulo',
    image: 'https://cdn.cloud.scenario.com/gg-assets-public-prod/user-upload-file/3e8d1f54-d9db-4d5e-bfad-0bcb49f57ac7/file/8e1afb5b-bab4-4871-a7d3-83e3a3d3dcd6.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2dnLWFzc2V0cy1wdWJsaWMtcHJvZC91c2VyLXVwbG9hZC1maWxlLzNlOGQxZjU0LWQ5ZGItNGQ1ZS1iZmFkLTBiY2I0OWY1N2FjNy9maWxlLzhlMWFmYjViLWJhYjQtNDg3MS1hN2QzLTgzZTNhM2QzZGNkNi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Mzg1MzcyMDB9fX1dfQ__&Signature=LL0P3kbE7~Jp5KFgvz-QvY2QR2MVE0F6A1TILc0TUFpn~CkUoI5FDttA7hJpC8KZCcSbNZt-T3rVxPPvT0aDBY~F68Zj~QJohmATc0wsPRwzC5DgBGt4XttQCp2XuSXjGG4Y~HZLOSq~OA37W4KIDtcKKPYG82g-8Z0exhKfIVYAIB5-I7KAJBb~~KI~6R53oYJ2UDcQKi0A-0U1W0P54JR3Ay6SyJgz34lhCpMaZ1mYucVrJXlrU6Yk1yHnWx0R6rCcXD5y-Wn77lI9eV0J0BbfyHx3hQMVPaJAcvxMEjwVP~UQiCHBf9L9rIUkUuL6e~1iU-XNDpN~m1VhqeGo-w__&Key-Pair-Id=K36FIAB9LE2OLR',
    specialty: 'Perícias Judiciais'
  },
  {
    name: 'Dra. Patrícia Oliveira',
    role: 'Consultora Senior',
    institution: 'Associação Brasileira de Normas Técnicas - ABNT',
    image: 'https://cdn.cloud.scenario.com/gg-assets-public-prod/user-upload-file/3e8d1f54-d9db-4d5e-bfad-0bcb49f57ac7/file/8e1afb5b-bab4-4871-a7d3-83e3a3d3dcd6.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2dnLWFzc2V0cy1wdWJsaWMtcHJvZC91c2VyLXVwbG9hZC1maWxlLzNlOGQxZjU0LWQ5ZGItNGQ1ZS1iZmFkLTBiY2I0OWY1N2FjNy9maWxlLzhlMWFmYjViLWJhYjQtNDg3MS1hN2QzLTgzZTNhM2QzZGNkNi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3Mzg1MzcyMDB9fX1dfQ__&Signature=LL0P3kbE7~Jp5KFgvz-QvY2QR2MVE0F6A1TILc0TUFpn~CkUoI5FDttA7hJpC8KZCcSbNZt-T3rVxPPvT0aDBY~F68Zj~QJohmATc0wsPRwzC5DgBGt4XttQCp2XuSXjGG4Y~HZLOSq~OA37W4KIDtcKKPYG82g-8Z0exhKfIVYAIB5-I7KAJBb~~KI~6R53oYJ2UDcQKi0A-0U1W0P54JR3Ay6SyJgz34lhCpMaZ1mYucVrJXlrU6Yk1yHnWx0R6rCcXD5y-Wn77lI9eV0J0BbfyHx3hQMVPaJAcvxMEjwVP~UQiCHBf9L9rIUkUuL6e~1iU-XNDpN~m1VhqeGo-w__&Key-Pair-Id=K36FIAB9LE2OLR',
    specialty: 'Normas Técnicas NBR'
  }
];

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-900 hover:bg-amber-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 -mr-4 sm:-mr-6"
      aria-label="Próximo"
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-900 hover:bg-amber-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 -ml-4 sm:-ml-6"
      aria-label="Anterior"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  );
}

export function Speakers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    dotsClass: "slick-dots !bottom-[-40px]",
    appendDots: (dots: any) => (
      <div>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-amber-600 transition-colors duration-200"></div>
    ),
  };

  return (
    <section id="palestrantes" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-6">
            Palestrantes Confirmados
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça os especialistas que vão compartilhar sua expertise técnica e científica no nosso Fórum! Eles são referência na área e trazem experiências que vão enriquecer cada debate. Confira os nomes já confirmados e prepare-se para aprender com os melhores!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 sm:px-12 pb-16">
          <Slider {...settings}>
            {speakers.map((speaker, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-amber-600/50 h-full">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden bg-gray-200">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Specialty Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          {speaker.specialty}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {speaker.name}
                      </h3>
                      <p className="text-amber-600 font-medium mb-2">
                        {speaker.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {speaker.institution}
                      </p>

                      {/* Social Link */}
                      <button className="flex items-center gap-2 text-blue-900 hover:text-amber-600 transition-colors duration-200 text-sm font-medium">
                        <Linkedin className="h-4 w-4" />
                        Ver perfil
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* More Speakers CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            E muitos outros especialistas renomados...
          </p>
          <p className="text-gray-600">
            A lista completa de palestrantes será divulgada em breve
          </p>
        </motion.div>
      </div>

      <style>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li {
          margin: 0;
        }
        .slick-dots li.slick-active div {
          background-color: #d97706;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}