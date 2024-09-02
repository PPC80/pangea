import React from 'react'
import CustomButton from './ui/CustomButton'

const VideoSection = () => {
  return (
    <section className='relative w-full h-[400px] overflow-hidden mt-12 md:mt-24'>
        <div className="relative w-full h-full">
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-10'></div>
            <video
                src='/videobg.mp4'
                autoPlay
                loop
                muted
                className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='relative z-10 text-white flex flex-col items-center justify-center h-full gap-6'>
                <h2 className='font-extrabold text-3xl text-center'>Descubre el mundo con nosotros</h2>
                
                <CustomButton
                    title='Explora todos los destinos'
                    containerStyles='bg-primary-green text-black text-xs font-semibold rounded max-w-[200px]'
                    btnType='button'
                />
            </div>
        </div>
    </section>
  )
}

export default VideoSection