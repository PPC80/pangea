"use client";

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className='flex flex-row px-72 py-36'>
        <div className='flex-1 w-1/2 bg-orange-400* space-y-4'>
            <h1 className='font-extrabold text-4xl'>
                Viaja, Conoce, Disfruta
            </h1>

            <p className='text-base'>
                Somos tu agencia de viajes de confianza, conoce el mundo con nosotros. <br/>
                Explora destinos extraordinarios y crea recuerdos inolvidables!
            </p>

            <CustomButton 
                title="Explora nuestros tours"
                containerStyles="bg-primary-green text-black text-xs font-semibold rounded"
                handleClick={handleScroll}
            />

            <div className='pl-60'>
                <Image src="/plane-dotted-path.png" alt='hero image' width={300} height={271} className='object-contain'/>
            </div>
        </div>

        <div className='w-1/2 flex justify-center items-center  bg-red-600*'>
            <div className='hero__image'>
                <Image src="./travel-illus.svg" alt='hero image' width={556} height={398} className='object-contain max-w-full max-h-full'/>

                
            </div>
        </div>
    </div>
  )
}

export default Hero