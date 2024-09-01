import React from 'react';
import { Hero, Navbar, TestimonialSection, TourCardSection } from "@/components";
import ImageSlider from "@/components/ImageSlider";
import WhyUsSection from '@/components/WhyUsSection';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <ImageSlider />
      <Hero/>
      <TourCardSection/>
      <TestimonialSection/>
      <WhyUsSection/>
      <VideoSection/>  
    </main>
  );
}
