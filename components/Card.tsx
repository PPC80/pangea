import React from 'react'
import Image from 'next/image'
import { CardProps } from '@/types';


const Card = ({title, tourDurationNights, tourDurationDays, imageUrl, imageAlt}: CardProps) => {
  return (
    
    <div className="relative w-full h-0 pb-[35%] max-w-[450px] overflow-hidden rounded-lg shadow-lg group">
        <Image
        src={imageUrl}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-200 group-hover:scale-110 pointer-events-none"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-white">{tourDurationNights} Noches, {tourDurationDays} Días</p>
        </div>
    </div>

  )
}

export default Card