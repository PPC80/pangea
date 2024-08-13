"use client"; // Ensure this line is at the top for client-side rendering

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1 // Ensure only one item is shown per slide
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
        <Image src="/1.png" alt="Description 1" layout="responsive" width={800} height={600} />
      </div>
      <div className="carousel-item-content">
        <Image src="/2.png" alt="Description 2" layout="responsive" width={800} height={600} />
      </div>
      <div className="carousel-item-content">
        <Image src="/3.png" alt="Description 3" layout="responsive" width={800} height={600} />
      </div>

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


