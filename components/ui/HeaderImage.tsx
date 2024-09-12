import React from 'react'
import Image from 'next/image'

const HeaderImage = () => {
  return (
    <div className="relative mt-[90px] smsc:mt-[110px] w-full aspect-[3/1] smsc:aspect-[8/1]">
      <Image
        src="/pangeaheader.png"
        alt="Pangea Travel Logo"
        fill
        sizes='(max-width: 768px) 100vw, 900px'
        priority
        className='object-cover'
      />
    </div>
  )
}

export default HeaderImage
