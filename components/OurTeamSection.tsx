import Image from 'next/image'

export default function OurTeam() {
  return (
    <section className="outer-section bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="inner-section relative mx-auto px-4">
        <div className="bg-grid-slate-100 absolute inset-0 -z-10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <h2 className="mb-16 text-center text-lg sm:text-3xl font-extrabold text-gray-800">
          Conoce a nuestro <span className="text-primary-green">Equipo</span>
        </h2>
        <div className="mx-auto grid max-w-4xl items-center gap-16 md:grid-cols-2">
          <div className="text-center">
            <div className="relative mb-6 inline-block">
              {/* Container for circular shape */}
              <div className="relative h-[300px] w-[300px]">
                {/* Background blur circle */}
                <div className="absolute inset-0 scale-105 rounded-full bg-primary-green opacity-70 blur-[2px]" />
                {/* Image circle */}
                <Image
                  src="/maleceo.jpg"
                  alt="Sebastian"
                  width={300}
                  height={300}
                  className="relative z-10 h-full w-full rounded-full border-4 border-white object-cover shadow-sm"
                />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-800">Sebastián</h3>
            <p className="mb-4 font-semibold text-primary-green">Gerente General</p>
            <p className="mx-auto max-w-sm text-gray-600">
              Líder visionario con pasión por la inovación, llevando a nuestra
              empresa a nuevos horizontes.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mb-6 inline-block">
              {/* Container for circular shape */}
              <div className="relative h-[300px] w-[300px]">
                {/* Background blur circle */}
                <div className="absolute inset-0 scale-105 rounded-full bg-primary-blue opacity-70 blur-[2px]" />
                {/* Image circle */}
                <Image
                  src="/femalecfo.jpg"
                  alt="Gaby"
                  width={300}
                  height={300}
                  className="relative z-10 h-full w-full rounded-full border-4 border-white object-cover shadow-sm"
                />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-800">Gaby</h3>
            <p className="mb-4 font-semibold text-primary-green">Presidenta</p>
            <p className="mx-auto max-w-sm text-gray-600">
              Líder visionario con pasión por la inovación, llevando a nuestra
              empresa a nuevos horizontes.
            </p>
          </div>
        </div>
        <div className="animate-blob absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-30 mix-blend-multiply blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute left-1/4 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100 opacity-30 mix-blend-multiply blur-xl filter" />

        <div className="mt-20 relative overflow-hidden rounded-xl">
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
              <p className="text-gray-700 mb-4">Permítenos ayudarte a crear recuerdos que duren para siempre</p>
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
