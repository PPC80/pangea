import Image from "next/image"
import { AboutCard, CardContent, CardHeader, CardTitle } from "@/components/ui/AboutCard"
import { History, Target, Eye, MapPin, Users, Globe } from "lucide-react"

export default function AboutUsSection() {
  return (
    <section className="outer-section bg-gradient-to-b from-background to-secondary/20">
      <div className="inner-section container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre Pangea Travel</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[700px]">
            Inspirando aventuras, creando recuerdos y conectando culturas
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <AboutCard className="overflow-hidden">
            <Image
              src="/aboutus.jpg"
              width={600}
              height={400}
              alt="Historia de Pangea Travel"
              className="object-cover w-full h-[300px]"
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5" />
                Nuestra Historia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
              Fundada en 2023, Pangea Travel nació con el sueño de hacer que cada viaje sea una experiencia única e inolvidable. A pesar de ser una agencia joven, en poco tiempo hemos logrado posicionarnos como referentes en el mundo del turismo, acompañando a cientos de viajeros en la creación de momentos especiales alrededor del mundo.
              </p>
            </CardContent>
          </AboutCard>

          <div className="grid gap-6">
            <AboutCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Nuestra Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                Inspirar y permitir que las personas exploren el mundo, amplíen sus horizontes y creen conexiones duraderas entre culturas. Nos esforzamos por ofrecer experiencias de viaje excepcionales que sean tanto enriquecedoras como sostenibles.
                </p>
              </CardContent>
            </AboutCard>

            <AboutCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Nuestra Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                Imaginamos un mundo donde los viajes sean una fuerza positiva que promueva la comprensión, la conservación y el crecimiento personal. Nuestro objetivo es ser el socio de viajes más confiable e innovador, evolucionando continuamente para satisfacer las necesidades cambiantes de los viajeros modernos.
                </p>
              </CardContent>
            </AboutCard>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: MapPin, title: "250+ Destinos", description: "Explora nuestro diverso rango de destinos" },
            { icon: Users, title: "50,000+ Viajeros Contentos", description: "Únete a nuestra comunidad de viajeros satisfechos!" },
            { icon: Globe, title: "Soporte 24/7", description: "Estamos aquí para ti, donde sea, a la hora que sea" },
          ].map((item, index) => (
            <AboutCard key={index}>
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="p-2 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </AboutCard>
          ))}
        </div>

        <div className="mt-12 relative overflow-hidden rounded-xl">
          <Image
            src="/landscape1.jpg"
            width={1200}
            height={400}
            alt="Pangea Travel Destinos"
            className="object-cover w-full h-[300px] md:h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-background/10 flex items-center">
            <div className="p-14">
              <h3 className="text-2xl font-bold mb-2">Comienza tu aventura hoy</h3>
              <p className="text-muted-foreground mb-4">Permítenos ayudarte a crear recuerdos que duren para siempre</p>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-green text-black hover:bg-teal-400 h-10 px-4 py-2">
                Explora nuestros destinos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}