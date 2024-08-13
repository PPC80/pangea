"use client"

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <Image src="/1.png" alt="Description 1" layout="responsive" width={800} height={600} />
        </div>
        <div className="embla__slide">
            <Image src="/2.png" alt="Description 2" layout="responsive" width={800} height={600} />
        </div>
        <div className="embla__slide">
            <Image src="/3.png" alt="Description 3" layout="responsive" width={800} height={600} />
        </div>
      </div>
    </div>
  );
}
