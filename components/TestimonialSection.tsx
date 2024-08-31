import React from 'react'
import TestimonialCard from './TestimonialCard'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './EmblaCarousel'
import Slider from './Slider'
import CarouselComponent from './CarouselComponent'


const TestimonialSection = () => {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 3
    const SLIDES = [
        <TestimonialCard
            testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
            touristName='Mark'
            travelDestination="Brasil"
            tripDate='02/2024'
            imageUrl='/client1.jpg'
            imageAlt='Testimonio1'
            ratingImageUrl='/ratings5.png'
        />,
        <TestimonialCard
            testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
            touristName='Mark'
            travelDestination="Brasil"
            tripDate='02/2024'
            imageUrl='/client2.jpg'
            imageAlt='Testimonio1'
            ratingImageUrl='/ratings5.png'
        />,
        <TestimonialCard
            testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
            touristName='Mark'
            travelDestination="Brasil"
            tripDate='02/2024'
            imageUrl='/client3.jpg'
            imageAlt='Testimonio1'
            ratingImageUrl='/ratings5.png'
        />,
      ]

  return (
    <div className='flex items-center px-12 mt-24'>
        {/* <EmblaCarousel slides={SLIDES} options={OPTIONS}/> */}
        <CarouselComponent/>
    </div>
  )
}

export default TestimonialSection