"use client";

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className='flex flex-row justify-center items-center px-12 py-36 space-x-12'>
        <div className='flex-1 flex flex-col justify-center w-1/2 bg-orange-400* max-w-[600px] space-y-4'>
            <h1 className='font-extrabold text-4xl'>
                Viaja, Conoce, Disfruta
            </h1>

            <p className='text-base'>
                Somos tu agencia de viajes de confianza, conoce el mundo con nosotros. <br/>
                Explora destinos extraordinarios y crea recuerdos inolvidables!
            </p>

            <CustomButton 
                title="Explora nuestros tours"
                containerStyles="bg-primary-green text-black text-xs font-semibold rounded max-w-[180px]"
                handleClick={handleScroll}
            />

            <div className='pl-60'>
                <Image src="/plane-dotted-path.png" alt='hero image' width={300} height={271} className='object-contain'/>
            </div>
        </div>

        <div className='w-1/2 flex justify-center items-center max-w-[600px] bg-red-600*'>
            <div className='hero__image'>
                <Image src="./travel-illus.svg" alt='hero image' width={556} height={398} className='object-contain max-w-full max-h-full'/>

                
            </div>
        </div>
    </div>
  )
}

export default Hero