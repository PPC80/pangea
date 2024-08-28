import React from 'react'
import Card from './Card'

const TourCardSection = () => {
  return (
    <div className='flex flex-col gap-8 items-center px-12 mt-24'>
        <div className='flex flex-row gap-8 w-full max-w-[1440px] justify-between'>
            <Card
                title='Río de Janeiro'
                tourDurationNights={5}
                tourDurationDays={4}
                imageUrl='/rio.jpg'
                imageAlt='rio de janeiro imagen'
            />
            <Card
                title='Buenos Aires'
                tourDurationNights={3}
                tourDurationDays={2}
                imageUrl='/buenosaires.jpg'
                imageAlt='rio de janeiro imagen'
            />
            <Card
                title='Lima'
                tourDurationNights={6}
                tourDurationDays={5}
                imageUrl='/lima.jpg'
                imageAlt='rio de janeiro imagen'
            />
        </div>

        <div className='flex flex-row gap-8 w-full max-w-[1440px] justify-between'>
            <Card
                title='Galápagos'
                tourDurationNights={8}
                tourDurationDays={7}
                imageUrl='/galapagos.jpg'
                imageAlt='rio de janeiro imagen'
            />
            <Card
                title='Caza Auroras'
                tourDurationNights={10}
                tourDurationDays={9}
                imageUrl='/auroras.jpg'
                imageAlt='rio de janeiro imagen'
            />
            <Card
                title='Medellín'
                tourDurationNights={25}
                tourDurationDays={24}
                imageUrl='/medellin.jpg'
                imageAlt='rio de janeiro imagen'
            />
        </div>
    </div>
    
  )
}

export default TourCardSection