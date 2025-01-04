"use client";

import React from 'react'
import { CustomButtonProps } from '@/types';


const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-green text-black hover:bg-teal-400 h-10 px-4 py-2 ${containerStyles}`}
        onClick={ () => {} }
    >
        <span>
            {title}
        </span>

    </button>
  )
}

export default CustomButton