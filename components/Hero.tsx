"use client";

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div>
        <div className=''>
            <h1 className='font-poppins font-extrabold text-4xl'>
                Viaja, Conoce, Disfruta
            </h1>

            <p className='font-poppins text-base'>
                Somos tu agencia de viajes de confianza, conoce el mundo con nosotros. Explora destinos extraordinarios y crea recuerdos inolvidables!
            </p>

            <CustomButton 
                title="Explora nuestros tours"
                containerStyles="bg-primary-green text-black text-xs font-semibold rounded mt-10"
                handleClick={handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero