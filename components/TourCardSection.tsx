import React from 'react'
import Card from './Card'

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
    <div className='flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 mt-12 md:mt-24'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-[1440px] justify-between'>
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
        {/* <Card
    title='Medellín'
    tourDurationNights={25}
    tourDurationDays={24}
    imageUrl='/medellin.jpg'
    imageAlt='rio de janeiro imagen'
/> */}
    </div>

  )
}

export default TourCardSection

