import { MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="outer-section flex flex-col bg-gradient-to-t from-primary-blue to-primary-green">
      <div className="inner-section">
        <div className="flex flex-col items-center justify-center gap-8 font-medium md:flex-row">
          <div className="flex flex-col gap-8 md:w-[33.33%]">
            <Image
              src="/logo-white-cr.png"
              alt="Pangea Travel Logo"
              width={300}
              height={20}
            />
            <span className="text-center md:text-left">
              Somos tu agencia de viajes confianza para destinos únicos en todo
              el mundo y tours de fútbol
            </span>
          </div>

          <address className="flex flex-col md:w-[33.33%] gap-3">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/whatsapp-icon.svg"
                alt="WhatsApp Logo"
                width={24}
                height={24}
                className="h-6 w-6 flex-shrink-0"
              />
              <span>+593 99 99 99 99</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Mail className="h-6 w-6 flex-shrink-0" />
              <span>comercial@pangeatravelecu.com</span>
            </div>
            <div className="flex flex-row items-start gap-2">
              {/* Add a fixed width container for the icon */}
              <div className="h-6 w-6 flex-shrink-0">
                <MapPin className="h-full w-full" />
              </div>
              <span className="flex-1">
                Av. Amazonas y Colón, Edificio España, Piso 4 Of. 46. Quito -
                Ecuador
              </span>
            </div>
          </address>

          <div className="flex flex-row md:w-[33.33%]">
            <div className="flex flex-col">
              <h3>Navegación</h3>
              <nav>
                <ul>
                  <li>
                    <a href="/about">Inicio</a>
                  </li>
                  <li>
                    <a href="/services">Conócenos</a>
                  </li>
                  <li>
                    <a href="/contact">Contáctanos</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex flex-col">
              <h3>Nuestros Servicios</h3>
              <nav>
                <ul>
                  <li>
                    <a href="/about">Tours a América</a>
                  </li>
                  <li>
                    <a href="/services">Tours a Europa</a>
                  </li>
                  <li>
                    <a href="/contact">Tours a Asia</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Tours de Fútbol</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-row">
            <Image
              src="/facebook-icon.svg"
              alt="Whatsapp Logo"
              width={20}
              height={20}
            />
            <Image
              src="/instagram-icon.svg"
              alt="Whatsapp Logo"
              width={20}
              height={20}
            />
            <Image
              src="/tiktok-icon.svg"
              alt="Whatsapp Logo"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
