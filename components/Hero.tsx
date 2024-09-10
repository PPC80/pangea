'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './ui/CustomButton'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <section className="outer-section mt-14 w-full items-center justify-center *px-5 *sm:flex-row *sm:space-x-12 *sm:px-12 *lg:mt-24">
      <div className="inner-section flex flex-col md:flex-row justify-center items-center">
        <div className="flex *max-w-[600px] flex-1 flex-col items-center justify-center space-y-4 md:w-1/2 md:items-start">
          <h1 className="text-center text-3xl font-extrabold sm:text-left sm:text-4xl">
            Viaja, Conoce, Disfruta
          </h1>

          <p className="text-center text-lg sm:text-left lg:text-base">
            Somos tu agencia de viajes de confianza, conoce el mundo con
            nosotros. <br />
            Explora destinos extraordinarios y crea recuerdos inolvidables!
          </p>

          <CustomButton
            title="Explora nuestros tours"
            containerStyles="bg-primary-green text-black text-xs font-semibold rounded max-w-[180px]"
            handleClick={handleScroll}
          />

          <div className="hidden pl-60 lg:block">
            <Image
              src="/plane-dotted-path.png"
              alt="hero image"
              width={300}
              height={271}
              className="object-contain"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>

        <div className="mt-6 flex md:w-1/2 max-w-[300px] md:max-w-full items-center justify-center sm:mt-0">
          <div className="hero__image">
            <Image
              src="./travel-illus.svg"
              alt="hero image"
              width={556}
              height={398}
              className="max-h-full max-w-full object-contain"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
