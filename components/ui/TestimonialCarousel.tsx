"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

function Responsive() {
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
      imageAlt: 'Testimonio1',
      ratingImageUrl: '/ratings5.png'
    },
    {
      testimonial: 'Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!',
      touristName: 'Mark',
      travelDestination: 'Brasil',
      tripDate: '02/2024',
      imageUrl: '/client3.jpg',
      imageAlt: 'Testimonio1',
      ratingImageUrl: '/ratings5.png'
    },
    {
      testimonial: 'Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!',
      touristName: 'Mark',
      travelDestination: 'Brasil',
      tripDate: '02/2024',
      imageUrl: '/client4.jpg',
      imageAlt: 'Testimonio1',
      ratingImageUrl: '/ratings5.png'
    },
    {
      testimonial: 'Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!',
      touristName: 'Mark',
      travelDestination: 'Brasil',
      tripDate: '02/2024',
      imageUrl: '/client5.jpg',
      imageAlt: 'Testimonio1',
      ratingImageUrl: '/ratings5.png'
    },
    {
      testimonial: 'Me encantó el viaje! Recomendado! Me encantó el viaje! Recomendado!',
      touristName: 'Mark',
      travelDestination: 'Brasil',
      tripDate: '02/2024',
      imageUrl: '/client6.jpg',
      imageAlt: 'Testimonio1',
      ratingImageUrl: '/ratings5.png'
    }
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    accessibility: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial.testimonial}
            touristName={testimonial.touristName}
            travelDestination={testimonial.travelDestination}
            tripDate={testimonial.tripDate}
            imageUrl={testimonial.imageUrl}
            imageAlt={testimonial.imageAlt}
            ratingImageUrl={testimonial.ratingImageUrl}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;

