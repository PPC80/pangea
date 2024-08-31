"use client"; // Ensure this line is at the top for client-side rendering

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import TestimonialCard from './TestimonialCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // Enables server-side rendering
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >

      <div className="carousel-item-content">
      <TestimonialCard
            testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
            touristName='Mark'
            travelDestination="Brasil"
            tripDate='02/2024'
            imageUrl='/client1.jpg'
            imageAlt='Testimonio1'
            ratingImageUrl='/ratings5.png'
        />      </div>
      <div className="carousel-item-content">
      <TestimonialCard
            testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
            touristName='Mark'
            travelDestination="Brasil"
            tripDate='02/2024'
            imageUrl='/client2.jpg'
            imageAlt='Testimonio1'
            ratingImageUrl='/ratings5.png'
        />      </div>
      <div className="carousel-item-content">
      <TestimonialCard
            testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
            touristName='Mark'
            travelDestination="Brasil"
            tripDate='02/2024'
            imageUrl='/client3.jpg'
            imageAlt='Testimonio1'
            ratingImageUrl='/ratings5.png'
        />      </div>
      <div className="carousel-item-content">
      <TestimonialCard
            testimonial='Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!'
            touristName='Mark'
            travelDestination="Brasil"
            tripDate='02/2024'
            imageUrl='/client4.jpg'
            imageAlt='Testimonio1'
            ratingImageUrl='/ratings5.png'
        />      </div>

    </Carousel>
  );
};

export default CarouselComponent;

// const slides = [
//   // { src: '/Hero 1.png', alt: 'Slide 1' },
//   // { src: '/Hero 2.png', alt: 'Slide 2' },
//   // { src: '/Hero 3.png', alt: 'Slide 3' },
//   // { src: '/Hero 4.png', alt: 'Slide 4' }
//   { src: '/1.png', alt: 'Slide 1' },
//   { src: '/2.png', alt: 'Slide 2' },
//   { src: '/3.png', alt: 'Slide 3' },
//   // Add more slides as needed
// ];


