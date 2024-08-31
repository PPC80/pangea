import React from 'react'
import TestimonialCard from './TestimonialCard'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './EmblaCarousel'
import Slider from './Slider'
import CarouselComponent from './CarouselComponent'

const TestimonialSection = () => {
    const OPTIONS: EmblaOptionsType = { loop: true }
    
    // Array of testimonial data
    const testimonials = [
        {
            testimonial: 'Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!',
            touristName: 'Mark',
            travelDestination: 'Brasil',
            tripDate: '02/2024',
            imageUrl: '/client1.jpg',
            imageAlt: 'Testimonio1',
            ratingImageUrl: '/ratings5.png'
        },
        {
            testimonial: 'Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!',
            touristName: 'Mark',
            travelDestination: 'Brasil',
            tripDate: '02/2024',
            imageUrl: '/client2.jpg',
            imageAlt: 'Testimonio2',
            ratingImageUrl: '/ratings5.png'
        },
        {
            testimonial: 'Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!',
            touristName: 'Mark',
            travelDestination: 'Brasil',
            tripDate: '02/2024',
            imageUrl: '/client3.jpg',
            imageAlt: 'Testimonio3',
            ratingImageUrl: '/ratings5.png'
        }
    ]

    // Generate slides using map
    const SLIDES = testimonials.map((testimonial, index) => (
        <TestimonialCard
            key={`testimonial-${index}`} // Unique key for each TestimonialCard
            testimonial={testimonial.testimonial}
            touristName={testimonial.touristName}
            travelDestination={testimonial.travelDestination}
            tripDate={testimonial.tripDate}
            imageUrl={testimonial.imageUrl}
            imageAlt={testimonial.imageAlt}
            ratingImageUrl={testimonial.ratingImageUrl}
        />
    ))

    return (
        <div className='flex items-center px-12 mt-24'>
            {/* <EmblaCarousel slides={SLIDES} options={OPTIONS}/> */}
            <CarouselComponent />
        </div>
    )
}

export default TestimonialSection
