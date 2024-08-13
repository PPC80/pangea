"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    // { src: '/Hero 1.png', alt: 'Slide 1' },
    // { src: '/Hero 2.png', alt: 'Slide 2' },
    // { src: '/Hero 3.png', alt: 'Slide 3' },
    // { src: '/Hero 4.png', alt: 'Slide 4' }
    { src: '/2.png', alt: 'Slide 1' },
    { src: '/1.png', alt: 'Slide 2' },
    { src: '/3.png', alt: 'Slide 3' },
    // Add more slides as needed
  ];

  const totalSlides = slides.length;

  const showSlide = (index: number) => {
    if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 500000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <Image src={slide.src} alt={slide.alt} width={800} height={600} layout="responsive" />
          </div>
        ))}
      </div>
      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active-dot' : ''}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;



