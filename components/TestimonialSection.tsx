import React from 'react'
import Responsive from './TestimonialCarousel'
import SectionTitle from './SectionTitle'

const TestimonialSection = () => {
    return (
        <section className="relative">
            <div className='absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-transparent to-transparent z-10'></div>
            <div className='absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-transparent to-transparent z-10'></div>
          
            <div className="bg-gradient-to-br from-primary-blue to-primary-green w-full items-center px-8 sm:px-8 md:px-8 lg:px-12 mt-12 md:mt-24 py-28 pb-60 relative">
            <SectionTitle
              title='Testimonios'
              subtitle='¿Qué dice la gente sobre nuestros tours?'
              titleStyles='text-white'
              subtitleStyles='text-white'
            />
            <Responsive/>

            <div className='absolute bottom-0 left-0 right-0 pt-4'>
                <div className='shapedividers_com-6073'></div>
            </div>
          </div>
        </section>
      )
}

export default TestimonialSection
