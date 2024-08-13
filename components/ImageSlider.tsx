"use client"

import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

type ImageType = {
  src: string;
  alt: string;
};

const images: ImageType[] = [
  { src: "/Hero 1.png", alt: "Car One" },
  { src: "/Hero 2.png", alt: "Car Two" },
  { src: "/Hero 3.png", alt: "Car Three" }
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
    <section aria-label="Image Slider" style={{ width: "100%", height: "100%", position: "relative" }}>
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
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
  );
}

{/* <img
        src="/wavesOpacity.svg"
        alt=""
        className="waves"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: 1,
        }}
      /> */}