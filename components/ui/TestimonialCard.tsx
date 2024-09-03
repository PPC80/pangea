import React from 'react';
import Image from "next/image";
import { TestimonialCardProps } from '@/types';

const TestimonialCard = ({ testimonial, touristName, travelDestination, tripDate, imageUrl, imageAlt, ratingImageUrl }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col w-full max-w-[400px] sm:max-w-md md:max-w-md lg:max-w-md mx-auto mb-6 overflow-hidden rounded-3xl shadow-lg">
      {/* Image Section */}
      <div className='relative w-full h-48'>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Rating Section */}
      <div className="bg-white flex items-center justify-center pt-4">
        <Image
          src={ratingImageUrl}
          alt="Rating"
          width={130}
          height={13}
          className="object-contain"
        />
      </div>

      {/* Testimonial Section */}
      <div className="bg-white flex flex-col items-center justify-center p-4">
        <p className="text-lg text-black mb-1 text-center font-light"> &quot;{testimonial}&quot; </p>
        <p className="text-sm text-black text-center font-extralight"> -{touristName} </p>
        <p className="text-sm text-black text-center font-extralight"> Viaje a {travelDestination} - {tripDate} </p>
      </div>
    </div>
  );
}

export default TestimonialCard;



