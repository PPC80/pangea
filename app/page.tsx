import React from 'react';
import ImageSlider from "@/components/ui/ImageSlider";
import WhyUsSection from '@/components/WhyUsSection';
import VideoSection from '@/components/VideoSection';
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TestimonialSection from '@/components/TestimonialSection'
import TourCardSection from '@/components/TourCardSection'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <ImageSlider/>
      <Hero/>
      <TourCardSection/>
      <TestimonialSection/>
      <WhyUsSection/>
      <VideoSection/>
      <Footer/>
    </main>
  );
}
