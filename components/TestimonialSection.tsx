import React from 'react'
import Responsive from './ui/TestimonialCarousel'
import SectionTitle from './ui/SectionTitle'

const TestimonialSection = () => {
    return (
        <section className="relative">
            <div className="absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-white via-transparent to-transparent"></div>
            <div className="absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-white via-transparent to-transparent"></div>

            <div className="relative mt-12 w-full items-center bg-gradient-to-br from-primary-blue to-primary-green px-8 py-28 md:pb-48 sm:px-8 md:mt-24 md:px-8 lg:px-10 xl:px-40 2xl:px-52">
                <SectionTitle
                    title="Testimonios"
                    subtitle="¿Qué dice la gente sobre nuestros tours?"
                    titleStyles="text-white"
                    subtitleStyles="text-white"
                />
                <Responsive />

                <div className="absolute bottom-0 left-0 right-0 pt-4">
                    <div className="shapedividers_com-7693"></div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
