import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logoEvento from 'figma:asset/0554e9d256dd9a08a8a3fe4a05cafdf264f28e05.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <img 
                src={logoEvento} 
                alt="I Fórum Nacional IGEL & SOBREA" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uma realização conjunta do Instituto Gaúcho de Engenharia Legal e de Avaliações e da 
              Sociedade Brasileira de Engenharia de Avaliações.
            </p>
          </div>

          {/* IGEL */}
          <div>
            <h4 className="text-lg font-semibold mb-6">IGEL</h4>
            <p className="text-gray-400 text-sm mb-4">
              Instituto Gaúcho de Engenharia Legal e de Avaliações
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                contato@igel.org.br
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                /igel-brasil
              </a>
            </div>
          </div>

          {/* SOBREA */}
          <div>
            <h4 className="text-lg font-semibold mb-6">SOBREA</h4>
            <p className="text-gray-400 text-sm mb-4">
              Sociedade Brasileira de Engenharia de Avaliações
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                contato@sobrea.org.br
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                /sobrea-brasil
              </a>
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informações do Evento</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>Canela, Rio Grande do Sul</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>5, 6 e 7 de Agosto de 2026</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Redes Sociais</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 IGEL & SOBREA. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}