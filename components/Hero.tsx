"use client";

import React from 'react'
import Image from "next/image"
import CustomButton from './ui/CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }

  return (
      <section className='flex flex-col sm:flex-row w-full justify-center items-center px-5 sm:px-12 mt-24 sm:space-x-12'>
          <div className='flex-1 flex flex-col items-center md:items-start justify-center sm:w-1/2 bg-orange-400* max-w-[600px] space-y-4'>
              <h1 className='font-extrabold text-3xl sm:text-4xl text-center sm:text-left'>
                  Viaja, Conoce, Disfruta
              </h1>

              <p className='text-base text-center sm:text-left'>
                  Somos tu agencia de viajes de confianza, conoce el mundo con nosotros. <br/>
                  Explora destinos extraordinarios y crea recuerdos inolvidables!
              </p>

              <CustomButton 
                  title="Explora nuestros tours"
                  containerStyles="bg-primary-green text-black text-xs font-semibold rounded max-w-[180px]"
                  handleClick={handleScroll}
              />

              <div className='pl-60 hidden lg:block'>
                  <Image
                      src="/plane-dotted-path.png"
                      alt='hero image'
                      width={300}
                      height={271}
                      className='object-contain'
                      style={{
                          maxWidth: "100%",
                          height: "auto"
                      }} />
              </div>
          </div>

          <div className='w-1/2 flex justify-center items-center max-w-[600px] mt-6 sm:mt-0'>
              <div className='hero__image'>
                  <Image
                      src="./travel-illus.svg"
                      alt='hero image'
                      width={556}
                      height={398}
                      className='object-contain max-w-full max-h-full'
                      style={{
                          maxWidth: "100%",
                          height: "auto"
                      }} />
              </div>
          </div>
      </section>
  );
}

export default Hero