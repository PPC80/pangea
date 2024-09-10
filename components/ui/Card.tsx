import React from 'react'
import Image from "next/image"
import { CardProps } from '@/types';

const Card = ({title, tourDurationNights, tourDurationDays, imageUrl, imageAlt}: CardProps) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%] sm:pb-[65%] md:pb-[65%] lg:pb-[70%] xl:pb-[80%] 2xl:pb-[80%] max-w-[300px] xxssc:max-w-[360px] xssc:max-w-[400px] mdsc:max-w-[800px] lgsc:max-w-[800px] mx-auto overflow-hidden rounded-lg shadow-lg group">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="transition-transform duration-200 group-hover:scale-110 pointer-events-none"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />

        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sm sm:text-base text-white">{tourDurationNights} Noches, {tourDurationDays} Días</p>
        </div>
    </div>
  );
}

export default Card
