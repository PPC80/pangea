import React from 'react';
import { Hero, Navbar, TestimonialSection, TourCardSection } from "@/components";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <ImageSlider />
      <Hero/>
      <TourCardSection/>
      <TestimonialSection/>        
    </main>
  );
}
