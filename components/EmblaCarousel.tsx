"use client"

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";
import TestimonialCard from './TestimonialCard';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <TestimonialCard
              testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
              touristName='Mark'
              travelDestination="Brasil"
              tripDate='02/2024'
              imageUrl='/client1.jpg'
              imageAlt='Testimonio1'
              ratingImageUrl='/ratings5.png'
          />
        </div>
        <div className="embla__slide">
          <TestimonialCard
              testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
              touristName='Mark'
              travelDestination="Brasil"
              tripDate='02/2024'
              imageUrl='/client2.jpg'
              imageAlt='Testimonio1'
              ratingImageUrl='/ratings5.png'
          />
        </div>
        <div className="embla__slide">
          <TestimonialCard
              testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
              touristName='Mark'
              travelDestination="Brasil"
              tripDate='02/2024'
              imageUrl='/client3.jpg'
              imageAlt='Testimonio1'
              ratingImageUrl='/ratings5.png'
          />
        </div>
      </div>
    </div>
  );
}
