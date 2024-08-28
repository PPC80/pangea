import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
  return (
    <div>
        <TestimonialCard
            testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado! '
            touristName='Mark'
            travelDestination="Brasil"
            tripDate='02/2024'
            imageUrl='/client1.jpg'
            imageAlt='Testimonio1'
            ratingImageUrl='/ratings5.png'
        />
    </div>
  )
}

export default TestimonialSection