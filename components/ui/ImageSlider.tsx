"use client"

import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import Link from "next/link";

type ImageType = {
  src: string;
  alt: string;
};

const images: ImageType[] = [
  { src: "/Hero 1.png", alt: "Tour Image Slide 1" },
  { src: "/Hero 2.png", alt: "Tour Image Slide 2" },
  { src: "/Hero 3.png", alt: "Tour Image Slide 3" }
];

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0">
        <div className='shapedividers_com-5787'></div> 

      </div>
        <section aria-label="Image Slider" style={{ width: "100%", height: "100%", position: "relative" }}>

        <Link href="#after-image-slider-controls" className="skip-link">
          Skip Image Slider Controls
        </Link>

        <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
          {images.map(({ src, alt }, index) => (
            <img
              key={src}
              src={src}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>

        <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }} aria-label="View Previous Image">
          <ArrowBigLeft aria-hidden />
        </button>

        <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }} aria-label="View Next Image">
          <ArrowBigRight aria-hidden />
        </button>

        <div style={{ position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem" }}>
          {images.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
            </button>
          ))}
        </div>

        <div id="after-image-slider-controls" />

        </section>
    </div>  
  );
}