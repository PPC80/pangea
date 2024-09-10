import React from 'react'
import Responsive from './ui/TestimonialCarousel'
import SectionTitle from './ui/SectionTitle'

const TestimonialSection = () => {
  return (
    <section className="outer-section relative bg-gradient-to-br from-primary-blue to-primary-green">
      <div className="absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-white via-transparent to-transparent"></div>
      <div className="absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-white via-transparent to-transparent"></div>
      <div className="inner-section px-4">
        <div className="relative mt-12 w-full items-center pb-14">
          <SectionTitle
            title="Testimonios"
            subtitle="¿Qué dice la gente sobre nuestros tours?"
            titleStyles="text-white"
            subtitleStyles="text-white"
          />
          <Responsive />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pt-4">
          <div className="shapedividers_com-7693"></div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
