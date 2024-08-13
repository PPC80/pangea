import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image
                    src="/logo-white.png"
                    alt="Pangea Travel Logo"
                    width={334}
                    height={105}
                    className='object-contain'
                />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar