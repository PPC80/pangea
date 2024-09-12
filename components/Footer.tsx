import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-green to-primary-blue px-4 py-8 text-white">
      <div className="inner-section container mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:justify-between smsc:flex-row">
          {/* Logo and Description */}
          <div className="flex-1 space-y-4 md:w-1/3">
            <Image
              src="/logo-white-cr.png"
              alt="Pangea Travel Logo"
              width={300}
              height={20}
            />
            <p className="text-sm">
              Somos tu agencia de viajes confianza para destinos únicos en todo
              el mundo y tours de fútbol
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-200">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-teal-200">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-teal-200">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <address className="flex-1 space-y-4 text-sm md:w-1/3">
            <h3 className="*text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+593 99 99 99 99</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>comercial@pangeatravelecu.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Av. Amazonas y Colón, Edificio España, Piso 4 Of. 48. Quito -
                  Ecuador
                </span>
              </li>
            </ul>
          </address>

          {/* Navigation and Services Combined */}
          <div className="flex-1 text-sm md:w-1/3 md:justify-between md:text-sm smsc:flex smsc:flex-row">
            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-semibold">Navegación</h3>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-teal-200">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-teal-200">
                      Conócenos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-teal-200">
                      Contáctanos
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Our Services */}
            <div className="mt-8 space-y-4 smsc:mt-0">
              <h3 className="*text-lg font-semibold">Nuestros Servicios</h3>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-teal-200">
                      Tours a América
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-teal-200">
                      Tours a Europa
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-teal-200">
                      Tours a Asia
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-teal-200">
                      Tours de Fútbol
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-teal-400 pt-8 text-center text-xs">
          <p>&copy; 2024 Pangea Travel S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer