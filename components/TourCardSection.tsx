import React from 'react'
import Card from './ui/Card'
import SectionTitle from './ui/SectionTitle'
import CustomButton from './ui/CustomButton'

const TourCardSection = () => {

    const tours = [
        { title: 'Río de Janeiro', nights: 5, days: 4, imageUrl: '/rio.jpg', imageAlt: 'Río de Janeiro imagen' },
        { title: 'Buenos Aires', nights: 3, days: 2, imageUrl: '/buenosaires.jpg', imageAlt: 'Buenos Aires imagen' },
        { title: 'Lima', nights: 6, days: 5, imageUrl: '/lima.jpg', imageAlt: 'Lima imagen' },
        { title: 'Galápagos', nights: 8, days: 7, imageUrl: '/galapagos.jpg', imageAlt: 'Galápagos imagen' },
        { title: 'Caza Auroras', nights: 10, days: 9, imageUrl: '/auroras.jpg', imageAlt: 'Auroras imagen' },
        { title: 'Medellín', nights: 25, days: 24, imageUrl: '/medellin.jpg', imageAlt: 'Medellín imagen' },
      ]

  return (
    <section className='outer-section *h-auto flex flex-col items-center *px-5 *sm:px-6 *md:px-8 *lg:px-12 *mt-20 *md:mt-24'>
        <div className='inner-section flex flex-col h-auto items-center'>
          <SectionTitle
            title='Destinos Internacionales'
            subtitle='Viajes que no te puedes perder'
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-[1440px] justify-between'>
              {tours.map((tour, index) => (
                  <Card
                      key={index}
                      title={tour.title}
                      tourDurationNights={tour.nights}
                      tourDurationDays={tour.days}
                      imageUrl={tour.imageUrl}
                      imageAlt={tour.imageAlt}
                  />
              ))}
          </div>

          <div className='mt-8'>
            <CustomButton
              title="Explora todos los destinos"
              containerStyles="bg-primary-green text-black text-xs font-semibold rounded max-w-[200px]"
            />
          </div>
          
        </div>
    </section>
  )
}

export default TourCardSection

