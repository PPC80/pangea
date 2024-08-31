import React from 'react'
import Image from 'next/image'
import { TestimonialCardProps } from '@/types';

const TestimonialCard = ({testimonial, touristName, travelDestination, tripDate, imageUrl, imageAlt, ratingImageUrl}: TestimonialCardProps) => {
  return (
    <div className="*bg-red-500 flex flex-col w-full h-[350px] max-w-[350px] overflow-hidden rounded-3xl shadow-lg">
      <div className='bg-blue-300 relative flex-grow ' style={{ flex: '0 0 50%' }}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="*bg-green-600 flex-grow flex items-center justify-center pt-4" style={{ flex: '0 0 15%' }}>
        <Image
          src={ratingImageUrl}
          alt="Rating"
          width={130}
          height={13}
          className="object-contain"
        />
      </div>

      <div className="*bg-yellow-400 flex-grow flex flex-col items-center justify-center pointer-events-none" style={{ flex: '0 0 35%' }}>
        <p className="text-l text-black mb-1 text-center font-light"> &quot;{testimonial}&quot; </p>
        <p className="text-sm text-black text-center font-extralight"> -{touristName} </p>
        <p className="text-sm text-black text-center font-extralight"> Viaje a {travelDestination} - {tripDate} </p>
      </div>
    </div>
  )
}

export default TestimonialCard


