import React from 'react';
import { Hero, Navbar, TestimonialSection, TourCardSection } from "@/components";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from '../components/CarouselComponent';
import Slider from '../components/Slider';
import EmblaCarousel from '@/components/EmblaCarousel';
import SimpleSlider from '@/components/Slick';
import ImageSlider from "@/components/ImageSlider";
import Card from '@/components/Card';



export default function Home() {


  return (
    <main>
      <Navbar/>
      <div
        style={{
          width: "100%",
          aspectRatio: "2.5 / 1",
          margin: "0 auto",
        }}
        className='shapedividers_com-7909'
    >
      <ImageSlider />
      </div>
      <Hero/>
      <TourCardSection/>
      <TestimonialSection/>
    </main>
  );
}
