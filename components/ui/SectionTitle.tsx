import { SectionTitleProps } from '@/types'
import React from 'react'

const SectionTitle = ({title, subtitle, subtitleStyles, titleStyles}: SectionTitleProps) => {
  return (
    <div className='flex flex-col text-center gap-2 mb-8 lg:mb-16'>
        <h2 className={`font-extrabold text-2xl lg:text-xl ${titleStyles}`}> {title} </h2>
        <p className={`font-light text-l lg:text-sm ${subtitleStyles}`}> {subtitle} </p>
        <div className="flex items-center justify-center">
            <div className="border-t border-gray-400 w-28"></div>
        </div>
    </div>
  )
}

export default SectionTitle