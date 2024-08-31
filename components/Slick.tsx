import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image
          src="/1.png"
          alt="Description 1"
          width={800}
          height={600}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </div>
      <div>
         <Image
           src="/1.png"
           alt="Description 1"
           width={800}
           height={600}
           sizes="100vw"
           style={{
             width: "100%",
             height: "auto"
           }} />
      </div>
      <div>
         <Image
           src="/1.png"
           alt="Description 1"
           width={800}
           height={600}
           sizes="100vw"
           style={{
             width: "100%",
             height: "auto"
           }} />
      </div>
    </Slider>
  );
}