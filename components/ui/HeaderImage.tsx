import React from 'react'
import Image from 'next/image'

const HeaderImage = () => {
  return (
    <div className="relative mt-28 w-full max-h-[300px]">
      <Image
        src="/pangeaheader.png"
        alt="Pangea Travel Logo" //TODO: IMAGE UNDER NAVBAR RELATIVE BREAKS IT, IMAGE TOO TALL
        layout="fill"

        objectFit="cover"
      />
    </div>
  )
}

export default HeaderImage
